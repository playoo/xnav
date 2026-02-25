// src/components/Moments.jsx
import React, { useState } from 'react';

// 朋友圈核心组件
const Moments = () => {
  // 最简化的数据源 - 无任何复杂语法
  const momentsData = [
    {
      id: 1,
      avatar: 'https://picsum.photos/40/40',
      nickname: '我',
      time: '今天 14:23',
      content: '终于把 MDX 编辑器做完了，记录一下这个小成就 ✨',
      images: [],
      likes: ['张三', '李四'],
      comments: [{ from: '张三', content: '厉害呀！' }, { from: '我', to: '张三', content: '谢谢～' }]
    },
    {
      id: 2,
      avatar: 'https://picsum.photos/40/40',
      nickname: '我',
      time: '昨天 20:45',
      content: '分享一组好看的风景照，周末去爬山拍的～',
      images: ['https://picsum.photos/200/200', 'https://picsum.photos/200/200', 'https://picsum.photos/200/200', 'https://picsum.photos/200/200'],
      likes: ['王五', '赵六', '小七'],
      comments: [{ from: '王五', content: '这是哪里呀？风景好美！' }, { from: '我', to: '王五', content: '是黄山哦，值得一去～' }]
    },
    {
      id: 3,
      avatar: 'https://picsum.photos/40/40',
      nickname: '我',
      time: '3天前',
      content: '今日份咖啡 ☕️ 打工人的续命神器',
      images: ['https://picsum.photos/200/200'],
      likes: ['张三', '小七'],
      comments: []
    },
    {
      id: 4,
      avatar: 'https://picsum.photos/40/40',
      nickname: '我',
      time: '一周前',
      content: '读完了《原子习惯》，分享几句喜欢的话：1. 习惯是自我提升的复利 2. 微小的改变，持续累积会带来巨大的结果 3. 关注系统，而非目标',
      images: [],
      likes: ['李四', '赵六', '张三', '小七'],
      comments: [{ from: '赵六', content: '我也在读，确实不错！' }]
    }
  ];

  // 图片九宫格组件
  const ImageGrid = ({ images }) => {
    const count = images.length;
    let gridStyle = {};

    if (count === 1) {
      gridStyle = { gridTemplateColumns: '1fr', width: '200px', height: '200px' };
    } else if (count === 2 || count === 4) {
      gridStyle = { gridTemplateColumns: '1fr 1fr', gap: '4px' };
    } else {
      gridStyle = { gridTemplateColumns: '1fr 1fr 1fr', gap: '4px' };
    }

    return (
      <div style={{ display: 'grid', marginTop: '8px', ...gridStyle }}>
        {images.map((img, idx) => (
          <div key={idx} style={{ width: '100%', height: '100%', borderRadius: '4px', overflow: 'hidden' }}>
            <img src={img} alt={`pic-${idx}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        ))}
      </div>
    );
  };

  // 单条朋友圈组件
  const MomentItem = ({ data }) => {
    const [liked, setLiked] = useState(false);
    const [commentText, setCommentText] = useState('');
    const [showComment, setShowComment] = useState(false);
    const [comments, setComments] = useState(data.comments);

    // 点赞切换
    const toggleLike = () => setLiked(!liked);

    // 提交评论
    const submitComment = (e) => {
      e.preventDefault();
      if (!commentText.trim()) return;
      setComments([...comments, { from: '我', content: commentText.trim() }]);
      setCommentText('');
      setShowComment(false);
    };

    // 合并点赞列表
    const likeList = [...data.likes, liked ? '我' : ''].filter(Boolean);

    return (
      <div style={{ 
        marginBottom: '16px', 
        border: '1px solid #e5e7eb', 
        borderRadius: '8px',
        backgroundColor: 'white',
        padding: '12px 16px'
      }}>
        {/* 头像和昵称 */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <img 
            src={data.avatar} 
            alt={data.nickname} 
            style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '12px' }} 
          />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '16px', fontWeight: 500 }}>{data.nickname}</div>
            <div style={{ fontSize: '12px', color: '#9ca3af' }}>{data.time}</div>
          </div>
          <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
          </button>
        </div>

        {/* 内容 */}
        <div style={{ fontSize: '15px', lineHeight: '1.5', marginBottom: '8px' }}>
          {data.content}
          {data.images.length > 0 && <ImageGrid images={data.images} />}
        </div>

        {/* 互动按钮 */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          marginTop: '8px',
          paddingTop: '8px',
          borderTop: '1px solid #f3f4f6'
        }}>
          <div style={{ display: 'flex', gap: '16px' }}>
            <button 
              onClick={toggleLike}
              style={{ 
                border: 'none', 
                background: 'transparent', 
                color: liked ? '#ed4956' : '#6b7280',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                fontSize: '14px'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill={liked ? '#ed4956' : 'none'} stroke={liked ? '#ed4956' : '#6b7280'} strokeWidth="2" style={{ marginRight: '4px' }}>
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              {liked ? '已赞' : '点赞'}
            </button>
            <button 
              onClick={() => setShowComment(true)}
              style={{ 
                border: 'none', 
                background: 'transparent', 
                color: '#6b7280',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                fontSize: '14px'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" style={{ marginRight: '4px' }}>
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              评论
            </button>
          </div>
        </div>

        {/* 点赞列表 */}
        {likeList.length > 0 && (
          <div style={{ 
            marginTop: '8px', 
            padding: '8px', 
            backgroundColor: '#f9fafb', 
            borderRadius: '4px' 
          }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#ed4956" stroke="#ed4956" strokeWidth="2" style={{ marginRight: '6px' }}>
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <span style={{ fontSize: '13px', color: '#6b7280' }}>{likeList.join('、')}</span>
            </div>
          </div>
        )}

        {/* 评论区 */}
        {comments.length > 0 && (
          <div style={{ marginTop: '8px' }}>
            {comments.map((item, idx) => (
              <div key={idx} style={{ 
                marginBottom: '4px', 
                padding: '6px 8px', 
                backgroundColor: '#f3f4f6', 
                borderRadius: '4px' 
              }}>
                <span style={{ fontSize: '14px' }}>
                  <strong style={{ marginRight: '4px' }}>{item.from}</strong>
                  {item.to && <span style={{ color: '#6b7280', marginRight: '4px' }}>回复 {item.to}：</span>}
                  {item.content}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* 评论输入框 */}
        {showComment && (
          <form onSubmit={submitComment} style={{ marginTop: '8px', display: 'flex' }}>
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="说点什么..."
              style={{ 
                flex: 1, 
                padding: '8px 12px', 
                border: '1px solid #e5e7eb', 
                borderRadius: '20px',
                fontSize: '14px',
                outline: 'none'
              }}
            />
            <button 
              type="submit"
              style={{ 
                marginLeft: '8px',
                border: 'none',
                backgroundColor: '#0884ff',
                color: 'white',
                borderRadius: '20px',
                padding: '8px 16px',
                fontSize: '14px',
                cursor: 'pointer'
              }}
            >
              发送
            </button>
          </form>
        )}
      </div>
    );
  };

  // 主渲染
  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '0 auto', 
      padding: '20px 16px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    }}>
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '24px',
        padding: '16px',
        backgroundColor: 'white',
        borderRadius: '8px'
      }}>
        <h1 style={{ fontSize: '24px', fontWeight: 600, margin: 0 }}>碎碎念</h1>
        <p style={{ color: '#6b7280', margin: '8px 0 0 0' }}>记录生活中的小美好</p>
      </div>
      
      {momentsData.map(item => (
        <MomentItem key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Moments;