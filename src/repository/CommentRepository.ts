import type CommentWrite from '@/entity/comment/CommentWrite'
import { inject, singleton } from 'tsyringe'
import HttpRepository from './HttpRepository'

@singleton()
export default class CommentRepository {
  constructor(@inject(HttpRepository) private readonly httpRepository: HttpRepository) {}

  public async write(commentWrite: CommentWrite, postId: number): Promise<void> {
    return this.httpRepository.post({
      path: '/api/posts/${postId}/comments',
      body: commentWrite
    })
  }

  public async delete(id: number): Promise<void> {
    return
  }

  public async updateComment(comment: Comment): Promise<void> {
    return
  }
}
