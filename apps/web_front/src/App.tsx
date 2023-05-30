import BasicFab from "@/components/BasicFab.tsx";
import { ButtonBase, CssBaseline } from "@mui/material";
import { ColorModeContext, useColoMode } from "@/theme/theme.ts";
import { ThemeContext } from "@emotion/react";

function App() {
  const [theme,colorMode]= useColoMode()

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeContext.Provider value={theme}>
          <CssBaseline />
          <BasicFab/>
          <ButtonBase onClick={colorMode.toggleColorMode}>
            切换主题
          </ButtonBase>
        </ThemeContext.Provider>
      </ColorModeContext.Provider>


    </>
  );
}

export default App;
