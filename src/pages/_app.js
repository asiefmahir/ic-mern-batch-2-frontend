import RootLayout from "@/components/RootLayout";
import { store } from "@/store";
import { Provider } from "react-redux";
import "@/styles/globals.css";
export default function App({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<RootLayout>
				<Component {...pageProps} />
			</RootLayout>
		</Provider>
	);
}
