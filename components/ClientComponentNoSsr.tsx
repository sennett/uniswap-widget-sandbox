import dynamic from "next/dynamic";

export const ClientComponentNoSsr = dynamic(() => {
    return import('./ClientComponent').then((c) => c.ClientComponent)
}, {ssr: false})