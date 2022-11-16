import LoaderProvider from "./contexts/loaderContext/LoaderProvider";
import Master from "./core/components/Master";
import AuthInterceptor from "./Services/AuthInterceptor";
import Loader from "./Shared/components/Loader";

/**
 * @name App
 * @description To render sidebar, header and to apply routing  
 * @returns App component
 */
function App() {
  return (
    <LoaderProvider>
      <Loader />
      <AuthInterceptor>
        <Master />
      </AuthInterceptor>
    </LoaderProvider>
  );
}

export default App;
