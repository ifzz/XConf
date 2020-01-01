import request from '@/utils/request'

export function getClusters(params) {
  return request({
    url: '/clusters',
    method: 'get',
    params
  })
}

export function createCluster(data) {
  return request({
    url: '/clusters',
    method: 'post',
    data
  })
}

export function deleteCluster(data) {
  return request({
    url: '/clusters',
    method: 'delete',
    data
  })
}
