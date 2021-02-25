import 'styled-components';

// extending original module declarations
declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			background: string;
			cardList: string;
			red: string;
			black: string;
			foreground: string;
			darkBlue: string;
			mediumBlue: string;
			darkGrey: string;
			grey: string;
			white: string;
			lightGrey: string;
		};
		fontFamily: string;
		cardListWidth: string;
	}
}
