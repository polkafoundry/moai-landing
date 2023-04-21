export { Home as default } from '@/modules/index';

export function getServerSideProps(context: any) {
  return {
    props: { query: context.query }
  };
}