export const ssr = true;

export const load = () => {
    console.log("Layout load function called");
	return {
		title: 'NAD LABS - Game Development & Projects',
		description: 'Home of NAD LABS projects including Godot Mapcrafter and mobile games',
		keywords: 'NAD LABS, game development, Godot, indie games'
	};
};
