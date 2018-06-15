import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comment } from '../shared/models/comment.model';
import { ApiService } from '../shared/services/api/api.service';
import { ResourceService } from '../shared/services/api/resource.service';
@Injectable()
export class CommentsService extends ResourceService<Comment> {
  public url: string;

  constructor(_apiService: ApiService, http: HttpClient) {
    super('comentarios', _apiService);
  }
}
