import {
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query';

const queryClient = new QueryClient();

type Props = {
    children: JSX.Element;
}

export default function Providers({children}: Props) {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}