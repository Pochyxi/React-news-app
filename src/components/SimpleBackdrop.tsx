import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

interface myFunctionalComponentProps {
    toggle: boolean;
}

export default function SimpleBackdrop(props: myFunctionalComponentProps) {

    return (
        <div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={props.toggle}

            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}
