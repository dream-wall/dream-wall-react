import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Loading from '../../components/loading';

import { post } from '../util/http';

const DreamItem = ({ dream }) => (
  <li className="dw-dream__item">
    <div className="dw-dream__wrap">
      <img className="dw-dream__image" src={`http://p4r610a81.bkt.clouddn.com/${dream.img_url}`} alt={dream.dream_name} />
      <h3 className="dw-dream__title">{dream.dream_name}</h3>
      <h4 className="dw-dream__user">{dream.dream_person}</h4>
      <p className="dw-dream__time">达成时间：{dream.plan_time}</p>
      <p className="dw-dream__task"><span>子任</span>务：{dream.task_nums}个</p>
      <p className="dw-dream__percent"><span>完成</span>度：{dream.complete_percentage}%</p>
      <p className="dw-dream__count">
        <span className="dw-dream__picture iconfont icon-eye"> {dream.watcher_nums}</span>
        <span className="dw-dream__view iconfont icon-picture"> {dream.pic_nums}</span>
      </p>
      {
        dream.watcher_nums > 10000 ?
          <div className="dw-dream__hoting2" v-if="">
            <span className="dw-dream__hoting2--text">HOT</span>
            <span className="dw-dream__hoting2--white" />
          </div> :
          ''
      }
    </div>
  </li>
);

DreamItem.propTypes = {
  dream: PropTypes.object.isRequired,
};

class Dream extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      dreams: [],
      page: 1,
      row: 12,
      sort: '',
      end: false,
      loading: false,
      more: false,
      effect: Math.ceil(Math.random() * 10),
    };
    this.getMoreDreams = this.getMoreDreams.bind(this);
  }

  componentDidMount() {
    this.getDreams();
  }

  getDreams({ page = 1, row = 12, sort = 'last' } = {}) {
    const { sort: oldSort, end: oldEnd } = this.state;
    if (page === 1 && sort === oldSort) return; // 如果请求的是第一页 && 请求的是同一类别
    if (oldEnd && sort === oldSort) return; // 如果请求到最后一页 && 请求的是同一类别（最新或最热）
    if (sort !== oldSort) { // 请求的是不同类别（说明做了切换最新和最热）
      // this.sort = sort;
      // this.end = false;
      // this.page = 1;
      this.setState({
        sort,
        end: false,
        page: 1,
      });
    }
    if (page === 1) { // 首次加载动画
      this.setState({
        loading: true,
      });
    } else { // 体验更多梦想加载动画
      this.setState({
        more: true,
      });
    }
    post('dreams', {
      current_page: page,
      page_size: row,
      sort,
    }).then((res) => {
      if (Math.ceil(res.result.count / this.state.row) === page) {
        this.setState({
          end: true,
        });
      }
      if (page === 1) {
        this.setState({
          dreams: res.result.rows,
          loading: false,
        });
      } else {
        this.state.dreams.push(...res.result.rows);
        this.setState({
          dreams: this.state.dreams,
          more: false,
        });
      }
    });
  }

  getMoreDreams() {
    const { page, row, sort } = this.state;
    const nextPage = page + 1;
    this.setState({
      page: nextPage,
    });
    this.getDreams({ page: nextPage, row, sort });
  }

  render() {
    const {
      sort, row, dreams, loading, end, more, effect,
    } = this.state;

    return (
      <div className="dw-dream">
        <div className="dw-dream__hero">
          <h1 className="dw-dream__logo">梦想墙</h1>
          <div className="dw-dream__wtf">
            <p className="dw-dream__wisdom">来到这里，每天早晨叫醒我们的将不是闹铃，而是梦想！</p>
            <p className="dw-dream__slogan">这面墙，是一个梦想开始的地方。在这里，你将邂逅到所有美丽的梦想...</p>
          </div>
          <div className="dw-dream__tags">
            <span
              className={`dw-dream__lastest ${sort === 'last' ? 'dw-dream__tags--active' : ''}`}
              onClick={() => { this.getDreams({ page: 1, row, sort: 'last' }); }}
            >最新
            </span>
            <span
              className={`dw-dream__hot ${sort === 'pop' ? 'dw-dream__tags--active' : ''}`}
              onClick={() => { this.getDreams({ page: 1, row, sort: 'pop' }); }}
            >热门
            </span>
          </div>
        </div>
        {
          dreams.length > 0 && !loading ?
            [
              <ul className="dw-dream__list" key="list">
                {
                  dreams.map(item => <DreamItem dream={item} key={item.id} />)
                }
              </ul>,
              !end || more ?
                <div className="dw-dream__more" onClick={this.getMoreDreams} key="more">
                  {
                    !more ? '体验更多梦想' : <Loading effect={effect} />
                  }
                </div> :
                <div className="dw-dream__endline" key="endline">------ 我也是有底线的 ------</div>,
            ] : <Loading effect={effect} />
        }
      </div>
    );
  }
}

export default Dream;
