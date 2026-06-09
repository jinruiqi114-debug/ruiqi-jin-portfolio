import React, { useState } from 'react';

// 占位图生成函数
const PlaceholderImage = ({ width, height, text }) => (
  <div style={{
    width: '100%',
    height: height || '400px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '18px',
    fontWeight: '500',
    opacity: 0.3
  }}>
    {text || '图片占位'}
  </div>
);

// 导航栏组件
const Navigation = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'research', label: 'Research' },
    { id: 'runway', label: 'Runway' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid #e5e7eb',
      zIndex: 1000,
      padding: '1.5rem 0'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          fontSize: '1.5rem',
          fontWeight: '700',
          letterSpacing: '-0.02em',
          color: '#111827'
        }}>
          靳睿琦
        </div>
        <div style={{ display: 'flex', gap: '2.5rem' }}>
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveSection(item.id);
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                color: activeSection === item.id ? '#111827' : '#6b7280',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: activeSection === item.id ? '600' : '400',
                transition: 'all 0.3s ease',
                letterSpacing: '0.02em'
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

// 首页 Hero Section
const HeroSection = () => (
  <section id="home" style={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(to bottom, #ffffff, #f9fafb)',
    paddingTop: '80px'
  }}>
    <div style={{
      maxWidth: '900px',
      textAlign: 'center',
      padding: '0 2rem'
    }}>
      <div style={{
        width: '140px',
        height: '140px',
        borderRadius: '50%',
        background: '#d1d5db',
        margin: '0 auto 3rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '14px',
        color: '#6b7280'
      }}>
        个人头像
      </div>
      <h1 style={{
        fontSize: '3.5rem',
        fontWeight: '700',
        color: '#111827',
        marginBottom: '1.5rem',
        letterSpacing: '-0.03em',
        lineHeight: '1.1'
      }}>
        靳睿琦<br/>
        <span style={{ fontSize: '2rem', color: '#4b5563', fontWeight: '400' }}>
          Ruiqi Jin
        </span>
      </h1>
      <p style={{
        fontSize: '1.35rem',
        color: '#374151',
        marginBottom: '1rem',
        fontWeight: '500',
        letterSpacing: '0.01em'
      }}>
        视觉文化研究者 × 创意策略师 × 多元创作者
      </p>
      <p style={{
        fontSize: '1.1rem',
        color: '#6b7280',
        lineHeight: '1.8',
        maxWidth: '700px',
        margin: '0 auto'
      }}>
        从传统非遗到AI营销，从学术研究到品牌实践<br/>
        用跨界视角创造文化价值
      </p>
      <div style={{
        marginTop: '3rem',
        display: 'flex',
        gap: '1.5rem',
        justifyContent: 'center'
      }}>
        <a href="#projects" style={{
          padding: '1rem 2.5rem',
          background: '#111827',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          fontSize: '1rem',
          fontWeight: '500',
          transition: 'all 0.3s ease',
          border: '2px solid #111827'
        }}>
          查看作品
        </a>
        <a href="#about" style={{
          padding: '1rem 2.5rem',
          background: 'transparent',
          color: '#111827',
          textDecoration: 'none',
          borderRadius: '8px',
          fontSize: '1rem',
          fontWeight: '500',
          border: '2px solid #111827',
          transition: 'all 0.3s ease'
        }}>
          了解我
        </a>
      </div>
    </div>
  </section>
);

// 精选项目卡片
const ProjectCard = ({ title, subtitle, period, tags, imageText }) => (
  <div style={{
    background: 'white',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    border: '1px solid #e5e7eb'
  }}
  onMouseEnter={e => {
    e.currentTarget.style.transform = 'translateY(-4px)';
    e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
  }}
  onMouseLeave={e => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
  }}>
    <div style={{
      width: '100%',
      height: '280px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '16px',
      fontWeight: '500',
      opacity: 0.3
    }}>
      {imageText}
    </div>
    <div style={{ padding: '2rem' }}>
      <div style={{
        display: 'flex',
        gap: '0.75rem',
        marginBottom: '1rem',
        flexWrap: 'wrap'
      }}>
        {tags.map(tag => (
          <span key={tag} style={{
            padding: '0.35rem 0.9rem',
            background: '#f3f4f6',
            color: '#4b5563',
            fontSize: '0.8rem',
            borderRadius: '6px',
            fontWeight: '500'
          }}>
            {tag}
          </span>
        ))}
      </div>
      <h3 style={{
        fontSize: '1.4rem',
        fontWeight: '700',
        color: '#111827',
        marginBottom: '0.5rem',
        letterSpacing: '-0.01em'
      }}>
        {title}
      </h3>
      <p style={{
        fontSize: '1rem',
        color: '#6b7280',
        marginBottom: '1rem',
        lineHeight: '1.6'
      }}>
        {subtitle}
      </p>
      <p style={{
        fontSize: '0.9rem',
        color: '#9ca3af',
        fontWeight: '500'
      }}>
        {period}
      </p>
    </div>
  </div>
);

// 精选项目区域
const FeaturedProjects = () => {
  const projects = [
    {
      title: '展览活动策划与品牌传播',
      subtitle: '深度理解媒体与品牌的传播逻辑，策划高端活动与文化项目',
      period: '2024 - 至今',
      tags: ['活动策划', '品牌传播', '媒体洞察'],
      imageText: '展览活动封面'
    },
    {
      title: 'Little little 巴黎时装周快闪',
      subtitle: '品牌出海campaign，500+访客，3万+社交曝光',
      period: '2024 - 2025',
      tags: ['品牌出海', '活动策划', '文化传播'],
      imageText: 'Little little 封面'
    },
    {
      title: '缂丝非遗传承与当代转化',
      subtitle: '传统工艺的文化研究与文创设计实践',
      period: '2020 - 2024',
      tags: ['文化研究', '非遗保护', '文创设计'],
      imageText: '缂丝项目封面'
    },
    {
      title: '媒体活动之夜',
      subtitle: '国内外政要参访活动全流程统筹',
      period: '2025',
      tags: ['活动统筹', '品牌传播', '公关策划'],
      imageText: '媒体活动封面'
    }
  ];

  return (
    <section id="projects" style={{
      padding: '8rem 2rem',
      background: '#ffffff'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '1rem',
            letterSpacing: '-0.02em'
          }}>
            精选项目
          </h2>
          <p style={{
            fontSize: '1.15rem',
            color: '#6b7280',
            lineHeight: '1.7'
          }}>
            从品牌营销到文化研究，从策展实践到学术探索
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem'
        }}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

// About 页面
const AboutSection = () => (
  <section id="about" style={{
    padding: '8rem 2rem',
    background: '#f9fafb'
  }}>
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <h2 style={{
        fontSize: '2.5rem',
        fontWeight: '700',
        color: '#111827',
        marginBottom: '3rem',
        letterSpacing: '-0.02em'
      }}>
        关于我
      </h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: '4rem',
        marginBottom: '4rem'
      }}>
        <div>
          <div style={{
            width: '100%',
            aspectRatio: '3/4',
            background: '#d1d5db',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            color: '#6b7280'
          }}>
            个人肖像照
          </div>
        </div>
        <div>
          <div style={{
            fontSize: '1.15rem',
            lineHeight: '2',
            color: '#374151',
            marginBottom: '2rem'
          }}>
            <p style={{ marginBottom: '1.5rem' }}>
              我是靳睿琦，视觉文化研究者与品牌传播策略师。
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              从中央美术学院到巴黎高等商学院，我在艺术与商业之间寻找平衡。作为模特，我直接体验了"被看"的视觉规训与权力机制；作为策展人，我学会了如何组织"观看"的空间叙事；作为品牌策略师，我用这双重视角为品牌构建文化权威。
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              我关心的核心问题是：视觉如何传递权力？品牌如何通过空间设计和身体呈现构建文化认同？传统文化符号如何在当代语境中复活？
            </p>
            <p>
              我的研究方向聚焦于高级时尚中的视觉权力机制（scopic regimes）、品牌符号系统的构建，以及展示空间如何塑造观看体验。目前，我正在准备申请德国的博士项目，继续深化这些问题的研究。
            </p>
          </div>
        </div>
      </div>

      {/* 教育背景 */}
      <div style={{ marginBottom: '4rem' }}>
        <h3 style={{
          fontSize: '1.8rem',
          fontWeight: '700',
          color: '#111827',
          marginBottom: '2rem',
          letterSpacing: '-0.01em'
        }}>
          教育背景
        </h3>
        <div style={{
          background: 'white',
          padding: '2.5rem',
          borderRadius: '12px',
          border: '1px solid #e5e7eb'
        }}>
          <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid #e5e7eb' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '0.75rem'
            }}>
              <h4 style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                color: '#111827'
              }}>
                Paris-Kedge Business School
              </h4>
              <span style={{
                fontSize: '0.95rem',
                color: '#6b7280',
                fontWeight: '500'
              }}>
                2024.09 - 2026.09
              </span>
            </div>
            <p style={{
              fontSize: '1.05rem',
              color: '#4b5563',
              marginBottom: '0.5rem'
            }}>
              创意产业管理与营销 硕士
            </p>
            <p style={{
              fontSize: '0.95rem',
              color: '#6b7280',
              fontStyle: 'italic'
            }}>
              Master in Creative Industries Management & Marketing
            </p>
          </div>
          
          <div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '0.75rem'
            }}>
              <h4 style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                color: '#111827'
              }}>
                中央美术学院 & 法国高等商学院
              </h4>
              <span style={{
                fontSize: '0.95rem',
                color: '#6b7280',
                fontWeight: '500'
              }}>
                2020.09 - 2024.06
              </span>
            </div>
            <p style={{
              fontSize: '1.05rem',
              color: '#4b5563',
              marginBottom: '0.5rem'
            }}>
              艺术设计与管理 & 营销学 双学位本科
            </p>
            <p style={{
              fontSize: '0.95rem',
              color: '#6b7280',
              fontStyle: 'italic',
              marginBottom: '1rem'
            }}>
              B.A. in Art & Design Management and Marketing (Double Degree)
            </p>
            <div style={{
              display: 'flex',
              gap: '1.5rem',
              flexWrap: 'wrap',
              fontSize: '0.95rem',
              color: '#6b7280'
            }}>
              <span>• GPA 3.8/4.0</span>
              <span>• 校二等奖学金</span>
              <span>• 优秀毕业生（排名前10%）</span>
              <span>• 优秀毕业作品</span>
            </div>
          </div>
        </div>
      </div>

      {/* 核心能力 */}
      <div>
        <h3 style={{
          fontSize: '1.8rem',
          fontWeight: '700',
          color: '#111827',
          marginBottom: '2rem',
          letterSpacing: '-0.01em'
        }}>
          核心能力
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2rem'
        }}>
          {[
            { title: '研究能力', items: ['视觉文化理论研究', '品牌符号学分析', '质性研究方法'] },
            { title: '跨学科整合', items: ['艺术史 × 管理学 × 传播学', '理论研究 × 实践应用'] },
            { title: '策展与空间设计', items: ['展览策划与执行', '空间叙事设计', '观众体验优化'] },
            { title: '学术写作', items: ['中英文学术论文', '品牌文化评论', '研究报告撰写'] }
          ].map((skill, index) => (
            <div key={index} style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #e5e7eb'
            }}>
              <h4 style={{
                fontSize: '1.15rem',
                fontWeight: '700',
                color: '#111827',
                marginBottom: '1rem'
              }}>
                {skill.title}
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {skill.items.map((item, i) => (
                  <li key={i} style={{
                    fontSize: '0.95rem',
                    color: '#6b7280',
                    marginBottom: '0.5rem',
                    paddingLeft: '1.25rem',
                    position: 'relative'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      color: '#9ca3af'
                    }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// Research 页面
const ResearchSection = () => (
  <section id="research" style={{
    padding: '8rem 2rem',
    background: '#ffffff'
  }}>
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <h2 style={{
        fontSize: '2.5rem',
        fontWeight: '700',
        color: '#111827',
        marginBottom: '1.5rem',
        letterSpacing: '-0.02em'
      }}>
        学术研究
      </h2>
      <p style={{
        fontSize: '1.15rem',
        color: '#6b7280',
        marginBottom: '4rem',
        lineHeight: '1.7'
      }}>
        通过理论框架和案例分析，探索视觉文化与品牌传播的深层机制
      </p>

      {/* 硕士论文 */}
      <div style={{
        background: '#f9fafb',
        padding: '3rem',
        borderRadius: '12px',
        marginBottom: '3rem',
        border: '1px solid #e5e7eb'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '3rem'
        }}>
          <div>
            <div style={{
              width: '100%',
              aspectRatio: '3/4',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '14px',
              opacity: 0.3
            }}>
              论文封面
            </div>
          </div>
          <div>
            <div style={{
              padding: '0.5rem 1rem',
              background: '#dbeafe',
              color: '#1e40af',
              fontSize: '0.85rem',
              fontWeight: '600',
              borderRadius: '6px',
              display: 'inline-block',
              marginBottom: '1.5rem'
            }}>
              硕士论文
            </div>
            <h3 style={{
              fontSize: '1.6rem',
              fontWeight: '700',
              color: '#111827',
              marginBottom: '0.75rem',
              lineHeight: '1.3',
              letterSpacing: '-0.01em'
            }}>
              To See and to Be Seen: Visual Mechanisms and the Construction of Cultural Authority in Haute Couture
            </h3>
            <p style={{
              fontSize: '1.1rem',
              color: '#4b5563',
              marginBottom: '2rem',
              fontStyle: 'italic'
            }}>
              看与被看：高级时装中的视觉机制与文化权威构建
            </p>
            <p style={{
              fontSize: '1rem',
              color: '#6b7280',
              lineHeight: '1.8',
              marginBottom: '1.5rem'
            }}>
              本研究考察当代高级时装品牌如何通过时装秀的视觉与空间组织构建文化权威。通过对Valentino、Avavav、Miu Miu三个案例的比较分析，揭示品牌构建文化权威的不同视觉策略。
            </p>
            <div style={{
              display: 'flex',
              gap: '0.75rem',
              flexWrap: 'wrap',
              marginBottom: '2rem'
            }}>
              {['Scopic Regimes', 'Cultural Authority', 'Brand Semiotics', 'Fashion Studies'].map(tag => (
                <span key={tag} style={{
                  padding: '0.4rem 1rem',
                  background: 'white',
                  color: '#6b7280',
                  fontSize: '0.85rem',
                  borderRadius: '6px',
                  border: '1px solid #e5e7eb',
                  fontWeight: '500'
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 核心观点 */}
      <div style={{
        background: 'white',
        padding: '2.5rem',
        borderRadius: '12px',
        border: '1px solid #e5e7eb'
      }}>
        <h4 style={{
          fontSize: '1.4rem',
          fontWeight: '700',
          color: '#111827',
          marginBottom: '2rem'
        }}>
          核心观点
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {[
            '时装秀是视觉权力的装置，而非单纯的服装展示',
            '品牌通过空间设计、身体编排、灯光控制来组织"观看"，从而定义"合法的品味"',
            '模特的身体经历"去主体化"过程，成为品牌的视觉媒介',
            '不同品牌使用不同的视觉策略来构建文化权威，这些策略反映了对"距离"的不同管理方式'
          ].map((point, index) => (
            <div key={index} style={{
              display: 'flex',
              gap: '1.5rem',
              alignItems: 'flex-start'
            }}>
              <div style={{
                minWidth: '32px',
                height: '32px',
                borderRadius: '50%',
                background: '#f3f4f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.9rem',
                fontWeight: '700',
                color: '#4b5563'
              }}>
                {index + 1}
              </div>
              <p style={{
                fontSize: '1.05rem',
                color: '#374151',
                lineHeight: '1.7',
                margin: 0,
                paddingTop: '0.25rem'
              }}>
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// Runway 页面
const RunwaySection = () => (
  <section id="runway" style={{
    padding: '8rem 2rem',
    background: '#f9fafb'
  }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{
        fontSize: '2.5rem',
        fontWeight: '700',
        color: '#111827',
        marginBottom: '1.5rem',
        letterSpacing: '-0.02em'
      }}>
        Runway 模特作品
      </h2>
      <p style={{
        fontSize: '1.15rem',
        color: '#6b7280',
        marginBottom: '4rem',
        lineHeight: '1.7',
        maxWidth: '800px'
      }}>
        模特经历是我理解"视觉权力"的起点。站在被看的位置，我直接体验了身体如何被规训、凝视如何被组织、品牌如何通过展示构建意义。
      </p>

      {/* Ralph Lauren */}
      <div style={{
        background: 'white',
        borderRadius: '12px',
        overflow: 'hidden',
        marginBottom: '3rem',
        border: '1px solid #e5e7eb'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 3fr',
          gap: 0
        }}>
          <div style={{
            width: '100%',
            height: '500px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '16px',
            opacity: 0.3
          }}>
            Ralph Lauren 主图
          </div>
          <div style={{ padding: '3rem' }}>
            <div style={{
              padding: '0.5rem 1rem',
              background: '#fef3c7',
              color: '#92400e',
              fontSize: '0.85rem',
              fontWeight: '600',
              borderRadius: '6px',
              display: 'inline-block',
              marginBottom: '1.5rem'
            }}>
              Ralph Lauren 2026 Paris
            </div>
            <h3 style={{
              fontSize: '1.8rem',
              fontWeight: '700',
              color: '#111827',
              marginBottom: '1rem',
              letterSpacing: '-0.01em'
            }}>
              静态展示
            </h3>
            <p style={{
              fontSize: '1.05rem',
              color: '#6b7280',
              lineHeight: '1.8',
              marginBottom: '2rem'
            }}>
              这是一场静态展示，而非传统走秀。模特需要在固定位置站立3-4小时，VIP客人可以近距离观看服装细节、触摸面料、拍照。
            </p>
            <div style={{
              background: '#f9fafb',
              padding: '1.5rem',
              borderRadius: '8px',
              borderLeft: '4px solid #111827',
              marginBottom: '2rem'
            }}>
              <p style={{
                fontSize: '1rem',
                color: '#374151',
                lineHeight: '1.8',
                margin: 0,
                fontStyle: 'italic'
              }}>
                "这种展示形式让'被看'的感觉更加强烈。你不是快速走过然后离开，而是持续暴露在凝视之下。这段经历让我深刻理解了'视觉客体化'的含义——在那个空间里，我不是一个人，而是品牌的一个视觉元素。"
              </p>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem'
            }}>
              {[1, 2, 3].map(i => (
                <div key={i} style={{
                  aspectRatio: '3/4',
                  background: '#d1d5db',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  color: '#6b7280'
                }}>
                  照片 {i}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 其他模特作品 */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2rem'
      }}>
        {['巴黎时装周', 'Adidas 品牌模特', '其他作品'].map((title, index) => (
          <div key={index} style={{
            background: 'white',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{
              width: '100%',
              aspectRatio: '3/4',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '14px',
              opacity: 0.3
            }}>
              {title}
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h4 style={{
                fontSize: '1.15rem',
                fontWeight: '700',
                color: '#111827',
                marginBottom: '0.5rem'
              }}>
                {title}
              </h4>
              <p style={{
                fontSize: '0.95rem',
                color: '#6b7280'
              }}>
                2024 - 2025
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Contact 页面
const ContactSection = () => (
  <section id="contact" style={{
    padding: '8rem 2rem',
    background: '#ffffff'
  }}>
    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h2 style={{
        fontSize: '2.5rem',
        fontWeight: '700',
        color: '#111827',
        marginBottom: '1.5rem',
        letterSpacing: '-0.02em'
      }}>
        联系方式
      </h2>
      <p style={{
        fontSize: '1.15rem',
        color: '#6b7280',
        marginBottom: '4rem',
        lineHeight: '1.7'
      }}>
        欢迎与我交流学术研究、项目合作或任何想法
      </p>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '2rem',
        marginBottom: '3rem'
      }}>
        {[
          { label: '邮箱', value: 'jrq13504591125@163.com', icon: '📧' },
          { label: '微信', value: '17747274437', icon: '💬' },
          { label: '小红书', value: '每天都吃大米饭', icon: '📱' },
          { label: 'LinkedIn', value: 'Ruiqi Jin', icon: '🔗' }
        ].map((contact, index) => (
          <div key={index} style={{
            background: '#f9fafb',
            padding: '2rem',
            borderRadius: '12px',
            border: '1px solid #e5e7eb',
            textAlign: 'left'
          }}>
            <div style={{
              fontSize: '2rem',
              marginBottom: '1rem'
            }}>
              {contact.icon}
            </div>
            <h4 style={{
              fontSize: '0.95rem',
              fontWeight: '600',
              color: '#6b7280',
              marginBottom: '0.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              {contact.label}
            </h4>
            <p style={{
              fontSize: '1.1rem',
              color: '#111827',
              fontWeight: '500',
              margin: 0
            }}>
              {contact.value}
            </p>
          </div>
        ))}
      </div>

      <a href="#" style={{
        display: 'inline-block',
        padding: '1rem 2.5rem',
        background: '#111827',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '8px',
        fontSize: '1rem',
        fontWeight: '500',
        transition: 'all 0.3s ease'
      }}>
        下载完整简历 CV
      </a>
    </div>
  </section>
);

// Footer
const Footer = () => (
  <footer style={{
    background: '#111827',
    color: 'white',
    padding: '3rem 2rem',
    textAlign: 'center'
  }}>
    <p style={{
      fontSize: '0.95rem',
      color: '#9ca3af',
      margin: 0
    }}>
      © 2026 Ruiqi Jin. All rights reserved.
    </p>
  </footer>
);

// 主应用
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      margin: 0,
      padding: 0
    }}>
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <HeroSection />
      <FeaturedProjects />
      <AboutSection />
      <ResearchSection />
      <RunwaySection />
      <ContactSection />
      <Footer />
    </div>
  );
}
