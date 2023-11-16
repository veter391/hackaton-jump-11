import { DefaultLayout } from "./DefaultLayout";
const getDefaultLayout = (page, pageProps, path) => {
  const isHome = path === "/", isAuthPage = path.startsWith("/login"), isAccountPage = path.startsWith("/account"), isProductLandingPage = path.startsWith("/takeout") || path.startsWith("/studio"), isBlog = path.startsWith("/blog");
  return <DefaultLayout
    headerProps={{
      disableNew: isBlog || isAuthPage || isProductLandingPage || isAccountPage,
      minimal: isAuthPage || isProductLandingPage || isAccountPage,
      showAuth: isAuthPage || isProductLandingPage || isAccountPage
    }}
  >{page}</DefaultLayout>;
};
export {
  getDefaultLayout
};
//# sourceMappingURL=getDefaultLayout.js.map
