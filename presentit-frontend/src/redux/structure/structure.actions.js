

export const addToPath = (newPathEntry) => ({
    type: 'ADD_TO_PATH',
    payload: newPathEntry
})

export const setCurrentFolderId = (newFolderId) => ({
    type: 'SET_CURRENT_FOLDER_ID',
    payload: newFolderId
})

export const removeFromPath = (entryToRemove) => ({
    type: 'REMOVE_FROM_PATH',
    payload: entryToRemove
})

export const setPathFrom = (pathIndex) => ({
    type: 'SET_PATH_FROM',
    payload: pathIndex
})