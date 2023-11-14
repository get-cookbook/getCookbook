export default function Bg(){
    const bgStyles = {
        div: {
            position: 'absolute',
            width: '100%',
            overflowX: 'hidden',
        },
        svg: {
            width: '100%',
        }
    };
    return(
        <div>
      <div style={{ ...bgStyles.div, top: '480px', zIndex: -1 }}>
        <svg width="1830" height="1320" viewBox="0 0 1825 1320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M664.636 1318.2C326.125 1295.58 81.1657 1091.52 1 992.327V538.547L1680.51 392L1821.18 1135.66C1838.57 1226.29 1783.74 1328.1 1425.26 1010.32C977.168 613.105 1087.77 1346.48 664.636 1318.2Z" fill="#333333" stroke="#333333" />
          <path d="M664.636 1.80012C326.125 24.4248 81.1657 228.476 1 327.673V781.453L1680.51 928L1821.18 184.341C1838.57 93.7131 1783.74 -8.0982 1425.26 309.676C977.168 706.895 1087.77 -26.4808 664.636 1.80012Z" fill="#333333" stroke="#333333" />
        </svg>
      </div>
      <div style={{ ...bgStyles.div, top: '1620px', zIndex: -1, transform: 'scale(1.45)' }}>
        <svg width="1825" height="789" viewBox="0 0 1440 789" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="-324" y="356.36" width="1867.63" height="876.205" transform="rotate(-11 -324 356.36)" fill="#6CE5FF" fillOpacity="0.19" />
        </svg>
      </div>
      <div style={{ ...bgStyles.div, top: '2665px', zIndex: 0, transform: 'scale(1.44)' }}>
        <svg width="1440" height="357" viewBox="0 0 1440 357" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="-280" y="-503.64" width="1867.63" height="876.205" transform="rotate(-11 -280 -503.64)" fill="#6CE5FF" fillOpacity="0.19" />
        </svg>
      </div>
      <div style={{ ...bgStyles.div, top: '2800px', zIndex: -1, transform: 'scale(1.44)' }}>
        <svg width="1440" height="1002" viewBox="0 0 1440 1002" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="-151.812" width="1867.63" height="876.205" transform="rotate(11 -151.812 0)" fill="#6CFFA7" fillOpacity="0.19" />
        </svg>
      </div>
      <div style={{ ...bgStyles.div, left: '300px', top: '2845px', zIndex: -2, transform: 'scale(1.44)' }}>
        <svg width="1440" height="966" viewBox="0 0 1440 966" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1102.62 2.3154C1489.97 39.5108 1770.27 374.973 1862 538.055V1284.08L-59.8074 1525L-220.769 302.414C-240.673 153.421 -177.933 -13.9576 232.261 508.468C745.002 1161.5 618.439 -44.1788 1102.62 2.3154Z" fill="#333333" stroke="#333333" />
        </svg>
      </div>
    </div>
    );
}