$ = document.querySelector.bind(document)
$$ = document.querySelectorAll.bind(document)

const menu = {
    homepageTopics: [
        {
            topic: 'homepage grey',
        },
        {
            topic: 'homepage',
        },
        {
            topic: 'homepage 1 ',
        },
        {
            topic: 'homepage 1 grey',
        },
        {
            topic: 'homepage 2',
        },
        {
            topic: 'homepage 2 grey',
        },
        {
            topic: 'homepage 3',
        },
        {
            topic: 'homepage 4',
        },
        {
            topic: 'homepage 5',
        },
        {
            topic: 'homepage 6',
        },            
    ],
    exploreTopics: [
        {
            topic: 'explore',
        },
        {
            topic: 'explore grey',
        },
        {
            topic: 'explore 2',
        },
        {
            topic: 'explore 2 grey',
        },
        {
            topic: 'explore openSea',
        },
        {
            topic: 'explore ranking',
        },
        {
            topic: 'explore ranking grey',
        },
        {
            topic: 'explore collection',
        },
        {
            topic: 'explore collection grey',
        },
        {
            topic: 'items details',
        },
        {
            topic: 'items details grey',
        },
        {
            topic: 'live action',
        },
        {
            topic: 'live action grey',
        },
        {
            topic: 'help center',
        },
    ],
    pageTopics: [
        
        {
            topic: 'author'
        },
        {
            topic: 'profile'
        },
        {
            topic: 'author grey'
        },
        {
            topic: 'author openSea'
        },
        {
            topic: 'wallet'
        },
        {
            topic: 'wallet grey'
        },
        {
            topic: 'create'
        },
        {
            topic: 'create grey'
        },
        {
            topic: 'create 2'
        },
        {
            topic: 'create optine'
        },
        {
            topic: 'NFT minting'
        },
        {
            topic: 'NFT minting grey'
        },
        {
            topic: 'news'
        },
        {
            topic: 'gallery'
        },
    ],
    elementsTopics: [
        {
            topic: 'elegant icon'
        },
        {
            topic: 'etline icon'
        },
        {
            topic: 'font awesome icon'
        },
        {
            topic: 'accordion'
        },
        {
            topic: 'alerts'
        },
        {
            topic: 'pricing table'
        },
        {
            topic: 'pricing bar'
        },
        {
            topic: 'tabs'
        },
    ],
    newItems: [
        {
            topic: 'hot lava',
            eft: '0.08',
            pos: 'Place a bid',
            like: '800',
            imgItem: 'http://134.209.110.122:1337/uploads/crs_3_4b09f7083d.jpg',
            imgSeller: 'http://134.209.110.122:1337/uploads/author_3_1769046ae5.jpg'
        },
        {
            topic: 'the truth',
            eft: '0.08',
            pos: 'Place a bid',
            like: '532',
            imgItem: 'http://134.209.110.122:1337/uploads/music_5_3aaaccbd09.jpg',
            imgSeller: 'http://134.209.110.122:1337/uploads/author_7_3b6dc1483c.jpg'
        },
        {
            topic: 'running puppets',
            eft: '0.04',
            pos: 'Place a bid',
            like: '678',
            imgItem: 'http://134.209.110.122:1337/uploads/music_6_5c523d3724.jpg',
            imgSeller: 'http://134.209.110.122:1337/uploads/author_11_1ad2096db9.jpg'
        },
        {
            topic: 'wild fire',
            eft: '0.16',
            pos: 'Place a bid',
            like: '984',
            imgItem: 'http://134.209.110.122:1337/uploads/music_7_b0956a1a6e.jpg',
            imgSeller: 'http://134.209.110.122:1337/uploads/author_8_3bc062c072.jpg'
        },
    ],
    sellers: [
        {
            img: 'http://134.209.110.122:1337/uploads/icon_yellow_4ff490a7fc.png',
            name: 'test123',
            etg: 3.2,
        },
        {
            img: 'http://134.209.110.122:1337/uploads/author_2_c6ff6b745e.jpg',
            name: 'mamie barnett',
            etg: 2.8,
        },
        {
            img: 'http://134.209.110.122:1337/uploads/author_3_1769046ae5.jpg',
            name: 'nicholas daniels',
            etg: 2.5,
        },
        {
            img: 'http://134.209.110.122:1337/uploads/author_4_623046d09c.jpg',
            name: 'lori hart',
            etg: 2.2,
        },
        {
            img: 'http://134.209.110.122:1337/uploads/author_5_a558aecf04.jpg',
            name: 'Jimmy Wright',
            etg: 1.9,
        },
        {
            img: 'http://134.209.110.122:1337/uploads/author_6_f8c8033ffc.jpg',
            name: 'Karla Sharp',
            etg: 1.6,
        },
        {
            img: 'http://134.209.110.122:1337/uploads/author_7_3b6dc1483c.jpg',
            name: 'Gayle Hicks',
            etg: 1.5,
        },
        {
            img: 'http://134.209.110.122:1337/uploads/author_8_3bc062c072.jpg',
            name: 'Claude Banks',
            etg: 1.3,
        },
        {
            img: 'http://134.209.110.122:1337/uploads/author_9_91a41bc22c.jpg',
            name: 'Franklin Greer',
            etg: 0.9,
        },
        {
            img: 'http://134.209.110.122:1337/uploads/author_10_311ec16dc3.jpg',
            name: 'Stacy Long',
            etg: 0.8,
        },
        {
            img: 'http://134.209.110.122:1337/uploads/author_11_1ad2096db9.jpg',
            name: 'Ida Chapman',
            etg: 0.6,
        },
        {
            img: 'http://134.209.110.122:1337/uploads/author_12_3202cef504.jpg',
            name: 'Fred Ryan',
            etg: 0.6,
        },
    ],
    hotCollections: [
        {
            imgItem: 'http://134.209.110.122:1337/uploads/coll_4_69f3883518.jpg',
            imgSeller: 'http://134.209.110.122:1337/uploads/author_4_623046d09c.jpg',
            nameItem: 'Cartoonism',
            bot: 'ERC-73'
        },
        {
            imgItem: '	http://134.209.110.122:1337/uploads/coll_5_61977a4c99.jpg',
            imgSeller: 'http://134.209.110.122:1337/uploads/author_5_a558aecf04.jpg',
            nameItem: 'Virtuland',
            bot: 'ERC-85'
        },
        {
            imgItem: 'http://134.209.110.122:1337/uploads/coll_6_62bc79d217.jpg',
            imgSeller: 'http://134.209.110.122:1337/uploads/author_6_f8c8033ffc.jpg',
            nameItem: 'Papercut',
            bot: 'ERC-42'
        },
    ],
    marketPlace: [
        {
            item: 'All NFTs',
        },
        {
            item: 'art',
        },
        {
            item: 'music',
        },
        {
            item: 'Domain Names',
        },
        {
            item: 'Virtual World',
        },
        {
            item: 'Collectibles',
        },
    ],
    resources: [
        {
            item: 'Help Center',
        },
        {
            item: 'Partners',
        },
        {
            item: 'Suggestions',
        },
        {
            item: 'Discord',
        },
        {
            item: 'docs',
        },
        {
            item: 'Newsletter',
        },
    ],
    community: [
        {
            item: 'community',
        },
        {
            item: 'Documentation',
        },
        {
            item: 'Brand Assets',
        },
        {
            item: 'Blog',
        },
        {
            item: 'Forum',
        },
        {
            item: 'Mailing List',
        },
    ],
    render: function() {
        const homepage = this.homepageTopics.map(function(item) {
            return `
                <li class="menu-list-item"><a href="" class="menu-list-item_link">${item.topic}</a></li>
            `
        })
        $('.home-render').innerHTML = homepage.join('')
        const explore = this.exploreTopics.map(function(item) {
            return `
                <li class="menu-list-item"><a href="" class="menu-list-item_link">${item.topic}</a></li>
            `
        })
        $('.explore-render').innerHTML = explore.join('')
        const pages = this.pageTopics.map(function(item) {
            console.log(item.topic)
            return `
                <li class="menu-list-item"><a href="" class="menu-list-item_link">${item.topic}</a></li>
            `
        })
        $('.pages-render').innerHTML = pages.join('')
        const elements = this.elementsTopics.map(function(item) {
            return `
                <li class="menu-list-item"><a href="" class="menu-list-item_link">${item.topic}</a></li>
            `
        })
        $('.elements-render').innerHTML = elements.join('')
        const newItem = this.newItems.map(function (item) {
            return `
            <div class="item">
            <div class="sellers">
                <img src="${item.imgSeller}" alt="" class="seller-avatar">
                <i class="fa fa-check-circle seller-check" aria-hidden="true"></i>   
            </div>
            <div class="img-items">
                <img src="${item.imgItem}" alt="">
            </div>
            <div class="item-details">
                <div class="item-topic">
                    <a href="" class="topic_link">${item.topic}</a>
                </div>
                <div class="item-price">
                    ${item.eft} etf <span>/</span> 
                </div>
                <div class="like-and-pos-item">
                    <div class="pos"><a class="pos_link" href="">${item.pos}</a></div>
                    <div class="like">
                        <i class="fa fa-heart" aria-hidden="true"></i>
                        ${item.like}
                    </div>
                </div>
            </div>
        </div>
            `
        })
        $('.row-item-render').innerHTML = newItem.join('');
        const seller = this.sellers.map(function (item) {
            return `
            <li class="seller">
                <div class="sellers">
                    <img src="${item.img}" alt="" class="seller-avatar">
                    <i class="fa fa-check-circle seller-check" aria-hidden="true"></i>   
                </div>
                <div class="seller-info">
                    <div class="name">${item.name}</div>
                    <div class="bot">${item.etg} ETH</div>
                </div>
            </li>
            `
        })
        $('.sellers-render').innerHTML = seller.join('');
        const hotCollection = this.hotCollections.map(function (item) {
            return `
            <div class="collection-item">
                <div class="ntf-wrap">
                    <span>
                        <img src="${item.imgItem}" alt="">
                    </span>
                </div>
                <div class="info">
                    <div class="sellers">
                        <img src="${item.imgSeller}" alt="" class="seller-avatar">
                        <i class="fa fa-check-circle seller-check" aria-hidden="true"></i>   
                    </div>
                    <div class="name">${item.nameItem}</div>
                    <div class="bot">${item.bot}</div>
                </div>
            </div>
            `
        })
        $('.hot-collections-render').innerHTML = hotCollection.join('');
        const market = this.marketPlace.map((items) =>  `<li class="items"><a href="">${items.item}</a></li>`)
        $('.marketplace-render').innerHTML = market.join('');
        const resource = this.resources.map((items) =>  `<li class="items"><a href="">${items.item}</a></li>`)
        $('.resources-render').innerHTML = resource.join('');
        const communities = this.community.map((items) =>  `<li class="items"><a href="">${items.item}</a></li>`)
        $('.community-render').innerHTML = communities.join('');
    },
    handleEvent: function () {
        const header = $('#header')
        const headerWidth = header.offsetWidth
        window.onscroll = function () {
            const scrollTo = document.documentElement.scrollTop || document.body.scrollTop
            if (scrollTo > 0) {
                header.classList.add('header-in')
                header.classList.remove('header-out')
            }
            else {
                header.classList.remove('header-in')
                header.classList.add('header-out')
            }
    }
    },
    start: function() {
        this.render()
        this.handleEvent()
    }
}
menu.start()   

