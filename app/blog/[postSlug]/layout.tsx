export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className='mx-auto max-w-7xl px-6 py-20 relative'>{children}</div>;
}
