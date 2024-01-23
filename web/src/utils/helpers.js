import { contentType, sideCardStrings } from "./strings"

/**
 * Generates a string indicating the owner of a content item.
 * @param {object} item - The content item for which the owner information is to be parsed.
 * @returns {string} - A formatted string indicating the type and owner of the content item.
 */
export const parseOwner = (item) => {
  if (item.type === contentType.album) {
    return sideCardStrings.album + item.label
  } else if (item.type === contentType.playlist) {
    return sideCardStrings.playlist + item.owner.display_name
  } else if (item.type === contentType.podcast) {
    return sideCardStrings.podcast + item.publisher
  }
}

/**
 * Extracts artist names from an array of artist objects and returns them as a comma-separated string.
 * @param {Array} artists
 * @returns {string}
 */
export function extractArtistNames(artists) {
  const artistNames = artists.map(artist => artist.name);
  const joinedNames = artistNames.join(', ');

  return joinedNames;
}