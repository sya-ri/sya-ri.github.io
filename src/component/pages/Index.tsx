import {createStyles, makeStyles, Theme, Typography} from "@material-ui/core";

const styles = makeStyles((_: Theme) => createStyles({
    iconContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: "translateY(-50%) translateX(-50%)",
        textAlign: 'center',
    },
    icon: {
        width: '14em',
    },
    name: {
        fontFamily: "'Nunito', sans-serif",
        fontSize: '2em',
    }
}));

const Index = (): JSX.Element => {
    const classes = styles();
    return (
        <div className={classes.iconContainer}>
            <img src={"/icon.png"} alt="Icon" className={classes.icon}/>
            <Typography className={classes.name}>
                sya_ri
            </Typography>
        </div>
    );
}

export default Index;
