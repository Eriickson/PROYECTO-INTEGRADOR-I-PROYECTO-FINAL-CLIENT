import Router from "next/router";

// Esta función se utiliza para redireccionar a un usuario, pero del lado del servidor, por defecto, redirecciona a la página home ("./")
function useRedirectSSR({ ctx, push = "/" }) {
  // redirect to login
  if (ctx.res) {
    ctx.res.writeHead(302, {
      Location: push,
    });
    ctx.res.end();
  } else {
    Router.push(push);
  }
}

export default useRedirectSSR;
