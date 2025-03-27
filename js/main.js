// 等待 DOM 加载完成
document.addEventListener('DOMContentLoaded', () => {
    // 记忆数据
    const memories = {
        "photo1": {
            title: "刚上大学的小护士",
            content: "我说想看你就发我了...",
            location: "重庆医科大学"
        },
        "photo10": {
            title: "同台表演",
            content: "2019年12月27日，我们第一次同台...",
            location: "初中礼堂"
        },
        "photo17": {
            title: "烤肉之约",
            content: "我们一起去吃烤肉...",
            location: "烤肉店"
        },
        "photo25": {
            title: "毕业季留念",
            content: "在你高中毕业那天，我们拍下这张...",
            location: "高中校园"
        },
        "photo21": {
            title: "春游时光",
            content: "春哥做饭超难吃哈哈哈哈哈...",
            location: "春游地点"
        },
        "photo24": {
            title: "赌气",
            content: "还记得这两张照片吗，嘿嘿...",
            location: "某个地方"
        },
        "photo27": {
            title: "第三视角",
            content: "你给我发枫叶的照片，没想到还有第三视角...",
            location: "枫叶林"
        },
        "photo20": {
            title: "偷拍",
            content: "在看啥呢",
            location: "某个地方"
        },
        "photo22": {
            title: "美颜",
            content: "你美颜的太过分了奥",
            location: "某个地方"
        },
        "photo23": {
            title: "记录",
            content: "你在记录别人，有人在记录你",
            location: "某个地方"
        },
        "photo46": {
            title: "晚会",
            content: "还记得那天我班服丢了，就披得一件军绿色大衣",
            location: "晚会现场"
        },
        "photo31": {
            title: "毕业照！",
            content: "那天很热，我知道你很开心！",
            location: "高中校园"
        },
        "photo32": {
            title: "宿舍",
            content: "一抹夕阳洒在了你们的脸上",
            location: "宿舍"
        },
        "photo33": {
            title: "姐妹",
            content: "你们谁是老大呢，哈哈哈哈",
            location: "某个地方"
        },
        "photo34": {
            title: "耶耶耶",
            content: "是我们万年不变的剪刀手",
            location: "某个地方"
        },
        "photo35": {
            title: "写真",
            content: "筹备毕业写真，准备好毕业了吗？",
            location: "写真拍摄地"
        },
        "photo36": {
            title: "飘忽不定",
            content: "一定是镜头太多了，不知道往哪看了吧",
            location: "某个地方"
        },
        "photo37": {
            title: "间谍",
            content: "嘿嘿，现在知道我哪来的这么多照片了吧",
            location: "某个地方"
        },
        "photo38": {
            title: "友谊",
            content: "你们的友谊一定是天长地久的！！！！",
            location: "某个地方"
        },
        "photo40": {
            title: "又是美颜",
            content: "相比之前好看了太多有没有！",
            location: "某个地方"
        },
        "photo41": {
            title: "集体活动",
            content: "听说你们老班给你们过生日了，真好...",
            location: "教室"
        },
        "photo42": {
            title: "搞怪",
            content: "要不说你外冷内热呢，普通朋友哪见过这场面哈哈哈",
            location: "某个地方"
        },
        "photo43": {
            title: "❤",
            content: "这是在哪拍的呢，好难猜啊",
            location: "某个地方"
        },
        "photo44": {
            title: "小溪",
            content: "是你带我去过的小河吗，喜欢你活泼开朗的样子！",
            location: "小溪边"
        },
        "photo45": {
            title: "毕业季",
            content: "高中也要毕业了呢，希望永远都这样开心",
            location: "高中校园"
        },
        "photo9": {
            title: "斗地主",
            content: "你不会斗地主，但是你会当农民哈哈哈哈哈",
            location: "某个地方"
        },
        "photo11": {
            title: "屏保",
            content: "这张照片我偷偷拿来当过屏保呢，因为害怕你发现就又换回去了",
            location: "某个地方"
        },
        "photo13": {
            title: "美照",
            content: "你真的好会拍",
            location: "某个地方"
        },
        "photo15": {
            title: "在干嘛",
            content: "在干嘛呢，原来在逛gai啊",
            location: "某个地方"
        },
        "photo18": {
            title: "奶茶",
            content: "这么好喝吗拍美照还夹着（另外说一句，真的好好看！！）",
            location: "奶茶店"
        },
        "photo28": {
            title: "“花”",
            content: "我想送你一大捧花，可我怕你不接受",
            location: "某个地方"
        },
        "photo29": {
            title: "可爱,吗？",
            content: "哈哈哈，你说我可爱，第一次有人说我可爱（也许吧，嘿嘿）",
            location: "某个地方"
        },
        "photo30": {
            title: "归途",
            content: "你第一次来永川，好可惜，有点不舍得你走",
            location: "永川"
        },
        "photo47": {
            title: "穿越",
            content: "好像一下回到了几十年前",
            location: "某个地方"
        },
        "photo48": {
            title: "自信",
            content: "果然,相机给你是个十分正确的决定",
            location: "某个地方"
        },
        "photo55": {
            title: "好喜欢！！",
            content: "好喜欢这张照片！！！（当然，不只是照片）",
            location: "某个地方"
        },
        "photo64": {
            title: "眼睛",
            content: "“眼睛是沟通心灵的桥梁”",
            location: "某个地方"
        },
        "photo65": {
            title: "夏秋",
            content: "你说一个像夏天，一个像秋天",
            location: "某个地方"
        },
        "photo66": {
            title: "旅游",
            content: "今天被带出去旅游了！！！",
            location: "旅游地点"
        },
        "photo2": {
            title: "丑照",
            content: "我拍了你的丑照，可以不怪罪我吗，嘻嘻",
            location: "某个地方"
        }
    };

    // 弹窗功能
    const modal = document.getElementById('memory-modal');
    const closeBtn = document.querySelector('.close');
    const modalTitle = document.querySelector('.modal-title');
    const modalText = document.querySelector('.modal-text');

    // 绑定图片点击事件
    document.querySelectorAll('.photo-item img').forEach(img => {
        img.addEventListener('click', function() {
            const photoKey = this.src.split('/').pop().split('.')[0];
            const memory = memories[photoKey];

            if (memory) {
                modalTitle.textContent = memory.title;
                modalText.textContent = memory.content;
                modal.style.display = "block";
            }
        });
    });

    // 关闭弹窗
    closeBtn.onclick = () => modal.style.display = "none";
    window.onclick = (e) => {
        if (e.target == modal) modal.style.display = "none";
    }

    // 音乐控制功能
    const musicPlayer = document.getElementById('bg-music');
    const musicControl = document.getElementById('music-control');
    let isPlaying = false;

    function initMusic() {
        const savedState = localStorage.getItem('musicState');
        isPlaying = savedState === 'playing';
        musicPlayer.volume = 0.3;
        if (isPlaying) {
            musicPlayer.play().catch(() => {});
            musicControl.classList.add('music-playing');
        } else {
            musicPlayer.play().catch(() => {
                document.body.addEventListener('click', () => {
                    musicPlayer.play().catch(() => {});
                }, { once: true });
            });
        }
    }

    musicControl.addEventListener('click', () => {
        isPlaying = !isPlaying;
        if (isPlaying) {
            musicPlayer.play();
            musicControl.classList.add('music-playing');
            localStorage.setItem('musicState', 'playing');
        } else {
            musicPlayer.pause();
            musicControl.classList.remove('music-playing');
            localStorage.setItem('musicState', 'paused');
        }
    });

    initMusic();

    document.body.addEventListener('click', () => {
        if (isPlaying && musicPlayer.paused) {
            musicPlayer.play().catch(() => {});
        }
    }, { once: true });

    // 子页面功能
    if (window.location.href.includes('xiangyaoshuodehua.html')) {
        // 页面加载时显示“健伟寄语”的内容
        window.onload = function() {
            // 默认显示“健伟寄语”的内容
            document.getElementById('sangjianwei').style.display = 'block';
            // 给“健伟寄语”的导航链接添加激活状态
            document.querySelector('a[href="#sangjianwei"]').classList.add('active');
        };

        // 处理导航链接的点击事件
        document.querySelectorAll('.nav-item[href^="#"]').forEach(link => {
            link.addEventListener('click', function() {
                // 移除所有激活状态
                document.querySelectorAll('.nav-item').forEach(item => {
                    item.classList.remove('active');
                });
                // 添加当前激活状态
                this.classList.add('active');

                // 隐藏所有内容
                document.querySelectorAll('.letter-content').forEach(content => {
                    content.style.display = 'none';
                });

                // 显示对应的内容
                const targetId = this.getAttribute('href').substring(1);
                document.getElementById(targetId).style.display = 'block';
            });
        });
    }
	
});
// 按钮点击事件
document.addEventListener('DOMContentLoaded', () => {
    const memoryBtns = document.querySelectorAll('.memory-btn');
    const juniorMemory = document.getElementById('junior-memory');
    const seniorMemory = document.getElementById('senior-memory');
    const universityMemory = document.getElementById('university-memory');

    memoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 移除所有按钮的 active 类
            memoryBtns.forEach(b => b.classList.remove('active'));

            // 为当前点击的按钮添加 active 类
            btn.classList.add('active');

            // 隐藏所有内容
            juniorMemory.style.display = 'none';
            seniorMemory.style.display = 'none';
            universityMemory.style.display = 'none';

            // 显示对应的内容
            const period = btn.dataset.period;
            if (period === 'junior') {
                juniorMemory.style.display = 'block';
            } else if (period === 'senior') {
                seniorMemory.style.display = 'block';
            } else if (period === 'university') {
                universityMemory.style.display = 'block';
            }
        });
    });

    // 默认显示初中时光
    juniorMemory.style.display = 'block';
    memoryBtns[0].classList.add('active');
});