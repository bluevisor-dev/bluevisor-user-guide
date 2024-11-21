const config = {
  gatsby: {
    pathPrefix: '/bluevisor-user-guide',
    siteUrl: 'https://bluevisor-dev.github.io/bluevisor-user-guide',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://highbuff.com/intro/img/rrt_logo.png',
    logoLink: 'https://bluevisor-dev.github.io/bluevisor-user-guide/activate', // 왼쪽 상단 링크
    title:
      // "<a href='https://naver.com'><img class='img-responsive' src='https://highbuff.com/intro/img/rrt_logo.png' alt='Learn logo'/></a>",
      "테미 가이드",
    githubUrl: '#',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="#" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="#" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // 활성화
      '/activate',
      '/functionIntroduction',
    ],
    collapsedNav: [
      '/functionIntroduction'
    ],
    // 사이드바 링크
    links: [
      { text: '하이버프 공식 카카오톡 채널', link: 'https://pf.kakao.com/_IbQxkxl/' },
      { text: '하이버프 재테크', link: 'https://highbuff.com/person/event/ladder_game/' },

      { text: '하이버프 공식몰', link: 'https://mall.highbuff.com/shop/list.php?ca_id=80' },
      { text: '하이버프 카카오 스토어', link: 'https://store.kakao.com/highbuff/products/451755670' },
      { text: '하이버프 네이버 스토어', link: 'https://smartstore.naver.com/highbuffmall' },
      { text: '하이버프 쿠팡 스토어', link: 'https://www.coupang.com/vp/products/8451501862?itemId=24452042867&vendorItemId=91465857934&q=%ED%95%98%EC%9D%B4%EB%B2%84%ED%94%84+hr%EB%A1%9C%EB%B4%87&itemsCount=36&searchId=a855b79a31494a9782f74f24aea7c561&rank=0&isAddedCart=' }
    ],
    frontLine: false,
    ignoreIndex: true,
    title:
      "<span>하이버프</span><div class='greenCircle'></div>가이드",
  },
  siteMetadata: {
    title: '하이버프 테미 기능 가이드',
    description: '하이버프 테미 기능 가이드 페이지입니다.',
    ogImage: null,
    docsLocation: '',
    favicon: 'https://highbuff.com/favicon.ico',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/highbuff-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
