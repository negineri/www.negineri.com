export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};










export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};


export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  authors?: Maybe<Array<Maybe<SiteSiteMetadataAuthors>>>;
};

export type SiteSiteMetadataAuthors = {
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type SiteFunction = Node & {
  apiRoute: Scalars['String'];
  originalFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageContext = {
  post?: Maybe<SitePageContextPost>;
  language?: Maybe<Scalars['String']>;
  intl?: Maybe<SitePageContextIntl>;
  blogPosts?: Maybe<SitePageContextBlogPosts>;
  contents?: Maybe<SitePageContextContents>;
};

export type SitePageContextPost = {
  ja?: Maybe<SitePageContextPostJa>;
};

export type SitePageContextPostJa = {
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<SitePageContextPostJaBody>;
  node_locale?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type SitePageContextPostJaBody = {
  childMarkdownRemark?: Maybe<SitePageContextPostJaBodyChildMarkdownRemark>;
};

export type SitePageContextPostJaBodyChildMarkdownRemark = {
  html?: Maybe<Scalars['String']>;
};

export type SitePageContextIntl = {
  language?: Maybe<Scalars['String']>;
  languages?: Maybe<Array<Maybe<Scalars['String']>>>;
  messages?: Maybe<SitePageContextIntlMessages>;
  routed?: Maybe<Scalars['Boolean']>;
  originalPath?: Maybe<Scalars['String']>;
  redirect?: Maybe<Scalars['Boolean']>;
  defaultLanguage?: Maybe<Scalars['String']>;
};

export type SitePageContextIntlMessages = {
  components_Home_blog?: Maybe<Scalars['String']>;
  components_Home_blogPosts?: Maybe<Scalars['String']>;
  components_Home_description?: Maybe<Scalars['String']>;
  components_Home_services?: Maybe<Scalars['String']>;
  components_Minecraft_address?: Maybe<Scalars['String']>;
  components_Minecraft_description?: Maybe<Scalars['String']>;
  components_Minecraft_map?: Maybe<Scalars['String']>;
  components_Minecraft_plugins?: Maybe<Scalars['String']>;
  components_Minecraft_pluginsList?: Maybe<Scalars['String']>;
  components_Minecraft_prohibitedMatters?: Maybe<Scalars['String']>;
  components_Minecraft_prohibitedMatters1?: Maybe<Scalars['String']>;
  components_Minecraft_prohibitedMatters2?: Maybe<Scalars['String']>;
  components_Minecraft_rule?: Maybe<Scalars['String']>;
  components_Minecraft_ruleDescription1?: Maybe<Scalars['String']>;
  components_Minecraft_ruleDescription2?: Maybe<Scalars['String']>;
  components_Minecraft_ruleDescription3?: Maybe<Scalars['String']>;
  components_Minecraft_title?: Maybe<Scalars['String']>;
  components_Minecraft_version?: Maybe<Scalars['String']>;
  templates_blog_posts_title?: Maybe<Scalars['String']>;
  templates_minecraft_plugins_title?: Maybe<Scalars['String']>;
};

export type SitePageContextBlogPosts = {
  _6KiX6Zu49VdgHlqYh1eF9W?: Maybe<SitePageContextBlogPosts_6KiX6Zu49VdgHlqYh1eF9W>;
  JDRhIXJSIowkvvC69T5aD?: Maybe<SitePageContextBlogPostsJdRhIxjsIowkvvC69T5aD>;
  _38gxn8P23T7Y8S9Pz1FSXm?: Maybe<SitePageContextBlogPosts_38gxn8P23T7Y8S9Pz1FsXm>;
  _3g76xvOUM1h1HHJapNSc8t?: Maybe<SitePageContextBlogPosts_3g76xvOum1h1HhJapNSc8t>;
  _64XDT2hjdHGIGY5PoG3iP?: Maybe<SitePageContextBlogPosts_64Xdt2hjdHgigy5PoG3iP>;
};

export type SitePageContextBlogPosts_6KiX6Zu49VdgHlqYh1eF9W = {
  ja?: Maybe<SitePageContextBlogPosts_6KiX6Zu49VdgHlqYh1eF9WJa>;
};

export type SitePageContextBlogPosts_6KiX6Zu49VdgHlqYh1eF9WJa = {
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<SitePageContextBlogPosts_6KiX6Zu49VdgHlqYh1eF9WJaBody>;
  node_locale?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type SitePageContextBlogPosts_6KiX6Zu49VdgHlqYh1eF9WJaBody = {
  childMarkdownRemark?: Maybe<SitePageContextBlogPosts_6KiX6Zu49VdgHlqYh1eF9WJaBodyChildMarkdownRemark>;
};

export type SitePageContextBlogPosts_6KiX6Zu49VdgHlqYh1eF9WJaBodyChildMarkdownRemark = {
  html?: Maybe<Scalars['String']>;
};

export type SitePageContextBlogPostsJdRhIxjsIowkvvC69T5aD = {
  ja?: Maybe<SitePageContextBlogPostsJdRhIxjsIowkvvC69T5aDJa>;
};

export type SitePageContextBlogPostsJdRhIxjsIowkvvC69T5aDJa = {
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<SitePageContextBlogPostsJdRhIxjsIowkvvC69T5aDJaBody>;
  node_locale?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type SitePageContextBlogPostsJdRhIxjsIowkvvC69T5aDJaBody = {
  childMarkdownRemark?: Maybe<SitePageContextBlogPostsJdRhIxjsIowkvvC69T5aDJaBodyChildMarkdownRemark>;
};

export type SitePageContextBlogPostsJdRhIxjsIowkvvC69T5aDJaBodyChildMarkdownRemark = {
  html?: Maybe<Scalars['String']>;
};

export type SitePageContextBlogPosts_38gxn8P23T7Y8S9Pz1FsXm = {
  ja?: Maybe<SitePageContextBlogPosts_38gxn8P23T7Y8S9Pz1FsXmJa>;
};

export type SitePageContextBlogPosts_38gxn8P23T7Y8S9Pz1FsXmJa = {
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<SitePageContextBlogPosts_38gxn8P23T7Y8S9Pz1FsXmJaBody>;
  node_locale?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type SitePageContextBlogPosts_38gxn8P23T7Y8S9Pz1FsXmJaBody = {
  childMarkdownRemark?: Maybe<SitePageContextBlogPosts_38gxn8P23T7Y8S9Pz1FsXmJaBodyChildMarkdownRemark>;
};

export type SitePageContextBlogPosts_38gxn8P23T7Y8S9Pz1FsXmJaBodyChildMarkdownRemark = {
  html?: Maybe<Scalars['String']>;
};

export type SitePageContextBlogPosts_3g76xvOum1h1HhJapNSc8t = {
  ja?: Maybe<SitePageContextBlogPosts_3g76xvOum1h1HhJapNSc8tJa>;
};

export type SitePageContextBlogPosts_3g76xvOum1h1HhJapNSc8tJa = {
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<SitePageContextBlogPosts_3g76xvOum1h1HhJapNSc8tJaBody>;
  node_locale?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type SitePageContextBlogPosts_3g76xvOum1h1HhJapNSc8tJaBody = {
  childMarkdownRemark?: Maybe<SitePageContextBlogPosts_3g76xvOum1h1HhJapNSc8tJaBodyChildMarkdownRemark>;
};

export type SitePageContextBlogPosts_3g76xvOum1h1HhJapNSc8tJaBodyChildMarkdownRemark = {
  html?: Maybe<Scalars['String']>;
};

export type SitePageContextBlogPosts_64Xdt2hjdHgigy5PoG3iP = {
  ja?: Maybe<SitePageContextBlogPosts_64Xdt2hjdHgigy5PoG3iPJa>;
};

export type SitePageContextBlogPosts_64Xdt2hjdHgigy5PoG3iPJa = {
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<SitePageContextBlogPosts_64Xdt2hjdHgigy5PoG3iPJaBody>;
  node_locale?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type SitePageContextBlogPosts_64Xdt2hjdHgigy5PoG3iPJaBody = {
  childMarkdownRemark?: Maybe<SitePageContextBlogPosts_64Xdt2hjdHgigy5PoG3iPJaBodyChildMarkdownRemark>;
};

export type SitePageContextBlogPosts_64Xdt2hjdHgigy5PoG3iPJaBodyChildMarkdownRemark = {
  html?: Maybe<Scalars['String']>;
};

export type SitePageContextContents = {
  ja?: Maybe<SitePageContextContentsJa>;
  en?: Maybe<SitePageContextContentsEn>;
  _28oplOdibxbGimUGIubCxn?: Maybe<SitePageContextContents_28oplOdibxbGimUgIubCxn>;
  _1dyp1nVCAjMfaN4597UQv7?: Maybe<SitePageContextContents_1dyp1nVcAjMfaN4597UQv7>;
  _5noNGxDJjdxHDZRzaPnC8b?: Maybe<SitePageContextContents_5noNGxDJjdxHdzRzaPnC8b>;
  _24L9mnqEBDK8L2vdjKtEWe?: Maybe<SitePageContextContents_24L9mnqEbdk8L2vdjKtEWe>;
  _1oyo6jOm9JYZfYCYrN5kuY?: Maybe<SitePageContextContents_1oyo6jOm9JyZfYcYrN5kuY>;
  _6yK9yno9HiI40huAvyL4Ui?: Maybe<SitePageContextContents_6yK9yno9HiI40huAvyL4Ui>;
  _4Q36PPeOdcI7akE7i7o09Y?: Maybe<SitePageContextContents_4Q36PPeOdcI7akE7i7o09Y>;
  _3kuqefJH06undEWEYlsuVD?: Maybe<SitePageContextContents_3kuqefJh06undEweYlsuVd>;
  t3PY77IEBryB81o81ZfBx?: Maybe<SitePageContextContentsT3Py77IeBryB81o81ZfBx>;
  _47LQnfd860HadKUlsCiUv6?: Maybe<SitePageContextContents_47LQnfd860HadKUlsCiUv6>;
  _7BOAySzbnzTLWeCJM0atSF?: Maybe<SitePageContextContents_7BoAySzbnzTlWeCjm0atSf>;
};

export type SitePageContextContentsJa = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<SitePageContextContentsJaDescription>;
  body?: Maybe<SitePageContextContentsJaBody>;
  node_locale?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type SitePageContextContentsJaDescription = {
  description?: Maybe<Scalars['String']>;
};

export type SitePageContextContentsJaBody = {
  childMarkdownRemark?: Maybe<SitePageContextContentsJaBodyChildMarkdownRemark>;
};

export type SitePageContextContentsJaBodyChildMarkdownRemark = {
  html?: Maybe<Scalars['String']>;
};

export type SitePageContextContentsEn = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<SitePageContextContentsEnDescription>;
  body?: Maybe<SitePageContextContentsEnBody>;
  node_locale?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type SitePageContextContentsEnDescription = {
  description?: Maybe<Scalars['String']>;
};

export type SitePageContextContentsEnBody = {
  childMarkdownRemark?: Maybe<SitePageContextContentsEnBodyChildMarkdownRemark>;
};

export type SitePageContextContentsEnBodyChildMarkdownRemark = {
  html?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_28oplOdibxbGimUgIubCxn = {
  ja?: Maybe<SitePageContextContents_28oplOdibxbGimUgIubCxnJa>;
  en?: Maybe<SitePageContextContents_28oplOdibxbGimUgIubCxnEn>;
};

export type SitePageContextContents_28oplOdibxbGimUgIubCxnJa = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<SitePageContextContents_28oplOdibxbGimUgIubCxnJaDescription>;
  body?: Maybe<SitePageContextContents_28oplOdibxbGimUgIubCxnJaBody>;
  node_locale?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_28oplOdibxbGimUgIubCxnJaDescription = {
  description?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_28oplOdibxbGimUgIubCxnJaBody = {
  childMarkdownRemark?: Maybe<SitePageContextContents_28oplOdibxbGimUgIubCxnJaBodyChildMarkdownRemark>;
};

export type SitePageContextContents_28oplOdibxbGimUgIubCxnJaBodyChildMarkdownRemark = {
  html?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_28oplOdibxbGimUgIubCxnEn = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<SitePageContextContents_28oplOdibxbGimUgIubCxnEnDescription>;
  body?: Maybe<SitePageContextContents_28oplOdibxbGimUgIubCxnEnBody>;
  node_locale?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_28oplOdibxbGimUgIubCxnEnDescription = {
  description?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_28oplOdibxbGimUgIubCxnEnBody = {
  childMarkdownRemark?: Maybe<SitePageContextContents_28oplOdibxbGimUgIubCxnEnBodyChildMarkdownRemark>;
};

export type SitePageContextContents_28oplOdibxbGimUgIubCxnEnBodyChildMarkdownRemark = {
  html?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_1dyp1nVcAjMfaN4597UQv7 = {
  ja?: Maybe<SitePageContextContents_1dyp1nVcAjMfaN4597UQv7Ja>;
  en?: Maybe<SitePageContextContents_1dyp1nVcAjMfaN4597UQv7En>;
};

export type SitePageContextContents_1dyp1nVcAjMfaN4597UQv7Ja = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<SitePageContextContents_1dyp1nVcAjMfaN4597UQv7JaDescription>;
  body?: Maybe<SitePageContextContents_1dyp1nVcAjMfaN4597UQv7JaBody>;
  node_locale?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_1dyp1nVcAjMfaN4597UQv7JaDescription = {
  description?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_1dyp1nVcAjMfaN4597UQv7JaBody = {
  childMarkdownRemark?: Maybe<SitePageContextContents_1dyp1nVcAjMfaN4597UQv7JaBodyChildMarkdownRemark>;
};

export type SitePageContextContents_1dyp1nVcAjMfaN4597UQv7JaBodyChildMarkdownRemark = {
  html?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_1dyp1nVcAjMfaN4597UQv7En = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<SitePageContextContents_1dyp1nVcAjMfaN4597UQv7EnDescription>;
  body?: Maybe<SitePageContextContents_1dyp1nVcAjMfaN4597UQv7EnBody>;
  node_locale?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_1dyp1nVcAjMfaN4597UQv7EnDescription = {
  description?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_1dyp1nVcAjMfaN4597UQv7EnBody = {
  childMarkdownRemark?: Maybe<SitePageContextContents_1dyp1nVcAjMfaN4597UQv7EnBodyChildMarkdownRemark>;
};

export type SitePageContextContents_1dyp1nVcAjMfaN4597UQv7EnBodyChildMarkdownRemark = {
  html?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_5noNGxDJjdxHdzRzaPnC8b = {
  ja?: Maybe<SitePageContextContents_5noNGxDJjdxHdzRzaPnC8bJa>;
  en?: Maybe<SitePageContextContents_5noNGxDJjdxHdzRzaPnC8bEn>;
};

export type SitePageContextContents_5noNGxDJjdxHdzRzaPnC8bJa = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<SitePageContextContents_5noNGxDJjdxHdzRzaPnC8bJaDescription>;
  body?: Maybe<SitePageContextContents_5noNGxDJjdxHdzRzaPnC8bJaBody>;
  node_locale?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_5noNGxDJjdxHdzRzaPnC8bJaDescription = {
  description?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_5noNGxDJjdxHdzRzaPnC8bJaBody = {
  childMarkdownRemark?: Maybe<SitePageContextContents_5noNGxDJjdxHdzRzaPnC8bJaBodyChildMarkdownRemark>;
};

export type SitePageContextContents_5noNGxDJjdxHdzRzaPnC8bJaBodyChildMarkdownRemark = {
  html?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_5noNGxDJjdxHdzRzaPnC8bEn = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<SitePageContextContents_5noNGxDJjdxHdzRzaPnC8bEnDescription>;
  body?: Maybe<SitePageContextContents_5noNGxDJjdxHdzRzaPnC8bEnBody>;
  node_locale?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_5noNGxDJjdxHdzRzaPnC8bEnDescription = {
  description?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_5noNGxDJjdxHdzRzaPnC8bEnBody = {
  childMarkdownRemark?: Maybe<SitePageContextContents_5noNGxDJjdxHdzRzaPnC8bEnBodyChildMarkdownRemark>;
};

export type SitePageContextContents_5noNGxDJjdxHdzRzaPnC8bEnBodyChildMarkdownRemark = {
  html?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_24L9mnqEbdk8L2vdjKtEWe = {
  ja?: Maybe<SitePageContextContents_24L9mnqEbdk8L2vdjKtEWeJa>;
  en?: Maybe<SitePageContextContents_24L9mnqEbdk8L2vdjKtEWeEn>;
};

export type SitePageContextContents_24L9mnqEbdk8L2vdjKtEWeJa = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<SitePageContextContents_24L9mnqEbdk8L2vdjKtEWeJaDescription>;
  body?: Maybe<SitePageContextContents_24L9mnqEbdk8L2vdjKtEWeJaBody>;
  node_locale?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_24L9mnqEbdk8L2vdjKtEWeJaDescription = {
  description?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_24L9mnqEbdk8L2vdjKtEWeJaBody = {
  childMarkdownRemark?: Maybe<SitePageContextContents_24L9mnqEbdk8L2vdjKtEWeJaBodyChildMarkdownRemark>;
};

export type SitePageContextContents_24L9mnqEbdk8L2vdjKtEWeJaBodyChildMarkdownRemark = {
  html?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_24L9mnqEbdk8L2vdjKtEWeEn = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<SitePageContextContents_24L9mnqEbdk8L2vdjKtEWeEnDescription>;
  body?: Maybe<SitePageContextContents_24L9mnqEbdk8L2vdjKtEWeEnBody>;
  node_locale?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_24L9mnqEbdk8L2vdjKtEWeEnDescription = {
  description?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_24L9mnqEbdk8L2vdjKtEWeEnBody = {
  childMarkdownRemark?: Maybe<SitePageContextContents_24L9mnqEbdk8L2vdjKtEWeEnBodyChildMarkdownRemark>;
};

export type SitePageContextContents_24L9mnqEbdk8L2vdjKtEWeEnBodyChildMarkdownRemark = {
  html?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_1oyo6jOm9JyZfYcYrN5kuY = {
  ja?: Maybe<SitePageContextContents_1oyo6jOm9JyZfYcYrN5kuYJa>;
  en?: Maybe<SitePageContextContents_1oyo6jOm9JyZfYcYrN5kuYEn>;
};

export type SitePageContextContents_1oyo6jOm9JyZfYcYrN5kuYJa = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<SitePageContextContents_1oyo6jOm9JyZfYcYrN5kuYJaDescription>;
  body?: Maybe<SitePageContextContents_1oyo6jOm9JyZfYcYrN5kuYJaBody>;
  node_locale?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_1oyo6jOm9JyZfYcYrN5kuYJaDescription = {
  description?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_1oyo6jOm9JyZfYcYrN5kuYJaBody = {
  childMarkdownRemark?: Maybe<SitePageContextContents_1oyo6jOm9JyZfYcYrN5kuYJaBodyChildMarkdownRemark>;
};

export type SitePageContextContents_1oyo6jOm9JyZfYcYrN5kuYJaBodyChildMarkdownRemark = {
  html?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_1oyo6jOm9JyZfYcYrN5kuYEn = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<SitePageContextContents_1oyo6jOm9JyZfYcYrN5kuYEnDescription>;
  body?: Maybe<SitePageContextContents_1oyo6jOm9JyZfYcYrN5kuYEnBody>;
  node_locale?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_1oyo6jOm9JyZfYcYrN5kuYEnDescription = {
  description?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_1oyo6jOm9JyZfYcYrN5kuYEnBody = {
  childMarkdownRemark?: Maybe<SitePageContextContents_1oyo6jOm9JyZfYcYrN5kuYEnBodyChildMarkdownRemark>;
};

export type SitePageContextContents_1oyo6jOm9JyZfYcYrN5kuYEnBodyChildMarkdownRemark = {
  html?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_6yK9yno9HiI40huAvyL4Ui = {
  ja?: Maybe<SitePageContextContents_6yK9yno9HiI40huAvyL4UiJa>;
  en?: Maybe<SitePageContextContents_6yK9yno9HiI40huAvyL4UiEn>;
};

export type SitePageContextContents_6yK9yno9HiI40huAvyL4UiJa = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<SitePageContextContents_6yK9yno9HiI40huAvyL4UiJaDescription>;
  body?: Maybe<SitePageContextContents_6yK9yno9HiI40huAvyL4UiJaBody>;
  node_locale?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_6yK9yno9HiI40huAvyL4UiJaDescription = {
  description?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_6yK9yno9HiI40huAvyL4UiJaBody = {
  childMarkdownRemark?: Maybe<SitePageContextContents_6yK9yno9HiI40huAvyL4UiJaBodyChildMarkdownRemark>;
};

export type SitePageContextContents_6yK9yno9HiI40huAvyL4UiJaBodyChildMarkdownRemark = {
  html?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_6yK9yno9HiI40huAvyL4UiEn = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<SitePageContextContents_6yK9yno9HiI40huAvyL4UiEnDescription>;
  body?: Maybe<SitePageContextContents_6yK9yno9HiI40huAvyL4UiEnBody>;
  node_locale?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_6yK9yno9HiI40huAvyL4UiEnDescription = {
  description?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_6yK9yno9HiI40huAvyL4UiEnBody = {
  childMarkdownRemark?: Maybe<SitePageContextContents_6yK9yno9HiI40huAvyL4UiEnBodyChildMarkdownRemark>;
};

export type SitePageContextContents_6yK9yno9HiI40huAvyL4UiEnBodyChildMarkdownRemark = {
  html?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_4Q36PPeOdcI7akE7i7o09Y = {
  ja?: Maybe<SitePageContextContents_4Q36PPeOdcI7akE7i7o09YJa>;
  en?: Maybe<SitePageContextContents_4Q36PPeOdcI7akE7i7o09YEn>;
};

export type SitePageContextContents_4Q36PPeOdcI7akE7i7o09YJa = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<SitePageContextContents_4Q36PPeOdcI7akE7i7o09YJaDescription>;
  body?: Maybe<SitePageContextContents_4Q36PPeOdcI7akE7i7o09YJaBody>;
  node_locale?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_4Q36PPeOdcI7akE7i7o09YJaDescription = {
  description?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_4Q36PPeOdcI7akE7i7o09YJaBody = {
  childMarkdownRemark?: Maybe<SitePageContextContents_4Q36PPeOdcI7akE7i7o09YJaBodyChildMarkdownRemark>;
};

export type SitePageContextContents_4Q36PPeOdcI7akE7i7o09YJaBodyChildMarkdownRemark = {
  html?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_4Q36PPeOdcI7akE7i7o09YEn = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<SitePageContextContents_4Q36PPeOdcI7akE7i7o09YEnDescription>;
  body?: Maybe<SitePageContextContents_4Q36PPeOdcI7akE7i7o09YEnBody>;
  node_locale?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_4Q36PPeOdcI7akE7i7o09YEnDescription = {
  description?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_4Q36PPeOdcI7akE7i7o09YEnBody = {
  childMarkdownRemark?: Maybe<SitePageContextContents_4Q36PPeOdcI7akE7i7o09YEnBodyChildMarkdownRemark>;
};

export type SitePageContextContents_4Q36PPeOdcI7akE7i7o09YEnBodyChildMarkdownRemark = {
  html?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_3kuqefJh06undEweYlsuVd = {
  ja?: Maybe<SitePageContextContents_3kuqefJh06undEweYlsuVdJa>;
  en?: Maybe<SitePageContextContents_3kuqefJh06undEweYlsuVdEn>;
};

export type SitePageContextContents_3kuqefJh06undEweYlsuVdJa = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<SitePageContextContents_3kuqefJh06undEweYlsuVdJaDescription>;
  body?: Maybe<SitePageContextContents_3kuqefJh06undEweYlsuVdJaBody>;
  node_locale?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_3kuqefJh06undEweYlsuVdJaDescription = {
  description?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_3kuqefJh06undEweYlsuVdJaBody = {
  childMarkdownRemark?: Maybe<SitePageContextContents_3kuqefJh06undEweYlsuVdJaBodyChildMarkdownRemark>;
};

export type SitePageContextContents_3kuqefJh06undEweYlsuVdJaBodyChildMarkdownRemark = {
  html?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_3kuqefJh06undEweYlsuVdEn = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<SitePageContextContents_3kuqefJh06undEweYlsuVdEnDescription>;
  body?: Maybe<SitePageContextContents_3kuqefJh06undEweYlsuVdEnBody>;
  node_locale?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_3kuqefJh06undEweYlsuVdEnDescription = {
  description?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_3kuqefJh06undEweYlsuVdEnBody = {
  childMarkdownRemark?: Maybe<SitePageContextContents_3kuqefJh06undEweYlsuVdEnBodyChildMarkdownRemark>;
};

export type SitePageContextContents_3kuqefJh06undEweYlsuVdEnBodyChildMarkdownRemark = {
  html?: Maybe<Scalars['String']>;
};

export type SitePageContextContentsT3Py77IeBryB81o81ZfBx = {
  ja?: Maybe<SitePageContextContentsT3Py77IeBryB81o81ZfBxJa>;
  en?: Maybe<SitePageContextContentsT3Py77IeBryB81o81ZfBxEn>;
};

export type SitePageContextContentsT3Py77IeBryB81o81ZfBxJa = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<SitePageContextContentsT3Py77IeBryB81o81ZfBxJaDescription>;
  body?: Maybe<SitePageContextContentsT3Py77IeBryB81o81ZfBxJaBody>;
  node_locale?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type SitePageContextContentsT3Py77IeBryB81o81ZfBxJaDescription = {
  description?: Maybe<Scalars['String']>;
};

export type SitePageContextContentsT3Py77IeBryB81o81ZfBxJaBody = {
  childMarkdownRemark?: Maybe<SitePageContextContentsT3Py77IeBryB81o81ZfBxJaBodyChildMarkdownRemark>;
};

export type SitePageContextContentsT3Py77IeBryB81o81ZfBxJaBodyChildMarkdownRemark = {
  html?: Maybe<Scalars['String']>;
};

export type SitePageContextContentsT3Py77IeBryB81o81ZfBxEn = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<SitePageContextContentsT3Py77IeBryB81o81ZfBxEnDescription>;
  body?: Maybe<SitePageContextContentsT3Py77IeBryB81o81ZfBxEnBody>;
  node_locale?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type SitePageContextContentsT3Py77IeBryB81o81ZfBxEnDescription = {
  description?: Maybe<Scalars['String']>;
};

export type SitePageContextContentsT3Py77IeBryB81o81ZfBxEnBody = {
  childMarkdownRemark?: Maybe<SitePageContextContentsT3Py77IeBryB81o81ZfBxEnBodyChildMarkdownRemark>;
};

export type SitePageContextContentsT3Py77IeBryB81o81ZfBxEnBodyChildMarkdownRemark = {
  html?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_47LQnfd860HadKUlsCiUv6 = {
  ja?: Maybe<SitePageContextContents_47LQnfd860HadKUlsCiUv6Ja>;
  en?: Maybe<SitePageContextContents_47LQnfd860HadKUlsCiUv6En>;
};

export type SitePageContextContents_47LQnfd860HadKUlsCiUv6Ja = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<SitePageContextContents_47LQnfd860HadKUlsCiUv6JaDescription>;
  body?: Maybe<SitePageContextContents_47LQnfd860HadKUlsCiUv6JaBody>;
  node_locale?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_47LQnfd860HadKUlsCiUv6JaDescription = {
  description?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_47LQnfd860HadKUlsCiUv6JaBody = {
  childMarkdownRemark?: Maybe<SitePageContextContents_47LQnfd860HadKUlsCiUv6JaBodyChildMarkdownRemark>;
};

export type SitePageContextContents_47LQnfd860HadKUlsCiUv6JaBodyChildMarkdownRemark = {
  html?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_47LQnfd860HadKUlsCiUv6En = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<SitePageContextContents_47LQnfd860HadKUlsCiUv6EnDescription>;
  body?: Maybe<SitePageContextContents_47LQnfd860HadKUlsCiUv6EnBody>;
  node_locale?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_47LQnfd860HadKUlsCiUv6EnDescription = {
  description?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_47LQnfd860HadKUlsCiUv6EnBody = {
  childMarkdownRemark?: Maybe<SitePageContextContents_47LQnfd860HadKUlsCiUv6EnBodyChildMarkdownRemark>;
};

export type SitePageContextContents_47LQnfd860HadKUlsCiUv6EnBodyChildMarkdownRemark = {
  html?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_7BoAySzbnzTlWeCjm0atSf = {
  ja?: Maybe<SitePageContextContents_7BoAySzbnzTlWeCjm0atSfJa>;
  en?: Maybe<SitePageContextContents_7BoAySzbnzTlWeCjm0atSfEn>;
};

export type SitePageContextContents_7BoAySzbnzTlWeCjm0atSfJa = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<SitePageContextContents_7BoAySzbnzTlWeCjm0atSfJaDescription>;
  body?: Maybe<SitePageContextContents_7BoAySzbnzTlWeCjm0atSfJaBody>;
  node_locale?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_7BoAySzbnzTlWeCjm0atSfJaDescription = {
  description?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_7BoAySzbnzTlWeCjm0atSfJaBody = {
  childMarkdownRemark?: Maybe<SitePageContextContents_7BoAySzbnzTlWeCjm0atSfJaBodyChildMarkdownRemark>;
};

export type SitePageContextContents_7BoAySzbnzTlWeCjm0atSfJaBodyChildMarkdownRemark = {
  html?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_7BoAySzbnzTlWeCjm0atSfEn = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<SitePageContextContents_7BoAySzbnzTlWeCjm0atSfEnDescription>;
  body?: Maybe<SitePageContextContents_7BoAySzbnzTlWeCjm0atSfEnBody>;
  node_locale?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_7BoAySzbnzTlWeCjm0atSfEnDescription = {
  description?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_7BoAySzbnzTlWeCjm0atSfEnBody = {
  childMarkdownRemark?: Maybe<SitePageContextContents_7BoAySzbnzTlWeCjm0atSfEnBodyChildMarkdownRemark>;
};

export type SitePageContextContents_7BoAySzbnzTlWeCjm0atSfEnBodyChildMarkdownRemark = {
  html?: Maybe<Scalars['String']>;
};

export type ThemeUiConfig = Node & {
  preset?: Maybe<Scalars['JSON']>;
  prismPreset?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MarkdownHeading = {
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingLevels = 
  'h1' |
  'h2' |
  'h3' |
  'h4' |
  'h5' |
  'h6';

export type MarkdownExcerptFormats = 
  'PLAIN' |
  'HTML' |
  'MARKDOWN';

export type MarkdownWordCount = {
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MarkdownRemark = Node & {
  id: Scalars['ID'];
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
  excerpt?: Maybe<Scalars['String']>;
  rawMarkdownBody?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  excerptAst?: Maybe<Scalars['JSON']>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead?: Maybe<Scalars['Int']>;
  tableOfContents?: Maybe<Scalars['String']>;
  wordCount?: Maybe<MarkdownWordCount>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatter = {
  title?: Maybe<Scalars['String']>;
};

export type ContentfulEntry = {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ContentfulReference = {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
};

export type ContentfulAsset = ContentfulReference & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  file?: Maybe<ContentfulAssetFile>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  node_locale?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulAssetSys>;
  fixed?: Maybe<ContentfulFixed>;
  fluid?: Maybe<ContentfulFluid>;
  gatsbyImageData?: Maybe<Scalars['JSON']>;
  resize?: Maybe<ContentfulResize>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulAssetCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAssetUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetGatsbyImageDataArgs = {
  layout?: Maybe<ContentfulImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ContentfulImagePlaceholder>;
  formats?: Maybe<Array<Maybe<ContentfulImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  quality?: Maybe<Scalars['Int']>;
};


export type ContentfulAssetResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  toFormat?: Maybe<ContentfulImageFormat>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};

export type ContentfulAssetFile = {
  url?: Maybe<Scalars['String']>;
  details?: Maybe<ContentfulAssetFileDetails>;
  fileName?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
};

export type ContentfulAssetFileDetails = {
  size?: Maybe<Scalars['Int']>;
  image?: Maybe<ContentfulAssetFileDetailsImage>;
};

export type ContentfulAssetFileDetailsImage = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
};

export type ContentfulFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulImageFormat = 
  'NO_CHANGE' |
  'AUTO' |
  'JPG' |
  'PNG' |
  'WEBP';

export type ImageResizingBehavior = 
  'NO_CHANGE' |
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  'PAD' |
  /** Crop a part of the original image to match the specified size. */
  'CROP' |
  /** Crop the image to the specified dimensions, if the original image is smaller than these dimensions, then the image will be upscaled. */
  'FILL' |
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  'THUMB' |
  /** Scale the image regardless of the original aspect ratio. */
  'SCALE';

export type ContentfulImageCropFocus = 
  'TOP' |
  'TOP_LEFT' |
  'TOP_RIGHT' |
  'BOTTOM' |
  'BOTTOM_RIGHT' |
  'BOTTOM_LEFT' |
  'RIGHT' |
  'LEFT' |
  'FACE' |
  'FACES' |
  'CENTER';

export type ContentfulFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulImageLayout = 
  'FIXED' |
  'FULL_WIDTH' |
  'CONSTRAINED';

export type ContentfulImagePlaceholder = 
  'DOMINANT_COLOR' |
  'TRACED_SVG' |
  'BLURRED' |
  'NONE';

export type ContentfulResize = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type ContentfulPerson = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ContentfulDefBlogPost = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ContentfulBlogPost1 = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  body?: Maybe<ContentfulBlogPost1BodyTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulBlogPost1Sys>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Returns all children nodes filtered by type contentfulBlogPost1BodyTextNode */
  childrenContentfulBlogPost1BodyTextNode?: Maybe<Array<Maybe<ContentfulBlogPost1BodyTextNode>>>;
  /** Returns the first child node of type contentfulBlogPost1BodyTextNode or null if there are no children of given type on this node */
  childContentfulBlogPost1BodyTextNode?: Maybe<ContentfulBlogPost1BodyTextNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulBlogPost1CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulBlogPost1UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPost1Sys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulBlogPost1SysContentType>;
};

export type ContentfulBlogPost1SysContentType = {
  sys?: Maybe<ContentfulBlogPost1SysContentTypeSys>;
};

export type ContentfulBlogPost1SysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulMinecraftPlugin = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<ContentfulMinecraftPluginDescriptionTextNode>;
  body?: Maybe<ContentfulMinecraftPluginBodyTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulMinecraftPluginSys>;
  /** Returns all children nodes filtered by type contentfulMinecraftPluginBodyTextNode */
  childrenContentfulMinecraftPluginBodyTextNode?: Maybe<Array<Maybe<ContentfulMinecraftPluginBodyTextNode>>>;
  /** Returns the first child node of type contentfulMinecraftPluginBodyTextNode or null if there are no children of given type on this node */
  childContentfulMinecraftPluginBodyTextNode?: Maybe<ContentfulMinecraftPluginBodyTextNode>;
  /** Returns all children nodes filtered by type contentfulMinecraftPluginDescriptionTextNode */
  childrenContentfulMinecraftPluginDescriptionTextNode?: Maybe<Array<Maybe<ContentfulMinecraftPluginDescriptionTextNode>>>;
  /** Returns the first child node of type contentfulMinecraftPluginDescriptionTextNode or null if there are no children of given type on this node */
  childContentfulMinecraftPluginDescriptionTextNode?: Maybe<ContentfulMinecraftPluginDescriptionTextNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulMinecraftPluginCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulMinecraftPluginUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulMinecraftPluginSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulMinecraftPluginSysContentType>;
};

export type ContentfulMinecraftPluginSysContentType = {
  sys?: Maybe<ContentfulMinecraftPluginSysContentTypeSys>;
};

export type ContentfulMinecraftPluginSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulMinecraftPluginBodyTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  body?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulMinecraftPluginBodyTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulMinecraftPluginBodyTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulMinecraftPluginDescriptionTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  description?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulMinecraftPluginDescriptionTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulMinecraftPluginDescriptionTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPost1BodyTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  body?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulBlogPost1BodyTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulBlogPost1BodyTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulContentType = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  displayField?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulContentTypeSys>;
};

export type ContentfulContentTypeSys = {
  type?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginPluginOptions = {
  plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>;
  fileName?: Maybe<Scalars['String']>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  spaceId?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  environment?: Maybe<Scalars['String']>;
  downloadLocal?: Maybe<Scalars['Boolean']>;
  forceFullSync?: Maybe<Scalars['Boolean']>;
  pageLimit?: Maybe<Scalars['Int']>;
  assetDownloadWorkers?: Maybe<Scalars['Int']>;
  useNameForId?: Maybe<Scalars['Boolean']>;
  path?: Maybe<Scalars['String']>;
  languages?: Maybe<Array<Maybe<Scalars['String']>>>;
  defaultLanguage?: Maybe<Scalars['String']>;
  redirect?: Maybe<Scalars['Boolean']>;
  extensions?: Maybe<Array<Maybe<Scalars['String']>>>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsPlugins = {
  resolve?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginFilepath?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  themeUiConfig?: Maybe<ThemeUiConfig>;
  allThemeUiConfig: ThemeUiConfigConnection;
  markdownRemark?: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  contentfulEntry?: Maybe<ContentfulEntry>;
  allContentfulEntry: ContentfulEntryConnection;
  contentfulAsset?: Maybe<ContentfulAsset>;
  allContentfulAsset: ContentfulAssetConnection;
  contentfulPerson?: Maybe<ContentfulPerson>;
  allContentfulPerson: ContentfulPersonConnection;
  contentfulDefBlogPost?: Maybe<ContentfulDefBlogPost>;
  allContentfulDefBlogPost: ContentfulDefBlogPostConnection;
  contentfulBlogPost1?: Maybe<ContentfulBlogPost1>;
  allContentfulBlogPost1: ContentfulBlogPost1Connection;
  contentfulMinecraftPlugin?: Maybe<ContentfulMinecraftPlugin>;
  allContentfulMinecraftPlugin: ContentfulMinecraftPluginConnection;
  contentfulMinecraftPluginBodyTextNode?: Maybe<ContentfulMinecraftPluginBodyTextNode>;
  allContentfulMinecraftPluginBodyTextNode: ContentfulMinecraftPluginBodyTextNodeConnection;
  contentfulMinecraftPluginDescriptionTextNode?: Maybe<ContentfulMinecraftPluginDescriptionTextNode>;
  allContentfulMinecraftPluginDescriptionTextNode: ContentfulMinecraftPluginDescriptionTextNodeConnection;
  contentfulBlogPost1BodyTextNode?: Maybe<ContentfulBlogPost1BodyTextNode>;
  allContentfulBlogPost1BodyTextNode: ContentfulBlogPost1BodyTextNodeConnection;
  contentfulContentType?: Maybe<ContentfulContentType>;
  allContentfulContentType: ContentfulContentTypeConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  apiRoute?: Maybe<StringQueryOperatorInput>;
  originalFilePath?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: Maybe<SiteFunctionFilterInput>;
  sort?: Maybe<SiteFunctionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryThemeUiConfigArgs = {
  preset?: Maybe<JsonQueryOperatorInput>;
  prismPreset?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllThemeUiConfigArgs = {
  filter?: Maybe<ThemeUiConfigFilterInput>;
  sort?: Maybe<ThemeUiConfigSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>;
  sort?: Maybe<MarkdownRemarkSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulEntryArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulEntryArgs = {
  filter?: Maybe<ContentfulEntryFilterInput>;
  sort?: Maybe<ContentfulEntrySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAssetArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulAssetSysFilterInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulAssetArgs = {
  filter?: Maybe<ContentfulAssetFilterInput>;
  sort?: Maybe<ContentfulAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPersonArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulPersonArgs = {
  filter?: Maybe<ContentfulPersonFilterInput>;
  sort?: Maybe<ContentfulPersonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulDefBlogPostArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulDefBlogPostArgs = {
  filter?: Maybe<ContentfulDefBlogPostFilterInput>;
  sort?: Maybe<ContentfulDefBlogPostSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlogPost1Args = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<ContentfulBlogPost1BodyTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlogPost1SysFilterInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  childrenContentfulBlogPost1BodyTextNode?: Maybe<ContentfulBlogPost1BodyTextNodeFilterListInput>;
  childContentfulBlogPost1BodyTextNode?: Maybe<ContentfulBlogPost1BodyTextNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulBlogPost1Args = {
  filter?: Maybe<ContentfulBlogPost1FilterInput>;
  sort?: Maybe<ContentfulBlogPost1SortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulMinecraftPluginArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<ContentfulMinecraftPluginDescriptionTextNodeFilterInput>;
  body?: Maybe<ContentfulMinecraftPluginBodyTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulMinecraftPluginSysFilterInput>;
  childrenContentfulMinecraftPluginBodyTextNode?: Maybe<ContentfulMinecraftPluginBodyTextNodeFilterListInput>;
  childContentfulMinecraftPluginBodyTextNode?: Maybe<ContentfulMinecraftPluginBodyTextNodeFilterInput>;
  childrenContentfulMinecraftPluginDescriptionTextNode?: Maybe<ContentfulMinecraftPluginDescriptionTextNodeFilterListInput>;
  childContentfulMinecraftPluginDescriptionTextNode?: Maybe<ContentfulMinecraftPluginDescriptionTextNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulMinecraftPluginArgs = {
  filter?: Maybe<ContentfulMinecraftPluginFilterInput>;
  sort?: Maybe<ContentfulMinecraftPluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulMinecraftPluginBodyTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  body?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulMinecraftPluginBodyTextNodeSysFilterInput>;
  childrenMarkdownRemark?: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulMinecraftPluginBodyTextNodeArgs = {
  filter?: Maybe<ContentfulMinecraftPluginBodyTextNodeFilterInput>;
  sort?: Maybe<ContentfulMinecraftPluginBodyTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulMinecraftPluginDescriptionTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulMinecraftPluginDescriptionTextNodeSysFilterInput>;
  childrenMarkdownRemark?: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulMinecraftPluginDescriptionTextNodeArgs = {
  filter?: Maybe<ContentfulMinecraftPluginDescriptionTextNodeFilterInput>;
  sort?: Maybe<ContentfulMinecraftPluginDescriptionTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlogPost1BodyTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  body?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulBlogPost1BodyTextNodeSysFilterInput>;
  childrenMarkdownRemark?: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulBlogPost1BodyTextNodeArgs = {
  filter?: Maybe<ContentfulBlogPost1BodyTextNodeFilterInput>;
  sort?: Maybe<ContentfulBlogPost1BodyTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulContentTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulContentTypeSysFilterInput>;
};


export type QueryAllContentfulContentTypeArgs = {
  filter?: Maybe<ContentfulContentTypeFilterInput>;
  sort?: Maybe<ContentfulContentTypeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type FileFieldsEnum = 
  'sourceInstanceName' |
  'absolutePath' |
  'relativePath' |
  'extension' |
  'size' |
  'prettySize' |
  'modifiedTime' |
  'accessTime' |
  'changeTime' |
  'birthTime' |
  'root' |
  'dir' |
  'base' |
  'ext' |
  'name' |
  'relativeDirectory' |
  'dev' |
  'mode' |
  'nlink' |
  'uid' |
  'gid' |
  'rdev' |
  'ino' |
  'atimeMs' |
  'mtimeMs' |
  'ctimeMs' |
  'atime' |
  'mtime' |
  'ctime' |
  'birthtime' |
  'birthtimeMs' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum = 
  'ASC' |
  'DESC';

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum = 
  'sourceInstanceName' |
  'absolutePath' |
  'relativePath' |
  'extension' |
  'size' |
  'prettySize' |
  'modifiedTime' |
  'accessTime' |
  'changeTime' |
  'birthTime' |
  'root' |
  'dir' |
  'base' |
  'ext' |
  'name' |
  'relativeDirectory' |
  'dev' |
  'mode' |
  'nlink' |
  'uid' |
  'gid' |
  'rdev' |
  'ino' |
  'atimeMs' |
  'mtimeMs' |
  'ctimeMs' |
  'atime' |
  'mtime' |
  'ctime' |
  'birthtime' |
  'birthtimeMs' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  authors?: Maybe<SiteSiteMetadataAuthorsFilterListInput>;
};

export type SiteSiteMetadataAuthorsFilterListInput = {
  elemMatch?: Maybe<SiteSiteMetadataAuthorsFilterInput>;
};

export type SiteSiteMetadataAuthorsFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum = 
  'buildTime' |
  'siteMetadata___title' |
  'siteMetadata___description' |
  'siteMetadata___authors' |
  'siteMetadata___authors___name' |
  'siteMetadata___authors___slug' |
  'port' |
  'host' |
  'polyfill' |
  'pathPrefix' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteFunctionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldsEnum = 
  'apiRoute' |
  'originalFilePath' |
  'relativeCompiledFilePath' |
  'absoluteCompiledFilePath' |
  'matchPath' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteFunctionFilterInput = {
  apiRoute?: Maybe<StringQueryOperatorInput>;
  originalFilePath?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  fields?: Maybe<Array<Maybe<SiteFunctionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePageContextFilterInput = {
  post?: Maybe<SitePageContextPostFilterInput>;
  language?: Maybe<StringQueryOperatorInput>;
  intl?: Maybe<SitePageContextIntlFilterInput>;
  blogPosts?: Maybe<SitePageContextBlogPostsFilterInput>;
  contents?: Maybe<SitePageContextContentsFilterInput>;
};

export type SitePageContextPostFilterInput = {
  ja?: Maybe<SitePageContextPostJaFilterInput>;
};

export type SitePageContextPostJaFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<SitePageContextPostJaBodyFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
};

export type SitePageContextPostJaBodyFilterInput = {
  childMarkdownRemark?: Maybe<SitePageContextPostJaBodyChildMarkdownRemarkFilterInput>;
};

export type SitePageContextPostJaBodyChildMarkdownRemarkFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextIntlFilterInput = {
  language?: Maybe<StringQueryOperatorInput>;
  languages?: Maybe<StringQueryOperatorInput>;
  messages?: Maybe<SitePageContextIntlMessagesFilterInput>;
  routed?: Maybe<BooleanQueryOperatorInput>;
  originalPath?: Maybe<StringQueryOperatorInput>;
  redirect?: Maybe<BooleanQueryOperatorInput>;
  defaultLanguage?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextIntlMessagesFilterInput = {
  components_Home_blog?: Maybe<StringQueryOperatorInput>;
  components_Home_blogPosts?: Maybe<StringQueryOperatorInput>;
  components_Home_description?: Maybe<StringQueryOperatorInput>;
  components_Home_services?: Maybe<StringQueryOperatorInput>;
  components_Minecraft_address?: Maybe<StringQueryOperatorInput>;
  components_Minecraft_description?: Maybe<StringQueryOperatorInput>;
  components_Minecraft_map?: Maybe<StringQueryOperatorInput>;
  components_Minecraft_plugins?: Maybe<StringQueryOperatorInput>;
  components_Minecraft_pluginsList?: Maybe<StringQueryOperatorInput>;
  components_Minecraft_prohibitedMatters?: Maybe<StringQueryOperatorInput>;
  components_Minecraft_prohibitedMatters1?: Maybe<StringQueryOperatorInput>;
  components_Minecraft_prohibitedMatters2?: Maybe<StringQueryOperatorInput>;
  components_Minecraft_rule?: Maybe<StringQueryOperatorInput>;
  components_Minecraft_ruleDescription1?: Maybe<StringQueryOperatorInput>;
  components_Minecraft_ruleDescription2?: Maybe<StringQueryOperatorInput>;
  components_Minecraft_ruleDescription3?: Maybe<StringQueryOperatorInput>;
  components_Minecraft_title?: Maybe<StringQueryOperatorInput>;
  components_Minecraft_version?: Maybe<StringQueryOperatorInput>;
  templates_blog_posts_title?: Maybe<StringQueryOperatorInput>;
  templates_minecraft_plugins_title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextBlogPostsFilterInput = {
  _6KiX6Zu49VdgHlqYh1eF9W?: Maybe<SitePageContextBlogPosts_6KiX6Zu49VdgHlqYh1eF9WFilterInput>;
  JDRhIXJSIowkvvC69T5aD?: Maybe<SitePageContextBlogPostsJdRhIxjsIowkvvC69T5aDFilterInput>;
  _38gxn8P23T7Y8S9Pz1FSXm?: Maybe<SitePageContextBlogPosts_38gxn8P23T7Y8S9Pz1FsXmFilterInput>;
  _3g76xvOUM1h1HHJapNSc8t?: Maybe<SitePageContextBlogPosts_3g76xvOum1h1HhJapNSc8tFilterInput>;
  _64XDT2hjdHGIGY5PoG3iP?: Maybe<SitePageContextBlogPosts_64Xdt2hjdHgigy5PoG3iPFilterInput>;
};

export type SitePageContextBlogPosts_6KiX6Zu49VdgHlqYh1eF9WFilterInput = {
  ja?: Maybe<SitePageContextBlogPosts_6KiX6Zu49VdgHlqYh1eF9WJaFilterInput>;
};

export type SitePageContextBlogPosts_6KiX6Zu49VdgHlqYh1eF9WJaFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<SitePageContextBlogPosts_6KiX6Zu49VdgHlqYh1eF9WJaBodyFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
};

export type SitePageContextBlogPosts_6KiX6Zu49VdgHlqYh1eF9WJaBodyFilterInput = {
  childMarkdownRemark?: Maybe<SitePageContextBlogPosts_6KiX6Zu49VdgHlqYh1eF9WJaBodyChildMarkdownRemarkFilterInput>;
};

export type SitePageContextBlogPosts_6KiX6Zu49VdgHlqYh1eF9WJaBodyChildMarkdownRemarkFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextBlogPostsJdRhIxjsIowkvvC69T5aDFilterInput = {
  ja?: Maybe<SitePageContextBlogPostsJdRhIxjsIowkvvC69T5aDJaFilterInput>;
};

export type SitePageContextBlogPostsJdRhIxjsIowkvvC69T5aDJaFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<SitePageContextBlogPostsJdRhIxjsIowkvvC69T5aDJaBodyFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
};

export type SitePageContextBlogPostsJdRhIxjsIowkvvC69T5aDJaBodyFilterInput = {
  childMarkdownRemark?: Maybe<SitePageContextBlogPostsJdRhIxjsIowkvvC69T5aDJaBodyChildMarkdownRemarkFilterInput>;
};

export type SitePageContextBlogPostsJdRhIxjsIowkvvC69T5aDJaBodyChildMarkdownRemarkFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextBlogPosts_38gxn8P23T7Y8S9Pz1FsXmFilterInput = {
  ja?: Maybe<SitePageContextBlogPosts_38gxn8P23T7Y8S9Pz1FsXmJaFilterInput>;
};

export type SitePageContextBlogPosts_38gxn8P23T7Y8S9Pz1FsXmJaFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<SitePageContextBlogPosts_38gxn8P23T7Y8S9Pz1FsXmJaBodyFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
};

export type SitePageContextBlogPosts_38gxn8P23T7Y8S9Pz1FsXmJaBodyFilterInput = {
  childMarkdownRemark?: Maybe<SitePageContextBlogPosts_38gxn8P23T7Y8S9Pz1FsXmJaBodyChildMarkdownRemarkFilterInput>;
};

export type SitePageContextBlogPosts_38gxn8P23T7Y8S9Pz1FsXmJaBodyChildMarkdownRemarkFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextBlogPosts_3g76xvOum1h1HhJapNSc8tFilterInput = {
  ja?: Maybe<SitePageContextBlogPosts_3g76xvOum1h1HhJapNSc8tJaFilterInput>;
};

export type SitePageContextBlogPosts_3g76xvOum1h1HhJapNSc8tJaFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<SitePageContextBlogPosts_3g76xvOum1h1HhJapNSc8tJaBodyFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
};

export type SitePageContextBlogPosts_3g76xvOum1h1HhJapNSc8tJaBodyFilterInput = {
  childMarkdownRemark?: Maybe<SitePageContextBlogPosts_3g76xvOum1h1HhJapNSc8tJaBodyChildMarkdownRemarkFilterInput>;
};

export type SitePageContextBlogPosts_3g76xvOum1h1HhJapNSc8tJaBodyChildMarkdownRemarkFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextBlogPosts_64Xdt2hjdHgigy5PoG3iPFilterInput = {
  ja?: Maybe<SitePageContextBlogPosts_64Xdt2hjdHgigy5PoG3iPJaFilterInput>;
};

export type SitePageContextBlogPosts_64Xdt2hjdHgigy5PoG3iPJaFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<SitePageContextBlogPosts_64Xdt2hjdHgigy5PoG3iPJaBodyFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
};

export type SitePageContextBlogPosts_64Xdt2hjdHgigy5PoG3iPJaBodyFilterInput = {
  childMarkdownRemark?: Maybe<SitePageContextBlogPosts_64Xdt2hjdHgigy5PoG3iPJaBodyChildMarkdownRemarkFilterInput>;
};

export type SitePageContextBlogPosts_64Xdt2hjdHgigy5PoG3iPJaBodyChildMarkdownRemarkFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContentsFilterInput = {
  ja?: Maybe<SitePageContextContentsJaFilterInput>;
  en?: Maybe<SitePageContextContentsEnFilterInput>;
  _28oplOdibxbGimUGIubCxn?: Maybe<SitePageContextContents_28oplOdibxbGimUgIubCxnFilterInput>;
  _1dyp1nVCAjMfaN4597UQv7?: Maybe<SitePageContextContents_1dyp1nVcAjMfaN4597UQv7FilterInput>;
  _5noNGxDJjdxHDZRzaPnC8b?: Maybe<SitePageContextContents_5noNGxDJjdxHdzRzaPnC8bFilterInput>;
  _24L9mnqEBDK8L2vdjKtEWe?: Maybe<SitePageContextContents_24L9mnqEbdk8L2vdjKtEWeFilterInput>;
  _1oyo6jOm9JYZfYCYrN5kuY?: Maybe<SitePageContextContents_1oyo6jOm9JyZfYcYrN5kuYFilterInput>;
  _6yK9yno9HiI40huAvyL4Ui?: Maybe<SitePageContextContents_6yK9yno9HiI40huAvyL4UiFilterInput>;
  _4Q36PPeOdcI7akE7i7o09Y?: Maybe<SitePageContextContents_4Q36PPeOdcI7akE7i7o09YFilterInput>;
  _3kuqefJH06undEWEYlsuVD?: Maybe<SitePageContextContents_3kuqefJh06undEweYlsuVdFilterInput>;
  t3PY77IEBryB81o81ZfBx?: Maybe<SitePageContextContentsT3Py77IeBryB81o81ZfBxFilterInput>;
  _47LQnfd860HadKUlsCiUv6?: Maybe<SitePageContextContents_47LQnfd860HadKUlsCiUv6FilterInput>;
  _7BOAySzbnzTLWeCJM0atSF?: Maybe<SitePageContextContents_7BoAySzbnzTlWeCjm0atSfFilterInput>;
};

export type SitePageContextContentsJaFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<SitePageContextContentsJaDescriptionFilterInput>;
  body?: Maybe<SitePageContextContentsJaBodyFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContentsJaDescriptionFilterInput = {
  description?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContentsJaBodyFilterInput = {
  childMarkdownRemark?: Maybe<SitePageContextContentsJaBodyChildMarkdownRemarkFilterInput>;
};

export type SitePageContextContentsJaBodyChildMarkdownRemarkFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContentsEnFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<SitePageContextContentsEnDescriptionFilterInput>;
  body?: Maybe<SitePageContextContentsEnBodyFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContentsEnDescriptionFilterInput = {
  description?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContentsEnBodyFilterInput = {
  childMarkdownRemark?: Maybe<SitePageContextContentsEnBodyChildMarkdownRemarkFilterInput>;
};

export type SitePageContextContentsEnBodyChildMarkdownRemarkFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_28oplOdibxbGimUgIubCxnFilterInput = {
  ja?: Maybe<SitePageContextContents_28oplOdibxbGimUgIubCxnJaFilterInput>;
  en?: Maybe<SitePageContextContents_28oplOdibxbGimUgIubCxnEnFilterInput>;
};

export type SitePageContextContents_28oplOdibxbGimUgIubCxnJaFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<SitePageContextContents_28oplOdibxbGimUgIubCxnJaDescriptionFilterInput>;
  body?: Maybe<SitePageContextContents_28oplOdibxbGimUgIubCxnJaBodyFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_28oplOdibxbGimUgIubCxnJaDescriptionFilterInput = {
  description?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_28oplOdibxbGimUgIubCxnJaBodyFilterInput = {
  childMarkdownRemark?: Maybe<SitePageContextContents_28oplOdibxbGimUgIubCxnJaBodyChildMarkdownRemarkFilterInput>;
};

export type SitePageContextContents_28oplOdibxbGimUgIubCxnJaBodyChildMarkdownRemarkFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_28oplOdibxbGimUgIubCxnEnFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<SitePageContextContents_28oplOdibxbGimUgIubCxnEnDescriptionFilterInput>;
  body?: Maybe<SitePageContextContents_28oplOdibxbGimUgIubCxnEnBodyFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_28oplOdibxbGimUgIubCxnEnDescriptionFilterInput = {
  description?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_28oplOdibxbGimUgIubCxnEnBodyFilterInput = {
  childMarkdownRemark?: Maybe<SitePageContextContents_28oplOdibxbGimUgIubCxnEnBodyChildMarkdownRemarkFilterInput>;
};

export type SitePageContextContents_28oplOdibxbGimUgIubCxnEnBodyChildMarkdownRemarkFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_1dyp1nVcAjMfaN4597UQv7FilterInput = {
  ja?: Maybe<SitePageContextContents_1dyp1nVcAjMfaN4597UQv7JaFilterInput>;
  en?: Maybe<SitePageContextContents_1dyp1nVcAjMfaN4597UQv7EnFilterInput>;
};

export type SitePageContextContents_1dyp1nVcAjMfaN4597UQv7JaFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<SitePageContextContents_1dyp1nVcAjMfaN4597UQv7JaDescriptionFilterInput>;
  body?: Maybe<SitePageContextContents_1dyp1nVcAjMfaN4597UQv7JaBodyFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_1dyp1nVcAjMfaN4597UQv7JaDescriptionFilterInput = {
  description?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_1dyp1nVcAjMfaN4597UQv7JaBodyFilterInput = {
  childMarkdownRemark?: Maybe<SitePageContextContents_1dyp1nVcAjMfaN4597UQv7JaBodyChildMarkdownRemarkFilterInput>;
};

export type SitePageContextContents_1dyp1nVcAjMfaN4597UQv7JaBodyChildMarkdownRemarkFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_1dyp1nVcAjMfaN4597UQv7EnFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<SitePageContextContents_1dyp1nVcAjMfaN4597UQv7EnDescriptionFilterInput>;
  body?: Maybe<SitePageContextContents_1dyp1nVcAjMfaN4597UQv7EnBodyFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_1dyp1nVcAjMfaN4597UQv7EnDescriptionFilterInput = {
  description?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_1dyp1nVcAjMfaN4597UQv7EnBodyFilterInput = {
  childMarkdownRemark?: Maybe<SitePageContextContents_1dyp1nVcAjMfaN4597UQv7EnBodyChildMarkdownRemarkFilterInput>;
};

export type SitePageContextContents_1dyp1nVcAjMfaN4597UQv7EnBodyChildMarkdownRemarkFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_5noNGxDJjdxHdzRzaPnC8bFilterInput = {
  ja?: Maybe<SitePageContextContents_5noNGxDJjdxHdzRzaPnC8bJaFilterInput>;
  en?: Maybe<SitePageContextContents_5noNGxDJjdxHdzRzaPnC8bEnFilterInput>;
};

export type SitePageContextContents_5noNGxDJjdxHdzRzaPnC8bJaFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<SitePageContextContents_5noNGxDJjdxHdzRzaPnC8bJaDescriptionFilterInput>;
  body?: Maybe<SitePageContextContents_5noNGxDJjdxHdzRzaPnC8bJaBodyFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_5noNGxDJjdxHdzRzaPnC8bJaDescriptionFilterInput = {
  description?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_5noNGxDJjdxHdzRzaPnC8bJaBodyFilterInput = {
  childMarkdownRemark?: Maybe<SitePageContextContents_5noNGxDJjdxHdzRzaPnC8bJaBodyChildMarkdownRemarkFilterInput>;
};

export type SitePageContextContents_5noNGxDJjdxHdzRzaPnC8bJaBodyChildMarkdownRemarkFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_5noNGxDJjdxHdzRzaPnC8bEnFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<SitePageContextContents_5noNGxDJjdxHdzRzaPnC8bEnDescriptionFilterInput>;
  body?: Maybe<SitePageContextContents_5noNGxDJjdxHdzRzaPnC8bEnBodyFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_5noNGxDJjdxHdzRzaPnC8bEnDescriptionFilterInput = {
  description?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_5noNGxDJjdxHdzRzaPnC8bEnBodyFilterInput = {
  childMarkdownRemark?: Maybe<SitePageContextContents_5noNGxDJjdxHdzRzaPnC8bEnBodyChildMarkdownRemarkFilterInput>;
};

export type SitePageContextContents_5noNGxDJjdxHdzRzaPnC8bEnBodyChildMarkdownRemarkFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_24L9mnqEbdk8L2vdjKtEWeFilterInput = {
  ja?: Maybe<SitePageContextContents_24L9mnqEbdk8L2vdjKtEWeJaFilterInput>;
  en?: Maybe<SitePageContextContents_24L9mnqEbdk8L2vdjKtEWeEnFilterInput>;
};

export type SitePageContextContents_24L9mnqEbdk8L2vdjKtEWeJaFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<SitePageContextContents_24L9mnqEbdk8L2vdjKtEWeJaDescriptionFilterInput>;
  body?: Maybe<SitePageContextContents_24L9mnqEbdk8L2vdjKtEWeJaBodyFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_24L9mnqEbdk8L2vdjKtEWeJaDescriptionFilterInput = {
  description?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_24L9mnqEbdk8L2vdjKtEWeJaBodyFilterInput = {
  childMarkdownRemark?: Maybe<SitePageContextContents_24L9mnqEbdk8L2vdjKtEWeJaBodyChildMarkdownRemarkFilterInput>;
};

export type SitePageContextContents_24L9mnqEbdk8L2vdjKtEWeJaBodyChildMarkdownRemarkFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_24L9mnqEbdk8L2vdjKtEWeEnFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<SitePageContextContents_24L9mnqEbdk8L2vdjKtEWeEnDescriptionFilterInput>;
  body?: Maybe<SitePageContextContents_24L9mnqEbdk8L2vdjKtEWeEnBodyFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_24L9mnqEbdk8L2vdjKtEWeEnDescriptionFilterInput = {
  description?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_24L9mnqEbdk8L2vdjKtEWeEnBodyFilterInput = {
  childMarkdownRemark?: Maybe<SitePageContextContents_24L9mnqEbdk8L2vdjKtEWeEnBodyChildMarkdownRemarkFilterInput>;
};

export type SitePageContextContents_24L9mnqEbdk8L2vdjKtEWeEnBodyChildMarkdownRemarkFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_1oyo6jOm9JyZfYcYrN5kuYFilterInput = {
  ja?: Maybe<SitePageContextContents_1oyo6jOm9JyZfYcYrN5kuYJaFilterInput>;
  en?: Maybe<SitePageContextContents_1oyo6jOm9JyZfYcYrN5kuYEnFilterInput>;
};

export type SitePageContextContents_1oyo6jOm9JyZfYcYrN5kuYJaFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<SitePageContextContents_1oyo6jOm9JyZfYcYrN5kuYJaDescriptionFilterInput>;
  body?: Maybe<SitePageContextContents_1oyo6jOm9JyZfYcYrN5kuYJaBodyFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_1oyo6jOm9JyZfYcYrN5kuYJaDescriptionFilterInput = {
  description?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_1oyo6jOm9JyZfYcYrN5kuYJaBodyFilterInput = {
  childMarkdownRemark?: Maybe<SitePageContextContents_1oyo6jOm9JyZfYcYrN5kuYJaBodyChildMarkdownRemarkFilterInput>;
};

export type SitePageContextContents_1oyo6jOm9JyZfYcYrN5kuYJaBodyChildMarkdownRemarkFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_1oyo6jOm9JyZfYcYrN5kuYEnFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<SitePageContextContents_1oyo6jOm9JyZfYcYrN5kuYEnDescriptionFilterInput>;
  body?: Maybe<SitePageContextContents_1oyo6jOm9JyZfYcYrN5kuYEnBodyFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_1oyo6jOm9JyZfYcYrN5kuYEnDescriptionFilterInput = {
  description?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_1oyo6jOm9JyZfYcYrN5kuYEnBodyFilterInput = {
  childMarkdownRemark?: Maybe<SitePageContextContents_1oyo6jOm9JyZfYcYrN5kuYEnBodyChildMarkdownRemarkFilterInput>;
};

export type SitePageContextContents_1oyo6jOm9JyZfYcYrN5kuYEnBodyChildMarkdownRemarkFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_6yK9yno9HiI40huAvyL4UiFilterInput = {
  ja?: Maybe<SitePageContextContents_6yK9yno9HiI40huAvyL4UiJaFilterInput>;
  en?: Maybe<SitePageContextContents_6yK9yno9HiI40huAvyL4UiEnFilterInput>;
};

export type SitePageContextContents_6yK9yno9HiI40huAvyL4UiJaFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<SitePageContextContents_6yK9yno9HiI40huAvyL4UiJaDescriptionFilterInput>;
  body?: Maybe<SitePageContextContents_6yK9yno9HiI40huAvyL4UiJaBodyFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_6yK9yno9HiI40huAvyL4UiJaDescriptionFilterInput = {
  description?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_6yK9yno9HiI40huAvyL4UiJaBodyFilterInput = {
  childMarkdownRemark?: Maybe<SitePageContextContents_6yK9yno9HiI40huAvyL4UiJaBodyChildMarkdownRemarkFilterInput>;
};

export type SitePageContextContents_6yK9yno9HiI40huAvyL4UiJaBodyChildMarkdownRemarkFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_6yK9yno9HiI40huAvyL4UiEnFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<SitePageContextContents_6yK9yno9HiI40huAvyL4UiEnDescriptionFilterInput>;
  body?: Maybe<SitePageContextContents_6yK9yno9HiI40huAvyL4UiEnBodyFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_6yK9yno9HiI40huAvyL4UiEnDescriptionFilterInput = {
  description?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_6yK9yno9HiI40huAvyL4UiEnBodyFilterInput = {
  childMarkdownRemark?: Maybe<SitePageContextContents_6yK9yno9HiI40huAvyL4UiEnBodyChildMarkdownRemarkFilterInput>;
};

export type SitePageContextContents_6yK9yno9HiI40huAvyL4UiEnBodyChildMarkdownRemarkFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_4Q36PPeOdcI7akE7i7o09YFilterInput = {
  ja?: Maybe<SitePageContextContents_4Q36PPeOdcI7akE7i7o09YJaFilterInput>;
  en?: Maybe<SitePageContextContents_4Q36PPeOdcI7akE7i7o09YEnFilterInput>;
};

export type SitePageContextContents_4Q36PPeOdcI7akE7i7o09YJaFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<SitePageContextContents_4Q36PPeOdcI7akE7i7o09YJaDescriptionFilterInput>;
  body?: Maybe<SitePageContextContents_4Q36PPeOdcI7akE7i7o09YJaBodyFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_4Q36PPeOdcI7akE7i7o09YJaDescriptionFilterInput = {
  description?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_4Q36PPeOdcI7akE7i7o09YJaBodyFilterInput = {
  childMarkdownRemark?: Maybe<SitePageContextContents_4Q36PPeOdcI7akE7i7o09YJaBodyChildMarkdownRemarkFilterInput>;
};

export type SitePageContextContents_4Q36PPeOdcI7akE7i7o09YJaBodyChildMarkdownRemarkFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_4Q36PPeOdcI7akE7i7o09YEnFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<SitePageContextContents_4Q36PPeOdcI7akE7i7o09YEnDescriptionFilterInput>;
  body?: Maybe<SitePageContextContents_4Q36PPeOdcI7akE7i7o09YEnBodyFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_4Q36PPeOdcI7akE7i7o09YEnDescriptionFilterInput = {
  description?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_4Q36PPeOdcI7akE7i7o09YEnBodyFilterInput = {
  childMarkdownRemark?: Maybe<SitePageContextContents_4Q36PPeOdcI7akE7i7o09YEnBodyChildMarkdownRemarkFilterInput>;
};

export type SitePageContextContents_4Q36PPeOdcI7akE7i7o09YEnBodyChildMarkdownRemarkFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_3kuqefJh06undEweYlsuVdFilterInput = {
  ja?: Maybe<SitePageContextContents_3kuqefJh06undEweYlsuVdJaFilterInput>;
  en?: Maybe<SitePageContextContents_3kuqefJh06undEweYlsuVdEnFilterInput>;
};

export type SitePageContextContents_3kuqefJh06undEweYlsuVdJaFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<SitePageContextContents_3kuqefJh06undEweYlsuVdJaDescriptionFilterInput>;
  body?: Maybe<SitePageContextContents_3kuqefJh06undEweYlsuVdJaBodyFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_3kuqefJh06undEweYlsuVdJaDescriptionFilterInput = {
  description?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_3kuqefJh06undEweYlsuVdJaBodyFilterInput = {
  childMarkdownRemark?: Maybe<SitePageContextContents_3kuqefJh06undEweYlsuVdJaBodyChildMarkdownRemarkFilterInput>;
};

export type SitePageContextContents_3kuqefJh06undEweYlsuVdJaBodyChildMarkdownRemarkFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_3kuqefJh06undEweYlsuVdEnFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<SitePageContextContents_3kuqefJh06undEweYlsuVdEnDescriptionFilterInput>;
  body?: Maybe<SitePageContextContents_3kuqefJh06undEweYlsuVdEnBodyFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_3kuqefJh06undEweYlsuVdEnDescriptionFilterInput = {
  description?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_3kuqefJh06undEweYlsuVdEnBodyFilterInput = {
  childMarkdownRemark?: Maybe<SitePageContextContents_3kuqefJh06undEweYlsuVdEnBodyChildMarkdownRemarkFilterInput>;
};

export type SitePageContextContents_3kuqefJh06undEweYlsuVdEnBodyChildMarkdownRemarkFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContentsT3Py77IeBryB81o81ZfBxFilterInput = {
  ja?: Maybe<SitePageContextContentsT3Py77IeBryB81o81ZfBxJaFilterInput>;
  en?: Maybe<SitePageContextContentsT3Py77IeBryB81o81ZfBxEnFilterInput>;
};

export type SitePageContextContentsT3Py77IeBryB81o81ZfBxJaFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<SitePageContextContentsT3Py77IeBryB81o81ZfBxJaDescriptionFilterInput>;
  body?: Maybe<SitePageContextContentsT3Py77IeBryB81o81ZfBxJaBodyFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContentsT3Py77IeBryB81o81ZfBxJaDescriptionFilterInput = {
  description?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContentsT3Py77IeBryB81o81ZfBxJaBodyFilterInput = {
  childMarkdownRemark?: Maybe<SitePageContextContentsT3Py77IeBryB81o81ZfBxJaBodyChildMarkdownRemarkFilterInput>;
};

export type SitePageContextContentsT3Py77IeBryB81o81ZfBxJaBodyChildMarkdownRemarkFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContentsT3Py77IeBryB81o81ZfBxEnFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<SitePageContextContentsT3Py77IeBryB81o81ZfBxEnDescriptionFilterInput>;
  body?: Maybe<SitePageContextContentsT3Py77IeBryB81o81ZfBxEnBodyFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContentsT3Py77IeBryB81o81ZfBxEnDescriptionFilterInput = {
  description?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContentsT3Py77IeBryB81o81ZfBxEnBodyFilterInput = {
  childMarkdownRemark?: Maybe<SitePageContextContentsT3Py77IeBryB81o81ZfBxEnBodyChildMarkdownRemarkFilterInput>;
};

export type SitePageContextContentsT3Py77IeBryB81o81ZfBxEnBodyChildMarkdownRemarkFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_47LQnfd860HadKUlsCiUv6FilterInput = {
  ja?: Maybe<SitePageContextContents_47LQnfd860HadKUlsCiUv6JaFilterInput>;
  en?: Maybe<SitePageContextContents_47LQnfd860HadKUlsCiUv6EnFilterInput>;
};

export type SitePageContextContents_47LQnfd860HadKUlsCiUv6JaFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<SitePageContextContents_47LQnfd860HadKUlsCiUv6JaDescriptionFilterInput>;
  body?: Maybe<SitePageContextContents_47LQnfd860HadKUlsCiUv6JaBodyFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_47LQnfd860HadKUlsCiUv6JaDescriptionFilterInput = {
  description?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_47LQnfd860HadKUlsCiUv6JaBodyFilterInput = {
  childMarkdownRemark?: Maybe<SitePageContextContents_47LQnfd860HadKUlsCiUv6JaBodyChildMarkdownRemarkFilterInput>;
};

export type SitePageContextContents_47LQnfd860HadKUlsCiUv6JaBodyChildMarkdownRemarkFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_47LQnfd860HadKUlsCiUv6EnFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<SitePageContextContents_47LQnfd860HadKUlsCiUv6EnDescriptionFilterInput>;
  body?: Maybe<SitePageContextContents_47LQnfd860HadKUlsCiUv6EnBodyFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_47LQnfd860HadKUlsCiUv6EnDescriptionFilterInput = {
  description?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_47LQnfd860HadKUlsCiUv6EnBodyFilterInput = {
  childMarkdownRemark?: Maybe<SitePageContextContents_47LQnfd860HadKUlsCiUv6EnBodyChildMarkdownRemarkFilterInput>;
};

export type SitePageContextContents_47LQnfd860HadKUlsCiUv6EnBodyChildMarkdownRemarkFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_7BoAySzbnzTlWeCjm0atSfFilterInput = {
  ja?: Maybe<SitePageContextContents_7BoAySzbnzTlWeCjm0atSfJaFilterInput>;
  en?: Maybe<SitePageContextContents_7BoAySzbnzTlWeCjm0atSfEnFilterInput>;
};

export type SitePageContextContents_7BoAySzbnzTlWeCjm0atSfJaFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<SitePageContextContents_7BoAySzbnzTlWeCjm0atSfJaDescriptionFilterInput>;
  body?: Maybe<SitePageContextContents_7BoAySzbnzTlWeCjm0atSfJaBodyFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_7BoAySzbnzTlWeCjm0atSfJaDescriptionFilterInput = {
  description?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_7BoAySzbnzTlWeCjm0atSfJaBodyFilterInput = {
  childMarkdownRemark?: Maybe<SitePageContextContents_7BoAySzbnzTlWeCjm0atSfJaBodyChildMarkdownRemarkFilterInput>;
};

export type SitePageContextContents_7BoAySzbnzTlWeCjm0atSfJaBodyChildMarkdownRemarkFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_7BoAySzbnzTlWeCjm0atSfEnFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<SitePageContextContents_7BoAySzbnzTlWeCjm0atSfEnDescriptionFilterInput>;
  body?: Maybe<SitePageContextContents_7BoAySzbnzTlWeCjm0atSfEnBodyFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_7BoAySzbnzTlWeCjm0atSfEnDescriptionFilterInput = {
  description?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_7BoAySzbnzTlWeCjm0atSfEnBodyFilterInput = {
  childMarkdownRemark?: Maybe<SitePageContextContents_7BoAySzbnzTlWeCjm0atSfEnBodyChildMarkdownRemarkFilterInput>;
};

export type SitePageContextContents_7BoAySzbnzTlWeCjm0atSfEnBodyChildMarkdownRemarkFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  accessToken?: Maybe<StringQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  environment?: Maybe<StringQueryOperatorInput>;
  downloadLocal?: Maybe<BooleanQueryOperatorInput>;
  forceFullSync?: Maybe<BooleanQueryOperatorInput>;
  pageLimit?: Maybe<IntQueryOperatorInput>;
  assetDownloadWorkers?: Maybe<IntQueryOperatorInput>;
  useNameForId?: Maybe<BooleanQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  languages?: Maybe<StringQueryOperatorInput>;
  defaultLanguage?: Maybe<StringQueryOperatorInput>;
  redirect?: Maybe<BooleanQueryOperatorInput>;
  extensions?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
};

export type SitePluginPluginOptionsPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum = 
  'path' |
  'component' |
  'internalComponentName' |
  'componentChunkName' |
  'matchPath' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'isCreatedByStatefulCreatePages' |
  'context___post___ja___id' |
  'context___post___ja___title' |
  'context___post___ja___node_locale' |
  'context___post___ja___contentful_id' |
  'context___post___ja___createdAt' |
  'context___language' |
  'context___intl___language' |
  'context___intl___languages' |
  'context___intl___messages___components_Home_blog' |
  'context___intl___messages___components_Home_blogPosts' |
  'context___intl___messages___components_Home_description' |
  'context___intl___messages___components_Home_services' |
  'context___intl___messages___components_Minecraft_address' |
  'context___intl___messages___components_Minecraft_description' |
  'context___intl___messages___components_Minecraft_map' |
  'context___intl___messages___components_Minecraft_plugins' |
  'context___intl___messages___components_Minecraft_pluginsList' |
  'context___intl___messages___components_Minecraft_prohibitedMatters' |
  'context___intl___messages___components_Minecraft_prohibitedMatters1' |
  'context___intl___messages___components_Minecraft_prohibitedMatters2' |
  'context___intl___messages___components_Minecraft_rule' |
  'context___intl___messages___components_Minecraft_ruleDescription1' |
  'context___intl___messages___components_Minecraft_ruleDescription2' |
  'context___intl___messages___components_Minecraft_ruleDescription3' |
  'context___intl___messages___components_Minecraft_title' |
  'context___intl___messages___components_Minecraft_version' |
  'context___intl___messages___templates_blog_posts_title' |
  'context___intl___messages___templates_minecraft_plugins_title' |
  'context___intl___routed' |
  'context___intl___originalPath' |
  'context___intl___redirect' |
  'context___intl___defaultLanguage' |
  'context___contents___ja___title' |
  'context___contents___ja___slug' |
  'context___contents___ja___node_locale' |
  'context___contents___ja___contentful_id' |
  'context___contents___en___title' |
  'context___contents___en___slug' |
  'context___contents___en___node_locale' |
  'context___contents___en___contentful_id' |
  'pluginCreator___id' |
  'pluginCreator___parent___id' |
  'pluginCreator___parent___parent___id' |
  'pluginCreator___parent___parent___children' |
  'pluginCreator___parent___children' |
  'pluginCreator___parent___children___id' |
  'pluginCreator___parent___children___children' |
  'pluginCreator___parent___internal___content' |
  'pluginCreator___parent___internal___contentDigest' |
  'pluginCreator___parent___internal___description' |
  'pluginCreator___parent___internal___fieldOwners' |
  'pluginCreator___parent___internal___ignoreType' |
  'pluginCreator___parent___internal___mediaType' |
  'pluginCreator___parent___internal___owner' |
  'pluginCreator___parent___internal___type' |
  'pluginCreator___children' |
  'pluginCreator___children___id' |
  'pluginCreator___children___parent___id' |
  'pluginCreator___children___parent___children' |
  'pluginCreator___children___children' |
  'pluginCreator___children___children___id' |
  'pluginCreator___children___children___children' |
  'pluginCreator___children___internal___content' |
  'pluginCreator___children___internal___contentDigest' |
  'pluginCreator___children___internal___description' |
  'pluginCreator___children___internal___fieldOwners' |
  'pluginCreator___children___internal___ignoreType' |
  'pluginCreator___children___internal___mediaType' |
  'pluginCreator___children___internal___owner' |
  'pluginCreator___children___internal___type' |
  'pluginCreator___internal___content' |
  'pluginCreator___internal___contentDigest' |
  'pluginCreator___internal___description' |
  'pluginCreator___internal___fieldOwners' |
  'pluginCreator___internal___ignoreType' |
  'pluginCreator___internal___mediaType' |
  'pluginCreator___internal___owner' |
  'pluginCreator___internal___type' |
  'pluginCreator___resolve' |
  'pluginCreator___name' |
  'pluginCreator___version' |
  'pluginCreator___pluginOptions___plugins' |
  'pluginCreator___pluginOptions___plugins___resolve' |
  'pluginCreator___pluginOptions___plugins___id' |
  'pluginCreator___pluginOptions___plugins___name' |
  'pluginCreator___pluginOptions___plugins___version' |
  'pluginCreator___pluginOptions___plugins___pluginFilepath' |
  'pluginCreator___pluginOptions___fileName' |
  'pluginCreator___pluginOptions___isTSX' |
  'pluginCreator___pluginOptions___jsxPragma' |
  'pluginCreator___pluginOptions___allExtensions' |
  'pluginCreator___pluginOptions___spaceId' |
  'pluginCreator___pluginOptions___accessToken' |
  'pluginCreator___pluginOptions___host' |
  'pluginCreator___pluginOptions___environment' |
  'pluginCreator___pluginOptions___downloadLocal' |
  'pluginCreator___pluginOptions___forceFullSync' |
  'pluginCreator___pluginOptions___pageLimit' |
  'pluginCreator___pluginOptions___assetDownloadWorkers' |
  'pluginCreator___pluginOptions___useNameForId' |
  'pluginCreator___pluginOptions___path' |
  'pluginCreator___pluginOptions___languages' |
  'pluginCreator___pluginOptions___defaultLanguage' |
  'pluginCreator___pluginOptions___redirect' |
  'pluginCreator___pluginOptions___extensions' |
  'pluginCreator___pluginOptions___pathCheck' |
  'pluginCreator___nodeAPIs' |
  'pluginCreator___browserAPIs' |
  'pluginCreator___ssrAPIs' |
  'pluginCreator___pluginFilepath' |
  'pluginCreator___packageJson___name' |
  'pluginCreator___packageJson___description' |
  'pluginCreator___packageJson___version' |
  'pluginCreator___packageJson___main' |
  'pluginCreator___packageJson___author' |
  'pluginCreator___packageJson___license' |
  'pluginCreator___packageJson___dependencies' |
  'pluginCreator___packageJson___dependencies___name' |
  'pluginCreator___packageJson___dependencies___version' |
  'pluginCreator___packageJson___devDependencies' |
  'pluginCreator___packageJson___devDependencies___name' |
  'pluginCreator___packageJson___devDependencies___version' |
  'pluginCreator___packageJson___peerDependencies' |
  'pluginCreator___packageJson___peerDependencies___name' |
  'pluginCreator___packageJson___peerDependencies___version' |
  'pluginCreator___packageJson___keywords' |
  'pluginCreatorId' |
  'componentPath';

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type ThemeUiConfigConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ThemeUiConfigEdge>;
  nodes: Array<ThemeUiConfig>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ThemeUiConfigGroupConnection>;
};


export type ThemeUiConfigConnectionDistinctArgs = {
  field: ThemeUiConfigFieldsEnum;
};


export type ThemeUiConfigConnectionMaxArgs = {
  field: ThemeUiConfigFieldsEnum;
};


export type ThemeUiConfigConnectionMinArgs = {
  field: ThemeUiConfigFieldsEnum;
};


export type ThemeUiConfigConnectionSumArgs = {
  field: ThemeUiConfigFieldsEnum;
};


export type ThemeUiConfigConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ThemeUiConfigFieldsEnum;
};

export type ThemeUiConfigEdge = {
  next?: Maybe<ThemeUiConfig>;
  node: ThemeUiConfig;
  previous?: Maybe<ThemeUiConfig>;
};

export type ThemeUiConfigFieldsEnum = 
  'preset' |
  'prismPreset' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type ThemeUiConfigGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ThemeUiConfigEdge>;
  nodes: Array<ThemeUiConfig>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ThemeUiConfigFilterInput = {
  preset?: Maybe<JsonQueryOperatorInput>;
  prismPreset?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ThemeUiConfigSortInput = {
  fields?: Maybe<Array<Maybe<ThemeUiConfigFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>;
};

export type MarkdownHeadingFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownRemarkConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<MarkdownRemarkGroupConnection>;
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionMaxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionMinArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionSumArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export type MarkdownRemarkFieldsEnum = 
  'id' |
  'frontmatter___title' |
  'excerpt' |
  'rawMarkdownBody' |
  'html' |
  'htmlAst' |
  'excerptAst' |
  'headings' |
  'headings___id' |
  'headings___value' |
  'headings___depth' |
  'timeToRead' |
  'tableOfContents' |
  'wordCount___paragraphs' |
  'wordCount___sentences' |
  'wordCount___words' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type MarkdownRemarkGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulEntryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEntryEdge>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulEntryGroupConnection>;
};


export type ContentfulEntryConnectionDistinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryConnectionMaxArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryConnectionMinArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryConnectionSumArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntryEdge = {
  next?: Maybe<ContentfulEntry>;
  node: ContentfulEntry;
  previous?: Maybe<ContentfulEntry>;
};

export type ContentfulEntryFieldsEnum = 
  'contentful_id' |
  'id' |
  'node_locale' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type ContentfulEntryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEntryEdge>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulEntryFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulEntrySortInput = {
  fields?: Maybe<Array<Maybe<ContentfulEntryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAssetFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  details?: Maybe<ContentfulAssetFileDetailsFilterInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  size?: Maybe<IntQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulAssetSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulResizeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type ContentfulAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulAssetGroupConnection>;
};


export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionMaxArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionMinArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionSumArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetEdge = {
  next?: Maybe<ContentfulAsset>;
  node: ContentfulAsset;
  previous?: Maybe<ContentfulAsset>;
};

export type ContentfulAssetFieldsEnum = 
  'contentful_id' |
  'id' |
  'spaceId' |
  'createdAt' |
  'updatedAt' |
  'file___url' |
  'file___details___size' |
  'file___details___image___width' |
  'file___details___image___height' |
  'file___fileName' |
  'file___contentType' |
  'title' |
  'description' |
  'node_locale' |
  'sys___type' |
  'sys___revision' |
  'fixed___base64' |
  'fixed___tracedSVG' |
  'fixed___aspectRatio' |
  'fixed___width' |
  'fixed___height' |
  'fixed___src' |
  'fixed___srcSet' |
  'fixed___srcWebp' |
  'fixed___srcSetWebp' |
  'fluid___base64' |
  'fluid___tracedSVG' |
  'fluid___aspectRatio' |
  'fluid___src' |
  'fluid___srcSet' |
  'fluid___srcWebp' |
  'fluid___srcSetWebp' |
  'fluid___sizes' |
  'gatsbyImageData' |
  'resize___base64' |
  'resize___tracedSVG' |
  'resize___src' |
  'resize___width' |
  'resize___height' |
  'resize___aspectRatio' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type ContentfulAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAssetFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulAssetSysFilterInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulAssetSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPersonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPersonEdge>;
  nodes: Array<ContentfulPerson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulPersonGroupConnection>;
};


export type ContentfulPersonConnectionDistinctArgs = {
  field: ContentfulPersonFieldsEnum;
};


export type ContentfulPersonConnectionMaxArgs = {
  field: ContentfulPersonFieldsEnum;
};


export type ContentfulPersonConnectionMinArgs = {
  field: ContentfulPersonFieldsEnum;
};


export type ContentfulPersonConnectionSumArgs = {
  field: ContentfulPersonFieldsEnum;
};


export type ContentfulPersonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPersonFieldsEnum;
};

export type ContentfulPersonEdge = {
  next?: Maybe<ContentfulPerson>;
  node: ContentfulPerson;
  previous?: Maybe<ContentfulPerson>;
};

export type ContentfulPersonFieldsEnum = 
  'contentful_id' |
  'id' |
  'node_locale' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type ContentfulPersonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPersonEdge>;
  nodes: Array<ContentfulPerson>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPersonFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulPersonSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPersonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulDefBlogPostConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulDefBlogPostEdge>;
  nodes: Array<ContentfulDefBlogPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulDefBlogPostGroupConnection>;
};


export type ContentfulDefBlogPostConnectionDistinctArgs = {
  field: ContentfulDefBlogPostFieldsEnum;
};


export type ContentfulDefBlogPostConnectionMaxArgs = {
  field: ContentfulDefBlogPostFieldsEnum;
};


export type ContentfulDefBlogPostConnectionMinArgs = {
  field: ContentfulDefBlogPostFieldsEnum;
};


export type ContentfulDefBlogPostConnectionSumArgs = {
  field: ContentfulDefBlogPostFieldsEnum;
};


export type ContentfulDefBlogPostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulDefBlogPostFieldsEnum;
};

export type ContentfulDefBlogPostEdge = {
  next?: Maybe<ContentfulDefBlogPost>;
  node: ContentfulDefBlogPost;
  previous?: Maybe<ContentfulDefBlogPost>;
};

export type ContentfulDefBlogPostFieldsEnum = 
  'contentful_id' |
  'id' |
  'node_locale' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type ContentfulDefBlogPostGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulDefBlogPostEdge>;
  nodes: Array<ContentfulDefBlogPost>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulDefBlogPostFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulDefBlogPostSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulDefBlogPostFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlogPost1BodyTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  body?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulBlogPost1BodyTextNodeSysFilterInput>;
  childrenMarkdownRemark?: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type ContentfulBlogPost1BodyTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFilterListInput = {
  elemMatch?: Maybe<MarkdownRemarkFilterInput>;
};

export type ContentfulBlogPost1SysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulBlogPost1SysContentTypeFilterInput>;
};

export type ContentfulBlogPost1SysContentTypeFilterInput = {
  sys?: Maybe<ContentfulBlogPost1SysContentTypeSysFilterInput>;
};

export type ContentfulBlogPost1SysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlogPost1BodyTextNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulBlogPost1BodyTextNodeFilterInput>;
};

export type ContentfulBlogPost1Connection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPost1Edge>;
  nodes: Array<ContentfulBlogPost1>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulBlogPost1GroupConnection>;
};


export type ContentfulBlogPost1ConnectionDistinctArgs = {
  field: ContentfulBlogPost1FieldsEnum;
};


export type ContentfulBlogPost1ConnectionMaxArgs = {
  field: ContentfulBlogPost1FieldsEnum;
};


export type ContentfulBlogPost1ConnectionMinArgs = {
  field: ContentfulBlogPost1FieldsEnum;
};


export type ContentfulBlogPost1ConnectionSumArgs = {
  field: ContentfulBlogPost1FieldsEnum;
};


export type ContentfulBlogPost1ConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlogPost1FieldsEnum;
};

export type ContentfulBlogPost1Edge = {
  next?: Maybe<ContentfulBlogPost1>;
  node: ContentfulBlogPost1;
  previous?: Maybe<ContentfulBlogPost1>;
};

export type ContentfulBlogPost1FieldsEnum = 
  'contentful_id' |
  'id' |
  'node_locale' |
  'title' |
  'body___id' |
  'body___parent___id' |
  'body___parent___parent___id' |
  'body___parent___parent___children' |
  'body___parent___children' |
  'body___parent___children___id' |
  'body___parent___children___children' |
  'body___parent___internal___content' |
  'body___parent___internal___contentDigest' |
  'body___parent___internal___description' |
  'body___parent___internal___fieldOwners' |
  'body___parent___internal___ignoreType' |
  'body___parent___internal___mediaType' |
  'body___parent___internal___owner' |
  'body___parent___internal___type' |
  'body___children' |
  'body___children___id' |
  'body___children___parent___id' |
  'body___children___parent___children' |
  'body___children___children' |
  'body___children___children___id' |
  'body___children___children___children' |
  'body___children___internal___content' |
  'body___children___internal___contentDigest' |
  'body___children___internal___description' |
  'body___children___internal___fieldOwners' |
  'body___children___internal___ignoreType' |
  'body___children___internal___mediaType' |
  'body___children___internal___owner' |
  'body___children___internal___type' |
  'body___internal___content' |
  'body___internal___contentDigest' |
  'body___internal___description' |
  'body___internal___fieldOwners' |
  'body___internal___ignoreType' |
  'body___internal___mediaType' |
  'body___internal___owner' |
  'body___internal___type' |
  'body___body' |
  'body___sys___type' |
  'body___childrenMarkdownRemark' |
  'body___childrenMarkdownRemark___id' |
  'body___childrenMarkdownRemark___frontmatter___title' |
  'body___childrenMarkdownRemark___excerpt' |
  'body___childrenMarkdownRemark___rawMarkdownBody' |
  'body___childrenMarkdownRemark___html' |
  'body___childrenMarkdownRemark___htmlAst' |
  'body___childrenMarkdownRemark___excerptAst' |
  'body___childrenMarkdownRemark___headings' |
  'body___childrenMarkdownRemark___headings___id' |
  'body___childrenMarkdownRemark___headings___value' |
  'body___childrenMarkdownRemark___headings___depth' |
  'body___childrenMarkdownRemark___timeToRead' |
  'body___childrenMarkdownRemark___tableOfContents' |
  'body___childrenMarkdownRemark___wordCount___paragraphs' |
  'body___childrenMarkdownRemark___wordCount___sentences' |
  'body___childrenMarkdownRemark___wordCount___words' |
  'body___childrenMarkdownRemark___parent___id' |
  'body___childrenMarkdownRemark___parent___children' |
  'body___childrenMarkdownRemark___children' |
  'body___childrenMarkdownRemark___children___id' |
  'body___childrenMarkdownRemark___children___children' |
  'body___childrenMarkdownRemark___internal___content' |
  'body___childrenMarkdownRemark___internal___contentDigest' |
  'body___childrenMarkdownRemark___internal___description' |
  'body___childrenMarkdownRemark___internal___fieldOwners' |
  'body___childrenMarkdownRemark___internal___ignoreType' |
  'body___childrenMarkdownRemark___internal___mediaType' |
  'body___childrenMarkdownRemark___internal___owner' |
  'body___childrenMarkdownRemark___internal___type' |
  'body___childMarkdownRemark___id' |
  'body___childMarkdownRemark___frontmatter___title' |
  'body___childMarkdownRemark___excerpt' |
  'body___childMarkdownRemark___rawMarkdownBody' |
  'body___childMarkdownRemark___html' |
  'body___childMarkdownRemark___htmlAst' |
  'body___childMarkdownRemark___excerptAst' |
  'body___childMarkdownRemark___headings' |
  'body___childMarkdownRemark___headings___id' |
  'body___childMarkdownRemark___headings___value' |
  'body___childMarkdownRemark___headings___depth' |
  'body___childMarkdownRemark___timeToRead' |
  'body___childMarkdownRemark___tableOfContents' |
  'body___childMarkdownRemark___wordCount___paragraphs' |
  'body___childMarkdownRemark___wordCount___sentences' |
  'body___childMarkdownRemark___wordCount___words' |
  'body___childMarkdownRemark___parent___id' |
  'body___childMarkdownRemark___parent___children' |
  'body___childMarkdownRemark___children' |
  'body___childMarkdownRemark___children___id' |
  'body___childMarkdownRemark___children___children' |
  'body___childMarkdownRemark___internal___content' |
  'body___childMarkdownRemark___internal___contentDigest' |
  'body___childMarkdownRemark___internal___description' |
  'body___childMarkdownRemark___internal___fieldOwners' |
  'body___childMarkdownRemark___internal___ignoreType' |
  'body___childMarkdownRemark___internal___mediaType' |
  'body___childMarkdownRemark___internal___owner' |
  'body___childMarkdownRemark___internal___type' |
  'spaceId' |
  'createdAt' |
  'updatedAt' |
  'sys___type' |
  'sys___revision' |
  'sys___contentType___sys___type' |
  'sys___contentType___sys___linkType' |
  'sys___contentType___sys___id' |
  'tags' |
  'childrenContentfulBlogPost1BodyTextNode' |
  'childrenContentfulBlogPost1BodyTextNode___id' |
  'childrenContentfulBlogPost1BodyTextNode___parent___id' |
  'childrenContentfulBlogPost1BodyTextNode___parent___parent___id' |
  'childrenContentfulBlogPost1BodyTextNode___parent___parent___children' |
  'childrenContentfulBlogPost1BodyTextNode___parent___children' |
  'childrenContentfulBlogPost1BodyTextNode___parent___children___id' |
  'childrenContentfulBlogPost1BodyTextNode___parent___children___children' |
  'childrenContentfulBlogPost1BodyTextNode___parent___internal___content' |
  'childrenContentfulBlogPost1BodyTextNode___parent___internal___contentDigest' |
  'childrenContentfulBlogPost1BodyTextNode___parent___internal___description' |
  'childrenContentfulBlogPost1BodyTextNode___parent___internal___fieldOwners' |
  'childrenContentfulBlogPost1BodyTextNode___parent___internal___ignoreType' |
  'childrenContentfulBlogPost1BodyTextNode___parent___internal___mediaType' |
  'childrenContentfulBlogPost1BodyTextNode___parent___internal___owner' |
  'childrenContentfulBlogPost1BodyTextNode___parent___internal___type' |
  'childrenContentfulBlogPost1BodyTextNode___children' |
  'childrenContentfulBlogPost1BodyTextNode___children___id' |
  'childrenContentfulBlogPost1BodyTextNode___children___parent___id' |
  'childrenContentfulBlogPost1BodyTextNode___children___parent___children' |
  'childrenContentfulBlogPost1BodyTextNode___children___children' |
  'childrenContentfulBlogPost1BodyTextNode___children___children___id' |
  'childrenContentfulBlogPost1BodyTextNode___children___children___children' |
  'childrenContentfulBlogPost1BodyTextNode___children___internal___content' |
  'childrenContentfulBlogPost1BodyTextNode___children___internal___contentDigest' |
  'childrenContentfulBlogPost1BodyTextNode___children___internal___description' |
  'childrenContentfulBlogPost1BodyTextNode___children___internal___fieldOwners' |
  'childrenContentfulBlogPost1BodyTextNode___children___internal___ignoreType' |
  'childrenContentfulBlogPost1BodyTextNode___children___internal___mediaType' |
  'childrenContentfulBlogPost1BodyTextNode___children___internal___owner' |
  'childrenContentfulBlogPost1BodyTextNode___children___internal___type' |
  'childrenContentfulBlogPost1BodyTextNode___internal___content' |
  'childrenContentfulBlogPost1BodyTextNode___internal___contentDigest' |
  'childrenContentfulBlogPost1BodyTextNode___internal___description' |
  'childrenContentfulBlogPost1BodyTextNode___internal___fieldOwners' |
  'childrenContentfulBlogPost1BodyTextNode___internal___ignoreType' |
  'childrenContentfulBlogPost1BodyTextNode___internal___mediaType' |
  'childrenContentfulBlogPost1BodyTextNode___internal___owner' |
  'childrenContentfulBlogPost1BodyTextNode___internal___type' |
  'childrenContentfulBlogPost1BodyTextNode___body' |
  'childrenContentfulBlogPost1BodyTextNode___sys___type' |
  'childrenContentfulBlogPost1BodyTextNode___childrenMarkdownRemark' |
  'childrenContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___id' |
  'childrenContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___frontmatter___title' |
  'childrenContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___excerpt' |
  'childrenContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___rawMarkdownBody' |
  'childrenContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___html' |
  'childrenContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___htmlAst' |
  'childrenContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___excerptAst' |
  'childrenContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___headings' |
  'childrenContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___headings___id' |
  'childrenContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___headings___value' |
  'childrenContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___headings___depth' |
  'childrenContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___timeToRead' |
  'childrenContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___tableOfContents' |
  'childrenContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___wordCount___paragraphs' |
  'childrenContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___wordCount___sentences' |
  'childrenContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___wordCount___words' |
  'childrenContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___parent___id' |
  'childrenContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___parent___children' |
  'childrenContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___children' |
  'childrenContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___children___id' |
  'childrenContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___children___children' |
  'childrenContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___internal___content' |
  'childrenContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___internal___contentDigest' |
  'childrenContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___internal___description' |
  'childrenContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___internal___fieldOwners' |
  'childrenContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___internal___ignoreType' |
  'childrenContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___internal___mediaType' |
  'childrenContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___internal___owner' |
  'childrenContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___internal___type' |
  'childrenContentfulBlogPost1BodyTextNode___childMarkdownRemark___id' |
  'childrenContentfulBlogPost1BodyTextNode___childMarkdownRemark___frontmatter___title' |
  'childrenContentfulBlogPost1BodyTextNode___childMarkdownRemark___excerpt' |
  'childrenContentfulBlogPost1BodyTextNode___childMarkdownRemark___rawMarkdownBody' |
  'childrenContentfulBlogPost1BodyTextNode___childMarkdownRemark___html' |
  'childrenContentfulBlogPost1BodyTextNode___childMarkdownRemark___htmlAst' |
  'childrenContentfulBlogPost1BodyTextNode___childMarkdownRemark___excerptAst' |
  'childrenContentfulBlogPost1BodyTextNode___childMarkdownRemark___headings' |
  'childrenContentfulBlogPost1BodyTextNode___childMarkdownRemark___headings___id' |
  'childrenContentfulBlogPost1BodyTextNode___childMarkdownRemark___headings___value' |
  'childrenContentfulBlogPost1BodyTextNode___childMarkdownRemark___headings___depth' |
  'childrenContentfulBlogPost1BodyTextNode___childMarkdownRemark___timeToRead' |
  'childrenContentfulBlogPost1BodyTextNode___childMarkdownRemark___tableOfContents' |
  'childrenContentfulBlogPost1BodyTextNode___childMarkdownRemark___wordCount___paragraphs' |
  'childrenContentfulBlogPost1BodyTextNode___childMarkdownRemark___wordCount___sentences' |
  'childrenContentfulBlogPost1BodyTextNode___childMarkdownRemark___wordCount___words' |
  'childrenContentfulBlogPost1BodyTextNode___childMarkdownRemark___parent___id' |
  'childrenContentfulBlogPost1BodyTextNode___childMarkdownRemark___parent___children' |
  'childrenContentfulBlogPost1BodyTextNode___childMarkdownRemark___children' |
  'childrenContentfulBlogPost1BodyTextNode___childMarkdownRemark___children___id' |
  'childrenContentfulBlogPost1BodyTextNode___childMarkdownRemark___children___children' |
  'childrenContentfulBlogPost1BodyTextNode___childMarkdownRemark___internal___content' |
  'childrenContentfulBlogPost1BodyTextNode___childMarkdownRemark___internal___contentDigest' |
  'childrenContentfulBlogPost1BodyTextNode___childMarkdownRemark___internal___description' |
  'childrenContentfulBlogPost1BodyTextNode___childMarkdownRemark___internal___fieldOwners' |
  'childrenContentfulBlogPost1BodyTextNode___childMarkdownRemark___internal___ignoreType' |
  'childrenContentfulBlogPost1BodyTextNode___childMarkdownRemark___internal___mediaType' |
  'childrenContentfulBlogPost1BodyTextNode___childMarkdownRemark___internal___owner' |
  'childrenContentfulBlogPost1BodyTextNode___childMarkdownRemark___internal___type' |
  'childContentfulBlogPost1BodyTextNode___id' |
  'childContentfulBlogPost1BodyTextNode___parent___id' |
  'childContentfulBlogPost1BodyTextNode___parent___parent___id' |
  'childContentfulBlogPost1BodyTextNode___parent___parent___children' |
  'childContentfulBlogPost1BodyTextNode___parent___children' |
  'childContentfulBlogPost1BodyTextNode___parent___children___id' |
  'childContentfulBlogPost1BodyTextNode___parent___children___children' |
  'childContentfulBlogPost1BodyTextNode___parent___internal___content' |
  'childContentfulBlogPost1BodyTextNode___parent___internal___contentDigest' |
  'childContentfulBlogPost1BodyTextNode___parent___internal___description' |
  'childContentfulBlogPost1BodyTextNode___parent___internal___fieldOwners' |
  'childContentfulBlogPost1BodyTextNode___parent___internal___ignoreType' |
  'childContentfulBlogPost1BodyTextNode___parent___internal___mediaType' |
  'childContentfulBlogPost1BodyTextNode___parent___internal___owner' |
  'childContentfulBlogPost1BodyTextNode___parent___internal___type' |
  'childContentfulBlogPost1BodyTextNode___children' |
  'childContentfulBlogPost1BodyTextNode___children___id' |
  'childContentfulBlogPost1BodyTextNode___children___parent___id' |
  'childContentfulBlogPost1BodyTextNode___children___parent___children' |
  'childContentfulBlogPost1BodyTextNode___children___children' |
  'childContentfulBlogPost1BodyTextNode___children___children___id' |
  'childContentfulBlogPost1BodyTextNode___children___children___children' |
  'childContentfulBlogPost1BodyTextNode___children___internal___content' |
  'childContentfulBlogPost1BodyTextNode___children___internal___contentDigest' |
  'childContentfulBlogPost1BodyTextNode___children___internal___description' |
  'childContentfulBlogPost1BodyTextNode___children___internal___fieldOwners' |
  'childContentfulBlogPost1BodyTextNode___children___internal___ignoreType' |
  'childContentfulBlogPost1BodyTextNode___children___internal___mediaType' |
  'childContentfulBlogPost1BodyTextNode___children___internal___owner' |
  'childContentfulBlogPost1BodyTextNode___children___internal___type' |
  'childContentfulBlogPost1BodyTextNode___internal___content' |
  'childContentfulBlogPost1BodyTextNode___internal___contentDigest' |
  'childContentfulBlogPost1BodyTextNode___internal___description' |
  'childContentfulBlogPost1BodyTextNode___internal___fieldOwners' |
  'childContentfulBlogPost1BodyTextNode___internal___ignoreType' |
  'childContentfulBlogPost1BodyTextNode___internal___mediaType' |
  'childContentfulBlogPost1BodyTextNode___internal___owner' |
  'childContentfulBlogPost1BodyTextNode___internal___type' |
  'childContentfulBlogPost1BodyTextNode___body' |
  'childContentfulBlogPost1BodyTextNode___sys___type' |
  'childContentfulBlogPost1BodyTextNode___childrenMarkdownRemark' |
  'childContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___id' |
  'childContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___frontmatter___title' |
  'childContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___excerpt' |
  'childContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___rawMarkdownBody' |
  'childContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___html' |
  'childContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___htmlAst' |
  'childContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___excerptAst' |
  'childContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___headings' |
  'childContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___headings___id' |
  'childContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___headings___value' |
  'childContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___headings___depth' |
  'childContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___timeToRead' |
  'childContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___tableOfContents' |
  'childContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___wordCount___paragraphs' |
  'childContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___wordCount___sentences' |
  'childContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___wordCount___words' |
  'childContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___parent___id' |
  'childContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___parent___children' |
  'childContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___children' |
  'childContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___children___id' |
  'childContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___children___children' |
  'childContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___internal___content' |
  'childContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___internal___contentDigest' |
  'childContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___internal___description' |
  'childContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___internal___fieldOwners' |
  'childContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___internal___ignoreType' |
  'childContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___internal___mediaType' |
  'childContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___internal___owner' |
  'childContentfulBlogPost1BodyTextNode___childrenMarkdownRemark___internal___type' |
  'childContentfulBlogPost1BodyTextNode___childMarkdownRemark___id' |
  'childContentfulBlogPost1BodyTextNode___childMarkdownRemark___frontmatter___title' |
  'childContentfulBlogPost1BodyTextNode___childMarkdownRemark___excerpt' |
  'childContentfulBlogPost1BodyTextNode___childMarkdownRemark___rawMarkdownBody' |
  'childContentfulBlogPost1BodyTextNode___childMarkdownRemark___html' |
  'childContentfulBlogPost1BodyTextNode___childMarkdownRemark___htmlAst' |
  'childContentfulBlogPost1BodyTextNode___childMarkdownRemark___excerptAst' |
  'childContentfulBlogPost1BodyTextNode___childMarkdownRemark___headings' |
  'childContentfulBlogPost1BodyTextNode___childMarkdownRemark___headings___id' |
  'childContentfulBlogPost1BodyTextNode___childMarkdownRemark___headings___value' |
  'childContentfulBlogPost1BodyTextNode___childMarkdownRemark___headings___depth' |
  'childContentfulBlogPost1BodyTextNode___childMarkdownRemark___timeToRead' |
  'childContentfulBlogPost1BodyTextNode___childMarkdownRemark___tableOfContents' |
  'childContentfulBlogPost1BodyTextNode___childMarkdownRemark___wordCount___paragraphs' |
  'childContentfulBlogPost1BodyTextNode___childMarkdownRemark___wordCount___sentences' |
  'childContentfulBlogPost1BodyTextNode___childMarkdownRemark___wordCount___words' |
  'childContentfulBlogPost1BodyTextNode___childMarkdownRemark___parent___id' |
  'childContentfulBlogPost1BodyTextNode___childMarkdownRemark___parent___children' |
  'childContentfulBlogPost1BodyTextNode___childMarkdownRemark___children' |
  'childContentfulBlogPost1BodyTextNode___childMarkdownRemark___children___id' |
  'childContentfulBlogPost1BodyTextNode___childMarkdownRemark___children___children' |
  'childContentfulBlogPost1BodyTextNode___childMarkdownRemark___internal___content' |
  'childContentfulBlogPost1BodyTextNode___childMarkdownRemark___internal___contentDigest' |
  'childContentfulBlogPost1BodyTextNode___childMarkdownRemark___internal___description' |
  'childContentfulBlogPost1BodyTextNode___childMarkdownRemark___internal___fieldOwners' |
  'childContentfulBlogPost1BodyTextNode___childMarkdownRemark___internal___ignoreType' |
  'childContentfulBlogPost1BodyTextNode___childMarkdownRemark___internal___mediaType' |
  'childContentfulBlogPost1BodyTextNode___childMarkdownRemark___internal___owner' |
  'childContentfulBlogPost1BodyTextNode___childMarkdownRemark___internal___type' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type ContentfulBlogPost1GroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPost1Edge>;
  nodes: Array<ContentfulBlogPost1>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPost1FilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<ContentfulBlogPost1BodyTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlogPost1SysFilterInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  childrenContentfulBlogPost1BodyTextNode?: Maybe<ContentfulBlogPost1BodyTextNodeFilterListInput>;
  childContentfulBlogPost1BodyTextNode?: Maybe<ContentfulBlogPost1BodyTextNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulBlogPost1SortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlogPost1FieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulMinecraftPluginDescriptionTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulMinecraftPluginDescriptionTextNodeSysFilterInput>;
  childrenMarkdownRemark?: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type ContentfulMinecraftPluginDescriptionTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulMinecraftPluginBodyTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  body?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulMinecraftPluginBodyTextNodeSysFilterInput>;
  childrenMarkdownRemark?: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type ContentfulMinecraftPluginBodyTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulMinecraftPluginSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulMinecraftPluginSysContentTypeFilterInput>;
};

export type ContentfulMinecraftPluginSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulMinecraftPluginSysContentTypeSysFilterInput>;
};

export type ContentfulMinecraftPluginSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulMinecraftPluginBodyTextNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulMinecraftPluginBodyTextNodeFilterInput>;
};

export type ContentfulMinecraftPluginDescriptionTextNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulMinecraftPluginDescriptionTextNodeFilterInput>;
};

export type ContentfulMinecraftPluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulMinecraftPluginEdge>;
  nodes: Array<ContentfulMinecraftPlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulMinecraftPluginGroupConnection>;
};


export type ContentfulMinecraftPluginConnectionDistinctArgs = {
  field: ContentfulMinecraftPluginFieldsEnum;
};


export type ContentfulMinecraftPluginConnectionMaxArgs = {
  field: ContentfulMinecraftPluginFieldsEnum;
};


export type ContentfulMinecraftPluginConnectionMinArgs = {
  field: ContentfulMinecraftPluginFieldsEnum;
};


export type ContentfulMinecraftPluginConnectionSumArgs = {
  field: ContentfulMinecraftPluginFieldsEnum;
};


export type ContentfulMinecraftPluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulMinecraftPluginFieldsEnum;
};

export type ContentfulMinecraftPluginEdge = {
  next?: Maybe<ContentfulMinecraftPlugin>;
  node: ContentfulMinecraftPlugin;
  previous?: Maybe<ContentfulMinecraftPlugin>;
};

export type ContentfulMinecraftPluginFieldsEnum = 
  'contentful_id' |
  'id' |
  'node_locale' |
  'title' |
  'slug' |
  'description___id' |
  'description___parent___id' |
  'description___parent___parent___id' |
  'description___parent___parent___children' |
  'description___parent___children' |
  'description___parent___children___id' |
  'description___parent___children___children' |
  'description___parent___internal___content' |
  'description___parent___internal___contentDigest' |
  'description___parent___internal___description' |
  'description___parent___internal___fieldOwners' |
  'description___parent___internal___ignoreType' |
  'description___parent___internal___mediaType' |
  'description___parent___internal___owner' |
  'description___parent___internal___type' |
  'description___children' |
  'description___children___id' |
  'description___children___parent___id' |
  'description___children___parent___children' |
  'description___children___children' |
  'description___children___children___id' |
  'description___children___children___children' |
  'description___children___internal___content' |
  'description___children___internal___contentDigest' |
  'description___children___internal___description' |
  'description___children___internal___fieldOwners' |
  'description___children___internal___ignoreType' |
  'description___children___internal___mediaType' |
  'description___children___internal___owner' |
  'description___children___internal___type' |
  'description___internal___content' |
  'description___internal___contentDigest' |
  'description___internal___description' |
  'description___internal___fieldOwners' |
  'description___internal___ignoreType' |
  'description___internal___mediaType' |
  'description___internal___owner' |
  'description___internal___type' |
  'description___description' |
  'description___sys___type' |
  'description___childrenMarkdownRemark' |
  'description___childrenMarkdownRemark___id' |
  'description___childrenMarkdownRemark___frontmatter___title' |
  'description___childrenMarkdownRemark___excerpt' |
  'description___childrenMarkdownRemark___rawMarkdownBody' |
  'description___childrenMarkdownRemark___html' |
  'description___childrenMarkdownRemark___htmlAst' |
  'description___childrenMarkdownRemark___excerptAst' |
  'description___childrenMarkdownRemark___headings' |
  'description___childrenMarkdownRemark___headings___id' |
  'description___childrenMarkdownRemark___headings___value' |
  'description___childrenMarkdownRemark___headings___depth' |
  'description___childrenMarkdownRemark___timeToRead' |
  'description___childrenMarkdownRemark___tableOfContents' |
  'description___childrenMarkdownRemark___wordCount___paragraphs' |
  'description___childrenMarkdownRemark___wordCount___sentences' |
  'description___childrenMarkdownRemark___wordCount___words' |
  'description___childrenMarkdownRemark___parent___id' |
  'description___childrenMarkdownRemark___parent___children' |
  'description___childrenMarkdownRemark___children' |
  'description___childrenMarkdownRemark___children___id' |
  'description___childrenMarkdownRemark___children___children' |
  'description___childrenMarkdownRemark___internal___content' |
  'description___childrenMarkdownRemark___internal___contentDigest' |
  'description___childrenMarkdownRemark___internal___description' |
  'description___childrenMarkdownRemark___internal___fieldOwners' |
  'description___childrenMarkdownRemark___internal___ignoreType' |
  'description___childrenMarkdownRemark___internal___mediaType' |
  'description___childrenMarkdownRemark___internal___owner' |
  'description___childrenMarkdownRemark___internal___type' |
  'description___childMarkdownRemark___id' |
  'description___childMarkdownRemark___frontmatter___title' |
  'description___childMarkdownRemark___excerpt' |
  'description___childMarkdownRemark___rawMarkdownBody' |
  'description___childMarkdownRemark___html' |
  'description___childMarkdownRemark___htmlAst' |
  'description___childMarkdownRemark___excerptAst' |
  'description___childMarkdownRemark___headings' |
  'description___childMarkdownRemark___headings___id' |
  'description___childMarkdownRemark___headings___value' |
  'description___childMarkdownRemark___headings___depth' |
  'description___childMarkdownRemark___timeToRead' |
  'description___childMarkdownRemark___tableOfContents' |
  'description___childMarkdownRemark___wordCount___paragraphs' |
  'description___childMarkdownRemark___wordCount___sentences' |
  'description___childMarkdownRemark___wordCount___words' |
  'description___childMarkdownRemark___parent___id' |
  'description___childMarkdownRemark___parent___children' |
  'description___childMarkdownRemark___children' |
  'description___childMarkdownRemark___children___id' |
  'description___childMarkdownRemark___children___children' |
  'description___childMarkdownRemark___internal___content' |
  'description___childMarkdownRemark___internal___contentDigest' |
  'description___childMarkdownRemark___internal___description' |
  'description___childMarkdownRemark___internal___fieldOwners' |
  'description___childMarkdownRemark___internal___ignoreType' |
  'description___childMarkdownRemark___internal___mediaType' |
  'description___childMarkdownRemark___internal___owner' |
  'description___childMarkdownRemark___internal___type' |
  'body___id' |
  'body___parent___id' |
  'body___parent___parent___id' |
  'body___parent___parent___children' |
  'body___parent___children' |
  'body___parent___children___id' |
  'body___parent___children___children' |
  'body___parent___internal___content' |
  'body___parent___internal___contentDigest' |
  'body___parent___internal___description' |
  'body___parent___internal___fieldOwners' |
  'body___parent___internal___ignoreType' |
  'body___parent___internal___mediaType' |
  'body___parent___internal___owner' |
  'body___parent___internal___type' |
  'body___children' |
  'body___children___id' |
  'body___children___parent___id' |
  'body___children___parent___children' |
  'body___children___children' |
  'body___children___children___id' |
  'body___children___children___children' |
  'body___children___internal___content' |
  'body___children___internal___contentDigest' |
  'body___children___internal___description' |
  'body___children___internal___fieldOwners' |
  'body___children___internal___ignoreType' |
  'body___children___internal___mediaType' |
  'body___children___internal___owner' |
  'body___children___internal___type' |
  'body___internal___content' |
  'body___internal___contentDigest' |
  'body___internal___description' |
  'body___internal___fieldOwners' |
  'body___internal___ignoreType' |
  'body___internal___mediaType' |
  'body___internal___owner' |
  'body___internal___type' |
  'body___body' |
  'body___sys___type' |
  'body___childrenMarkdownRemark' |
  'body___childrenMarkdownRemark___id' |
  'body___childrenMarkdownRemark___frontmatter___title' |
  'body___childrenMarkdownRemark___excerpt' |
  'body___childrenMarkdownRemark___rawMarkdownBody' |
  'body___childrenMarkdownRemark___html' |
  'body___childrenMarkdownRemark___htmlAst' |
  'body___childrenMarkdownRemark___excerptAst' |
  'body___childrenMarkdownRemark___headings' |
  'body___childrenMarkdownRemark___headings___id' |
  'body___childrenMarkdownRemark___headings___value' |
  'body___childrenMarkdownRemark___headings___depth' |
  'body___childrenMarkdownRemark___timeToRead' |
  'body___childrenMarkdownRemark___tableOfContents' |
  'body___childrenMarkdownRemark___wordCount___paragraphs' |
  'body___childrenMarkdownRemark___wordCount___sentences' |
  'body___childrenMarkdownRemark___wordCount___words' |
  'body___childrenMarkdownRemark___parent___id' |
  'body___childrenMarkdownRemark___parent___children' |
  'body___childrenMarkdownRemark___children' |
  'body___childrenMarkdownRemark___children___id' |
  'body___childrenMarkdownRemark___children___children' |
  'body___childrenMarkdownRemark___internal___content' |
  'body___childrenMarkdownRemark___internal___contentDigest' |
  'body___childrenMarkdownRemark___internal___description' |
  'body___childrenMarkdownRemark___internal___fieldOwners' |
  'body___childrenMarkdownRemark___internal___ignoreType' |
  'body___childrenMarkdownRemark___internal___mediaType' |
  'body___childrenMarkdownRemark___internal___owner' |
  'body___childrenMarkdownRemark___internal___type' |
  'body___childMarkdownRemark___id' |
  'body___childMarkdownRemark___frontmatter___title' |
  'body___childMarkdownRemark___excerpt' |
  'body___childMarkdownRemark___rawMarkdownBody' |
  'body___childMarkdownRemark___html' |
  'body___childMarkdownRemark___htmlAst' |
  'body___childMarkdownRemark___excerptAst' |
  'body___childMarkdownRemark___headings' |
  'body___childMarkdownRemark___headings___id' |
  'body___childMarkdownRemark___headings___value' |
  'body___childMarkdownRemark___headings___depth' |
  'body___childMarkdownRemark___timeToRead' |
  'body___childMarkdownRemark___tableOfContents' |
  'body___childMarkdownRemark___wordCount___paragraphs' |
  'body___childMarkdownRemark___wordCount___sentences' |
  'body___childMarkdownRemark___wordCount___words' |
  'body___childMarkdownRemark___parent___id' |
  'body___childMarkdownRemark___parent___children' |
  'body___childMarkdownRemark___children' |
  'body___childMarkdownRemark___children___id' |
  'body___childMarkdownRemark___children___children' |
  'body___childMarkdownRemark___internal___content' |
  'body___childMarkdownRemark___internal___contentDigest' |
  'body___childMarkdownRemark___internal___description' |
  'body___childMarkdownRemark___internal___fieldOwners' |
  'body___childMarkdownRemark___internal___ignoreType' |
  'body___childMarkdownRemark___internal___mediaType' |
  'body___childMarkdownRemark___internal___owner' |
  'body___childMarkdownRemark___internal___type' |
  'spaceId' |
  'createdAt' |
  'updatedAt' |
  'sys___type' |
  'sys___revision' |
  'sys___contentType___sys___type' |
  'sys___contentType___sys___linkType' |
  'sys___contentType___sys___id' |
  'childrenContentfulMinecraftPluginBodyTextNode' |
  'childrenContentfulMinecraftPluginBodyTextNode___id' |
  'childrenContentfulMinecraftPluginBodyTextNode___parent___id' |
  'childrenContentfulMinecraftPluginBodyTextNode___parent___parent___id' |
  'childrenContentfulMinecraftPluginBodyTextNode___parent___parent___children' |
  'childrenContentfulMinecraftPluginBodyTextNode___parent___children' |
  'childrenContentfulMinecraftPluginBodyTextNode___parent___children___id' |
  'childrenContentfulMinecraftPluginBodyTextNode___parent___children___children' |
  'childrenContentfulMinecraftPluginBodyTextNode___parent___internal___content' |
  'childrenContentfulMinecraftPluginBodyTextNode___parent___internal___contentDigest' |
  'childrenContentfulMinecraftPluginBodyTextNode___parent___internal___description' |
  'childrenContentfulMinecraftPluginBodyTextNode___parent___internal___fieldOwners' |
  'childrenContentfulMinecraftPluginBodyTextNode___parent___internal___ignoreType' |
  'childrenContentfulMinecraftPluginBodyTextNode___parent___internal___mediaType' |
  'childrenContentfulMinecraftPluginBodyTextNode___parent___internal___owner' |
  'childrenContentfulMinecraftPluginBodyTextNode___parent___internal___type' |
  'childrenContentfulMinecraftPluginBodyTextNode___children' |
  'childrenContentfulMinecraftPluginBodyTextNode___children___id' |
  'childrenContentfulMinecraftPluginBodyTextNode___children___parent___id' |
  'childrenContentfulMinecraftPluginBodyTextNode___children___parent___children' |
  'childrenContentfulMinecraftPluginBodyTextNode___children___children' |
  'childrenContentfulMinecraftPluginBodyTextNode___children___children___id' |
  'childrenContentfulMinecraftPluginBodyTextNode___children___children___children' |
  'childrenContentfulMinecraftPluginBodyTextNode___children___internal___content' |
  'childrenContentfulMinecraftPluginBodyTextNode___children___internal___contentDigest' |
  'childrenContentfulMinecraftPluginBodyTextNode___children___internal___description' |
  'childrenContentfulMinecraftPluginBodyTextNode___children___internal___fieldOwners' |
  'childrenContentfulMinecraftPluginBodyTextNode___children___internal___ignoreType' |
  'childrenContentfulMinecraftPluginBodyTextNode___children___internal___mediaType' |
  'childrenContentfulMinecraftPluginBodyTextNode___children___internal___owner' |
  'childrenContentfulMinecraftPluginBodyTextNode___children___internal___type' |
  'childrenContentfulMinecraftPluginBodyTextNode___internal___content' |
  'childrenContentfulMinecraftPluginBodyTextNode___internal___contentDigest' |
  'childrenContentfulMinecraftPluginBodyTextNode___internal___description' |
  'childrenContentfulMinecraftPluginBodyTextNode___internal___fieldOwners' |
  'childrenContentfulMinecraftPluginBodyTextNode___internal___ignoreType' |
  'childrenContentfulMinecraftPluginBodyTextNode___internal___mediaType' |
  'childrenContentfulMinecraftPluginBodyTextNode___internal___owner' |
  'childrenContentfulMinecraftPluginBodyTextNode___internal___type' |
  'childrenContentfulMinecraftPluginBodyTextNode___body' |
  'childrenContentfulMinecraftPluginBodyTextNode___sys___type' |
  'childrenContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark' |
  'childrenContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___id' |
  'childrenContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___frontmatter___title' |
  'childrenContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___excerpt' |
  'childrenContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___rawMarkdownBody' |
  'childrenContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___html' |
  'childrenContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___htmlAst' |
  'childrenContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___excerptAst' |
  'childrenContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___headings' |
  'childrenContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___headings___id' |
  'childrenContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___headings___value' |
  'childrenContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___headings___depth' |
  'childrenContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___timeToRead' |
  'childrenContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___tableOfContents' |
  'childrenContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___wordCount___paragraphs' |
  'childrenContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___wordCount___sentences' |
  'childrenContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___wordCount___words' |
  'childrenContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___parent___id' |
  'childrenContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___parent___children' |
  'childrenContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___children' |
  'childrenContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___children___id' |
  'childrenContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___children___children' |
  'childrenContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___internal___content' |
  'childrenContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___internal___contentDigest' |
  'childrenContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___internal___description' |
  'childrenContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___internal___fieldOwners' |
  'childrenContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___internal___ignoreType' |
  'childrenContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___internal___mediaType' |
  'childrenContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___internal___owner' |
  'childrenContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___internal___type' |
  'childrenContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___id' |
  'childrenContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___frontmatter___title' |
  'childrenContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___excerpt' |
  'childrenContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___rawMarkdownBody' |
  'childrenContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___html' |
  'childrenContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___htmlAst' |
  'childrenContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___excerptAst' |
  'childrenContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___headings' |
  'childrenContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___headings___id' |
  'childrenContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___headings___value' |
  'childrenContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___headings___depth' |
  'childrenContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___timeToRead' |
  'childrenContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___tableOfContents' |
  'childrenContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___wordCount___paragraphs' |
  'childrenContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___wordCount___sentences' |
  'childrenContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___wordCount___words' |
  'childrenContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___parent___id' |
  'childrenContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___parent___children' |
  'childrenContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___children' |
  'childrenContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___children___id' |
  'childrenContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___children___children' |
  'childrenContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___internal___content' |
  'childrenContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___internal___contentDigest' |
  'childrenContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___internal___description' |
  'childrenContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___internal___fieldOwners' |
  'childrenContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___internal___ignoreType' |
  'childrenContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___internal___mediaType' |
  'childrenContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___internal___owner' |
  'childrenContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___internal___type' |
  'childContentfulMinecraftPluginBodyTextNode___id' |
  'childContentfulMinecraftPluginBodyTextNode___parent___id' |
  'childContentfulMinecraftPluginBodyTextNode___parent___parent___id' |
  'childContentfulMinecraftPluginBodyTextNode___parent___parent___children' |
  'childContentfulMinecraftPluginBodyTextNode___parent___children' |
  'childContentfulMinecraftPluginBodyTextNode___parent___children___id' |
  'childContentfulMinecraftPluginBodyTextNode___parent___children___children' |
  'childContentfulMinecraftPluginBodyTextNode___parent___internal___content' |
  'childContentfulMinecraftPluginBodyTextNode___parent___internal___contentDigest' |
  'childContentfulMinecraftPluginBodyTextNode___parent___internal___description' |
  'childContentfulMinecraftPluginBodyTextNode___parent___internal___fieldOwners' |
  'childContentfulMinecraftPluginBodyTextNode___parent___internal___ignoreType' |
  'childContentfulMinecraftPluginBodyTextNode___parent___internal___mediaType' |
  'childContentfulMinecraftPluginBodyTextNode___parent___internal___owner' |
  'childContentfulMinecraftPluginBodyTextNode___parent___internal___type' |
  'childContentfulMinecraftPluginBodyTextNode___children' |
  'childContentfulMinecraftPluginBodyTextNode___children___id' |
  'childContentfulMinecraftPluginBodyTextNode___children___parent___id' |
  'childContentfulMinecraftPluginBodyTextNode___children___parent___children' |
  'childContentfulMinecraftPluginBodyTextNode___children___children' |
  'childContentfulMinecraftPluginBodyTextNode___children___children___id' |
  'childContentfulMinecraftPluginBodyTextNode___children___children___children' |
  'childContentfulMinecraftPluginBodyTextNode___children___internal___content' |
  'childContentfulMinecraftPluginBodyTextNode___children___internal___contentDigest' |
  'childContentfulMinecraftPluginBodyTextNode___children___internal___description' |
  'childContentfulMinecraftPluginBodyTextNode___children___internal___fieldOwners' |
  'childContentfulMinecraftPluginBodyTextNode___children___internal___ignoreType' |
  'childContentfulMinecraftPluginBodyTextNode___children___internal___mediaType' |
  'childContentfulMinecraftPluginBodyTextNode___children___internal___owner' |
  'childContentfulMinecraftPluginBodyTextNode___children___internal___type' |
  'childContentfulMinecraftPluginBodyTextNode___internal___content' |
  'childContentfulMinecraftPluginBodyTextNode___internal___contentDigest' |
  'childContentfulMinecraftPluginBodyTextNode___internal___description' |
  'childContentfulMinecraftPluginBodyTextNode___internal___fieldOwners' |
  'childContentfulMinecraftPluginBodyTextNode___internal___ignoreType' |
  'childContentfulMinecraftPluginBodyTextNode___internal___mediaType' |
  'childContentfulMinecraftPluginBodyTextNode___internal___owner' |
  'childContentfulMinecraftPluginBodyTextNode___internal___type' |
  'childContentfulMinecraftPluginBodyTextNode___body' |
  'childContentfulMinecraftPluginBodyTextNode___sys___type' |
  'childContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark' |
  'childContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___id' |
  'childContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___frontmatter___title' |
  'childContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___excerpt' |
  'childContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___rawMarkdownBody' |
  'childContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___html' |
  'childContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___htmlAst' |
  'childContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___excerptAst' |
  'childContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___headings' |
  'childContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___headings___id' |
  'childContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___headings___value' |
  'childContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___headings___depth' |
  'childContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___timeToRead' |
  'childContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___tableOfContents' |
  'childContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___wordCount___paragraphs' |
  'childContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___wordCount___sentences' |
  'childContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___wordCount___words' |
  'childContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___parent___id' |
  'childContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___parent___children' |
  'childContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___children' |
  'childContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___children___id' |
  'childContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___children___children' |
  'childContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___internal___content' |
  'childContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___internal___contentDigest' |
  'childContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___internal___description' |
  'childContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___internal___fieldOwners' |
  'childContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___internal___ignoreType' |
  'childContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___internal___mediaType' |
  'childContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___internal___owner' |
  'childContentfulMinecraftPluginBodyTextNode___childrenMarkdownRemark___internal___type' |
  'childContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___id' |
  'childContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___frontmatter___title' |
  'childContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___excerpt' |
  'childContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___rawMarkdownBody' |
  'childContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___html' |
  'childContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___htmlAst' |
  'childContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___excerptAst' |
  'childContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___headings' |
  'childContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___headings___id' |
  'childContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___headings___value' |
  'childContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___headings___depth' |
  'childContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___timeToRead' |
  'childContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___tableOfContents' |
  'childContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___wordCount___paragraphs' |
  'childContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___wordCount___sentences' |
  'childContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___wordCount___words' |
  'childContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___parent___id' |
  'childContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___parent___children' |
  'childContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___children' |
  'childContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___children___id' |
  'childContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___children___children' |
  'childContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___internal___content' |
  'childContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___internal___contentDigest' |
  'childContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___internal___description' |
  'childContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___internal___fieldOwners' |
  'childContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___internal___ignoreType' |
  'childContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___internal___mediaType' |
  'childContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___internal___owner' |
  'childContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___internal___type' |
  'childrenContentfulMinecraftPluginDescriptionTextNode' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___id' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___parent___id' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___parent___parent___id' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___parent___parent___children' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___parent___children' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___parent___children___id' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___parent___children___children' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___parent___internal___content' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___parent___internal___contentDigest' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___parent___internal___description' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___parent___internal___fieldOwners' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___parent___internal___ignoreType' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___parent___internal___mediaType' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___parent___internal___owner' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___parent___internal___type' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___children' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___children___id' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___children___parent___id' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___children___parent___children' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___children___children' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___children___children___id' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___children___children___children' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___children___internal___content' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___children___internal___contentDigest' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___children___internal___description' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___children___internal___fieldOwners' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___children___internal___ignoreType' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___children___internal___mediaType' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___children___internal___owner' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___children___internal___type' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___internal___content' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___internal___contentDigest' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___internal___description' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___internal___fieldOwners' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___internal___ignoreType' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___internal___mediaType' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___internal___owner' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___internal___type' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___description' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___sys___type' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___id' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___frontmatter___title' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___excerpt' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___rawMarkdownBody' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___html' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___htmlAst' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___excerptAst' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___headings' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___headings___id' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___headings___value' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___headings___depth' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___timeToRead' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___tableOfContents' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___wordCount___paragraphs' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___wordCount___sentences' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___wordCount___words' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___parent___id' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___parent___children' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___children' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___children___id' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___children___children' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___internal___content' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___internal___contentDigest' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___internal___description' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___internal___fieldOwners' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___internal___ignoreType' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___internal___mediaType' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___internal___owner' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___internal___type' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___id' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___frontmatter___title' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___excerpt' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___rawMarkdownBody' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___html' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___htmlAst' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___excerptAst' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___headings' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___headings___id' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___headings___value' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___headings___depth' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___timeToRead' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___tableOfContents' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___wordCount___paragraphs' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___wordCount___sentences' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___wordCount___words' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___parent___id' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___parent___children' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___children' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___children___id' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___children___children' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___internal___content' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___internal___contentDigest' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___internal___description' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___internal___fieldOwners' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___internal___ignoreType' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___internal___mediaType' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___internal___owner' |
  'childrenContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___internal___type' |
  'childContentfulMinecraftPluginDescriptionTextNode___id' |
  'childContentfulMinecraftPluginDescriptionTextNode___parent___id' |
  'childContentfulMinecraftPluginDescriptionTextNode___parent___parent___id' |
  'childContentfulMinecraftPluginDescriptionTextNode___parent___parent___children' |
  'childContentfulMinecraftPluginDescriptionTextNode___parent___children' |
  'childContentfulMinecraftPluginDescriptionTextNode___parent___children___id' |
  'childContentfulMinecraftPluginDescriptionTextNode___parent___children___children' |
  'childContentfulMinecraftPluginDescriptionTextNode___parent___internal___content' |
  'childContentfulMinecraftPluginDescriptionTextNode___parent___internal___contentDigest' |
  'childContentfulMinecraftPluginDescriptionTextNode___parent___internal___description' |
  'childContentfulMinecraftPluginDescriptionTextNode___parent___internal___fieldOwners' |
  'childContentfulMinecraftPluginDescriptionTextNode___parent___internal___ignoreType' |
  'childContentfulMinecraftPluginDescriptionTextNode___parent___internal___mediaType' |
  'childContentfulMinecraftPluginDescriptionTextNode___parent___internal___owner' |
  'childContentfulMinecraftPluginDescriptionTextNode___parent___internal___type' |
  'childContentfulMinecraftPluginDescriptionTextNode___children' |
  'childContentfulMinecraftPluginDescriptionTextNode___children___id' |
  'childContentfulMinecraftPluginDescriptionTextNode___children___parent___id' |
  'childContentfulMinecraftPluginDescriptionTextNode___children___parent___children' |
  'childContentfulMinecraftPluginDescriptionTextNode___children___children' |
  'childContentfulMinecraftPluginDescriptionTextNode___children___children___id' |
  'childContentfulMinecraftPluginDescriptionTextNode___children___children___children' |
  'childContentfulMinecraftPluginDescriptionTextNode___children___internal___content' |
  'childContentfulMinecraftPluginDescriptionTextNode___children___internal___contentDigest' |
  'childContentfulMinecraftPluginDescriptionTextNode___children___internal___description' |
  'childContentfulMinecraftPluginDescriptionTextNode___children___internal___fieldOwners' |
  'childContentfulMinecraftPluginDescriptionTextNode___children___internal___ignoreType' |
  'childContentfulMinecraftPluginDescriptionTextNode___children___internal___mediaType' |
  'childContentfulMinecraftPluginDescriptionTextNode___children___internal___owner' |
  'childContentfulMinecraftPluginDescriptionTextNode___children___internal___type' |
  'childContentfulMinecraftPluginDescriptionTextNode___internal___content' |
  'childContentfulMinecraftPluginDescriptionTextNode___internal___contentDigest' |
  'childContentfulMinecraftPluginDescriptionTextNode___internal___description' |
  'childContentfulMinecraftPluginDescriptionTextNode___internal___fieldOwners' |
  'childContentfulMinecraftPluginDescriptionTextNode___internal___ignoreType' |
  'childContentfulMinecraftPluginDescriptionTextNode___internal___mediaType' |
  'childContentfulMinecraftPluginDescriptionTextNode___internal___owner' |
  'childContentfulMinecraftPluginDescriptionTextNode___internal___type' |
  'childContentfulMinecraftPluginDescriptionTextNode___description' |
  'childContentfulMinecraftPluginDescriptionTextNode___sys___type' |
  'childContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark' |
  'childContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___id' |
  'childContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___frontmatter___title' |
  'childContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___excerpt' |
  'childContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___rawMarkdownBody' |
  'childContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___html' |
  'childContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___htmlAst' |
  'childContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___excerptAst' |
  'childContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___headings' |
  'childContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___headings___id' |
  'childContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___headings___value' |
  'childContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___headings___depth' |
  'childContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___timeToRead' |
  'childContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___tableOfContents' |
  'childContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___wordCount___paragraphs' |
  'childContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___wordCount___sentences' |
  'childContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___wordCount___words' |
  'childContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___parent___id' |
  'childContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___parent___children' |
  'childContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___children' |
  'childContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___children___id' |
  'childContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___children___children' |
  'childContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___internal___content' |
  'childContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___internal___contentDigest' |
  'childContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___internal___description' |
  'childContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___internal___fieldOwners' |
  'childContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___internal___ignoreType' |
  'childContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___internal___mediaType' |
  'childContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___internal___owner' |
  'childContentfulMinecraftPluginDescriptionTextNode___childrenMarkdownRemark___internal___type' |
  'childContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___id' |
  'childContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___frontmatter___title' |
  'childContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___excerpt' |
  'childContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___rawMarkdownBody' |
  'childContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___html' |
  'childContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___htmlAst' |
  'childContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___excerptAst' |
  'childContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___headings' |
  'childContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___headings___id' |
  'childContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___headings___value' |
  'childContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___headings___depth' |
  'childContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___timeToRead' |
  'childContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___tableOfContents' |
  'childContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___wordCount___paragraphs' |
  'childContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___wordCount___sentences' |
  'childContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___wordCount___words' |
  'childContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___parent___id' |
  'childContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___parent___children' |
  'childContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___children' |
  'childContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___children___id' |
  'childContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___children___children' |
  'childContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___internal___content' |
  'childContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___internal___contentDigest' |
  'childContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___internal___description' |
  'childContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___internal___fieldOwners' |
  'childContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___internal___ignoreType' |
  'childContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___internal___mediaType' |
  'childContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___internal___owner' |
  'childContentfulMinecraftPluginDescriptionTextNode___childMarkdownRemark___internal___type' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type ContentfulMinecraftPluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulMinecraftPluginEdge>;
  nodes: Array<ContentfulMinecraftPlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulMinecraftPluginFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<ContentfulMinecraftPluginDescriptionTextNodeFilterInput>;
  body?: Maybe<ContentfulMinecraftPluginBodyTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulMinecraftPluginSysFilterInput>;
  childrenContentfulMinecraftPluginBodyTextNode?: Maybe<ContentfulMinecraftPluginBodyTextNodeFilterListInput>;
  childContentfulMinecraftPluginBodyTextNode?: Maybe<ContentfulMinecraftPluginBodyTextNodeFilterInput>;
  childrenContentfulMinecraftPluginDescriptionTextNode?: Maybe<ContentfulMinecraftPluginDescriptionTextNodeFilterListInput>;
  childContentfulMinecraftPluginDescriptionTextNode?: Maybe<ContentfulMinecraftPluginDescriptionTextNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulMinecraftPluginSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulMinecraftPluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulMinecraftPluginBodyTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulMinecraftPluginBodyTextNodeEdge>;
  nodes: Array<ContentfulMinecraftPluginBodyTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulMinecraftPluginBodyTextNodeGroupConnection>;
};


export type ContentfulMinecraftPluginBodyTextNodeConnectionDistinctArgs = {
  field: ContentfulMinecraftPluginBodyTextNodeFieldsEnum;
};


export type ContentfulMinecraftPluginBodyTextNodeConnectionMaxArgs = {
  field: ContentfulMinecraftPluginBodyTextNodeFieldsEnum;
};


export type ContentfulMinecraftPluginBodyTextNodeConnectionMinArgs = {
  field: ContentfulMinecraftPluginBodyTextNodeFieldsEnum;
};


export type ContentfulMinecraftPluginBodyTextNodeConnectionSumArgs = {
  field: ContentfulMinecraftPluginBodyTextNodeFieldsEnum;
};


export type ContentfulMinecraftPluginBodyTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulMinecraftPluginBodyTextNodeFieldsEnum;
};

export type ContentfulMinecraftPluginBodyTextNodeEdge = {
  next?: Maybe<ContentfulMinecraftPluginBodyTextNode>;
  node: ContentfulMinecraftPluginBodyTextNode;
  previous?: Maybe<ContentfulMinecraftPluginBodyTextNode>;
};

export type ContentfulMinecraftPluginBodyTextNodeFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'body' |
  'sys___type' |
  'childrenMarkdownRemark' |
  'childrenMarkdownRemark___id' |
  'childrenMarkdownRemark___frontmatter___title' |
  'childrenMarkdownRemark___excerpt' |
  'childrenMarkdownRemark___rawMarkdownBody' |
  'childrenMarkdownRemark___html' |
  'childrenMarkdownRemark___htmlAst' |
  'childrenMarkdownRemark___excerptAst' |
  'childrenMarkdownRemark___headings' |
  'childrenMarkdownRemark___headings___id' |
  'childrenMarkdownRemark___headings___value' |
  'childrenMarkdownRemark___headings___depth' |
  'childrenMarkdownRemark___timeToRead' |
  'childrenMarkdownRemark___tableOfContents' |
  'childrenMarkdownRemark___wordCount___paragraphs' |
  'childrenMarkdownRemark___wordCount___sentences' |
  'childrenMarkdownRemark___wordCount___words' |
  'childrenMarkdownRemark___parent___id' |
  'childrenMarkdownRemark___parent___parent___id' |
  'childrenMarkdownRemark___parent___parent___children' |
  'childrenMarkdownRemark___parent___children' |
  'childrenMarkdownRemark___parent___children___id' |
  'childrenMarkdownRemark___parent___children___children' |
  'childrenMarkdownRemark___parent___internal___content' |
  'childrenMarkdownRemark___parent___internal___contentDigest' |
  'childrenMarkdownRemark___parent___internal___description' |
  'childrenMarkdownRemark___parent___internal___fieldOwners' |
  'childrenMarkdownRemark___parent___internal___ignoreType' |
  'childrenMarkdownRemark___parent___internal___mediaType' |
  'childrenMarkdownRemark___parent___internal___owner' |
  'childrenMarkdownRemark___parent___internal___type' |
  'childrenMarkdownRemark___children' |
  'childrenMarkdownRemark___children___id' |
  'childrenMarkdownRemark___children___parent___id' |
  'childrenMarkdownRemark___children___parent___children' |
  'childrenMarkdownRemark___children___children' |
  'childrenMarkdownRemark___children___children___id' |
  'childrenMarkdownRemark___children___children___children' |
  'childrenMarkdownRemark___children___internal___content' |
  'childrenMarkdownRemark___children___internal___contentDigest' |
  'childrenMarkdownRemark___children___internal___description' |
  'childrenMarkdownRemark___children___internal___fieldOwners' |
  'childrenMarkdownRemark___children___internal___ignoreType' |
  'childrenMarkdownRemark___children___internal___mediaType' |
  'childrenMarkdownRemark___children___internal___owner' |
  'childrenMarkdownRemark___children___internal___type' |
  'childrenMarkdownRemark___internal___content' |
  'childrenMarkdownRemark___internal___contentDigest' |
  'childrenMarkdownRemark___internal___description' |
  'childrenMarkdownRemark___internal___fieldOwners' |
  'childrenMarkdownRemark___internal___ignoreType' |
  'childrenMarkdownRemark___internal___mediaType' |
  'childrenMarkdownRemark___internal___owner' |
  'childrenMarkdownRemark___internal___type' |
  'childMarkdownRemark___id' |
  'childMarkdownRemark___frontmatter___title' |
  'childMarkdownRemark___excerpt' |
  'childMarkdownRemark___rawMarkdownBody' |
  'childMarkdownRemark___html' |
  'childMarkdownRemark___htmlAst' |
  'childMarkdownRemark___excerptAst' |
  'childMarkdownRemark___headings' |
  'childMarkdownRemark___headings___id' |
  'childMarkdownRemark___headings___value' |
  'childMarkdownRemark___headings___depth' |
  'childMarkdownRemark___timeToRead' |
  'childMarkdownRemark___tableOfContents' |
  'childMarkdownRemark___wordCount___paragraphs' |
  'childMarkdownRemark___wordCount___sentences' |
  'childMarkdownRemark___wordCount___words' |
  'childMarkdownRemark___parent___id' |
  'childMarkdownRemark___parent___parent___id' |
  'childMarkdownRemark___parent___parent___children' |
  'childMarkdownRemark___parent___children' |
  'childMarkdownRemark___parent___children___id' |
  'childMarkdownRemark___parent___children___children' |
  'childMarkdownRemark___parent___internal___content' |
  'childMarkdownRemark___parent___internal___contentDigest' |
  'childMarkdownRemark___parent___internal___description' |
  'childMarkdownRemark___parent___internal___fieldOwners' |
  'childMarkdownRemark___parent___internal___ignoreType' |
  'childMarkdownRemark___parent___internal___mediaType' |
  'childMarkdownRemark___parent___internal___owner' |
  'childMarkdownRemark___parent___internal___type' |
  'childMarkdownRemark___children' |
  'childMarkdownRemark___children___id' |
  'childMarkdownRemark___children___parent___id' |
  'childMarkdownRemark___children___parent___children' |
  'childMarkdownRemark___children___children' |
  'childMarkdownRemark___children___children___id' |
  'childMarkdownRemark___children___children___children' |
  'childMarkdownRemark___children___internal___content' |
  'childMarkdownRemark___children___internal___contentDigest' |
  'childMarkdownRemark___children___internal___description' |
  'childMarkdownRemark___children___internal___fieldOwners' |
  'childMarkdownRemark___children___internal___ignoreType' |
  'childMarkdownRemark___children___internal___mediaType' |
  'childMarkdownRemark___children___internal___owner' |
  'childMarkdownRemark___children___internal___type' |
  'childMarkdownRemark___internal___content' |
  'childMarkdownRemark___internal___contentDigest' |
  'childMarkdownRemark___internal___description' |
  'childMarkdownRemark___internal___fieldOwners' |
  'childMarkdownRemark___internal___ignoreType' |
  'childMarkdownRemark___internal___mediaType' |
  'childMarkdownRemark___internal___owner' |
  'childMarkdownRemark___internal___type';

export type ContentfulMinecraftPluginBodyTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulMinecraftPluginBodyTextNodeEdge>;
  nodes: Array<ContentfulMinecraftPluginBodyTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulMinecraftPluginBodyTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulMinecraftPluginBodyTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulMinecraftPluginDescriptionTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulMinecraftPluginDescriptionTextNodeEdge>;
  nodes: Array<ContentfulMinecraftPluginDescriptionTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulMinecraftPluginDescriptionTextNodeGroupConnection>;
};


export type ContentfulMinecraftPluginDescriptionTextNodeConnectionDistinctArgs = {
  field: ContentfulMinecraftPluginDescriptionTextNodeFieldsEnum;
};


export type ContentfulMinecraftPluginDescriptionTextNodeConnectionMaxArgs = {
  field: ContentfulMinecraftPluginDescriptionTextNodeFieldsEnum;
};


export type ContentfulMinecraftPluginDescriptionTextNodeConnectionMinArgs = {
  field: ContentfulMinecraftPluginDescriptionTextNodeFieldsEnum;
};


export type ContentfulMinecraftPluginDescriptionTextNodeConnectionSumArgs = {
  field: ContentfulMinecraftPluginDescriptionTextNodeFieldsEnum;
};


export type ContentfulMinecraftPluginDescriptionTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulMinecraftPluginDescriptionTextNodeFieldsEnum;
};

export type ContentfulMinecraftPluginDescriptionTextNodeEdge = {
  next?: Maybe<ContentfulMinecraftPluginDescriptionTextNode>;
  node: ContentfulMinecraftPluginDescriptionTextNode;
  previous?: Maybe<ContentfulMinecraftPluginDescriptionTextNode>;
};

export type ContentfulMinecraftPluginDescriptionTextNodeFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'description' |
  'sys___type' |
  'childrenMarkdownRemark' |
  'childrenMarkdownRemark___id' |
  'childrenMarkdownRemark___frontmatter___title' |
  'childrenMarkdownRemark___excerpt' |
  'childrenMarkdownRemark___rawMarkdownBody' |
  'childrenMarkdownRemark___html' |
  'childrenMarkdownRemark___htmlAst' |
  'childrenMarkdownRemark___excerptAst' |
  'childrenMarkdownRemark___headings' |
  'childrenMarkdownRemark___headings___id' |
  'childrenMarkdownRemark___headings___value' |
  'childrenMarkdownRemark___headings___depth' |
  'childrenMarkdownRemark___timeToRead' |
  'childrenMarkdownRemark___tableOfContents' |
  'childrenMarkdownRemark___wordCount___paragraphs' |
  'childrenMarkdownRemark___wordCount___sentences' |
  'childrenMarkdownRemark___wordCount___words' |
  'childrenMarkdownRemark___parent___id' |
  'childrenMarkdownRemark___parent___parent___id' |
  'childrenMarkdownRemark___parent___parent___children' |
  'childrenMarkdownRemark___parent___children' |
  'childrenMarkdownRemark___parent___children___id' |
  'childrenMarkdownRemark___parent___children___children' |
  'childrenMarkdownRemark___parent___internal___content' |
  'childrenMarkdownRemark___parent___internal___contentDigest' |
  'childrenMarkdownRemark___parent___internal___description' |
  'childrenMarkdownRemark___parent___internal___fieldOwners' |
  'childrenMarkdownRemark___parent___internal___ignoreType' |
  'childrenMarkdownRemark___parent___internal___mediaType' |
  'childrenMarkdownRemark___parent___internal___owner' |
  'childrenMarkdownRemark___parent___internal___type' |
  'childrenMarkdownRemark___children' |
  'childrenMarkdownRemark___children___id' |
  'childrenMarkdownRemark___children___parent___id' |
  'childrenMarkdownRemark___children___parent___children' |
  'childrenMarkdownRemark___children___children' |
  'childrenMarkdownRemark___children___children___id' |
  'childrenMarkdownRemark___children___children___children' |
  'childrenMarkdownRemark___children___internal___content' |
  'childrenMarkdownRemark___children___internal___contentDigest' |
  'childrenMarkdownRemark___children___internal___description' |
  'childrenMarkdownRemark___children___internal___fieldOwners' |
  'childrenMarkdownRemark___children___internal___ignoreType' |
  'childrenMarkdownRemark___children___internal___mediaType' |
  'childrenMarkdownRemark___children___internal___owner' |
  'childrenMarkdownRemark___children___internal___type' |
  'childrenMarkdownRemark___internal___content' |
  'childrenMarkdownRemark___internal___contentDigest' |
  'childrenMarkdownRemark___internal___description' |
  'childrenMarkdownRemark___internal___fieldOwners' |
  'childrenMarkdownRemark___internal___ignoreType' |
  'childrenMarkdownRemark___internal___mediaType' |
  'childrenMarkdownRemark___internal___owner' |
  'childrenMarkdownRemark___internal___type' |
  'childMarkdownRemark___id' |
  'childMarkdownRemark___frontmatter___title' |
  'childMarkdownRemark___excerpt' |
  'childMarkdownRemark___rawMarkdownBody' |
  'childMarkdownRemark___html' |
  'childMarkdownRemark___htmlAst' |
  'childMarkdownRemark___excerptAst' |
  'childMarkdownRemark___headings' |
  'childMarkdownRemark___headings___id' |
  'childMarkdownRemark___headings___value' |
  'childMarkdownRemark___headings___depth' |
  'childMarkdownRemark___timeToRead' |
  'childMarkdownRemark___tableOfContents' |
  'childMarkdownRemark___wordCount___paragraphs' |
  'childMarkdownRemark___wordCount___sentences' |
  'childMarkdownRemark___wordCount___words' |
  'childMarkdownRemark___parent___id' |
  'childMarkdownRemark___parent___parent___id' |
  'childMarkdownRemark___parent___parent___children' |
  'childMarkdownRemark___parent___children' |
  'childMarkdownRemark___parent___children___id' |
  'childMarkdownRemark___parent___children___children' |
  'childMarkdownRemark___parent___internal___content' |
  'childMarkdownRemark___parent___internal___contentDigest' |
  'childMarkdownRemark___parent___internal___description' |
  'childMarkdownRemark___parent___internal___fieldOwners' |
  'childMarkdownRemark___parent___internal___ignoreType' |
  'childMarkdownRemark___parent___internal___mediaType' |
  'childMarkdownRemark___parent___internal___owner' |
  'childMarkdownRemark___parent___internal___type' |
  'childMarkdownRemark___children' |
  'childMarkdownRemark___children___id' |
  'childMarkdownRemark___children___parent___id' |
  'childMarkdownRemark___children___parent___children' |
  'childMarkdownRemark___children___children' |
  'childMarkdownRemark___children___children___id' |
  'childMarkdownRemark___children___children___children' |
  'childMarkdownRemark___children___internal___content' |
  'childMarkdownRemark___children___internal___contentDigest' |
  'childMarkdownRemark___children___internal___description' |
  'childMarkdownRemark___children___internal___fieldOwners' |
  'childMarkdownRemark___children___internal___ignoreType' |
  'childMarkdownRemark___children___internal___mediaType' |
  'childMarkdownRemark___children___internal___owner' |
  'childMarkdownRemark___children___internal___type' |
  'childMarkdownRemark___internal___content' |
  'childMarkdownRemark___internal___contentDigest' |
  'childMarkdownRemark___internal___description' |
  'childMarkdownRemark___internal___fieldOwners' |
  'childMarkdownRemark___internal___ignoreType' |
  'childMarkdownRemark___internal___mediaType' |
  'childMarkdownRemark___internal___owner' |
  'childMarkdownRemark___internal___type';

export type ContentfulMinecraftPluginDescriptionTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulMinecraftPluginDescriptionTextNodeEdge>;
  nodes: Array<ContentfulMinecraftPluginDescriptionTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulMinecraftPluginDescriptionTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulMinecraftPluginDescriptionTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlogPost1BodyTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPost1BodyTextNodeEdge>;
  nodes: Array<ContentfulBlogPost1BodyTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulBlogPost1BodyTextNodeGroupConnection>;
};


export type ContentfulBlogPost1BodyTextNodeConnectionDistinctArgs = {
  field: ContentfulBlogPost1BodyTextNodeFieldsEnum;
};


export type ContentfulBlogPost1BodyTextNodeConnectionMaxArgs = {
  field: ContentfulBlogPost1BodyTextNodeFieldsEnum;
};


export type ContentfulBlogPost1BodyTextNodeConnectionMinArgs = {
  field: ContentfulBlogPost1BodyTextNodeFieldsEnum;
};


export type ContentfulBlogPost1BodyTextNodeConnectionSumArgs = {
  field: ContentfulBlogPost1BodyTextNodeFieldsEnum;
};


export type ContentfulBlogPost1BodyTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlogPost1BodyTextNodeFieldsEnum;
};

export type ContentfulBlogPost1BodyTextNodeEdge = {
  next?: Maybe<ContentfulBlogPost1BodyTextNode>;
  node: ContentfulBlogPost1BodyTextNode;
  previous?: Maybe<ContentfulBlogPost1BodyTextNode>;
};

export type ContentfulBlogPost1BodyTextNodeFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'body' |
  'sys___type' |
  'childrenMarkdownRemark' |
  'childrenMarkdownRemark___id' |
  'childrenMarkdownRemark___frontmatter___title' |
  'childrenMarkdownRemark___excerpt' |
  'childrenMarkdownRemark___rawMarkdownBody' |
  'childrenMarkdownRemark___html' |
  'childrenMarkdownRemark___htmlAst' |
  'childrenMarkdownRemark___excerptAst' |
  'childrenMarkdownRemark___headings' |
  'childrenMarkdownRemark___headings___id' |
  'childrenMarkdownRemark___headings___value' |
  'childrenMarkdownRemark___headings___depth' |
  'childrenMarkdownRemark___timeToRead' |
  'childrenMarkdownRemark___tableOfContents' |
  'childrenMarkdownRemark___wordCount___paragraphs' |
  'childrenMarkdownRemark___wordCount___sentences' |
  'childrenMarkdownRemark___wordCount___words' |
  'childrenMarkdownRemark___parent___id' |
  'childrenMarkdownRemark___parent___parent___id' |
  'childrenMarkdownRemark___parent___parent___children' |
  'childrenMarkdownRemark___parent___children' |
  'childrenMarkdownRemark___parent___children___id' |
  'childrenMarkdownRemark___parent___children___children' |
  'childrenMarkdownRemark___parent___internal___content' |
  'childrenMarkdownRemark___parent___internal___contentDigest' |
  'childrenMarkdownRemark___parent___internal___description' |
  'childrenMarkdownRemark___parent___internal___fieldOwners' |
  'childrenMarkdownRemark___parent___internal___ignoreType' |
  'childrenMarkdownRemark___parent___internal___mediaType' |
  'childrenMarkdownRemark___parent___internal___owner' |
  'childrenMarkdownRemark___parent___internal___type' |
  'childrenMarkdownRemark___children' |
  'childrenMarkdownRemark___children___id' |
  'childrenMarkdownRemark___children___parent___id' |
  'childrenMarkdownRemark___children___parent___children' |
  'childrenMarkdownRemark___children___children' |
  'childrenMarkdownRemark___children___children___id' |
  'childrenMarkdownRemark___children___children___children' |
  'childrenMarkdownRemark___children___internal___content' |
  'childrenMarkdownRemark___children___internal___contentDigest' |
  'childrenMarkdownRemark___children___internal___description' |
  'childrenMarkdownRemark___children___internal___fieldOwners' |
  'childrenMarkdownRemark___children___internal___ignoreType' |
  'childrenMarkdownRemark___children___internal___mediaType' |
  'childrenMarkdownRemark___children___internal___owner' |
  'childrenMarkdownRemark___children___internal___type' |
  'childrenMarkdownRemark___internal___content' |
  'childrenMarkdownRemark___internal___contentDigest' |
  'childrenMarkdownRemark___internal___description' |
  'childrenMarkdownRemark___internal___fieldOwners' |
  'childrenMarkdownRemark___internal___ignoreType' |
  'childrenMarkdownRemark___internal___mediaType' |
  'childrenMarkdownRemark___internal___owner' |
  'childrenMarkdownRemark___internal___type' |
  'childMarkdownRemark___id' |
  'childMarkdownRemark___frontmatter___title' |
  'childMarkdownRemark___excerpt' |
  'childMarkdownRemark___rawMarkdownBody' |
  'childMarkdownRemark___html' |
  'childMarkdownRemark___htmlAst' |
  'childMarkdownRemark___excerptAst' |
  'childMarkdownRemark___headings' |
  'childMarkdownRemark___headings___id' |
  'childMarkdownRemark___headings___value' |
  'childMarkdownRemark___headings___depth' |
  'childMarkdownRemark___timeToRead' |
  'childMarkdownRemark___tableOfContents' |
  'childMarkdownRemark___wordCount___paragraphs' |
  'childMarkdownRemark___wordCount___sentences' |
  'childMarkdownRemark___wordCount___words' |
  'childMarkdownRemark___parent___id' |
  'childMarkdownRemark___parent___parent___id' |
  'childMarkdownRemark___parent___parent___children' |
  'childMarkdownRemark___parent___children' |
  'childMarkdownRemark___parent___children___id' |
  'childMarkdownRemark___parent___children___children' |
  'childMarkdownRemark___parent___internal___content' |
  'childMarkdownRemark___parent___internal___contentDigest' |
  'childMarkdownRemark___parent___internal___description' |
  'childMarkdownRemark___parent___internal___fieldOwners' |
  'childMarkdownRemark___parent___internal___ignoreType' |
  'childMarkdownRemark___parent___internal___mediaType' |
  'childMarkdownRemark___parent___internal___owner' |
  'childMarkdownRemark___parent___internal___type' |
  'childMarkdownRemark___children' |
  'childMarkdownRemark___children___id' |
  'childMarkdownRemark___children___parent___id' |
  'childMarkdownRemark___children___parent___children' |
  'childMarkdownRemark___children___children' |
  'childMarkdownRemark___children___children___id' |
  'childMarkdownRemark___children___children___children' |
  'childMarkdownRemark___children___internal___content' |
  'childMarkdownRemark___children___internal___contentDigest' |
  'childMarkdownRemark___children___internal___description' |
  'childMarkdownRemark___children___internal___fieldOwners' |
  'childMarkdownRemark___children___internal___ignoreType' |
  'childMarkdownRemark___children___internal___mediaType' |
  'childMarkdownRemark___children___internal___owner' |
  'childMarkdownRemark___children___internal___type' |
  'childMarkdownRemark___internal___content' |
  'childMarkdownRemark___internal___contentDigest' |
  'childMarkdownRemark___internal___description' |
  'childMarkdownRemark___internal___fieldOwners' |
  'childMarkdownRemark___internal___ignoreType' |
  'childMarkdownRemark___internal___mediaType' |
  'childMarkdownRemark___internal___owner' |
  'childMarkdownRemark___internal___type';

export type ContentfulBlogPost1BodyTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPost1BodyTextNodeEdge>;
  nodes: Array<ContentfulBlogPost1BodyTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPost1BodyTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlogPost1BodyTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulContentTypeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulContentTypeGroupConnection>;
};


export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionMaxArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionMinArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionSumArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeEdge = {
  next?: Maybe<ContentfulContentType>;
  node: ContentfulContentType;
  previous?: Maybe<ContentfulContentType>;
};

export type ContentfulContentTypeFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'name' |
  'displayField' |
  'description' |
  'sys___type';

export type ContentfulContentTypeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulContentTypeSysFilterInput>;
};

export type ContentfulContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContentTypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'buildTime';

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'resolve' |
  'name' |
  'version' |
  'pluginOptions___plugins' |
  'pluginOptions___plugins___resolve' |
  'pluginOptions___plugins___id' |
  'pluginOptions___plugins___name' |
  'pluginOptions___plugins___version' |
  'pluginOptions___plugins___pluginFilepath' |
  'pluginOptions___fileName' |
  'pluginOptions___isTSX' |
  'pluginOptions___jsxPragma' |
  'pluginOptions___allExtensions' |
  'pluginOptions___spaceId' |
  'pluginOptions___accessToken' |
  'pluginOptions___host' |
  'pluginOptions___environment' |
  'pluginOptions___downloadLocal' |
  'pluginOptions___forceFullSync' |
  'pluginOptions___pageLimit' |
  'pluginOptions___assetDownloadWorkers' |
  'pluginOptions___useNameForId' |
  'pluginOptions___path' |
  'pluginOptions___languages' |
  'pluginOptions___defaultLanguage' |
  'pluginOptions___redirect' |
  'pluginOptions___extensions' |
  'pluginOptions___pathCheck' |
  'nodeAPIs' |
  'browserAPIs' |
  'ssrAPIs' |
  'pluginFilepath' |
  'packageJson___name' |
  'packageJson___description' |
  'packageJson___version' |
  'packageJson___main' |
  'packageJson___author' |
  'packageJson___license' |
  'packageJson___dependencies' |
  'packageJson___dependencies___name' |
  'packageJson___dependencies___version' |
  'packageJson___devDependencies' |
  'packageJson___devDependencies___name' |
  'packageJson___devDependencies___version' |
  'packageJson___peerDependencies' |
  'packageJson___peerDependencies___name' |
  'packageJson___peerDependencies___version' |
  'packageJson___keywords';

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ComponentsHomeIndexQueryVariables = {};


export type ComponentsHomeIndexQuery = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title'>> }> };

export type ComponentsLayoutQueryVariables = {};


export type ComponentsLayoutQuery = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title'>> }> };

export type Unnamed_1_QueryVariables = {};


export type Unnamed_1_Query = { themeUiConfig?: Maybe<Pick<ThemeUiConfig, 'preset' | 'prismPreset'>> };

export type GatsbyContentfulFixedFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_TracedSvgFragment = Pick<ContentfulFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_NoBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_WithWebpFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulFixed_WithWebp_NoBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulFluidFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_TracedSvgFragment = Pick<ContentfulFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_NoBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_WithWebpFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulFluid_WithWebp_NoBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;
