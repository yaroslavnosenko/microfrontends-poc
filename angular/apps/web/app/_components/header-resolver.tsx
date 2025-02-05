import Script from 'next/script'

type IHeaderProps = {
  host: string
}

export const Header = ({ host }: IHeaderProps) => {
  return (
    <>
      <Script src={`${host}/header.umd.js`} strategy="beforeInteractive" />
      <symplast-header host={host} />
    </>
  )
}
