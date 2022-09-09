import { SearchProvider } from './Context/useSearchContext';
import Layout from './Layout';
import { Router } from './Routes/Router';

function App() {
  return (
    <SearchProvider>
      <Layout>
        <Router />
      </Layout>
    </SearchProvider>
  );
}

export default App;
