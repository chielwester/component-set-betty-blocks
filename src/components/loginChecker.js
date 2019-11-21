(() => ({
  name: 'LoginChecker',
  icon: 'RowIcon',
  category: 'LAYOUT',
  type: 'ROW',
  allowedTypes: ['ROW', 'COLUMN'],
  orientation: 'HORIZONTAL',
  jsx: (
    <div className={classes.container}>
      {(() => {
				const {env} = B;
        const isEmpty = children.length === 0;
				const [loading, setLoading] = useState('IDLE');
				const [loggedIn, setLoggedIn] = useState(false);
        const isPristine = isEmpty && B.env === 'dev';

				useEffect(() => {
					setLoading('LOADING');
					if(env === 'prod') {
						const endpoint = options.endpointurl;
						fetch(endpoint, {credentials: "include"}).then(response => response.json()).then(json => {
							if(json) {
								setLoggedIn(true);
							}
							setLoading('SUCCESS');
						});
					}
				}, []);


				if(env === 'dev') {
	        return (
	          <section
	            className={[
	              classes.row,
	              isEmpty ? classes.empty : '',
	              isPristine ? classes.pristine : '',
	            ].join(' ')}
	          >
	            {isPristine ? 'LOGIN CHECKER' : children}
	          </section>
	        );
				} else {
					if(loading == 'LOADING' || loading == 'IDLE') {
						return (
							<section className={
								[classes.row, classes.empty, classes.pristine].join(' ')
							}>CHECKING FOR A LOGGED IN USER</section>
						)
					}

					if(loading == 'ERROR') {
						return <section className={
								[classes.row, classes.empty, classes.pristine].join(' ')
							}>THERE WAS AN ERROR CHECKING YOUR LOGIN. PLEASE RELOAD THE PAGE</section>
					}

					if(loggedIn) {
						return <section className={classes.row}>{children}</section>;
					} else {
            const currentLocation = window.location.href.substring(
              0,
              window.location.href.lastIndexOf('/'),
            );
						console.log(options.redirect);

						const redirect = B.getEndpoint(options.redirect) || '';
            const redirectUrl = redirect.url.startsWith('/')
              ? redirect.url
              : `/${redirect.url}`;

            window.location.href = currentLocation + redirectUrl;
					}

				}
      })()}
    </div>
  ),
  styles: B => theme => {
    const style = new B.Styling(theme);
    const width = {
      Full: '100%',
      XL: '1200px',
      L: '960px',
      M: '720px',
      S: '540px',
    };
    const getSpacing = (idx, device = 'Mobile') =>
      idx === '0' ? '0rem' : style.getSpacing(idx, device);

    return {
      container: {
        width: '100%',
        height: '100vh',
        maxWidth: ({ options: { maxRowWidth } }) => width[maxRowWidth],
        backgroundColor: ({ options: { backgroundColor } }) =>
          backgroundColor === 'transparent'
            ? 'transparent'
            : style.getColor(backgroundColor),
        backgroundImage: 'none',
        backgroundPosition: 'left top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderWidth: 0,
        borderColor: 'transparent',
        borderStyle: 'none',
        borderRadius: 0,
        boxSizing: 'border-box',
        marginTop: ({ options: { outerSpacing } }) =>
          getSpacing(outerSpacing[0]),
        marginRight: ({ options: { outerSpacing, maxRowWidth } }) =>
          maxRowWidth !== 'Full' ? 'auto' : getSpacing(outerSpacing[1]),
        marginBottom: ({ options: { outerSpacing } }) =>
          getSpacing(outerSpacing[2]),
        marginLeft: ({ options: { outerSpacing, maxRowWidth } }) =>
          maxRowWidth !== 'Full' ? 'auto' : getSpacing(outerSpacing[3]),
        [`@media ${B.mediaMinWidth(768)}`]: {
          marginTop: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[0], 'Portrait'),
          marginRight: ({ options: { outerSpacing, maxRowWidth } }) =>
            maxRowWidth !== 'Full'
              ? 'auto'
              : getSpacing(outerSpacing[1], 'Portrait'),
          marginBottom: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[2], 'Portrait'),
          marginLeft: ({ options: { outerSpacing, maxRowWidth } }) =>
            maxRowWidth !== 'Full'
              ? 'auto'
              : getSpacing(outerSpacing[3], 'Portrait'),
        },
        [`@media ${B.mediaMinWidth(1024)}`]: {
          marginTop: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[0], 'Landscape'),
          marginRight: ({ options: { outerSpacing, maxRowWidth } }) =>
            maxRowWidth !== 'Full'
              ? 'auto'
              : getSpacing(outerSpacing[1], 'Landscape'),
          marginBottom: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[2], 'Landscape'),
          marginLeft: ({ options: { outerSpacing, maxRowWidth } }) =>
            maxRowWidth !== 'Full'
              ? 'auto'
              : getSpacing(outerSpacing[3], 'Landscape'),
        },
        [`@media ${B.mediaMinWidth(1200)}`]: {
          marginTop: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[0], 'Desktop'),
          marginRight: ({ options: { outerSpacing, maxRowWidth } }) =>
            maxRowWidth !== 'Full'
              ? 'auto'
              : getSpacing(outerSpacing[1], 'Desktop'),
          marginBottom: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[2], 'Desktop'),
          marginLeft: ({ options: { outerSpacing, maxRowWidth } }) =>
            maxRowWidth !== 'Full'
              ? 'auto'
              : getSpacing(outerSpacing[3], 'Desktop'),
        },
      },
      row: {
        display: 'flex',
        height: '100%',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        boxSizing: 'border-box',
      },
      empty: {
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: ({ options: { rowHeight } }) => (rowHeight ? 0 : '4rem'),
        height: '100%',
        fontSize: '0.75rem',
        color: '#262A3A',
        textTransform: 'uppercase',
      },
      pristine: {
        borderWidth: '0.0625rem',
        borderColor: '#AFB5C8',
        borderStyle: 'dashed',
        backgroundColor: '#F0F1F5',
      },
    };
  },
}))();
