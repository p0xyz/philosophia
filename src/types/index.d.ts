declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGElement>>;
  export default content;
}

export type UserAgentDataType = {
  brands: {
    brand: string;
    version: string;
  }[];
  mobile: boolean;
  platform: string;
};

export type NavigatorWithUserAgentDataType = Navigator & {
  userAgentData: UserAgentDataType;
};
