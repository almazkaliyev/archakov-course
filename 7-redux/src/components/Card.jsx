import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    minHeight: 100,
    padding: theme.spacing(1.5),
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '#0a3835',
    },
  },
  active: {
    backgroundColor: 'hsl(176, 70%, 14%)',
    boxShadow: theme.shadows[1],
  },
  image: {
    flexShrink: 0,
    width: 72,
    height: 72,
    marginRight: theme.spacing(1),
    borderRadius: 3,
    pointerEvents: 'none',
  },
  info: {
    flexGrow: 1,
    textTransform: 'none',
    textAlign: 'left',
  },
}));

export default ({ image, title, caption, active, onClick }) => {
  const classes = useStyles();

  return (
    <Button
      className={clsx(classes.root, { [classes.active]: active })}
      onClick={() => onClick(title)}
      variant="outlined"
    >
      <img alt={title} className={classes.image} src={image} />
      <div className={classes.info}>
        <Typography variant="body1">{title}</Typography>
        {caption && <Typography variant="body2">{caption}</Typography>}
      </div>
    </Button>
  );
};
