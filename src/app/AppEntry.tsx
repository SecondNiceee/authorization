import AppRouter from "./AppRouter";
import BaseProviders from "./BaseProviders";
import "./styles/index.css";
import "./styles/variables.css";

const AppEntry = () => {
    return (
        <BaseProviders>
            <AppRouter />
        </BaseProviders>
    );
};

export default AppEntry;