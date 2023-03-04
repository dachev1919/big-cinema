import React, {FC, useState} from 'react';
import styles from './HeaderMenu.module.scss';
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'

interface IHeaderMenuLinks {
	id: string;
	title: string;
}

interface IHeaderMenuProps {}

const LINKS: IHeaderMenuLinks[] = [
	{
		id: 'header-link-1',
		title: 'Home'
	},
	{
		id: 'header-link-2',
		title: 'TV Shows'
	},
	{
		id: 'header-link-3',
		title: 'Movies'
	},
	{
		id: 'header-link-4',
		title: 'New & Popular'
	},
	{
		id: 'header-link-5',
		title: 'My List'
	}
];

const HeaderMenu: FC<IHeaderMenuProps> = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  }
	return (
		<>
			<div className='md:!hidden'>
				<Button
					id='basic-button'
					aria-controls={open ? 'basic-menu' : undefined}
					aria-haspopup='true'
					aria-expanded={open ? 'true' : undefined}
					onClick={handleClick}
					className='!capitalize !text-white'
				>
					Browse
				</Button>
				<Menu
					id='basic-menu'
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
          className='mobile-menu'
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
				>
          {LINKS.map(({ id, title }) => (
            <MenuItem key={'mobile-menu-' + id} onClick={handleClose}>{title}</MenuItem>
          ))}
        </Menu>
			</div>
			<ul className={styles.menu}>
				{LINKS.map(({ id, title }) => (
					<li className={styles.link} key={id}>
						{title}
					</li>
				))}
			</ul>
		</>
	);
};

export default HeaderMenu;
