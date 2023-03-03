import type { AppProps } from 'next/app';
import '@/common/styles/main.scss';
import { AuthProvider } from '../src/hooks/useAuth';
import {RecoilRoot} from "recoil";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<RecoilRoot>
			<AuthProvider>
				<Component {...pageProps} />
			</AuthProvider>
		</RecoilRoot>
	);
}
