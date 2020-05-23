export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type ContentfulAsset = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  contentful_id?: Maybe<Scalars['String']>;
  file?: Maybe<ContentfulAssetFile>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  node_locale?: Maybe<Scalars['String']>;
  fixed?: Maybe<ContentfulFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ContentfulResolutions>;
  fluid?: Maybe<ContentfulFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ContentfulSizes>;
  resize?: Maybe<ContentfulResize>;
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


export type ContentfulAssetResolutionsArgs = {
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


export type ContentfulAssetSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
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

export type ContentfulAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAssetGroupConnection>;
};


export type ContentfulAssetConnectionDistinctArgs = {
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
  'contentful_id' |
  'file___url' |
  'file___details___size' |
  'file___details___image___width' |
  'file___details___image___height' |
  'file___fileName' |
  'file___contentType' |
  'title' |
  'description' |
  'node_locale' |
  'fixed___base64' |
  'fixed___tracedSVG' |
  'fixed___aspectRatio' |
  'fixed___width' |
  'fixed___height' |
  'fixed___src' |
  'fixed___srcSet' |
  'fixed___srcWebp' |
  'fixed___srcSetWebp' |
  'resolutions___base64' |
  'resolutions___tracedSVG' |
  'resolutions___aspectRatio' |
  'resolutions___width' |
  'resolutions___height' |
  'resolutions___src' |
  'resolutions___srcSet' |
  'resolutions___srcWebp' |
  'resolutions___srcSetWebp' |
  'fluid___base64' |
  'fluid___tracedSVG' |
  'fluid___aspectRatio' |
  'fluid___src' |
  'fluid___srcSet' |
  'fluid___srcWebp' |
  'fluid___srcSetWebp' |
  'fluid___sizes' |
  'sizes___base64' |
  'sizes___tracedSVG' |
  'sizes___aspectRatio' |
  'sizes___src' |
  'sizes___srcSet' |
  'sizes___srcWebp' |
  'sizes___srcSetWebp' |
  'sizes___sizes' |
  'resize___base64' |
  'resize___tracedSVG' |
  'resize___src' |
  'resize___width' |
  'resize___height' |
  'resize___aspectRatio';

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

export type ContentfulAssetFileDetailsFilterInput = {
  size?: Maybe<IntQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

export type ContentfulAssetFileDetailsImage = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  details?: Maybe<ContentfulAssetFileDetailsFilterInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
};

export type ContentfulAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAssetSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlogPost1 = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  body?: Maybe<ContentfulBlogPost1BodyTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulBlogPost1Sys>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulBlogPost1BodyTextNode?: Maybe<ContentfulBlogPost1BodyTextNode>;
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

export type ContentfulBlogPost1BodyTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  body?: Maybe<Scalars['String']>;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulBlogPost1BodyTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPost1BodyTextNodeEdge>;
  nodes: Array<ContentfulBlogPost1BodyTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlogPost1BodyTextNodeGroupConnection>;
};


export type ContentfulBlogPost1BodyTextNodeConnectionDistinctArgs = {
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

export type ContentfulBlogPost1BodyTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  body?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

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

export type ContentfulBlogPost1Connection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPost1Edge>;
  nodes: Array<ContentfulBlogPost1>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlogPost1GroupConnection>;
};


export type ContentfulBlogPost1ConnectionDistinctArgs = {
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
  'title' |
  'tags' |
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
  'contentful_id' |
  'createdAt' |
  'updatedAt' |
  'sys___revision' |
  'sys___contentType___sys___type' |
  'sys___contentType___sys___linkType' |
  'sys___contentType___sys___id' |
  'sys___contentType___sys___contentful_id' |
  'node_locale' |
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
  'childContentfulBlogPost1BodyTextNode___childMarkdownRemark___internal___type';

export type ContentfulBlogPost1FilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<ContentfulBlogPost1BodyTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlogPost1SysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulBlogPost1BodyTextNode?: Maybe<ContentfulBlogPost1BodyTextNodeFilterInput>;
};

export type ContentfulBlogPost1GroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPost1Edge>;
  nodes: Array<ContentfulBlogPost1>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPost1SortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlogPost1FieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlogPost1Sys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulBlogPost1SysContentType>;
};

export type ContentfulBlogPost1SysContentType = {
  sys?: Maybe<ContentfulBlogPost1SysContentTypeSys>;
};

export type ContentfulBlogPost1SysContentTypeFilterInput = {
  sys?: Maybe<ContentfulBlogPost1SysContentTypeSysFilterInput>;
};

export type ContentfulBlogPost1SysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPost1SysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlogPost1SysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulBlogPost1SysContentTypeFilterInput>;
};

export type ContentfulContentType = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  displayField?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulContentTypeGroupConnection>;
};


export type ContentfulContentTypeConnectionDistinctArgs = {
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
  'description';

export type ContentfulContentTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulContentTypeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContentTypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
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

export type ContentfulImageFormat = 
  'NO_CHANGE' |
  'JPG' |
  'PNG' |
  'WEBP';

export type ContentfulMinecraftPlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<ContentfulMinecraftPluginDescriptionTextNode>;
  body?: Maybe<ContentfulMinecraftPluginBodyTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulMinecraftPluginSys>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulMinecraftPluginDescriptionTextNode?: Maybe<ContentfulMinecraftPluginDescriptionTextNode>;
  childContentfulMinecraftPluginBodyTextNode?: Maybe<ContentfulMinecraftPluginBodyTextNode>;
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

export type ContentfulMinecraftPluginBodyTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  body?: Maybe<Scalars['String']>;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulMinecraftPluginBodyTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulMinecraftPluginBodyTextNodeEdge>;
  nodes: Array<ContentfulMinecraftPluginBodyTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulMinecraftPluginBodyTextNodeGroupConnection>;
};


export type ContentfulMinecraftPluginBodyTextNodeConnectionDistinctArgs = {
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

export type ContentfulMinecraftPluginBodyTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  body?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

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

export type ContentfulMinecraftPluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulMinecraftPluginEdge>;
  nodes: Array<ContentfulMinecraftPlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulMinecraftPluginGroupConnection>;
};


export type ContentfulMinecraftPluginConnectionDistinctArgs = {
  field: ContentfulMinecraftPluginFieldsEnum;
};


export type ContentfulMinecraftPluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulMinecraftPluginFieldsEnum;
};

export type ContentfulMinecraftPluginDescriptionTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  description?: Maybe<Scalars['String']>;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulMinecraftPluginDescriptionTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulMinecraftPluginDescriptionTextNodeEdge>;
  nodes: Array<ContentfulMinecraftPluginDescriptionTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulMinecraftPluginDescriptionTextNodeGroupConnection>;
};


export type ContentfulMinecraftPluginDescriptionTextNodeConnectionDistinctArgs = {
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

export type ContentfulMinecraftPluginDescriptionTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

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

export type ContentfulMinecraftPluginEdge = {
  next?: Maybe<ContentfulMinecraftPlugin>;
  node: ContentfulMinecraftPlugin;
  previous?: Maybe<ContentfulMinecraftPlugin>;
};

export type ContentfulMinecraftPluginFieldsEnum = 
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
  'contentful_id' |
  'createdAt' |
  'updatedAt' |
  'sys___revision' |
  'sys___contentType___sys___type' |
  'sys___contentType___sys___linkType' |
  'sys___contentType___sys___id' |
  'sys___contentType___sys___contentful_id' |
  'node_locale' |
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
  'childContentfulMinecraftPluginBodyTextNode___childMarkdownRemark___internal___type';

export type ContentfulMinecraftPluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<ContentfulMinecraftPluginDescriptionTextNodeFilterInput>;
  body?: Maybe<ContentfulMinecraftPluginBodyTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulMinecraftPluginSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulMinecraftPluginDescriptionTextNode?: Maybe<ContentfulMinecraftPluginDescriptionTextNodeFilterInput>;
  childContentfulMinecraftPluginBodyTextNode?: Maybe<ContentfulMinecraftPluginBodyTextNodeFilterInput>;
};

export type ContentfulMinecraftPluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulMinecraftPluginEdge>;
  nodes: Array<ContentfulMinecraftPlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulMinecraftPluginSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulMinecraftPluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulMinecraftPluginSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulMinecraftPluginSysContentType>;
};

export type ContentfulMinecraftPluginSysContentType = {
  sys?: Maybe<ContentfulMinecraftPluginSysContentTypeSys>;
};

export type ContentfulMinecraftPluginSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulMinecraftPluginSysContentTypeSysFilterInput>;
};

export type ContentfulMinecraftPluginSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulMinecraftPluginSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulMinecraftPluginSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulMinecraftPluginSysContentTypeFilterInput>;
};

export type ContentfulResize = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type ContentfulResizeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type ContentfulResolutions = {
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

export type ContentfulResolutionsFilterInput = {
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

export type ContentfulSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
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

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
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

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
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

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
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

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
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

export type ImageResizingBehavior = 
  'NO_CHANGE' |
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  'PAD' |
  /** Crop a part of the original image to match the specified size. */
  'CROP' |
  /**
   * Crop the image to the specified dimensions, if the original image is smaller
   * than these dimensions, then the image will be upscaled.
   */
  'FILL' |
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  'THUMB' |
  /** Scale the image regardless of the original aspect ratio. */
  'SCALE';

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


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type MarkdownExcerptFormats = 
  'PLAIN' |
  'HTML' |
  'MARKDOWN';

export type MarkdownHeading = {
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>;
};

export type MarkdownHeadingLevels = 
  'h1' |
  'h2' |
  'h3' |
  'h4' |
  'h5' |
  'h6';

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

export type MarkdownRemarkConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MarkdownRemarkGroupConnection>;
};


export type MarkdownRemarkConnectionDistinctArgs = {
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

export type MarkdownRemarkFrontmatter = {
  title?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
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

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  markdownRemark?: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  contentfulAsset?: Maybe<ContentfulAsset>;
  allContentfulAsset: ContentfulAssetConnection;
  contentfulMinecraftPluginBodyTextNode?: Maybe<ContentfulMinecraftPluginBodyTextNode>;
  allContentfulMinecraftPluginBodyTextNode: ContentfulMinecraftPluginBodyTextNodeConnection;
  contentfulMinecraftPluginDescriptionTextNode?: Maybe<ContentfulMinecraftPluginDescriptionTextNode>;
  allContentfulMinecraftPluginDescriptionTextNode: ContentfulMinecraftPluginDescriptionTextNodeConnection;
  contentfulMinecraftPlugin?: Maybe<ContentfulMinecraftPlugin>;
  allContentfulMinecraftPlugin: ContentfulMinecraftPluginConnection;
  contentfulBlogPost1BodyTextNode?: Maybe<ContentfulBlogPost1BodyTextNode>;
  allContentfulBlogPost1BodyTextNode: ContentfulBlogPost1BodyTextNodeConnection;
  contentfulBlogPost1?: Maybe<ContentfulBlogPost1>;
  allContentfulBlogPost1: ContentfulBlogPost1Connection;
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


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<DateQueryOperatorInput>;
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


export type QueryContentfulAssetArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
};


export type QueryAllContentfulAssetArgs = {
  filter?: Maybe<ContentfulAssetFilterInput>;
  sort?: Maybe<ContentfulAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulMinecraftPluginBodyTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  body?: Maybe<StringQueryOperatorInput>;
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
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulMinecraftPluginDescriptionTextNodeArgs = {
  filter?: Maybe<ContentfulMinecraftPluginDescriptionTextNodeFilterInput>;
  sort?: Maybe<ContentfulMinecraftPluginDescriptionTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulMinecraftPluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<ContentfulMinecraftPluginDescriptionTextNodeFilterInput>;
  body?: Maybe<ContentfulMinecraftPluginBodyTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulMinecraftPluginSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulMinecraftPluginDescriptionTextNode?: Maybe<ContentfulMinecraftPluginDescriptionTextNodeFilterInput>;
  childContentfulMinecraftPluginBodyTextNode?: Maybe<ContentfulMinecraftPluginBodyTextNodeFilterInput>;
};


export type QueryAllContentfulMinecraftPluginArgs = {
  filter?: Maybe<ContentfulMinecraftPluginFilterInput>;
  sort?: Maybe<ContentfulMinecraftPluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlogPost1BodyTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  body?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulBlogPost1BodyTextNodeArgs = {
  filter?: Maybe<ContentfulBlogPost1BodyTextNodeFilterInput>;
  sort?: Maybe<ContentfulBlogPost1BodyTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlogPost1Args = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<ContentfulBlogPost1BodyTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlogPost1SysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulBlogPost1BodyTextNode?: Maybe<ContentfulBlogPost1BodyTextNodeFilterInput>;
};


export type QueryAllContentfulBlogPost1Args = {
  filter?: Maybe<ContentfulBlogPost1FilterInput>;
  sort?: Maybe<ContentfulBlogPost1SortInput>;
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

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Date']>;
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


export type SitePortArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
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

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
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

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
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

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<DateQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
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

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  post?: Maybe<SitePageContextPost>;
  language?: Maybe<Scalars['String']>;
  intl?: Maybe<SitePageContextIntl>;
  blogPosts?: Maybe<SitePageContextBlogPosts>;
  contents?: Maybe<SitePageContextContents>;
};

export type SitePageContextBlogPosts = {
  JDRhIXJSIowkvvC69T5aD?: Maybe<SitePageContextBlogPostsJdRhIxjsIowkvvC69T5aD>;
  _38gxn8P23T7Y8S9Pz1FSXm?: Maybe<SitePageContextBlogPosts_38gxn8P23T7Y8S9Pz1FsXm>;
  _3g76xvOUM1h1HHJapNSc8t?: Maybe<SitePageContextBlogPosts_3g76xvOum1h1HhJapNSc8t>;
  _64XDT2hjdHGIGY5PoG3iP?: Maybe<SitePageContextBlogPosts_64Xdt2hjdHgigy5PoG3iP>;
};

export type SitePageContextBlogPosts_38gxn8P23T7Y8S9Pz1FsXm = {
  ja?: Maybe<SitePageContextBlogPosts_38gxn8P23T7Y8S9Pz1FsXmJa>;
};

export type SitePageContextBlogPosts_38gxn8P23T7Y8S9Pz1FsXmFilterInput = {
  ja?: Maybe<SitePageContextBlogPosts_38gxn8P23T7Y8S9Pz1FsXmJaFilterInput>;
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

export type SitePageContextBlogPosts_38gxn8P23T7Y8S9Pz1FsXmJaBodyChildMarkdownRemarkFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextBlogPosts_38gxn8P23T7Y8S9Pz1FsXmJaBodyFilterInput = {
  childMarkdownRemark?: Maybe<SitePageContextBlogPosts_38gxn8P23T7Y8S9Pz1FsXmJaBodyChildMarkdownRemarkFilterInput>;
};

export type SitePageContextBlogPosts_38gxn8P23T7Y8S9Pz1FsXmJaFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<SitePageContextBlogPosts_38gxn8P23T7Y8S9Pz1FsXmJaBodyFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
};

export type SitePageContextBlogPosts_3g76xvOum1h1HhJapNSc8t = {
  ja?: Maybe<SitePageContextBlogPosts_3g76xvOum1h1HhJapNSc8tJa>;
};

export type SitePageContextBlogPosts_3g76xvOum1h1HhJapNSc8tFilterInput = {
  ja?: Maybe<SitePageContextBlogPosts_3g76xvOum1h1HhJapNSc8tJaFilterInput>;
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

export type SitePageContextBlogPosts_3g76xvOum1h1HhJapNSc8tJaBodyChildMarkdownRemarkFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextBlogPosts_3g76xvOum1h1HhJapNSc8tJaBodyFilterInput = {
  childMarkdownRemark?: Maybe<SitePageContextBlogPosts_3g76xvOum1h1HhJapNSc8tJaBodyChildMarkdownRemarkFilterInput>;
};

export type SitePageContextBlogPosts_3g76xvOum1h1HhJapNSc8tJaFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<SitePageContextBlogPosts_3g76xvOum1h1HhJapNSc8tJaBodyFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
};

export type SitePageContextBlogPosts_64Xdt2hjdHgigy5PoG3iP = {
  ja?: Maybe<SitePageContextBlogPosts_64Xdt2hjdHgigy5PoG3iPJa>;
};

export type SitePageContextBlogPosts_64Xdt2hjdHgigy5PoG3iPFilterInput = {
  ja?: Maybe<SitePageContextBlogPosts_64Xdt2hjdHgigy5PoG3iPJaFilterInput>;
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

export type SitePageContextBlogPosts_64Xdt2hjdHgigy5PoG3iPJaBodyChildMarkdownRemarkFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextBlogPosts_64Xdt2hjdHgigy5PoG3iPJaBodyFilterInput = {
  childMarkdownRemark?: Maybe<SitePageContextBlogPosts_64Xdt2hjdHgigy5PoG3iPJaBodyChildMarkdownRemarkFilterInput>;
};

export type SitePageContextBlogPosts_64Xdt2hjdHgigy5PoG3iPJaFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<SitePageContextBlogPosts_64Xdt2hjdHgigy5PoG3iPJaBodyFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
};

export type SitePageContextBlogPostsFilterInput = {
  JDRhIXJSIowkvvC69T5aD?: Maybe<SitePageContextBlogPostsJdRhIxjsIowkvvC69T5aDFilterInput>;
  _38gxn8P23T7Y8S9Pz1FSXm?: Maybe<SitePageContextBlogPosts_38gxn8P23T7Y8S9Pz1FsXmFilterInput>;
  _3g76xvOUM1h1HHJapNSc8t?: Maybe<SitePageContextBlogPosts_3g76xvOum1h1HhJapNSc8tFilterInput>;
  _64XDT2hjdHGIGY5PoG3iP?: Maybe<SitePageContextBlogPosts_64Xdt2hjdHgigy5PoG3iPFilterInput>;
};

export type SitePageContextBlogPostsJdRhIxjsIowkvvC69T5aD = {
  ja?: Maybe<SitePageContextBlogPostsJdRhIxjsIowkvvC69T5aDJa>;
};

export type SitePageContextBlogPostsJdRhIxjsIowkvvC69T5aDFilterInput = {
  ja?: Maybe<SitePageContextBlogPostsJdRhIxjsIowkvvC69T5aDJaFilterInput>;
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

export type SitePageContextBlogPostsJdRhIxjsIowkvvC69T5aDJaBodyChildMarkdownRemarkFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextBlogPostsJdRhIxjsIowkvvC69T5aDJaBodyFilterInput = {
  childMarkdownRemark?: Maybe<SitePageContextBlogPostsJdRhIxjsIowkvvC69T5aDJaBodyChildMarkdownRemarkFilterInput>;
};

export type SitePageContextBlogPostsJdRhIxjsIowkvvC69T5aDJaFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<SitePageContextBlogPostsJdRhIxjsIowkvvC69T5aDJaBodyFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
};

export type SitePageContextContents = {
  ja?: Maybe<SitePageContextContentsJa>;
  en?: Maybe<SitePageContextContentsEn>;
  _28oplOdibxbGimUGIubCxn?: Maybe<SitePageContextContents_28oplOdibxbGimUgIubCxn>;
};

export type SitePageContextContents_28oplOdibxbGimUgIubCxn = {
  ja?: Maybe<SitePageContextContents_28oplOdibxbGimUgIubCxnJa>;
  en?: Maybe<SitePageContextContents_28oplOdibxbGimUgIubCxnEn>;
};

export type SitePageContextContents_28oplOdibxbGimUgIubCxnEn = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<SitePageContextContents_28oplOdibxbGimUgIubCxnEnDescription>;
  body?: Maybe<SitePageContextContents_28oplOdibxbGimUgIubCxnEnBody>;
  node_locale?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_28oplOdibxbGimUgIubCxnEnBody = {
  childMarkdownRemark?: Maybe<SitePageContextContents_28oplOdibxbGimUgIubCxnEnBodyChildMarkdownRemark>;
};

export type SitePageContextContents_28oplOdibxbGimUgIubCxnEnBodyChildMarkdownRemark = {
  html?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_28oplOdibxbGimUgIubCxnEnBodyChildMarkdownRemarkFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_28oplOdibxbGimUgIubCxnEnBodyFilterInput = {
  childMarkdownRemark?: Maybe<SitePageContextContents_28oplOdibxbGimUgIubCxnEnBodyChildMarkdownRemarkFilterInput>;
};

export type SitePageContextContents_28oplOdibxbGimUgIubCxnEnDescription = {
  description?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_28oplOdibxbGimUgIubCxnEnDescriptionFilterInput = {
  description?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_28oplOdibxbGimUgIubCxnEnFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<SitePageContextContents_28oplOdibxbGimUgIubCxnEnDescriptionFilterInput>;
  body?: Maybe<SitePageContextContents_28oplOdibxbGimUgIubCxnEnBodyFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_28oplOdibxbGimUgIubCxnFilterInput = {
  ja?: Maybe<SitePageContextContents_28oplOdibxbGimUgIubCxnJaFilterInput>;
  en?: Maybe<SitePageContextContents_28oplOdibxbGimUgIubCxnEnFilterInput>;
};

export type SitePageContextContents_28oplOdibxbGimUgIubCxnJa = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<SitePageContextContents_28oplOdibxbGimUgIubCxnJaDescription>;
  body?: Maybe<SitePageContextContents_28oplOdibxbGimUgIubCxnJaBody>;
  node_locale?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_28oplOdibxbGimUgIubCxnJaBody = {
  childMarkdownRemark?: Maybe<SitePageContextContents_28oplOdibxbGimUgIubCxnJaBodyChildMarkdownRemark>;
};

export type SitePageContextContents_28oplOdibxbGimUgIubCxnJaBodyChildMarkdownRemark = {
  html?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_28oplOdibxbGimUgIubCxnJaBodyChildMarkdownRemarkFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_28oplOdibxbGimUgIubCxnJaBodyFilterInput = {
  childMarkdownRemark?: Maybe<SitePageContextContents_28oplOdibxbGimUgIubCxnJaBodyChildMarkdownRemarkFilterInput>;
};

export type SitePageContextContents_28oplOdibxbGimUgIubCxnJaDescription = {
  description?: Maybe<Scalars['String']>;
};

export type SitePageContextContents_28oplOdibxbGimUgIubCxnJaDescriptionFilterInput = {
  description?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContents_28oplOdibxbGimUgIubCxnJaFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<SitePageContextContents_28oplOdibxbGimUgIubCxnJaDescriptionFilterInput>;
  body?: Maybe<SitePageContextContents_28oplOdibxbGimUgIubCxnJaBodyFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContentsEn = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<SitePageContextContentsEnDescription>;
  body?: Maybe<SitePageContextContentsEnBody>;
  node_locale?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type SitePageContextContentsEnBody = {
  childMarkdownRemark?: Maybe<SitePageContextContentsEnBodyChildMarkdownRemark>;
};

export type SitePageContextContentsEnBodyChildMarkdownRemark = {
  html?: Maybe<Scalars['String']>;
};

export type SitePageContextContentsEnBodyChildMarkdownRemarkFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContentsEnBodyFilterInput = {
  childMarkdownRemark?: Maybe<SitePageContextContentsEnBodyChildMarkdownRemarkFilterInput>;
};

export type SitePageContextContentsEnDescription = {
  description?: Maybe<Scalars['String']>;
};

export type SitePageContextContentsEnDescriptionFilterInput = {
  description?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContentsEnFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<SitePageContextContentsEnDescriptionFilterInput>;
  body?: Maybe<SitePageContextContentsEnBodyFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContentsFilterInput = {
  ja?: Maybe<SitePageContextContentsJaFilterInput>;
  en?: Maybe<SitePageContextContentsEnFilterInput>;
  _28oplOdibxbGimUGIubCxn?: Maybe<SitePageContextContents_28oplOdibxbGimUgIubCxnFilterInput>;
};

export type SitePageContextContentsJa = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<SitePageContextContentsJaDescription>;
  body?: Maybe<SitePageContextContentsJaBody>;
  node_locale?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type SitePageContextContentsJaBody = {
  childMarkdownRemark?: Maybe<SitePageContextContentsJaBodyChildMarkdownRemark>;
};

export type SitePageContextContentsJaBodyChildMarkdownRemark = {
  html?: Maybe<Scalars['String']>;
};

export type SitePageContextContentsJaBodyChildMarkdownRemarkFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContentsJaBodyFilterInput = {
  childMarkdownRemark?: Maybe<SitePageContextContentsJaBodyChildMarkdownRemarkFilterInput>;
};

export type SitePageContextContentsJaDescription = {
  description?: Maybe<Scalars['String']>;
};

export type SitePageContextContentsJaDescriptionFilterInput = {
  description?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextContentsJaFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<SitePageContextContentsJaDescriptionFilterInput>;
  body?: Maybe<SitePageContextContentsJaBodyFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextFilterInput = {
  post?: Maybe<SitePageContextPostFilterInput>;
  language?: Maybe<StringQueryOperatorInput>;
  intl?: Maybe<SitePageContextIntlFilterInput>;
  blogPosts?: Maybe<SitePageContextBlogPostsFilterInput>;
  contents?: Maybe<SitePageContextContentsFilterInput>;
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

export type SitePageContextIntlFilterInput = {
  language?: Maybe<StringQueryOperatorInput>;
  languages?: Maybe<StringQueryOperatorInput>;
  messages?: Maybe<SitePageContextIntlMessagesFilterInput>;
  routed?: Maybe<BooleanQueryOperatorInput>;
  originalPath?: Maybe<StringQueryOperatorInput>;
  redirect?: Maybe<BooleanQueryOperatorInput>;
  defaultLanguage?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextIntlMessages = {
  components_Home_blog?: Maybe<Scalars['String']>;
  components_Home_blogPosts?: Maybe<Scalars['String']>;
  components_Home_description?: Maybe<Scalars['String']>;
  components_Home_services?: Maybe<Scalars['String']>;
  components_Minecraft_description?: Maybe<Scalars['String']>;
  components_Minecraft_title?: Maybe<Scalars['String']>;
  templates_blog_posts_title?: Maybe<Scalars['String']>;
};

export type SitePageContextIntlMessagesFilterInput = {
  components_Home_blog?: Maybe<StringQueryOperatorInput>;
  components_Home_blogPosts?: Maybe<StringQueryOperatorInput>;
  components_Home_description?: Maybe<StringQueryOperatorInput>;
  components_Home_services?: Maybe<StringQueryOperatorInput>;
  components_Minecraft_description?: Maybe<StringQueryOperatorInput>;
  components_Minecraft_title?: Maybe<StringQueryOperatorInput>;
  templates_blog_posts_title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPost = {
  ja?: Maybe<SitePageContextPostJa>;
};

export type SitePageContextPostFilterInput = {
  ja?: Maybe<SitePageContextPostJaFilterInput>;
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

export type SitePageContextPostJaBodyChildMarkdownRemarkFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPostJaBodyFilterInput = {
  childMarkdownRemark?: Maybe<SitePageContextPostJaBodyChildMarkdownRemarkFilterInput>;
};

export type SitePageContextPostJaFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<SitePageContextPostJaBodyFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
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
  'context___intl___messages___components_Minecraft_description' |
  'context___intl___messages___components_Minecraft_title' |
  'context___intl___messages___templates_blog_posts_title' |
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
  'pluginCreator___pluginOptions___spaceId' |
  'pluginCreator___pluginOptions___accessToken' |
  'pluginCreator___pluginOptions___path' |
  'pluginCreator___pluginOptions___languages' |
  'pluginCreator___pluginOptions___defaultLanguage' |
  'pluginCreator___pluginOptions___redirect' |
  'pluginCreator___pluginOptions___pathCheck' |
  'pluginCreator___nodeAPIs' |
  'pluginCreator___browserAPIs' |
  'pluginCreator___ssrAPIs' |
  'pluginCreator___pluginFilepath' |
  'pluginCreator___packageJson___name' |
  'pluginCreator___packageJson___description' |
  'pluginCreator___packageJson___version' |
  'pluginCreator___packageJson___main' |
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

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
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

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
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
  'pluginOptions___spaceId' |
  'pluginOptions___accessToken' |
  'pluginOptions___path' |
  'pluginOptions___languages' |
  'pluginOptions___defaultLanguage' |
  'pluginOptions___redirect' |
  'pluginOptions___pathCheck' |
  'nodeAPIs' |
  'browserAPIs' |
  'ssrAPIs' |
  'pluginFilepath' |
  'packageJson___name' |
  'packageJson___description' |
  'packageJson___version' |
  'packageJson___main' |
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

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
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

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>;
  fileName?: Maybe<Scalars['String']>;
  spaceId?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  languages?: Maybe<Array<Maybe<Scalars['String']>>>;
  defaultLanguage?: Maybe<Scalars['String']>;
  redirect?: Maybe<Scalars['Boolean']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  accessToken?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  languages?: Maybe<StringQueryOperatorInput>;
  defaultLanguage?: Maybe<StringQueryOperatorInput>;
  redirect?: Maybe<BooleanQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsPlugins = {
  resolve?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginFilepath?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  authors?: Maybe<Array<Maybe<SiteSiteMetadataAuthors>>>;
};

export type SiteSiteMetadataAuthors = {
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataAuthorsFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataAuthorsFilterListInput = {
  elemMatch?: Maybe<SiteSiteMetadataAuthorsFilterInput>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  authors?: Maybe<SiteSiteMetadataAuthorsFilterListInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum = 
  'ASC' |
  'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type ComponentsHomeIndexQueryVariables = {};


export type ComponentsHomeIndexQuery = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title'>> }> };

export type ComponentsLayoutQueryVariables = {};


export type ComponentsLayoutQuery = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title'>> }> };

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

export type GatsbyContentfulResolutionsFragment = Pick<ContentfulResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_TracedSvgFragment = Pick<ContentfulResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_NoBase64Fragment = Pick<ContentfulResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_WithWebpFragment = Pick<ContentfulResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulResolutions_WithWebp_NoBase64Fragment = Pick<ContentfulResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulSizesFragment = Pick<ContentfulSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_TracedSvgFragment = Pick<ContentfulSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_NoBase64Fragment = Pick<ContentfulSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_WithWebpFragment = Pick<ContentfulSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulSizes_WithWebp_NoBase64Fragment = Pick<ContentfulSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;
