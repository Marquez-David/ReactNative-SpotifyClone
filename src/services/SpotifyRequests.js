import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

/**
 * Retrieves a list of playlists created by the authenticated user.
 * @returns {Array} An array of user's playlists.
 */
export const getUserPlaylists = async () => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	try {
		const response = await axios(
			{
				method: "GET",
				url: `https://api.spotify.com/v1/me/playlists`,
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);
		return response.data.items;
	} catch (error) {
		console.log("Error while fetching user playlists: " + error.message);
	}
};

/**
 * Retrieves the top artist ID for the authenticated user.
 * @returns {string} The ID of the user's top artist.
 */
export const getArtists = async () => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	try {
		const response = await axios(
			{
				method: "GET",
				url: `https://api.spotify.com/v1/me/top/artists`,
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);
		return response.data.items[0].id;
	} catch (error) {
		console.log("Error while fetching user top artist id: " + error.message);
	}
};

/**
 * Retrieves a list of albums by a specific artist.
 * @param {string} artistId - The ID of the artist whose albums are being fetched.
 * @returns {Array} An array of albums by the specified artist.
 */
export const getArtistAlbums = async (artistId) => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	try {
		const response = await axios(
			{
				method: "GET",
				url: `https://api.spotify.com/v1/artists/${artistId}/albums?limit=7`,
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);
		return response.data.items;
	} catch (error) {
		console.log("Error while fetching artists albums: " + error.message);
	}
};

/**
 * Retrieves a list of saved albums for the authenticated user.
 * @returns {Array} An array of saved album items.
 */
export const getSavedAlbums = async () => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	try {
		const response = await axios(
			{
				method: "GET",
				url: `https://api.spotify.com/v1/me/albums`,
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);
		return response.data.items;
	} catch (error) {
		console.log("Error while fetching user albums: " + error.message);
	}
};

/**
 * Retrieves a list of artists followed by the authenticated user.
 * @returns {Array} An array of followed artist items.
 */
export const getFollowingArtists = async () => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	try {
		const response = await axios(
			{
				method: "GET",
				url: `https://api.spotify.com/v1/me/following?type=artist`,
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);
		return response.data.artists.items;
	} catch (error) {
		console.log("Error while fetching user artists: " + error.message);
	}
};

/**
 * Retrieves a list of saved podcasts for the authenticated user.
 * @returns {Array} An array of saved podcast items.
 */
export const getSavedPodcasts = async () => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	try {
		const response = await axios(
			{
				method: "GET",
				url: `https://api.spotify.com/v1/me/shows`,
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);
		return response.data.items;
	} catch (error) {
		console.log("Error while fetching user podcasts: " + error.message);
	}
};

/**
 * Retrieves a list of saved podcast episodes for the authenticated user.
 * @returns {Array} An array of saved episode items.
 */
export const getSavedEpisodes = async () => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	try {
		const response = await axios(
			{
				method: "GET",
				url: `https://api.spotify.com/v1/me/episodes`,
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);
		return response.data.items;
	} catch (error) {
		console.log("Error while fetching user episodes: " + error.message);
	}
};

/**
 * Retrieves a list of browse categories using the provided access token.
 * @returns {Array} An array of browse category items.
 */
export const getBrowseCategories = async () => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	try {
		const response = await axios(
			{
				method: "GET",
				url: `https://api.spotify.com/v1/browse/categories`,
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);
		return response.data.categories.items;
	} catch (error) {
		console.log("Error while fetching categories: " + error.message);
	}
};

/**
 * Retrieves album details and its tracks using the provided album ID and access token.
 * @param {string} id - The ID of the album to fetch.
 * @returns {Array} An array of album track items.
 */
export const getAlbum = async (id) => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	try {
		const response = await axios(
			{
				method: "GET",
				url: `https://api.spotify.com/v1/albums/` + id,
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);

		return response.data.tracks.items;
	} catch (error) {
		console.log("Error while fetching a single album: " + error.message);
	}
};

/**
 * Retrieves playlist details and its tracks using the provided playlist ID and access token.
 * @param {string} id - The ID of the playlist to fetch.
 * @returns {Array} An array of playlist track items.
 */
export const getPlaylist = async (id) => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	try {
		const response = await axios(
			{
				method: "GET",
				url: `https://api.spotify.com/v1/playlists/` + id,
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);
		return response.data.tracks.items;
	} catch (error) {
		console.log("Error while fetching a single playlist: " + error.message);
	}
};

/**
 * Retrieves information about whether a list of albums is saved in the user's Spotify library.
 * @param {string[]} ids - An array of album IDs to check.
 * @returns {Promise<boolean[]>} - An array of boolean values indicating if each album is saved.
 */
export const areAlbumsSaved = async (ids) => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	try {
		const response = await axios(
			{
				method: "GET",
				url: `https://api.spotify.com/v1/me/albums/contains?ids=` + ids,
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);
		return response.data;
	} catch (error) {
		console.log("Error while fetching albums: " + error.message);
	}
};

/**
 * This function makes an asynchronous request to the Spotify API to add the specified album to the user's library.
 * @param {string} id - The ID of the album to be saved.
 * @returns {Promise} A Promise that resolves with the API response when the album is successfully saved.
 */
export const saveAlbum = async (id) => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	try {
		const response = await axios(
			{
				method: "PUT", //update
				url: `https://api.spotify.com/v1/me/albums?ids=` + id,
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);
		return response
	} catch (error) {
		console.log("Error while saving albums: " + error.message);
	}
};

/**
 * This function makes an asynchronous request to the Spotify API to remove the specified album to the user's library.
 * @param {string} id - The ID of the album to be removed.
 * @returns {Promise} A Promise that resolves with the API response when the album is successfully removed.
 */
export const unsaveAlbum = async (id) => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	try {
		const response = await axios(
			{
				method: "DELETE",
				url: `https://api.spotify.com/v1/me/albums?ids=` + id,
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);
		return response
	} catch (error) {
		console.log("Error while unsaving albums: " + error.message);
	}
};

/**
 * Fetches podcast episodes for the given podcast ID using the Spotify API.
 * @param {string} podcastId - The ID of the podcast for which episodes are to be fetched.
 * @returns {Promise} A Promise that resolves with the response from the API if successful.
 */
export const getPodcastEpisodes = async (podcastId) => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	try {
		const response = await axios(
			{
				method: "GET",
				url: `https://api.spotify.com/v1/shows/` + podcastId + `/episodes?limit=50`,
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);
		return response.data.items;
	} catch (error) {
		console.log("Error while fetching podcast: " + error.message);
	}
};

/**
 * Fetches the top tracks of a specific artist based on the provided artist ID and country code.
 * @param {string} artistId - The ID of the artist for which top tracks are to be fetched.
 * @returns {Array} An array containing the top tracks of the specified artist.
 */
export const getArtistTopTracks = async (artistId) => {
	const accessToken = await AsyncStorage.getItem("spotifyToken");
	try {

		const response = await axios(
			{
				method: "GET",
				url: `https://api.spotify.com/v1/artists/` + artistId + `/top-tracks?country=ES`,
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);
		return response.data.tracks;
	} catch (error) {
		console.log("Error while fetching specific artist: " + error.message);
	}
};


