const baseUrl = "http://localhost:3000/api/v1/"

// STORIES

const getStories = (options) => {
  const { success, fail } = options
  return wx.request({
    url: baseUrl + "stories",
    method: "get",
    success,
    fail
  })
}

const getStory = options => {
  const { id, success, fail } = options
  return wx.request({
    url: baseUrl + `stories/${id}`,
    method: "get",
    success,
    fail
  })
}

const createStory = options => {
  const { data, success, fail } = options
  return wx.request({
    url: baseUrl + "stories",
    method: "post",
    data,
    success,
    fail
  })
}

const updateStory = options => {
  const { id, data, success, fail } = options
  return wx.request({
    url: baseUrl + `stories/${id}`,
    method: "patch",
    data,
    success,
    fail
  })
}

const deleteStory = options => {
  const { id, success, fail } = options
  return wx.request({
    url: baseUrl + `stories/${id}`,
    method: "delete",
    success,
    fail
  })
}

// COMMENTS

const getComments = (options) => {
  const { storyId, success, fail } = options
  return wx.resquest({
    url: baseUrl + `stories/${storyId}/comments`,
    method: "get",
    success,
    fail
  })
}

const getComment = options => {
  const { id, success, fail } = options
  return wx.request({
    url: baseUrl + `comments/${id}`,
    method: "get",
    success,
    fail
  })
}

const createComment = options => {
  const { storyId, data, success, fail } = options
  return wx.request({
    url: baseUrl + `stories/${storyId}/comments`,
    method: "post",
    data,
    success,
    fail
  })
}

const updateComment = options => {
  const { id, data, success, fail } = options
  return wx.request({
    url: baseUrl + `comments/${id}`,
    method: "patch",
    data,
    success,
    fail
  })
}

const deleteComment = options => {
  const { id, success, fail } = options
  return wx.request({
    url: baseUrl + `comments/${id}`,
    method: "delete",
    success,
    fail
  })
}

export default {
  getStories,
  getStory,
  createStory,
  updateStory,
  deleteStory,
  getComments,
  getComment,
  createComment,
  updateComment,
  deleteComment
}