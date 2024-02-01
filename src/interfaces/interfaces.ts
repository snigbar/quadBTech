import React, { ReactNode } from "react";

export interface TChildren {
  children: ReactNode;
}

export type TFormData = {
  name: string;
  email: string;
  ShowName: string;
};

export type TBookings = {
  mybookings: TFormData[];
};

export type TShow = {
  score: number;
  show: {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: string[];
    status: string;
    runtime: number;
    averageRuntime: number;
    premiered: string;
    ended: string;
    officialSite: string;
    schedule: {
      time: string;
      days: string[];
    };
    rating: {
      average: number;
    };
    weight: number;
    network: {
      id: number;
      name: string;
      country: {
        name: string;
        code: string;
        timezone: string;
      };
      officialSite: null | string;
    };
    webChannel: null;
    dvdCountry: null;
    externals: {
      tvrage: null;
      thetvdb: number;
      imdb: string;
    };
    image: {
      medium: string;
      original: string;
    };
    summary: string;
    updated: number;
    _links: {
      self: {
        href: string;
      };
      previousepisode: {
        href: string;
      };
    };
  };
};

export type TContextData = {
  data: null | TShow[];
  myBookings: TBookings;
  error: null | string;
  setBookings: (param: TFormData) => void;
  showModal: boolean;
  setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
};
