export interface IMediaProvider {
  providerName: string;
}

export interface IVideoProvider extends IMediaProvider {
  generateVideo(prompt: string, duration: number, imageReference?: string): Promise<string>; // Returns URL
}

export interface IAudioProvider extends IMediaProvider {
  generateTTS(text: string, voiceId: string): Promise<string>;
}

export interface IImageProvider extends IMediaProvider {
  generateImage(prompt: string): Promise<string>;
}

export interface IAvatarProvider extends IMediaProvider {
  generatePresenter(script: string, avatarId: string): Promise<string>;
}
