import React from "react";

// Packages
import ScrollToTop from "react-scroll-up";

// Redux
import { useSelector, useActions } from "@/store/hooks";

// Styles and Icons
import { css } from "@emotion/core";
import { IconChevronUp } from "@tabler/icons";

// My Components
import { TransitionPage } from "@/animations";
import { MainHeaderComponent, Footer, Alert } from "@/components";

export const MainLayout: React.FC = ({ children }) => {
  const { generalError } = useSelector(({ ui }) => ui);
  const { setGeneralError } = useActions();

  return (
    <TransitionPage>
      <div
        className="relative flex flex-col justify-between min-h-screen space-y-1.5 bg-bg"
        css={css`
          .headroom-wrapper {
            max-height: 113px !important;
          }
        `}
      >
        {/* <div className="fixed top-0 bottom-0 right-0 flex items-center">
          <button className="transform -rotate-90 btn">feedback</button>
        </div> */}
        <MainHeaderComponent />
        <main className="relative flex flex-1">
          <div className="container flex flex-col flex-1">{children}</div>
        </main>
        <div
          css={css`
            div {
              bottom: 7rem !important;
              right: 1rem !important;
            }
          `}
        >
          <ScrollToTop
            showUnder={320}
            style={{
              right: "2rem",
            }}
          >
            <button className="btn warning ghost icon lg">
              <IconChevronUp />
            </button>
          </ScrollToTop>
        </div>
        <Footer />
      </div>
      <Alert
        state={generalError}
        setState={setGeneralError}
        name="general-error"
        type="DANGER"
        title="Error inesperado"
        message="Ha ocurrido un error inesperado, intente esta acción más tarde."
        labelBtnPri="Aceptar"
        onBtnPri={() => setGeneralError(false)}
      />
    </TransitionPage>
  );
};
