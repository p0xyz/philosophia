declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGElement>>;
  export default content;
}

export type NavigatorWithUserAgentDataType = Navigator & {
  userAgentData: {
    brands: {
      brand: string;
      version: string;
    }[];
    mobile: boolean;
    platform: string;
  };
};
