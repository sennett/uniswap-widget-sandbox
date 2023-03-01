import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import '@uniswap/widgets/fonts.css'
import { ethers, JsonRpcProvider, BrowserProvider } from 'ethers'
import {useEffect, useState} from "react";
import {ClientComponentNoSsr} from "../components/ClientComponentNoSsr";
// "paths":{
//     "@uniswap/conedison/provider": ["node_modules/@uniswap/conedison/dist/provider.js"]
// },
// "paths":{
//     "@uniswap/conedison/provider": ["node_modules/@uniswap/conedison/dist/provider.js", "node_modules/@uniswap/widgets/node_modules/@uniswap/conedison/dist/provider.js"],
// },

// @ts-ignore
console.log(global?.window && window.ethereum)
// @ts-ignore
const browserProvider = global?.window && new BrowserProvider(window.ethereum)

export default function Home({ allPostsData }) {

    const [blockNumber, setBlockNumber] = useState<number>(null)
    useEffect(() => {
        browserProvider.getBlockNumber().then((bn) => {
            setBlockNumber(bn)
        })
    })
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
          <h1>bn {blockNumber}</h1>
          <div className="Uniswap">
              <ClientComponentNoSsr />
          </div>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
