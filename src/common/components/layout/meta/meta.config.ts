export const siteName = 'Cinema';
export const titleMerge = (title: string) =>
	`${title !== '' ? title + ' |' : ''} ${siteName}`;
