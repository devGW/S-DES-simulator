(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('classnames'), require('react-dom')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', 'classnames', 'react-dom'], factory) :
  (factory((global.gestalt = {}),global.React,global.PropTypes,global.classnames,global.ReactDOM));
}(this, (function (exports,React,PropTypes,classnames,reactDom) { 'use strict';

  PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
  classnames = classnames && classnames.hasOwnProperty('default') ? classnames['default'] : classnames;

  var styles = { "box": "_h _z7 _4q", "xsDisplayNone": "_i", "xsDisplayFlex": "_j", "xsDisplayBlock": "_k", "xsDisplayInlineBlock": "_l", "xsDisplayVisuallyHidden": "_m", "smDisplayNone": "_n", "smDisplayFlex": "_o", "smDisplayBlock": "_p", "smDisplayInlineBlock": "_q", "smDisplayVisuallyHidden": "_r", "mdDisplayNone": "_s", "mdDisplayFlex": "_t", "mdDisplayBlock": "_u", "mdDisplayInlineBlock": "_v", "mdDisplayVisuallyHidden": "_w", "lgDisplayNone": "_x", "lgDisplayFlex": "_y", "lgDisplayBlock": "_z", "lgDisplayInlineBlock": "_10", "lgDisplayVisuallyHidden": "_11", "xsDirectionRow": "_12", "xsDirectionColumn": "_13", "smDirectionRow": "_14", "smDirectionColumn": "_15", "mdDirectionRow": "_16", "mdDirectionColumn": "_17", "lgDirectionRow": "_18", "lgDirectionColumn": "_19", "xsCol0": "_1a", "xsCol1": "_1b _xv", "xsCol2": "_1c _xw", "xsCol3": "_1d _xx", "xsCol4": "_1e _xy", "xsCol5": "_1f _xz", "xsCol6": "_1g _y0", "xsCol7": "_1h _y1", "xsCol8": "_1i _y2", "xsCol9": "_1j _y3", "xsCol10": "_1k _y4", "xsCol11": "_1l _y5", "xsCol12": "_1m _y6", "smCol0": "_1n", "smCol1": "_1o _y7", "smCol2": "_1p _y8", "smCol3": "_1q _y9", "smCol4": "_1r _ya", "smCol5": "_1s _yb", "smCol6": "_1t _yc", "smCol7": "_1u _yd", "smCol8": "_1v _ye", "smCol9": "_1w _yf", "smCol10": "_1x _yg", "smCol11": "_1y _yh", "smCol12": "_1z _yi", "mdCol0": "_20", "mdCol1": "_21 _yj", "mdCol2": "_22 _yk", "mdCol3": "_23 _yl", "mdCol4": "_24 _ym", "mdCol5": "_25 _yn", "mdCol6": "_26 _yo", "mdCol7": "_27 _yp", "mdCol8": "_28 _yq", "mdCol9": "_29 _yr", "mdCol10": "_2a _ys", "mdCol11": "_2b _yt", "mdCol12": "_2c _yu", "lgCol0": "_2d", "lgCol1": "_2e _yv", "lgCol2": "_2f _yw", "lgCol3": "_2g _yx", "lgCol4": "_2h _yy", "lgCol5": "_2i _yz", "lgCol6": "_2j _z0", "lgCol7": "_2k _z1", "lgCol8": "_2l _z2", "lgCol9": "_2m _z3", "lgCol10": "_2n _z4", "lgCol11": "_2o _z5", "lgCol12": "_2p _z6" };

  var borders = { "border": "_2q", "borderTop": "_2r", "borderRight": "_2s", "borderBottom": "_2t", "borderLeft": "_2u", "square": "_2v", "circle": "_2w", "pill": "_2x", "rounded": "_2y", "roundedTop": "_2z", "roundedRight": "_30", "roundedBottom": "_31", "roundedLeft": "_32", "noBorder": "_33" };

  var colors = { "red": "_34", "redBg": "_35", "white": "_36", "whiteBg": "_37", "lightGray": "_38", "lightGrayBg": "_39", "gray": "_3a", "grayBg": "_3b", "darkGray": "_3c", "darkGrayBg": "_3d", "green": "_3e", "greenBg": "_3f", "pine": "_3g", "pineBg": "_3h", "olive": "_3i", "oliveBg": "_3j", "blue": "_3k", "blueBg": "_3l", "navy": "_3m", "navyBg": "_3n", "midnight": "_3o", "midnightBg": "_3p", "purple": "_3q", "purpleBg": "_3r", "orchid": "_3s", "orchidBg": "_3t", "eggplant": "_3u", "eggplantBg": "_3v", "maroon": "_3w", "maroonBg": "_3x", "watermelon": "_3y", "watermelonBg": "_3z", "orange": "_40", "orangeBg": "_41", "transparentBg": "_42", "lightWashBg": "_43", "darkWashBg": "_44" };

  var layout = { "block": "_45", "inline": "_46", "inlineBlock": "_47", "table": "_48", "overflowHidden": "_49", "overflowScroll": "_4a", "overflowScrollX": "_4b", "overflowScrollY": "_4c", "overflowAuto": "_4d", "fit": "_4e", "relative": "_4f", "fixed": "_4g", "absolute": "_4h", "sticky": "_4i", "top0": "_4j", "right0": "_4k", "bottom0": "_4l", "left0": "_4m", "small": "_4n", "medium": "_4o", "large": "_4p", "borderBox": "_4q", "contentBox": "_4r", "-webkit-box-flex": "_4s", "-webkit-flex": "_4s", "-ms-flex": "_4s", "flex": "_4s", "smFlex": "_4t", "mdFlex": "_4u", "lgFlex": "_4v", "flexColumn": "_4w", "flexWrap": "_4x", "itemsStart": "_4y", "itemsEnd": "_4z", "itemsCenter": "_50", "itemsBaseline": "_51", "itemsStretch": "_52", "selfStart": "_53", "selfEnd": "_54", "selfCenter": "_55", "selfBaseline": "_56", "selfStretch": "_57", "justifyStart": "_58", "justifyEnd": "_59", "justifyCenter": "_5a", "justifyBetween": "_5b", "justifyAround": "_5c", "contentStart": "_5d", "contentEnd": "_5e", "contentCenter": "_5f", "contentBetween": "_5g", "contentAround": "_5h", "contentStretch": "_5i", "flexGrow": "_5j", "flexNone": "_5k", "orderFirst": "_5l", "orderLast": "_5m" };

  var whitespace = { "marginStart1": "_5n", "marginEnd1": "_5o", "marginStartN1": "_5p", "marginEndN1": "_5q", "marginTop1": "_5r", "marginRight1": "_5s", "marginBottom1": "_5t", "marginLeft1": "_5u", "marginTopN1": "_5v", "marginRightN1": "_5w", "marginBottomN1": "_5x", "marginLeftN1": "_5y", "paddingY1": "_5z", "paddingX1": "_60", "marginStart2": "_61", "marginEnd2": "_62", "marginStartN2": "_63", "marginEndN2": "_64", "marginTop2": "_65", "marginRight2": "_66", "marginBottom2": "_67", "marginLeft2": "_68", "marginTopN2": "_69", "marginRightN2": "_6a", "marginBottomN2": "_6b", "marginLeftN2": "_6c", "paddingY2": "_6d", "paddingX2": "_6e", "marginStart3": "_6f", "marginEnd3": "_6g", "marginStartN3": "_6h", "marginEndN3": "_6i", "marginTop3": "_6j", "marginRight3": "_6k", "marginBottom3": "_6l", "marginLeft3": "_6m", "marginTopN3": "_6n", "marginRightN3": "_6o", "marginBottomN3": "_6p", "marginLeftN3": "_6q", "paddingY3": "_6r", "paddingX3": "_6s", "marginStart4": "_6t", "marginEnd4": "_6u", "marginStartN4": "_6v", "marginEndN4": "_6w", "marginTop4": "_6x", "marginRight4": "_6y", "marginBottom4": "_6z", "marginLeft4": "_70", "marginTopN4": "_71", "marginRightN4": "_72", "marginBottomN4": "_73", "marginLeftN4": "_74", "paddingY4": "_75", "paddingX4": "_76", "marginStart5": "_77", "marginEnd5": "_78", "marginStartN5": "_79", "marginEndN5": "_7a", "marginTop5": "_7b", "marginRight5": "_7c", "marginBottom5": "_7d", "marginLeft5": "_7e", "marginTopN5": "_7f", "marginRightN5": "_7g", "marginBottomN5": "_7h", "marginLeftN5": "_7i", "paddingY5": "_7j", "paddingX5": "_7k", "marginStart6": "_7l", "marginEnd6": "_7m", "marginStartN6": "_7n", "marginEndN6": "_7o", "marginTop6": "_7p", "marginRight6": "_7q", "marginBottom6": "_7r", "marginLeft6": "_7s", "marginTopN6": "_7t", "marginRightN6": "_7u", "marginBottomN6": "_7v", "marginLeftN6": "_7w", "paddingY6": "_7x", "paddingX6": "_7y", "marginStart7": "_7z", "marginEnd7": "_80", "marginStartN7": "_81", "marginEndN7": "_82", "marginTop7": "_83", "marginRight7": "_84", "marginBottom7": "_85", "marginLeft7": "_86", "marginTopN7": "_87", "marginRightN7": "_88", "marginBottomN7": "_89", "marginLeftN7": "_8a", "paddingY7": "_8b", "paddingX7": "_8c", "marginStart8": "_8d", "marginEnd8": "_8e", "marginStartN8": "_8f", "marginEndN8": "_8g", "marginTop8": "_8h", "marginRight8": "_8i", "marginBottom8": "_8j", "marginLeft8": "_8k", "marginTopN8": "_8l", "marginRightN8": "_8m", "marginBottomN8": "_8n", "marginLeftN8": "_8o", "paddingY8": "_8p", "paddingX8": "_8q", "marginStart9": "_8r", "marginEnd9": "_8s", "marginStartN9": "_8t", "marginEndN9": "_8u", "marginTop9": "_8v", "marginRight9": "_8w", "marginBottom9": "_8x", "marginLeft9": "_8y", "marginTopN9": "_8z", "marginRightN9": "_90", "marginBottomN9": "_91", "marginLeftN9": "_92", "paddingY9": "_93", "paddingX9": "_94", "marginStart10": "_95", "marginEnd10": "_96", "marginStartN10": "_97", "marginEndN10": "_98", "marginTop10": "_99", "marginRight10": "_9a", "marginBottom10": "_9b", "marginLeft10": "_9c", "marginTopN10": "_9d", "marginRightN10": "_9e", "marginBottomN10": "_9f", "marginLeftN10": "_9g", "paddingY10": "_9h", "paddingX10": "_9i", "marginStart11": "_9j", "marginEnd11": "_9k", "marginStartN11": "_9l", "marginEndN11": "_9m", "marginTop11": "_9n", "marginRight11": "_9o", "marginBottom11": "_9p", "marginLeft11": "_9q", "marginTopN11": "_9r", "marginRightN11": "_9s", "marginBottomN11": "_9t", "marginLeftN11": "_9u", "paddingY11": "_9v", "paddingX11": "_9w", "marginStart12": "_9x", "marginEnd12": "_9y", "marginStartN12": "_9z", "marginEndN12": "_a0", "marginTop12": "_a1", "marginRight12": "_a2", "marginBottom12": "_a3", "marginLeft12": "_a4", "marginTopN12": "_a5", "marginRightN12": "_a6", "marginBottomN12": "_a7", "marginLeftN12": "_a8", "paddingY12": "_a9", "paddingX12": "_aa", "smMarginStart1": "_ab", "smMarginEnd1": "_ac", "smMarginStartN1": "_ad", "smMarginEndN1": "_ae", "smMarginTop1": "_af", "smMarginRight1": "_ag", "smMarginBottom1": "_ah", "smMarginLeft1": "_ai", "smMarginTopN1": "_aj", "smMarginRightN1": "_ak", "smMarginBottomN1": "_al", "smMarginLeftN1": "_am", "smPaddingY1": "_an", "smPaddingX1": "_ao", "smMarginStart2": "_ap", "smMarginEnd2": "_aq", "smMarginStartN2": "_ar", "smMarginEndN2": "_as", "smMarginTop2": "_at", "smMarginRight2": "_au", "smMarginBottom2": "_av", "smMarginLeft2": "_aw", "smMarginTopN2": "_ax", "smMarginRightN2": "_ay", "smMarginBottomN2": "_az", "smMarginLeftN2": "_b0", "smPaddingY2": "_b1", "smPaddingX2": "_b2", "smMarginStart3": "_b3", "smMarginEnd3": "_b4", "smMarginStartN3": "_b5", "smMarginEndN3": "_b6", "smMarginTop3": "_b7", "smMarginRight3": "_b8", "smMarginBottom3": "_b9", "smMarginLeft3": "_ba", "smMarginTopN3": "_bb", "smMarginRightN3": "_bc", "smMarginBottomN3": "_bd", "smMarginLeftN3": "_be", "smPaddingY3": "_bf", "smPaddingX3": "_bg", "smMarginStart4": "_bh", "smMarginEnd4": "_bi", "smMarginStartN4": "_bj", "smMarginEndN4": "_bk", "smMarginTop4": "_bl", "smMarginRight4": "_bm", "smMarginBottom4": "_bn", "smMarginLeft4": "_bo", "smMarginTopN4": "_bp", "smMarginRightN4": "_bq", "smMarginBottomN4": "_br", "smMarginLeftN4": "_bs", "smPaddingY4": "_bt", "smPaddingX4": "_bu", "smMarginStart5": "_bv", "smMarginEnd5": "_bw", "smMarginStartN5": "_bx", "smMarginEndN5": "_by", "smMarginTop5": "_bz", "smMarginRight5": "_c0", "smMarginBottom5": "_c1", "smMarginLeft5": "_c2", "smMarginTopN5": "_c3", "smMarginRightN5": "_c4", "smMarginBottomN5": "_c5", "smMarginLeftN5": "_c6", "smPaddingY5": "_c7", "smPaddingX5": "_c8", "smMarginStart6": "_c9", "smMarginEnd6": "_ca", "smMarginStartN6": "_cb", "smMarginEndN6": "_cc", "smMarginTop6": "_cd", "smMarginRight6": "_ce", "smMarginBottom6": "_cf", "smMarginLeft6": "_cg", "smMarginTopN6": "_ch", "smMarginRightN6": "_ci", "smMarginBottomN6": "_cj", "smMarginLeftN6": "_ck", "smPaddingY6": "_cl", "smPaddingX6": "_cm", "smMarginStart7": "_cn", "smMarginEnd7": "_co", "smMarginStartN7": "_cp", "smMarginEndN7": "_cq", "smMarginTop7": "_cr", "smMarginRight7": "_cs", "smMarginBottom7": "_ct", "smMarginLeft7": "_cu", "smMarginTopN7": "_cv", "smMarginRightN7": "_cw", "smMarginBottomN7": "_cx", "smMarginLeftN7": "_cy", "smPaddingY7": "_cz", "smPaddingX7": "_d0", "smMarginStart8": "_d1", "smMarginEnd8": "_d2", "smMarginStartN8": "_d3", "smMarginEndN8": "_d4", "smMarginTop8": "_d5", "smMarginRight8": "_d6", "smMarginBottom8": "_d7", "smMarginLeft8": "_d8", "smMarginTopN8": "_d9", "smMarginRightN8": "_da", "smMarginBottomN8": "_db", "smMarginLeftN8": "_dc", "smPaddingY8": "_dd", "smPaddingX8": "_de", "smMarginStart9": "_df", "smMarginEnd9": "_dg", "smMarginStartN9": "_dh", "smMarginEndN9": "_di", "smMarginTop9": "_dj", "smMarginRight9": "_dk", "smMarginBottom9": "_dl", "smMarginLeft9": "_dm", "smMarginTopN9": "_dn", "smMarginRightN9": "_do", "smMarginBottomN9": "_dp", "smMarginLeftN9": "_dq", "smPaddingY9": "_dr", "smPaddingX9": "_ds", "smMarginStart10": "_dt", "smMarginEnd10": "_du", "smMarginStartN10": "_dv", "smMarginEndN10": "_dw", "smMarginTop10": "_dx", "smMarginRight10": "_dy", "smMarginBottom10": "_dz", "smMarginLeft10": "_e0", "smMarginTopN10": "_e1", "smMarginRightN10": "_e2", "smMarginBottomN10": "_e3", "smMarginLeftN10": "_e4", "smPaddingY10": "_e5", "smPaddingX10": "_e6", "smMarginStart11": "_e7", "smMarginEnd11": "_e8", "smMarginStartN11": "_e9", "smMarginEndN11": "_ea", "smMarginTop11": "_eb", "smMarginRight11": "_ec", "smMarginBottom11": "_ed", "smMarginLeft11": "_ee", "smMarginTopN11": "_ef", "smMarginRightN11": "_eg", "smMarginBottomN11": "_eh", "smMarginLeftN11": "_ei", "smPaddingY11": "_ej", "smPaddingX11": "_ek", "smMarginStart12": "_el", "smMarginEnd12": "_em", "smMarginStartN12": "_en", "smMarginEndN12": "_eo", "smMarginTop12": "_ep", "smMarginRight12": "_eq", "smMarginBottom12": "_er", "smMarginLeft12": "_es", "smMarginTopN12": "_et", "smMarginRightN12": "_eu", "smMarginBottomN12": "_ev", "smMarginLeftN12": "_ew", "smPaddingY12": "_ex", "smPaddingX12": "_ey", "mdMarginStart1": "_ez", "mdMarginEnd1": "_f0", "mdMarginStartN1": "_f1", "mdMarginEndN1": "_f2", "mdMarginTop1": "_f3", "mdMarginRight1": "_f4", "mdMarginBottom1": "_f5", "mdMarginLeft1": "_f6", "mdMarginTopN1": "_f7", "mdMarginRightN1": "_f8", "mdMarginBottomN1": "_f9", "mdMarginLeftN1": "_fa", "mdPaddingY1": "_fb", "mdPaddingX1": "_fc", "mdMarginStart2": "_fd", "mdMarginEnd2": "_fe", "mdMarginStartN2": "_ff", "mdMarginEndN2": "_fg", "mdMarginTop2": "_fh", "mdMarginRight2": "_fi", "mdMarginBottom2": "_fj", "mdMarginLeft2": "_fk", "mdMarginTopN2": "_fl", "mdMarginRightN2": "_fm", "mdMarginBottomN2": "_fn", "mdMarginLeftN2": "_fo", "mdPaddingY2": "_fp", "mdPaddingX2": "_fq", "mdMarginStart3": "_fr", "mdMarginEnd3": "_fs", "mdMarginStartN3": "_ft", "mdMarginEndN3": "_fu", "mdMarginTop3": "_fv", "mdMarginRight3": "_fw", "mdMarginBottom3": "_fx", "mdMarginLeft3": "_fy", "mdMarginTopN3": "_fz", "mdMarginRightN3": "_g0", "mdMarginBottomN3": "_g1", "mdMarginLeftN3": "_g2", "mdPaddingY3": "_g3", "mdPaddingX3": "_g4", "mdMarginStart4": "_g5", "mdMarginEnd4": "_g6", "mdMarginStartN4": "_g7", "mdMarginEndN4": "_g8", "mdMarginTop4": "_g9", "mdMarginRight4": "_ga", "mdMarginBottom4": "_gb", "mdMarginLeft4": "_gc", "mdMarginTopN4": "_gd", "mdMarginRightN4": "_ge", "mdMarginBottomN4": "_gf", "mdMarginLeftN4": "_gg", "mdPaddingY4": "_gh", "mdPaddingX4": "_gi", "mdMarginStart5": "_gj", "mdMarginEnd5": "_gk", "mdMarginStartN5": "_gl", "mdMarginEndN5": "_gm", "mdMarginTop5": "_gn", "mdMarginRight5": "_go", "mdMarginBottom5": "_gp", "mdMarginLeft5": "_gq", "mdMarginTopN5": "_gr", "mdMarginRightN5": "_gs", "mdMarginBottomN5": "_gt", "mdMarginLeftN5": "_gu", "mdPaddingY5": "_gv", "mdPaddingX5": "_gw", "mdMarginStart6": "_gx", "mdMarginEnd6": "_gy", "mdMarginStartN6": "_gz", "mdMarginEndN6": "_h0", "mdMarginTop6": "_h1", "mdMarginRight6": "_h2", "mdMarginBottom6": "_h3", "mdMarginLeft6": "_h4", "mdMarginTopN6": "_h5", "mdMarginRightN6": "_h6", "mdMarginBottomN6": "_h7", "mdMarginLeftN6": "_h8", "mdPaddingY6": "_h9", "mdPaddingX6": "_ha", "mdMarginStart7": "_hb", "mdMarginEnd7": "_hc", "mdMarginStartN7": "_hd", "mdMarginEndN7": "_he", "mdMarginTop7": "_hf", "mdMarginRight7": "_hg", "mdMarginBottom7": "_hh", "mdMarginLeft7": "_hi", "mdMarginTopN7": "_hj", "mdMarginRightN7": "_hk", "mdMarginBottomN7": "_hl", "mdMarginLeftN7": "_hm", "mdPaddingY7": "_hn", "mdPaddingX7": "_ho", "mdMarginStart8": "_hp", "mdMarginEnd8": "_hq", "mdMarginStartN8": "_hr", "mdMarginEndN8": "_hs", "mdMarginTop8": "_ht", "mdMarginRight8": "_hu", "mdMarginBottom8": "_hv", "mdMarginLeft8": "_hw", "mdMarginTopN8": "_hx", "mdMarginRightN8": "_hy", "mdMarginBottomN8": "_hz", "mdMarginLeftN8": "_i0", "mdPaddingY8": "_i1", "mdPaddingX8": "_i2", "mdMarginStart9": "_i3", "mdMarginEnd9": "_i4", "mdMarginStartN9": "_i5", "mdMarginEndN9": "_i6", "mdMarginTop9": "_i7", "mdMarginRight9": "_i8", "mdMarginBottom9": "_i9", "mdMarginLeft9": "_ia", "mdMarginTopN9": "_ib", "mdMarginRightN9": "_ic", "mdMarginBottomN9": "_id", "mdMarginLeftN9": "_ie", "mdPaddingY9": "_if", "mdPaddingX9": "_ig", "mdMarginStart10": "_ih", "mdMarginEnd10": "_ii", "mdMarginStartN10": "_ij", "mdMarginEndN10": "_ik", "mdMarginTop10": "_il", "mdMarginRight10": "_im", "mdMarginBottom10": "_in", "mdMarginLeft10": "_io", "mdMarginTopN10": "_ip", "mdMarginRightN10": "_iq", "mdMarginBottomN10": "_ir", "mdMarginLeftN10": "_is", "mdPaddingY10": "_it", "mdPaddingX10": "_iu", "mdMarginStart11": "_iv", "mdMarginEnd11": "_iw", "mdMarginStartN11": "_ix", "mdMarginEndN11": "_iy", "mdMarginTop11": "_iz", "mdMarginRight11": "_j0", "mdMarginBottom11": "_j1", "mdMarginLeft11": "_j2", "mdMarginTopN11": "_j3", "mdMarginRightN11": "_j4", "mdMarginBottomN11": "_j5", "mdMarginLeftN11": "_j6", "mdPaddingY11": "_j7", "mdPaddingX11": "_j8", "mdMarginStart12": "_j9", "mdMarginEnd12": "_ja", "mdMarginStartN12": "_jb", "mdMarginEndN12": "_jc", "mdMarginTop12": "_jd", "mdMarginRight12": "_je", "mdMarginBottom12": "_jf", "mdMarginLeft12": "_jg", "mdMarginTopN12": "_jh", "mdMarginRightN12": "_ji", "mdMarginBottomN12": "_jj", "mdMarginLeftN12": "_jk", "mdPaddingY12": "_jl", "mdPaddingX12": "_jm", "lgMarginStart1": "_jn", "lgMarginEnd1": "_jo", "lgMarginStartN1": "_jp", "lgMarginEndN1": "_jq", "lgMarginTop1": "_jr", "lgMarginRight1": "_js", "lgMarginBottom1": "_jt", "lgMarginLeft1": "_ju", "lgMarginTopN1": "_jv", "lgMarginRightN1": "_jw", "lgMarginBottomN1": "_jx", "lgMarginLeftN1": "_jy", "lgPaddingY1": "_jz", "lgPaddingX1": "_k0", "lgMarginStart2": "_k1", "lgMarginEnd2": "_k2", "lgMarginStartN2": "_k3", "lgMarginEndN2": "_k4", "lgMarginTop2": "_k5", "lgMarginRight2": "_k6", "lgMarginBottom2": "_k7", "lgMarginLeft2": "_k8", "lgMarginTopN2": "_k9", "lgMarginRightN2": "_ka", "lgMarginBottomN2": "_kb", "lgMarginLeftN2": "_kc", "lgPaddingY2": "_kd", "lgPaddingX2": "_ke", "lgMarginStart3": "_kf", "lgMarginEnd3": "_kg", "lgMarginStartN3": "_kh", "lgMarginEndN3": "_ki", "lgMarginTop3": "_kj", "lgMarginRight3": "_kk", "lgMarginBottom3": "_kl", "lgMarginLeft3": "_km", "lgMarginTopN3": "_kn", "lgMarginRightN3": "_ko", "lgMarginBottomN3": "_kp", "lgMarginLeftN3": "_kq", "lgPaddingY3": "_kr", "lgPaddingX3": "_ks", "lgMarginStart4": "_kt", "lgMarginEnd4": "_ku", "lgMarginStartN4": "_kv", "lgMarginEndN4": "_kw", "lgMarginTop4": "_kx", "lgMarginRight4": "_ky", "lgMarginBottom4": "_kz", "lgMarginLeft4": "_l0", "lgMarginTopN4": "_l1", "lgMarginRightN4": "_l2", "lgMarginBottomN4": "_l3", "lgMarginLeftN4": "_l4", "lgPaddingY4": "_l5", "lgPaddingX4": "_l6", "lgMarginStart5": "_l7", "lgMarginEnd5": "_l8", "lgMarginStartN5": "_l9", "lgMarginEndN5": "_la", "lgMarginTop5": "_lb", "lgMarginRight5": "_lc", "lgMarginBottom5": "_ld", "lgMarginLeft5": "_le", "lgMarginTopN5": "_lf", "lgMarginRightN5": "_lg", "lgMarginBottomN5": "_lh", "lgMarginLeftN5": "_li", "lgPaddingY5": "_lj", "lgPaddingX5": "_lk", "lgMarginStart6": "_ll", "lgMarginEnd6": "_lm", "lgMarginStartN6": "_ln", "lgMarginEndN6": "_lo", "lgMarginTop6": "_lp", "lgMarginRight6": "_lq", "lgMarginBottom6": "_lr", "lgMarginLeft6": "_ls", "lgMarginTopN6": "_lt", "lgMarginRightN6": "_lu", "lgMarginBottomN6": "_lv", "lgMarginLeftN6": "_lw", "lgPaddingY6": "_lx", "lgPaddingX6": "_ly", "lgMarginStart7": "_lz", "lgMarginEnd7": "_m0", "lgMarginStartN7": "_m1", "lgMarginEndN7": "_m2", "lgMarginTop7": "_m3", "lgMarginRight7": "_m4", "lgMarginBottom7": "_m5", "lgMarginLeft7": "_m6", "lgMarginTopN7": "_m7", "lgMarginRightN7": "_m8", "lgMarginBottomN7": "_m9", "lgMarginLeftN7": "_ma", "lgPaddingY7": "_mb", "lgPaddingX7": "_mc", "lgMarginStart8": "_md", "lgMarginEnd8": "_me", "lgMarginStartN8": "_mf", "lgMarginEndN8": "_mg", "lgMarginTop8": "_mh", "lgMarginRight8": "_mi", "lgMarginBottom8": "_mj", "lgMarginLeft8": "_mk", "lgMarginTopN8": "_ml", "lgMarginRightN8": "_mm", "lgMarginBottomN8": "_mn", "lgMarginLeftN8": "_mo", "lgPaddingY8": "_mp", "lgPaddingX8": "_mq", "lgMarginStart9": "_mr", "lgMarginEnd9": "_ms", "lgMarginStartN9": "_mt", "lgMarginEndN9": "_mu", "lgMarginTop9": "_mv", "lgMarginRight9": "_mw", "lgMarginBottom9": "_mx", "lgMarginLeft9": "_my", "lgMarginTopN9": "_mz", "lgMarginRightN9": "_n0", "lgMarginBottomN9": "_n1", "lgMarginLeftN9": "_n2", "lgPaddingY9": "_n3", "lgPaddingX9": "_n4", "lgMarginStart10": "_n5", "lgMarginEnd10": "_n6", "lgMarginStartN10": "_n7", "lgMarginEndN10": "_n8", "lgMarginTop10": "_n9", "lgMarginRight10": "_na", "lgMarginBottom10": "_nb", "lgMarginLeft10": "_nc", "lgMarginTopN10": "_nd", "lgMarginRightN10": "_ne", "lgMarginBottomN10": "_nf", "lgMarginLeftN10": "_ng", "lgPaddingY10": "_nh", "lgPaddingX10": "_ni", "lgMarginStart11": "_nj", "lgMarginEnd11": "_nk", "lgMarginStartN11": "_nl", "lgMarginEndN11": "_nm", "lgMarginTop11": "_nn", "lgMarginRight11": "_no", "lgMarginBottom11": "_np", "lgMarginLeft11": "_nq", "lgMarginTopN11": "_nr", "lgMarginRightN11": "_ns", "lgMarginBottomN11": "_nt", "lgMarginLeftN11": "_nu", "lgPaddingY11": "_nv", "lgPaddingX11": "_nw", "lgMarginStart12": "_nx", "lgMarginEnd12": "_ny", "lgMarginStartN12": "_nz", "lgMarginEndN12": "_o0", "lgMarginTop12": "_o1", "lgMarginRight12": "_o2", "lgMarginBottom12": "_o3", "lgMarginLeft12": "_o4", "lgMarginTopN12": "_o5", "lgMarginRightN12": "_o6", "lgMarginBottomN12": "_o7", "lgMarginLeftN12": "_o8", "lgPaddingY12": "_o9", "lgPaddingX12": "_oa" };

  var whitespaceLegacy = { "mlAuto": "_ob", "mrAuto": "_oc", "m0": "_od", "mt0": "_oe", "mr0": "_of", "mb0": "_og", "ml0": "_oh", "p0": "_oi", "px0": "_oj", "py0": "_ok", "m1": "_ol", "mt1": "_om", "mr1": "_on", "mb1": "_oo", "ml1": "_op", "mn1": "_oq", "mtn1": "_or", "mbn1": "_os", "mln1": "_ot", "mrn1": "_ou", "mxn1": "_ov", "myn1": "_ow", "p1": "_ox", "px1": "_oy", "py1": "_oz", "m2": "_p0", "mt2": "_p1", "mr2": "_p2", "mb2": "_p3", "ml2": "_p4", "mn2": "_p5", "mtn2": "_p6", "mbn2": "_p7", "mln2": "_p8", "mrn2": "_p9", "mxn2": "_pa", "myn2": "_pb", "p2": "_pc", "px2": "_pd", "py2": "_pe", "m3": "_pf", "mt3": "_pg", "mr3": "_ph", "mb3": "_pi", "ml3": "_pj", "mn3": "_pk", "mtn3": "_pl", "mbn3": "_pm", "mln3": "_pn", "mrn3": "_po", "mxn3": "_pp", "myn3": "_pq", "p3": "_pr", "px3": "_ps", "py3": "_pt", "m4": "_pu", "mt4": "_pv", "mr4": "_pw", "mb4": "_px", "ml4": "_py", "mn4": "_pz", "mtn4": "_q0", "mbn4": "_q1", "mln4": "_q2", "mrn4": "_q3", "mxn4": "_q4", "myn4": "_q5", "p4": "_q6", "px4": "_q7", "py4": "_q8", "m5": "_q9", "mt5": "_qa", "mr5": "_qb", "mb5": "_qc", "ml5": "_qd", "mn5": "_qe", "mtn5": "_qf", "mbn5": "_qg", "mln5": "_qh", "mrn5": "_qi", "mxn5": "_qj", "myn5": "_qk", "p5": "_ql", "px5": "_qm", "py5": "_qn", "m6": "_qo", "mt6": "_qp", "mr6": "_qq", "mb6": "_qr", "ml6": "_qs", "mn6": "_qt", "mtn6": "_qu", "mbn6": "_qv", "mln6": "_qw", "mrn6": "_qx", "mxn6": "_qy", "myn6": "_qz", "p6": "_r0", "px6": "_r1", "py6": "_r2" };

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var defineProperty = function (obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  };

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var objectWithoutProperties = function (obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  var slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  /*

  Style is a monoid that capture the "to-be-applied" styles (inline and classes)
  for a Box. It's basically set that is closed under an associative binary
  operation and has an identity element such that for all HA HA HA. Yes, it's a
  monoid, which sounds scary but it's not really and actually super useful. All
  that means is that basically you can do two things with it:

      1. concat(concat(a, b), c) === concat(a, concat(b, c));
      2. concat(identity(), a) === concat(a, identity()) === a;

  What that means is that it's really easy to compose styles together and the
  order in which you do so doesn't really matter.

  */

  var identity = function identity() {
    return {
      className: new Set(),
      inlineStyle: {}
    };
  };

  // TODO: This type should be opaque, however the Babel parser doesn't support
  //       the opaque syntax yet.


  var fromClassName = function fromClassName() {
    for (var _len = arguments.length, classNames = Array(_len), _key = 0; _key < _len; _key++) {
      classNames[_key] = arguments[_key];
    }

    return {
      className: new Set(classNames),
      inlineStyle: {}
    };
  };

  var fromInlineStyle = function fromInlineStyle(inlineStyle) {
    return {
      className: new Set(),
      inlineStyle: inlineStyle
    };
  };

  var concat = function concat(styles) {
    return styles.reduce(function (_ref, _ref2) {
      var classNameA = _ref.className,
          inlineStyleA = _ref.inlineStyle;
      var classNameB = _ref2.className,
          inlineStyleB = _ref2.inlineStyle;
      return {
        className: new Set([].concat(toConsumableArray(classNameA), toConsumableArray(classNameB))),
        inlineStyle: _extends({}, inlineStyleA, inlineStyleB)
      };
    }, identity());
  };

  var mapClassName = function mapClassName(fn) {
    return function (_ref3) {
      var className = _ref3.className,
          inlineStyle = _ref3.inlineStyle;
      return {
        className: new Set(Array.from(className).map(fn)),
        inlineStyle: inlineStyle
      };
    };
  };

  var toProps = function toProps(_ref4) {
    var className = _ref4.className,
        inlineStyle = _ref4.inlineStyle;

    var props = {};

    if (className.size > 0) {
      // Sorting here ensures that classNames are always stable, reducing diff
      // churn. Box usually has a small number of properties so it's not a perf
      // concern.
      props.className = Array.from(className).sort().join(' ');
    }

    if (Object.keys(inlineStyle).length > 0) {
      props.style = inlineStyle;
    }

    return props;
  };

  /*

  Transforms

  These are a collection of a few functors that take values and returns Style's. OMG, I used the word functor - it's really just a fancy word for function.

  */

  // Adds a classname when a property is present.
  //
  //     <Box top />
  //
  var toggle = function toggle() {
    for (var _len = arguments.length, classNames = Array(_len), _key = 0; _key < _len; _key++) {
      classNames[_key] = arguments[_key];
    }

    return function (val) {
      return val ? fromClassName.apply(undefined, classNames) : identity();
    };
  };

  // Maps string values to classes
  //
  //     <Box alignItems="center" />
  //
  var mapping = function mapping(map) {
    return function (val) {
      return Object.prototype.hasOwnProperty.call(map, val) ? fromClassName(map[val]) : identity();
    };
  };

  // Maps a range of integers to a range of classnames
  //
  //     <Box padding={1} />
  //
  var range = function range(scale) {
    return function (n) {
      return fromClassName('' + scale + (n < 0 ? 'N' + Math.abs(n) : n));
    };
  };

  // Like `range`, maps a range of integers to a range of classnames, excluding
  // zero values.
  //
  //     <Box padding={0} />
  var rangeWithoutZero = function rangeWithoutZero(scale) {
    return function (n) {
      return n === 0 ? identity() : range(scale)(n);
    };
  };

  // Binds a string classname to the value in an object. Useful when interacting
  // with ranges that need to come dynamically from a style object. This is
  // similar to the NPM package 'classnames/bind'.
  var bind = function bind(fn, scope) {
    return function (val) {
      return mapClassName(function (name) {
        return scope[name];
      })(fn(val));
    };
  };

  // This takes a series of the previously defined functors, runs them all
  // against a value and returns the set of their classnames.
  var union = function union() {
    for (var _len2 = arguments.length, fns = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      fns[_key2] = arguments[_key2];
    }

    return function (val) {
      return concat(fns.map(function (fn) {
        return fn(val);
      }));
    };
  };

  /*

  # ProTypes

  Box's type definition is exhaustive. With the exception of `dangerouslySetInlineStyle`, values shouldn't be ambigious. That means that we have to type out things like boints, but that's also where Box's magic lies. Also, by putting in extra effort around type definitions here, we can skip extra runtime typechecks in the transformers for performance.

  */

  // --

  /*

  # Transformers

  This is where the meat and the bones of Box's transforms are. You can read more about the DSL in `./transforms.js`, but basically they are a small declarative way of specifying how a property (i.e. `marginTop={4}`) gets turned into a CSS class (`marginTop4`).

  There's a little preamble here, but it culminates in a big object mapping the actual property names to the transformer values.

  */

  var marginStart = bind(rangeWithoutZero('marginStart'), whitespace);
  var marginEnd = bind(rangeWithoutZero('marginEnd'), whitespace);
  var marginTop = bind(rangeWithoutZero('marginTop'), whitespace);
  var marginRight = bind(rangeWithoutZero('marginRight'), whitespace);
  var marginBottom = bind(rangeWithoutZero('marginBottom'), whitespace);
  var marginLeft = bind(rangeWithoutZero('marginLeft'), whitespace);
  var margin = union(marginTop, marginBottom, marginLeft, marginRight);

  var smMarginTop = bind(rangeWithoutZero('smMarginTop'), whitespace);
  var smMarginRight = bind(rangeWithoutZero('smMarginRight'), whitespace);
  var smMarginBottom = bind(rangeWithoutZero('smMarginBottom'), whitespace);
  var smMarginLeft = bind(rangeWithoutZero('smMarginLeft'), whitespace);
  var smMargin = union(smMarginTop, smMarginBottom, smMarginLeft, smMarginRight);

  var mdMarginTop = bind(rangeWithoutZero('mdMarginTop'), whitespace);
  var mdMarginRight = bind(rangeWithoutZero('mdMarginRight'), whitespace);
  var mdMarginBottom = bind(rangeWithoutZero('mdMarginBottom'), whitespace);
  var mdMarginLeft = bind(rangeWithoutZero('mdMarginLeft'), whitespace);
  var mdMargin = union(mdMarginTop, mdMarginBottom, mdMarginLeft, mdMarginRight);

  var lgMarginTop = bind(rangeWithoutZero('lgMarginTop'), whitespace);
  var lgMarginRight = bind(rangeWithoutZero('lgMarginRight'), whitespace);
  var lgMarginBottom = bind(rangeWithoutZero('lgMarginBottom'), whitespace);
  var lgMarginLeft = bind(rangeWithoutZero('lgMarginLeft'), whitespace);
  var lgMargin = union(lgMarginTop, lgMarginBottom, lgMarginLeft, lgMarginRight);

  var paddingX = bind(rangeWithoutZero('paddingX'), whitespace);
  var paddingY = bind(rangeWithoutZero('paddingY'), whitespace);
  var padding = union(paddingX, paddingY);

  var smPaddingX = bind(rangeWithoutZero('smPaddingX'), whitespace);
  var smPaddingY = bind(rangeWithoutZero('smPaddingY'), whitespace);
  var smPadding = union(smPaddingX, smPaddingY);

  var mdPaddingX = bind(rangeWithoutZero('mdPaddingX'), whitespace);
  var mdPaddingY = bind(rangeWithoutZero('mdPaddingY'), whitespace);
  var mdPadding = union(mdPaddingX, mdPaddingY);

  var lgPaddingX = bind(rangeWithoutZero('lgPaddingX'), whitespace);
  var lgPaddingY = bind(rangeWithoutZero('lgPaddingY'), whitespace);
  var lgPadding = union(lgPaddingX, lgPaddingY);

  /*

  These functions are legacy. I'd like to get rid of most of this file's dependency on importing `./style.js` directly once these are removed.

  */

  var prefix = function prefix(pre) {
    return mapClassName(function (name) {
      return '' + pre + name;
    });
  };
  var display = function display(value) {
    switch (value) {
      case 'flex':
        return fromClassName('DisplayFlex', 'DirectionRow');
      case 'flexColumn':
        return fromClassName('DisplayFlex', 'DirectionColumn');
      case 'inlineBlock':
        return fromClassName('DisplayInlineBlock');
      case 'visuallyHidden':
        return fromClassName('DisplayVisuallyHidden');
      case false:
        return fromClassName('DisplayNone');
      default:
        /* block */
        return fromClassName('DisplayBlock');
    }
  };
  var column = range('Col');

  var formatIntBoint = function formatIntBoint(x) {
    return x < 0 ? 'n' + Math.abs(x) : x.toString();
  };

  /*

  It's preferable to put new properties into that object directly just so it's easier to read.

  */

  var propToFn = {
    xs: function xs(value) {
      if (!value) {
        return identity();
      }
      return mapClassName(function (c) {
        return styles[c];
      })(prefix('xs')(concat([value.column ? column(value.column) : identity(), typeof value.display !== 'undefined' ? display(value.display) : identity()])));
    },
    sm: function sm(value) {
      if (!value) {
        return identity();
      }
      return mapClassName(function (c) {
        return styles[c];
      })(prefix('sm')(concat([value.column ? column(value.column) : identity(), typeof value.display !== 'undefined' ? display(value.display) : identity()])));
    },
    md: function md(value) {
      if (!value) {
        return identity();
      }
      return mapClassName(function (c) {
        return styles[c];
      })(prefix('md')(concat([value.column ? column(value.column) : identity(), typeof value.display !== 'undefined' ? display(value.display) : identity()])));
    },
    lg: function lg(value) {
      if (!value) {
        return identity();
      }
      return mapClassName(function (c) {
        return styles[c];
      })(prefix('lg')(concat([value.column ? column(value.column) : identity(), typeof value.display !== 'undefined' ? display(value.display) : identity()])));
    },

    display: mapping({
      none: styles.xsDisplayNone,
      flex: styles.xsDisplayFlex,
      block: styles.xsDisplayBlock,
      inlineBlock: styles.xsDisplayInlineBlock,
      visuallyHidden: styles.xsDisplayVisuallyHidden
    }),
    column: bind(range('xsCol'), styles),
    direction: mapping({
      row: styles.xsDirectionRow,
      column: styles.xsDirectionColumn
    }),

    smDisplay: mapping({
      none: styles.smDisplayNone,
      flex: styles.smDisplayFlex,
      block: styles.smDisplayBlock,
      inlineBlock: styles.smDisplayInlineBlock,
      visuallyHidden: styles.smDisplayVisuallyHidden
    }),
    smColumn: bind(range('smCol'), styles),
    smDirection: mapping({
      row: styles.smDirectionRow,
      column: styles.smDirectionColumn
    }),

    mdDisplay: mapping({
      none: styles.mdDisplayNone,
      flex: styles.mdDisplayFlex,
      block: styles.mdDisplayBlock,
      inlineBlock: styles.mdDisplayInlineBlock,
      visuallyHidden: styles.mdDisplayVisuallyHidden
    }),
    mdColumn: bind(range('mdCol'), styles),
    mdDirection: mapping({
      row: styles.mdDirectionRow,
      column: styles.mdDirectionColumn
    }),

    lgDisplay: mapping({
      none: styles.lgDisplayNone,
      flex: styles.lgDisplayFlex,
      block: styles.lgDisplayBlock,
      inlineBlock: styles.lgDisplayInlineBlock,
      visuallyHidden: styles.lgDisplayVisuallyHidden
    }),
    lgColumn: bind(range('lgCol'), styles),
    lgDirection: mapping({
      row: styles.lgDirectionRow,
      column: styles.lgDirectionColumn
    }),

    alignContent: mapping({
      start: layout.contentStart,
      end: layout.contentEnd,
      center: layout.contentCenter,
      between: layout.contentBetween,
      around: layout.contentAround
      // default: stretch
    }),
    alignItems: mapping({
      start: layout.itemsStart,
      end: layout.itemsEnd,
      center: layout.itemsCenter,
      baseline: layout.itemsBaseline
      // default: stretch
    }),
    alignSelf: mapping({
      start: layout.selfStart,
      end: layout.selfEnd,
      center: layout.selfCenter,
      baseline: layout.selfBaseline,
      stretch: layout.selfStretch
      // default: auto
    }),
    bottom: toggle(layout.bottom0),
    color: mapping({
      blue: colors.blueBg,
      darkGray: colors.darkGrayBg,
      pine: colors.pineBg,
      gray: colors.grayBg,
      red: colors.redBg,
      olive: colors.oliveBg,
      lightGray: colors.lightGrayBg,
      white: colors.whiteBg,
      orange: colors.orangeBg,
      green: colors.greenBg,
      navy: colors.navyBg,
      midnight: colors.midnightBg,
      purple: colors.purpleBg,
      orchid: colors.orchidBg,
      eggplant: colors.eggplantBg,
      maroon: colors.maroonBg,
      watermelon: colors.watermelonBg,
      lightWash: colors.lightWashBg,
      darkWash: colors.darkWashBg
      // default: transparent
    }),
    fit: toggle(layout.fit),
    flex: mapping({
      grow: layout.flexGrow,
      none: layout.flexNone
      // default: shrink
    }),
    height: function (_height) {
      function height(_x) {
        return _height.apply(this, arguments);
      }

      height.toString = function () {
        return _height.toString();
      };

      return height;
    }(function (height) {
      return fromInlineStyle({ height: height });
    }),
    justifyContent: mapping({
      end: layout.justifyEnd,
      center: layout.justifyCenter,
      between: layout.justifyBetween,
      around: layout.justifyAround
      // default: start
    }),
    left: toggle(layout.left0),
    deprecatedMargin: function deprecatedMargin(value) {
      var mt = identity();
      var mb = identity();
      var ml = identity();
      var mr = identity();
      switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {
        case 'number':
          return fromClassName(whitespaceLegacy['m' + formatIntBoint(value)]);
        case 'object':
          if (value.top) {
            mt = fromClassName(whitespaceLegacy['mt' + formatIntBoint(value.top)]);
          }

          if (value.bottom) {
            mb = fromClassName(whitespaceLegacy['mb' + formatIntBoint(value.bottom)]);
          }

          if (value.left) {
            ml = fromClassName(value.left === 'auto' ? whitespaceLegacy.mlAuto : whitespaceLegacy['ml' + formatIntBoint(value.left)]);
          }

          if (value.right) {
            mr = fromClassName(value.right === 'auto' ? whitespaceLegacy.mrAuto : whitespaceLegacy['mr' + formatIntBoint(value.right)]);
          }
          return concat([mt, mb, ml, mr]);
        default:
          return identity();
      }
    },
    marginStart: marginStart,
    marginEnd: marginEnd,
    margin: margin,
    marginTop: marginTop,
    marginRight: marginRight,
    marginBottom: marginBottom,
    marginLeft: marginLeft,
    smMargin: smMargin,
    smMarginTop: smMarginTop,
    smMarginRight: smMarginRight,
    smMarginBottom: smMarginBottom,
    smMarginLeft: smMarginLeft,
    mdMargin: mdMargin,
    mdMarginTop: mdMarginTop,
    mdMarginRight: mdMarginRight,
    mdMarginBottom: mdMarginBottom,
    mdMarginLeft: mdMarginLeft,
    lgMargin: lgMargin,
    lgMarginTop: lgMarginTop,
    lgMarginRight: lgMarginRight,
    lgMarginBottom: lgMarginBottom,
    lgMarginLeft: lgMarginLeft,
    maxHeight: function (_maxHeight) {
      function maxHeight(_x2) {
        return _maxHeight.apply(this, arguments);
      }

      maxHeight.toString = function () {
        return _maxHeight.toString();
      };

      return maxHeight;
    }(function (maxHeight) {
      return fromInlineStyle({ maxHeight: maxHeight });
    }),
    maxWidth: function (_maxWidth) {
      function maxWidth(_x3) {
        return _maxWidth.apply(this, arguments);
      }

      maxWidth.toString = function () {
        return _maxWidth.toString();
      };

      return maxWidth;
    }(function (maxWidth) {
      return fromInlineStyle({ maxWidth: maxWidth });
    }),
    minHeight: function (_minHeight) {
      function minHeight(_x4) {
        return _minHeight.apply(this, arguments);
      }

      minHeight.toString = function () {
        return _minHeight.toString();
      };

      return minHeight;
    }(function (minHeight) {
      return fromInlineStyle({ minHeight: minHeight });
    }),
    minWidth: function (_minWidth) {
      function minWidth(_x5) {
        return _minWidth.apply(this, arguments);
      }

      minWidth.toString = function () {
        return _minWidth.toString();
      };

      return minWidth;
    }(function (minWidth) {
      return fromInlineStyle({ minWidth: minWidth });
    }),
    overflow: mapping({
      hidden: layout.overflowHidden,
      scroll: layout.overflowScroll,
      auto: layout.overflowAuto,
      scrollX: layout.overflowScrollX,
      scrollY: layout.overflowScrollY
      // default: visible
    }),
    deprecatedPadding: function deprecatedPadding(value) {
      switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {
        case 'number':
          return fromClassName(whitespaceLegacy['p' + value]);
        case 'object':
          return concat([value.x ? fromClassName(whitespaceLegacy['px' + value.x]) : identity(), value.y ? fromClassName(whitespaceLegacy['py' + value.y]) : identity()]);
        default:
          return identity();
      }
    },
    padding: padding,
    paddingX: paddingX,
    paddingY: paddingY,
    smPadding: smPadding,
    smPaddingX: smPaddingX,
    smPaddingY: smPaddingY,
    mdPadding: mdPadding,
    mdPaddingX: mdPaddingX,
    mdPaddingY: mdPaddingY,
    lgPadding: lgPadding,
    lgPaddingX: lgPaddingX,
    lgPaddingY: lgPaddingY,
    position: mapping({
      absolute: layout.absolute,
      relative: layout.relative,
      fixed: layout.fixed
      // default: static
    }),
    right: toggle(layout.right0),
    shape: mapping({
      circle: borders.circle,
      pill: borders.pill,
      rounded: borders.rounded,
      roundedBottom: borders.roundedBottom,
      roundedLeft: borders.roundedLeft,
      roundedRight: borders.roundedRight,
      roundedTop: borders.roundedTop
      // default: square
    }),
    top: toggle(layout.top0),
    width: function (_width) {
      function width(_x6) {
        return _width.apply(this, arguments);
      }

      width.toString = function () {
        return _width.toString();
      };

      return width;
    }(function (width) {
      return fromInlineStyle({ width: width });
    }),
    wrap: toggle(layout.flexWrap),
    dangerouslySetInlineStyle: function dangerouslySetInlineStyle(value) {
      return (
        /* eslint-disable-next-line no-underscore-dangle */
        value && value.__style ? fromInlineStyle(value.__style) : identity()
      );
    }
  };

  /*

  # The Component

  */

  var contains = function contains(key, arr) {
    return arr.indexOf(key) >= 0;
  };
  var omit = function omit(keys, obj) {
    return Object.keys(obj).reduce(function (acc, k) {
      if (contains(k, keys)) {
        return acc;
      }
      return _extends({}, acc, defineProperty({}, k, obj[k]));
    }, {});
  };

  function Box(_ref) {
    var children = _ref.children,
        props = objectWithoutProperties(_ref, ['children']);

    // Flow can't reason about the constant nature of Object.keys so we can't use
    // a functional (reduce) style here.

    // Box is a "pass-through" component, meaning that if you pass properties to
    // it that it doesn't know about (`aria-label` for instance) it passes
    // directly back to the underlying `<div/>`. That's generally useful, but
    // we'd also like to strip out a few naughty properties that break style
    // encapsulation (className, style) or accessibility (onClick).
    var blacklist = ['onClick', 'className', 'style'];

    // All Box's are box-sized by default, so we start off building up the styles
    // to be applied with a Box base class.
    var s = fromClassName(styles.box);

    // This loops through each property and if it exists in the previously
    // defined transform map, concatentes the resulting styles to the base
    // styles. If there's a match, we also don't pass through that property. This
    // means Box's runtime is only dependent on the number of properties passed
    // to it (which is typically small) instead of the total number of possible
    // properties (~30 or so). While it may ~feel~ like Box is innefficient, its
    // biggest performance impact is on startup time because there's so much code
    // here.

    // eslint-disable-next-line no-restricted-syntax
    for (var prop in props) {
      if (Object.prototype.hasOwnProperty.call(propToFn, prop)) {
        var fn = propToFn[prop];
        var value = props[prop];
        blacklist = blacklist.concat(prop);
        s = concat([s, fn(value)]);
      }
    }

    // And... magic!
    return React.createElement(
      'div',
      _extends({}, omit(blacklist, props), toProps(s)),
      children
    );
  }

  /*

  # PropTypes

  And we're done here :)

  */

  var ColumnPropType = PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

  var MarginPropType = PropTypes.oneOf([-12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

  var PaddingPropType = PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

  Box.propTypes = {
    children: PropTypes.node,
    dangerouslySetInlineStyle: PropTypes.exact({
      __style: PropTypes.object
    }),

    xs: PropTypes.exact({
      display: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['flex', 'flexColumn', 'inlineBlock'])]),
      column: PropTypes.number
    }),
    sm: PropTypes.exact({
      display: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['flex', 'flexColumn', 'inlineBlock'])]),
      column: PropTypes.number
    }),
    md: PropTypes.exact({
      display: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['flex', 'flexColumn', 'inlineBlock'])]),
      column: PropTypes.number
    }),
    lg: PropTypes.exact({
      display: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['flex', 'flexColumn', 'inlineBlock'])]),
      column: PropTypes.number
    }),
    deprecatedMargin: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
      top: PropTypes.number,
      bottom: PropTypes.number,
      left: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['auto'])]),
      right: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['auto'])])
    })]),
    deprecatedPadding: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number
    })]),

    display: PropTypes.oneOf(['none', 'flex', 'block', 'inlineBlock', 'visuallyHidden']),
    direction: PropTypes.oneOf(['row', 'column']),
    column: ColumnPropType,

    smDisplay: PropTypes.oneOf(['none', 'flex', 'block', 'inlineBlock', 'visuallyHidden']),
    smDirection: PropTypes.oneOf(['row', 'column']),
    smColumn: ColumnPropType,

    mdDisplay: PropTypes.oneOf(['none', 'flex', 'block', 'inlineBlock', 'visuallyHidden']),
    mdDirection: PropTypes.oneOf(['row', 'column']),
    mdColumn: ColumnPropType,

    lgDisplay: PropTypes.oneOf(['none', 'flex', 'block', 'inlineBlock', 'visuallyHidden']),
    lgDirection: PropTypes.oneOf(['row', 'column']),
    lgColumn: ColumnPropType,

    alignContent: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around', 'stretch']),
    alignItems: PropTypes.oneOf(['start', 'end', 'center', 'baseline', 'stretch']),
    alignSelf: PropTypes.oneOf(['auto', 'start', 'end', 'center', 'baseline', 'stretch']),
    bottom: PropTypes.bool,
    color: PropTypes.oneOf(['blue', 'darkGray', 'darkWash', 'eggplant', 'gray', 'green', 'lightGray', 'lightWash', 'maroon', 'midnight', 'navy', 'olive', 'orange', 'orchid', 'pine', 'purple', 'red', 'transparent', 'watermelon', 'white']),
    fit: PropTypes.bool,
    flex: PropTypes.oneOf(['grow', 'shrink', 'none']),
    grow: PropTypes.bool,
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    justifyContent: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around']),
    left: PropTypes.bool,

    marginStart: MarginPropType,
    marginEnd: MarginPropType,

    margin: MarginPropType,
    marginTop: MarginPropType,
    marginRight: MarginPropType,
    marginBottom: MarginPropType,
    marginLeft: MarginPropType,

    smMargin: MarginPropType,
    smMarginTop: MarginPropType,
    smMarginRight: MarginPropType,
    smMarginBottom: MarginPropType,
    smMarginLeft: MarginPropType,

    mdMargin: MarginPropType,
    mdMarginTop: MarginPropType,
    mdMarginRight: MarginPropType,
    mdMarginBottom: MarginPropType,
    mdMarginLeft: MarginPropType,

    lgMargin: MarginPropType,
    lgMarginTop: MarginPropType,
    lgMarginRight: MarginPropType,
    lgMarginBottom: MarginPropType,
    lgMarginLeft: MarginPropType,

    maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    minHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    overflow: PropTypes.oneOf(['visible', 'hidden', 'scroll', 'scrollX', 'scrollY', 'auto']),

    padding: PaddingPropType,
    paddingX: PaddingPropType,
    paddingY: PaddingPropType,

    smPadding: PaddingPropType,
    smPaddingX: PaddingPropType,
    smPaddingY: PaddingPropType,

    mdPadding: PaddingPropType,
    mdPaddingX: PaddingPropType,
    mdPaddingY: PaddingPropType,

    lgPadding: PaddingPropType,
    lgPaddingX: PaddingPropType,
    lgPaddingY: PaddingPropType,

    position: PropTypes.oneOf(['static', 'absolute', 'relative', 'fixed']),
    right: PropTypes.bool,
    shape: PropTypes.oneOf(['square', 'rounded', 'pill', 'circle', 'roundedTop', 'roundedBottom', 'roundedLeft', 'roundedRight']),
    top: PropTypes.bool,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    wrap: PropTypes.bool
  };

  var styles$1 = { "icon": "_tf", "iconBlock": "_tg _45" };

  var add = 'M22 10h-8V2a2 2 0 0 0-4 0v8H2a2 2 0 0 0 0 4h8v8a2 2 0 0 0 4 0v-8h8a2 2 0 0 0 0-4';

  var addCircle = 'M17.75 13.25h-4.5v4.5a1.25 1.25 0 0 1-2.5 0v-4.5h-4.5a1.25 1.25 0 0 1 0-2.5h4.5v-4.5a1.25 1.25 0 0 1 2.5 0v4.5h4.5a1.25 1.25 0 0 1 0 2.5M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0';

  var addPin = 'M21.5 8.69c1.49.87 2.5 2.46 2.5 4.31h-4v7.96L19 23l-1-2.04V13h-4c0-1.85 1.01-3.44 2.5-4.31V2.93c-.86-.22-1.5-1-1.5-1.93h8c0 .93-.64 1.71-1.5 1.93v5.76zm-11.25.81a1.25 1.25 0 0 1 0 2.5H7v3.25a1.25 1.25 0 0 1-2.5 0V12H1.25a1.25 1.25 0 0 1 0-2.5H4.5V6.25a1.25 1.25 0 0 1 2.5 0V9.5h3.25z';

  var angledPin = 'M13.988,19.153 C15.485,17.656 15.985,15.446 15.481,13.537 L19.740,9.074 L22.662,8.807 L22.645,8.789 C22.739,8.804 22.837,8.780 22.909,8.708 C23.030,8.587 23.031,8.391 22.910,8.271 L15.730,1.090 C15.609,0.970 15.413,0.970 15.292,1.091 C15.220,1.163 15.197,1.262 15.211,1.356 L15.194,1.338 L14.927,4.261 L10.463,8.520 C8.554,8.015 6.344,8.516 4.847,10.012 L8.656,13.821 L3.324,19.153 C2.562,19.915 0.711,22.108 1.039,22.962 C1.892,23.290 4.086,21.438 4.847,20.676 C5.609,19.915 10.179,15.344 10.179,15.344 L13.988,19.153 Z';

  var arrowBack = 'M17.28 24c-.57 0-1.14-.22-1.58-.66L4.5 12 15.7.66a2.21 2.21 0 0 1 3.15 0c.87.88.87 2.3 0 3.18L10.79 12l8.06 8.16c.87.88.87 2.3 0 3.18-.44.44-1 .66-1.57.66';

  var arrowCircleForward = 'M12.94 16.07c-.49.48-1.28.48-1.77 0a1.25 1.25 0 0 1 0-1.77l1.06-1.07H8.25a1.25 1.25 0 0 1 0-2.5h3.95L11.17 9.7a1.25 1.25 0 0 1 0-1.77c.49-.48 1.28-.48 1.77 0L17 12l-4.06 4.07zM12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0z';

  var arrowCircleDown = 'M0 12c0 6.63 5.37 12 12 12s12-5.37 12-12S18.63 0 12 0 0 5.37 0 12zm10.77-3.75a1.25 1.25 0 0 1 2.5 0v3.95l1.03-1.03a1.25 1.25 0 0 1 1.77 0c.48.49.48 1.28 0 1.77L12 17l-4.07-4.06c-.48-.49-.48-1.28 0-1.77a1.25 1.25 0 0 1 1.77 0l1.07 1.06V8.25z';

  var arrowDown = 'M12 19.5L.66 8.29c-.88-.86-.88-2.27 0-3.14.88-.87 2.3-.87 3.18 0L12 13.21l8.16-8.06c.88-.87 2.3-.87 3.18 0 .88.87.88 2.28 0 3.14L12 19.5z';

  var arrowForward = 'M6.72 24c.57 0 1.14-.22 1.57-.66L19.5 12 8.29.66c-.86-.88-2.27-.88-3.14 0-.87.88-.87 2.3 0 3.18L13.21 12l-8.06 8.16c-.87.88-.87 2.3 0 3.18.43.44 1 .66 1.57.66';

  var arrowUp = 'M21.75 19.5c-.58 0-1.15-.22-1.59-.65L12 10.79l-8.16 8.06c-.88.87-2.3.87-3.18 0a2.21 2.21 0 0 1 0-3.15L12 4.5l11.34 11.2c.88.87.88 2.28 0 3.15-.44.43-1.01.65-1.59.65';

  var arrowUpRight = 'M4.9283,1 C3.6273,1 2.5713,2.054 2.5713,3.357 C2.5713,4.66 3.6273,5.714 4.9283,5.714 L14.9523,5.714 L1.6893,18.976 C0.7703,19.896 0.7703,21.389 1.6893,22.31 C2.1503,22.771 2.7533,23 3.3573,23 C3.9603,23 4.5633,22.771 5.0243,22.31 L18.2853,9.047 L18.2853,19.071 C18.2853,20.374 19.3413,21.429 20.6433,21.429 C21.9443,21.429 23.0003,20.374 23.0003,19.071 L23.0003,1 L4.9283,1 Z';

  var bell = 'M12 24c-1.66 0-3-1.34-3-3h6c0 1.66-1.34 3-3 3zm7-10.83c1.58 1.52 2.67 3.55 3 5.83H2c.33-2.28 1.42-4.31 3-5.83V7c0-3.87 3.13-7 7-7s7 3.13 7 7v6.17z';

  var camera = 'M6.36 4.99L8.56 2h6.88l2.2 2.99h3.09c1.8 0 3.27 1.49 3.27 3.33v10.35c0 1.84-1.47 3.33-3.27 3.33H3.27C1.47 22 0 20.51 0 18.67V8.32c0-1.84 1.47-3.33 3.27-3.33h3.09zM12 7.22a5.74 5.74 0 1 0 0 11.48 5.74 5.74 0 0 0 0-11.48m0 2.73c1.66 0 3.01 1.35 3.01 3.01 0 1.66-1.35 3.01-3.01 3.01-1.66 0-3.01-1.35-3.01-3.01 0-1.66 1.35-3.01 3.01-3.01';

  var cameraRoll = 'M8 10c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2M6.25 3.5h11.5c1.52 0 2.75 1.23 2.75 2.75v8.25L17 11l-6 6-3.5-3.5-4 4V6.25c0-1.52 1.23-2.75 2.75-2.75M17.75 1H6.25A5.25 5.25 0 0 0 1 6.25v11.5C1 20.64 3.35 23 6.25 23h11.5c2.89 0 5.25-2.36 5.25-5.25V6.25C23 3.35 20.64 1 17.75 1';

  var cancel = 'M15.18 12l7.16-7.16c.88-.88.88-2.3 0-3.18-.88-.88-2.3-.88-3.18 0L12 8.82 4.84 1.66c-.88-.88-2.3-.88-3.18 0-.88.88-.88 2.3 0 3.18L8.82 12l-7.16 7.16c-.88.88-.88 2.3 0 3.18.44.44 1.01.66 1.59.66.58 0 1.15-.22 1.59-.66L12 15.18l7.16 7.16c.44.44 1.01.66 1.59.66.58 0 1.15-.22 1.59-.66.88-.88.88-2.3 0-3.18L15.18 12z';

  var check = 'M9.17 21.75L.73 12.79c-.97-1.04-.97-2.71 0-3.75a2.403 2.403 0 0 1 3.53 0l4.91 5.22L19.74 3.03c.98-1.04 2.55-1.04 3.53 0 .97 1.03.97 2.71 0 3.74L9.17 21.75z';

  var checkCircle = 'M18.88 9.88l-8.66 8.67-5.12-5.13a1.25 1.25 0 0 1 0-1.77c.48-.49 1.28-.49 1.76 0l3.36 3.36 6.9-6.89c.49-.49 1.28-.49 1.76 0 .49.49.49 1.28 0 1.76M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0';

  var circleOutline = 'M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22.2C6.45 22.2 1.8 17.7 1.8 12 1.8 6.3 6.3 1.8 12 1.8c5.7 0 10.2 4.5 10.2 10.2 0 5.7-4.65 10.2-10.2 10.2z';

  var clear = 'M15.18 16.95L12 13.77l-3.18 3.18c-.49.49-1.28.49-1.77 0a1.25 1.25 0 0 1 0-1.77L10.23 12 7.05 8.82a1.25 1.25 0 0 1 0-1.77 1.25 1.25 0 0 1 1.77 0L12 10.23l3.18-3.18a1.25 1.25 0 0 1 1.77 0c.49.49.49 1.28 0 1.77L13.77 12l3.18 3.18c.49.49.49 1.28 0 1.77s-1.28.49-1.77 0M24 12c0-6.63-5.37-12-12-12S0 5.37 0 12s5.37 12 12 12 12-5.37 12-12';

  var clock = 'M17.83 17.83c-.37.36-.85.55-1.33.55-.48 0-.96-.19-1.33-.55l-5.04-5.05V6c0-1.04.83-1.87 1.87-1.87s1.88.83 1.88 1.87v5.22l3.95 3.95c.73.74.73 1.92 0 2.66M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0';

  var cog = 'M6.25 2L.5 12l5.75 10h11.5l5.75-10-5.75-10H6.25zm1.703 10a4 4 0 1 1 8 0 4 4 0 0 1-8 0z';

  var compass = 'M12.868 12.9A1.25 1.25 0 1 0 11.1 11.13a1.25 1.25 0 0 0 1.77 1.768m2.268 1.134c-.207.517-.62.924-1.139 1.124L5.62 18.38l3.223-8.377c.2-.52.607-.933 1.124-1.139l8.617-3.447-3.447 8.617zm5.348-10.519c-4.686-4.686-12.284-4.686-16.97 0-4.687 4.687-4.687 12.285 0 16.971 4.686 4.686 12.284 4.686 16.97 0 4.686-4.686 4.686-12.284 0-16.97z';

  var compose = 'M2.337 19.942l5.671-1.977L19.265 6.706c.981-.98.981-2.57 0-3.55l-1.42-1.421a2.51 2.51 0 0 0-3.55 0L3.036 12.992l-1.978 5.671a1.005 1.005 0 0 0 1.279 1.279M23 22c0 .55-.45 1-1 1H2c-.55 0-1-.45-1-1s.45-1 1-1h20c.55 0 1 .45 1 1';

  var dash = 'M20 16H4c-2.2 0-4-1.8-4-4s1.8-4 4-4h16c2.2 0 4 1.8 4 4s-1.8 4-4 4';

  var download = 'M21 14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-6a2 2 0 0 1 4 0v4h14v-4a2 2 0 0 1 2-2zM8.815 6.987l1.176 1.178V2a2 2 0 0 1 4 0v6.178l1.196-1.193a2 2 0 1 1 2.826 2.831l-6.025 6.013-6.004-6.016a2 2 0 0 1 2.831-2.826z';

  var edit = 'M13.386 6.018l4.596 4.596L7.097 21.499 1 22.999l1.501-6.096L13.386 6.018zm8.662-4.066a3.248 3.248 0 0 1 0 4.596L19.75 8.848 15.154 4.25l2.298-2.299a3.248 3.248 0 0 1 4.596 0z';

  var ellipsis = 'M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3M3 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm18 0c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z';

  var ellipsisCircleOutline = 'M12 10.5c.9 0 1.5.6 1.5 1.5s-.6 1.5-1.5 1.5-1.5-.6-1.5-1.5.6-1.5 1.5-1.5zm-4.5 0c.9 0 1.5.6 1.5 1.5s-.6 1.5-1.5 1.5S6 12.9 6 12s.6-1.5 1.5-1.5zm9 0c.9 0 1.5.6 1.5 1.5s-.6 1.5-1.5 1.5S15 12.9 15 12s.6-1.5 1.5-1.5zM12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22.2C6.45 22.2 1.8 17.7 1.8 12 1.8 6.3 6.3 1.8 12 1.8c5.7 0 10.2 4.5 10.2 10.2 0 5.7-4.65 10.2-10.2 10.2z';

  var envelope = 'M21.53 7.508l-7.586 7.452c-.536.526-1.24.79-1.944.79a2.77 2.77 0 0 1-1.945-.79L2.47 7.508a.728.728 0 0 1 0-1.043.76.76 0 0 1 1.061 0l7.586 7.452c.487.48 1.28.48 1.768 0l7.585-7.452a.76.76 0 0 1 1.061 0 .728.728 0 0 1 0 1.043zM1 19h22V5H1v14z';

  var eye = 'M10,12 C10,13.105 10.895,14 12,14 C13.105,14 14,13.105 14,12 C14,10.895 13.105,10 12,10 C10.895,10 10,10.895 10,12 Z M12,17 C9.239,17 7,14.761 7,12 C7,9.239 9.239,7 12,7 C14.761,7 17,9.239 17,12 C17,14.761 14.761,17 12,17 M12,3.5 C6.455,3.5 1.751,7.051 0,12 C1.751,16.949 6.455,20.5 12,20.5 C17.545,20.5 22.249,16.949 24,12 C22.249,7.051 17.545,3.5 12,3.5';

  var facebook = 'M17.75 3.984l-2.312.001c-1.811 0-2.163.842-2.163 2.077v2.724h4.323l-.563 4.267h-3.76V24H8.769V13.053H5V8.786h3.769V5.64C8.769 1.988 11.05 0 14.383 0c1.596 0 2.967.116 3.367.168v3.816z';

  var faceHappy = 'M12.023 20.713c-2.944 0-5.378-1.96-5.356-4.906.017-2.117 1.728-.536 5.33-.545 3.6-.01 5.322-1.645 5.327.548.007 2.946-2.356 4.903-5.3 4.903m4.439-9.83a1.675 1.675 0 1 1 0-3.351 1.675 1.675 0 0 1 0 3.35M6.093 9.207a1.675 1.675 0 1 1 3.35 0 1.675 1.675 0 0 1-3.35 0m17.906 2.782C23.994 5.367 18.623 0 12 0 5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12C18.624 24 23.995 18.633 24 12.01L24 12l-.001-.01';

  var faceSad = 'M17.088 17.841a1.2 1.2 0 0 1-1.593.58 4.517 4.517 0 0 0-.744-.217c-.738-.168-1.653-.27-2.75-.271-1.098 0-2.012.103-2.752.27-.411.094-.657.18-.741.217a1.199 1.199 0 1 1-1.014-2.174c.237-.11.643-.251 1.223-.383.915-.207 2.008-.33 3.284-.33 1.276.001 2.369.123 3.281.33.582.132.988.273 1.226.384.601.279.86.992.58 1.594zm-.624-6.959a1.675 1.675 0 1 1 0-3.35 1.675 1.675 0 0 1 0 3.35zM6.093 9.207a1.675 1.675 0 1 1 3.35 0 1.675 1.675 0 0 1-3.35 0zM24 11.989C23.995 5.367 18.624 0 12.002 0 5.373 0 0 5.373 0 12c0 6.628 5.373 12 12.002 12C18.623 24 23.995 18.633 24 12.01v-.02z';

  var faceSmiley = 'M16.5 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m.449 5.95A6.947 6.947 0 0 1 12 19a6.96 6.96 0 0 1-4.948-2.048.999.999 0 0 1 0-1.414.999.999 0 0 1 1.414-.001A4.968 4.968 0 0 0 12 17c1.336 0 2.592-.52 3.535-1.464a1 1 0 0 1 1.414 1.414M6 9.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0';

  var filter = 'M24 3.5c0-1.1-.9-2-2-2H2c-1.1 0-2 .9-2 2 0 .55.22 1.05.58 1.41L9 13.46v9.04l6-2v-7.05l8.37-8.5c.39-.36.63-.88.63-1.45';

  var flag = 'M17 7.5L22 0H2v22c0 1.1.9 2 2 2s2-.9 2-2v-7h16l-5-7.5z';

  var flashlight = 'M6 7.08V10H1V7.08A6.086 6.086 0 0 1 7.079 1H10v5H6v1.08zM6 18h4v5H7.079A6.086 6.086 0 0 1 1 16.921V14h5v4zM16.92 1A6.086 6.086 0 0 1 23 7.079V10h-5V6h-4V1h2.92zM18 16.92V14h5v2.92A6.086 6.086 0 0 1 16.921 23H14v-5h4v-1.08z';

  var gif = 'M19.5 3h-15C2.02 3 0 5.03 0 7.5v9C0 18.98 2.02 21 4.5 21h15c2.47 0 4.5-2.02 4.5-4.5v-9C24 5.03 21.97 3 19.5 3zm-7.41 12.88v-7.8h1.59v7.8h-1.59zm3.45-7.8h5.58v1.34h-4v1.88h3.39v1.35h-3.39v3.23h-1.58v-7.8zm-11.4 6.83c-.33-.37-.58-.79-.76-1.28-.17-.49-.26-1.03-.26-1.62 0-.66.11-1.26.33-1.8.22-.55.53-1.01.95-1.39.32-.29.68-.51 1.1-.66.41-.15.88-.23 1.4-.23.49 0 .93.06 1.32.19s.72.31 1 .54c.27.23.5.51.67.83.17.32.29.67.35 1.04H8.69a1.67 1.67 0 0 0-.56-.93c-.29-.24-.69-.36-1.19-.36-.37 0-.7.07-.97.21-.27.14-.5.34-.69.59-.18.25-.32.54-.41.88-.09.34-.13.7-.13 1.09 0 .4.05.77.15 1.1.1.34.25.63.43.88.19.24.42.43.69.57.27.14.57.21.9.21.31 0 .59-.05.83-.16.25-.1.46-.23.64-.4.17-.17.31-.36.4-.57.1-.21.14-.42.14-.64v-.04H7.05v-1.22h3.28v4.14H9.14l-.05-1.05h-.03c-.27.45-.58.77-.94.94a2.8 2.8 0 0 1-1.25.27c-.59 0-1.11-.1-1.56-.3-.46-.2-.85-.48-1.17-.83z';

  var globe = 'M15.49 20.83c.87-2.01 1.37-4.75 1.48-7.58h4.44a9.53 9.53 0 0 1-5.92 7.58zm-12.9-7.58h4.44c.11 2.83.61 5.57 1.49 7.58-3.15-1.25-5.47-4.12-5.93-7.58zM8.52 3.17c-.88 2.01-1.38 4.75-1.49 7.58H2.59c.46-3.46 2.78-6.33 5.93-7.58zm1.01 7.58C9.76 5.43 11.4 2.54 12 2.5h.01c.67.06 2.24 3.01 2.46 8.25H9.53zm2.48 10.75H12c-.6-.04-2.24-2.93-2.47-8.25h4.94c-.22 5.24-1.79 8.19-2.46 8.25zm9.4-10.75h-4.44c-.11-2.83-.61-5.57-1.48-7.58a9.53 9.53 0 0 1 5.92 7.58zM24 12C24 5.39 18.62.01 12.01 0H12C5.38 0 0 5.38 0 12s5.38 12 12 12h.01C18.62 24 24 18.61 24 12z';

  var globeChecked = 'M6.8 9.8H3.1C3.5 7 5.4 4.6 8 3.6c-.7 1.7-1.1 3.9-1.2 6.2m-3.7 2.1h3.7c.1 2.3.5 4.6 1.2 6.2-2.6-1-4.5-3.3-4.9-6.2m7.8-8.8c.5 0 1.8 2.4 2 6.7H8.8c.2-4.3 1.6-6.7 2.1-6.7M9.5 16.3c-.3-1.1-.6-2.6-.7-4.4h2.7c.9-1 2.1-1.7 3.5-2.1-.1-2.3-.5-4.5-1.3-6.2 2.6 1 4.4 3.3 4.9 6.1.7.1 1.5.4 2.1.8-.2-5.3-4.5-9.5-9.8-9.5C5.4 1 1 5.4 1 10.9c0 5.3 4.2 9.6 9.5 9.8-.6-1.1-1-2.3-1-3.7v-.7m10.8-.5L16.2 20l-2.5-2.5c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1 0l1.5 1.5 3.1-3.2c.2-.3.7-.3 1 0 .3.3.3.8 0 1.1M17 11c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6';

  var gmail = 'M3.173 4L12 10.194 20.556 4H3.173zM12 13.29L1 5.806V20h22V5.548L12 13.29z';

  var googlePlus = 'M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83C10.47 5.69 8.89 5 7 5c-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16H7zm17 0v2h-3v3h-2v-3h-3v-2h3V8h2v3h3z';

  var graphBar = 'M1 23V10h5v13H1zm8.5 0V1h5v22h-5zm8.5 0V7h4.999v16H18z';

  var knoop = 'M15 10.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m0 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m-6-6c-.83 0-1.5-.67-1.5-1.5S8.17 7.5 9 7.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5m0 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0';

  var lightbulb = 'M20 8c0 2.23-.91 4.24-2.39 5.7h.02c-.99.97-1.6 2.31-1.63 3.8V19H8v-1.5c-.03-1.5-.65-2.85-1.64-3.83A7.955 7.955 0 0 1 4 8c0-4.42 3.58-8 8-8s8 3.58 8 8zM8 22.5V21h8v1.5c0 .83-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z';

  var handle = 'M3 15h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0-4h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0-4h18a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2z';

  var handPointing = 'M17.776,22.390 C13.775,23.978 9.246,22.359 7.219,18.770 C7.040,18.503 6.860,18.218 6.688,17.910 C5.132,15.163 3.028,13.782 2.588,13.581 C2.149,13.378 0.595,12.613 1.100,11.692 C1.381,11.180 2.163,10.801 2.878,10.726 C4.000,10.481 5.897,11.034 7.772,12.222 L4.054,3.419 C3.741,2.677 3.989,1.850 4.609,1.379 C4.612,1.376 4.616,1.373 4.621,1.369 C4.676,1.327 4.734,1.289 4.796,1.253 C4.810,1.247 4.821,1.239 4.835,1.231 C4.901,1.195 4.970,1.160 5.042,1.132 C5.044,1.131 5.044,1.131 5.045,1.131 C5.045,1.131 5.045,1.131 5.047,1.129 C5.119,1.101 5.193,1.079 5.267,1.060 C5.281,1.057 5.295,1.054 5.309,1.049 C5.380,1.035 5.449,1.021 5.518,1.013 C5.525,1.013 5.529,1.011 5.534,1.011 C6.317,0.928 7.093,1.347 7.406,2.088 L9.592,7.261 C9.643,6.623 10.055,6.035 10.709,5.776 C11.633,5.410 12.689,5.839 13.069,6.734 C13.071,6.742 13.074,6.752 13.077,6.759 C13.143,6.136 13.552,5.565 14.191,5.312 C15.117,4.946 16.173,5.373 16.551,6.271 C16.567,6.305 16.578,6.341 16.591,6.379 C16.680,5.784 17.079,5.249 17.695,5.006 C18.619,4.640 19.619,4.970 19.999,5.867 L20.001,5.872 C20.001,5.872 21.115,8.039 22.366,11.651 C22.413,11.791 22.457,11.931 22.495,12.072 C24.027,16.161 21.967,20.728 17.776,22.390';

  var heart = 'M11.98 22.25L1.82 11.95C-.28 9.83-.65 6.4 1.18 4.03a5.763 5.763 0 0 1 8.7-.56l2.1 2.14 1.95-1.98c2.1-2.13 5.48-2.5 7.82-.65 2.8 2.23 2.99 6.35.55 8.82L11.98 22.25z';

  var heartBroken = 'M11.98 22.25L1.82 11.95C-.28 9.83-.65 6.4 1.18 4.03a5.763 5.763 0 0 1 8.7-.56l2.1 2.14 1.95-1.98c2.1-2.13 5.48-2.5 7.82-.65 2.8 2.23 2.99 6.35.55 8.82L11.98 22.25zM15.3 9.54c.4-.4.4-1.06 0-1.46-.4-.4-1.05-.4-1.45 0L12 9.94l-1.85-1.86c-.4-.4-1.05-.4-1.45 0-.4.4-.4 1.06 0 1.46l1.85 1.86-1.85 1.86c-.4.4-.4 1.05 0 1.45.4.4 1.05.41 1.45 0L12 12.85l1.85 1.86c.4.41 1.05.41 1.45 0 .4-.4.4-1.05 0-1.45l-1.85-1.86 1.85-1.86z';

  var link = 'M21 15.05c1.1 0 2 .9 2 2V21c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h4a2 2 0 1 1 0 4H5v14h14v-1.95c0-1.1.9-2 2-2zM12 14c-.51 0-1.02-.2-1.41-.59-.79-.78-.79-2.04 0-2.82L16.16 5 14 5.01c-1.1 0-2-.9-2-2 0-1.11.89-2 2-2L20.99 1h2v2l.01 7a2 2 0 1 1-4 0V7.83l-5.59 5.58c-.39.39-.9.59-1.41.59z';

  var location = 'M12 4.5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m7.5 3C19.5 3.36 16.14 0 12 0 7.86 0 4.5 3.36 4.5 7.5c0 1.3.36 2.5.94 3.56H5.4L12 24l6.6-12.94h-.04c.58-1.06.94-2.26.94-3.56';

  var lock = 'M8 10V7c0-2.206 1.794-4 4-4s4 1.794 4 4v3H8zm11 .017V7c0-3.86-3.141-7-7-7S5 3.14 5 7v3.017a8.698 8.698 0 0 0-1.75 5.233 8.75 8.75 0 1 0 17.5 0A8.698 8.698 0 0 0 19 10.017z';

  var maximize = 'M11 2.25c0 .69-.56 1.25-1.25 1.25H5.268l5.366 5.366a1.25 1.25 0 0 1-1.768 1.768L3.5 5.268V9.75a1.25 1.25 0 0 1-2.5 0V1h8.75c.69 0 1.25.56 1.25 1.25zM21.75 13c.69 0 1.25.56 1.25 1.25V23h-8.75a1.25 1.25 0 0 1 0-2.5h4.482l-5.366-5.366a1.25 1.25 0 0 1 1.768-1.768l5.366 5.366V14.25c0-.69.56-1.25 1.25-1.25z';

  var megaphone = 'M14 17.5c0 1.378-1.122 2.5-2.5 2.5A2.503 2.503 0 0 1 9 17.5V17h5v.5zm8.947-1.87L18.701 2.712a1.022 1.022 0 0 0-1.566-.521l-15.7 11.24c-.37.264-.525.744-.382 1.179l.551 1.678c.14.425.532.712.974.712H7v.5a4.5 4.5 0 0 0 9 0V17h5.973c.7 0 1.195-.696.974-1.37z';

  var menu = 'M21.5 9.5c1.38 0 2.5 1.13 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5h-19C1.13 14.5 0 13.38 0 12c0-1.37 1.13-2.5 2.5-2.5h19zm-19-3C1.13 6.5 0 5.38 0 4c0-1.37 1.13-2.5 2.5-2.5h19C22.88 1.5 24 2.63 24 4a2.5 2.5 0 0 1-2.5 2.5h-19zm19 11c1.38 0 2.5 1.13 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5h-19C1.13 22.5 0 21.38 0 20c0-1.37 1.13-2.5 2.5-2.5h19z';

  var minimize = 'M1 9.75c0-.69.56-1.25 1.25-1.25h4.482L1.366 3.134a1.25 1.25 0 0 1 1.768-1.768L8.5 6.732V2.25a1.25 1.25 0 0 1 2.5 0V11H2.25C1.56 11 1 10.44 1 9.75zM14.25 23c-.69 0-1.25-.56-1.25-1.25V13h8.75a1.25 1.25 0 0 1 0 2.5h-4.482l5.366 5.366a1.25 1.25 0 0 1-1.768 1.768L15.5 17.268v4.482c0 .69-.56 1.25-1.25 1.25z';

  var move = 'M14.3 18.17a1.25 1.25 0 0 1 1.77 0c.49.49.49 1.28 0 1.76L12 24l-4.07-4.07c-.48-.48-.48-1.27 0-1.76a1.25 1.25 0 0 1 1.77 0l1.05 1.04v-3.96a1.25 1.25 0 0 1 2.5 0v3.96l1.05-1.04zm-9.51-4.92l1.04 1.05c.49.49.49 1.28 0 1.77-.48.48-1.28.48-1.76 0L0 12l4.07-4.07c.48-.48 1.28-.48 1.76 0 .49.49.49 1.28 0 1.77l-1.04 1.05h3.96a1.25 1.25 0 0 1 0 2.5H4.79zm15.14-5.32L24 12l-4.07 4.07c-.48.48-1.27.48-1.76 0a1.25 1.25 0 0 1 0-1.77l1.04-1.05h-3.96a1.25 1.25 0 0 1 0-2.5h3.96L18.17 9.7a1.25 1.25 0 0 1 0-1.77c.49-.48 1.28-.48 1.76 0zM9.7 5.83c-.49.49-1.28.49-1.77 0-.48-.49-.48-1.28 0-1.76L12 0l4.07 4.07c.49.48.49 1.27 0 1.76s-1.28.49-1.77 0l-1.05-1.04v3.96a1.25 1.25 0 0 1-2.5 0V4.79L9.7 5.83z';

  var mute = 'M5.00,7.94 L5.00,7.96 L12.00,1.00 L12.00,23.00 L5.00,16.91 L5.00,16.94 L2.00,16.94 C0.90,16.94 0.00,16.04 0.00,14.94 L0.00,9.94 C0.00,8.83 0.90,7.94 2.00,7.94 L5.00,7.94 Z M23.63,14.12 C24.12,14.60 24.12,15.39 23.63,15.88 C23.15,16.37 22.35,16.37 21.87,15.88 L19.75,13.77 L17.63,15.88 C17.15,16.37 16.35,16.37 15.87,15.88 C15.38,15.39 15.38,14.60 15.87,14.12 L17.98,12.00 L15.87,9.88 C15.38,9.39 15.38,8.60 15.87,8.12 C16.35,7.63 17.15,7.63 17.63,8.12 L19.75,10.23 L21.86,8.12 C22.35,7.63 23.15,7.63 23.63,8.12 C24.12,8.60 24.12,9.40 23.63,9.88 L21.52,12.00 L23.63,14.12 Z';

  var pause = 'M7 0c1.65 0 3 1.35 3 3v18c0 1.65-1.35 3-3 3s-3-1.35-3-3V3c0-1.65 1.35-3 3-3zm10 0c1.65 0 3 1.35 3 3v18c0 1.65-1.35 3-3 3s-3-1.35-3-3V3c0-1.65 1.35-3 3-3z';

  var people = 'M8 11a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm10 3c3.314 0 6 2.713 6 6.061V22H0v-1.919C0 15.618 3.582 12 8 12c2.614 0 4.927 1.272 6.387 3.23A5.927 5.927 0 0 1 18 14zm0-1a3.25 3.25 0 1 1 0-6.5 3.25 3.25 0 0 1 0 6.5z';

  var person = 'M12 12c5.523 0 10 4.477 10 10v2H2v-2c0-5.523 4.477-10 10-10zm0-1a5.5 5.5 0 1 1 0-11 5.5 5.5 0 1 1 0 11z';

  var personAdd = 'M16.5 12a7.5 7.5 0 0 1 7.5 7.5V21H9v-1.5a7.5 7.5 0 0 1 7.5-7.5zm0-1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm-7.25 1H6.5v2.75a1.25 1.25 0 0 1-2.5 0V12H1.25a1.25 1.25 0 0 1 0-2.5H4V6.75a1.25 1.25 0 0 1 2.5 0V9.5h2.75a1.25 1.25 0 0 1 0 2.5z';

  var pin = 'M18 13.5c0-2.22-1.21-4.15-3-5.19V2.45A2.5 2.5 0 0 0 17 0H7a2.5 2.5 0 0 0 2 2.45v5.86c-1.79 1.04-3 2.97-3 5.19h5v8.46L12 24l1-2.04V13.5h5z';

  var pinHide = 'M9.13 6.37c.49.48.49 1.27 0 1.76l-2.61 2.62 2.61 2.62c.49.48.49 1.27 0 1.76-.48.49-1.27.49-1.76 0l-2.62-2.61-2.62 2.61c-.48.49-1.28.49-1.76 0-.49-.49-.49-1.28 0-1.76l2.61-2.62L.37 8.13c-.49-.49-.49-1.28 0-1.76.48-.49 1.28-.49 1.76 0l2.62 2.61 2.62-2.61c.49-.49 1.28-.49 1.76 0zM20.5 8.69c1.49.87 2.5 2.46 2.5 4.31h-4v7.96L18 23l-1-2.04V13h-4c0-1.85 1.01-3.44 2.5-4.31V2.93c-.86-.22-1.5-1-1.5-1.93h8c0 .93-.64 1.71-1.5 1.93v5.76z';

  var pinterest = 'M0 12c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12';

  var play = 'M20.62 9.48L6.63.48C4.63-.8 2 .63 2 3v18c0 2.37 2.63 3.8 4.63 2.52l13.99-9c1.84-1.18 1.84-3.86 0-5.04';

  var questionMark = 'M14.34 21.2c0 1.57-1.19 2.8-2.78 2.8-1.58 0-2.77-1.23-2.77-2.8 0-1.57 1.19-2.8 2.77-2.8 1.59 0 2.78 1.23 2.78 2.8m-2.53-10.88c1.41-1.23 3.3-2.05 3.3-3.87 0-1.45-1.24-2.36-2.95-2.36-2.12 0-3.52 1.48-3.55 3.43H3.75C3.88 3.3 6.96 0 12.34 0c4.86 0 7.91 2.52 7.91 6.32 0 2.36-1.09 3.81-2.3 4.78-1.68 1.33-2.84 1.89-3.49 2.61-.5.57-.62 1.04-.65 1.95H9.45c0-2.64.65-3.9 2.36-5.34';

  var remove = 'M17.75 13.25H6.25a1.25 1.25 0 0 1 0-2.5h11.5a1.25 1.25 0 0 1 0 2.5M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0';

  var report = 'M7.91 18.89A8.013 8.013 0 0 0 18.89 7.91L7.91 18.89zm-2.82-2.83L16.06 5.09A8.015 8.015 0 0 0 5.09 16.06zM12 24C5.37 24 0 18.63 0 12S5.37 0 12 0s12 5.37 12 12-5.37 12-12 12z';

  var search = 'M10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m13.12 2.88l-4.26-4.26A9.842 9.842 0 0 0 20 10c0-5.52-4.48-10-10-10S0 4.48 0 10s4.48 10 10 10c1.67 0 3.24-.41 4.62-1.14l4.26 4.26a3 3 0 0 0 4.24 0 3 3 0 0 0 0-4.24';

  var send = 'M6 6l-6 6 7.67 2.56L21 3 9.44 16.34 12 24l6-6 6-18';

  var share = 'M21 14c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2s2 .9 2 2v4h14v-4c0-1.1.9-2 2-2zM8.82 8.84c-.78.78-2.05.79-2.83 0-.78-.78-.79-2.04-.01-2.82L11.99 0l6.02 6.01c.78.78.79 2.05.01 2.83-.78.78-2.05.79-2.83 0l-1.2-1.19v6.18a2 2 0 1 1-4 0V7.66L8.82 8.84z';

  var shoppingBag = 'M9.5 5a2.5 2.5 0 0 1 5 0v2h-5V5zM17 7V5c0-2.76-2.24-5-5-5S7 2.24 7 5v2H2v15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7h-5z';

  var smiley = 'M12.03 19.29h-.06c-3.48-.03-4.92-2.31-4.98-2.41a.896.896 0 0 1 .27-1.22.82.82 0 0 1 1.17.26c.06.08 1.06 1.58 3.57 1.59 2.51-.01 3.52-1.6 3.56-1.67.25-.41.78-.54 1.18-.28.39.26.52.8.28 1.21-.06.1-1.5 2.49-4.99 2.52zM18 9.43c0 .95-.77 1.71-1.71 1.71-.95 0-1.72-.76-1.72-1.71s.77-1.72 1.72-1.72c.94 0 1.71.77 1.71 1.72zm-12 0c0-.95.77-1.72 1.71-1.72.95 0 1.72.77 1.72 1.72s-.77 1.71-1.72 1.71c-.94 0-1.71-.76-1.71-1.71z';

  var smileyOutline = 'M12.03 19.29h-.06c-3.48-.03-4.92-2.31-4.98-2.41a.896.896 0 0 1 .27-1.22.82.82 0 0 1 1.17.26c.06.08 1.06 1.58 3.57 1.59 2.51-.01 3.52-1.6 3.56-1.67.25-.41.78-.54 1.18-.28.39.26.52.8.28 1.21-.06.1-1.5 2.49-4.99 2.52zM18 9.43c0 .95-.77 1.71-1.71 1.71-.95 0-1.72-.76-1.72-1.71s.77-1.72 1.72-1.72c.94 0 1.71.77 1.71 1.72zm-12 0c0-.95.77-1.72 1.71-1.72.95 0 1.72.77 1.72 1.72s-.77 1.71-1.72 1.71c-.94 0-1.71-.76-1.71-1.71zM12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22.2C6.45 22.2 1.8 17.7 1.8 12 1.8 6.3 6.3 1.8 12 1.8c5.7 0 10.2 4.5 10.2 10.2 0 5.7-4.65 10.2-10.2 10.2z';

  var sound = 'M20.48 3.51A11.92 11.92 0 0 1 24 12c0 3.2-1.25 6.22-3.51 8.48-.25.25-.57.37-.89.37-.32 0-.64-.12-.88-.37-.49-.48-.49-1.27 0-1.76A9.465 9.465 0 0 0 21.5 12c0-2.54-.99-4.93-2.79-6.72-.48-.49-.48-1.28 0-1.77a1.25 1.25 0 0 1 1.77 0zM5 7.94v.02L12 1v22l-7-6.09v.03H2c-1.1 0-2-.9-2-2v-5a2 2 0 0 1 2-2h3zm11.95-.89A6.96 6.96 0 0 1 19 12c0 1.87-.73 3.63-2.05 4.95-.24.24-.56.36-.88.36-.32 0-.64-.12-.89-.36a1.25 1.25 0 0 1 0-1.77c.85-.85 1.32-1.98 1.32-3.18 0-1.2-.47-2.33-1.32-3.18a1.25 1.25 0 0 1 0-1.77 1.25 1.25 0 0 1 1.77 0z';

  var speech = 'M12 0C5.85 0 .75 4.94.75 11.08c0 2.7.9 5.24 2.7 7.19L2.1 23.51c-.15.3.3.6.6.45l5.25-2.55c1.35.45 2.7.75 4.05.75 6.15 0 11.25-4.94 11.25-11.08S18.15 0 12 0';

  var speechEllipsis = 'M18 12.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6 12.5M12 0C5.925 0 1 4.925 1 11c0 2.653.94 5.086 2.504 6.986L2 24l5.336-3.049A10.93 10.93 0 0 0 12 22c6.075 0 11-4.925 11-11S18.075 0 12 0';

  var tag = 'M6 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m7.36-6.2l8.84 8.84a2.71 2.71 0 0 1 0 3.85l-7.71 7.71a2.71 2.71 0 0 1-3.85 0L1.8 13.36c-.51-.51-.8-1.2-.8-1.92V3.73C1 2.22 2.22 1 3.73 1h7.71c.72 0 1.41.29 1.92.8';

  var textAlignCenter = 'M0 4.5h24v-3H0v3zm3 6h18V7.499H3V10.5zm-3 6h24v-3H0v3zm3 6h18v-3H3v3z';

  var textAlignLeft = 'M0 4.5h24v-3H0v3zm0 6h18V7.499H0V10.5zm0 6h24v-3H0v3zm0 6h18v-3H0v3z';

  var textAlignRight = 'M24 4.5H0v-3h24v3zm0 6H6v-3h18v3zm0 6H0v-3h24v3zm0 6H6v-3h18v3z';

  var twitter = 'M7.548 21.5c9.056 0 14.01-7.31 14.01-13.65 0-.208 0-.414-.015-.62A9.88 9.88 0 0 0 24 4.747c-.899.388-1.852.642-2.828.754a4.838 4.838 0 0 0 2.165-2.653c-.967.559-2.024.953-3.127 1.164-1.526-1.58-3.952-1.968-5.916-.944-1.964 1.025-2.98 3.205-2.475 5.32C7.859 8.194 4.17 6.372 1.67 3.375.363 5.567 1.031 8.372 3.195 9.78a4.986 4.986 0 0 1-2.235-.6v.06c0 2.284 1.653 4.25 3.95 4.703a5.042 5.042 0 0 1-2.223.082c.645 1.954 2.494 3.293 4.6 3.332A10.048 10.048 0 0 1 0 19.345a14.21 14.21 0 0 0 7.548 2.151';

  var viewTypeDefault = 'M13.5 24V13.5H24V24H13.5zM0 10.5V0h10.5v10.5H0zm13.5 0V0H24v10.5H13.5zM0 24V13.5h10.5V24H0z';

  var viewTypeDense = 'M17.999 24H24v-6h-6.001v6zm-9-17.999V0h6v6.001H9zM0 6.001V0h6v6.001H0zm17.999 0V0H24v6.001h-6.001zM0 15.001V9h6v6H0zm9 0V9h6v6H9zm8.999 0V9H24v6h-6.001zM0 24v-6h6v6H0zm9 0v-6h6v6H9z';

  var viewTypeList = 'M0 13.502v-3h24v3H0zm0-7.5V3h24v3.002H0zm0 15v-3h24v3H0z';

  var icons = {
    add: add,
    'add-circle': addCircle,
    'add-pin': addPin,
    'angled-pin': angledPin,
    'arrow-back': arrowBack,
    'arrow-circle-down': arrowCircleDown,
    'arrow-circle-forward': arrowCircleForward,
    'arrow-down': arrowDown,
    'arrow-forward': arrowForward,
    'arrow-up': arrowUp,
    'arrow-up-right': arrowUpRight,
    bell: bell,
    camera: camera,
    'camera-roll': cameraRoll,
    cancel: cancel,
    check: check,
    'check-circle': checkCircle,
    'circle-outline': circleOutline,
    clear: clear,
    clock: clock,
    cog: cog,
    compass: compass,
    compose: compose,
    dash: dash,
    download: download,
    edit: edit,
    ellipsis: ellipsis,
    'ellipsis-circle-outline': ellipsisCircleOutline,
    envelope: envelope,
    eye: eye,
    facebook: facebook,
    'face-happy': faceHappy,
    'face-sad': faceSad,
    'face-smiley': faceSmiley,
    filter: filter,
    flag: flag,
    flashlight: flashlight,
    gif: gif,
    globe: globe,
    'globe-checked': globeChecked,
    gmail: gmail,
    'google-plus': googlePlus,
    'graph-bar': graphBar,
    handle: handle,
    'hand-pointing': handPointing,
    heart: heart,
    'heart-broken': heartBroken,
    knoop: knoop,
    lightbulb: lightbulb,
    link: link,
    location: location,
    lock: lock,
    maximize: maximize,
    megaphone: megaphone,
    menu: menu,
    minimize: minimize,
    move: move,
    mute: mute,
    pause: pause,
    people: people,
    person: person,
    'person-add': personAdd,
    pin: pin,
    'pin-hide': pinHide,
    pinterest: pinterest,
    play: play,
    'question-mark': questionMark,
    remove: remove,
    report: report,
    search: search,
    'shopping-bag': shoppingBag,
    smiley: smiley,
    'smiley-outline': smileyOutline,
    send: send,
    share: share,
    sound: sound,
    speech: speech,
    'speech-ellipsis': speechEllipsis,
    tag: tag,
    'text-align-left': textAlignLeft,
    'text-align-center': textAlignCenter,
    'text-align-right': textAlignRight,
    twitter: twitter,
    'view-type-default': viewTypeDefault,
    'view-type-dense': viewTypeDense,
    'view-type-list': viewTypeList
  };

  var IconNames = Object.keys(icons);

  function Icon(props) {
    var accessibilityLabel = props.accessibilityLabel,
        _props$color = props.color,
        color = _props$color === undefined ? 'gray' : _props$color,
        icon = props.icon,
        inline = props.inline,
        _props$size = props.size,
        size = _props$size === undefined ? 16 : _props$size,
        dangerouslySetSvgPath = props.dangerouslySetSvgPath;


    var cs = classnames(styles$1.icon, colors[color], defineProperty({}, styles$1.iconBlock, !inline));

    var path = icon && icons[icon] ||
    /* eslint-disable-next-line no-underscore-dangle */
    dangerouslySetSvgPath && dangerouslySetSvgPath.__path || undefined;

    var ariaHidden = accessibilityLabel === '' ? true : null;

    return React.createElement(
      'svg',
      {
        className: cs,
        height: size,
        width: size,
        viewBox: '0 0 24 24',
        'aria-hidden': ariaHidden,
        'aria-label': accessibilityLabel,
        role: 'img'
      },
      React.createElement(
        'title',
        null,
        accessibilityLabel
      ),
      React.createElement('path', { d: path })
    );
  }

  Icon.icons = IconNames;

  Icon.propTypes = {
    accessibilityLabel: PropTypes.string.isRequired,
    color: PropTypes.oneOf(['blue', 'darkGray', 'eggplant', 'gray', 'green', 'lightGray', 'maroon', 'midnight', 'navy', 'olive', 'orange', 'orchid', 'pine', 'purple', 'red', 'watermelon', 'white']),
    dangerouslySetSvgPath: PropTypes.shape({
      __path: PropTypes.string
    }),
    icon: PropTypes.oneOf(IconNames),
    inline: PropTypes.bool,
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  };

  var styles$2 = { "img": "_u3 _45 _y6 _4h", "scaled-img": "_u4 _4f", "contain": "_u5 _u4 _4f", "cover": "_u6 _u4 _4f" };

  var shouldScaleImage = function shouldScaleImage(fit) {
    return fit === 'cover' || fit === 'contain';
  };

  var Image = function (_React$PureComponent) {
    inherits(Image, _React$PureComponent);

    function Image() {
      var _ref;

      var _temp, _this, _ret;

      classCallCheck(this, Image);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Image.__proto__ || Object.getPrototypeOf(Image)).call.apply(_ref, [this].concat(args))), _this), _this.handleLoad = function () {
        if (_this.props.onLoad) {
          _this.props.onLoad();
        }
      }, _this.handleError = function () {
        if (_this.props.onError) {
          _this.props.onError();
        }
      }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(Image, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (shouldScaleImage(this.props.fit)) {
          this.loadImage();
        }
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _props = this.props,
            fit = _props.fit,
            src = _props.src;

        if (shouldScaleImage(fit) && prevProps.src !== src) {
          this.loadImage();
        }
      }
    }, {
      key: 'loadImage',
      value: function loadImage() {
        if (typeof window !== 'undefined') {
          var image = new window.Image();
          image.onload = this.handleLoad;
          image.onerror = this.handleError;
          image.src = this.props.src;
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _props2 = this.props,
            alt = _props2.alt,
            color = _props2.color,
            children = _props2.children,
            fit = _props2.fit,
            naturalHeight = _props2.naturalHeight,
            naturalWidth = _props2.naturalWidth,
            sizes = _props2.sizes,
            src = _props2.src,
            srcSet = _props2.srcSet;


        var isScaledImage = shouldScaleImage(fit);
        var childContent = children ? React.createElement(
          Box,
          { position: 'absolute', top: true, left: true, bottom: true, right: true, overflow: 'hidden' },
          children
        ) : null;

        return isScaledImage ? React.createElement(
          'div',
          {
            'aria-label': alt,
            className: styles$2[fit],
            style: {
              backgroundColor: color,
              backgroundImage: 'url(\'' + src + '\')'
            },
            role: 'img'
          },
          childContent
        ) : React.createElement(
          Box,
          {
            position: 'relative',
            dangerouslySetInlineStyle: {
              __style: {
                backgroundColor: color,
                paddingBottom: naturalHeight / naturalWidth * 100 + '%'
              }
            }
          },
          React.createElement('img', {
            alt: alt,
            className: styles$2.img,
            onError: this.handleError,
            onLoad: this.handleLoad,
            sizes: sizes,
            src: src,
            srcSet: srcSet
          }),
          childContent
        );
      }
    }]);
    return Image;
  }(React.PureComponent);

  Image.propTypes = {
    alt: PropTypes.string.isRequired,
    children: PropTypes.node,
    color: PropTypes.string,
    fit: PropTypes.oneOf(['contain', 'cover', 'none']),
    naturalHeight: PropTypes.number.isRequired,
    naturalWidth: PropTypes.number.isRequired,
    onError: PropTypes.func,
    onLoad: PropTypes.func,
    sizes: PropTypes.string,
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string
  };
  Image.defaultProps = {
    color: 'transparent',
    fit: 'none'
  };

  var styles$3 = { "Mask": "_ub _49 _4f", "square": "_uc _2v", "rounded": "_ud _2y", "circle": "_ue _2w", "wash": "_uf _4h _4l _4m _4k _4j" };

  function Mask(props) {
    var children = props.children,
        _props$shape = props.shape,
        shape = _props$shape === undefined ? 'square' : _props$shape,
        width = props.width,
        height = props.height,
        _props$wash = props.wash,
        wash = _props$wash === undefined ? false : _props$wash;

    return React.createElement(
      'div',
      { className: classnames(styles$3.Mask, styles$3[shape]), style: { width: width, height: height } },
      children,
      wash && React.createElement('div', { className: styles$3.wash })
    );
  }

  Mask.propTypes = {
    children: PropTypes.node,
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    shape: PropTypes.oneOf(['circle', 'rounded', 'square']),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    wash: PropTypes.bool
  };

  var typography = { "antialiased": "_0", "sansSerif": "_1", "letterSpacing": "_2", "leadingShort": "_3", "leadingTall": "_4", "fontWeightNormal": "_5", "fontWeightBold": "_6", "fontStyleRegular": "_7", "fontStyleItalic": "_8", "underline": "_9", "noUnderline": "_a", "breakWord": "_b", "truncate": "_c", "alignLeft": "_d", "alignRight": "_e", "alignCenter": "_f", "textJustify": "_g" };

  var Square = function Square(props) {
    return React.createElement(
      Box,
      _extends({}, props, { position: 'relative' }),
      React.createElement(Box, {
        dangerouslySetInlineStyle: { __style: { paddingBottom: '100%' } },
        position: 'relative'
      }),
      React.createElement(
        Box,
        { position: 'absolute', top: true, left: true, bottom: true, right: true },
        props.children
      )
    );
  };

  var DefaultAvatar = function DefaultAvatar(_ref) {
    var name = _ref.name;

    var firstInitial = name ? [].concat(toConsumableArray(name))[0].toUpperCase() : '';
    return React.createElement(
      Square,
      { color: 'gray', shape: 'circle' },
      firstInitial && React.createElement(
        'svg',
        {
          width: '100%',
          viewBox: '-50 -50 100 100',
          version: '1.1',
          preserveAspectRatio: 'xMidYMid meet',
          xmlns: 'http://www.w3.org/2000/svg'
        },
        React.createElement(
          'title',
          null,
          name
        ),
        React.createElement(
          'text',
          {
            fontSize: '50px',
            fill: '#fff',
            dominantBaseline: 'central',
            textAnchor: 'middle',
            className: [typography.antialiased, typography.sansSerif, typography.leadingSmall, typography.fontWeightBold].join(' ')
          },
          firstInitial
        )
      )
    );
  };

  var sizes = {
    sm: 24,
    md: 40,
    lg: 72
  };

  var Avatar = function (_React$PureComponent) {
    inherits(Avatar, _React$PureComponent);

    function Avatar() {
      var _ref2;

      var _temp, _this, _ret;

      classCallCheck(this, Avatar);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref2 = Avatar.__proto__ || Object.getPrototypeOf(Avatar)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
        isImageLoaded: true
      }, _this.handleImageError = function () {
        return _this.setState({ isImageLoaded: false });
      }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(Avatar, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            name = _props.name,
            outline = _props.outline,
            size = _props.size,
            src = _props.src,
            verified = _props.verified;
        var isImageLoaded = this.state.isImageLoaded;

        var width = size ? sizes[size] : '100%';
        var height = size ? sizes[size] : '';
        return React.createElement(
          Box,
          _extends({
            color: 'white'
          }, outline ? {
            dangerouslySetInlineStyle: {
              __style: {
                boxShadow: '0 0 0 2px #fff'
              }
            }
          } : {}, {
            width: width,
            height: height,
            position: 'relative',
            shape: 'circle'
          }),
          src && isImageLoaded ? React.createElement(
            Mask,
            { shape: 'circle', wash: true },
            React.createElement(Image, {
              alt: name,
              color: '#EFEFEF',
              naturalHeight: 1,
              naturalWidth: 1,
              src: src,
              onError: this.handleImageError
            })
          ) : React.createElement(DefaultAvatar, { name: name }),
          verified && React.createElement(
            Box,
            {
              position: 'absolute',
              width: '20%',
              height: '20%',
              minWidth: 8,
              minHeight: 8,
              dangerouslySetInlineStyle: {
                __style: {
                  bottom: '4%',
                  right: '4%'
                }
              }
            },
            React.createElement(
              Box,
              {
                color: 'white',
                width: '100%',
                height: '100%',
                shape: 'circle',
                dangerouslySetInlineStyle: {
                  __style: {
                    boxShadow: '0 0 0 2px #fff'
                  }
                }
              },
              React.createElement(Icon, {
                color: 'red',
                icon: 'check-circle',
                accessibilityLabel: '',
                size: '100%'
              })
            )
          )
        );
      }
    }]);
    return Avatar;
  }(React.PureComponent);

  Avatar.propTypes = {
    name: PropTypes.string.isRequired,
    outline: PropTypes.bool,
    src: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    verified: PropTypes.bool
  };

  var styles$4 = { "button": "_r3 _4q", "solid": "_r4 _33", "enabled": "_r5 _z7 _z9", "sm": "_r6 _4n", "md": "_r7 _4o", "lg": "_r8 _4p", "block": "_r9 _y6 _45", "inline": "_ra _47", "disabled": "_rb _39", "gray": "_rc _39", "red": "_rd _35", "blue": "_re _3l", "transparent": "_rf _42", "white": "_rg _37" };

  var styles$5 = { "Text": "_w7 _0 _1 _2", "fontSize1": "_w8", "fontSize2": "_w9", "fontSize3": "_wa", "fontSize4": "_wb", "fontSize5": "_wc", "smFontSize1": "_wd", "smFontSize2": "_we", "smFontSize3": "_wf", "smFontSize4": "_wg", "smFontSize5": "_wh", "mdFontSize1": "_wi", "mdFontSize2": "_wj", "mdFontSize3": "_wk", "mdFontSize4": "_wl", "mdFontSize5": "_wm", "lgFontSize1": "_wn", "lgFontSize2": "_wo", "lgFontSize3": "_wp", "lgFontSize4": "_wq", "lgFontSize5": "_wr" };

  var SIZE_SCALE = {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5
  };

  function Text(_ref) {
    var _ref$align = _ref.align,
        align = _ref$align === undefined ? 'left' : _ref$align,
        _ref$bold = _ref.bold,
        bold = _ref$bold === undefined ? false : _ref$bold,
        children = _ref.children,
        _ref$color = _ref.color,
        color = _ref$color === undefined ? 'darkGray' : _ref$color,
        _ref$inline = _ref.inline,
        inline = _ref$inline === undefined ? false : _ref$inline,
        _ref$italic = _ref.italic,
        italic = _ref$italic === undefined ? false : _ref$italic,
        _ref$overflow = _ref.overflow,
        overflow = _ref$overflow === undefined ? 'breakWord' : _ref$overflow,
        _ref$size = _ref.size,
        size = _ref$size === undefined ? 'md' : _ref$size,
        smSize = _ref.smSize,
        mdSize = _ref.mdSize,
        lgSize = _ref.lgSize,
        _ref$leading = _ref.leading,
        leading = _ref$leading === undefined ? 'short' : _ref$leading,
        _ref$truncate = _ref.truncate,
        truncate = _ref$truncate === undefined ? false : _ref$truncate,
        _ref$__dangerouslyInc = _ref.__dangerouslyIncreaseLineHeight,
        __dangerouslyIncreaseLineHeight = _ref$__dangerouslyInc === undefined ? false : _ref$__dangerouslyInc;

    var scale = SIZE_SCALE[size];
    var smScale = SIZE_SCALE[smSize];
    var mdScale = SIZE_SCALE[mdSize];
    var lgScale = SIZE_SCALE[lgSize];

    var cs = classnames(styles$5.Text, styles$5['fontSize' + scale], lgSize && styles$5['lgFontSize' + lgScale], mdSize && styles$5['mdFontSize' + mdScale], smSize && styles$5['smFontSize' + smScale], color === 'blue' && colors.blue, color === 'darkGray' && colors.darkGray, color === 'eggplant' && colors.eggplant, color === 'gray' && colors.gray, color === 'green' && colors.green, color === 'lightGray' && colors.lightGray, color === 'maroon' && colors.maroon, color === 'midnight' && colors.midnight, color === 'navy' && colors.navy, color === 'olive' && colors.olive, color === 'orange' && colors.orange, color === 'orchid' && colors.orchid, color === 'pine' && colors.pine, color === 'purple' && colors.purple, color === 'red' && colors.red, color === 'watermelon' && colors.watermelon, color === 'white' && colors.white, leading === 'short' && typography.leadingShort, (leading === 'tall' || __dangerouslyIncreaseLineHeight) && typography.leadingTall, align === 'center' && typography.alignCenter, align === 'justify' && typography.alignJustify, align === 'left' && typography.alignLeft, align === 'right' && typography.alignRight, overflow === 'breakWord' && typography.breakWord, italic && typography.fontStyleItalic, !italic && typography.fontStyleNormal, bold && typography.fontWeightBold, !bold && typography.fontWeightNormal, truncate && typography.truncate);
    var Tag = inline ? 'span' : 'div';

    return React.createElement(
      Tag,
      _extends({
        className: cs
      }, truncate && typeof children === 'string' ? { title: children } : null),
      children
    );
  }

  Text.propTypes = {
    __dangerouslyIncreaseLineHeight: PropTypes.bool,
    align: PropTypes.oneOf(['left', 'right', 'center', 'justify']),
    bold: PropTypes.bool,
    children: PropTypes.node,
    color: PropTypes.oneOf(['green', 'pine', 'olive', 'blue', 'navy', 'midnight', 'purple', 'orchid', 'eggplant', 'maroon', 'watermelon', 'orange', 'darkGray', 'gray', 'lightGray', 'red', 'white']),
    inline: PropTypes.bool,
    italic: PropTypes.bool,
    leading: PropTypes.oneOf(['tall', 'short']),
    lgSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    mdSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    overflow: PropTypes.oneOf(['normal', 'breakWord']),
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    smSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    truncate: PropTypes.bool
  };

  function Button(props) {
    var _classnames;

    var accessibilityExpanded = props.accessibilityExpanded,
        accessibilityHaspopup = props.accessibilityHaspopup,
        accessibilityLabel = props.accessibilityLabel,
        _props$color = props.color,
        color = _props$color === undefined ? 'gray' : _props$color,
        _props$disabled = props.disabled,
        disabled = _props$disabled === undefined ? false : _props$disabled,
        _props$inline = props.inline,
        inline = _props$inline === undefined ? false : _props$inline,
        name = props.name,
        onClick = props.onClick,
        _props$size = props.size,
        size = _props$size === undefined ? 'md' : _props$size,
        text = props.text,
        _props$type = props.type,
        type = _props$type === undefined ? 'button' : _props$type;


    var textColor = {
      blue: 'white',
      gray: 'darkGray',
      red: 'white',
      transparent: 'white',
      white: 'darkGray'
    };

    var classes = classnames(styles$4.button, (_classnames = {}, defineProperty(_classnames, styles$4.sm, size === 'sm'), defineProperty(_classnames, styles$4.md, size === 'md'), defineProperty(_classnames, styles$4.lg, size === 'lg'), defineProperty(_classnames, styles$4.solid, color !== 'transparent'), defineProperty(_classnames, styles$4[color], !disabled), defineProperty(_classnames, styles$4.disabled, disabled), defineProperty(_classnames, styles$4.enabled, !disabled), defineProperty(_classnames, styles$4.inline, inline), defineProperty(_classnames, styles$4.block, !inline), _classnames));

    /* eslint-disable react/button-has-type */
    return React.createElement(
      'button',
      {
        'aria-expanded': accessibilityExpanded,
        'aria-haspopup': accessibilityHaspopup,
        'aria-label': accessibilityLabel,
        className: classes,
        disabled: disabled,
        name: name,
        onClick: function (_onClick) {
          function onClick(_x) {
            return _onClick.apply(this, arguments);
          }

          onClick.toString = function () {
            return _onClick.toString();
          };

          return onClick;
        }(function (event) {
          return onClick && onClick({ event: event });
        }),
        type: type
      },
      React.createElement(
        Text,
        {
          align: 'center',
          bold: true,
          color: disabled ? 'gray' : textColor[color],
          overflow: 'normal',
          size: size
        },
        text
      )
    );
    /* eslint-enable react/button-has-type */
  }

  Button.propTypes = {
    accessibilityExpanded: PropTypes.bool,
    accessibilityHaspopup: PropTypes.bool,
    accessibilityLabel: PropTypes.string,
    color: PropTypes.oneOf(['blue', 'gray', 'red', 'transparent', 'white']),
    disabled: PropTypes.bool,
    inline: PropTypes.bool,
    name: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['button', 'submit'])
  };

  var styles$6 = { "card": "_rh _4h _2y _4j _4k _4l _4m _4r", "hover": "_ri", "animateIn": "_rj" };

  var Card = function (_React$Component) {
    inherits(Card, _React$Component);

    function Card() {
      var _ref;

      var _temp, _this, _ret;

      classCallCheck(this, Card);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Card.__proto__ || Object.getPrototypeOf(Card)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        hovered: false
      }, _this.handleMouseEnter = function (event) {
        var onMouseEnter = _this.props.onMouseEnter;

        _this.setState({ hovered: true }, onMouseEnter && function () {
          return onMouseEnter({ event: event });
        });
      }, _this.handleMouseLeave = function (event) {
        var onMouseLeave = _this.props.onMouseLeave;

        _this.setState({ hovered: false }, onMouseLeave && function () {
          return onMouseLeave({ event: event });
        });
      }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(Card, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            active = _props.active,
            children = _props.children,
            image = _props.image;
        var hovered = this.state.hovered;


        var classes = classnames(styles$6.card, defineProperty({}, styles$6.hover, active || active == null && hovered));

        return React.createElement(
          Box,
          {
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            position: 'relative'
          },
          image && React.createElement(
            Box,
            { marginBottom: 1 },
            image
          ),
          React.createElement(
            Box,
            null,
            children
          ),
          React.createElement('div', { className: classes })
        );
      }
    }]);
    return Card;
  }(React.Component);

  Card.propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    image: PropTypes.node,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func
  };

  var styles$7 = { "border": "_rk", "borderError": "_rl", "borderDark": "_rm", "check": "_rn _45 _4q _4s _50 _5a", "checkEnabled": "_ro _z9", "checkFocused": "_rp _z8", "checkSm": "_rq", "checkMd": "_rr", "input": "_rs _4h _od", "inputEnabled": "_rt _z9", "inputSm": "_ru", "inputMd": "_rv" };

  var Checkbox = function (_React$Component) {
    inherits(Checkbox, _React$Component);

    function Checkbox() {
      var _ref;

      var _temp, _this, _ret;

      classCallCheck(this, Checkbox);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        focused: false
      }, _this.handleChange = function (event) {
        var checked = event.target.checked;

        _this.props.onChange({ event: event, checked: checked });
      }, _this.handleClick = function (event) {
        var onClick = _this.props.onClick;

        if (onClick) {
          var _checked = event.currentTarget.checked;

          onClick({ event: event, checked: _checked });
        }
      }, _this.handleBlur = function () {
        return _this.setState({ focused: false });
      }, _this.handleFocus = function () {
        return _this.setState({ focused: true });
      }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(Checkbox, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.props.indeterminate) {
          this.setIndeterminate(!!this.props.indeterminate);
        }
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(previousProps) {
        if (previousProps.indeterminate !== this.props.indeterminate) {
          this.setIndeterminate(!!this.props.indeterminate);
        }
      }
    }, {
      key: 'setIndeterminate',
      value: function setIndeterminate(indeterminate) {
        if (this.input) {
          this.input.indeterminate = indeterminate;
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _classnames,
            _this2 = this,
            _classnames2;

        var _props = this.props,
            checked = _props.checked,
            disabled = _props.disabled,
            hasError = _props.hasError,
            id = _props.id,
            indeterminate = _props.indeterminate,
            name = _props.name,
            size = _props.size;


        var borderStyle = styles$7.border;
        if (!disabled && (checked || indeterminate)) {
          borderStyle = styles$7.borderDark;
        } else if (hasError) {
          borderStyle = styles$7.borderError;
        }

        return React.createElement(
          Box,
          { position: 'relative' },
          React.createElement('input', {
            checked: checked,
            className: classnames(styles$7.input, (_classnames = {}, defineProperty(_classnames, styles$7.inputEnabled, !disabled), defineProperty(_classnames, styles$7.indeterminate, indeterminate), defineProperty(_classnames, styles$7.inputSm, size === 'sm'), defineProperty(_classnames, styles$7.inputMd, size === 'md'), _classnames)),
            disabled: disabled,
            id: id,
            name: name,
            onBlur: this.handleBlur,
            onChange: this.handleChange,
            onClick: this.handleClick,
            onFocus: this.handleFocus,
            ref: function ref(el) {
              _this2.input = el;
            },
            type: 'checkbox'
          }),
          React.createElement(
            'div',
            {
              className: classnames(borderStyle, styles$7.check,
              // eslint-disable-next-line no-nested-ternary
              disabled ? checked || indeterminate ? colors.grayBg : colors.lightGrayBg : checked || indeterminate ? colors.darkGrayBg : colors.whiteBg, (_classnames2 = {}, defineProperty(_classnames2, styles$7.checkEnabled, !disabled), defineProperty(_classnames2, styles$7.checkFocused, this.state.focused), defineProperty(_classnames2, styles$7.checkMd, size === 'md'), defineProperty(_classnames2, styles$7.checkSm, size === 'sm'), _classnames2))
            },
            (checked || indeterminate) && React.createElement(Icon, {
              accessibilityLabel: '',
              color: 'white',
              icon: indeterminate ? 'dash' : 'check',
              size: size === 'sm' ? 8 : 12
            })
          )
        );
      }
    }]);
    return Checkbox;
  }(React.Component);

  Checkbox.propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    hasError: PropTypes.bool,
    id: PropTypes.string.isRequired,
    indeterminate: PropTypes.bool,
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(['sm', 'md'])
  };
  Checkbox.defaultProps = {
    checked: false,
    disabled: false,
    hasError: false,
    indeterminate: false,
    size: 'md'
  };

  var Collection = function (_React$PureComponent) {
    inherits(Collection, _React$PureComponent);

    function Collection() {
      classCallCheck(this, Collection);
      return possibleConstructorReturn(this, (Collection.__proto__ || Object.getPrototypeOf(Collection)).apply(this, arguments));
    }

    createClass(Collection, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            Item = _props.Item,
            layout$$1 = _props.layout,
            _props$viewportTop = _props.viewportTop,
            viewportTop = _props$viewportTop === undefined ? 0 : _props$viewportTop,
            _props$viewportLeft = _props.viewportLeft,
            viewportLeft = _props$viewportLeft === undefined ? 0 : _props$viewportLeft;

        // Calculate the full dimensions of the item layer

        var width = Math.max.apply(Math, toConsumableArray(layout$$1.map(function (item) {
          return item.left + item.width;
        })));
        var height = Math.max.apply(Math, toConsumableArray(layout$$1.map(function (item) {
          return item.top + item.height;
        })));

        // Default the viewport to being the full width of the content layer
        var _props2 = this.props,
            _props2$viewportWidth = _props2.viewportWidth,
            viewportWidth = _props2$viewportWidth === undefined ? width : _props2$viewportWidth,
            _props2$viewportHeigh = _props2.viewportHeight,
            viewportHeight = _props2$viewportHeigh === undefined ? height : _props2$viewportHeigh;

        // Calculates which items from the item layer to render in the viewport
        // layer.

        var items = layout$$1.reduce(function (acc, position, idx) {
          if (position.top + position.height > viewportTop && position.top < viewportHeight + viewportTop && position.left < viewportWidth + viewportLeft && position.left + position.width > viewportLeft) {
            acc.push(_extends({ idx: idx }, position));
          }
          return acc;
        }, []);

        return React.createElement(
          'div',
          { className: layout.relative, style: { width: width, height: height } },
          items.map(function (_ref) {
            var idx = _ref.idx,
                style = objectWithoutProperties(_ref, ['idx']);
            return React.createElement(
              'div',
              { key: idx, className: layout.absolute, style: style },
              React.createElement(Item, { idx: idx })
            );
          })
        );
      }
    }]);
    return Collection;
  }(React.PureComponent);

  Collection.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    Item: PropTypes.any,
    layout: PropTypes.arrayOf(PropTypes.exact({
      top: PropTypes.number.isRequired,
      left: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    }).isRequired),
    viewportHeight: PropTypes.number,
    viewportLeft: PropTypes.number,
    viewportTop: PropTypes.number,
    viewportWidth: PropTypes.number
  };
  Collection.defaultProps = {
    layout: [],
    viewportLeft: 0,
    viewportTop: 0
  };

  /*

  This function just implements the design constraints for asymetrical columns in
  a very simple way. It's not perfect, but it's very predictible. If you do
  anything, improve it so that it takes these constraints and generates them
  for n > 4.

  1 + n columns:
    first column is 50/50
    can't have 3 columns in a row be 50/50

  */
  var UP = [0.75, 0.25];
  var DOWN = [0.25, 0.75];
  var MID = [0.5, 0.5];
  var columnLayout = function columnLayout(numOfColumns) {
    switch (numOfColumns) {
      case 1:
        return [[MID], [UP], [DOWN]];
      case 2:
        return [[UP, MID], [DOWN, MID], [MID, UP], [MID, DOWN]];
      case 4:
        return [[MID, UP, MID, MID], [MID, DOWN, MID, MID], [MID, MID, UP, MID], [MID, MID, DOWN, MID], [MID, UP, MID, DOWN], [MID, DOWN, MID, UP]];
      case 3:
      default:
        return [[MID, UP, MID], [MID, DOWN, MID], [MID, MID, UP], [MID, MID, DOWN]];
    }
  };

  var paddingAll = function paddingAll(gutter, positions) {
    return positions.map(function (_ref) {
      var top = _ref.top,
          left = _ref.left,
          width = _ref.width,
          height = _ref.height;
      return {
        top: top,
        left: left,
        width: width - gutter,
        height: height - gutter
      };
    });
  };

  var mindex = function mindex(arr) {
    return arr.reduce(function (minIndex, item, i) {
      return item < arr[minIndex] ? i : minIndex;
    }, 0);
  };

  var columnsForCollageWithCover = function columnsForCollageWithCover(numOfColumns) {
    return numOfColumns === 4 ? 2 : 1;
  };

  function getCollageLayout(_ref2) {
    var gutter = _ref2.gutter,
        cover = _ref2.cover,
        numCols = _ref2.columns,
        h = _ref2.height,
        w = _ref2.width,
        layoutKey = _ref2.layoutKey;

    var positions = [];
    var width = w + gutter;
    var height = h + gutter;

    // If there's a cover image, we'll add that later. It should be a little
    // less than half the width of the collage. We do this now (and not later
    // when we add the cover image) because of `columnLayout`'s constraints
    // needing the exact number of columns that are displayed.
    var gridCols = cover ? columnsForCollageWithCover(numCols) : numCols;

    // Selects the layout that we're going to use for the grid
    var columns = columnLayout(gridCols);
    var layoutIdx = layoutKey % columns.length;
    var layout = columns[layoutIdx];

    // This does a really simple version of our masonry layout. Why replicate
    // that here? a.) fewer dependencies and b.) we need the algorithm to
    // roughly preserve the order of the collages from when they were ordered
    // by Masonry.
    var colHeights = new Array(gridCols).fill(0);
    var colCounts = new Array(gridCols).fill(0);

    // We iterate over every position that we think we could _potentially_ have
    // so that we can fill them with empty sections if need be.
    for (var i = 0; i < 2 * gridCols; i += 1) {
      var col = mindex(colHeights);
      var colIdx = colCounts[col];
      var itemHeight = layout[col][colIdx] * height;

      positions.push({
        top: colHeights[col],
        left: col * (width / numCols),
        width: width / numCols,
        height: itemHeight
      });

      colHeights[col] += itemHeight;
      colCounts[col] += 1;
    }

    // If we have a cover image, figure out how big it is, then move all the
    // existing columns over.
    if (cover) {
      var coverImageWidth = Math.ceil(numCols / 2) * (width / numCols);
      positions = positions.map(function (position) {
        return _extends({}, position, {
          left: coverImageWidth + position.left
        });
      });
      positions.unshift({ top: 0, left: 0, width: coverImageWidth, height: height });
    }

    // This adds the space between any items that we have. It's nice to do
    // this as a separate pass after everything else, because the math earlier
    // becomes easier and it's less brittle to change.
    if (gutter) {
      positions = paddingAll(gutter, positions);
    }

    return positions;
  }

  function Collage(props) {
    var columns = props.columns,
        cover = props.cover,
        gutter = props.gutter,
        height = props.height,
        layoutKey = props.layoutKey,
        renderImage = props.renderImage,
        width = props.width;

    var positions = getCollageLayout({
      columns: columns,
      cover: !!cover,
      width: width,
      height: height,
      gutter: gutter || 0,
      layoutKey: layoutKey || 0
    });
    return React.createElement(Collection, {
      Item: function Item(_ref3) {
        var index = _ref3.idx;
        return renderImage({
          index: index,
          width: positions[index].width,
          height: positions[index].height
        });
      },
      layout: positions
    });
  }

  Collage.propTypes = {
    columns: PropTypes.oneOf([2, 3, 4]).isRequired,
    cover: PropTypes.bool,
    gutter: PropTypes.number,
    height: PropTypes.number.isRequired,
    layoutKey: PropTypes.number,
    renderImage: PropTypes.func.isRequired,
    width: PropTypes.number.isRequired
  };

  var styles$8 = { "deprecatedColumn": "_rw", "xsCol0": "_rx", "xsCol1": "_ry _xv", "xsCol2": "_rz _xw", "xsCol3": "_s0 _xx", "xsCol4": "_s1 _xy", "xsCol5": "_s2 _xz", "xsCol6": "_s3 _y0", "xsCol7": "_s4 _y1", "xsCol8": "_s5 _y2", "xsCol9": "_s6 _y3", "xsCol10": "_s7 _y4", "xsCol11": "_s8 _y5", "xsCol12": "_s9 _y6", "smCol0": "_sa", "smCol1": "_sb _y7", "smCol2": "_sc _y8", "smCol3": "_sd _y9", "smCol4": "_se _ya", "smCol5": "_sf _yb", "smCol6": "_sg _yc", "smCol7": "_sh _yd", "smCol8": "_si _ye", "smCol9": "_sj _yf", "smCol10": "_sk _yg", "smCol11": "_sl _yh", "smCol12": "_sm _yi", "mdCol0": "_sn", "mdCol1": "_so _yj", "mdCol2": "_sp _yk", "mdCol3": "_sq _yl", "mdCol4": "_sr _ym", "mdCol5": "_ss _yn", "mdCol6": "_st _yo", "mdCol7": "_su _yp", "mdCol8": "_sv _yq", "mdCol9": "_sw _yr", "mdCol10": "_sx _ys", "mdCol11": "_sy _yt", "mdCol12": "_sz _yu", "lgCol0": "_t0", "lgCol1": "_t1 _yv", "lgCol2": "_t2 _yw", "lgCol3": "_t3 _yx", "lgCol4": "_t4 _yy", "lgCol5": "_t5 _yz", "lgCol6": "_t6 _z0", "lgCol7": "_t7 _z1", "lgCol8": "_t8 _z2", "lgCol9": "_t9 _z3", "lgCol10": "_ta _z4", "lgCol11": "_tb _z5", "lgCol12": "_tc _z6" };

  function Column(props) {
    var children = props.children;

    var cs = classnames((props.xs !== undefined || props.sm !== undefined || props.md !== undefined || props.lg !== undefined) && styles$8.deprecatedColumn, props.xs && styles$8['xsCol' + props.xs], props.sm && styles$8['smCol' + props.sm], props.md && styles$8['mdCol' + props.md], props.lg && styles$8['lgCol' + props.lg], props.span != null && styles$8['xsCol' + props.span], props.smSpan != null && styles$8['smCol' + props.smSpan], props.mdSpan != null && styles$8['mdCol' + props.mdSpan], props.lgSpan != null && styles$8['lgCol' + props.lgSpan]);
    return React.createElement(
      'div',
      { className: cs },
      children
    );
  }

  Column.propTypes = {
    children: PropTypes.node,
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    span: PropTypes.number,
    smSpan: PropTypes.number,
    mdSpan: PropTypes.number,
    lgSpan: PropTypes.number
  };

  function Container(props) {
    var children = props.children;

    return React.createElement(
      Box,
      { justifyContent: 'center', display: 'flex' },
      React.createElement(
        Box,
        { maxWidth: 800, width: '100%' },
        children
      )
    );
  }

  Container.propTypes = {
    children: PropTypes.node
  };

  var styles$9 = { "divider": "_td _45 _2r _od" };

  function Divider() {
    return React.createElement('hr', { className: styles$9.divider });
  }

  function Caret(props) {
    var direction = props.direction;

    var path = void 0;
    switch (direction) {
      case 'up':
        path = 'M0 0 L12 12 L24 0';
        break;
      case 'right':
        path = 'M24 0 L12 12 L24 24';
        break;
      case 'down':
        path = 'M0 24 L12 12 L24 24';
        break;
      case 'left':
        path = 'M0 0 L12 12 L0 24';
        break;
      default:
    }

    return React.createElement(
      'svg',
      { width: '24', height: '24' },
      React.createElement('path', { d: path })
    );
  }

  Caret.propTypes = {
    direction: PropTypes.oneOf(['up', 'right', 'down', 'left'])
  };

  var styles$a = { "container": "_xp _4h", "contents": "_xq _4h _45 _4q _2y", "dimensions": "_xr", "innerContents": "_xs _4s _4d _2y", "caret": "_xt _4h" };

  /* Needed until this Flow issue is fixed: https://github.com/facebook/flow/issues/380 */
  /* eslint quote-props: 0 */
  var SPACES_INDEX_MAP = {
    '0': 'up',
    '1': 'right',
    '2': 'down',
    '3': 'left'
  };

  var DIR_INDEX_MAP = {
    up: 0,
    right: 1,
    down: 2,
    left: 3
  };

  var MARGIN = 24;
  var CARET_HEIGHT = 24;
  var CARET_OFFSET_FROM_SIDE = 24;
  var BORDER_RADIUS = 8;

  /**
   * Determines the main direction the flyout opens
   */
  function getMainDir(flyoutSize, idealDirection, triggerRect, windowSize) {
    // Calculates the available space if we were to place the flyout in the 4 main directions
    // to determine which 'quadrant' to position the flyout inside of
    var up = triggerRect.top - flyoutSize.height - CARET_HEIGHT;
    var right = windowSize.width - flyoutSize.width - CARET_HEIGHT - triggerRect.right;
    var down = windowSize.height - flyoutSize.height - CARET_HEIGHT - triggerRect.bottom;
    var left = triggerRect.left - flyoutSize.width - CARET_HEIGHT;

    // overrides available space when the trigger is close to the edge of the screen
    // trigger is too close to top/bottom of screen for left & right flyouts
    if (triggerRect.top < BORDER_RADIUS || windowSize.height - triggerRect.bottom < BORDER_RADIUS) {
      left = 0;
      right = 0;
    }

    // trigger is too close to the left/right of screen for up & down flyouts
    if (triggerRect.left < BORDER_RADIUS || windowSize.width - triggerRect.right < BORDER_RADIUS) {
      up = 0;
      down = 0;
    }

    var spaces = [up, right, down, left];

    // Identify best direction of available spaces
    var max = Math.max.apply(Math, spaces);

    // Chose the main direction for the flyout based on available spaces & user preference
    var mainDir = void 0;
    if (idealDirection && spaces[DIR_INDEX_MAP[idealDirection]] > 0) {
      // user pref
      mainDir = idealDirection;
    } else {
      // If no direction pref, chose the direction in which there is the most space available
      mainDir = SPACES_INDEX_MAP[spaces.indexOf(max)];
    }
    return mainDir;
  }

  /**
   * Determines the sub direction of how the flyout is positioned within the main dir
   */
  function getSubDir(flyoutSize, mainDir, triggerRect, windowSize) {
    // Now that we have the main direction, chose from 3 caret placements for that direction
    var offset = void 0;
    var triggerMid = void 0;
    var windowSpaceAvailable = void 0;

    if (mainDir === 'right' || mainDir === 'left') {
      offset = flyoutSize.height / 2;
      triggerMid = triggerRect.top + (triggerRect.bottom - triggerRect.top) / 2;
      windowSpaceAvailable = windowSize.height;
    } else {
      // (mainDir === 'up' || mainDir === 'down')
      offset = flyoutSize.width / 2;
      triggerMid = triggerRect.left + (triggerRect.right - triggerRect.left) / 2;
      windowSpaceAvailable = windowSize.width;
    }

    var aboveOrLeft = triggerMid - offset - MARGIN;
    var belowOrRight = windowSpaceAvailable - triggerMid - offset - MARGIN;
    var subDir = void 0;
    if (aboveOrLeft > 0 && belowOrRight > 0) {
      // caret should go in middle b/c it can
      subDir = 'middle';
    } else if (belowOrRight > 0) {
      // caret should go at top for left/right and left for up/down
      subDir = mainDir === 'left' || mainDir === 'right' ? 'up' : 'left';
    } else {
      // caret should go at bottom for left/right and right for up/down
      subDir = mainDir === 'left' || mainDir === 'right' ? 'down' : 'right';
    }
    return subDir;
  }

  /**
   * Calculates the amount the flyout & caret need to shift over to align with designs
   */
  function calcEdgeShifts(subDir, triggerRect, windowSize) {
    // Target values for flyout and caret shifts
    var flyoutVerticalShift = CARET_OFFSET_FROM_SIDE - (triggerRect.height - CARET_HEIGHT) / 2;
    var flyoutHorizontalShift = CARET_OFFSET_FROM_SIDE - (triggerRect.width - CARET_HEIGHT) / 2;
    var caretVerticalShift = CARET_HEIGHT;
    var caretHorizontalShift = CARET_HEIGHT;

    // Covers edge case where trigger is in a corner and we need to adjust the offset of the caret
    // to something smaller than normal in order
    var isCloseVertically = triggerRect.top - flyoutVerticalShift < 0 || triggerRect.bottom + flyoutVerticalShift > windowSize.height;
    var isCloseHorizontally = triggerRect.left - flyoutHorizontalShift < 0 || triggerRect.right + flyoutHorizontalShift > windowSize.width;
    if (isCloseVertically) {
      flyoutVerticalShift = BORDER_RADIUS - (triggerRect.height - CARET_HEIGHT) / 2;
      caretVerticalShift = BORDER_RADIUS;
    }
    if (isCloseHorizontally) {
      flyoutHorizontalShift = BORDER_RADIUS - (triggerRect.width - CARET_HEIGHT) / 2;
      caretHorizontalShift = BORDER_RADIUS;
    }

    return {
      flyout: {
        x: flyoutHorizontalShift,
        y: flyoutVerticalShift
      },
      caret: {
        x: caretHorizontalShift,
        y: caretVerticalShift
      }
    };
  }

  /**
   * Calculates flyout and caret offsets for styling
   */
  function adjustOffsets(base, edgeShift, flyoutSize, mainDir, subDir, triggerRect) {
    var flyoutLeft = base.left;
    var flyoutTop = base.top;

    var caretTop = mainDir === 'down' ? -CARET_HEIGHT : null;
    var caretRight = mainDir === 'left' ? -CARET_HEIGHT : null;
    var caretBottom = null;
    var caretLeft = mainDir === 'right' ? -CARET_HEIGHT : null;

    if (subDir === 'up') {
      flyoutTop = base.top - edgeShift.flyout.y;
      caretTop = edgeShift.caret.y;
    } else if (subDir === 'down') {
      flyoutTop = base.top - flyoutSize.height + triggerRect.height + edgeShift.flyout.y;
      caretBottom = edgeShift.caret.y;
    } else if (subDir === 'left') {
      flyoutLeft = base.left - edgeShift.flyout.x;
      caretLeft = edgeShift.caret.x;
    } else if (subDir === 'right') {
      flyoutLeft = base.left - flyoutSize.width + triggerRect.width + edgeShift.flyout.x;
      caretRight = edgeShift.caret.x;
    } else if (subDir === 'middle') {
      if (mainDir === 'left' || mainDir === 'right') {
        var triggerMid = flyoutTop + triggerRect.height / 2;
        flyoutTop = triggerMid - flyoutSize.height / 2;
        caretTop = (flyoutSize.height - CARET_HEIGHT) / 2;
      }
      if (mainDir === 'up' || mainDir === 'down') {
        var _triggerMid = flyoutLeft + triggerRect.width / 2;
        flyoutLeft = _triggerMid - flyoutSize.width / 2;
        caretLeft = (flyoutSize.width - CARET_HEIGHT) / 2;
      }
    }

    return {
      flyoutOffset: {
        top: flyoutTop,
        left: flyoutLeft
      },
      caretOffset: {
        top: caretTop,
        right: caretRight,
        bottom: caretBottom,
        left: caretLeft
      }
    };
  }

  /* Calculates baseline top and left offset for flyout */
  function baseOffsets(relativeOffset, flyoutSize, mainDir, triggerRect, windowSize) {
    var HALF_CARET = CARET_HEIGHT / 2;
    // TOP OFFSET
    var top = void 0;
    if (mainDir === 'down') {
      top = windowSize.scrollY + triggerRect.bottom + HALF_CARET;
    } else if (mainDir === 'up') {
      top = windowSize.scrollY + (triggerRect.top - flyoutSize.height - HALF_CARET);
    } else {
      // left and right
      top = windowSize.scrollY + triggerRect.top;
    }

    // LEFT OFFSET
    var left = void 0;
    if (mainDir === 'left') {
      left = windowSize.scrollX + (triggerRect.left - flyoutSize.width - HALF_CARET);
    } else if (mainDir === 'right') {
      left = windowSize.scrollX + triggerRect.right + HALF_CARET;
    } else {
      // down and up
      left = windowSize.scrollX + triggerRect.left;
    }

    // Adjusts for the relative parent container
    top -= relativeOffset.y;
    left -= relativeOffset.x;
    return { top: top, left: left };
  }

  var Contents = function (_React$Component) {
    inherits(Contents, _React$Component);

    function Contents() {
      var _ref;

      var _temp, _this, _ret;

      classCallCheck(this, Contents);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Contents.__proto__ || Object.getPrototypeOf(Contents)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        flyoutOffset: {
          top: undefined,
          right: undefined,
          bottom: undefined,
          left: undefined
        },
        caretOffset: {
          top: undefined,
          right: undefined,
          bottom: undefined,
          left: undefined
        },
        mainDir: null
      }, _this.setFlyoutPosition = function (props) {
        var relativeOffset = props.relativeOffset,
            idealDirection = props.idealDirection,
            positionRelativeToAnchor = props.positionRelativeToAnchor,
            triggerRect = props.triggerRect,
            width = props.width;

        // Scroll not needed for relative elements
        // We can't use window.scrollX / window.scrollY since it's not supported by IE11

        var scrollX = positionRelativeToAnchor ? 0 : window.pageXOffset || document.documentElement && document.documentElement.scrollLeft || 0;
        var scrollY = positionRelativeToAnchor ? 0 : window.pageYOffset || document.documentElement && document.documentElement.scrollTop || 0;

        var windowSize = {
          height: window.innerHeight,
          width: window.innerWidth,
          scrollX: scrollX,
          scrollY: scrollY
        };

        var flyoutSize = {
          height: _this.flyout ? _this.flyout.clientHeight : 0,
          width: width
        };

        // First choose one of 4 main direction
        var mainDir = getMainDir(flyoutSize, idealDirection, triggerRect, windowSize);

        // Now that we have the main direction, chose from 3 caret placements for that direction
        var subDir = getSubDir(flyoutSize, mainDir, triggerRect, windowSize);

        // Gets the base offset that positions the flyout based on the main direction only
        var base = baseOffsets(relativeOffset, flyoutSize, mainDir, triggerRect, windowSize);

        // Gets the edge shifts for the flyout
        var edgeShifts = calcEdgeShifts(subDir, triggerRect, windowSize);

        // Adjusts for the subdirection of the caret

        var _adjustOffsets = adjustOffsets(base, edgeShifts, flyoutSize, mainDir, subDir, triggerRect),
            flyoutOffset = _adjustOffsets.flyoutOffset,
            caretOffset = _adjustOffsets.caretOffset;

        _this.setState({
          caretOffset: caretOffset,
          flyoutOffset: flyoutOffset,
          mainDir: mainDir
        });
      }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(Contents, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        this.setFlyoutPosition(this.props);
        setTimeout(function () {
          if (_this2.props.shouldFocus && _this2.flyout) {
            _this2.flyout.focus();
          }
        });
        window.addEventListener('resize', this.props.onResize);
        window.addEventListener('keydown', this.props.onKeyDown);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        this.setFlyoutPosition(nextProps);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        window.removeEventListener('resize', this.props.onResize);
        window.removeEventListener('keydown', this.props.onKeyDown);
      }

      /**
       * Determines the main direciton, sub direction, and corresponding offsets needed
       * to correctly position the offset
       */

    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        var _props = this.props,
            bgColor = _props.bgColor,
            children = _props.children,
            width = _props.width;

        // Needed to prevent UI thrashing

        var visibility = this.state.mainDir === null ? 'hidden' : 'visible';
        var background = bgColor + 'Bg';
        var stroke = bgColor === 'white' ? '#efefef' : null;
        var borderColor = bgColor === 'white' ? 'lightGray' : bgColor;

        return React.createElement(
          'div',
          {
            className: styles$a.container,
            style: _extends({ stroke: stroke, visibility: visibility }, this.state.flyoutOffset)
          },
          React.createElement(
            'div',
            {
              className: classnames(colors[background], colors[borderColor], styles$a.dimensions, styles$a.contents),
              ref: function ref(c) {
                _this3.flyout = c;
              },
              tabIndex: -1
            },
            React.createElement(
              'div',
              {
                className: classnames(styles$a.dimensions, styles$a.innerContents),
                style: { width: width }
              },
              children
            ),
            React.createElement(
              'div',
              {
                className: classnames(colors[bgColor], styles$a.caret),
                style: _extends({}, this.state.caretOffset)
              },
              React.createElement(Caret, { direction: this.state.mainDir })
            )
          )
        );
      }
    }]);
    return Contents;
  }(React.Component);
  Contents.propTypes = {
    bgColor: PropTypes.oneOf(['blue', 'darkGray', 'orange', 'white']),
    children: PropTypes.node,
    idealDirection: PropTypes.oneOf(['up', 'right', 'down', 'left']),
    onKeyDown: PropTypes.func.isRequired,
    onResize: PropTypes.func.isRequired,
    relativeOffset: PropTypes.exact({ x: PropTypes.number, y: PropTypes.number }),
    positionRelativeToAnchor: PropTypes.bool,
    shouldFocus: PropTypes.bool,
    triggerRect: PropTypes.exact({
      bottom: PropTypes.number,
      height: PropTypes.number,
      left: PropTypes.number,
      right: PropTypes.number,
      top: PropTypes.number,
      width: PropTypes.number
    }),
    width: PropTypes.number
  };

  var OutsideEventBehavior = function (_React$Component) {
    inherits(OutsideEventBehavior, _React$Component);

    function OutsideEventBehavior() {
      var _ref;

      var _temp, _this, _ret;

      classCallCheck(this, OutsideEventBehavior);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = OutsideEventBehavior.__proto__ || Object.getPrototypeOf(OutsideEventBehavior)).call.apply(_ref, [this].concat(args))), _this), _this.handleClickEvent = function (event) {
        // eslint-disable-next-line react/no-find-dom-node
        var el = reactDom.findDOMNode(_this);
        if (!_this.props.onClick || !el || event.target instanceof Node && el.contains(event.target)) {
          return;
        }
        _this.props.onClick(event);
      }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(OutsideEventBehavior, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        document.addEventListener('click', this.handleClickEvent, {
          capture: true
        });
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        document.removeEventListener('click', this.handleClickEvent, {
          capture: true
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return this.props.children;
      }
    }]);
    return OutsideEventBehavior;
  }(React.Component);

  var SIZE_WIDTH_MAP = {
    xs: 185,
    sm: 230,
    md: 284,
    lg: 320,
    xl: 375
  };

  var ESCAPE_KEY_CODE = 27;

  var Controller = function (_React$Component) {
    inherits(Controller, _React$Component);

    function Controller() {
      var _ref;

      var _temp, _this, _ret;

      classCallCheck(this, Controller);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Controller.__proto__ || Object.getPrototypeOf(Controller)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        relativeOffset: {
          x: 0,
          y: 0
        },
        triggerBoundingRect: {
          bottom: 0,
          height: 0,
          left: 0,
          right: 0,
          top: 0,
          width: 0
        }
      }, _this.handleKeyDown = function (event) {
        if (event.keyCode === ESCAPE_KEY_CODE) {
          _this.props.onDismiss();
        }
      }, _this.handlePageClick = function (event) {
        if (event.target instanceof Node && _this.props.anchor && !_this.props.anchor.contains(event.target)) {
          _this.props.onDismiss();
        }
      }, _this.handleResize = function () {
        _this.updateTriggerRect(_this.props);
      }, _this.updateTriggerRect = function (props) {
        var anchor = props.anchor,
            positionRelativeToAnchor = props.positionRelativeToAnchor;

        var triggerBoundingRect = void 0;
        var relativeOffset = void 0;
        if (anchor) {
          triggerBoundingRect = anchor.getBoundingClientRect();

          // Needed for correct positioning within Contents.js
          relativeOffset = {
            x: positionRelativeToAnchor ? triggerBoundingRect.left - anchor.offsetLeft : 0,
            y: positionRelativeToAnchor ? triggerBoundingRect.top - anchor.offsetTop : 0
          };
        }

        _this.setState({ relativeOffset: relativeOffset, triggerBoundingRect: triggerBoundingRect });
      }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(Controller, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.updateTriggerRect(this.props);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        this.updateTriggerRect(nextProps);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            anchor = _props.anchor,
            bgColor = _props.bgColor,
            children = _props.children,
            idealDirection = _props.idealDirection,
            positionRelativeToAnchor = _props.positionRelativeToAnchor,
            shouldFocus = _props.shouldFocus;

        if (!anchor) {
          return null;
        }
        var size = this.props.size ? this.props.size : 'sm';
        var width = typeof size === 'string' ? SIZE_WIDTH_MAP[size] : size;
        return React.createElement(
          OutsideEventBehavior,
          { onClick: this.handlePageClick },
          React.createElement(
            Contents,
            {
              bgColor: bgColor,
              idealDirection: idealDirection,
              onKeyDown: this.handleKeyDown,
              onResize: this.handleResize,
              positionRelativeToAnchor: positionRelativeToAnchor,
              relativeOffset: this.state.relativeOffset,
              shouldFocus: shouldFocus,
              triggerRect: this.state.triggerBoundingRect,
              width: width
            },
            children
          )
        );
      }
    }]);
    return Controller;
  }(React.Component);


  Controller.propTypes = {
    anchor: PropTypes.shape({
      contains: PropTypes.func,
      getBoundingClientRect: PropTypes.func
    }),
    bgColor: PropTypes.oneOf(['blue', 'darkGray', 'orange', 'white']),
    children: PropTypes.node,
    idealDirection: PropTypes.oneOf(['up', 'right', 'down', 'left']),
    onDismiss: PropTypes.func.isRequired,
    positionRelativeToAnchor: PropTypes.bool,
    shouldFocus: PropTypes.bool,
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])] // default: sm
    )
  };

  function Flyout(props) {
    var anchor = props.anchor,
        children = props.children,
        idealDirection = props.idealDirection,
        onDismiss = props.onDismiss,
        _props$positionRelati = props.positionRelativeToAnchor,
        positionRelativeToAnchor = _props$positionRelati === undefined ? true : _props$positionRelati,
        _props$color = props.color,
        color = _props$color === undefined ? 'white' : _props$color,
        _props$shouldFocus = props.shouldFocus,
        shouldFocus = _props$shouldFocus === undefined ? true : _props$shouldFocus,
        size = props.size;


    if (!anchor) {
      return null;
    }

    return React.createElement(
      Controller,
      {
        anchor: anchor,
        bgColor: color,
        idealDirection: idealDirection,
        onDismiss: onDismiss,
        positionRelativeToAnchor: positionRelativeToAnchor,
        shouldFocus: shouldFocus,
        size: size
      },
      children
    );
  }

  Flyout.propTypes = {
    anchor: PropTypes.shape({
      contains: PropTypes.func,
      getBoundingClientRect: PropTypes.func
    }),
    children: PropTypes.node,
    idealDirection: PropTypes.oneOf(['up', 'right', 'down', 'left']),
    onDismiss: PropTypes.func.isRequired,
    positionRelativeToAnchor: PropTypes.bool,
    color: PropTypes.oneOf(['blue', 'orange', 'white', 'darkGray']),
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])] // default: sm
    )
  };

  var styles$b = { "wash": "_te _4h _4j _4m _4k _4l" };

  function zip(a, b) {
    return a.map(function (item, idx) {
      return [item, b[idx]];
    });
  }

  var BORDER_WIDTH = 2;

  var AVATAR_SIZES = {
    sm: 24,
    md: 40,
    lg: 72
  };

  var avatarLayout = function avatarLayout(n, size) {
    switch (n) {
      case 0:
      case 1:
        return [{ top: 0, left: 0, width: size, height: size, textLayout: 'center' }];
      case 2:
        return [{
          top: 0,
          left: 0,
          width: 'calc(50% - ' + BORDER_WIDTH / 2 + 'px)',
          height: size,
          textLayout: 'center'
        }, {
          top: 0,
          left: 'calc(50% + ' + BORDER_WIDTH / 2 + 'px)',
          width: 'calc(50% - ' + BORDER_WIDTH / 2 + 'px)',
          height: size,
          textLayout: 'center'
        }];
      default:
        return [{
          top: 0,
          left: 0,
          width: 'calc(50% - ' + BORDER_WIDTH / 2 + 'px)',
          height: size,
          textLayout: 'center'
        }, {
          top: 0,
          left: 'calc(50% + ' + BORDER_WIDTH / 2 + 'px)',
          width: 'calc(50%)',
          height: 'calc(50% - ' + BORDER_WIDTH / 2 + 'px)',
          textLayout: 'topLeft'
        }, {
          top: 'calc(50% + ' + BORDER_WIDTH / 2 + 'px)',
          left: 'calc(50% + ' + BORDER_WIDTH / 2 + 'px)',
          width: 'calc(50%)',
          height: 'calc(50% - ' + BORDER_WIDTH / 2 + 'px)',
          textLayout: 'bottomLeft'
        }];
    }
  };

  var degToRad = function degToRad(deg) {
    return deg * (Math.PI / 180);
  };

  var DefaultAvatar$1 = function DefaultAvatar(props) {
    var size = props.size,
        name = props.name,
        textLayout = props.textLayout;


    var quarterPadding = 'calc(' + Math.sin(degToRad(45)) + ' * (' + size + ') / 2)';

    var initial = React.createElement(
      'svg',
      {
        width: '100%',
        viewBox: '-50 -50 100 100',
        version: '1.1',
        preserveAspectRatio: 'xMidYMid meet',
        xmlns: 'http://www.w3.org/2000/svg'
      },
      React.createElement(
        'title',
        null,
        name
      ),
      React.createElement(
        'text',
        {
          fontSize: '50px',
          fill: '#fff',
          dominantBaseline: 'central',
          textAnchor: 'middle',
          className: [typography.antialiased, typography.sansSerif, typography.leadingSmall, typography.fontWeightBold].join(' ')
        },
        name ? [].concat(toConsumableArray(name))[0].toUpperCase() : ''
      )
    );
    switch (textLayout) {
      case 'bottomLeft':
        return React.createElement(
          Box,
          {
            'aria-label': name,
            color: 'gray',
            height: '100%',
            display: 'flex',
            alignItems: 'end',
            dangerouslySetInlineStyle: {
              __style: {
                paddingBottom: quarterPadding,
                paddingRight: quarterPadding
              }
            }
          },
          initial
        );
      case 'topLeft':
        return React.createElement(
          Box,
          {
            'aria-label': name,
            color: 'gray',
            height: '100%',
            display: 'flex',
            alignItems: 'start',
            dangerouslySetInlineStyle: {
              __style: {
                paddingTop: quarterPadding,
                paddingRight: quarterPadding
              }
            }
          },
          initial
        );
      default:
        return React.createElement(
          Box,
          {
            'aria-label': name,
            color: 'gray',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          },
          initial
        );
    }
  };

  function GroupAvatar(props) {
    var collaborators = props.collaborators,
        outline = props.outline,
        size = props.size;

    var avatarWidth = size ? AVATAR_SIZES[size] : '100%';
    var avatarHeight = size ? AVATAR_SIZES[size] : '';
    var positions = avatarLayout(collaborators.length, avatarWidth);
    return React.createElement(
      Box,
      {
        color: 'white',
        overflow: 'hidden',
        shape: 'circle',
        width: avatarWidth,
        height: avatarHeight,
        position: 'relative',
        dangerouslySetInlineStyle: {
          __style: _extends({}, outline ? { boxShadow: '0 0 0 2px #fff' } : {}, {
            // willChange: transform fixes a strange behavior where the border of the children
            // are not properly trimmed even though overflow: hidden is set
            willChange: 'transform'
          })
        }
      },
      React.createElement(Box, { dangerouslySetInlineStyle: { __style: { paddingBottom: '100%' } } }),
      zip(positions, collaborators).map(function (_ref, idx) {
        var _ref2 = slicedToArray(_ref, 2),
            position = _ref2[0],
            _ref2$ = _ref2[1],
            collaborator = _ref2$ === undefined ? { name: '', src: undefined } : _ref2$;

        var width = position.width,
            height = position.height,
            top = position.top,
            left = position.left,
            textLayout = position.textLayout;
        var name = collaborator.name,
            src = collaborator.src;

        return React.createElement(
          Box,
          {
            key: idx,
            position: 'absolute',
            width: width,
            height: height,
            dangerouslySetInlineStyle: { __style: { top: top, left: left } }
          },
          src ? React.createElement(Image, {
            alt: name,
            color: '#EFEFEF',
            src: src,
            naturalWidth: 1,
            naturalHeight: 1,
            fit: 'cover'
          }) : React.createElement(DefaultAvatar$1, {
            name: name,
            textLayout: textLayout,
            size: height
          }),
          React.createElement('div', { className: styles$b.wash })
        );
      })
    );
  }

  GroupAvatar.propTypes = {
    collaborators: PropTypes.arrayOf(PropTypes.exact({
      name: PropTypes.string.isRequired,
      src: PropTypes.string
    })).isRequired,
    outline: PropTypes.bool,
    size: PropTypes.oneOf(['sm', 'md', 'lg'])
  };

  var styles$c = { "Heading": "_th _0 _1 _2 _3", "fontSize1": "_ti", "fontSize2": "_tj", "fontSize3": "_tk", "fontSize4": "_tl", "fontSize5": "_tm", "smFontSize1": "_tn", "smFontSize2": "_to", "smFontSize3": "_tp", "smFontSize4": "_tq", "smFontSize5": "_tr", "mdFontSize1": "_ts", "mdFontSize2": "_tt", "mdFontSize3": "_tu", "mdFontSize4": "_tv", "mdFontSize5": "_tw", "lgFontSize1": "_tx", "lgFontSize2": "_ty", "lgFontSize3": "_tz", "lgFontSize4": "_u0", "lgFontSize5": "_u1" };

  var defaultHeadingLevels = {
    xs: 5,
    sm: 4,
    md: 3,
    lg: 2,
    xl: 1
  };

  var SIZE_SCALE$1 = {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5
  };

  function Heading(props) {
    var accessibilityLevel = props.accessibilityLevel,
        children = props.children,
        _props$color = props.color,
        color = _props$color === undefined ? 'darkGray' : _props$color,
        _props$id = props.id,
        id = _props$id === undefined ? null : _props$id,
        lgSize = props.lgSize,
        mdSize = props.mdSize,
        _props$overflow = props.overflow,
        overflow = _props$overflow === undefined ? 'breakWord' : _props$overflow,
        _props$size = props.size,
        size = _props$size === undefined ? 'md' : _props$size,
        smSize = props.smSize,
        _props$truncate = props.truncate,
        truncate = _props$truncate === undefined ? false : _props$truncate;


    var cs = classnames(styles$c.Heading, styles$c['fontSize' + SIZE_SCALE$1[size]], smSize && styles$c['smFontSize' + SIZE_SCALE$1[smSize]], mdSize && styles$c['mdFontSize' + SIZE_SCALE$1[mdSize]], lgSize && styles$c['lgFontSize' + SIZE_SCALE$1[lgSize]], colors[color], overflow === 'breakWord' && typography.breakWord, truncate && typography.truncate);

    var headingLevel = accessibilityLevel || defaultHeadingLevels[size];
    return React.createElement('h' + headingLevel, _extends({
      className: cs,
      id: id
    }, truncate && typeof children === 'string' ? { title: children } : null), children);
  }

  Heading.propTypes = {
    accessibilityLevel: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
    children: PropTypes.node,
    color: PropTypes.oneOf(['blue', 'darkGray', 'eggplant', 'gray', 'green', 'lightGray', 'maroon', 'midnight', 'navy', 'olive', 'orange', 'orchid', 'pine', 'purple', 'red', 'watermelon', 'white']),
    id: PropTypes.string,
    overflow: PropTypes.oneOf(['normal', 'breakWord']),
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    smSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    mdSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    lgSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    truncate: PropTypes.bool
  };

  var styles$d = { "button": "_u2 _45 _33 _oi _z9" };

  var styles$e = { "pog": "_um _2w _4s _50 _5a", "focused": "_un _z8", "transparent": "_uo _42", "hovered": "_up", "white": "_uq _37", "active": "_ur", "lightGray": "_us _39", "gray": "_ut _3b" };

  var SIZE_NAME_TO_PIXEL = {
    xs: 24,
    sm: 32,
    md: 40,
    lg: 48,
    xl: 56
  };

  var defaultIconButtonIconColors = {
    transparent: 'gray',
    gray: 'white',
    lightGray: 'gray',
    white: 'gray'
  };

  function Pog(props) {
    var _classnames;

    var _props$active = props.active,
        active = _props$active === undefined ? false : _props$active,
        _props$bgColor = props.bgColor,
        bgColor = _props$bgColor === undefined ? 'transparent' : _props$bgColor,
        _props$focused = props.focused,
        focused = _props$focused === undefined ? false : _props$focused,
        _props$hovered = props.hovered,
        hovered = _props$hovered === undefined ? false : _props$hovered,
        _props$iconColor = props.iconColor,
        iconColor = _props$iconColor === undefined ? defaultIconButtonIconColors[bgColor] : _props$iconColor,
        icon = props.icon,
        _props$size = props.size,
        size = _props$size === undefined ? 'md' : _props$size;


    var iconSize = SIZE_NAME_TO_PIXEL[size] / 2;

    var inlineStyle = {
      height: SIZE_NAME_TO_PIXEL[size],
      width: SIZE_NAME_TO_PIXEL[size]
    };

    var classes = classnames(styles$e.pog, styles$e[bgColor], (_classnames = {}, defineProperty(_classnames, styles$e.active, active), defineProperty(_classnames, styles$e.focused, focused), defineProperty(_classnames, styles$e.hovered, hovered && !focused && !active), _classnames));

    return React.createElement(
      'div',
      { className: classes, style: inlineStyle },
      React.createElement(
        Box,
        { shape: 'circle' },
        React.createElement(Icon, {
          color: iconColor,
          icon: icon,
          size: iconSize,
          accessibilityLabel: ''
        })
      )
    );
  }

  Pog.propTypes = {
    active: PropTypes.bool,
    bgColor: PropTypes.oneOf(['transparent', 'gray', 'lightGray', 'white']),
    focused: PropTypes.bool,
    hovered: PropTypes.bool,
    iconColor: PropTypes.oneOf(['gray', 'darkGray', 'red', 'blue', 'white']),
    icon: PropTypes.oneOf(Object.keys(icons)).isRequired,
    size: PropTypes.oneOf(Object.keys(SIZE_NAME_TO_PIXEL))
  };

  var IconButton = function (_React$Component) {
    inherits(IconButton, _React$Component);

    function IconButton() {
      var _ref;

      var _temp, _this, _ret;

      classCallCheck(this, IconButton);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = IconButton.__proto__ || Object.getPrototypeOf(IconButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        active: false,
        focused: false,
        hovered: false
      }, _this.handleBlur = function () {
        return _this.setState({ focused: false });
      }, _this.handleFocus = function () {
        _this.setState({ focused: true });
      }, _this.handleMouseDown = function () {
        _this.setState({ active: true });
      }, _this.handleMouseEnter = function () {
        _this.setState({ hovered: true });
      }, _this.handleMouseLeave = function () {
        _this.setState({
          active: false,
          hovered: false
        });
      }, _this.handleMouseUp = function () {
        _this.setState({ active: false });
      }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(IconButton, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            accessibilityExpanded = _props.accessibilityExpanded,
            accessibilityHaspopup = _props.accessibilityHaspopup,
            accessibilityLabel = _props.accessibilityLabel,
            bgColor = _props.bgColor,
            iconColor = _props.iconColor,
            icon = _props.icon,
            size = _props.size,
            onClick = _props.onClick;
        var _state = this.state,
            active = _state.active,
            focused = _state.focused,
            hovered = _state.hovered;


        return React.createElement(
          'button',
          {
            'aria-expanded': accessibilityExpanded,
            'aria-haspopup': accessibilityHaspopup,
            'aria-label': accessibilityLabel,
            className: styles$d.button,
            onBlur: this.handleBlur,
            onClick: function (_onClick) {
              function onClick(_x) {
                return _onClick.apply(this, arguments);
              }

              onClick.toString = function () {
                return _onClick.toString();
              };

              return onClick;
            }(function (event) {
              return onClick && onClick({ event: event });
            }),
            onFocus: this.handleFocus,
            onMouseDown: this.handleMouseDown,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onMouseUp: this.handleMouseUp,
            type: 'button'
          },
          React.createElement(Pog, {
            active: active,
            bgColor: bgColor,
            focused: focused,
            hovered: hovered,
            iconColor: iconColor,
            icon: icon,
            size: size
          })
        );
      }
    }]);
    return IconButton;
  }(React.Component);

  IconButton.propTypes = {
    accessibilityExpanded: PropTypes.bool,
    accessibilityHaspopup: PropTypes.bool,
    accessibilityLabel: PropTypes.string.isRequired,
    bgColor: PropTypes.oneOf(['transparent', 'gray', 'lightGray', 'white']),
    icon: PropTypes.oneOf(Object.keys(icons)).isRequired,
    iconColor: PropTypes.oneOf(['gray', 'darkGray', 'red', 'blue', 'white']),
    onClick: PropTypes.func,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
  };

  var styles$f = { "label": "_u7 _45 _z9" };

  function Label(props) {
    var children = props.children,
        htmlFor = props.htmlFor;


    return React.createElement(
      'label',
      { className: styles$f.label, htmlFor: htmlFor },
      children
    );
  }

  Label.propTypes = {
    children: PropTypes.node,
    htmlFor: PropTypes.string.isRequired
  };

  var Layer = function (_React$Component) {
    inherits(Layer, _React$Component);

    function Layer(props) {
      classCallCheck(this, Layer);

      var _this = possibleConstructorReturn(this, (Layer.__proto__ || Object.getPrototypeOf(Layer)).call(this, props));

      _this.el = document.createElement('div');
      return _this;
    }

    createClass(Layer, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (document.body) {
          document.body.appendChild(this.el);
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (document.body) {
          document.body.removeChild(this.el);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var children = this.props.children;

        return reactDom.createPortal(children, this.el);
      }
    }]);
    return Layer;
  }(React.Component);

  /*
    Much of the math and understanding about this component comes from @vjeaux's
    excellent blog post on image resizing.

    http://blog.vjeux.com/2013/image/css-container-and-cover.html

    I highly recommend you read that first before continuing on reading.
  */

  var aspectRatio = function aspectRatio(width, height) {
    return width / height;
  };

  function Letterbox(_ref) {
    var children = _ref.children,
        contentAspectRatio = _ref.contentAspectRatio,
        height = _ref.height,
        width = _ref.width;

    var viewportAspectRatio = aspectRatio(width, height);

    var contentHeight = void 0;
    var contentWidth = void 0;

    if (contentAspectRatio < viewportAspectRatio) {
      contentWidth = width;
      contentHeight = width / contentAspectRatio;
    } else {
      contentWidth = height * contentAspectRatio;
      contentHeight = height;
    }

    var offsetTop = (contentHeight - height) / -2;
    var offsetLeft = (contentWidth - width) / -2;

    return React.createElement(
      Mask,
      { width: width, height: height },
      React.createElement(
        'div',
        { style: { marginTop: offsetTop, marginLeft: offsetLeft } },
        React.createElement(
          Mask,
          { width: contentWidth, height: contentHeight },
          children
        )
      )
    );
  }

  Letterbox.propTypes = {
    children: PropTypes.node,
    contentAspectRatio: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
  };

  var styles$g = { "link": "_u8 _a", "accessibleFocusStyle": "_u9 _z7", "block": "_ua _45" };

  var TAB_KEY_CODE = 9;

  var Link = function (_React$Component) {
    inherits(Link, _React$Component);

    function Link() {
      var _ref;

      var _temp, _this, _ret;

      classCallCheck(this, Link);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Link.__proto__ || Object.getPrototypeOf(Link)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        enableFocusStyles: true
      }, _this.handleClick = function (event) {
        var _this$props = _this.props,
            href = _this$props.href,
            onClick = _this$props.onClick;

        if (onClick && href) {
          onClick({ event: event });
        }
      }, _this.handleMouseDown = function () {
        var _this$props2 = _this.props,
            href = _this$props2.href,
            target = _this$props2.target;

        if (target === 'blank' && href) {
          _this.setState({ enableFocusStyles: false });
        }
      }, _this.handleKeyUp = function (event) {
        var _this$props3 = _this.props,
            href = _this$props3.href,
            target = _this$props3.target;

        if (target === 'blank' && event.keyCode === TAB_KEY_CODE && href) {
          _this.setState({ enableFocusStyles: true });
        }
      }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(Link, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            children = _props.children,
            _props$inline = _props.inline,
            inline = _props$inline === undefined ? false : _props$inline,
            _props$target = _props.target,
            target = _props$target === undefined ? null : _props$target,
            href = _props.href;

        var rel = target === 'blank' ? 'noopener noreferrer' : null;
        var linkTarget = target ? '_' + target : null;

        return React.createElement(
          'a',
          {
            className: classnames(styles$g.link, this.state.enableFocusStyles ? styles$g.accessibleFocusStyle : '', inline ? '' : styles$g.block),
            href: href,
            onMouseDown: this.handleMouseDown,
            onKeyUp: this.handleKeyUp,
            onClick: this.handleClick,
            rel: rel,
            target: linkTarget
          },
          children
        );
      }
    }]);
    return Link;
  }(React.Component);

  Link.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired,
    inline: PropTypes.bool,
    onClick: PropTypes.func,
    target: PropTypes.oneOf([null, 'self', 'blank'])
  };

  /**
   * debounce prevents a particular function from being called until after a given
   * cooldown period (default 100ms). Every time the function is called, it resets
   * the cooldown.
   */

  function debounce(fn) {
    var threshhold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

    var deferTimer = null;

    var debounced = function debounced() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (deferTimer) {
        clearTimeout(deferTimer);
      }

      deferTimer = setTimeout(function () {
        deferTimer = null;
        fn.apply(undefined, toConsumableArray(args));
      }, threshhold);
    };

    debounced.clearTimeout = function () {
      if (deferTimer) {
        clearTimeout(deferTimer);
      }
    };

    return debounced;
  }

  /**
   * FetchItems is a logic component that renders no content itself. Its job
   * is to manage when the given fetchMore method should be called based on
   * the given scroll/size props.
   *
   * While no element is actually passed to FetchItems, it is intended to be used
   * in conjunction with a large scroll container that uses async fetching to
   * load and render additional data. Based on the height of this container and
   * its current scroll position, FetchItems is responsible for triggering future
   * fetch calls.
   */

  var FetchItems = function (_React$PureComponent) {
    inherits(FetchItems, _React$PureComponent);

    function FetchItems() {
      var _ref;

      var _temp, _this, _ret;

      classCallCheck(this, FetchItems);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = FetchItems.__proto__ || Object.getPrototypeOf(FetchItems)).call.apply(_ref, [this].concat(args))), _this), _this.check = function () {
        var _this$props = _this.props,
            containerHeight = _this$props.containerHeight,
            isAtEnd = _this$props.isAtEnd,
            isFetching = _this$props.isFetching,
            fetchMore = _this$props.fetchMore,
            scrollHeight = _this$props.scrollHeight,
            scrollTop = _this$props.scrollTop;


        if (isAtEnd || isFetching || !fetchMore) {
          return;
        }
        var scrollBuffer = containerHeight * 3;

        if (scrollTop + scrollBuffer > scrollHeight) {
          fetchMore();
        }
      }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(FetchItems, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        setTimeout(this.check);
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        this.check();
      }
    }, {
      key: 'render',
      value: function render() {
        return null;
      }
    }]);
    return FetchItems;
  }(React.PureComponent);

  FetchItems.propTypes = {
    containerHeight: PropTypes.number.isRequired,
    isAtEnd: PropTypes.bool,
    isFetching: PropTypes.bool.isRequired,
    fetchMore: PropTypes.func,
    scrollHeight: PropTypes.number.isRequired,
    scrollTop: PropTypes.number.isRequired
  };

  var styles$h = { "Masonry": "_ug _4f", "Masonry__Item": "_uh _4h", "Masonry__Item__Mounted": "_ui" };

  /**
   * ScrollContainer is a pass-through component that simply sets up an onScroll
   * handler on the given scrollContainer element (or the element that is
   * returned as result of calling the scrollContainer method). This allows for
   * the event listener subscription of the scrollContainer to be managed inside
   * the React lifecycle without adding bloat to Masonry or other onScroll
   * subscribers.
   *
   * Note that this Component renders its children without creating any
   * additional content. Also note that, while the component is built to manage
   * onScroll inside of the React lifecycle, it doesn't change onScroll events
   * or the API at all, so it could easily be adapted to other event types.
   */

  function getScrollContainer(scrollContainer) {
    return typeof scrollContainer === 'function' ? scrollContainer() : scrollContainer;
  }

  var ScrollContainer = function (_React$Component) {
    inherits(ScrollContainer, _React$Component);

    function ScrollContainer() {
      var _ref;

      var _temp, _this, _ret;

      classCallCheck(this, ScrollContainer);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ScrollContainer.__proto__ || Object.getPrototypeOf(ScrollContainer)).call.apply(_ref, [this].concat(args))), _this), _this.getScrollContainerRef = function () {
        return _this.scrollContainer;
      }, _this.handleScroll = function (event) {
        _this.props.onScroll(event);
      }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(ScrollContainer, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var scrollContainer = getScrollContainer(this.props.scrollContainer);
        if (scrollContainer) {
          this.updateScrollContainer(scrollContainer);
        }
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        var nextScrollContainer = getScrollContainer(this.props.scrollContainer);
        if (nextScrollContainer && nextScrollContainer !== this.scrollContainer) {
          this.updateScrollContainer(nextScrollContainer);
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.scrollContainer) {
          this.scrollContainer.removeEventListener('scroll', this.handleScroll);
        }
      }
    }, {
      key: 'updateScrollContainer',
      value: function updateScrollContainer(scrollContainer) {
        if (this.scrollContainer) {
          // cleanup existing scroll container if it exists
          this.scrollContainer.removeEventListener('scroll', this.handleScroll);
        }
        this.scrollContainer = scrollContainer;
        this.scrollContainer.addEventListener('scroll', this.handleScroll);
      }
    }, {
      key: 'render',
      value: function render() {
        return React.Children.only(this.props.children);
      }
    }]);
    return ScrollContainer;
  }(React.Component);

  ScrollContainer.propTypes = {
    children: PropTypes.node.isRequired,
    onScroll: PropTypes.func.isRequired,
    scrollContainer: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired
  };

  /**
   * throttle limits the number of times a function can be called to a
   * given threshhold (100ms by default). The function is always called
   * on the leading and trailing edge.
   */

  function throttle(fn) {
    var threshhold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

    var last = void 0;
    var deferTimer = void 0;
    var throttled = function throttled() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var now = Date.now();
      if (last !== undefined && now - last < threshhold) {
        clearTimeout(deferTimer);
        deferTimer = setTimeout(function () {
          last = now;
          fn.apply(undefined, toConsumableArray(args));
        }, threshhold - (now - last));
      } else {
        last = now;
        fn.apply(undefined, toConsumableArray(args));
      }
    };

    throttled.clearTimeout = function () {
      if (deferTimer) {
        clearTimeout(deferTimer);
      }
    };

    return throttled;
  }

  var MeasurementStore = function () {
    function MeasurementStore() {
      classCallCheck(this, MeasurementStore);
      this.map = new WeakMap();
    }

    createClass(MeasurementStore, [{
      key: 'get',
      value: function get$$1(key) {
        return this.map.get(key);
      }
    }, {
      key: 'has',
      value: function has(key) {
        return this.map.has(key);
      }
    }, {
      key: 'set',
      value: function set$$1(key, value) {
        this.map.set(key, value);
      }
    }, {
      key: 'reset',
      value: function reset() {
        this.map = new WeakMap();
      }
    }]);
    return MeasurementStore;
  }();

  /**
   * Measuring scroll positions, element heights, etc is different between
   * different browsers and the window object vs other DOM nodes. These
   * utils abstract away these differences.
   */

  function getElementHeight(element) {
    return element === window ? window.innerHeight : element.clientHeight;
  }

  function getWindowScrollPos() {
    if (window.scrollY !== undefined) {
      // Modern browser
      return window.scrollY;
    }
    if (document.documentElement && document.documentElement.scrollTop !== undefined) {
      // IE support.
      return document.documentElement.scrollTop;
    }
    return 0;
  }

  function getRelativeScrollTop(element) {
    return element === window ? getWindowScrollPos() : element.scrollTop - element.getBoundingClientRect().top;
  }

  function getScrollHeight(element) {
    return element === window && document.documentElement ? document.documentElement.scrollHeight : element.scrollHeight;
  }

  function getScrollPos(element) {
    return element === window ? getWindowScrollPos() : element.scrollTop;
  }

  var DefaultLayoutSymbol = Symbol('default');
  var UniformRowLayoutSymbol = Symbol('uniformRow');

  var mindex$1 = function mindex(arr) {
    var idx = 0;
    for (var i = 0; i < arr.length; i += 1) {
      if (arr[i] < arr[idx]) {
        idx = i;
      }
    }
    return idx;
  };

  var offscreen = function offscreen(width) {
    var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;
    return {
      top: -9999,
      left: -9999,
      width: width,
      height: height
    };
  };

  var defaultLayout = (function (_ref) {
    var cache = _ref.cache,
        _ref$columnWidth = _ref.columnWidth,
        columnWidth = _ref$columnWidth === undefined ? 236 : _ref$columnWidth,
        _ref$gutter = _ref.gutter,
        gutter = _ref$gutter === undefined ? 14 : _ref$gutter,
        _ref$minCols = _ref.minCols,
        minCols = _ref$minCols === undefined ? 2 : _ref$minCols,
        width = _ref.width;
    return function (items) {
      if (width == null) {
        return items.map(function () {
          return offscreen(columnWidth);
        });
      }

      var columnWidthAndGutter = columnWidth + gutter;
      var columnCount = Math.max(Math.floor((width + gutter) / columnWidthAndGutter), minCols);
      // the total height of each column
      var heights = new Array(columnCount).fill(0);
      var centerOffset = Math.max(Math.floor((width - columnWidthAndGutter * columnCount + gutter) / 2), 0);

      return items.reduce(function (acc, item) {
        var positions = acc;
        // $FlowFixMe
        var height = cache.get(item);
        var position = void 0;

        if (height == null) {
          position = offscreen(columnWidth);
        } else {
          var heightAndGutter = height + gutter;
          var col = mindex$1(heights);
          var _top = heights[col];
          var _left = col * columnWidthAndGutter + centerOffset;

          heights[col] += heightAndGutter;
          position = { top: _top, left: _left, width: columnWidth, height: height };
        }
        positions.push(position);
        return positions;
      }, []);
    };
  });

  var offscreen$1 = function offscreen(width) {
    var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;
    return {
      top: -9999,
      left: -9999,
      width: width,
      height: height
    };
  };

  var uniformRowLayout = (function (_ref) {
    var cache = _ref.cache,
        _ref$columnWidth = _ref.columnWidth,
        columnWidth = _ref$columnWidth === undefined ? 236 : _ref$columnWidth,
        _ref$gutter = _ref.gutter,
        gutter = _ref$gutter === undefined ? 14 : _ref$gutter,
        width = _ref.width,
        _ref$minCols = _ref.minCols,
        minCols = _ref$minCols === undefined ? 3 : _ref$minCols;
    return function (items) {
      if (width == null) {
        return items.map(function () {
          return offscreen$1(columnWidth);
        });
      }

      var columnWidthAndGutter = columnWidth + gutter;
      var columnCount = Math.max(Math.floor((width + gutter) / columnWidthAndGutter), minCols);

      var positions = [];
      var heights = [];

      for (var i = 0; i < items.length; i += 1) {
        var position = void 0;
        var _height = cache.get(items[i]);

        if (_height == null) {
          position = offscreen$1(columnWidth);
        } else {
          var column = i % columnCount;
          var row = Math.floor(i / columnCount);

          if (column === 0 || _height > heights[row]) {
            heights[row] = _height;
          }

          var _top = row > 0 ? heights.slice(0, row).reduce(function (sum, y) {
            return sum + y + gutter;
          }, 0) : 0;

          position = {
            top: _top,
            left: column * columnWidthAndGutter,
            width: columnWidth,
            height: _height
          };
        }
        positions.push(position);
      }
      return positions;
    };
  });

  var mindex$2 = function mindex(arr) {
    var idx = 0;
    for (var i = 0; i < arr.length; i += 1) {
      if (arr[i] < arr[idx]) {
        idx = i;
      }
    }
    return idx;
  };

  var fullWidthLayout = (function (_ref) {
    var _ref$gutter = _ref.gutter,
        gutter = _ref$gutter === undefined ? 0 : _ref$gutter,
        cache = _ref.cache,
        _ref$minCols = _ref.minCols,
        minCols = _ref$minCols === undefined ? 2 : _ref$minCols,
        _ref$idealColumnWidth = _ref.idealColumnWidth,
        idealColumnWidth = _ref$idealColumnWidth === undefined ? 240 : _ref$idealColumnWidth,
        width = _ref.width;

    if (width == null) {
      return function (items) {
        return items.map(function () {
          return {
            top: Infinity,
            left: Infinity,
            width: Infinity,
            height: Infinity
          };
        });
      };
    }

    // "This is kind of crazy!" - you
    // Yes, indeed. The "guessing" here is meant to replicate the pass that the
    // original implementation takes with CSS.
    var colguess = Math.floor(width / idealColumnWidth);
    var columnCount = Math.max(Math.floor((width - colguess * gutter) / idealColumnWidth), minCols);
    var columnWidth = Math.floor(width / columnCount);

    return function (items) {
      // the total height of each column
      var heights = new Array(columnCount).fill(0);

      return items.reduce(function (acc, item) {
        var positions = acc;
        var height = cache.get(item);
        var position = void 0;

        if (height == null) {
          position = {
            top: Infinity,
            left: Infinity,
            width: columnWidth,
            height: Infinity
          };
        } else {
          var col = mindex$2(heights);
          var _top = heights[col];
          var _left = col * columnWidth + gutter / 2;

          heights[col] += height;
          position = {
            top: _top,
            left: _left,
            width: columnWidth - gutter,
            height: height
          };
        }

        positions.push(position);
        return positions;
      }, []);
    };
  });

  var MasonryLayout = function MasonryLayout() {
    classCallCheck(this, MasonryLayout);
  };

  var UniformRowLayout = function UniformRowLayout() {
    classCallCheck(this, UniformRowLayout);
  };

  var RESIZE_DEBOUNCE = 300;
  // Multiplied against container height.
  // The amount of extra buffer space for populating visible items.
  var VIRTUAL_BUFFER_FACTOR = 0.7;

  var layoutNumberToCssDimension = function layoutNumberToCssDimension(n) {
    return n !== Infinity ? n : undefined;
  };

  /**
   * NOTE: This is to be replaced by MasonryInfiniteBeta when it is ready
   * NOTE: Please do not modify this or make sure changes in here are also
   *       replicated in MasonryBeta.
   */

  var Masonry = function (_React$Component) {
    inherits(Masonry, _React$Component);
    createClass(Masonry, null, [{
      key: 'createMeasurementStore',
      value: function createMeasurementStore() {
        return new MeasurementStore();
      }

      /**
       * Delays resize handling in case the scroll container is still being resized.
       */

    }]);

    function Masonry(props) {
      classCallCheck(this, Masonry);

      var _this = possibleConstructorReturn(this, (Masonry.__proto__ || Object.getPrototypeOf(Masonry)).call(this, props));

      _this.handleResize = debounce(function () {
        if (_this.gridWrapper) {
          _this.setState({ width: _this.gridWrapper.clientWidth });
        }
      }, RESIZE_DEBOUNCE);
      _this.updateScrollPosition = throttle(function () {
        if (!_this.scrollContainer) {
          return;
        }
        var scrollContainer = _this.scrollContainer.getScrollContainerRef();

        if (!scrollContainer) {
          return;
        }

        _this.setState({
          scrollTop: getScrollPos(scrollContainer)
        });
      });
      _this.measureContainerAsync = debounce(function () {
        _this.measureContainer();
      }, 0);

      _this.setGridWrapperRef = function (ref) {
        _this.gridWrapper = ref;
      };

      _this.setScrollContainerRef = function (ref) {
        _this.scrollContainer = ref;
      };

      _this.fetchMore = function () {
        var loadItems = _this.props.loadItems;

        if (loadItems && typeof loadItems === 'function') {
          _this.setState({
            isFetching: true
          }, function () {
            return loadItems({ from: _this.props.items.length });
          });
        }
      };

      _this.renderMasonryComponent = function (itemData, idx, position) {
        var _this$props = _this.props,
            Component = _this$props.comp,
            virtualize = _this$props.virtualize,
            virtualBoundsTop = _this$props.virtualBoundsTop,
            virtualBoundsBottom = _this$props.virtualBoundsBottom;
        var top = position.top,
            left = position.left,
            width = position.width,
            height = position.height;


        var isVisible = void 0;
        if (_this.props.scrollContainer) {
          var virtualBuffer = _this.containerHeight * VIRTUAL_BUFFER_FACTOR;
          var offsetScrollPos = _this.state.scrollTop - _this.containerOffset;
          var viewportTop = virtualBoundsTop ? offsetScrollPos - virtualBoundsTop : offsetScrollPos - virtualBuffer;
          var viewportBottom = virtualBoundsBottom ? offsetScrollPos + _this.containerHeight + virtualBoundsBottom : offsetScrollPos + _this.containerHeight + virtualBuffer;

          isVisible = !(position.top + position.height < viewportTop || position.top > viewportBottom);
        } else {
          // if no scroll container is passed in, items should always be visible
          isVisible = true;
        }

        var itemComponent = React.createElement(
          'div',
          {
            key: 'item-' + idx,
            className: [styles$h.Masonry__Item, styles$h.Masonry__Item__Mounted].join(' '),
            'data-grid-item': true,
            style: {
              top: 0,
              left: 0,
              transform: 'translateX(' + left + 'px) translateY(' + top + 'px)',
              WebkitTransform: 'translateX(' + left + 'px) translateY(' + top + 'px)',
              width: layoutNumberToCssDimension(width),
              height: layoutNumberToCssDimension(height)
            }
          },
          React.createElement(Component, { data: itemData, itemIdx: idx, isMeasuring: false })
        );

        return virtualize ? isVisible && itemComponent || null : itemComponent;
      };

      _this.containerHeight = 0;
      _this.containerOffset = 0;

      _this.state = {
        hasPendingMeasurements: props.items.some(function (item) {
          return !!item && !props.measurementStore.has(item);
        }),
        isFetching: false,
        // eslint-disable-next-line react/no-unused-state
        items: props.items,
        scrollTop: 0,
        width: undefined
      };
      return _this;
    }

    /**
     * Adds hooks after the component mounts.
     */


    createClass(Masonry, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        window.addEventListener('resize', this.handleResize);

        this.measureContainer();

        var scrollTop = this.state.scrollTop;

        if (this.scrollContainer != null) {
          var _scrollContainer = this.scrollContainer.getScrollContainerRef();
          if (_scrollContainer) {
            scrollTop = getScrollPos(_scrollContainer);
          }
        }

        this.setState(function (prevState) {
          return {
            scrollTop: scrollTop,
            width: _this2.gridWrapper ? _this2.gridWrapper.clientWidth : prevState.width
          };
        });
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps, prevState) {
        var _this3 = this;

        var _props = this.props,
            items = _props.items,
            measurementStore = _props.measurementStore;


        this.measureContainerAsync();

        if (prevState.width != null && this.state.width !== prevState.width) {
          measurementStore.reset();
        }
        // calculate whether we still have pending measurements
        var hasPendingMeasurements = items.some(function (item) {
          return !!item && !measurementStore.has(item);
        });
        if (hasPendingMeasurements || hasPendingMeasurements !== this.state.hasPendingMeasurements || prevState.width == null) {
          this.insertAnimationFrame = requestAnimationFrame(function () {
            _this3.setState({
              hasPendingMeasurements: hasPendingMeasurements
            });
          });
        }
      }

      /**
       * Remove listeners when unmounting.
       */

    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.insertAnimationFrame) {
          cancelAnimationFrame(this.insertAnimationFrame);
        }

        // Make sure async methods are cancelled.
        this.measureContainerAsync.clearTimeout();
        this.handleResize.clearTimeout();
        this.updateScrollPosition.clearTimeout();

        window.removeEventListener('resize', this.handleResize);
      }
    }, {
      key: 'measureContainer',
      value: function measureContainer() {
        if (this.scrollContainer != null) {
          var _scrollContainer2 = this.scrollContainer;

          var scrollContainerRef = _scrollContainer2.getScrollContainerRef();
          if (scrollContainerRef) {
            this.containerHeight = getElementHeight(scrollContainerRef);
            var el = this.gridWrapper;
            if (el instanceof HTMLElement) {
              var relativeScrollTop = getRelativeScrollTop(scrollContainerRef);
              this.containerOffset = el.getBoundingClientRect().top + relativeScrollTop;
            }
          }
        }
      }

      /**
       * Clear measurements/positions and force a reflow of the entire grid.
       * Only use this if absolutely necessary - ex: We need to reflow items if the
       * number of columns we would display should change after a resize.
       */

    }, {
      key: 'reflow',
      value: function reflow() {
        this.props.measurementStore.reset();
        this.measureContainer();
        this.forceUpdate();
      }
    }, {
      key: 'render',
      value: function render() {
        var _this4 = this;

        var _props2 = this.props,
            columnWidth = _props2.columnWidth,
            Component = _props2.comp,
            flexible = _props2.flexible,
            gutter = _props2.gutterWidth,
            measurementStore = _props2.measurementStore,
            items = _props2.items,
            minCols = _props2.minCols;
        var _state = this.state,
            hasPendingMeasurements = _state.hasPendingMeasurements,
            width = _state.width;


        var layout = void 0;
        if (flexible && width !== null) {
          layout = fullWidthLayout({
            gutter: gutter,
            cache: measurementStore,
            minCols: minCols,
            idealColumnWidth: columnWidth,
            width: width
          });
        } else if (this.props.layout === UniformRowLayoutSymbol || this.props.layout instanceof UniformRowLayout) {
          layout = uniformRowLayout({
            cache: measurementStore,
            columnWidth: columnWidth,
            gutter: gutter,
            minCols: minCols,
            width: width
          });
        } else {
          layout = defaultLayout({
            cache: measurementStore,
            columnWidth: columnWidth,
            gutter: gutter,
            minCols: minCols,
            width: width
          });
        }

        var gridBody = void 0;
        if (width == null && hasPendingMeasurements) {
          // When hyrdating from a server render, we don't have the width of the grid
          // and the measurement store is empty
          gridBody = React.createElement(
            'div',
            {
              className: styles$h.Masonry,
              style: { height: 0, width: '100%' },
              ref: this.setGridWrapperRef
            },
            items.filter(function (item) {
              return item;
            }).map(function (item, i) {
              return React.createElement(
                'div',
                { // keep this in sync with renderMasonryComponent
                  className: 'static',
                  'data-grid-item': true,
                  key: i,
                  style: {
                    top: 0,
                    left: 0,
                    transform: 'translateX(0px) translateY(0px)',
                    WebkitTransform: 'translateX(0px) translateY(0px)',
                    width: flexible ? undefined : layoutNumberToCssDimension(columnWidth) // we can't set a width for server rendered flexible items
                  },
                  ref: function ref(el) {
                    if (el && !flexible) {
                      // only measure flexible items on client
                      measurementStore.set(item, el.clientHeight);
                    }
                  }
                },
                React.createElement(Component, { data: item, itemIdx: i, isMeasuring: false })
              );
            })
          );
        } else if (width == null) {
          // When the width is empty (usually after a re-mount) render an empty
          // div to collect the width for layout
          gridBody = React.createElement('div', { style: { width: '100%' }, ref: this.setGridWrapperRef });
        } else {
          // Full layout is possible
          var itemsToRender = items.filter(function (item) {
            return item && measurementStore.has(item);
          });
          var itemsToMeasure = items.filter(function (item) {
            return item && !measurementStore.has(item);
          }).slice(0, minCols);

          var positions = layout(itemsToRender);
          var measuringPositions = layout(itemsToMeasure);
          // Math.max() === -Infinity when there are no positions
          var height = positions.length ? Math.max.apply(Math, toConsumableArray(positions.map(function (pos) {
            return pos.top + pos.height;
          }))) : 0;
          gridBody = React.createElement(
            'div',
            { style: { width: '100%' }, ref: this.setGridWrapperRef },
            React.createElement(
              'div',
              { className: styles$h.Masonry, style: { height: height, width: width } },
              itemsToRender.map(function (item, i) {
                return _this4.renderMasonryComponent(item, i, positions[i]);
              })
            ),
            React.createElement(
              'div',
              { className: styles$h.Masonry, style: { width: width } },
              itemsToMeasure.map(function (data, i) {
                // itemsToMeasure is always the length of minCols, so i will always be 0..minCols.length
                // we normalize the index here relative to the item list as a whole so that itemIdx is correct
                // and so that React doesnt reuse the measurement nodes
                var measurementIndex = itemsToRender.length + i;
                var position = measuringPositions[i];
                return React.createElement(
                  'div',
                  {
                    key: 'measuring-' + measurementIndex,
                    style: {
                      visibility: 'hidden',
                      position: 'absolute',
                      top: layoutNumberToCssDimension(position.top),
                      left: layoutNumberToCssDimension(position.left),
                      width: layoutNumberToCssDimension(position.width),
                      height: layoutNumberToCssDimension(position.height)
                    },
                    ref: function ref(el) {
                      if (el) {
                        measurementStore.set(data, el.clientHeight);
                      }
                    }
                  },
                  React.createElement(Component, {
                    data: data,
                    itemIdx: measurementIndex,
                    isMeasuring: true
                  })
                );
              })
            ),
            this.scrollContainer && React.createElement(FetchItems, {
              containerHeight: this.containerHeight,
              fetchMore: this.fetchMore,
              isFetching: this.state.isFetching || this.state.hasPendingMeasurements,
              scrollHeight: height,
              scrollTop: this.state.scrollTop
            })
          );
        }

        return this.props.scrollContainer ? React.createElement(
          ScrollContainer,
          {
            ref: this.setScrollContainerRef,
            onScroll: this.updateScrollPosition,
            scrollContainer: this.props.scrollContainer
          },
          gridBody
        ) : gridBody;
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(props, state) {
        var items = props.items,
            measurementStore = props.measurementStore;
        // whenever we're receiving new props, determine whether any items need to be measured
        // TODO - we should treat items as immutable

        var hasPendingMeasurements = items.some(function (item) {
          return !measurementStore.has(item);
        });

        // Shallow compare all items, if any change reflow the grid.
        for (var i = 0; i < items.length; i += 1) {
          // We've reached the end of our current props and everything matches.
          // If we hit this case it means we need to insert new items.
          if (state.items[i] === undefined) {
            return {
              hasPendingMeasurements: hasPendingMeasurements,
              items: items,
              isFetching: false
            };
          }

          // Reset grid items when:
          if (
          // An item object ref does not match.
          items[i] !== state.items[i] ||
          // Or less items than we currently have are passed in.
          items.length < state.items.length) {
            return {
              hasPendingMeasurements: hasPendingMeasurements,
              items: items,
              isFetching: false
            };
          }
        }

        // Reset items if new items array is empty.
        if (items.length === 0 && state.items.length > 0) {
          return {
            hasPendingMeasurements: hasPendingMeasurements,
            items: items,
            isFetching: false
          };
        }
        if (hasPendingMeasurements !== state.hasPendingMeasurements) {
          // make sure we always update hasPendingMeasurements
          return {
            hasPendingMeasurements: hasPendingMeasurements,
            items: items
          };
        }

        // Return null to indicate no change to state.
        return null;
      }
    }]);
    return Masonry;
  }(React.Component);

  Masonry.propTypes = {
    /**
     * The preferred/target item width. If `flexible` is set, the item width will
     * grow to fill column space, and shrink to fit if below min columns.
     */
    columnWidth: PropTypes.number,

    /**
     * The component to render.
     */
    /* eslint react/no-unused-prop-types: 0 */
    comp: PropTypes.func.isRequired,

    /**
     * The preferred/target item width. Item width will grow to fill
     * column space, and shrink to fit if below min columns.
     */
    flexible: PropTypes.bool,

    /**
     * The amount of space between each item.
     */
    gutterWidth: PropTypes.number,

    /**
     * An array of all objects to display in the grid.
     */
    items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,

    /**
     * Measurement Store
     */
    measurementStore: PropTypes.instanceOf(MeasurementStore),

    /**
     * Layout system to use for items
     */
    layout: PropTypes.oneOfType([PropTypes.instanceOf(MasonryLayout), PropTypes.instanceOf(UniformRowLayout), PropTypes.symbol]),

    /**
     * A callback which the grid calls when we need to load more items as the user scrolls.
     * The callback should update the state of the items, and pass those in as props
     * to this component.
     */
    loadItems: PropTypes.func,

    /**
     * Minimum number of columns to display.
     */
    minCols: PropTypes.number,

    /**
     * Function that the grid calls to get the scroll container.
     * This is required if the grid is expected to be scrollable.
     */
    scrollContainer: PropTypes.func,

    /**
     * Whether or not to use actual virtualization
     */
    virtualize: PropTypes.bool
  };
  Masonry.defaultProps = {
    columnWidth: 236,
    measurementStore: new MeasurementStore(),
    minCols: 3,
    layout: DefaultLayoutSymbol,
    loadItems: function loadItems() {},
    virtualize: false
  };

  var RESIZE_DEBOUNCE$1 = 300;
  // Multiplied against container height.
  // The amount of extra buffer space for populating visible items.
  var VIRTUAL_BUFFER_FACTOR$1 = 0.7;

  var layoutNumberToCssDimension$1 = function layoutNumberToCssDimension(n) {
    return n !== Infinity ? n : undefined;
  };

  function layoutClass(_ref, _ref2) {
    var columnWidth = _ref.columnWidth,
        flexible = _ref.flexible,
        gutter = _ref.gutterWidth,
        layout = _ref.layout,
        measurementStore = _ref.measurementStore,
        minCols = _ref.minCols;
    var width = _ref2.width;

    if (flexible && width !== null) {
      return fullWidthLayout({
        gutter: gutter,
        cache: measurementStore,
        minCols: minCols,
        idealColumnWidth: columnWidth,
        width: width
      });
    }
    if (layout === UniformRowLayoutSymbol || layout instanceof UniformRowLayout) {
      return uniformRowLayout({
        cache: measurementStore,
        columnWidth: columnWidth,
        gutter: gutter,
        minCols: minCols,
        width: width
      });
    }
    return defaultLayout({
      cache: measurementStore,
      columnWidth: columnWidth,
      gutter: gutter,
      minCols: minCols,
      width: width
    });
  }

  function statesForRendering(props, state) {
    var measurementStore = props.measurementStore,
        minCols = props.minCols;
    var items = state.items;

    // Full layout is possible
    // $FlowIssue https://github.com/facebook/flow/issues/6151

    var itemsToRender = items.filter(function (item) {
      return item && measurementStore.has(item);
    });

    var layout = layoutClass(props, state);
    var renderPositions = layout(itemsToRender);
    // Math.max() === -Infinity when there are no renderPositions
    var height = renderPositions.length ? Math.max.apply(Math, toConsumableArray(renderPositions.map(function (pos) {
      return pos.top + pos.height;
    }))) : 0;

    // $FlowIssue https://github.com/facebook/flow/issues/6151
    var itemsToMeasure = items.filter(function (item) {
      return item && !measurementStore.has(item);
    }).slice(0, minCols);
    var measuringPositions = layout(itemsToMeasure);

    return {
      height: height,
      itemsToRender: itemsToRender,
      itemsToMeasure: itemsToMeasure,
      measuringPositions: measuringPositions,
      renderPositions: renderPositions
    };
  }

  /**
   * The will be the new MasonryBeta that will not have any fetching concerns.
   *
   * For now, it differs with Masonry only by not having any fetching logic.
   *
   * It is in beta until it can be battle tested.
   */

  var MasonryBeta = function (_React$Component) {
    inherits(MasonryBeta, _React$Component);

    function MasonryBeta(props) {
      classCallCheck(this, MasonryBeta);

      var _this = possibleConstructorReturn(this, (MasonryBeta.__proto__ || Object.getPrototypeOf(MasonryBeta)).call(this, props));

      _this.handleResize = debounce(function () {
        if (_this.gridWrapper) {
          _this.setState({ width: _this.gridWrapper.clientWidth });
        }
      }, RESIZE_DEBOUNCE$1);
      _this.updateScrollPosition = throttle(function () {
        if (!_this.scrollContainer) {
          return;
        }
        var scrollContainer = _this.scrollContainer.getScrollContainerRef();

        if (!scrollContainer) {
          return;
        }

        _this.setState({
          scrollTop: getScrollPos(scrollContainer)
        });

        _this.handleVirtualizationWindowUpdate();
      });
      _this.measureContainerAsync = debounce(function () {
        _this.measureContainer();
      }, 0);

      _this.setGridWrapperRef = function (ref) {
        _this.gridWrapper = ref;
      };

      _this.setScrollContainerRef = function (ref) {
        _this.scrollContainer = ref;
      };

      _this.handleVirtualizationWindowUpdate = function () {
        var _this$state = _this.state,
            height = _this$state.height,
            width = _this$state.width;

        if (typeof _this.props.onVirtualizationWindowUpdate === 'function' && _this.containerHeight) {
          var _viewport = {
            top: _this.state.scrollTop,
            left: 0,
            height: _this.containerHeight,
            width: width || 0
          };
          var _content = {
            top: _this.containerOffset,
            left: 0,
            height: height,
            width: width || 0
          };

          _this.props.onVirtualizationWindowUpdate(_content, _viewport);
        }
      };

      _this.handleOnAutoMeasuringUpdate = function (state) {
        if (_this.props.onAutoMeasuringUpdate) {
          _this.props.onAutoMeasuringUpdate(state);
        }
      };

      _this.renderMasonryComponent = function (itemData, idx, position) {
        var _this$props = _this.props,
            Component = _this$props.comp,
            virtualize = _this$props.virtualize,
            virtualBoundsTop = _this$props.virtualBoundsTop,
            virtualBoundsBottom = _this$props.virtualBoundsBottom;
        var top = position.top,
            left = position.left,
            width = position.width,
            height = position.height;


        var isVisible = void 0;
        if (_this.props.scrollContainer) {
          var virtualBuffer = _this.containerHeight * VIRTUAL_BUFFER_FACTOR$1;
          var offsetScrollPos = _this.state.scrollTop - _this.containerOffset;
          var viewportTop = virtualBoundsTop ? offsetScrollPos - virtualBoundsTop : offsetScrollPos - virtualBuffer;
          var viewportBottom = virtualBoundsBottom ? offsetScrollPos + _this.containerHeight + virtualBoundsBottom : offsetScrollPos + _this.containerHeight + virtualBuffer;

          isVisible = !(position.top + position.height < viewportTop || position.top > viewportBottom);
        } else {
          // if no scroll container is passed in, items should always be visible
          isVisible = true;
        }

        var itemComponent = React.createElement(
          'div',
          {
            key: 'item-' + idx,
            className: [styles$h.Masonry__Item, styles$h.Masonry__Item__Mounted].join(' '),
            'data-grid-item': true,
            style: {
              top: 0,
              left: 0,
              transform: 'translateX(' + left + 'px) translateY(' + top + 'px)',
              WebkitTransform: 'translateX(' + left + 'px) translateY(' + top + 'px)',
              width: layoutNumberToCssDimension$1(width),
              height: layoutNumberToCssDimension$1(height)
            }
          },
          React.createElement(Component, { data: itemData, itemIdx: idx, isMeasuring: false })
        );

        return virtualize ? isVisible && itemComponent || null : itemComponent;
      };

      _this.containerHeight = 0;
      _this.containerOffset = 0;

      _this.state = {
        hasPendingMeasurements: props.items.some(function (item) {
          return !!item && !props.measurementStore.has(item);
        }),
        height: 0,
        itemsToRender: [],
        itemsToMeasure: [],
        // eslint-disable-next-line react/no-unused-state
        items: props.items,
        measuringPositions: [],
        renderPositions: [],
        scrollTop: 0,
        width: undefined
      };
      return _this;
    }

    /**
     * Adds hooks after the component mounts.
     */

    /**
     * Delays resize handling in case the scroll container is still being resized.
     */


    createClass(MasonryBeta, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        window.addEventListener('resize', this.handleResize);

        this.measureContainer();

        var scrollTop = this.state.scrollTop;

        if (this.scrollContainer != null) {
          var _scrollContainer = this.scrollContainer.getScrollContainerRef();
          if (_scrollContainer) {
            scrollTop = getScrollPos(_scrollContainer);
          }
        }

        this.setState(function (prevState) {
          var width = _this2.gridWrapper ? _this2.gridWrapper.clientWidth : prevState.width;
          var stateWithWidth = _extends({}, _this2.state, { width: width });
          return _extends({
            scrollTop: scrollTop,
            width: width
          }, statesForRendering(_this2.props, stateWithWidth));
        });

        // need to make sure parent component has the correct pending measurement value
        this.handleOnAutoMeasuringUpdate(this.state.hasPendingMeasurements ? 'measuring' : 'idle');
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps, prevState) {
        var _this3 = this;

        var _props = this.props,
            items = _props.items,
            measurementStore = _props.measurementStore;


        this.measureContainerAsync();

        if (prevState.width != null && this.state.width !== prevState.width) {
          measurementStore.reset();
        }
        // calculate whether we still have pending measurements
        var hasPendingMeasurements = items.some(function (item) {
          return !!item && !measurementStore.has(item);
        });

        if (hasPendingMeasurements && !prevState.hasPendingMeasurements) {
          this.handleOnAutoMeasuringUpdate('measuring');
        } else if (!hasPendingMeasurements && prevState.hasPendingMeasurements) {
          this.handleOnAutoMeasuringUpdate('idle');
        }
        this.handleVirtualizationWindowUpdate();

        if (hasPendingMeasurements || hasPendingMeasurements !== this.state.hasPendingMeasurements || prevState.width == null) {
          this.insertAnimationFrame = requestAnimationFrame(function () {
            var renderingStates = statesForRendering(_this3.props, _this3.state);
            _this3.setState(_extends({
              hasPendingMeasurements: hasPendingMeasurements
            }, renderingStates));
          });
        } else if (hasPendingMeasurements || prevState.items !== items) {
          this.insertAnimationFrame = requestAnimationFrame(function () {
            var renderingStates = statesForRendering(_this3.props, _this3.state);
            _this3.setState(_extends({}, renderingStates));
          });
        }
      }

      /**
       * Remove listeners when unmounting.
       */

    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.insertAnimationFrame) {
          cancelAnimationFrame(this.insertAnimationFrame);
        }

        // Make sure async methods are cancelled.
        this.measureContainerAsync.clearTimeout();
        this.handleResize.clearTimeout();
        this.updateScrollPosition.clearTimeout();

        window.removeEventListener('resize', this.handleResize);
      }
    }, {
      key: 'measureContainer',
      value: function measureContainer() {
        if (this.scrollContainer != null) {
          var _scrollContainer2 = this.scrollContainer;

          var scrollContainerRef = _scrollContainer2.getScrollContainerRef();
          if (scrollContainerRef) {
            this.containerHeight = getElementHeight(scrollContainerRef);
            var el = this.gridWrapper;
            if (el instanceof HTMLElement) {
              var relativeScrollTop = getRelativeScrollTop(scrollContainerRef);
              this.containerOffset = el.getBoundingClientRect().top + relativeScrollTop;
            }
          }
        }
      }

      /**
       * Clear measurements/positions and force a reflow of the entire grid.
       * Only use this if absolutely necessary - ex: We need to reflow items if the
       * number of columns we would display should change after a resize.
       */

    }, {
      key: 'reflow',
      value: function reflow() {
        this.props.measurementStore.reset();
        this.measureContainer();
        this.handleVirtualizationWindowUpdate();
        this.forceUpdate();
      }
    }, {
      key: 'render',
      value: function render() {
        var _this4 = this;

        var _props2 = this.props,
            columnWidth = _props2.columnWidth,
            Component = _props2.comp,
            flexible = _props2.flexible,
            measurementStore = _props2.measurementStore,
            items = _props2.items;
        var _state = this.state,
            hasPendingMeasurements = _state.hasPendingMeasurements,
            height = _state.height,
            itemsToMeasure = _state.itemsToMeasure,
            itemsToRender = _state.itemsToRender,
            measuringPositions = _state.measuringPositions,
            renderPositions = _state.renderPositions,
            width = _state.width;

        var gridBody = void 0;
        if (width == null && hasPendingMeasurements) {
          // When hyrdating from a server render, we don't have the width of the grid
          // and the measurement store is empty
          gridBody = React.createElement(
            'div',
            {
              className: styles$h.Masonry,
              style: { height: 0, width: '100%' },
              ref: this.setGridWrapperRef
            },
            items.filter(function (item) {
              return item;
            }).map(function (item, i) {
              return React.createElement(
                'div',
                { // keep this in sync with renderMasonryComponent
                  className: 'static',
                  'data-grid-item': true,
                  key: i,
                  style: {
                    top: 0,
                    left: 0,
                    transform: 'translateX(0px) translateY(0px)',
                    WebkitTransform: 'translateX(0px) translateY(0px)',
                    width: flexible ? undefined : layoutNumberToCssDimension$1(columnWidth) // we can't set a width for server rendered flexible items
                  },
                  ref: function ref(el) {
                    if (el && !flexible) {
                      // only measure flexible items on client
                      measurementStore.set(item, el.clientHeight);
                    }
                  }
                },
                React.createElement(Component, { data: item, itemIdx: i, isMeasuring: false })
              );
            })
          );
        } else if (width == null) {
          // When the width is empty (usually after a re-mount) render an empty
          // div to collect the width for layout
          gridBody = React.createElement('div', { style: { width: '100%' }, ref: this.setGridWrapperRef });
        } else {
          gridBody = React.createElement(
            'div',
            { style: { width: '100%' }, ref: this.setGridWrapperRef },
            React.createElement(
              'div',
              { className: styles$h.Masonry, style: { height: height, width: width } },
              itemsToRender.map(function (item, i) {
                return (
                  // $FlowFixMe this is the right definition, it an Array<T>
                  _this4.renderMasonryComponent(item, i, renderPositions[i])
                );
              })
            ),
            React.createElement(
              'div',
              { className: styles$h.Masonry, style: { width: width } },
              itemsToMeasure.map(function (data, i) {
                // itemsToMeasure is always the length of minCols, so i will always be 0..minCols.length
                // we normalize the index here relative to the item list as a whole so that itemIdx is correct
                // and so that React doesnt reuse the measurement nodes
                var measurementIndex = itemsToRender.length + i;
                var position = measuringPositions[i];
                return React.createElement(
                  'div',
                  {
                    key: 'measuring-' + measurementIndex,
                    style: {
                      visibility: 'hidden',
                      position: 'absolute',
                      top: layoutNumberToCssDimension$1(position.top),
                      left: layoutNumberToCssDimension$1(position.left),
                      width: layoutNumberToCssDimension$1(position.width),
                      height: layoutNumberToCssDimension$1(position.height)
                    },
                    ref: function ref(el) {
                      if (el) {
                        measurementStore.set(data, el.clientHeight);
                      }
                    }
                  },
                  React.createElement(Component, {
                    data: data,
                    itemIdx: measurementIndex,
                    isMeasuring: true
                  })
                );
              })
            )
          );
        }

        return this.props.scrollContainer ? React.createElement(
          ScrollContainer,
          {
            ref: this.setScrollContainerRef,
            onScroll: this.updateScrollPosition,
            scrollContainer: this.props.scrollContainer
          },
          gridBody
        ) : gridBody;
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(props, state) {
        var items = props.items,
            measurementStore = props.measurementStore;
        // whenever we're receiving new props, determine whether any items need to be measured
        // TODO - we should treat items as immutable

        var hasPendingMeasurements = items.some(function (item) {
          return item && !measurementStore.has(item);
        });

        var newState = _extends({}, state, {
          hasPendingMeasurements: hasPendingMeasurements,
          items: items
        });

        // Shallow compare all items, if any change reflow the grid.
        for (var i = 0; i < items.length; i += 1) {
          // We've reached the end of our current props and everything matches.
          // If we hit this case it means we need to insert new items.
          if (state.items[i] === undefined) {
            return _extends({
              hasPendingMeasurements: hasPendingMeasurements,
              items: items
            }, statesForRendering(props, newState));
          }

          // Reset grid items when:
          if (
          // An item object ref does not match.
          items[i] !== state.items[i] ||
          // Or less items than we currently have are passed in.
          items.length < state.items.length) {
            return _extends({
              hasPendingMeasurements: hasPendingMeasurements,
              items: items
            }, statesForRendering(props, newState));
          }
        }

        // Reset items if new items array is empty.
        if (items.length === 0 && state.items.length > 0) {
          return _extends({
            hasPendingMeasurements: hasPendingMeasurements,
            items: items
          }, statesForRendering(props, newState));
        }
        if (hasPendingMeasurements !== state.hasPendingMeasurements) {
          // make sure we always update hasPendingMeasurements
          return _extends({
            hasPendingMeasurements: hasPendingMeasurements,
            items: items
          }, statesForRendering(props, newState));
        }

        // Return null to indicate no change to state.
        return null;
      }
    }]);
    return MasonryBeta;
  }(React.Component);

  MasonryBeta.propTypes = {
    /**
     * The preferred/target item width. If `flexible` is set, the item width will
     * grow to fill column space, and shrink to fit if below min columns.
     */
    columnWidth: PropTypes.number,

    /**
     * The component to render.
     */
    /* eslint react/no-unused-prop-types: 0 */
    comp: PropTypes.func.isRequired,

    /**
     * The preferred/target item width. Item width will grow to fill
     * column space, and shrink to fit if below min columns.
     */
    flexible: PropTypes.bool,

    /**
     * The amount of space between each item.
     */
    gutterWidth: PropTypes.number,

    /**
     * An array of all objects to display in the grid.
     */
    items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,

    /**
     * Measurement Store
     */
    measurementStore: PropTypes.instanceOf(MeasurementStore),

    /**
     * Layout system to use for items
     */
    layout: PropTypes.oneOfType([PropTypes.instanceOf(MasonryLayout), PropTypes.instanceOf(UniformRowLayout), PropTypes.symbol]),

    /**
     * A callback which the grid calls when we need to load more items as the user scrolls.
     * The callback should update the state of the items, and pass those in as props
     * to this component.
     */
    loadItems: PropTypes.func,

    /**
     * Minimum number of columns to display.
     */
    minCols: PropTypes.number,

    /**
     * Function that the grid calls to get the scroll container.
     * This is required if the grid is expected to be scrollable.
     */
    scrollContainer: PropTypes.func,

    /**
     * Whether or not to use actual virtualization
     */
    virtualize: PropTypes.bool
  };
  MasonryBeta.defaultProps = {
    columnWidth: 236,
    measurementStore: new MeasurementStore(),
    minCols: 3,
    layout: DefaultLayoutSymbol,
    loadItems: function loadItems() {},
    virtualize: false
  };

  /**
   * This MasonryInfiniteBeta is backward compatible with Masonry and
   * serves to help with migrating to a Masrony that doesn't have
   * the scrol fetch concerns.
   *
   * It is in beta so that it can be battle tested.
   *
   */
  var MasonryInfiniteBeta = function (_React$Component) {
    inherits(MasonryInfiniteBeta, _React$Component);
    createClass(MasonryInfiniteBeta, null, [{
      key: 'createMeasurementStore',
      value: function createMeasurementStore() {
        return new MeasurementStore();
      }
    }]);

    function MasonryInfiniteBeta(props) {
      classCallCheck(this, MasonryInfiniteBeta);

      var _this = possibleConstructorReturn(this, (MasonryInfiniteBeta.__proto__ || Object.getPrototypeOf(MasonryInfiniteBeta)).call(this, props));

      _this.onVirtualizationWindowUpdate = function (content, viewport) {
        var _this$state = _this.state,
            containerHeight = _this$state.containerHeight,
            scrollTop = _this$state.scrollTop,
            scrollHeight = _this$state.scrollHeight;

        if (viewport.height !== containerHeight || viewport.top !== scrollTop || content.height !== scrollHeight) {
          _this.setState({
            containerHeight: viewport.height,
            scrollTop: viewport.top,
            scrollHeight: content.height
          });
        }
      };

      _this.setRef = function (ref) {
        if (ref) {
          _this.gridRef = ref;
        }
      };

      _this.fetchMore = function () {
        var loadItems = _this.props.loadItems;

        if (loadItems && typeof loadItems === 'function') {
          _this.setState({
            isFetching: true
          }, function () {
            return loadItems({ from: _this.props.items.length });
          });
        }
      };

      _this.handleOnAutoMeasuringUpdate = function (state) {
        var hasPendingMeasurements = state === 'measuring';
        if (_this.state.hasPendingMeasurements !== hasPendingMeasurements) {
          _this.setState({ hasPendingMeasurements: hasPendingMeasurements });
        }

        if (typeof _this.props.onAutoMeasuringUpdate === 'function') {
          _this.props.onAutoMeasuringUpdate(state);
        }
      };

      _this.reflow = function () {
        if (_this.gridRef) {
          _this.gridRef.reflow();
        }
      };

      _this.handleResize = function () {
        if (_this.gridRef) {
          _this.gridRef.handleResize();
        }
      };

      _this.state = {
        containerHeight: 0,
        hasPendingMeasurements: false,
        isFetching: false,
        // eslint-disable-next-line react/no-unused-state
        items: props.items,
        scrollTop: 0,
        scrollHeight: 0
      };
      return _this;
    }

    /**
     * Content layer and Viewport layer is as defined in Collection.
     */


    createClass(MasonryInfiniteBeta, [{
      key: 'render',
      value: function render() {
        return this.props.scrollContainer ? React.createElement(
          React.Fragment,
          null,
          React.createElement(FetchItems, {
            containerHeight: this.state.containerHeight,
            fetchMore: this.fetchMore,
            isFetching: this.state.isFetching || this.state.hasPendingMeasurements,
            scrollHeight: this.state.scrollHeight,
            scrollTop: this.state.scrollTop
          }),
          React.createElement(MasonryBeta, _extends({}, this.props, {
            onVirtualizationWindowUpdate: this.onVirtualizationWindowUpdate,
            onAutoMeasuringUpdate: this.handleOnAutoMeasuringUpdate,
            ref: this.setRef
          }))
        ) : React.createElement(MasonryBeta, _extends({}, this.props, { ref: this.setRef }));
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(props, state) {
        var items = props.items;

        // assume immutable items

        if (props.items !== state.items) {
          return {
            items: items,
            isFetching: false
          };
        }

        // Return null to indicate no change to state.
        return null;
      }
    }]);
    return MasonryInfiniteBeta;
  }(React.Component);

  MasonryInfiniteBeta.defaultProps = MasonryBeta.defaultProps;

  var NoScrollBehavior = function (_React$Component) {
    inherits(NoScrollBehavior, _React$Component);

    function NoScrollBehavior(props) {
      classCallCheck(this, NoScrollBehavior);

      var _this = possibleConstructorReturn(this, (NoScrollBehavior.__proto__ || Object.getPrototypeOf(NoScrollBehavior)).call(this, props));

      _this.prevOverflow = null;
      return _this;
    }

    createClass(NoScrollBehavior, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (typeof window !== 'undefined') {
          this.prevOverflow = window.document.body.style.overflow;
          window.document.body.style.overflow = 'hidden';
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (typeof window !== 'undefined') {
          window.document.body.style.overflow = this.prevOverflow;
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return this.props.children;
      }
    }]);
    return NoScrollBehavior;
  }(React.Component);

  function queryFocusableAll(el) {
    var selector = ['a[href]', 'area[href]', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'iframe', 'object', 'embed', '[tabindex="-1"]', '[tabindex="0"]', '[contenteditable]', 'audio[controls]', 'video[controls]', 'summary'].join(',');
    return el.querySelectorAll(selector);
  }

  var focusElement = function focusElement(el) {
    if (typeof el.focus === 'function') {
      el.focus();
    }
  };

  var TrapFocusBehavior = function (_React$Component) {
    inherits(TrapFocusBehavior, _React$Component);

    function TrapFocusBehavior() {
      var _ref;

      var _temp, _this, _ret;

      classCallCheck(this, TrapFocusBehavior);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = TrapFocusBehavior.__proto__ || Object.getPrototypeOf(TrapFocusBehavior)).call.apply(_ref, [this].concat(args))), _this), _this.setElRef = function (el) {
        if (el) {
          _this.el = el;
        }
      }, _this.handleFocus = function (event) {
        if (!_this.el || event.target instanceof Node && _this.el.contains(event.target)) {
          return;
        }

        event.stopPropagation();
        event.preventDefault();
        _this.focusFirstChild();
      }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(TrapFocusBehavior, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.previouslyFocusedEl = document.activeElement;
        this.focusFirstChild();
        document.addEventListener('focus', this.handleFocus, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        document.removeEventListener('focus', this.handleFocus, true);
        if (this.previouslyFocusedEl) {
          focusElement(this.previouslyFocusedEl);
        }
      }
    }, {
      key: 'focusFirstChild',
      value: function focusFirstChild() {
        var el = this.el;

        if (el) {
          focusElement(queryFocusableAll(el)[0]);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          { ref: this.setElRef },
          this.props.children
        );
      }
    }]);
    return TrapFocusBehavior;
  }(React.Component);

  var styles$i = { "Backdrop": "_uj _4h _4m _4j _4k _4l _zb _3d", "container": "_uk _4g _4q _4s _5a _4m _4j _50 _y6", "wrapper": "_ul _4f _49 _4s _37 _2y _70 _6y" };

  var SIZE_WIDTH_MAP$1 = {
    sm: 414,
    md: 544,
    lg: 804
  };

  var ESCAPE_KEY_CODE$1 = 27;

  var Backdrop = function Backdrop(_ref) {
    var children = _ref.children;
    return React.createElement(
      React.Fragment,
      null,
      React.createElement('div', { className: styles$i.Backdrop }),
      children
    );
  };

  var Modal = function (_React$Component) {
    inherits(Modal, _React$Component);

    function Modal() {
      var _ref2;

      var _temp, _this, _ret;

      classCallCheck(this, Modal);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref2 = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref2, [this].concat(args))), _this), _this.handleOutsideClick = function () {
        _this.props.onDismiss();
      }, _this.handleCloseClick = function () {
        _this.props.onDismiss();
      }, _this.handleKeyUp = function (event) {
        if (event.keyCode === ESCAPE_KEY_CODE$1) {
          _this.props.onDismiss();
        }
      }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(Modal, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        window.addEventListener('keyup', this.handleKeyUp);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        window.removeEventListener('keyup', this.handleKeyUp);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            accessibilityCloseLabel = _props.accessibilityCloseLabel,
            accessibilityModalLabel = _props.accessibilityModalLabel,
            children = _props.children,
            footer = _props.footer,
            heading = _props.heading,
            _props$role = _props.role,
            role = _props$role === undefined ? 'dialog' : _props$role,
            _props$size = _props.size,
            size = _props$size === undefined ? 'sm' : _props$size;

        var width = SIZE_WIDTH_MAP$1[size];

        return React.createElement(
          NoScrollBehavior,
          null,
          React.createElement(
            TrapFocusBehavior,
            null,
            React.createElement(
              'div',
              {
                'aria-label': accessibilityModalLabel,
                className: styles$i.container,
                role: role
              },
              React.createElement(
                Backdrop,
                null,
                React.createElement(
                  OutsideEventBehavior,
                  { onClick: this.handleOutsideClick },
                  React.createElement(
                    'div',
                    { className: styles$i.wrapper, tabIndex: -1, style: { width: width } },
                    React.createElement(
                      Box,
                      {
                        flex: 'grow',
                        position: 'relative',
                        display: 'flex',
                        direction: 'column',
                        width: '100%'
                      },
                      React.createElement(
                        Box,
                        { fit: true },
                        role === 'dialog' ? React.createElement(
                          Box,
                          {
                            dangerouslySetInlineStyle: {
                              __style: { paddingLeft: 50, paddingRight: 50 }
                            },
                            display: 'flex',
                            justifyContent: 'center',
                            paddingY: 5
                          },
                          React.createElement(
                            Heading,
                            { size: 'xs', accessibilityLevel: 1 },
                            heading
                          )
                        ) : React.createElement(
                          Box,
                          { display: 'flex', padding: 4 },
                          React.createElement(
                            Heading,
                            { size: 'sm', accessibilityLevel: 1 },
                            heading
                          )
                        ),
                        role === 'dialog' && React.createElement(
                          Box,
                          { padding: 2, position: 'absolute', top: true, right: true },
                          React.createElement(IconButton, {
                            accessibilityLabel: accessibilityCloseLabel,
                            icon: 'cancel',
                            onClick: this.handleCloseClick
                          })
                        ),
                        role === 'dialog' && React.createElement(Divider, null)
                      ),
                      React.createElement(
                        Box,
                        { flex: 'grow', overflow: 'auto', position: 'relative' },
                        children
                      ),
                      React.createElement(
                        Box,
                        { fit: true },
                        footer && React.createElement(
                          Box,
                          null,
                          role === 'dialog' && React.createElement(Divider, null),
                          React.createElement(
                            Box,
                            { padding: 4 },
                            footer
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        );
      }
    }]);
    return Modal;
  }(React.Component);

  Modal.propTypes = {
    children: PropTypes.node,
    accessibilityCloseLabel: PropTypes.string.isRequired,
    footer: PropTypes.node,
    heading: PropTypes.string.isRequired,
    accessibilityModalLabel: PropTypes.string.isRequired,
    onDismiss: PropTypes.func,
    role: PropTypes.oneOf(['alertdialog', 'dialog']),
    size: PropTypes.oneOf(['sm', 'md', 'lg'])
  };

  var styles$j = { "innerCircle": "_uu _4q", "PulseAnimation": "_uv", "outerCircle": "_uw", "AppearAnimation": "_ux" };

  function Pulsar(props) {
    var paused = props.paused,
        _props$size = props.size,
        size = _props$size === undefined ? 135 : _props$size;


    return React.createElement(
      Box,
      {
        dangerouslySetInlineStyle: {
          __style: {
            animationIterationCount: paused ? 0 : 'infinite',
            outline: 'none',
            boxShadow: 'none'
          }
        },
        display: paused ? 'none' : 'block',
        height: size,
        position: 'relative',
        width: size
      },
      React.createElement(
        'div',
        { className: styles$j.innerCircle },
        React.createElement('div', { className: styles$j.outerCircle })
      )
    );
  }

  Pulsar.propTypes = {
    paused: PropTypes.bool,
    size: PropTypes.number
  };

  var styles$k = { "RadioButton": "_uy _45 _4q _2w _4s _50 _5a", "RadioButtonSm": "_uz", "RadioButtonMd": "_v0", "RadioButtonIsFocused": "_v1 _z8", "RadioButtonWhiteBg": "_v2 _37", "RadioButtonLightGrayBg": "_v3 _39", "Input": "_v4 _4h _od", "InputEnabled": "_v5 _z9", "InputSm": "_v6", "InputMd": "_v7", "Check": "_v8 _2w", "CheckEnabled": "_v9 _3d", "CheckDisabled": "_va _3b" };

  var RadioButton = function (_React$Component) {
    inherits(RadioButton, _React$Component);

    function RadioButton() {
      var _ref;

      var _temp, _this, _ret;

      classCallCheck(this, RadioButton);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = RadioButton.__proto__ || Object.getPrototypeOf(RadioButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        focused: false
      }, _this.handleChange = function (event) {
        var checked = event.target.checked;

        _this.props.onChange({ checked: checked, event: event });
      }, _this.handleBlur = function () {
        return _this.setState({ focused: false });
      }, _this.handleFocus = function () {
        _this.setState({ focused: true });
      }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(RadioButton, [{
      key: 'render',
      value: function render() {
        var _classnames, _classnames2, _classnames3;

        var _props = this.props,
            checked = _props.checked,
            disabled = _props.disabled,
            id = _props.id,
            name = _props.name,
            size = _props.size,
            value = _props.value;

        return React.createElement(
          'div',
          {
            className: classnames(styles$k.RadioButton, (_classnames = {}, defineProperty(_classnames, styles$k.RadioButtonIsFocused, this.state.focused), defineProperty(_classnames, styles$k.RadioButtonSm, size === 'sm'), defineProperty(_classnames, styles$k.RadioButtonMd, size === 'md'), defineProperty(_classnames, styles$k.RadioButtonWhiteBg, !disabled || checked), defineProperty(_classnames, styles$k.RadioButtonLightGrayBg, disabled && !checked), _classnames))
          },
          React.createElement('input', {
            checked: checked,
            className: classnames(styles$k.Input, (_classnames2 = {}, defineProperty(_classnames2, styles$k.InputEnabled, !disabled), defineProperty(_classnames2, styles$k.InputSm, size === 'sm'), defineProperty(_classnames2, styles$k.InputMd, size === 'md'), _classnames2)),
            disabled: disabled,
            id: id,
            name: name,
            onBlur: this.handleBlur,
            onChange: this.handleChange,
            onFocus: this.handleFocus,
            type: 'radio',
            value: value
          }),
          checked && React.createElement('div', {
            className: classnames(styles$k.Check, (_classnames3 = {}, defineProperty(_classnames3, styles$k.CheckSm, size === 'sm'), defineProperty(_classnames3, styles$k.CheckMd, size === 'md'), defineProperty(_classnames3, styles$k.CheckEnabled, !disabled), defineProperty(_classnames3, styles$k.CheckDisabled, disabled), _classnames3))
          })
        );
      }
    }]);
    return RadioButton;
  }(React.Component);

  RadioButton.propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['sm', 'md'])
  };
  RadioButton.defaultProps = {
    checked: false,
    disabled: false,
    size: 'md'
  };

  var ScrollFetch = function (_React$PureComponent) {
    inherits(ScrollFetch, _React$PureComponent);

    function ScrollFetch() {
      var _ref;

      var _temp, _this, _ret;

      classCallCheck(this, ScrollFetch);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ScrollFetch.__proto__ || Object.getPrototypeOf(ScrollFetch)).call.apply(_ref, [this].concat(args))), _this), _this.updatePosition = throttle(function () {
        _this.setState(_this.getScrollState());
      }), _this.state = {
        containerHeight: 0,
        scrollHeight: 0,
        scrollTop: 0
      }, _this.getScrollHeight = function () {
        var container = _this.props.container;

        if (!container) {
          return 0;
        }
        return getScrollHeight(container);
      }, _temp), possibleConstructorReturn(_this, _ret);
    }
    /**
     * Fetches additional items if needed.
     */


    createClass(ScrollFetch, [{
      key: 'componentDidMount',


      /**
       * Adds scroll listener after the component mounts.
       */
      value: function componentDidMount() {
        var _this2 = this;

        var container = this.props.container;

        if (!container) {
          return;
        }
        setTimeout(function () {
          _this2.setState(_extends({
            containerHeight: getElementHeight(container)
          }, _this2.getScrollState()));
        });
      }

      /**
       * Update scroll buffer and check after the component updates.
       */

    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        // setTimeout so the parent component can calculate renderHeight().
        this.updatePosition();
      }

      /**
       * Returns the scrollable content height.
       */

    }, {
      key: 'getScrollState',
      value: function getScrollState() {
        var _props = this.props,
            container = _props.container,
            renderHeight = _props.renderHeight;

        if (!container) {
          return null;
        }
        var scrollHeight = renderHeight || this.getScrollHeight;

        return {
          scrollHeight: scrollHeight(),
          scrollTop: getScrollPos(container)
        };
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            containerHeight = _state.containerHeight,
            scrollHeight = _state.scrollHeight,
            scrollTop = _state.scrollTop;
        var _props2 = this.props,
            container = _props2.container,
            fetchMore = _props2.fetchMore,
            isAtEnd = _props2.isAtEnd,
            isFetching = _props2.isFetching;


        var props = {
          containerHeight: containerHeight,
          fetchMore: fetchMore,
          isAtEnd: isAtEnd,
          isFetching: isFetching,
          scrollHeight: scrollHeight,
          scrollTop: scrollTop
        };

        if (!container || isAtEnd) {
          return null;
        }
        return React.createElement(
          ScrollContainer,
          {
            onScroll: this.updatePosition,
            scrollContainer: container
          },
          React.createElement(FetchItems, props)
        );
      }
    }]);
    return ScrollFetch;
  }(React.PureComponent);


  ScrollFetch.propTypes = {
    /**
     * The scroll container to use. Defaults to window.
     */
    container: PropTypes.shape({
      addEventListener: PropTypes.func,
      removeEventListener: PropTypes.func
    }),
    renderHeight: PropTypes.func,
    isAtEnd: PropTypes.bool,
    isFetching: PropTypes.bool,
    fetchMore: PropTypes.func
  };

  ScrollFetch.defaultProps = {
    container: typeof window !== 'undefined' ? window : null
  };

  var styles$l = { "input": "_vb _z7 _2q _4q _4o _3c _w7 _0 _1 _2 _wa _6 _39 _y6", "clear": "_vc _33 _z9 _6s _6r _4f" };

  var SearchField = function (_React$Component) {
    inherits(SearchField, _React$Component);

    function SearchField() {
      var _ref;

      var _temp, _this, _ret;

      classCallCheck(this, SearchField);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = SearchField.__proto__ || Object.getPrototypeOf(SearchField)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        focused: false,
        hovered: false
      }, _this.handleChange = function (event) {
        _this.props.onChange({
          value: event.currentTarget.value,
          syntheticEvent: event
        });
      }, _this.handleClear = function (event) {
        _this.props.onChange({
          value: '',
          syntheticEvent: event
        });
      }, _this.handleMouseEnter = function () {
        return _this.setState({ hovered: true });
      }, _this.handleMouseLeave = function () {
        return _this.setState({ hovered: false });
      }, _this.handleFocus = function (event) {
        _this.setState({ focused: true });

        if (_this.props.onFocus) {
          _this.props.onFocus({
            value: event.currentTarget.value,
            syntheticEvent: event
          });
        }
      }, _this.handleBlur = function (event) {
        _this.setState({ focused: false });

        if (_this.props.onBlur) {
          _this.props.onBlur({ event: event });
        }
      }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(SearchField, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            accessibilityLabel = _props.accessibilityLabel,
            autoComplete = _props.autoComplete,
            id = _props.id,
            placeholder = _props.placeholder,
            value = _props.value;

        // This mirrors the built in browser behavior. If there's a value, show the
        // clear button if you're hovering or if you've focused on the field

        var showClear = (this.state.focused || this.state.hovered) && value && value.length > 0;

        return React.createElement(
          Box,
          {
            display: 'flex',
            position: 'relative',
            alignItems: 'center',
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur,
            color: 'white'
          },
          React.createElement(
            Box,
            {
              dangerouslySetInlineStyle: {
                __style: {
                  pointerEvents: 'none',
                  // Added the following lines for Safari support
                  top: '50%',
                  transform: 'translateY(-50%)'
                }
              },
              position: 'absolute',
              left: true,
              paddingX: 4
            },
            React.createElement(Icon, { icon: 'search', accessibilityLabel: '' })
          ),
          React.createElement('input', {
            'aria-label': accessibilityLabel,
            autoComplete: autoComplete,
            className: styles$l.input,
            id: id,
            onChange: this.handleChange,
            placeholder: placeholder,
            role: 'searchbox',
            type: 'search',
            value: value
          }),
          showClear && React.createElement(
            Box,
            { position: 'absolute', right: true, top: true },
            React.createElement(
              'button',
              {
                className: styles$l.clear,
                onClick: this.handleClear,
                tabIndex: -1,
                type: 'button'
              },
              React.createElement(Icon, { icon: 'clear', accessibilityLabel: '' })
            )
          )
        );
      }
    }]);
    return SearchField;
  }(React.Component);

  SearchField.propTypes = {
    accessibilityLabel: PropTypes.string.isRequired,
    autoComplete: PropTypes.oneOf(['on', 'off', 'username', 'name']),
    id: PropTypes.string.isRequired,
    onBlur: PropTypes.func,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string
  };

  var styles$m = { "SegmentedControl": "_vd _4q _39 _4s _5b", "md": "_ve _4o", "lg": "_vf _4p", "item": "_vg _z7 _5j _od _33 _z9", "itemIsNotSelected": "_vh", "itemIsSelected": "_vi _37" };

  function SegmentedControl(props) {
    var _classnames;

    var items = props.items,
        onChange = props.onChange,
        selectedItemIndex = props.selectedItemIndex,
        _props$size = props.size,
        size = _props$size === undefined ? 'md' : _props$size;

    return React.createElement(
      'div',
      {
        className: classnames(styles$m.SegmentedControl, (_classnames = {}, defineProperty(_classnames, styles$m.md, size === 'md'), defineProperty(_classnames, styles$m.lg, size === 'lg'), _classnames)),
        role: 'tablist'
      },
      items.map(function (item, i) {
        var _classnames2;

        var isSelected = i === selectedItemIndex;
        var cs = classnames(styles$m.item, (_classnames2 = {}, defineProperty(_classnames2, styles$m.itemIsNotSelected, !isSelected), defineProperty(_classnames2, styles$m.itemIsSelected, isSelected), _classnames2));
        return React.createElement(
          'button',
          {
            'aria-selected': isSelected,
            className: cs,
            key: i,
            onClick: function onClick(e) {
              return onChange({ event: e, activeIndex: i });
            },
            role: 'tab',
            type: 'button'
          },
          typeof item === 'string' ? React.createElement(
            Text,
            {
              bold: true,
              color: isSelected ? 'darkGray' : 'gray',
              align: 'center',
              size: size
            },
            item
          ) : React.createElement(
            Box,
            { display: 'flex', justifyContent: 'center' },
            item
          )
        );
      })
    );
  }

  SegmentedControl.propTypes = {
    items: PropTypes.arrayOf(PropTypes.node).isRequired,
    onChange: PropTypes.func.isRequired,
    selectedItemIndex: PropTypes.number.isRequired
  };

  var styles$n = { "select": "_vj _z7 _w7 _0 _1 _2 _wa _3c _z9 _4f _4o _42 _y6", "normal": "_vk", "errored": "_vl", "enabled": "_vm _3c _37", "disabled": "_vn _3a _39" };

  var SelectList = function (_React$Component) {
    inherits(SelectList, _React$Component);

    function SelectList() {
      var _ref;

      var _temp, _this, _ret;

      classCallCheck(this, SelectList);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = SelectList.__proto__ || Object.getPrototypeOf(SelectList)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        focused: false,
        errorIsOpen: false
      }, _this.handleOnChange = function (event) {
        if (event.target instanceof HTMLSelectElement && _this.props.value !== event.target.value) {
          _this.props.onChange({ event: event, value: event.target.value });

          if (_this.props.errorMessage) {
            _this.setState({ errorIsOpen: false });
          }
        }
      }, _this.handleBlur = function () {
        if (_this.props.errorMessage) {
          _this.setState({ errorIsOpen: false });
        }
      }, _this.handleFocus = function () {
        if (_this.props.errorMessage) {
          _this.setState({ errorIsOpen: true });
        }
      }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(SelectList, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            disabled = _props.disabled,
            errorMessage = _props.errorMessage,
            id = _props.id,
            idealErrorDirection = _props.idealErrorDirection,
            name = _props.name,
            options = _props.options,
            placeholder = _props.placeholder,
            value = _props.value;


        var classes = classnames(styles$n.select, disabled ? styles$n.disabled : styles$n.enabled, errorMessage ? styles$n.errored : styles$n.normal);

        return React.createElement(
          Box,
          {
            color: disabled ? 'lightGray' : 'white',
            dangerouslySetInlineStyle: { __style: { borderRadius: 4 } },
            display: 'flex',
            position: 'relative',
            width: '100%'
          },
          React.createElement(
            Box,
            {
              alignItems: 'center',
              bottom: true,
              dangerouslySetInlineStyle: {
                __style: { paddingRight: 14, paddingTop: 2 }
              },
              display: 'flex',
              position: 'absolute',
              right: true,
              top: true
            },
            React.createElement(Icon, {
              icon: 'arrow-down',
              size: 12,
              color: disabled ? 'gray' : 'darkGray',
              accessibilityLabel: ''
            })
          ),
          React.createElement(
            'select',
            {
              'aria-describedby': errorMessage && this.state.focused ? id + '-gestalt-error' : null,
              'aria-invalid': errorMessage ? 'true' : 'false',
              className: classes,
              disabled: disabled,
              id: id,
              name: name,
              onBlur: this.handleBlur,
              onFocus: this.handleFocus,
              onChange: this.handleOnChange,
              ref: function ref(c) {
                _this2.select = c;
              },
              value: value
            },
            placeholder && !value && React.createElement(
              'option',
              { selected: true, disabled: true, value: true, hidden: true },
              placeholder
            ),
            options.map(function (option) {
              return React.createElement(
                'option',
                { key: option.value, value: option.value },
                option.label
              );
            })
          ),
          errorMessage && this.state.errorIsOpen && React.createElement(
            Flyout,
            {
              anchor: this.select,
              color: 'orange',
              idealDirection: idealErrorDirection,
              onDismiss: function onDismiss() {
                return _this2.setState({ errorIsOpen: false });
              },
              shouldFocus: false,
              size: 'sm'
            },
            React.createElement(
              Box,
              { padding: 3 },
              React.createElement(
                Text,
                { bold: true, color: 'white' },
                React.createElement(
                  'span',
                  { id: id + '-gestalt-error' },
                  errorMessage
                )
              )
            )
          )
        );
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(props, state) {
        if (props.errorMessage !== state.errorMessage) {
          return {
            errorIsOpen: !!props.errorMessage,
            errorMessage: props.errorMessage
          };
        }

        return null;
      }
    }]);
    return SelectList;
  }(React.Component);

  SelectList.propTypes = {
    disabled: PropTypes.bool,
    errorMessage: PropTypes.string,
    id: PropTypes.string.isRequired,
    idealErrorDirection: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.exact({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })),
    placeholder: PropTypes.string,
    value: PropTypes.string
  };
  SelectList.defaultProps = {
    disabled: false,
    idealErrorDirection: 'right',
    options: []
  };

  var styles$o = { "icon": "_vo _45", "spin": "_vp" };

  var SIZE = 40;

  function Spinner(_ref) {
    var accessibilityLabel = _ref.accessibilityLabel,
        show = _ref.show;

    return show ? React.createElement(
      Box,
      { xs: { display: 'flex' }, justifyContent: 'around', overflow: 'hidden' },
      React.createElement(
        'div',
        { className: styles$o.icon },
        React.createElement(Icon, {
          icon: 'knoop',
          accessibilityLabel: accessibilityLabel,
          size: SIZE
        })
      )
    ) : React.createElement('div', null);
  }

  Spinner.propTypes = {
    show: PropTypes.bool.isRequired,
    accessibilityLabel: PropTypes.string.isRequired
  };

  function Sticky(props) {
    var _props$dangerouslySet = props.dangerouslySetZIndex,
        dangerouslySetZIndex = _props$dangerouslySet === undefined ? { __zIndex: 1 } : _props$dangerouslySet,
        children = props.children;

    var style = {
      top: props.top != null ? props.top : undefined,
      left: props.left != null ? props.left : undefined,
      right: props.right != null ? props.right : undefined,
      bottom: props.bottom != null ? props.bottom : undefined,
      // eslint-disable-next-line no-underscore-dangle
      zIndex: dangerouslySetZIndex.__zIndex
    };
    return React.createElement(
      'div',
      { className: layout.sticky, style: style },
      children
    );
  }

  Sticky.propTypes = {
    children: PropTypes.node,
    dangerouslySetZIndex: PropTypes.exact({
      __zIndex: PropTypes.number
    }),
    top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    right: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  };

  var styles$p = { "switch": "_vq _45 _4q _4f", "focused": "_vr _z8", "switchDarkGray": "_vs _3d", "switchGray": "_vt _3b", "switchLightGray": "_vu _39", "switchWhite": "_vv _37", "slider": "_vw _4q _4h _37 _2w", "sliderRight": "_vx", "sliderLeft": "_vy", "sliderDark": "_vz", "sliderLight": "_w0", "checkbox": "_w1 _4h _y6 _od _33 _oi", "checkboxEnabled": "_w2 _z9" };

  var Switch = function (_React$Component) {
    inherits(Switch, _React$Component);

    function Switch() {
      var _ref;

      var _temp, _this, _ret;

      classCallCheck(this, Switch);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Switch.__proto__ || Object.getPrototypeOf(Switch)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        focused: false
      }, _this.handleBlur = function () {
        return _this.setState({ focused: false });
      }, _this.handleChange = function (event) {
        var checked = event.target.checked;

        _this.props.onChange({
          event: event,
          value: checked
        });
      }, _this.handleFocus = function () {
        _this.setState({ focused: true });
      }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(Switch, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            disabled = _props.disabled,
            id = _props.id,
            name = _props.name,
            switched = _props.switched;


        var switchStyles = classnames(styles$p.switch, defineProperty({}, styles$p.focused, this.state.focused),
        // eslint-disable-next-line no-nested-ternary
        disabled ? switched ? styles$p.switchGray : styles$p.switchLightGray : switched ? styles$p.switchDarkGray : styles$p.switchWhite);

        var sliderStyles = classnames(styles$p.slider, switched ? styles$p.sliderRight : styles$p.sliderLeft, switched && !disabled ? styles$p.sliderDark : styles$p.sliderLight);

        var inputStyles = classnames(styles$p.checkbox, defineProperty({}, styles$p.checkboxEnabled, !disabled));

        return React.createElement(
          'div',
          { className: switchStyles },
          React.createElement('input', {
            checked: switched,
            className: inputStyles,
            disabled: disabled,
            id: id,
            name: name,
            onBlur: this.handleBlur,
            onChange: this.handleChange,
            onFocus: this.handleFocus,
            type: 'checkbox'
          }),
          React.createElement('div', { className: sliderStyles })
        );
      }
    }]);
    return Switch;
  }(React.Component);

  Switch.propTypes = {
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    switched: PropTypes.bool
  };
  Switch.defaultProps = {
    disabled: false,
    switched: false
  };

  var styles$q = { "Tabs": "_w3 _4s", "tab": "_w4 _z7 _4q _4o _4s _4w undefined _5a _33 _2x _od _z9", "tabIsNotActive": "_w5 _42 _3a", "tabIsActive": "_w6 _39 _3c" };

  var Tabs = function (_React$Component) {
    inherits(Tabs, _React$Component);

    function Tabs() {
      var _ref;

      var _temp, _this, _ret;

      classCallCheck(this, Tabs);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        focusedTabIndex: undefined,
        hoveredTabIndex: undefined
      }, _this.handleTabClick = function (i, e) {
        var onChange = _this.props.onChange;

        onChange({ activeTabIndex: i, event: e });
      }, _this.handleTabFocus = function (i) {
        return _this.setState({ focusedTabIndex: i });
      }, _this.handleTabBlur = function () {
        return _this.setState({ focusedTabIndex: undefined });
      }, _this.handleTabMouseEnter = function (i) {
        return _this.setState({ hoveredTabIndex: i });
      }, _this.handleTabMouseLeave = function () {
        return _this.setState({ hoveredTabIndex: undefined });
      }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(Tabs, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            tabs = _props.tabs,
            activeTabIndex = _props.activeTabIndex,
            wrap = _props.wrap;
        var _state = this.state,
            focusedTabIndex = _state.focusedTabIndex,
            hoveredTabIndex = _state.hoveredTabIndex;

        return React.createElement(
          'div',
          {
            className: classnames(styles$q.Tabs, wrap && layout.flexWrap),
            role: 'tablist'
          },
          tabs.map(function (_ref2, i) {
            var _classnames;

            var text = _ref2.text,
                href = _ref2.href;

            var isActive = i === activeTabIndex;
            var isHovered = i === hoveredTabIndex;
            var isFocused = i === focusedTabIndex;
            var cs = classnames(styles$q.tab, (_classnames = {}, defineProperty(_classnames, styles$q.tabIsNotActive, !isActive), defineProperty(_classnames, styles$q.tabIsActive, isActive), _classnames));
            return React.createElement(
              'a',
              {
                'aria-selected': isActive,
                className: cs,
                href: href,
                key: href,
                onClick: function onClick(e) {
                  return _this2.handleTabClick(i, e);
                },
                onFocus: function onFocus() {
                  return _this2.handleTabFocus(i);
                },
                onBlur: _this2.handleTabBlur,
                onMouseEnter: function onMouseEnter() {
                  return _this2.handleTabMouseEnter(i);
                },
                onMouseLeave: _this2.handleTabMouseLeave,
                role: 'tab'
              },
              React.createElement(
                Text,
                {
                  bold: true,
                  color: isActive || isHovered || isFocused ? 'darkGray' : 'gray',
                  size: 'md'
                },
                text
              )
            );
          })
        );
      }
    }]);
    return Tabs;
  }(React.Component);

  Tabs.propTypes = {
    activeTabIndex: PropTypes.number.isRequired,
    tabs: PropTypes.arrayOf(PropTypes.exact({
      text: PropTypes.node,
      href: PropTypes.string
    })).isRequired,
    onChange: PropTypes.func.isRequired,
    wrap: PropTypes.bool
  };

  var styles$r = { "textArea": "_ws _z7 _4q _w7 _0 _1 _2 _wa _4 _y6", "normal": "_wt", "errored": "_wu", "enabled": "_wv _3c _37", "disabled": "_ww _3a _39" };

  var TextArea = function (_React$Component) {
    inherits(TextArea, _React$Component);

    function TextArea() {
      var _ref;

      var _temp, _this, _ret;

      classCallCheck(this, TextArea);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = TextArea.__proto__ || Object.getPrototypeOf(TextArea)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        focused: false,
        errorIsOpen: false
      }, _this.handleChange = function (event) {
        _this.props.onChange({
          event: event,
          value: event.currentTarget.value
        });

        if (_this.props.errorMessage) {
          _this.setState({ errorIsOpen: true });
        }
      }, _this.handleBlur = function (event) {
        if (_this.props.errorMessage) {
          _this.setState({ errorIsOpen: false });
        }
        if (_this.props.onBlur) {
          _this.props.onBlur({
            event: event,
            value: event.currentTarget.value
          });
        }
      }, _this.handleFocus = function (event) {
        if (_this.props.errorMessage) {
          _this.setState({ errorIsOpen: true });
        }
        if (_this.props.onFocus) {
          _this.props.onFocus({
            event: event,
            value: event.currentTarget.value
          });
        }
      }, _this.handleKeyDown = function (event) {
        if (_this.props.onKeyDown) {
          _this.props.onKeyDown({
            event: event,
            value: event.currentTarget.value
          });
        }
      }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(TextArea, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            disabled = _props.disabled,
            errorMessage = _props.errorMessage,
            hasError = _props.hasError,
            id = _props.id,
            idealErrorDirection = _props.idealErrorDirection,
            name = _props.name,
            placeholder = _props.placeholder,
            rows = _props.rows,
            value = _props.value;


        var classes = classnames(styles$r.textArea, disabled ? styles$r.disabled : styles$r.enabled, hasError || errorMessage ? styles$r.errored : styles$r.normal);

        return React.createElement(
          'span',
          null,
          React.createElement('textarea', {
            'aria-describedby': errorMessage && this.state.focused ? id + '-gestalt-error' : null,
            'aria-invalid': errorMessage || hasError ? 'true' : 'false',
            className: classes,
            disabled: disabled,
            id: id,
            name: name,
            onBlur: this.handleBlur,
            onChange: this.handleChange,
            onFocus: this.handleFocus,
            onKeyDown: this.handleKeyDown,
            placeholder: placeholder,
            ref: function ref(c) {
              _this2.textarea = c;
            },
            rows: rows,
            value: value
          }),
          errorMessage && this.state.errorIsOpen ? React.createElement(
            Flyout,
            {
              anchor: this.textarea,
              color: 'orange',
              idealDirection: idealErrorDirection,
              onDismiss: function onDismiss() {
                return _this2.setState({ errorIsOpen: false });
              },
              shouldFocus: false,
              size: 'sm'
            },
            React.createElement(
              Box,
              { padding: 3 },
              React.createElement(
                Text,
                { bold: true, color: 'white' },
                React.createElement(
                  'span',
                  { id: id + '-gestalt-error' },
                  errorMessage
                )
              )
            )
          ) : null
        );
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(props, state) {
        if (props.errorMessage !== state.errorMessage) {
          return {
            errorIsOpen: !!props.errorMessage,
            errorMessage: props.errorMessage
          };
        }

        return null;
      }
    }]);
    return TextArea;
  }(React.Component);

  TextArea.propTypes = {
    disabled: PropTypes.bool,
    errorMessage: PropTypes.string,
    hasError: PropTypes.bool,
    id: PropTypes.string.isRequired,
    idealErrorDirection: PropTypes.string,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    placeholder: PropTypes.string,
    rows: PropTypes.number,
    value: PropTypes.string
  };
  TextArea.defaultProps = {
    disabled: false,
    hasError: false,
    idealErrorDirection: 'right',
    rows: 3
  };

  var styles$s = { "textField": "_wx _z7 _4q _4o _w7 _0 _1 _2 _wa _y6", "normal": "_wy", "errored": "_wz", "enabled": "_x0 _3c _37", "disabled": "_x1 _3a _39" };

  var TextField = function (_React$Component) {
    inherits(TextField, _React$Component);

    function TextField() {
      var _ref;

      var _temp, _this, _ret;

      classCallCheck(this, TextField);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = TextField.__proto__ || Object.getPrototypeOf(TextField)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        focused: false,
        errorIsOpen: false
      }, _this.handleChange = function (event) {
        _this.props.onChange({
          event: event,
          value: event.currentTarget.value
        });
      }, _this.handleBlur = function (event) {
        if (_this.props.errorMessage) {
          _this.setState({ errorIsOpen: false });
        }
        if (_this.props.onBlur) {
          _this.props.onBlur({
            event: event,
            value: event.currentTarget.value
          });
        }
      }, _this.handleFocus = function (event) {
        if (_this.props.errorMessage) {
          _this.setState({ errorIsOpen: true });
        }
        if (_this.props.onFocus) {
          _this.props.onFocus({
            event: event,
            value: event.currentTarget.value
          });
        }
      }, _this.handleKeyDown = function (event) {
        if (_this.props.onKeyDown) {
          _this.props.onKeyDown({
            event: event,
            value: event.currentTarget.value
          });
        }
      }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(TextField, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            autoComplete = _props.autoComplete,
            disabled = _props.disabled,
            errorMessage = _props.errorMessage,
            hasError = _props.hasError,
            id = _props.id,
            idealErrorDirection = _props.idealErrorDirection,
            name = _props.name,
            placeholder = _props.placeholder,
            type = _props.type,
            value = _props.value;


        var classes = classnames(styles$s.textField, disabled ? styles$s.disabled : styles$s.enabled, hasError || errorMessage ? styles$s.errored : styles$s.normal);

        // type='number' doesn't work on ios safari without a pattern
        // https://stackoverflow.com/questions/14447668/input-type-number-is-not-showing-a-number-keypad-on-ios
        var pattern = type === 'number' ? '\\d*' : undefined;

        return React.createElement(
          'span',
          null,
          React.createElement('input', {
            'aria-describedby': errorMessage && this.state.focused ? id + '-gestalt-error' : null,
            'aria-invalid': errorMessage || hasError ? 'true' : 'false',
            autoComplete: autoComplete,
            className: classes,
            disabled: disabled,
            id: id,
            name: name,
            onBlur: this.handleBlur,
            onChange: this.handleChange,
            onFocus: this.handleFocus,
            onKeyDown: this.handleKeyDown,
            pattern: pattern,
            placeholder: placeholder,
            ref: function ref(c) {
              _this2.textfield = c;
            },
            type: type,
            value: value
          }),
          errorMessage && this.state.errorIsOpen && React.createElement(
            Flyout,
            {
              anchor: this.textfield,
              color: 'orange',
              idealDirection: idealErrorDirection,
              onDismiss: function onDismiss() {
                return _this2.setState({ errorIsOpen: false });
              },
              shouldFocus: false,
              size: 'sm'
            },
            React.createElement(
              Box,
              { padding: 3 },
              React.createElement(
                Text,
                { bold: true, color: 'white' },
                React.createElement(
                  'span',
                  { id: id + '-gestalt-error' },
                  errorMessage
                )
              )
            )
          )
        );
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(props, state) {
        if (props.errorMessage !== state.errorMessage) {
          return {
            errorIsOpen: !!props.errorMessage,
            errorMessage: props.errorMessage
          };
        }

        return null;
      }
    }]);
    return TextField;
  }(React.Component);

  TextField.propTypes = {
    autoComplete: PropTypes.oneOf(['current-password', 'on', 'off', 'username']),
    disabled: PropTypes.bool,
    errorMessage: PropTypes.string,
    hasError: PropTypes.bool,
    id: PropTypes.string.isRequired,
    idealErrorDirection: PropTypes.string,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(['date', 'email', 'number', 'password', 'text', 'url']),
    value: PropTypes.string
  };
  TextField.defaultProps = {
    disabled: false,
    hasError: false,
    idealErrorDirection: 'right',
    type: 'text'
  };

  function Toast(props) {
    var _props$color = props.color,
        color = _props$color === undefined ? 'darkGray' : _props$color,
        icon = props.icon,
        thumbnail = props.thumbnail,
        text = props.text;


    var contents = void 0;
    // Confirmation Toasts
    if (text instanceof Array && text.length > 1) {
      contents = React.createElement(
        Box,
        { xs: { display: 'flex' } },
        React.createElement(
          Box,
          { xs: { display: 'flexColumn' }, flex: 'none', justifyContent: 'center' },
          thumbnail ? React.createElement(
            Mask,
            { shape: 'rounded', height: 48, width: 48 },
            thumbnail
          ) : null
        ),
        React.createElement(
          Box,
          {
            xs: { display: 'flexColumn' },
            justifyContent: 'center',
            dangerouslySetInlineStyle: { __style: { paddingLeft: 10 } }
          },
          React.createElement(
            Box,
            {
              dangerouslySetInlineStyle: { __style: { fontWeight: 'normal' } }
            },
            React.createElement(
              Text,
              { color: 'white', size: 'lg' },
              text[0]
            )
          ),
          React.createElement(
            Text,
            { bold: true, color: 'white', size: 'lg' },
            text[1]
          )
        )
      );
    } else {
      // Toasts as Guides
      contents = React.createElement(
        Box,
        {
          xs: { display: 'flex' },
          justifyContent: 'between',
          alignItems: 'center'
        },
        React.createElement(
          Text,
          { bold: true, color: 'white', size: 'lg' },
          text
        ),
        icon && React.createElement(
          Box,
          { dangerouslySetInlineStyle: { __style: { paddingLeft: 24 } } },
          React.createElement(Icon, { accessibilityLabel: '', color: 'white', icon: icon, size: 36 })
        )
      );
    }

    return React.createElement(
      Box,
      { marginBottom: 3, paddingX: 4, maxWidth: 376, width: '100vw' },
      React.createElement(
        Box,
        { color: color, fit: true, paddingX: 8, paddingY: 5, shape: 'pill' },
        contents
      )
    );
  }

  Toast.propTypes = {
    color: PropTypes.oneOf(['darkGray', 'orange']),
    icon: PropTypes.oneOf(['arrow-circle-forward']), // leaving open to additional icons in the future
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
    thumbnail: PropTypes.node
  };

  function Tooltip(props) {
    var anchor = props.anchor,
        children = props.children,
        idealDirection = props.idealDirection,
        onDismiss = props.onDismiss,
        _props$positionRelati = props.positionRelativeToAnchor,
        positionRelativeToAnchor = _props$positionRelati === undefined ? true : _props$positionRelati,
        _props$size = props.size,
        size = _props$size === undefined ? 'md' : _props$size;


    if (!anchor) {
      return null;
    }

    return React.createElement(
      Controller,
      {
        anchor: anchor,
        bgColor: 'darkGray',
        idealDirection: idealDirection,
        positionRelativeToAnchor: positionRelativeToAnchor,
        onDismiss: onDismiss,
        size: size
      },
      React.createElement(
        Box,
        { column: 12, padding: 3 },
        children
      )
    );
  }

  Tooltip.propTypes = {
    anchor: PropTypes.shape({
      contains: PropTypes.func,
      getBoundingClientRect: PropTypes.func
    }),
    children: PropTypes.node,
    idealDirection: PropTypes.oneOf(['up', 'right', 'down', 'left']),
    onDismiss: PropTypes.func.isRequired,
    positionRelativeToAnchor: PropTypes.bool,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
  };

  var styles$t = { "touchable": "_x2 _z7", "fullHeight": "_x3", "fullWidth": "_x4 _y6", "square": "_x5 _2v", "circle": "_x6 _2w", "rounded": "_x7 _2y", "roundedTop": "_x8 _2z", "roundedRight": "_x9 _30", "roundedBottom": "_xa _31", "roundedLeft": "_xb _32", "pill": "_xc _2x", "pointer": "_xd _z9", "zoomIn": "_xe _za", "zoomOut": "_xf _zb", "copy": "_xg _zc", "move": "_xh _zd", "noDrop": "_xi _ze", "grab": "_xj _zf", "grabbing": "_xk _zg" };

  var SPACE_CHAR_CODE = 32;
  var ENTER_CHAR_CODE = 13;

  var Touchable = function (_React$Component) {
    inherits(Touchable, _React$Component);

    function Touchable() {
      var _ref;

      var _temp, _this, _ret;

      classCallCheck(this, Touchable);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Touchable.__proto__ || Object.getPrototypeOf(Touchable)).call.apply(_ref, [this].concat(args))), _this), _this.handleKeyPress = function (event) {
        var onTouch = _this.props.onTouch;
        // Check to see if space or enter were pressed

        if (onTouch && (event.charCode === SPACE_CHAR_CODE || event.charCode === ENTER_CHAR_CODE)) {
          // Prevent the default action to stop scrolling when space is pressed
          event.preventDefault();
          onTouch({ event: event });
        }
      }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(Touchable, [{
      key: 'render',
      value: function render() {
        var _classnames;

        var _props = this.props,
            children = _props.children,
            _props$fullWidth = _props.fullWidth,
            fullWidth = _props$fullWidth === undefined ? true : _props$fullWidth,
            fullHeight = _props.fullHeight,
            _props$mouseCursor = _props.mouseCursor,
            mouseCursor = _props$mouseCursor === undefined ? 'pointer' : _props$mouseCursor,
            onMouseEnter = _props.onMouseEnter,
            onMouseLeave = _props.onMouseLeave,
            onTouch = _props.onTouch,
            _props$shape = _props.shape,
            shape = _props$shape === undefined ? 'square' : _props$shape;


        var classes = classnames(styles$t.touchable, styles$t[mouseCursor], styles$t[shape], (_classnames = {}, defineProperty(_classnames, styles$t.fullHeight, fullHeight), defineProperty(_classnames, styles$t.fullWidth, fullWidth), _classnames));

        return React.createElement(
          'div',
          {
            className: classes,
            onClick: function onClick(event) {
              return onTouch && onTouch({ event: event });
            },
            onMouseEnter: function (_onMouseEnter) {
              function onMouseEnter(_x) {
                return _onMouseEnter.apply(this, arguments);
              }

              onMouseEnter.toString = function () {
                return _onMouseEnter.toString();
              };

              return onMouseEnter;
            }(function (event) {
              return onMouseEnter && onMouseEnter({ event: event });
            }),
            onMouseLeave: function (_onMouseLeave) {
              function onMouseLeave(_x2) {
                return _onMouseLeave.apply(this, arguments);
              }

              onMouseLeave.toString = function () {
                return _onMouseLeave.toString();
              };

              return onMouseLeave;
            }(function (event) {
              return onMouseLeave && onMouseLeave({ event: event });
            }),
            onKeyPress: this.handleKeyPress,
            role: 'button',
            tabIndex: '0'
          },
          children
        );
      }
    }]);
    return Touchable;
  }(React.Component);


  Touchable.propTypes = {
    children: PropTypes.node,
    fullHeight: PropTypes.bool,
    fullWidth: PropTypes.bool,
    mouseCursor: PropTypes.oneOf(['copy', 'grab', 'grabbing', 'move', 'noDrop', 'pointer', 'zoomIn', 'zoomOut']),
    onTouch: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    shape: PropTypes.oneOf(['square', 'rounded', 'pill', 'circle', 'roundedTop', 'roundedBottom', 'roundedLeft', 'roundedRight'])
  };

  var styles$u = { "video": "_xl _45 _4h _y6", "player": "_xm _4f _y6", "playhead": "_xn _4s _50 _y6 _z9", "controls": "_xo _4h _4s _50 _4l _4m _4k _6e _6d" };

  var VideoPlayhead = function (_React$PureComponent) {
    inherits(VideoPlayhead, _React$PureComponent);

    function VideoPlayhead() {
      var _ref;

      var _temp, _this, _ret;

      classCallCheck(this, VideoPlayhead);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = VideoPlayhead.__proto__ || Object.getPrototypeOf(VideoPlayhead)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        seeking: false
      }, _this.setPlayheadRef = function (ref) {
        _this.playhead = ref;
      }, _this.seek = function (clientX) {
        if (_this.playhead) {
          var _this$props = _this.props,
              _duration = _this$props.duration,
              _seek = _this$props.seek;

          var _this$playhead$getBou = _this.playhead.getBoundingClientRect(),
              left = _this$playhead$getBou.left,
              width = _this$playhead$getBou.width;

          var percent = Math.max(0, Math.min((clientX - left) / width, 1));
          var newTime = percent * _duration;
          _seek(newTime);
        }
      }, _this.stopClick = function (event) {
        return event.stopPropagation();
      }, _this.handleMouseDown = function (event) {
        _this.setState({ seeking: true });
        _this.seek(event.clientX);
      }, _this.handleMouseMove = function (event) {
        var seeking = _this.state.seeking;

        if (seeking) {
          _this.seek(event.clientX);
        }
      }, _this.handleMouseUp = function () {
        _this.setState({ seeking: false });
      }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(VideoPlayhead, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            currentTime = _props.currentTime,
            duration = _props.duration;

        var width = Math.floor(currentTime * 10000 / duration) / 100 + '%';
        return React.createElement(
          Box,
          {
            position: 'relative',
            display: 'flex',
            flex: 'grow',
            alignItems: 'center',
            height: 16
          },
          React.createElement(
            'div',
            {
              'aria-valuemax': duration,
              'aria-valuemin': '0',
              'aria-valuenow': currentTime,
              className: styles$u.playhead,
              onClick: this.stopClick,
              onKeyPress: this.stopClick,
              onMouseDown: this.handleMouseDown,
              onMouseMove: this.handleMouseMove,
              onMouseUp: this.handleMouseUp,
              ref: this.setPlayheadRef,
              role: 'progressbar',
              tabIndex: '-1'
            },
            React.createElement(
              Box,
              {
                left: true,
                right: true,
                position: 'absolute',
                color: 'lightGray',
                shape: 'rounded',
                height: 4
              },
              React.createElement(Box, { color: 'white', shape: 'rounded', height: '100%', width: width })
            ),
            React.createElement(
              Box,
              {
                position: 'absolute',
                shape: 'rounded',
                height: 4,
                dangerouslySetInlineStyle: { __style: { left: width } }
              },
              React.createElement(Box, {
                shape: 'circle',
                width: 16,
                height: 16,
                color: 'white',
                marginLeft: -2,
                dangerouslySetInlineStyle: { __style: { marginTop: -6 } }
              })
            )
          )
        );
      }
    }]);
    return VideoPlayhead;
  }(React.PureComponent);

  VideoPlayhead.propTypes = {
    currentTime: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
    seek: PropTypes.func.isRequired
  };

  var fullscreenEnabled = function fullscreenEnabled() {
    return (
      // $FlowIssue - vendor prefix missing from Flow
      document.fullscreenEnabled ||
      // $FlowIssue - vendor prefix missing from Flow
      document.webkitFullscreenEnabled ||
      // $FlowIssue - vendor prefix missing from Flow
      document.mozFullScreenEnabled ||
      // $FlowIssue - vendor prefix missing from Flow
      document.msFullscreenEnabled
    );
  };

  var timeToString = function timeToString(time) {
    var rounded = Math.floor(time || 0);
    var minutes = Math.floor(rounded / 60);
    var seconds = rounded - minutes * 60;
    var minutesStr = minutes < 10 ? '0' + minutes : minutes;
    var secondsStr = seconds < 10 ? '0' + seconds : seconds;
    return minutesStr + ':' + secondsStr;
  };

  var VideoControls = function (_React$Component) {
    inherits(VideoControls, _React$Component);

    function VideoControls() {
      var _ref;

      var _temp, _this, _ret;

      classCallCheck(this, VideoControls);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = VideoControls.__proto__ || Object.getPrototypeOf(VideoControls)).call.apply(_ref, [this].concat(args))), _this), _this.handleFullscreenChange = function (_ref2) {
        var event = _ref2.event;
        var onFullscreenChange = _this.props.onFullscreenChange;

        event.stopPropagation();
        onFullscreenChange();
      }, _this.handlePlayingChange = function (_ref3) {
        var event = _ref3.event;
        var _this$props = _this.props,
            playing = _this$props.playing,
            onPause = _this$props.onPause,
            onPlay = _this$props.onPlay;

        if (playing) {
          onPause(event);
        } else {
          onPlay(event);
        }
      }, _this.handleVolumeChange = function (_ref4) {
        var event = _ref4.event;
        var onVolumeChange = _this.props.onVolumeChange;

        onVolumeChange(event);
      }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(VideoControls, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            accessibilityMaximizeLabel = _props.accessibilityMaximizeLabel,
            accessibilityMinimizeLabel = _props.accessibilityMinimizeLabel,
            accessibilityMuteLabel = _props.accessibilityMuteLabel,
            accessibilityPauseLabel = _props.accessibilityPauseLabel,
            accessibilityPlayLabel = _props.accessibilityPlayLabel,
            accessibilityUnmuteLabel = _props.accessibilityUnmuteLabel,
            currentTime = _props.currentTime,
            duration = _props.duration,
            fullscreen = _props.fullscreen,
            playing = _props.playing,
            seek = _props.seek,
            volume = _props.volume;

        var muted = volume === 0;
        var showFullscreenButton = typeof document !== 'undefined' && !!fullscreenEnabled();
        return React.createElement(
          'div',
          { className: styles$u.controls },
          React.createElement(
            Box,
            { padding: 2 },
            React.createElement(
              Touchable,
              { onTouch: this.handlePlayingChange, fullWidth: false },
              React.createElement(Icon, {
                accessibilityLabel: playing ? accessibilityPauseLabel : accessibilityPlayLabel,
                color: 'white',
                icon: playing ? 'pause' : 'play',
                size: 20
              })
            )
          ),
          React.createElement(
            Box,
            { width: 50, padding: 2 },
            React.createElement(
              Text,
              { color: 'white', align: 'right', size: 'xs' },
              timeToString(currentTime)
            )
          ),
          React.createElement(
            Box,
            { padding: 2, flex: 'grow' },
            React.createElement(VideoPlayhead, {
              currentTime: currentTime,
              duration: duration,
              seek: seek
            })
          ),
          React.createElement(
            Box,
            { width: 50, padding: 2 },
            React.createElement(
              Text,
              { color: 'white', align: 'right', size: 'xs' },
              timeToString(duration)
            )
          ),
          React.createElement(
            Box,
            { padding: 2 },
            React.createElement(
              Touchable,
              { onTouch: this.handleVolumeChange, fullWidth: false },
              React.createElement(Icon, {
                accessibilityLabel: muted ? accessibilityUnmuteLabel : accessibilityMuteLabel,
                color: 'white',
                icon: muted ? 'mute' : 'sound',
                size: 20
              })
            )
          ),
          showFullscreenButton && React.createElement(
            Box,
            { padding: 2 },
            React.createElement(
              Touchable,
              { onTouch: this.handleFullscreenChange, fullWidth: false },
              React.createElement(Icon, {
                accessibilityLabel: fullscreen ? accessibilityMinimizeLabel : accessibilityMaximizeLabel,
                color: 'white',
                icon: fullscreen ? 'minimize' : 'maximize',
                size: 20
              })
            )
          )
        );
      }
    }]);
    return VideoControls;
  }(React.Component);

  VideoControls.propTypes = {
    accessibilityMaximizeLabel: PropTypes.string.isRequired,
    accessibilityMinimizeLabel: PropTypes.string.isRequired,
    accessibilityMuteLabel: PropTypes.string.isRequired,
    accessibilityPauseLabel: PropTypes.string.isRequired,
    accessibilityPlayLabel: PropTypes.string.isRequired,
    accessibilityUnmuteLabel: PropTypes.string.isRequired,
    currentTime: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
    fullscreen: PropTypes.bool.isRequired,
    onFullscreenChange: PropTypes.func.isRequired,
    onPause: PropTypes.func.isRequired,
    onPlay: PropTypes.func.isRequired,
    onVolumeChange: PropTypes.func.isRequired,
    playing: PropTypes.bool.isRequired,
    seek: PropTypes.func.isRequired,
    volume: PropTypes.number.isRequired
  };

  // For more information on fullscreen and vendor prefixes see
  // https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API

  var requestFullscreen = function requestFullscreen(element) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
      // $FlowIssue - vendor prefix missing from Flow
    } else if (element.webkitRequestFullscreen) {
      // $FlowIssue - vendor prefix missing from Flow
      element.webkitRequestFullscreen();
      // $FlowIssue - vendor prefix missing from Flow
    } else if (element.mozRequestFullScreen) {
      // $FlowIssue - vendor prefix missing from Flow
      element.mozRequestFullScreen();
      // $FlowIssue - vendor prefix missing from Flow
    } else if (element.msRequestFullscreen) {
      // $FlowIssue - vendor prefix missing from Flow
      element.msRequestFullscreen();
    }
  };

  var exitFullscreen = function exitFullscreen() {
    // $FlowIssue - vendor prefix missing from Flow
    if (document.exitFullscreen) {
      // $FlowIssue - vendor prefix missing from Flow
      document.exitFullscreen();
      // $FlowIssue - vendor prefix missing from Flow
    } else if (document.webkitExitFullscreen) {
      // $FlowIssue - vendor prefix missing from Flow
      document.webkitExitFullscreen();
      // $FlowIssue - vendor prefix missing from Flow
    } else if (document.mozCancelFullScreen) {
      // $FlowIssue - vendor prefix missing from Flow
      document.mozCancelFullScreen();
      // $FlowIssue - vendor prefix missing from Flow
    } else if (document.msExitFullscreen) {
      // $FlowIssue - vendor prefix missing from Flow
      document.msExitFullscreen();
    }
  };

  // Normally document.fullscreen suffices here as a flag, but IE11 does not
  // have a vendor specific version so we must instead use the actual element
  var isFullscreen = function isFullscreen() {
    return (
      // $FlowIssue - vendor prefix missing from Flow
      document.fullscreenElement ||
      // $FlowIssue - vendor prefix missing from Flow
      document.webkitFullscreenElement ||
      // $FlowIssue - vendor prefix missing from Flow
      document.mozFullScreenElement ||
      // $FlowIssue - vendor prefix missing from Flow
      document.msFullscreenElement
    );
  };

  var addFullscreenEventListener = function addFullscreenEventListener(listener) {
    document.addEventListener('fullscreenchange', listener);
    document.addEventListener('webkitfullscreenchange', listener);
    document.addEventListener('mozfullscreenchange', listener);
    document.addEventListener('MSFullscreenChange', listener);
  };

  var removeFullscreenEventListener = function removeFullscreenEventListener(listener) {
    document.removeEventListener('fullscreenchange', listener);
    document.removeEventListener('webkitfullscreenchange', listener);
    document.removeEventListener('mozfullscreenchange', listener);
    document.removeEventListener('MSFullscreenChange', listener);
  };

  var isNewSource = function isNewSource(oldSource, newSource) {
    if ((typeof oldSource === 'undefined' ? 'undefined' : _typeof(oldSource)) !== (typeof newSource === 'undefined' ? 'undefined' : _typeof(newSource))) {
      // If the source type changed from string to Array
      // or vice versa, we have a new source
      return true;
    }
    if (Array.isArray(newSource)) {
      if (oldSource.length !== newSource.length) {
        // If the sources are both an Array, and the lengths
        // do not match we evaluate as a new source
        return true;
      }
      // If the sources are both an Array and the same length,
      // verify every element stayed the same
      return newSource.some(function (source, index) {
        return !Array.isArray(oldSource) || source.type !== oldSource[index].type || source.src !== oldSource[index].src;
      });
    }
    // If the sources are both a string, simply compare
    // the new with the old
    return newSource !== oldSource;
  };

  var Video = function (_React$PureComponent) {
    inherits(Video, _React$PureComponent);

    function Video() {
      var _ref;

      var _temp, _this, _ret;

      classCallCheck(this, Video);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Video.__proto__ || Object.getPrototypeOf(Video)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        currentTime: 0,
        duration: 0,
        fullscreen: false
      }, _this.setPlayerRef = function (ref) {
        _this.player = ref;
      }, _this.setVideoRef = function (ref) {
        _this.video = ref;
      }, _this.setPlaybackRate = function (playbackRate) {
        if (_this.video) {
          _this.video.playbackRate = playbackRate;
        }
      }, _this.setVolume = function (volume) {
        if (_this.video) {
          _this.video.volume = volume;
        }
      }, _this.load = function () {
        if (_this.video) {
          _this.video.load();
        }
      }, _this.pause = function () {
        if (_this.video) {
          _this.video.pause();
        }
      }, _this.play = function () {
        if (_this.video) {
          _this.video.play();
        }
      }, _this.seek = function (time) {
        if (_this.video) {
          _this.video.currentTime = time;
        }
      }, _this.toggleFullscreen = function () {
        if (isFullscreen()) {
          exitFullscreen();
        } else if (_this.player) {
          requestFullscreen(_this.player);
        }
      }, _this.handleCanPlay = function (event) {
        var onReady = _this.props.onReady;


        if (onReady) {
          onReady({ event: event });
        }
      }, _this.handleDurationChange = function (event) {
        var onDurationChange = _this.props.onDurationChange;

        var duration = _this.video && _this.video.duration || 0;
        _this.setState({ duration: duration });

        if (onDurationChange) {
          onDurationChange({ event: event, duration: duration });
        }
      }, _this.handleEnded = function (event) {
        var onEnded = _this.props.onEnded;


        if (onEnded) {
          onEnded({ event: event });
        }
      }, _this.handleFullscreenChange = function (event) {
        var onFullscreenChange = _this.props.onFullscreenChange;

        var fullscreen = !!isFullscreen();
        _this.setState({ fullscreen: fullscreen });

        if (onFullscreenChange) {
          onFullscreenChange({ event: event, fullscreen: fullscreen });
        }
      }, _this.handlePlay = function (event) {
        var onPlay = _this.props.onPlay;


        if (onPlay) {
          onPlay({ event: event });
        }
      }, _this.handlePause = function (event) {
        var onPause = _this.props.onPause;


        if (onPause) {
          onPause({ event: event });
        }
      }, _this.handleProgress = function (event) {
        var onLoadedChange = _this.props.onLoadedChange;

        var _ref2 = _this.video || {},
            buffered = _ref2.buffered;

        var loaded = buffered && buffered.length > 0 ? buffered.end(buffered.length - 1) : 0;

        if (onLoadedChange) {
          onLoadedChange({ event: event, loaded: loaded });
        }
      }, _this.handleSeek = function (event) {
        var onSeek = _this.props.onSeek;


        if (onSeek) {
          onSeek({ event: event });
        }
      }, _this.handleTimeUpdate = function (event) {
        var onTimeChange = _this.props.onTimeChange;

        var currentTime = _this.video && _this.video.currentTime || 0;
        _this.setState({ currentTime: currentTime });

        if (onTimeChange) {
          onTimeChange({ event: event, time: currentTime });
        }
      }, _this.handleVolumeChange = function (event) {
        var onVolumeChange = _this.props.onVolumeChange;

        var muted = _this.video && _this.video.muted || false;

        if (onVolumeChange) {
          onVolumeChange({ event: event, volume: muted ? 1 : 0 });
        }
      }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(Video, [{
      key: 'componentDidMount',


      /**
       * React lifecycle hooks pertinent to Video
       */

      value: function componentDidMount() {
        var _props = this.props,
            playbackRate = _props.playbackRate,
            playing = _props.playing,
            volume = _props.volume;
        // Set up event listeners to catch backdoors in fullscreen
        // changes such as using the ESC key to exit

        if (typeof document !== 'undefined') {
          addFullscreenEventListener(this.handleFullscreenChange);
        }
        // Load the video to hydrate the DOM after a server render
        this.load();
        // Set the initial volume
        this.setVolume(volume);
        // Set the initial playback rate
        this.setPlaybackRate(playbackRate);
        // Simulate an autoplay effect if the component
        if (playing) {
          this.play();
        }
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        // If the video source changed, reload the video
        if (isNewSource(prevProps.src, this.props.src)) {
          this.load();
        }
        // If the volume changed, set the new volume
        if (prevProps.volume !== this.props.volume) {
          this.setVolume(this.props.volume);
        }
        // If the playback rate changed, set the new rate
        if (prevProps.playbackRate !== this.props.playbackRate) {
          this.setPlaybackRate(this.props.playbackRate);
        }
        // If the playback changed, play or pause the video
        if (prevProps.playing !== this.props.playing) {
          if (this.props.playing) {
            this.play();
          } else {
            this.pause();
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        removeFullscreenEventListener(this.handleFullscreenChange);
      }

      /**
       * DOM reference housekeeping that is needed for functionality
       */

      // The player element encapsulates the actual video DOM
      // element as well as the controls to bring both fullscreen


      // The actual reference to the video HTML DOM element


      /**
       * Functions that directly interact with the HTML video element
       */

      // Set the video to the desired playback rate: 1 (normal)


      // Set the video to the desired volume: 0 (muted) -> 1 (max)


      // Change the video source and re-load the video


      // Pause the video


      // Play the video


      // Seek the video to the desired time


      // Enter/exit fullscreen video player mode


      /**
       * Handlers for various media events on the video
       */

      // Sent when enough data is available that the media can be played


      // The metadata has loaded or changed, indicating a change in
      // duration of the media


      // Sent when playback completes.


      // Sent when the video is switched to/out-of fullscreen mode


      // Sent when playback of the media starts after having been paused.


      // Sent when playback is paused.


      // Sent periodically to inform interested parties of progress downloading the media


      // Sent when a seek operation completes.


      // The time indicated by the element's currentTime attribute has changed


      // Sent when the audio volume changes

    }, {
      key: 'render',
      value: function render() {
        var _props2 = this.props,
            aspectRatio = _props2.aspectRatio,
            captions = _props2.captions,
            loop = _props2.loop,
            playing = _props2.playing,
            playsInline = _props2.playsInline,
            poster = _props2.poster,
            preload = _props2.preload,
            src = _props2.src,
            volume = _props2.volume;
        var _state = this.state,
            currentTime = _state.currentTime,
            duration = _state.duration,
            fullscreen = _state.fullscreen;


        var paddingBottom = fullscreen && '0' || 1 / aspectRatio * 100 + '%';

        return React.createElement(
          'div',
          {
            ref: this.setPlayerRef,
            className: styles$u.player,
            style: { paddingBottom: paddingBottom, height: fullscreen ? '100%' : 0 }
          },
          React.createElement(
            'video',
            {
              autoPlay: playing,
              loop: loop,
              muted: volume === 0,
              playsInline: playsInline,
              poster: poster,
              preload: preload,
              src: typeof src === 'string' ? src : undefined,
              ref: this.setVideoRef,
              className: styles$u.video,
              onCanPlay: this.handleCanPlay,
              onDurationChange: this.handleDurationChange,
              onEnded: this.handleEnded,
              onSeeked: this.handleSeek,
              onTimeUpdate: this.handleTimeUpdate,
              onProgress: this.handleProgress
            },
            Array.isArray(src) && src.map(function (source) {
              return React.createElement('source', { key: source.src, src: source.src, type: source.type });
            }),
            React.createElement('track', { kind: 'captions', src: captions })
          ),
          this.props.controls && React.createElement(VideoControls, {
            accessibilityMaximizeLabel: this.props.accessibilityMaximizeLabel,
            accessibilityMinimizeLabel: this.props.accessibilityMinimizeLabel,
            accessibilityMuteLabel: this.props.accessibilityMuteLabel,
            accessibilityPauseLabel: this.props.accessibilityPauseLabel,
            accessibilityPlayLabel: this.props.accessibilityPlayLabel,
            accessibilityUnmuteLabel: this.props.accessibilityUnmuteLabel,
            currentTime: currentTime,
            duration: duration,
            fullscreen: fullscreen,
            onPlay: this.handlePlay,
            onPause: this.handlePause,
            onFullscreenChange: this.toggleFullscreen,
            onVolumeChange: this.handleVolumeChange,
            playing: playing,
            seek: this.seek,
            volume: volume
          })
        );
      }
    }]);
    return Video;
  }(React.PureComponent);

  Video.propTypes = {
    accessibilityMaximizeLabel: PropTypes.string,
    accessibilityMinimizeLabel: PropTypes.string,
    accessibilityMuteLabel: PropTypes.string,
    accessibilityPauseLabel: PropTypes.string,
    accessibilityPlayLabel: PropTypes.string,
    accessibilityUnmuteLabel: PropTypes.string,
    aspectRatio: PropTypes.number.isRequired,
    captions: PropTypes.string.isRequired,
    controls: PropTypes.bool,
    loop: PropTypes.bool,
    onDurationChange: PropTypes.func,
    onEnded: PropTypes.func,
    onFullscreenChange: PropTypes.func,
    onLoadedChange: PropTypes.func,
    onPlay: PropTypes.func,
    onPause: PropTypes.func,
    onReady: PropTypes.func,
    onSeek: PropTypes.func,
    onTimeChange: PropTypes.func,
    onVolumeChange: PropTypes.func,
    playbackRate: PropTypes.number,
    playing: PropTypes.bool,
    playsInline: PropTypes.bool,
    poster: PropTypes.string,
    preload: PropTypes.oneOf(['auto', 'metadata', 'none']),
    src: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.oneOf(['video/m3u8', 'video/mp4', 'video/ogg']).isRequired,
      src: PropTypes.string.isRequired
    }))]).isRequired,
    volume: PropTypes.number
  };
  Video.defaultProps = {
    playbackRate: 1,
    playing: false,
    preload: 'auto',
    volume: 1
  };

  exports.Avatar = Avatar;
  exports.Box = Box;
  exports.Button = Button;
  exports.Card = Card;
  exports.Checkbox = Checkbox;
  exports.Collage = Collage;
  exports.Collection = Collection;
  exports.Column = Column;
  exports.Container = Container;
  exports.Divider = Divider;
  exports.Flyout = Flyout;
  exports.GroupAvatar = GroupAvatar;
  exports.Heading = Heading;
  exports.Icon = Icon;
  exports.IconButton = IconButton;
  exports.Image = Image;
  exports.Label = Label;
  exports.Layer = Layer;
  exports.Letterbox = Letterbox;
  exports.Link = Link;
  exports.Mask = Mask;
  exports.Masonry = Masonry;
  exports.MasonryBeta = MasonryBeta;
  exports.MasonryInfiniteBeta = MasonryInfiniteBeta;
  exports.MasonryDefaultLayout = MasonryLayout;
  exports.MasonryUniformRowLayout = UniformRowLayout;
  exports.Modal = Modal;
  exports.Pog = Pog;
  exports.Pulsar = Pulsar;
  exports.RadioButton = RadioButton;
  exports.ScrollFetch = ScrollFetch;
  exports.SearchField = SearchField;
  exports.SegmentedControl = SegmentedControl;
  exports.SelectList = SelectList;
  exports.Spinner = Spinner;
  exports.Sticky = Sticky;
  exports.Switch = Switch;
  exports.Tabs = Tabs;
  exports.Text = Text;
  exports.TextArea = TextArea;
  exports.TextField = TextField;
  exports.Toast = Toast;
  exports.Tooltip = Tooltip;
  exports.Touchable = Touchable;
  exports.Video = Video;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VzdGFsdC5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL3N0eWxlLmpzIiwiLi4vc3JjL3RyYW5zZm9ybXMuanMiLCIuLi9zcmMvQm94LmpzIiwiLi4vc3JjL2ljb25zL2luZGV4LmpzIiwiLi4vc3JjL0ljb24uanMiLCIuLi9zcmMvSW1hZ2UuanMiLCIuLi9zcmMvTWFzay5qcyIsIi4uL3NyYy9BdmF0YXIuanMiLCIuLi9zcmMvVGV4dC5qcyIsIi4uL3NyYy9CdXR0b24uanMiLCIuLi9zcmMvQ2FyZC5qcyIsIi4uL3NyYy9DaGVja2JveC5qcyIsIi4uL3NyYy9Db2xsZWN0aW9uLmpzIiwiLi4vc3JjL0NvbGxhZ2UuanMiLCIuLi9zcmMvQ29sdW1uLmpzIiwiLi4vc3JjL0NvbnRhaW5lci5qcyIsIi4uL3NyYy9EaXZpZGVyLmpzIiwiLi4vc3JjL0NhcmV0LmpzIiwiLi4vc3JjL0NvbnRlbnRzLmpzIiwiLi4vc3JjL2JlaGF2aW9ycy9PdXRzaWRlRXZlbnRCZWhhdmlvci5qcyIsIi4uL3NyYy9Db250cm9sbGVyLmpzIiwiLi4vc3JjL0ZseW91dC5qcyIsIi4uL3NyYy9Hcm91cEF2YXRhci5qcyIsIi4uL3NyYy9IZWFkaW5nLmpzIiwiLi4vc3JjL1BvZy5qcyIsIi4uL3NyYy9JY29uQnV0dG9uLmpzIiwiLi4vc3JjL0xhYmVsLmpzIiwiLi4vc3JjL0xheWVyLmpzIiwiLi4vc3JjL0xldHRlcmJveC5qcyIsIi4uL3NyYy9MaW5rLmpzIiwiLi4vc3JjL2RlYm91bmNlLmpzIiwiLi4vc3JjL0ZldGNoSXRlbXMuanMiLCIuLi9zcmMvU2Nyb2xsQ29udGFpbmVyLmpzIiwiLi4vc3JjL3Rocm90dGxlLmpzIiwiLi4vc3JjL01lYXN1cmVtZW50U3RvcmUuanMiLCIuLi9zcmMvc2Nyb2xsVXRpbHMuanMiLCIuLi9zcmMvbGVnYWN5TGF5b3V0U3ltYm9scy5qcyIsIi4uL3NyYy9kZWZhdWx0TGF5b3V0LmpzIiwiLi4vc3JjL3VuaWZvcm1Sb3dMYXlvdXQuanMiLCIuLi9zcmMvZnVsbFdpZHRoTGF5b3V0LmpzIiwiLi4vc3JjL2xheW91dHMvTWFzb25yeUxheW91dC5qcyIsIi4uL3NyYy9sYXlvdXRzL1VuaWZvcm1Sb3dMYXlvdXQuanMiLCIuLi9zcmMvTWFzb25yeS5qcyIsIi4uL3NyYy9NYXNvbnJ5QmV0YS5qcyIsIi4uL3NyYy9NYXNvbnJ5SW5maW5pdGVCZXRhLmpzIiwiLi4vc3JjL2JlaGF2aW9ycy9TdG9wU2Nyb2xsQmVoYXZpb3IuanMiLCIuLi9zcmMvYmVoYXZpb3JzL1RyYXBGb2N1c0JlaGF2aW9yLmpzIiwiLi4vc3JjL01vZGFsLmpzIiwiLi4vc3JjL1B1bHNhci5qcyIsIi4uL3NyYy9SYWRpb0J1dHRvbi5qcyIsIi4uL3NyYy9TY3JvbGxGZXRjaC5qcyIsIi4uL3NyYy9TZWFyY2hGaWVsZC5qcyIsIi4uL3NyYy9TZWdtZW50ZWRDb250cm9sLmpzIiwiLi4vc3JjL1NlbGVjdExpc3QuanMiLCIuLi9zcmMvU3Bpbm5lci5qcyIsIi4uL3NyYy9TdGlja3kuanMiLCIuLi9zcmMvU3dpdGNoLmpzIiwiLi4vc3JjL1RhYnMuanMiLCIuLi9zcmMvVGV4dEFyZWEuanMiLCIuLi9zcmMvVGV4dEZpZWxkLmpzIiwiLi4vc3JjL1RvYXN0LmpzIiwiLi4vc3JjL1Rvb2x0aXAuanMiLCIuLi9zcmMvVG91Y2hhYmxlLmpzIiwiLi4vc3JjL1ZpZGVvUGxheWhlYWQuanMiLCIuLi9zcmMvVmlkZW9Db250cm9scy5qcyIsIi4uL3NyYy9WaWRlby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAZmxvdyAqL1xuXG4vKlxuXG5TdHlsZSBpcyBhIG1vbm9pZCB0aGF0IGNhcHR1cmUgdGhlIFwidG8tYmUtYXBwbGllZFwiIHN0eWxlcyAoaW5saW5lIGFuZCBjbGFzc2VzKVxuZm9yIGEgQm94LiBJdCdzIGJhc2ljYWxseSBzZXQgdGhhdCBpcyBjbG9zZWQgdW5kZXIgYW4gYXNzb2NpYXRpdmUgYmluYXJ5XG5vcGVyYXRpb24gYW5kIGhhcyBhbiBpZGVudGl0eSBlbGVtZW50IHN1Y2ggdGhhdCBmb3IgYWxsIEhBIEhBIEhBLiBZZXMsIGl0J3MgYVxubW9ub2lkLCB3aGljaCBzb3VuZHMgc2NhcnkgYnV0IGl0J3Mgbm90IHJlYWxseSBhbmQgYWN0dWFsbHkgc3VwZXIgdXNlZnVsLiBBbGxcbnRoYXQgbWVhbnMgaXMgdGhhdCBiYXNpY2FsbHkgeW91IGNhbiBkbyB0d28gdGhpbmdzIHdpdGggaXQ6XG5cbiAgICAxLiBjb25jYXQoY29uY2F0KGEsIGIpLCBjKSA9PT0gY29uY2F0KGEsIGNvbmNhdChiLCBjKSk7XG4gICAgMi4gY29uY2F0KGlkZW50aXR5KCksIGEpID09PSBjb25jYXQoYSwgaWRlbnRpdHkoKSkgPT09IGE7XG5cbldoYXQgdGhhdCBtZWFucyBpcyB0aGF0IGl0J3MgcmVhbGx5IGVhc3kgdG8gY29tcG9zZSBzdHlsZXMgdG9nZXRoZXIgYW5kIHRoZVxub3JkZXIgaW4gd2hpY2ggeW91IGRvIHNvIGRvZXNuJ3QgcmVhbGx5IG1hdHRlci5cblxuKi9cblxudHlwZSBJbmxpbmVTdHlsZSA9IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyIHwgdm9pZCB9O1xuXG4vLyBUT0RPOiBUaGlzIHR5cGUgc2hvdWxkIGJlIG9wYXF1ZSwgaG93ZXZlciB0aGUgQmFiZWwgcGFyc2VyIGRvZXNuJ3Qgc3VwcG9ydFxuLy8gICAgICAgdGhlIG9wYXF1ZSBzeW50YXggeWV0LlxuZXhwb3J0IHR5cGUgU3R5bGUgPSB7fFxuICBjbGFzc05hbWU6IFNldDxzdHJpbmc+LFxuICBpbmxpbmVTdHlsZTogSW5saW5lU3R5bGUsXG58fTtcblxuZXhwb3J0IGNvbnN0IGlkZW50aXR5ID0gKCk6IFN0eWxlID0+ICh7XG4gIGNsYXNzTmFtZTogbmV3IFNldCgpLFxuICBpbmxpbmVTdHlsZToge30sXG59KTtcblxuZXhwb3J0IGNvbnN0IGZyb21DbGFzc05hbWUgPSAoLi4uY2xhc3NOYW1lczogQXJyYXk8c3RyaW5nPik6IFN0eWxlID0+ICh7XG4gIGNsYXNzTmFtZTogbmV3IFNldChjbGFzc05hbWVzKSxcbiAgaW5saW5lU3R5bGU6IHt9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmcm9tSW5saW5lU3R5bGUgPSAoaW5saW5lU3R5bGU6IElubGluZVN0eWxlKTogU3R5bGUgPT4gKHtcbiAgY2xhc3NOYW1lOiBuZXcgU2V0KCksXG4gIGlubGluZVN0eWxlLFxufSk7XG5cbmV4cG9ydCBjb25zdCBjb25jYXQgPSAoc3R5bGVzOiBBcnJheTxTdHlsZT4pOiBTdHlsZSA9PlxuICBzdHlsZXMucmVkdWNlKFxuICAgIChcbiAgICAgIHsgY2xhc3NOYW1lOiBjbGFzc05hbWVBLCBpbmxpbmVTdHlsZTogaW5saW5lU3R5bGVBIH0sXG4gICAgICB7IGNsYXNzTmFtZTogY2xhc3NOYW1lQiwgaW5saW5lU3R5bGU6IGlubGluZVN0eWxlQiB9XG4gICAgKSA9PiAoe1xuICAgICAgY2xhc3NOYW1lOiBuZXcgU2V0KFsuLi5jbGFzc05hbWVBLCAuLi5jbGFzc05hbWVCXSksXG4gICAgICBpbmxpbmVTdHlsZTogeyAuLi5pbmxpbmVTdHlsZUEsIC4uLmlubGluZVN0eWxlQiB9LFxuICAgIH0pLFxuICAgIGlkZW50aXR5KClcbiAgKTtcblxuZXhwb3J0IGNvbnN0IG1hcENsYXNzTmFtZSA9IChmbjogKHg6IHN0cmluZykgPT4gc3RyaW5nKSA9PiAoe1xuICBjbGFzc05hbWUsXG4gIGlubGluZVN0eWxlLFxufTogU3R5bGUpOiBTdHlsZSA9PiAoe1xuICBjbGFzc05hbWU6IG5ldyBTZXQoQXJyYXkuZnJvbShjbGFzc05hbWUpLm1hcChmbikpLFxuICBpbmxpbmVTdHlsZSxcbn0pO1xuXG5leHBvcnQgY29uc3QgdG9Qcm9wcyA9ICh7XG4gIGNsYXNzTmFtZSxcbiAgaW5saW5lU3R5bGUsXG59OiBTdHlsZSk6IHsgY2xhc3NOYW1lOiBzdHJpbmcsIHN0eWxlOiBJbmxpbmVTdHlsZSB9ID0+IHtcbiAgY29uc3QgcHJvcHMgPSB7fTtcblxuICBpZiAoY2xhc3NOYW1lLnNpemUgPiAwKSB7XG4gICAgLy8gU29ydGluZyBoZXJlIGVuc3VyZXMgdGhhdCBjbGFzc05hbWVzIGFyZSBhbHdheXMgc3RhYmxlLCByZWR1Y2luZyBkaWZmXG4gICAgLy8gY2h1cm4uIEJveCB1c3VhbGx5IGhhcyBhIHNtYWxsIG51bWJlciBvZiBwcm9wZXJ0aWVzIHNvIGl0J3Mgbm90IGEgcGVyZlxuICAgIC8vIGNvbmNlcm4uXG4gICAgcHJvcHMuY2xhc3NOYW1lID0gQXJyYXkuZnJvbShjbGFzc05hbWUpXG4gICAgICAuc29ydCgpXG4gICAgICAuam9pbignICcpO1xuICB9XG5cbiAgaWYgKE9iamVjdC5rZXlzKGlubGluZVN0eWxlKS5sZW5ndGggPiAwKSB7XG4gICAgcHJvcHMuc3R5bGUgPSBpbmxpbmVTdHlsZTtcbiAgfVxuXG4gIHJldHVybiBwcm9wcztcbn07XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQge1xuICBjb25jYXQsXG4gIGZyb21DbGFzc05hbWUsXG4gIGlkZW50aXR5LFxuICBtYXBDbGFzc05hbWUsXG4gIHR5cGUgU3R5bGUsXG59IGZyb20gJy4vc3R5bGUuanMnO1xuXG4vKlxuXG5UcmFuc2Zvcm1zXG5cblRoZXNlIGFyZSBhIGNvbGxlY3Rpb24gb2YgYSBmZXcgZnVuY3RvcnMgdGhhdCB0YWtlIHZhbHVlcyBhbmQgcmV0dXJucyBTdHlsZSdzLiBPTUcsIEkgdXNlZCB0aGUgd29yZCBmdW5jdG9yIC0gaXQncyByZWFsbHkganVzdCBhIGZhbmN5IHdvcmQgZm9yIGZ1bmN0aW9uLlxuXG4qL1xuXG50eXBlIEZ1bmN0b3IgPSAobjogbnVtYmVyKSA9PiBTdHlsZTtcblxuLy8gQWRkcyBhIGNsYXNzbmFtZSB3aGVuIGEgcHJvcGVydHkgaXMgcHJlc2VudC5cbi8vXG4vLyAgICAgPEJveCB0b3AgLz5cbi8vXG5leHBvcnQgY29uc3QgdG9nZ2xlID0gKC4uLmNsYXNzTmFtZXM6IEFycmF5PHN0cmluZz4pID0+ICh2YWw/OiBib29sZWFuKSA9PlxuICB2YWwgPyBmcm9tQ2xhc3NOYW1lKC4uLmNsYXNzTmFtZXMpIDogaWRlbnRpdHkoKTtcblxuLy8gTWFwcyBzdHJpbmcgdmFsdWVzIHRvIGNsYXNzZXNcbi8vXG4vLyAgICAgPEJveCBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgLz5cbi8vXG5leHBvcnQgY29uc3QgbWFwcGluZyA9IChtYXA6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pID0+ICh2YWw6IHN0cmluZykgPT5cbiAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1hcCwgdmFsKVxuICAgID8gZnJvbUNsYXNzTmFtZShtYXBbdmFsXSlcbiAgICA6IGlkZW50aXR5KCk7XG5cbi8vIE1hcHMgYSByYW5nZSBvZiBpbnRlZ2VycyB0byBhIHJhbmdlIG9mIGNsYXNzbmFtZXNcbi8vXG4vLyAgICAgPEJveCBwYWRkaW5nPXsxfSAvPlxuLy9cbmV4cG9ydCBjb25zdCByYW5nZSA9IChzY2FsZTogc3RyaW5nKSA9PiAobjogbnVtYmVyKSA9PlxuICBmcm9tQ2xhc3NOYW1lKGAke3NjYWxlfSR7biA8IDAgPyBgTiR7TWF0aC5hYnMobil9YCA6IG59YCk7XG5cbi8vIExpa2UgYHJhbmdlYCwgbWFwcyBhIHJhbmdlIG9mIGludGVnZXJzIHRvIGEgcmFuZ2Ugb2YgY2xhc3NuYW1lcywgZXhjbHVkaW5nXG4vLyB6ZXJvIHZhbHVlcy5cbi8vXG4vLyAgICAgPEJveCBwYWRkaW5nPXswfSAvPlxuZXhwb3J0IGNvbnN0IHJhbmdlV2l0aG91dFplcm8gPSAoc2NhbGU6IHN0cmluZykgPT4gKG46IG51bWJlcikgPT5cbiAgbiA9PT0gMCA/IGlkZW50aXR5KCkgOiByYW5nZShzY2FsZSkobik7XG5cbi8vIEJpbmRzIGEgc3RyaW5nIGNsYXNzbmFtZSB0byB0aGUgdmFsdWUgaW4gYW4gb2JqZWN0LiBVc2VmdWwgd2hlbiBpbnRlcmFjdGluZ1xuLy8gd2l0aCByYW5nZXMgdGhhdCBuZWVkIHRvIGNvbWUgZHluYW1pY2FsbHkgZnJvbSBhIHN0eWxlIG9iamVjdC4gVGhpcyBpc1xuLy8gc2ltaWxhciB0byB0aGUgTlBNIHBhY2thZ2UgJ2NsYXNzbmFtZXMvYmluZCcuXG5leHBvcnQgY29uc3QgYmluZCA9IChmbjogRnVuY3Rvciwgc2NvcGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pID0+IChcbiAgdmFsOiBudW1iZXJcbikgPT4gbWFwQ2xhc3NOYW1lKG5hbWUgPT4gc2NvcGVbbmFtZV0pKGZuKHZhbCkpO1xuXG4vLyBUaGlzIHRha2VzIGEgc2VyaWVzIG9mIHRoZSBwcmV2aW91c2x5IGRlZmluZWQgZnVuY3RvcnMsIHJ1bnMgdGhlbSBhbGxcbi8vIGFnYWluc3QgYSB2YWx1ZSBhbmQgcmV0dXJucyB0aGUgc2V0IG9mIHRoZWlyIGNsYXNzbmFtZXMuXG5leHBvcnQgY29uc3QgdW5pb24gPSAoLi4uZm5zOiBBcnJheTxGdW5jdG9yPikgPT4gKHZhbDogbnVtYmVyKSA9PlxuICBjb25jYXQoZm5zLm1hcChmbiA9PiBmbih2YWwpKSk7XG4iLCIvLyBAZmxvd1xuXG4vKlxuXG4jIFdlbGNvbWUgdG8gQm94IVxuXG5UaGlzIGd1aWRlIHdpbGwgaGVscCB5b3UgbmF2aWdhdGUgYW5kIHVuZGVyc3RhbmQgaXRzIGRlc2lnbi4gVGhpcyBmaWxlIGlzIHJvdWdobHkgb3JnYW5pemVkIGxpa2U6XG5cbiAgMS4gRmxvdyBUeXBlc1xuICAyLiBQcm9wIHRyYW5zZm9ybWVyc1xuICAzLiBCb3ggaXRzZWxmXG4gIDQuIFByb3BUeXBlc1xuXG5JJ2xsIGV4cGxhaW4gZWFjaCBwYXJ0IGFzIHdlIGdvIHRocm91Z2guIEp1c3QgcmVtZW1iZXIsIGlmIHlvdSB3YW50IHRvIG1ha2UgdXBkYXRlcywgUExFQVNFIFBMRUFTRSBQTEVBU0UgdXBkYXRlIHRoZSBGbG93IFR5cGVzICYgUHJvcFR5cGVzIChldmVuIHRob3VnaCB0aGV5IGxvb2sgc2NhcnkpLlxuXG4qL1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0JveC5jc3MnO1xuaW1wb3J0IGJvcmRlcnMgZnJvbSAnLi9Cb3JkZXJzLmNzcyc7XG5pbXBvcnQgY29sb3JzIGZyb20gJy4vQ29sb3JzLmNzcyc7XG5pbXBvcnQgbGF5b3V0IGZyb20gJy4vTGF5b3V0LmNzcyc7XG5pbXBvcnQgd2hpdGVzcGFjZSBmcm9tICcuL2JveFdoaXRlc3BhY2UuY3NzJztcbmltcG9ydCB3aGl0ZXNwYWNlTGVnYWN5IGZyb20gJy4vV2hpdGVzcGFjZS5jc3MnO1xuaW1wb3J0IHtcbiAgY29uY2F0LFxuICBmcm9tQ2xhc3NOYW1lLFxuICBmcm9tSW5saW5lU3R5bGUsXG4gIGlkZW50aXR5LFxuICBtYXBDbGFzc05hbWUsXG4gIHRvUHJvcHMsXG59IGZyb20gJy4vc3R5bGUuanMnO1xuaW1wb3J0IHtcbiAgdW5pb24sXG4gIGJpbmQsXG4gIHJhbmdlLFxuICB0b2dnbGUsXG4gIG1hcHBpbmcsXG4gIHJhbmdlV2l0aG91dFplcm8sXG59IGZyb20gJy4vdHJhbnNmb3Jtcy5qcyc7XG5cbi8qXG5cbiMgUHJvVHlwZXNcblxuQm94J3MgdHlwZSBkZWZpbml0aW9uIGlzIGV4aGF1c3RpdmUuIFdpdGggdGhlIGV4Y2VwdGlvbiBvZiBgZGFuZ2Vyb3VzbHlTZXRJbmxpbmVTdHlsZWAsIHZhbHVlcyBzaG91bGRuJ3QgYmUgYW1iaWdpb3VzLiBUaGF0IG1lYW5zIHRoYXQgd2UgaGF2ZSB0byB0eXBlIG91dCB0aGluZ3MgbGlrZSBib2ludHMsIGJ1dCB0aGF0J3MgYWxzbyB3aGVyZSBCb3gncyBtYWdpYyBsaWVzLiBBbHNvLCBieSBwdXR0aW5nIGluIGV4dHJhIGVmZm9ydCBhcm91bmQgdHlwZSBkZWZpbml0aW9ucyBoZXJlLCB3ZSBjYW4gc2tpcCBleHRyYSBydW50aW1lIHR5cGVjaGVja3MgaW4gdGhlIHRyYW5zZm9ybWVycyBmb3IgcGVyZm9ybWFuY2UuXG5cbiovXG5cbnR5cGUgTmF0Qm9pbnQgPSAxIHwgMiB8IDMgfCA0IHwgNSB8IDY7XG50eXBlIEludEJvaW50ID0gLTYgfCAtNSB8IC00IHwgLTMgfCAtMiB8IC0xIHwgTmF0Qm9pbnQ7XG50eXBlIERpc3BsYXkgPSAnbm9uZScgfCAnZmxleCcgfCAnYmxvY2snIHwgJ2lubGluZUJsb2NrJyB8ICd2aXN1YWxseUhpZGRlbic7XG50eXBlIERpcmVjdGlvbiA9ICdyb3cnIHwgJ2NvbHVtbic7XG50eXBlIENvbHVtbiA9IDAgfCAxIHwgMiB8IDMgfCA0IHwgNSB8IDYgfCA3IHwgOCB8IDkgfCAxMCB8IDExIHwgMTI7XG50eXBlIFJlc3BvbnNpdmVQcm9wcyA9IHtcbiAgY29sdW1uPzogMSB8IDIgfCAzIHwgNCB8IDUgfCA2IHwgNyB8IDggfCA5IHwgMTAgfCAxMSB8IDEyLFxuICBkaXNwbGF5PzogYm9vbGVhbiB8ICdmbGV4JyB8ICdmbGV4Q29sdW1uJyB8ICdpbmxpbmVCbG9jaycsXG59O1xudHlwZSBNYXJnaW4gPVxuICB8IC0xMlxuICB8IC0xMVxuICB8IC0xMFxuICB8IC05XG4gIHwgLThcbiAgfCAtN1xuICB8IC02XG4gIHwgLTVcbiAgfCAtNFxuICB8IC0zXG4gIHwgLTJcbiAgfCAtMVxuICB8IDBcbiAgfCAxXG4gIHwgMlxuICB8IDNcbiAgfCA0XG4gIHwgNVxuICB8IDZcbiAgfCA3XG4gIHwgOFxuICB8IDlcbiAgfCAxMFxuICB8IDExXG4gIHwgMTI7XG50eXBlIFBhZGRpbmcgPSAwIHwgMSB8IDIgfCAzIHwgNCB8IDUgfCA2IHwgNyB8IDggfCA5IHwgMTAgfCAxMSB8IDEyO1xudHlwZSBQcm9wVHlwZSA9IHtcbiAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlLFxuICBkYW5nZXJvdXNseVNldElubGluZVN0eWxlPzoge1xuICAgIF9fc3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyIHwgdm9pZCB9LFxuICB9LFxuXG4gIHhzPzogUmVzcG9uc2l2ZVByb3BzLFxuICBzbT86IFJlc3BvbnNpdmVQcm9wcyxcbiAgbWQ/OiBSZXNwb25zaXZlUHJvcHMsXG4gIGxnPzogUmVzcG9uc2l2ZVByb3BzLFxuICBkZXByZWNhdGVkUGFkZGluZz86IE5hdEJvaW50IHwgeyB4PzogTmF0Qm9pbnQsIHk/OiBOYXRCb2ludCB9LFxuICBkZXByZWNhdGVkTWFyZ2luPzpcbiAgICB8IEludEJvaW50XG4gICAgfCB7XG4gICAgICAgIHRvcD86IEludEJvaW50LFxuICAgICAgICByaWdodD86IEludEJvaW50IHwgJ2F1dG8nLFxuICAgICAgICBib3R0b20/OiBJbnRCb2ludCxcbiAgICAgICAgbGVmdD86IEludEJvaW50IHwgJ2F1dG8nLFxuICAgICAgfSxcblxuICBkaXNwbGF5PzogRGlzcGxheSxcbiAgY29sdW1uPzogQ29sdW1uLFxuICBkaXJlY3Rpb24/OiBEaXJlY3Rpb24sXG4gIHNtRGlzcGxheT86IERpc3BsYXksXG4gIHNtQ29sdW1uPzogQ29sdW1uLFxuICBzbURpcmVjdGlvbj86IERpcmVjdGlvbixcbiAgbWREaXNwbGF5PzogRGlzcGxheSxcbiAgbWRDb2x1bW4/OiBDb2x1bW4sXG4gIG1kRGlyZWN0aW9uPzogRGlyZWN0aW9uLFxuICBsZ0Rpc3BsYXk/OiBEaXNwbGF5LFxuICBsZ0NvbHVtbj86IENvbHVtbixcbiAgbGdEaXJlY3Rpb24/OiBEaXJlY3Rpb24sXG5cbiAgYWxpZ25Db250ZW50PzogJ3N0YXJ0JyB8ICdlbmQnIHwgJ2NlbnRlcicgfCAnYmV0d2VlbicgfCAnYXJvdW5kJyB8ICdzdHJldGNoJyxcbiAgYWxpZ25JdGVtcz86ICdzdGFydCcgfCAnZW5kJyB8ICdjZW50ZXInIHwgJ2Jhc2VsaW5lJyB8ICdzdHJldGNoJyxcbiAgYWxpZ25TZWxmPzogJ2F1dG8nIHwgJ3N0YXJ0JyB8ICdlbmQnIHwgJ2NlbnRlcicgfCAnYmFzZWxpbmUnIHwgJ3N0cmV0Y2gnLFxuICBib3R0b20/OiBib29sZWFuLFxuICBjb2xvcj86XG4gICAgfCAnYmx1ZSdcbiAgICB8ICdkYXJrR3JheSdcbiAgICB8ICdkYXJrV2FzaCdcbiAgICB8ICdlZ2dwbGFudCdcbiAgICB8ICdncmF5J1xuICAgIHwgJ2dyZWVuJ1xuICAgIHwgJ2xpZ2h0R3JheSdcbiAgICB8ICdsaWdodFdhc2gnXG4gICAgfCAnbWFyb29uJ1xuICAgIHwgJ21pZG5pZ2h0J1xuICAgIHwgJ25hdnknXG4gICAgfCAnb2xpdmUnXG4gICAgfCAnb3JhbmdlJ1xuICAgIHwgJ29yY2hpZCdcbiAgICB8ICdwaW5lJ1xuICAgIHwgJ3B1cnBsZSdcbiAgICB8ICdyZWQnXG4gICAgfCAndHJhbnNwYXJlbnQnXG4gICAgfCAnd2F0ZXJtZWxvbidcbiAgICB8ICd3aGl0ZScsXG4gIGZpdD86IGJvb2xlYW4sXG4gIGZsZXg/OiAnZ3JvdycgfCAnc2hyaW5rJyB8ICdub25lJyxcbiAgaGVpZ2h0PzogbnVtYmVyIHwgc3RyaW5nLFxuICBqdXN0aWZ5Q29udGVudD86ICdzdGFydCcgfCAnZW5kJyB8ICdjZW50ZXInIHwgJ2JldHdlZW4nIHwgJ2Fyb3VuZCcsXG4gIGxlZnQ/OiBib29sZWFuLFxuXG4gIG1hcmdpblN0YXJ0PzogTWFyZ2luLFxuICBtYXJnaW5FbmQ/OiBNYXJnaW4sXG5cbiAgbWFyZ2luPzogTWFyZ2luLFxuICBtYXJnaW5Ub3A/OiBNYXJnaW4sXG4gIG1hcmdpblJpZ2h0PzogTWFyZ2luLFxuICBtYXJnaW5Cb3R0b20/OiBNYXJnaW4sXG4gIG1hcmdpbkxlZnQ/OiBNYXJnaW4sXG5cbiAgc21NYXJnaW4/OiBNYXJnaW4sXG4gIHNtTWFyZ2luVG9wPzogTWFyZ2luLFxuICBzbU1hcmdpblJpZ2h0PzogTWFyZ2luLFxuICBzbU1hcmdpbkJvdHRvbT86IE1hcmdpbixcbiAgc21NYXJnaW5MZWZ0PzogTWFyZ2luLFxuXG4gIG1kTWFyZ2luPzogTWFyZ2luLFxuICBtZE1hcmdpblRvcD86IE1hcmdpbixcbiAgbWRNYXJnaW5SaWdodD86IE1hcmdpbixcbiAgbWRNYXJnaW5Cb3R0b20/OiBNYXJnaW4sXG4gIG1kTWFyZ2luTGVmdD86IE1hcmdpbixcblxuICBsZ01hcmdpbj86IE1hcmdpbixcbiAgbGdNYXJnaW5Ub3A/OiBNYXJnaW4sXG4gIGxnTWFyZ2luUmlnaHQ/OiBNYXJnaW4sXG4gIGxnTWFyZ2luQm90dG9tPzogTWFyZ2luLFxuICBsZ01hcmdpbkxlZnQ/OiBNYXJnaW4sXG5cbiAgbWF4SGVpZ2h0PzogbnVtYmVyIHwgc3RyaW5nLFxuICBtYXhXaWR0aD86IG51bWJlciB8IHN0cmluZyxcbiAgbWluSGVpZ2h0PzogbnVtYmVyIHwgc3RyaW5nLFxuICBtaW5XaWR0aD86IG51bWJlciB8IHN0cmluZyxcblxuICBvdmVyZmxvdz86ICd2aXNpYmxlJyB8ICdoaWRkZW4nIHwgJ3Njcm9sbCcgfCAnc2Nyb2xsWCcgfCAnc2Nyb2xsWScgfCAnYXV0bycsXG5cbiAgcGFkZGluZz86IFBhZGRpbmcsXG4gIHNtUGFkZGluZz86IFBhZGRpbmcsXG4gIG1kUGFkZGluZz86IFBhZGRpbmcsXG4gIGxnUGFkZGluZz86IFBhZGRpbmcsXG5cbiAgcGFkZGluZ1g/OiBQYWRkaW5nLFxuICBzbVBhZGRpbmdYPzogUGFkZGluZyxcbiAgbWRQYWRkaW5nWD86IFBhZGRpbmcsXG4gIGxnUGFkZGluZ1g/OiBQYWRkaW5nLFxuXG4gIHBhZGRpbmdZPzogUGFkZGluZyxcbiAgc21QYWRkaW5nWT86IFBhZGRpbmcsXG4gIG1kUGFkZGluZ1k/OiBQYWRkaW5nLFxuICBsZ1BhZGRpbmdZPzogUGFkZGluZyxcblxuICBwb3NpdGlvbj86ICdzdGF0aWMnIHwgJ2Fic29sdXRlJyB8ICdyZWxhdGl2ZScgfCAnZml4ZWQnLFxuICByaWdodD86IGJvb2xlYW4sXG4gIHNoYXBlPzpcbiAgICB8ICdzcXVhcmUnXG4gICAgfCAncm91bmRlZCdcbiAgICB8ICdwaWxsJ1xuICAgIHwgJ2NpcmNsZSdcbiAgICB8ICdyb3VuZGVkVG9wJ1xuICAgIHwgJ3JvdW5kZWRCb3R0b20nXG4gICAgfCAncm91bmRlZExlZnQnXG4gICAgfCAncm91bmRlZFJpZ2h0JyxcbiAgc2hyaW5rPzogYm9vbGVhbixcbiAgdG9wPzogYm9vbGVhbixcbiAgd2lkdGg/OiBudW1iZXIgfCBzdHJpbmcsXG4gIHdyYXA/OiBib29sZWFuLFxufTtcblxuLy8gLS1cblxuLypcblxuIyBUcmFuc2Zvcm1lcnNcblxuVGhpcyBpcyB3aGVyZSB0aGUgbWVhdCBhbmQgdGhlIGJvbmVzIG9mIEJveCdzIHRyYW5zZm9ybXMgYXJlLiBZb3UgY2FuIHJlYWQgbW9yZSBhYm91dCB0aGUgRFNMIGluIGAuL3RyYW5zZm9ybXMuanNgLCBidXQgYmFzaWNhbGx5IHRoZXkgYXJlIGEgc21hbGwgZGVjbGFyYXRpdmUgd2F5IG9mIHNwZWNpZnlpbmcgaG93IGEgcHJvcGVydHkgKGkuZS4gYG1hcmdpblRvcD17NH1gKSBnZXRzIHR1cm5lZCBpbnRvIGEgQ1NTIGNsYXNzIChgbWFyZ2luVG9wNGApLlxuXG5UaGVyZSdzIGEgbGl0dGxlIHByZWFtYmxlIGhlcmUsIGJ1dCBpdCBjdWxtaW5hdGVzIGluIGEgYmlnIG9iamVjdCBtYXBwaW5nIHRoZSBhY3R1YWwgcHJvcGVydHkgbmFtZXMgdG8gdGhlIHRyYW5zZm9ybWVyIHZhbHVlcy5cblxuKi9cblxuY29uc3QgbWFyZ2luU3RhcnQgPSBiaW5kKHJhbmdlV2l0aG91dFplcm8oJ21hcmdpblN0YXJ0JyksIHdoaXRlc3BhY2UpO1xuY29uc3QgbWFyZ2luRW5kID0gYmluZChyYW5nZVdpdGhvdXRaZXJvKCdtYXJnaW5FbmQnKSwgd2hpdGVzcGFjZSk7XG5jb25zdCBtYXJnaW5Ub3AgPSBiaW5kKHJhbmdlV2l0aG91dFplcm8oJ21hcmdpblRvcCcpLCB3aGl0ZXNwYWNlKTtcbmNvbnN0IG1hcmdpblJpZ2h0ID0gYmluZChyYW5nZVdpdGhvdXRaZXJvKCdtYXJnaW5SaWdodCcpLCB3aGl0ZXNwYWNlKTtcbmNvbnN0IG1hcmdpbkJvdHRvbSA9IGJpbmQocmFuZ2VXaXRob3V0WmVybygnbWFyZ2luQm90dG9tJyksIHdoaXRlc3BhY2UpO1xuY29uc3QgbWFyZ2luTGVmdCA9IGJpbmQocmFuZ2VXaXRob3V0WmVybygnbWFyZ2luTGVmdCcpLCB3aGl0ZXNwYWNlKTtcbmNvbnN0IG1hcmdpbiA9IHVuaW9uKG1hcmdpblRvcCwgbWFyZ2luQm90dG9tLCBtYXJnaW5MZWZ0LCBtYXJnaW5SaWdodCk7XG5cbmNvbnN0IHNtTWFyZ2luVG9wID0gYmluZChyYW5nZVdpdGhvdXRaZXJvKCdzbU1hcmdpblRvcCcpLCB3aGl0ZXNwYWNlKTtcbmNvbnN0IHNtTWFyZ2luUmlnaHQgPSBiaW5kKHJhbmdlV2l0aG91dFplcm8oJ3NtTWFyZ2luUmlnaHQnKSwgd2hpdGVzcGFjZSk7XG5jb25zdCBzbU1hcmdpbkJvdHRvbSA9IGJpbmQocmFuZ2VXaXRob3V0WmVybygnc21NYXJnaW5Cb3R0b20nKSwgd2hpdGVzcGFjZSk7XG5jb25zdCBzbU1hcmdpbkxlZnQgPSBiaW5kKHJhbmdlV2l0aG91dFplcm8oJ3NtTWFyZ2luTGVmdCcpLCB3aGl0ZXNwYWNlKTtcbmNvbnN0IHNtTWFyZ2luID0gdW5pb24oXG4gIHNtTWFyZ2luVG9wLFxuICBzbU1hcmdpbkJvdHRvbSxcbiAgc21NYXJnaW5MZWZ0LFxuICBzbU1hcmdpblJpZ2h0XG4pO1xuXG5jb25zdCBtZE1hcmdpblRvcCA9IGJpbmQocmFuZ2VXaXRob3V0WmVybygnbWRNYXJnaW5Ub3AnKSwgd2hpdGVzcGFjZSk7XG5jb25zdCBtZE1hcmdpblJpZ2h0ID0gYmluZChyYW5nZVdpdGhvdXRaZXJvKCdtZE1hcmdpblJpZ2h0JyksIHdoaXRlc3BhY2UpO1xuY29uc3QgbWRNYXJnaW5Cb3R0b20gPSBiaW5kKHJhbmdlV2l0aG91dFplcm8oJ21kTWFyZ2luQm90dG9tJyksIHdoaXRlc3BhY2UpO1xuY29uc3QgbWRNYXJnaW5MZWZ0ID0gYmluZChyYW5nZVdpdGhvdXRaZXJvKCdtZE1hcmdpbkxlZnQnKSwgd2hpdGVzcGFjZSk7XG5jb25zdCBtZE1hcmdpbiA9IHVuaW9uKFxuICBtZE1hcmdpblRvcCxcbiAgbWRNYXJnaW5Cb3R0b20sXG4gIG1kTWFyZ2luTGVmdCxcbiAgbWRNYXJnaW5SaWdodFxuKTtcblxuY29uc3QgbGdNYXJnaW5Ub3AgPSBiaW5kKHJhbmdlV2l0aG91dFplcm8oJ2xnTWFyZ2luVG9wJyksIHdoaXRlc3BhY2UpO1xuY29uc3QgbGdNYXJnaW5SaWdodCA9IGJpbmQocmFuZ2VXaXRob3V0WmVybygnbGdNYXJnaW5SaWdodCcpLCB3aGl0ZXNwYWNlKTtcbmNvbnN0IGxnTWFyZ2luQm90dG9tID0gYmluZChyYW5nZVdpdGhvdXRaZXJvKCdsZ01hcmdpbkJvdHRvbScpLCB3aGl0ZXNwYWNlKTtcbmNvbnN0IGxnTWFyZ2luTGVmdCA9IGJpbmQocmFuZ2VXaXRob3V0WmVybygnbGdNYXJnaW5MZWZ0JyksIHdoaXRlc3BhY2UpO1xuY29uc3QgbGdNYXJnaW4gPSB1bmlvbihcbiAgbGdNYXJnaW5Ub3AsXG4gIGxnTWFyZ2luQm90dG9tLFxuICBsZ01hcmdpbkxlZnQsXG4gIGxnTWFyZ2luUmlnaHRcbik7XG5cbmNvbnN0IHBhZGRpbmdYID0gYmluZChyYW5nZVdpdGhvdXRaZXJvKCdwYWRkaW5nWCcpLCB3aGl0ZXNwYWNlKTtcbmNvbnN0IHBhZGRpbmdZID0gYmluZChyYW5nZVdpdGhvdXRaZXJvKCdwYWRkaW5nWScpLCB3aGl0ZXNwYWNlKTtcbmNvbnN0IHBhZGRpbmcgPSB1bmlvbihwYWRkaW5nWCwgcGFkZGluZ1kpO1xuXG5jb25zdCBzbVBhZGRpbmdYID0gYmluZChyYW5nZVdpdGhvdXRaZXJvKCdzbVBhZGRpbmdYJyksIHdoaXRlc3BhY2UpO1xuY29uc3Qgc21QYWRkaW5nWSA9IGJpbmQocmFuZ2VXaXRob3V0WmVybygnc21QYWRkaW5nWScpLCB3aGl0ZXNwYWNlKTtcbmNvbnN0IHNtUGFkZGluZyA9IHVuaW9uKHNtUGFkZGluZ1gsIHNtUGFkZGluZ1kpO1xuXG5jb25zdCBtZFBhZGRpbmdYID0gYmluZChyYW5nZVdpdGhvdXRaZXJvKCdtZFBhZGRpbmdYJyksIHdoaXRlc3BhY2UpO1xuY29uc3QgbWRQYWRkaW5nWSA9IGJpbmQocmFuZ2VXaXRob3V0WmVybygnbWRQYWRkaW5nWScpLCB3aGl0ZXNwYWNlKTtcbmNvbnN0IG1kUGFkZGluZyA9IHVuaW9uKG1kUGFkZGluZ1gsIG1kUGFkZGluZ1kpO1xuXG5jb25zdCBsZ1BhZGRpbmdYID0gYmluZChyYW5nZVdpdGhvdXRaZXJvKCdsZ1BhZGRpbmdYJyksIHdoaXRlc3BhY2UpO1xuY29uc3QgbGdQYWRkaW5nWSA9IGJpbmQocmFuZ2VXaXRob3V0WmVybygnbGdQYWRkaW5nWScpLCB3aGl0ZXNwYWNlKTtcbmNvbnN0IGxnUGFkZGluZyA9IHVuaW9uKGxnUGFkZGluZ1gsIGxnUGFkZGluZ1kpO1xuXG4vKlxuXG5UaGVzZSBmdW5jdGlvbnMgYXJlIGxlZ2FjeS4gSSdkIGxpa2UgdG8gZ2V0IHJpZCBvZiBtb3N0IG9mIHRoaXMgZmlsZSdzIGRlcGVuZGVuY3kgb24gaW1wb3J0aW5nIGAuL3N0eWxlLmpzYCBkaXJlY3RseSBvbmNlIHRoZXNlIGFyZSByZW1vdmVkLlxuXG4qL1xuXG5jb25zdCBwcmVmaXggPSAocHJlOiBzdHJpbmcpID0+IG1hcENsYXNzTmFtZShuYW1lID0+IGAke3ByZX0ke25hbWV9YCk7XG5jb25zdCBkaXNwbGF5ID0gdmFsdWUgPT4ge1xuICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgY2FzZSAnZmxleCc6XG4gICAgICByZXR1cm4gZnJvbUNsYXNzTmFtZSgnRGlzcGxheUZsZXgnLCAnRGlyZWN0aW9uUm93Jyk7XG4gICAgY2FzZSAnZmxleENvbHVtbic6XG4gICAgICByZXR1cm4gZnJvbUNsYXNzTmFtZSgnRGlzcGxheUZsZXgnLCAnRGlyZWN0aW9uQ29sdW1uJyk7XG4gICAgY2FzZSAnaW5saW5lQmxvY2snOlxuICAgICAgcmV0dXJuIGZyb21DbGFzc05hbWUoJ0Rpc3BsYXlJbmxpbmVCbG9jaycpO1xuICAgIGNhc2UgJ3Zpc3VhbGx5SGlkZGVuJzpcbiAgICAgIHJldHVybiBmcm9tQ2xhc3NOYW1lKCdEaXNwbGF5VmlzdWFsbHlIaWRkZW4nKTtcbiAgICBjYXNlIGZhbHNlOlxuICAgICAgcmV0dXJuIGZyb21DbGFzc05hbWUoJ0Rpc3BsYXlOb25lJyk7XG4gICAgZGVmYXVsdDpcbiAgICAgIC8qIGJsb2NrICovXG4gICAgICByZXR1cm4gZnJvbUNsYXNzTmFtZSgnRGlzcGxheUJsb2NrJyk7XG4gIH1cbn07XG5jb25zdCBjb2x1bW4gPSByYW5nZSgnQ29sJyk7XG5cbmNvbnN0IGZvcm1hdEludEJvaW50ID0geCA9PiAoeCA8IDAgPyBgbiR7TWF0aC5hYnMoeCl9YCA6IHgudG9TdHJpbmcoKSk7XG5cbi8qXG5cbkl0J3MgcHJlZmVyYWJsZSB0byBwdXQgbmV3IHByb3BlcnRpZXMgaW50byB0aGF0IG9iamVjdCBkaXJlY3RseSBqdXN0IHNvIGl0J3MgZWFzaWVyIHRvIHJlYWQuXG5cbiovXG5cbmNvbnN0IHByb3BUb0ZuID0ge1xuICB4czogdmFsdWUgPT4ge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiBpZGVudGl0eSgpO1xuICAgIH1cbiAgICByZXR1cm4gbWFwQ2xhc3NOYW1lKGMgPT4gc3R5bGVzW2NdKShcbiAgICAgIHByZWZpeCgneHMnKShcbiAgICAgICAgY29uY2F0KFtcbiAgICAgICAgICB2YWx1ZS5jb2x1bW4gPyBjb2x1bW4odmFsdWUuY29sdW1uKSA6IGlkZW50aXR5KCksXG4gICAgICAgICAgdHlwZW9mIHZhbHVlLmRpc3BsYXkgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IGRpc3BsYXkodmFsdWUuZGlzcGxheSlcbiAgICAgICAgICAgIDogaWRlbnRpdHkoKSxcbiAgICAgICAgXSlcbiAgICAgIClcbiAgICApO1xuICB9LFxuICBzbTogdmFsdWUgPT4ge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiBpZGVudGl0eSgpO1xuICAgIH1cbiAgICByZXR1cm4gbWFwQ2xhc3NOYW1lKGMgPT4gc3R5bGVzW2NdKShcbiAgICAgIHByZWZpeCgnc20nKShcbiAgICAgICAgY29uY2F0KFtcbiAgICAgICAgICB2YWx1ZS5jb2x1bW4gPyBjb2x1bW4odmFsdWUuY29sdW1uKSA6IGlkZW50aXR5KCksXG4gICAgICAgICAgdHlwZW9mIHZhbHVlLmRpc3BsYXkgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IGRpc3BsYXkodmFsdWUuZGlzcGxheSlcbiAgICAgICAgICAgIDogaWRlbnRpdHkoKSxcbiAgICAgICAgXSlcbiAgICAgIClcbiAgICApO1xuICB9LFxuICBtZDogdmFsdWUgPT4ge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiBpZGVudGl0eSgpO1xuICAgIH1cbiAgICByZXR1cm4gbWFwQ2xhc3NOYW1lKGMgPT4gc3R5bGVzW2NdKShcbiAgICAgIHByZWZpeCgnbWQnKShcbiAgICAgICAgY29uY2F0KFtcbiAgICAgICAgICB2YWx1ZS5jb2x1bW4gPyBjb2x1bW4odmFsdWUuY29sdW1uKSA6IGlkZW50aXR5KCksXG4gICAgICAgICAgdHlwZW9mIHZhbHVlLmRpc3BsYXkgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IGRpc3BsYXkodmFsdWUuZGlzcGxheSlcbiAgICAgICAgICAgIDogaWRlbnRpdHkoKSxcbiAgICAgICAgXSlcbiAgICAgIClcbiAgICApO1xuICB9LFxuICBsZzogdmFsdWUgPT4ge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiBpZGVudGl0eSgpO1xuICAgIH1cbiAgICByZXR1cm4gbWFwQ2xhc3NOYW1lKGMgPT4gc3R5bGVzW2NdKShcbiAgICAgIHByZWZpeCgnbGcnKShcbiAgICAgICAgY29uY2F0KFtcbiAgICAgICAgICB2YWx1ZS5jb2x1bW4gPyBjb2x1bW4odmFsdWUuY29sdW1uKSA6IGlkZW50aXR5KCksXG4gICAgICAgICAgdHlwZW9mIHZhbHVlLmRpc3BsYXkgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IGRpc3BsYXkodmFsdWUuZGlzcGxheSlcbiAgICAgICAgICAgIDogaWRlbnRpdHkoKSxcbiAgICAgICAgXSlcbiAgICAgIClcbiAgICApO1xuICB9LFxuXG4gIGRpc3BsYXk6IG1hcHBpbmcoe1xuICAgIG5vbmU6IHN0eWxlcy54c0Rpc3BsYXlOb25lLFxuICAgIGZsZXg6IHN0eWxlcy54c0Rpc3BsYXlGbGV4LFxuICAgIGJsb2NrOiBzdHlsZXMueHNEaXNwbGF5QmxvY2ssXG4gICAgaW5saW5lQmxvY2s6IHN0eWxlcy54c0Rpc3BsYXlJbmxpbmVCbG9jayxcbiAgICB2aXN1YWxseUhpZGRlbjogc3R5bGVzLnhzRGlzcGxheVZpc3VhbGx5SGlkZGVuLFxuICB9KSxcbiAgY29sdW1uOiBiaW5kKHJhbmdlKCd4c0NvbCcpLCBzdHlsZXMpLFxuICBkaXJlY3Rpb246IG1hcHBpbmcoe1xuICAgIHJvdzogc3R5bGVzLnhzRGlyZWN0aW9uUm93LFxuICAgIGNvbHVtbjogc3R5bGVzLnhzRGlyZWN0aW9uQ29sdW1uLFxuICB9KSxcblxuICBzbURpc3BsYXk6IG1hcHBpbmcoe1xuICAgIG5vbmU6IHN0eWxlcy5zbURpc3BsYXlOb25lLFxuICAgIGZsZXg6IHN0eWxlcy5zbURpc3BsYXlGbGV4LFxuICAgIGJsb2NrOiBzdHlsZXMuc21EaXNwbGF5QmxvY2ssXG4gICAgaW5saW5lQmxvY2s6IHN0eWxlcy5zbURpc3BsYXlJbmxpbmVCbG9jayxcbiAgICB2aXN1YWxseUhpZGRlbjogc3R5bGVzLnNtRGlzcGxheVZpc3VhbGx5SGlkZGVuLFxuICB9KSxcbiAgc21Db2x1bW46IGJpbmQocmFuZ2UoJ3NtQ29sJyksIHN0eWxlcyksXG4gIHNtRGlyZWN0aW9uOiBtYXBwaW5nKHtcbiAgICByb3c6IHN0eWxlcy5zbURpcmVjdGlvblJvdyxcbiAgICBjb2x1bW46IHN0eWxlcy5zbURpcmVjdGlvbkNvbHVtbixcbiAgfSksXG5cbiAgbWREaXNwbGF5OiBtYXBwaW5nKHtcbiAgICBub25lOiBzdHlsZXMubWREaXNwbGF5Tm9uZSxcbiAgICBmbGV4OiBzdHlsZXMubWREaXNwbGF5RmxleCxcbiAgICBibG9jazogc3R5bGVzLm1kRGlzcGxheUJsb2NrLFxuICAgIGlubGluZUJsb2NrOiBzdHlsZXMubWREaXNwbGF5SW5saW5lQmxvY2ssXG4gICAgdmlzdWFsbHlIaWRkZW46IHN0eWxlcy5tZERpc3BsYXlWaXN1YWxseUhpZGRlbixcbiAgfSksXG4gIG1kQ29sdW1uOiBiaW5kKHJhbmdlKCdtZENvbCcpLCBzdHlsZXMpLFxuICBtZERpcmVjdGlvbjogbWFwcGluZyh7XG4gICAgcm93OiBzdHlsZXMubWREaXJlY3Rpb25Sb3csXG4gICAgY29sdW1uOiBzdHlsZXMubWREaXJlY3Rpb25Db2x1bW4sXG4gIH0pLFxuXG4gIGxnRGlzcGxheTogbWFwcGluZyh7XG4gICAgbm9uZTogc3R5bGVzLmxnRGlzcGxheU5vbmUsXG4gICAgZmxleDogc3R5bGVzLmxnRGlzcGxheUZsZXgsXG4gICAgYmxvY2s6IHN0eWxlcy5sZ0Rpc3BsYXlCbG9jayxcbiAgICBpbmxpbmVCbG9jazogc3R5bGVzLmxnRGlzcGxheUlubGluZUJsb2NrLFxuICAgIHZpc3VhbGx5SGlkZGVuOiBzdHlsZXMubGdEaXNwbGF5VmlzdWFsbHlIaWRkZW4sXG4gIH0pLFxuICBsZ0NvbHVtbjogYmluZChyYW5nZSgnbGdDb2wnKSwgc3R5bGVzKSxcbiAgbGdEaXJlY3Rpb246IG1hcHBpbmcoe1xuICAgIHJvdzogc3R5bGVzLmxnRGlyZWN0aW9uUm93LFxuICAgIGNvbHVtbjogc3R5bGVzLmxnRGlyZWN0aW9uQ29sdW1uLFxuICB9KSxcblxuICBhbGlnbkNvbnRlbnQ6IG1hcHBpbmcoe1xuICAgIHN0YXJ0OiBsYXlvdXQuY29udGVudFN0YXJ0LFxuICAgIGVuZDogbGF5b3V0LmNvbnRlbnRFbmQsXG4gICAgY2VudGVyOiBsYXlvdXQuY29udGVudENlbnRlcixcbiAgICBiZXR3ZWVuOiBsYXlvdXQuY29udGVudEJldHdlZW4sXG4gICAgYXJvdW5kOiBsYXlvdXQuY29udGVudEFyb3VuZCxcbiAgICAvLyBkZWZhdWx0OiBzdHJldGNoXG4gIH0pLFxuICBhbGlnbkl0ZW1zOiBtYXBwaW5nKHtcbiAgICBzdGFydDogbGF5b3V0Lml0ZW1zU3RhcnQsXG4gICAgZW5kOiBsYXlvdXQuaXRlbXNFbmQsXG4gICAgY2VudGVyOiBsYXlvdXQuaXRlbXNDZW50ZXIsXG4gICAgYmFzZWxpbmU6IGxheW91dC5pdGVtc0Jhc2VsaW5lLFxuICAgIC8vIGRlZmF1bHQ6IHN0cmV0Y2hcbiAgfSksXG4gIGFsaWduU2VsZjogbWFwcGluZyh7XG4gICAgc3RhcnQ6IGxheW91dC5zZWxmU3RhcnQsXG4gICAgZW5kOiBsYXlvdXQuc2VsZkVuZCxcbiAgICBjZW50ZXI6IGxheW91dC5zZWxmQ2VudGVyLFxuICAgIGJhc2VsaW5lOiBsYXlvdXQuc2VsZkJhc2VsaW5lLFxuICAgIHN0cmV0Y2g6IGxheW91dC5zZWxmU3RyZXRjaCxcbiAgICAvLyBkZWZhdWx0OiBhdXRvXG4gIH0pLFxuICBib3R0b206IHRvZ2dsZShsYXlvdXQuYm90dG9tMCksXG4gIGNvbG9yOiBtYXBwaW5nKHtcbiAgICBibHVlOiBjb2xvcnMuYmx1ZUJnLFxuICAgIGRhcmtHcmF5OiBjb2xvcnMuZGFya0dyYXlCZyxcbiAgICBwaW5lOiBjb2xvcnMucGluZUJnLFxuICAgIGdyYXk6IGNvbG9ycy5ncmF5QmcsXG4gICAgcmVkOiBjb2xvcnMucmVkQmcsXG4gICAgb2xpdmU6IGNvbG9ycy5vbGl2ZUJnLFxuICAgIGxpZ2h0R3JheTogY29sb3JzLmxpZ2h0R3JheUJnLFxuICAgIHdoaXRlOiBjb2xvcnMud2hpdGVCZyxcbiAgICBvcmFuZ2U6IGNvbG9ycy5vcmFuZ2VCZyxcbiAgICBncmVlbjogY29sb3JzLmdyZWVuQmcsXG4gICAgbmF2eTogY29sb3JzLm5hdnlCZyxcbiAgICBtaWRuaWdodDogY29sb3JzLm1pZG5pZ2h0QmcsXG4gICAgcHVycGxlOiBjb2xvcnMucHVycGxlQmcsXG4gICAgb3JjaGlkOiBjb2xvcnMub3JjaGlkQmcsXG4gICAgZWdncGxhbnQ6IGNvbG9ycy5lZ2dwbGFudEJnLFxuICAgIG1hcm9vbjogY29sb3JzLm1hcm9vbkJnLFxuICAgIHdhdGVybWVsb246IGNvbG9ycy53YXRlcm1lbG9uQmcsXG4gICAgbGlnaHRXYXNoOiBjb2xvcnMubGlnaHRXYXNoQmcsXG4gICAgZGFya1dhc2g6IGNvbG9ycy5kYXJrV2FzaEJnLFxuICAgIC8vIGRlZmF1bHQ6IHRyYW5zcGFyZW50XG4gIH0pLFxuICBmaXQ6IHRvZ2dsZShsYXlvdXQuZml0KSxcbiAgZmxleDogbWFwcGluZyh7XG4gICAgZ3JvdzogbGF5b3V0LmZsZXhHcm93LFxuICAgIG5vbmU6IGxheW91dC5mbGV4Tm9uZSxcbiAgICAvLyBkZWZhdWx0OiBzaHJpbmtcbiAgfSksXG4gIGhlaWdodDogaGVpZ2h0ID0+IGZyb21JbmxpbmVTdHlsZSh7IGhlaWdodCB9KSxcbiAganVzdGlmeUNvbnRlbnQ6IG1hcHBpbmcoe1xuICAgIGVuZDogbGF5b3V0Lmp1c3RpZnlFbmQsXG4gICAgY2VudGVyOiBsYXlvdXQuanVzdGlmeUNlbnRlcixcbiAgICBiZXR3ZWVuOiBsYXlvdXQuanVzdGlmeUJldHdlZW4sXG4gICAgYXJvdW5kOiBsYXlvdXQuanVzdGlmeUFyb3VuZCxcbiAgICAvLyBkZWZhdWx0OiBzdGFydFxuICB9KSxcbiAgbGVmdDogdG9nZ2xlKGxheW91dC5sZWZ0MCksXG4gIGRlcHJlY2F0ZWRNYXJnaW46IHZhbHVlID0+IHtcbiAgICBsZXQgbXQgPSBpZGVudGl0eSgpO1xuICAgIGxldCBtYiA9IGlkZW50aXR5KCk7XG4gICAgbGV0IG1sID0gaWRlbnRpdHkoKTtcbiAgICBsZXQgbXIgPSBpZGVudGl0eSgpO1xuICAgIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICByZXR1cm4gZnJvbUNsYXNzTmFtZSh3aGl0ZXNwYWNlTGVnYWN5W2BtJHtmb3JtYXRJbnRCb2ludCh2YWx1ZSl9YF0pO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKHZhbHVlLnRvcCkge1xuICAgICAgICAgIG10ID0gZnJvbUNsYXNzTmFtZShcbiAgICAgICAgICAgIHdoaXRlc3BhY2VMZWdhY3lbYG10JHtmb3JtYXRJbnRCb2ludCh2YWx1ZS50b3ApfWBdXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZS5ib3R0b20pIHtcbiAgICAgICAgICBtYiA9IGZyb21DbGFzc05hbWUoXG4gICAgICAgICAgICB3aGl0ZXNwYWNlTGVnYWN5W2BtYiR7Zm9ybWF0SW50Qm9pbnQodmFsdWUuYm90dG9tKX1gXVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUubGVmdCkge1xuICAgICAgICAgIG1sID0gZnJvbUNsYXNzTmFtZShcbiAgICAgICAgICAgIHZhbHVlLmxlZnQgPT09ICdhdXRvJ1xuICAgICAgICAgICAgICA/IHdoaXRlc3BhY2VMZWdhY3kubWxBdXRvXG4gICAgICAgICAgICAgIDogd2hpdGVzcGFjZUxlZ2FjeVtgbWwke2Zvcm1hdEludEJvaW50KHZhbHVlLmxlZnQpfWBdXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZS5yaWdodCkge1xuICAgICAgICAgIG1yID0gZnJvbUNsYXNzTmFtZShcbiAgICAgICAgICAgIHZhbHVlLnJpZ2h0ID09PSAnYXV0bydcbiAgICAgICAgICAgICAgPyB3aGl0ZXNwYWNlTGVnYWN5Lm1yQXV0b1xuICAgICAgICAgICAgICA6IHdoaXRlc3BhY2VMZWdhY3lbYG1yJHtmb3JtYXRJbnRCb2ludCh2YWx1ZS5yaWdodCl9YF1cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb25jYXQoW210LCBtYiwgbWwsIG1yXSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gaWRlbnRpdHkoKTtcbiAgICB9XG4gIH0sXG4gIG1hcmdpblN0YXJ0LFxuICBtYXJnaW5FbmQsXG4gIG1hcmdpbixcbiAgbWFyZ2luVG9wLFxuICBtYXJnaW5SaWdodCxcbiAgbWFyZ2luQm90dG9tLFxuICBtYXJnaW5MZWZ0LFxuICBzbU1hcmdpbixcbiAgc21NYXJnaW5Ub3AsXG4gIHNtTWFyZ2luUmlnaHQsXG4gIHNtTWFyZ2luQm90dG9tLFxuICBzbU1hcmdpbkxlZnQsXG4gIG1kTWFyZ2luLFxuICBtZE1hcmdpblRvcCxcbiAgbWRNYXJnaW5SaWdodCxcbiAgbWRNYXJnaW5Cb3R0b20sXG4gIG1kTWFyZ2luTGVmdCxcbiAgbGdNYXJnaW4sXG4gIGxnTWFyZ2luVG9wLFxuICBsZ01hcmdpblJpZ2h0LFxuICBsZ01hcmdpbkJvdHRvbSxcbiAgbGdNYXJnaW5MZWZ0LFxuICBtYXhIZWlnaHQ6IG1heEhlaWdodCA9PiBmcm9tSW5saW5lU3R5bGUoeyBtYXhIZWlnaHQgfSksXG4gIG1heFdpZHRoOiBtYXhXaWR0aCA9PiBmcm9tSW5saW5lU3R5bGUoeyBtYXhXaWR0aCB9KSxcbiAgbWluSGVpZ2h0OiBtaW5IZWlnaHQgPT4gZnJvbUlubGluZVN0eWxlKHsgbWluSGVpZ2h0IH0pLFxuICBtaW5XaWR0aDogbWluV2lkdGggPT4gZnJvbUlubGluZVN0eWxlKHsgbWluV2lkdGggfSksXG4gIG92ZXJmbG93OiBtYXBwaW5nKHtcbiAgICBoaWRkZW46IGxheW91dC5vdmVyZmxvd0hpZGRlbixcbiAgICBzY3JvbGw6IGxheW91dC5vdmVyZmxvd1Njcm9sbCxcbiAgICBhdXRvOiBsYXlvdXQub3ZlcmZsb3dBdXRvLFxuICAgIHNjcm9sbFg6IGxheW91dC5vdmVyZmxvd1Njcm9sbFgsXG4gICAgc2Nyb2xsWTogbGF5b3V0Lm92ZXJmbG93U2Nyb2xsWSxcbiAgICAvLyBkZWZhdWx0OiB2aXNpYmxlXG4gIH0pLFxuICBkZXByZWNhdGVkUGFkZGluZzogdmFsdWUgPT4ge1xuICAgIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICByZXR1cm4gZnJvbUNsYXNzTmFtZSh3aGl0ZXNwYWNlTGVnYWN5W2BwJHt2YWx1ZX1gXSk7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gY29uY2F0KFtcbiAgICAgICAgICB2YWx1ZS54XG4gICAgICAgICAgICA/IGZyb21DbGFzc05hbWUod2hpdGVzcGFjZUxlZ2FjeVtgcHgke3ZhbHVlLnh9YF0pXG4gICAgICAgICAgICA6IGlkZW50aXR5KCksXG4gICAgICAgICAgdmFsdWUueVxuICAgICAgICAgICAgPyBmcm9tQ2xhc3NOYW1lKHdoaXRlc3BhY2VMZWdhY3lbYHB5JHt2YWx1ZS55fWBdKVxuICAgICAgICAgICAgOiBpZGVudGl0eSgpLFxuICAgICAgICBdKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBpZGVudGl0eSgpO1xuICAgIH1cbiAgfSxcbiAgcGFkZGluZyxcbiAgcGFkZGluZ1gsXG4gIHBhZGRpbmdZLFxuICBzbVBhZGRpbmcsXG4gIHNtUGFkZGluZ1gsXG4gIHNtUGFkZGluZ1ksXG4gIG1kUGFkZGluZyxcbiAgbWRQYWRkaW5nWCxcbiAgbWRQYWRkaW5nWSxcbiAgbGdQYWRkaW5nLFxuICBsZ1BhZGRpbmdYLFxuICBsZ1BhZGRpbmdZLFxuICBwb3NpdGlvbjogbWFwcGluZyh7XG4gICAgYWJzb2x1dGU6IGxheW91dC5hYnNvbHV0ZSxcbiAgICByZWxhdGl2ZTogbGF5b3V0LnJlbGF0aXZlLFxuICAgIGZpeGVkOiBsYXlvdXQuZml4ZWQsXG4gICAgLy8gZGVmYXVsdDogc3RhdGljXG4gIH0pLFxuICByaWdodDogdG9nZ2xlKGxheW91dC5yaWdodDApLFxuICBzaGFwZTogbWFwcGluZyh7XG4gICAgY2lyY2xlOiBib3JkZXJzLmNpcmNsZSxcbiAgICBwaWxsOiBib3JkZXJzLnBpbGwsXG4gICAgcm91bmRlZDogYm9yZGVycy5yb3VuZGVkLFxuICAgIHJvdW5kZWRCb3R0b206IGJvcmRlcnMucm91bmRlZEJvdHRvbSxcbiAgICByb3VuZGVkTGVmdDogYm9yZGVycy5yb3VuZGVkTGVmdCxcbiAgICByb3VuZGVkUmlnaHQ6IGJvcmRlcnMucm91bmRlZFJpZ2h0LFxuICAgIHJvdW5kZWRUb3A6IGJvcmRlcnMucm91bmRlZFRvcCxcbiAgICAvLyBkZWZhdWx0OiBzcXVhcmVcbiAgfSksXG4gIHRvcDogdG9nZ2xlKGxheW91dC50b3AwKSxcbiAgd2lkdGg6IHdpZHRoID0+IGZyb21JbmxpbmVTdHlsZSh7IHdpZHRoIH0pLFxuICB3cmFwOiB0b2dnbGUobGF5b3V0LmZsZXhXcmFwKSxcbiAgZGFuZ2Vyb3VzbHlTZXRJbmxpbmVTdHlsZTogdmFsdWUgPT5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbiAgICB2YWx1ZSAmJiB2YWx1ZS5fX3N0eWxlID8gZnJvbUlubGluZVN0eWxlKHZhbHVlLl9fc3R5bGUpIDogaWRlbnRpdHkoKSxcbn07XG5cbi8qXG5cbiMgVGhlIENvbXBvbmVudFxuXG4qL1xuXG5jb25zdCBjb250YWlucyA9IChrZXksIGFycikgPT4gYXJyLmluZGV4T2Yoa2V5KSA+PSAwO1xuY29uc3Qgb21pdCA9IChrZXlzLCBvYmopID0+XG4gIE9iamVjdC5rZXlzKG9iaikucmVkdWNlKChhY2MsIGspID0+IHtcbiAgICBpZiAoY29udGFpbnMoaywga2V5cykpIHtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAuLi5hY2MsXG4gICAgICBba106IG9ialtrXSxcbiAgICB9O1xuICB9LCB7fSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJveCh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9OiBQcm9wVHlwZSkge1xuICAvLyBGbG93IGNhbid0IHJlYXNvbiBhYm91dCB0aGUgY29uc3RhbnQgbmF0dXJlIG9mIE9iamVjdC5rZXlzIHNvIHdlIGNhbid0IHVzZVxuICAvLyBhIGZ1bmN0aW9uYWwgKHJlZHVjZSkgc3R5bGUgaGVyZS5cblxuICAvLyBCb3ggaXMgYSBcInBhc3MtdGhyb3VnaFwiIGNvbXBvbmVudCwgbWVhbmluZyB0aGF0IGlmIHlvdSBwYXNzIHByb3BlcnRpZXMgdG9cbiAgLy8gaXQgdGhhdCBpdCBkb2Vzbid0IGtub3cgYWJvdXQgKGBhcmlhLWxhYmVsYCBmb3IgaW5zdGFuY2UpIGl0IHBhc3Nlc1xuICAvLyBkaXJlY3RseSBiYWNrIHRvIHRoZSB1bmRlcmx5aW5nIGA8ZGl2Lz5gLiBUaGF0J3MgZ2VuZXJhbGx5IHVzZWZ1bCwgYnV0XG4gIC8vIHdlJ2QgYWxzbyBsaWtlIHRvIHN0cmlwIG91dCBhIGZldyBuYXVnaHR5IHByb3BlcnRpZXMgdGhhdCBicmVhayBzdHlsZVxuICAvLyBlbmNhcHN1bGF0aW9uIChjbGFzc05hbWUsIHN0eWxlKSBvciBhY2Nlc3NpYmlsaXR5IChvbkNsaWNrKS5cbiAgbGV0IGJsYWNrbGlzdCA9IFsnb25DbGljaycsICdjbGFzc05hbWUnLCAnc3R5bGUnXTtcblxuICAvLyBBbGwgQm94J3MgYXJlIGJveC1zaXplZCBieSBkZWZhdWx0LCBzbyB3ZSBzdGFydCBvZmYgYnVpbGRpbmcgdXAgdGhlIHN0eWxlc1xuICAvLyB0byBiZSBhcHBsaWVkIHdpdGggYSBCb3ggYmFzZSBjbGFzcy5cbiAgbGV0IHMgPSBmcm9tQ2xhc3NOYW1lKHN0eWxlcy5ib3gpO1xuXG4gIC8vIFRoaXMgbG9vcHMgdGhyb3VnaCBlYWNoIHByb3BlcnR5IGFuZCBpZiBpdCBleGlzdHMgaW4gdGhlIHByZXZpb3VzbHlcbiAgLy8gZGVmaW5lZCB0cmFuc2Zvcm0gbWFwLCBjb25jYXRlbnRlcyB0aGUgcmVzdWx0aW5nIHN0eWxlcyB0byB0aGUgYmFzZVxuICAvLyBzdHlsZXMuIElmIHRoZXJlJ3MgYSBtYXRjaCwgd2UgYWxzbyBkb24ndCBwYXNzIHRocm91Z2ggdGhhdCBwcm9wZXJ0eS4gVGhpc1xuICAvLyBtZWFucyBCb3gncyBydW50aW1lIGlzIG9ubHkgZGVwZW5kZW50IG9uIHRoZSBudW1iZXIgb2YgcHJvcGVydGllcyBwYXNzZWRcbiAgLy8gdG8gaXQgKHdoaWNoIGlzIHR5cGljYWxseSBzbWFsbCkgaW5zdGVhZCBvZiB0aGUgdG90YWwgbnVtYmVyIG9mIHBvc3NpYmxlXG4gIC8vIHByb3BlcnRpZXMgKH4zMCBvciBzbykuIFdoaWxlIGl0IG1heSB+ZmVlbH4gbGlrZSBCb3ggaXMgaW5uZWZmaWNpZW50LCBpdHNcbiAgLy8gYmlnZ2VzdCBwZXJmb3JtYW5jZSBpbXBhY3QgaXMgb24gc3RhcnR1cCB0aW1lIGJlY2F1c2UgdGhlcmUncyBzbyBtdWNoIGNvZGVcbiAgLy8gaGVyZS5cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgZm9yIChjb25zdCBwcm9wIGluIHByb3BzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwcm9wVG9GbiwgcHJvcCkpIHtcbiAgICAgIGNvbnN0IGZuID0gcHJvcFRvRm5bcHJvcF07XG4gICAgICBjb25zdCB2YWx1ZSA9IHByb3BzW3Byb3BdO1xuICAgICAgYmxhY2tsaXN0ID0gYmxhY2tsaXN0LmNvbmNhdChwcm9wKTtcbiAgICAgIHMgPSBjb25jYXQoW3MsIGZuKHZhbHVlKV0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFuZC4uLiBtYWdpYyFcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHsuLi5vbWl0KGJsYWNrbGlzdCwgcHJvcHMpfSB7Li4udG9Qcm9wcyhzKX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbi8qXG5cbiMgUHJvcFR5cGVzXG5cbkFuZCB3ZSdyZSBkb25lIGhlcmUgOilcblxuKi9cblxuY29uc3QgQ29sdW1uUHJvcFR5cGUgPSBQcm9wVHlwZXMub25lT2YoW1xuICAwLFxuICAxLFxuICAyLFxuICAzLFxuICA0LFxuICA1LFxuICA2LFxuICA3LFxuICA4LFxuICA5LFxuICAxMCxcbiAgMTEsXG4gIDEyLFxuXSk7XG5cbmNvbnN0IE1hcmdpblByb3BUeXBlID0gUHJvcFR5cGVzLm9uZU9mKFtcbiAgLTEyLFxuICAtMTEsXG4gIC0xMCxcbiAgLTksXG4gIC04LFxuICAtNyxcbiAgLTYsXG4gIC01LFxuICAtNCxcbiAgLTMsXG4gIC0yLFxuICAtMSxcbiAgMCxcbiAgMSxcbiAgMixcbiAgMyxcbiAgNCxcbiAgNSxcbiAgNixcbiAgNyxcbiAgOCxcbiAgOSxcbiAgMTAsXG4gIDExLFxuICAxMixcbl0pO1xuXG5jb25zdCBQYWRkaW5nUHJvcFR5cGUgPSBQcm9wVHlwZXMub25lT2YoW1xuICAwLFxuICAxLFxuICAyLFxuICAzLFxuICA0LFxuICA1LFxuICA2LFxuICA3LFxuICA4LFxuICA5LFxuICAxMCxcbiAgMTEsXG4gIDEyLFxuXSk7XG5cbkJveC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgZGFuZ2Vyb3VzbHlTZXRJbmxpbmVTdHlsZTogUHJvcFR5cGVzLmV4YWN0KHtcbiAgICBfX3N0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICB9KSxcblxuICB4czogUHJvcFR5cGVzLmV4YWN0KHtcbiAgICBkaXNwbGF5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgUHJvcFR5cGVzLm9uZU9mKFsnZmxleCcsICdmbGV4Q29sdW1uJywgJ2lubGluZUJsb2NrJ10pLFxuICAgIF0pLFxuICAgIGNvbHVtbjogUHJvcFR5cGVzLm51bWJlcixcbiAgfSksXG4gIHNtOiBQcm9wVHlwZXMuZXhhY3Qoe1xuICAgIGRpc3BsYXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgICBQcm9wVHlwZXMub25lT2YoWydmbGV4JywgJ2ZsZXhDb2x1bW4nLCAnaW5saW5lQmxvY2snXSksXG4gICAgXSksXG4gICAgY29sdW1uOiBQcm9wVHlwZXMubnVtYmVyLFxuICB9KSxcbiAgbWQ6IFByb3BUeXBlcy5leGFjdCh7XG4gICAgZGlzcGxheTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIFByb3BUeXBlcy5vbmVPZihbJ2ZsZXgnLCAnZmxleENvbHVtbicsICdpbmxpbmVCbG9jayddKSxcbiAgICBdKSxcbiAgICBjb2x1bW46IFByb3BUeXBlcy5udW1iZXIsXG4gIH0pLFxuICBsZzogUHJvcFR5cGVzLmV4YWN0KHtcbiAgICBkaXNwbGF5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgUHJvcFR5cGVzLm9uZU9mKFsnZmxleCcsICdmbGV4Q29sdW1uJywgJ2lubGluZUJsb2NrJ10pLFxuICAgIF0pLFxuICAgIGNvbHVtbjogUHJvcFR5cGVzLm51bWJlcixcbiAgfSksXG4gIGRlcHJlY2F0ZWRNYXJnaW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHRvcDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIGJvdHRvbTogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIGxlZnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5vbmVPZihbJ2F1dG8nXSldKSxcbiAgICAgIHJpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMub25lT2YoWydhdXRvJ10pXSksXG4gICAgfSksXG4gIF0pLFxuICBkZXByZWNhdGVkUGFkZGluZzogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgeDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIHk6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgfSksXG4gIF0pLFxuXG4gIGRpc3BsYXk6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgJ25vbmUnLFxuICAgICdmbGV4JyxcbiAgICAnYmxvY2snLFxuICAgICdpbmxpbmVCbG9jaycsXG4gICAgJ3Zpc3VhbGx5SGlkZGVuJyxcbiAgXSksXG4gIGRpcmVjdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsncm93JywgJ2NvbHVtbiddKSxcbiAgY29sdW1uOiBDb2x1bW5Qcm9wVHlwZSxcblxuICBzbURpc3BsYXk6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgJ25vbmUnLFxuICAgICdmbGV4JyxcbiAgICAnYmxvY2snLFxuICAgICdpbmxpbmVCbG9jaycsXG4gICAgJ3Zpc3VhbGx5SGlkZGVuJyxcbiAgXSksXG4gIHNtRGlyZWN0aW9uOiBQcm9wVHlwZXMub25lT2YoWydyb3cnLCAnY29sdW1uJ10pLFxuICBzbUNvbHVtbjogQ29sdW1uUHJvcFR5cGUsXG5cbiAgbWREaXNwbGF5OiBQcm9wVHlwZXMub25lT2YoW1xuICAgICdub25lJyxcbiAgICAnZmxleCcsXG4gICAgJ2Jsb2NrJyxcbiAgICAnaW5saW5lQmxvY2snLFxuICAgICd2aXN1YWxseUhpZGRlbicsXG4gIF0pLFxuICBtZERpcmVjdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsncm93JywgJ2NvbHVtbiddKSxcbiAgbWRDb2x1bW46IENvbHVtblByb3BUeXBlLFxuXG4gIGxnRGlzcGxheTogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAnbm9uZScsXG4gICAgJ2ZsZXgnLFxuICAgICdibG9jaycsXG4gICAgJ2lubGluZUJsb2NrJyxcbiAgICAndmlzdWFsbHlIaWRkZW4nLFxuICBdKSxcbiAgbGdEaXJlY3Rpb246IFByb3BUeXBlcy5vbmVPZihbJ3JvdycsICdjb2x1bW4nXSksXG4gIGxnQ29sdW1uOiBDb2x1bW5Qcm9wVHlwZSxcblxuICBhbGlnbkNvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgJ3N0YXJ0JyxcbiAgICAnZW5kJyxcbiAgICAnY2VudGVyJyxcbiAgICAnYmV0d2VlbicsXG4gICAgJ2Fyb3VuZCcsXG4gICAgJ3N0cmV0Y2gnLFxuICBdKSxcbiAgYWxpZ25JdGVtczogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAnc3RhcnQnLFxuICAgICdlbmQnLFxuICAgICdjZW50ZXInLFxuICAgICdiYXNlbGluZScsXG4gICAgJ3N0cmV0Y2gnLFxuICBdKSxcbiAgYWxpZ25TZWxmOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICdhdXRvJyxcbiAgICAnc3RhcnQnLFxuICAgICdlbmQnLFxuICAgICdjZW50ZXInLFxuICAgICdiYXNlbGluZScsXG4gICAgJ3N0cmV0Y2gnLFxuICBdKSxcbiAgYm90dG9tOiBQcm9wVHlwZXMuYm9vbCxcbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgJ2JsdWUnLFxuICAgICdkYXJrR3JheScsXG4gICAgJ2RhcmtXYXNoJyxcbiAgICAnZWdncGxhbnQnLFxuICAgICdncmF5JyxcbiAgICAnZ3JlZW4nLFxuICAgICdsaWdodEdyYXknLFxuICAgICdsaWdodFdhc2gnLFxuICAgICdtYXJvb24nLFxuICAgICdtaWRuaWdodCcsXG4gICAgJ25hdnknLFxuICAgICdvbGl2ZScsXG4gICAgJ29yYW5nZScsXG4gICAgJ29yY2hpZCcsXG4gICAgJ3BpbmUnLFxuICAgICdwdXJwbGUnLFxuICAgICdyZWQnLFxuICAgICd0cmFuc3BhcmVudCcsXG4gICAgJ3dhdGVybWVsb24nLFxuICAgICd3aGl0ZScsXG4gIF0pLFxuICBmaXQ6IFByb3BUeXBlcy5ib29sLFxuICBmbGV4OiBQcm9wVHlwZXMub25lT2YoWydncm93JywgJ3NocmluaycsICdub25lJ10pLFxuICBncm93OiBQcm9wVHlwZXMuYm9vbCxcbiAgaGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIGp1c3RpZnlDb250ZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgICdzdGFydCcsXG4gICAgJ2VuZCcsXG4gICAgJ2NlbnRlcicsXG4gICAgJ2JldHdlZW4nLFxuICAgICdhcm91bmQnLFxuICBdKSxcbiAgbGVmdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgbWFyZ2luU3RhcnQ6IE1hcmdpblByb3BUeXBlLFxuICBtYXJnaW5FbmQ6IE1hcmdpblByb3BUeXBlLFxuXG4gIG1hcmdpbjogTWFyZ2luUHJvcFR5cGUsXG4gIG1hcmdpblRvcDogTWFyZ2luUHJvcFR5cGUsXG4gIG1hcmdpblJpZ2h0OiBNYXJnaW5Qcm9wVHlwZSxcbiAgbWFyZ2luQm90dG9tOiBNYXJnaW5Qcm9wVHlwZSxcbiAgbWFyZ2luTGVmdDogTWFyZ2luUHJvcFR5cGUsXG5cbiAgc21NYXJnaW46IE1hcmdpblByb3BUeXBlLFxuICBzbU1hcmdpblRvcDogTWFyZ2luUHJvcFR5cGUsXG4gIHNtTWFyZ2luUmlnaHQ6IE1hcmdpblByb3BUeXBlLFxuICBzbU1hcmdpbkJvdHRvbTogTWFyZ2luUHJvcFR5cGUsXG4gIHNtTWFyZ2luTGVmdDogTWFyZ2luUHJvcFR5cGUsXG5cbiAgbWRNYXJnaW46IE1hcmdpblByb3BUeXBlLFxuICBtZE1hcmdpblRvcDogTWFyZ2luUHJvcFR5cGUsXG4gIG1kTWFyZ2luUmlnaHQ6IE1hcmdpblByb3BUeXBlLFxuICBtZE1hcmdpbkJvdHRvbTogTWFyZ2luUHJvcFR5cGUsXG4gIG1kTWFyZ2luTGVmdDogTWFyZ2luUHJvcFR5cGUsXG5cbiAgbGdNYXJnaW46IE1hcmdpblByb3BUeXBlLFxuICBsZ01hcmdpblRvcDogTWFyZ2luUHJvcFR5cGUsXG4gIGxnTWFyZ2luUmlnaHQ6IE1hcmdpblByb3BUeXBlLFxuICBsZ01hcmdpbkJvdHRvbTogTWFyZ2luUHJvcFR5cGUsXG4gIGxnTWFyZ2luTGVmdDogTWFyZ2luUHJvcFR5cGUsXG5cbiAgbWF4SGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIG1heFdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIG1pbkhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBtaW5XaWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gIG92ZXJmbG93OiBQcm9wVHlwZXMub25lT2YoW1xuICAgICd2aXNpYmxlJyxcbiAgICAnaGlkZGVuJyxcbiAgICAnc2Nyb2xsJyxcbiAgICAnc2Nyb2xsWCcsXG4gICAgJ3Njcm9sbFknLFxuICAgICdhdXRvJyxcbiAgXSksXG5cbiAgcGFkZGluZzogUGFkZGluZ1Byb3BUeXBlLFxuICBwYWRkaW5nWDogUGFkZGluZ1Byb3BUeXBlLFxuICBwYWRkaW5nWTogUGFkZGluZ1Byb3BUeXBlLFxuXG4gIHNtUGFkZGluZzogUGFkZGluZ1Byb3BUeXBlLFxuICBzbVBhZGRpbmdYOiBQYWRkaW5nUHJvcFR5cGUsXG4gIHNtUGFkZGluZ1k6IFBhZGRpbmdQcm9wVHlwZSxcblxuICBtZFBhZGRpbmc6IFBhZGRpbmdQcm9wVHlwZSxcbiAgbWRQYWRkaW5nWDogUGFkZGluZ1Byb3BUeXBlLFxuICBtZFBhZGRpbmdZOiBQYWRkaW5nUHJvcFR5cGUsXG5cbiAgbGdQYWRkaW5nOiBQYWRkaW5nUHJvcFR5cGUsXG4gIGxnUGFkZGluZ1g6IFBhZGRpbmdQcm9wVHlwZSxcbiAgbGdQYWRkaW5nWTogUGFkZGluZ1Byb3BUeXBlLFxuXG4gIHBvc2l0aW9uOiBQcm9wVHlwZXMub25lT2YoWydzdGF0aWMnLCAnYWJzb2x1dGUnLCAncmVsYXRpdmUnLCAnZml4ZWQnXSksXG4gIHJpZ2h0OiBQcm9wVHlwZXMuYm9vbCxcbiAgc2hhcGU6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgJ3NxdWFyZScsXG4gICAgJ3JvdW5kZWQnLFxuICAgICdwaWxsJyxcbiAgICAnY2lyY2xlJyxcbiAgICAncm91bmRlZFRvcCcsXG4gICAgJ3JvdW5kZWRCb3R0b20nLFxuICAgICdyb3VuZGVkTGVmdCcsXG4gICAgJ3JvdW5kZWRSaWdodCcsXG4gIF0pLFxuICB0b3A6IFByb3BUeXBlcy5ib29sLFxuICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICB3cmFwOiBQcm9wVHlwZXMuYm9vbCxcbn07XG4iLCIvLyBAZmxvd1xuaW1wb3J0IGFkZCBmcm9tICcuL2FkZC5zdmcnO1xuaW1wb3J0IGFkZENpcmNsZSBmcm9tICcuL2FkZC1jaXJjbGUuc3ZnJztcbmltcG9ydCBhZGRQaW4gZnJvbSAnLi9hZGQtcGluLnN2Zyc7XG5pbXBvcnQgYW5nbGVkUGluIGZyb20gJy4vYW5nbGVkLXBpbi5zdmcnO1xuaW1wb3J0IGFycm93QmFjayBmcm9tICcuL2Fycm93LWJhY2suc3ZnJztcbmltcG9ydCBhcnJvd0NpcmNsZUZvcndhcmQgZnJvbSAnLi9hcnJvdy1jaXJjbGUtZm9yd2FyZC5zdmcnO1xuaW1wb3J0IGFycm93Q2lyY2xlRG93biBmcm9tICcuL2Fycm93LWNpcmNsZS1kb3duLnN2Zyc7XG5pbXBvcnQgYXJyb3dEb3duIGZyb20gJy4vYXJyb3ctZG93bi5zdmcnO1xuaW1wb3J0IGFycm93Rm9yd2FyZCBmcm9tICcuL2Fycm93LWZvcndhcmQuc3ZnJztcbmltcG9ydCBhcnJvd1VwIGZyb20gJy4vYXJyb3ctdXAuc3ZnJztcbmltcG9ydCBhcnJvd1VwUmlnaHQgZnJvbSAnLi9hcnJvdy11cC1yaWdodC5zdmcnO1xuaW1wb3J0IGJlbGwgZnJvbSAnLi9iZWxsLnN2Zyc7XG5pbXBvcnQgY2FtZXJhIGZyb20gJy4vY2FtZXJhLnN2Zyc7XG5pbXBvcnQgY2FtZXJhUm9sbCBmcm9tICcuL2NhbWVyYS1yb2xsLnN2Zyc7XG5pbXBvcnQgY2FuY2VsIGZyb20gJy4vY2FuY2VsLnN2Zyc7XG5pbXBvcnQgY2hlY2sgZnJvbSAnLi9jaGVjay5zdmcnO1xuaW1wb3J0IGNoZWNrQ2lyY2xlIGZyb20gJy4vY2hlY2stY2lyY2xlLnN2Zyc7XG5pbXBvcnQgY2lyY2xlT3V0bGluZSBmcm9tICcuL2NpcmNsZS1vdXRsaW5lLnN2Zyc7XG5pbXBvcnQgY2xlYXIgZnJvbSAnLi9jbGVhci5zdmcnO1xuaW1wb3J0IGNsb2NrIGZyb20gJy4vY2xvY2suc3ZnJztcbmltcG9ydCBjb2cgZnJvbSAnLi9jb2cuc3ZnJztcbmltcG9ydCBjb21wYXNzIGZyb20gJy4vY29tcGFzcy5zdmcnO1xuaW1wb3J0IGNvbXBvc2UgZnJvbSAnLi9jb21wb3NlLnN2Zyc7XG5pbXBvcnQgZGFzaCBmcm9tICcuL2Rhc2guc3ZnJztcbmltcG9ydCBkb3dubG9hZCBmcm9tICcuL2Rvd25sb2FkLnN2Zyc7XG5pbXBvcnQgZWRpdCBmcm9tICcuL2VkaXQuc3ZnJztcbmltcG9ydCBlbGxpcHNpcyBmcm9tICcuL2VsbGlwc2lzLnN2Zyc7XG5pbXBvcnQgZWxsaXBzaXNDaXJjbGVPdXRsaW5lIGZyb20gJy4vZWxsaXBzaXMtY2lyY2xlLW91dGxpbmUuc3ZnJztcbmltcG9ydCBlbnZlbG9wZSBmcm9tICcuL2VudmVsb3BlLnN2Zyc7XG5pbXBvcnQgZXllIGZyb20gJy4vZXllLnN2Zyc7XG5pbXBvcnQgZmFjZWJvb2sgZnJvbSAnLi9mYWNlYm9vay5zdmcnO1xuaW1wb3J0IGZhY2VIYXBweSBmcm9tICcuL2ZhY2UtaGFwcHkuc3ZnJztcbmltcG9ydCBmYWNlU2FkIGZyb20gJy4vZmFjZS1zYWQuc3ZnJztcbmltcG9ydCBmYWNlU21pbGV5IGZyb20gJy4vZmFjZS1zbWlsZXkuc3ZnJztcbmltcG9ydCBmaWx0ZXIgZnJvbSAnLi9maWx0ZXIuc3ZnJztcbmltcG9ydCBmbGFnIGZyb20gJy4vZmxhZy5zdmcnO1xuaW1wb3J0IGZsYXNobGlnaHQgZnJvbSAnLi9mbGFzaGxpZ2h0LnN2Zyc7XG5pbXBvcnQgZ2lmIGZyb20gJy4vZ2lmLnN2Zyc7XG5pbXBvcnQgZ2xvYmUgZnJvbSAnLi9nbG9iZS5zdmcnO1xuaW1wb3J0IGdsb2JlQ2hlY2tlZCBmcm9tICcuL2dsb2JlLWNoZWNrZWQuc3ZnJztcbmltcG9ydCBnbWFpbCBmcm9tICcuL2dtYWlsLnN2Zyc7XG5pbXBvcnQgZ29vZ2xlUGx1cyBmcm9tICcuL2dvb2dsZS1wbHVzLnN2Zyc7XG5pbXBvcnQgZ3JhcGhCYXIgZnJvbSAnLi9ncmFwaC1iYXIuc3ZnJztcbmltcG9ydCBrbm9vcCBmcm9tICcuL2tub29wLnN2Zyc7XG5pbXBvcnQgbGlnaHRidWxiIGZyb20gJy4vbGlnaHRidWxiLnN2Zyc7XG5pbXBvcnQgaGFuZGxlIGZyb20gJy4vaGFuZGxlLnN2Zyc7XG5pbXBvcnQgaGFuZFBvaW50aW5nIGZyb20gJy4vaGFuZC1wb2ludGluZy5zdmcnO1xuaW1wb3J0IGhlYXJ0IGZyb20gJy4vaGVhcnQuc3ZnJztcbmltcG9ydCBoZWFydEJyb2tlbiBmcm9tICcuL2hlYXJ0LWJyb2tlbi5zdmcnO1xuaW1wb3J0IGxpbmsgZnJvbSAnLi9saW5rLnN2Zyc7XG5pbXBvcnQgbG9jYXRpb24gZnJvbSAnLi9sb2NhdGlvbi5zdmcnO1xuaW1wb3J0IGxvY2sgZnJvbSAnLi9sb2NrLnN2Zyc7XG5pbXBvcnQgbWF4aW1pemUgZnJvbSAnLi9tYXhpbWl6ZS5zdmcnO1xuaW1wb3J0IG1lZ2FwaG9uZSBmcm9tICcuL21lZ2FwaG9uZS5zdmcnO1xuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51LnN2Zyc7XG5pbXBvcnQgbWluaW1pemUgZnJvbSAnLi9taW5pbWl6ZS5zdmcnO1xuaW1wb3J0IG1vdmUgZnJvbSAnLi9tb3ZlLnN2Zyc7XG5pbXBvcnQgbXV0ZSBmcm9tICcuL211dGUuc3ZnJztcbmltcG9ydCBwYXVzZSBmcm9tICcuL3BhdXNlLnN2Zyc7XG5pbXBvcnQgcGVvcGxlIGZyb20gJy4vcGVvcGxlLnN2Zyc7XG5pbXBvcnQgcGVyc29uIGZyb20gJy4vcGVyc29uLnN2Zyc7XG5pbXBvcnQgcGVyc29uQWRkIGZyb20gJy4vcGVyc29uLWFkZC5zdmcnO1xuaW1wb3J0IHBpbiBmcm9tICcuL3Bpbi5zdmcnO1xuaW1wb3J0IHBpbkhpZGUgZnJvbSAnLi9waW4taGlkZS5zdmcnO1xuaW1wb3J0IHBpbnRlcmVzdCBmcm9tICcuL3BpbnRlcmVzdC5zdmcnO1xuaW1wb3J0IHBsYXkgZnJvbSAnLi9wbGF5LnN2Zyc7XG5pbXBvcnQgcXVlc3Rpb25NYXJrIGZyb20gJy4vcXVlc3Rpb24tbWFyay5zdmcnO1xuaW1wb3J0IHJlbW92ZSBmcm9tICcuL3JlbW92ZS5zdmcnO1xuaW1wb3J0IHJlcG9ydCBmcm9tICcuL3JlcG9ydC5zdmcnO1xuaW1wb3J0IHNlYXJjaCBmcm9tICcuL3NlYXJjaC5zdmcnO1xuaW1wb3J0IHNlbmQgZnJvbSAnLi9zZW5kLnN2Zyc7XG5pbXBvcnQgc2hhcmUgZnJvbSAnLi9zaGFyZS5zdmcnO1xuaW1wb3J0IHNob3BwaW5nQmFnIGZyb20gJy4vc2hvcHBpbmctYmFnLnN2Zyc7XG5pbXBvcnQgc21pbGV5IGZyb20gJy4vc21pbGV5LnN2Zyc7XG5pbXBvcnQgc21pbGV5T3V0bGluZSBmcm9tICcuL3NtaWxleS1vdXRsaW5lLnN2Zyc7XG5pbXBvcnQgc291bmQgZnJvbSAnLi9zb3VuZC5zdmcnO1xuaW1wb3J0IHNwZWVjaCBmcm9tICcuL3NwZWVjaC5zdmcnO1xuaW1wb3J0IHNwZWVjaEVsbGlwc2lzIGZyb20gJy4vc3BlZWNoLWVsbGlwc2lzLnN2Zyc7XG5pbXBvcnQgdGFnIGZyb20gJy4vdGFnLnN2Zyc7XG5pbXBvcnQgdGV4dEFsaWduQ2VudGVyIGZyb20gJy4vdGV4dC1hbGlnbi1jZW50ZXIuc3ZnJztcbmltcG9ydCB0ZXh0QWxpZ25MZWZ0IGZyb20gJy4vdGV4dC1hbGlnbi1sZWZ0LnN2Zyc7XG5pbXBvcnQgdGV4dEFsaWduUmlnaHQgZnJvbSAnLi90ZXh0LWFsaWduLXJpZ2h0LnN2Zyc7XG5pbXBvcnQgdHdpdHRlciBmcm9tICcuL3R3aXR0ZXIuc3ZnJztcbmltcG9ydCB2aWV3VHlwZURlZmF1bHQgZnJvbSAnLi92aWV3LXR5cGUtZGVmYXVsdC5zdmcnO1xuaW1wb3J0IHZpZXdUeXBlRGVuc2UgZnJvbSAnLi92aWV3LXR5cGUtZGVuc2Uuc3ZnJztcbmltcG9ydCB2aWV3VHlwZUxpc3QgZnJvbSAnLi92aWV3LXR5cGUtbGlzdC5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZCxcbiAgJ2FkZC1jaXJjbGUnOiBhZGRDaXJjbGUsXG4gICdhZGQtcGluJzogYWRkUGluLFxuICAnYW5nbGVkLXBpbic6IGFuZ2xlZFBpbixcbiAgJ2Fycm93LWJhY2snOiBhcnJvd0JhY2ssXG4gICdhcnJvdy1jaXJjbGUtZG93bic6IGFycm93Q2lyY2xlRG93bixcbiAgJ2Fycm93LWNpcmNsZS1mb3J3YXJkJzogYXJyb3dDaXJjbGVGb3J3YXJkLFxuICAnYXJyb3ctZG93bic6IGFycm93RG93bixcbiAgJ2Fycm93LWZvcndhcmQnOiBhcnJvd0ZvcndhcmQsXG4gICdhcnJvdy11cCc6IGFycm93VXAsXG4gICdhcnJvdy11cC1yaWdodCc6IGFycm93VXBSaWdodCxcbiAgYmVsbCxcbiAgY2FtZXJhLFxuICAnY2FtZXJhLXJvbGwnOiBjYW1lcmFSb2xsLFxuICBjYW5jZWwsXG4gIGNoZWNrLFxuICAnY2hlY2stY2lyY2xlJzogY2hlY2tDaXJjbGUsXG4gICdjaXJjbGUtb3V0bGluZSc6IGNpcmNsZU91dGxpbmUsXG4gIGNsZWFyLFxuICBjbG9jayxcbiAgY29nLFxuICBjb21wYXNzLFxuICBjb21wb3NlLFxuICBkYXNoLFxuICBkb3dubG9hZCxcbiAgZWRpdCxcbiAgZWxsaXBzaXMsXG4gICdlbGxpcHNpcy1jaXJjbGUtb3V0bGluZSc6IGVsbGlwc2lzQ2lyY2xlT3V0bGluZSxcbiAgZW52ZWxvcGUsXG4gIGV5ZSxcbiAgZmFjZWJvb2ssXG4gICdmYWNlLWhhcHB5JzogZmFjZUhhcHB5LFxuICAnZmFjZS1zYWQnOiBmYWNlU2FkLFxuICAnZmFjZS1zbWlsZXknOiBmYWNlU21pbGV5LFxuICBmaWx0ZXIsXG4gIGZsYWcsXG4gIGZsYXNobGlnaHQsXG4gIGdpZixcbiAgZ2xvYmUsXG4gICdnbG9iZS1jaGVja2VkJzogZ2xvYmVDaGVja2VkLFxuICBnbWFpbCxcbiAgJ2dvb2dsZS1wbHVzJzogZ29vZ2xlUGx1cyxcbiAgJ2dyYXBoLWJhcic6IGdyYXBoQmFyLFxuICBoYW5kbGUsXG4gICdoYW5kLXBvaW50aW5nJzogaGFuZFBvaW50aW5nLFxuICBoZWFydCxcbiAgJ2hlYXJ0LWJyb2tlbic6IGhlYXJ0QnJva2VuLFxuICBrbm9vcCxcbiAgbGlnaHRidWxiLFxuICBsaW5rLFxuICBsb2NhdGlvbixcbiAgbG9jayxcbiAgbWF4aW1pemUsXG4gIG1lZ2FwaG9uZSxcbiAgbWVudSxcbiAgbWluaW1pemUsXG4gIG1vdmUsXG4gIG11dGUsXG4gIHBhdXNlLFxuICBwZW9wbGUsXG4gIHBlcnNvbixcbiAgJ3BlcnNvbi1hZGQnOiBwZXJzb25BZGQsXG4gIHBpbixcbiAgJ3Bpbi1oaWRlJzogcGluSGlkZSxcbiAgcGludGVyZXN0LFxuICBwbGF5LFxuICAncXVlc3Rpb24tbWFyayc6IHF1ZXN0aW9uTWFyayxcbiAgcmVtb3ZlLFxuICByZXBvcnQsXG4gIHNlYXJjaCxcbiAgJ3Nob3BwaW5nLWJhZyc6IHNob3BwaW5nQmFnLFxuICBzbWlsZXksXG4gICdzbWlsZXktb3V0bGluZSc6IHNtaWxleU91dGxpbmUsXG4gIHNlbmQsXG4gIHNoYXJlLFxuICBzb3VuZCxcbiAgc3BlZWNoLFxuICAnc3BlZWNoLWVsbGlwc2lzJzogc3BlZWNoRWxsaXBzaXMsXG4gIHRhZyxcbiAgJ3RleHQtYWxpZ24tbGVmdCc6IHRleHRBbGlnbkxlZnQsXG4gICd0ZXh0LWFsaWduLWNlbnRlcic6IHRleHRBbGlnbkNlbnRlcixcbiAgJ3RleHQtYWxpZ24tcmlnaHQnOiB0ZXh0QWxpZ25SaWdodCxcbiAgdHdpdHRlcixcbiAgJ3ZpZXctdHlwZS1kZWZhdWx0Jzogdmlld1R5cGVEZWZhdWx0LFxuICAndmlldy10eXBlLWRlbnNlJzogdmlld1R5cGVEZW5zZSxcbiAgJ3ZpZXctdHlwZS1saXN0Jzogdmlld1R5cGVMaXN0LFxufTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSWNvbi5jc3MnO1xuaW1wb3J0IGljb25zIGZyb20gJy4vaWNvbnMvaW5kZXguanMnO1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuL0NvbG9ycy5jc3MnO1xuXG50eXBlIEljb25Qcm9wcyA9IHtcbiAgYWNjZXNzaWJpbGl0eUxhYmVsOiBzdHJpbmcsXG4gIGNvbG9yPzpcbiAgICB8ICdibHVlJ1xuICAgIHwgJ2RhcmtHcmF5J1xuICAgIHwgJ2VnZ3BsYW50J1xuICAgIHwgJ2dyYXknXG4gICAgfCAnZ3JlZW4nXG4gICAgfCAnbGlnaHRHcmF5J1xuICAgIHwgJ21hcm9vbidcbiAgICB8ICdtaWRuaWdodCdcbiAgICB8ICduYXZ5J1xuICAgIHwgJ29saXZlJ1xuICAgIHwgJ29yYW5nZSdcbiAgICB8ICdvcmNoaWQnXG4gICAgfCAncGluZSdcbiAgICB8ICdwdXJwbGUnXG4gICAgfCAncmVkJ1xuICAgIHwgJ3dhdGVybWVsb24nXG4gICAgfCAnd2hpdGUnLFxuICBpbmxpbmU/OiBib29sZWFuLFxuICBzaXplPzogbnVtYmVyIHwgc3RyaW5nLFxufTtcblxudHlwZSBJY29uTm9QYXRoID0ge1xuICBpY29uOiAkS2V5czx0eXBlb2YgaWNvbnM+LFxuICBkYW5nZXJvdXNseVNldFN2Z1BhdGg/OiBudWxsLFxufTtcblxudHlwZSBQYXRoTm9JY29uID0ge1xuICBpY29uPzogbnVsbCxcbiAgZGFuZ2Vyb3VzbHlTZXRTdmdQYXRoOiB7IF9fcGF0aDogc3RyaW5nIH0sXG59O1xuXG50eXBlIFByb3BzID0gSWNvblByb3BzICYgKFBhdGhOb0ljb24gfCBJY29uTm9QYXRoKTtcblxuY29uc3QgSWNvbk5hbWVzID0gT2JqZWN0LmtleXMoaWNvbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJY29uKHByb3BzOiBQcm9wcykge1xuICBjb25zdCB7XG4gICAgYWNjZXNzaWJpbGl0eUxhYmVsLFxuICAgIGNvbG9yID0gJ2dyYXknLFxuICAgIGljb24sXG4gICAgaW5saW5lLFxuICAgIHNpemUgPSAxNixcbiAgICBkYW5nZXJvdXNseVNldFN2Z1BhdGgsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBjcyA9IGNsYXNzbmFtZXMoc3R5bGVzLmljb24sIGNvbG9yc1tjb2xvcl0sIHtcbiAgICBbc3R5bGVzLmljb25CbG9ja106ICFpbmxpbmUsXG4gIH0pO1xuXG4gIGNvbnN0IHBhdGggPVxuICAgIChpY29uICYmIGljb25zW2ljb25dKSB8fFxuICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuICAgIChkYW5nZXJvdXNseVNldFN2Z1BhdGggJiYgZGFuZ2Vyb3VzbHlTZXRTdmdQYXRoLl9fcGF0aCkgfHxcbiAgICB1bmRlZmluZWQ7XG5cbiAgY29uc3QgYXJpYUhpZGRlbiA9IGFjY2Vzc2liaWxpdHlMYWJlbCA9PT0gJycgPyB0cnVlIDogbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIGNsYXNzTmFtZT17Y3N9XG4gICAgICBoZWlnaHQ9e3NpemV9XG4gICAgICB3aWR0aD17c2l6ZX1cbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgYXJpYS1oaWRkZW49e2FyaWFIaWRkZW59XG4gICAgICBhcmlhLWxhYmVsPXthY2Nlc3NpYmlsaXR5TGFiZWx9XG4gICAgICByb2xlPVwiaW1nXCJcbiAgICA+XG4gICAgICA8dGl0bGU+e2FjY2Vzc2liaWxpdHlMYWJlbH08L3RpdGxlPlxuICAgICAgPHBhdGggZD17cGF0aH0gLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cblxuSWNvbi5pY29ucyA9IEljb25OYW1lcztcblxuSWNvbi5wcm9wVHlwZXMgPSB7XG4gIGFjY2Vzc2liaWxpdHlMYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAnYmx1ZScsXG4gICAgJ2RhcmtHcmF5JyxcbiAgICAnZWdncGxhbnQnLFxuICAgICdncmF5JyxcbiAgICAnZ3JlZW4nLFxuICAgICdsaWdodEdyYXknLFxuICAgICdtYXJvb24nLFxuICAgICdtaWRuaWdodCcsXG4gICAgJ25hdnknLFxuICAgICdvbGl2ZScsXG4gICAgJ29yYW5nZScsXG4gICAgJ29yY2hpZCcsXG4gICAgJ3BpbmUnLFxuICAgICdwdXJwbGUnLFxuICAgICdyZWQnLFxuICAgICd3YXRlcm1lbG9uJyxcbiAgICAnd2hpdGUnLFxuICBdKSxcbiAgZGFuZ2Vyb3VzbHlTZXRTdmdQYXRoOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIF9fcGF0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgfSksXG4gIGljb246IFByb3BUeXBlcy5vbmVPZihJY29uTmFtZXMpLFxuICBpbmxpbmU6IFByb3BUeXBlcy5ib29sLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG59O1xuIiwiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQm94IGZyb20gJy4vQm94LmpzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9JbWFnZS5jc3MnO1xuXG5jb25zdCBzaG91bGRTY2FsZUltYWdlID0gZml0ID0+IGZpdCA9PT0gJ2NvdmVyJyB8fCBmaXQgPT09ICdjb250YWluJztcblxudHlwZSBQcm9wcyA9IHt8XG4gIGFsdDogc3RyaW5nLFxuICBjaGlsZHJlbj86IFJlYWN0Lk5vZGUsXG4gIGNvbG9yOiBzdHJpbmcsXG4gIGZpdDogJ2NvbnRhaW4nIHwgJ2NvdmVyJyB8ICdub25lJyxcbiAgbmF0dXJhbEhlaWdodDogbnVtYmVyLFxuICBuYXR1cmFsV2lkdGg6IG51bWJlcixcbiAgb25FcnJvcj86ICgpID0+IHZvaWQsXG4gIG9uTG9hZD86ICgpID0+IHZvaWQsXG4gIHNpemVzPzogc3RyaW5nLFxuICBzcmM6IHN0cmluZyxcbiAgc3JjU2V0Pzogc3RyaW5nLFxufH07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGFsdDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBjb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmaXQ6IFByb3BUeXBlcy5vbmVPZihbJ2NvbnRhaW4nLCAnY292ZXInLCAnbm9uZSddKSxcbiAgICBuYXR1cmFsSGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgbmF0dXJhbFdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgb25FcnJvcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Mb2FkOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBzaXplczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzcmM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBzcmNTZXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICBmaXQ6ICdub25lJyxcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAoc2hvdWxkU2NhbGVJbWFnZSh0aGlzLnByb3BzLmZpdCkpIHtcbiAgICAgIHRoaXMubG9hZEltYWdlKCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wczogUHJvcHMpIHtcbiAgICBjb25zdCB7IGZpdCwgc3JjIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChzaG91bGRTY2FsZUltYWdlKGZpdCkgJiYgcHJldlByb3BzLnNyYyAhPT0gc3JjKSB7XG4gICAgICB0aGlzLmxvYWRJbWFnZSgpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUxvYWQgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub25Mb2FkKSB7XG4gICAgICB0aGlzLnByb3BzLm9uTG9hZCgpO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVFcnJvciA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkVycm9yKSB7XG4gICAgICB0aGlzLnByb3BzLm9uRXJyb3IoKTtcbiAgICB9XG4gIH07XG5cbiAgbG9hZEltYWdlKCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgd2luZG93LkltYWdlKCk7XG4gICAgICBpbWFnZS5vbmxvYWQgPSB0aGlzLmhhbmRsZUxvYWQ7XG4gICAgICBpbWFnZS5vbmVycm9yID0gdGhpcy5oYW5kbGVFcnJvcjtcbiAgICAgIGltYWdlLnNyYyA9IHRoaXMucHJvcHMuc3JjO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBhbHQsXG4gICAgICBjb2xvcixcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgZml0LFxuICAgICAgbmF0dXJhbEhlaWdodCxcbiAgICAgIG5hdHVyYWxXaWR0aCxcbiAgICAgIHNpemVzLFxuICAgICAgc3JjLFxuICAgICAgc3JjU2V0LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgaXNTY2FsZWRJbWFnZSA9IHNob3VsZFNjYWxlSW1hZ2UoZml0KTtcbiAgICBjb25zdCBjaGlsZENvbnRlbnQgPSBjaGlsZHJlbiA/IChcbiAgICAgIDxCb3ggcG9zaXRpb249XCJhYnNvbHV0ZVwiIHRvcCBsZWZ0IGJvdHRvbSByaWdodCBvdmVyZmxvdz1cImhpZGRlblwiPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0JveD5cbiAgICApIDogbnVsbDtcblxuICAgIHJldHVybiBpc1NjYWxlZEltYWdlID8gKFxuICAgICAgPGRpdlxuICAgICAgICBhcmlhLWxhYmVsPXthbHR9XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW2ZpdF19XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcixcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJyR7c3JjfScpYCxcbiAgICAgICAgfX1cbiAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICA+XG4gICAgICAgIHtjaGlsZENvbnRlbnR9XG4gICAgICA8L2Rpdj5cbiAgICApIDogKFxuICAgICAgPEJveFxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbmxpbmVTdHlsZT17e1xuICAgICAgICAgIF9fc3R5bGU6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IsXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBgJHsobmF0dXJhbEhlaWdodCAvIG5hdHVyYWxXaWR0aCkgKiAxMDB9JWAsXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGFsdD17YWx0fVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmltZ31cbiAgICAgICAgICBvbkVycm9yPXt0aGlzLmhhbmRsZUVycm9yfVxuICAgICAgICAgIG9uTG9hZD17dGhpcy5oYW5kbGVMb2FkfVxuICAgICAgICAgIHNpemVzPXtzaXplc31cbiAgICAgICAgICBzcmM9e3NyY31cbiAgICAgICAgICBzcmNTZXQ9e3NyY1NldH1cbiAgICAgICAgLz5cbiAgICAgICAge2NoaWxkQ29udGVudH1cbiAgICAgIDwvQm94PlxuICAgICk7XG4gIH1cbn1cbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01hc2suY3NzJztcblxudHlwZSBQcm9wcyA9IHt8XG4gIGNoaWxkcmVuPzogUmVhY3QuTm9kZSxcbiAgaGVpZ2h0PzogbnVtYmVyIHwgc3RyaW5nLFxuICBzaGFwZT86ICdjaXJjbGUnIHwgJ3JvdW5kZWQnIHwgJ3NxdWFyZScsXG4gIHdpZHRoPzogbnVtYmVyIHwgc3RyaW5nLFxuICB3YXNoPzogYm9vbGVhbixcbnx9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXNrKHByb3BzOiBQcm9wcykge1xuICBjb25zdCB7IGNoaWxkcmVuLCBzaGFwZSA9ICdzcXVhcmUnLCB3aWR0aCwgaGVpZ2h0LCB3YXNoID0gZmFsc2UgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMuTWFzaywgc3R5bGVzW3NoYXBlXSl9IHN0eWxlPXt7IHdpZHRoLCBoZWlnaHQgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICB7d2FzaCAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndhc2h9IC8+fVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5NYXNrLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBoZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgc2hhcGU6IFByb3BUeXBlcy5vbmVPZihbJ2NpcmNsZScsICdyb3VuZGVkJywgJ3NxdWFyZSddKSxcbiAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgd2FzaDogUHJvcFR5cGVzLmJvb2wsXG59O1xuIiwiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQm94IGZyb20gJy4vQm94LmpzJztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbi5qcyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XG5pbXBvcnQgTWFzayBmcm9tICcuL01hc2suanMnO1xuaW1wb3J0IHR5cG9ncmFwaHkgZnJvbSAnLi9UeXBvZ3JhcGh5LmNzcyc7XG5cbmNvbnN0IFNxdWFyZSA9IChwcm9wczogKikgPT4gKFxuICA8Qm94IHsuLi5wcm9wc30gcG9zaXRpb249XCJyZWxhdGl2ZVwiPlxuICAgIDxCb3hcbiAgICAgIGRhbmdlcm91c2x5U2V0SW5saW5lU3R5bGU9e3sgX19zdHlsZTogeyBwYWRkaW5nQm90dG9tOiAnMTAwJScgfSB9fVxuICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgLz5cbiAgICA8Qm94IHBvc2l0aW9uPVwiYWJzb2x1dGVcIiB0b3AgbGVmdCBib3R0b20gcmlnaHQ+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9Cb3g+XG4gIDwvQm94PlxuKTtcblxuY29uc3QgRGVmYXVsdEF2YXRhciA9ICh7IG5hbWUgfTogeyBuYW1lOiBzdHJpbmcgfSkgPT4ge1xuICBjb25zdCBmaXJzdEluaXRpYWwgPSBuYW1lID8gWy4uLm5hbWVdWzBdLnRvVXBwZXJDYXNlKCkgOiAnJztcbiAgcmV0dXJuIChcbiAgICA8U3F1YXJlIGNvbG9yPVwiZ3JheVwiIHNoYXBlPVwiY2lyY2xlXCI+XG4gICAgICB7Zmlyc3RJbml0aWFsICYmIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgdmlld0JveD1cIi01MCAtNTAgMTAwIDEwMFwiXG4gICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXG4gICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIlxuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICA+XG4gICAgICAgICAgPHRpdGxlPntuYW1lfTwvdGl0bGU+XG4gICAgICAgICAgPHRleHRcbiAgICAgICAgICAgIGZvbnRTaXplPVwiNTBweFwiXG4gICAgICAgICAgICBmaWxsPVwiI2ZmZlwiXG4gICAgICAgICAgICBkb21pbmFudEJhc2VsaW5lPVwiY2VudHJhbFwiXG4gICAgICAgICAgICB0ZXh0QW5jaG9yPVwibWlkZGxlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17W1xuICAgICAgICAgICAgICB0eXBvZ3JhcGh5LmFudGlhbGlhc2VkLFxuICAgICAgICAgICAgICB0eXBvZ3JhcGh5LnNhbnNTZXJpZixcbiAgICAgICAgICAgICAgdHlwb2dyYXBoeS5sZWFkaW5nU21hbGwsXG4gICAgICAgICAgICAgIHR5cG9ncmFwaHkuZm9udFdlaWdodEJvbGQsXG4gICAgICAgICAgICBdLmpvaW4oJyAnKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Zmlyc3RJbml0aWFsfVxuICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgPC9zdmc+XG4gICAgICApfVxuICAgIDwvU3F1YXJlPlxuICApO1xufTtcblxudHlwZSBTdGF0ZSA9IHt8IGlzSW1hZ2VMb2FkZWQ6IGJvb2xlYW4gfH07XG5cbnR5cGUgQXZhdGFyUHJvcHMgPSB7fFxuICBuYW1lOiBzdHJpbmcsXG4gIG91dGxpbmU/OiBib29sZWFuLFxuICBzaXplPzogJ3NtJyB8ICdtZCcgfCAnbGcnLFxuICBzcmM/OiBzdHJpbmcsXG4gIHZlcmlmaWVkPzogYm9vbGVhbixcbnx9O1xuXG5jb25zdCBzaXplcyA9IHtcbiAgc206IDI0LFxuICBtZDogNDAsXG4gIGxnOiA3Mixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF2YXRhciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8QXZhdGFyUHJvcHMsIFN0YXRlPiB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG91dGxpbmU6IFByb3BUeXBlcy5ib29sLFxuICAgIHNyYzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydzbScsICdtZCcsICdsZyddKSxcbiAgICB2ZXJpZmllZDogUHJvcFR5cGVzLmJvb2wsXG4gIH07XG5cbiAgc3RhdGUgPSB7XG4gICAgaXNJbWFnZUxvYWRlZDogdHJ1ZSxcbiAgfTtcblxuICBoYW5kbGVJbWFnZUVycm9yID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGlzSW1hZ2VMb2FkZWQ6IGZhbHNlIH0pO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5hbWUsIG91dGxpbmUsIHNpemUsIHNyYywgdmVyaWZpZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBpc0ltYWdlTG9hZGVkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHdpZHRoID0gc2l6ZSA/IHNpemVzW3NpemVdIDogJzEwMCUnO1xuICAgIGNvbnN0IGhlaWdodCA9IHNpemUgPyBzaXplc1tzaXplXSA6ICcnO1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICB7Li4uKG91dGxpbmVcbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbmxpbmVTdHlsZToge1xuICAgICAgICAgICAgICAgIF9fc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogJzAgMCAwIDJweCAjZmZmJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuICAgICAgICAgIDoge30pfVxuICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgc2hhcGU9XCJjaXJjbGVcIlxuICAgICAgPlxuICAgICAgICB7c3JjICYmIGlzSW1hZ2VMb2FkZWQgPyAoXG4gICAgICAgICAgPE1hc2sgc2hhcGU9XCJjaXJjbGVcIiB3YXNoPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIGFsdD17bmFtZX1cbiAgICAgICAgICAgICAgY29sb3I9XCIjRUZFRkVGXCJcbiAgICAgICAgICAgICAgbmF0dXJhbEhlaWdodD17MX1cbiAgICAgICAgICAgICAgbmF0dXJhbFdpZHRoPXsxfVxuICAgICAgICAgICAgICBzcmM9e3NyY31cbiAgICAgICAgICAgICAgb25FcnJvcj17dGhpcy5oYW5kbGVJbWFnZUVycm9yfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L01hc2s+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPERlZmF1bHRBdmF0YXIgbmFtZT17bmFtZX0gLz5cbiAgICAgICAgKX1cbiAgICAgICAge3ZlcmlmaWVkICYmIChcbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcbiAgICAgICAgICAgIHdpZHRoPVwiMjAlXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjIwJVwiXG4gICAgICAgICAgICBtaW5XaWR0aD17OH1cbiAgICAgICAgICAgIG1pbkhlaWdodD17OH1cbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5saW5lU3R5bGU9e3tcbiAgICAgICAgICAgICAgX19zdHlsZToge1xuICAgICAgICAgICAgICAgIGJvdHRvbTogJzQlJyxcbiAgICAgICAgICAgICAgICByaWdodDogJzQlJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICAgIHNoYXBlPVwiY2lyY2xlXCJcbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbmxpbmVTdHlsZT17e1xuICAgICAgICAgICAgICAgIF9fc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogJzAgMCAwIDJweCAjZmZmJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcbiAgICAgICAgICAgICAgICBpY29uPVwiY2hlY2stY2lyY2xlXCJcbiAgICAgICAgICAgICAgICBhY2Nlc3NpYmlsaXR5TGFiZWw9XCJcIlxuICAgICAgICAgICAgICAgIHNpemU9XCIxMDAlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuICAgICAgPC9Cb3g+XG4gICAgKTtcbiAgfVxufVxuIiwiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi9Db2xvcnMuY3NzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UZXh0LmNzcyc7XG5pbXBvcnQgdHlwb2dyYXBoeSBmcm9tICcuL1R5cG9ncmFwaHkuY3NzJztcblxuY29uc3QgU0laRV9TQ0FMRTogeyBbc2l6ZTogP3N0cmluZ106IG51bWJlciB9ID0ge1xuICB4czogMSxcbiAgc206IDIsXG4gIG1kOiAzLFxuICBsZzogNCxcbiAgeGw6IDUsXG59O1xuXG50eXBlIFByb3BzID0ge3xcbiAgYWxpZ24/OiAnbGVmdCcgfCAncmlnaHQnIHwgJ2NlbnRlcicgfCAnanVzdGlmeScsXG4gIGJvbGQ/OiBib29sZWFuLFxuICBjaGlsZHJlbj86IFJlYWN0Lk5vZGUsXG4gIGNvbG9yPzpcbiAgICB8ICdncmVlbidcbiAgICB8ICdwaW5lJ1xuICAgIHwgJ29saXZlJ1xuICAgIHwgJ2JsdWUnXG4gICAgfCAnbmF2eSdcbiAgICB8ICdtaWRuaWdodCdcbiAgICB8ICdwdXJwbGUnXG4gICAgfCAnb3JjaGlkJ1xuICAgIHwgJ2VnZ3BsYW50J1xuICAgIHwgJ21hcm9vbidcbiAgICB8ICd3YXRlcm1lbG9uJ1xuICAgIHwgJ29yYW5nZSdcbiAgICB8ICdkYXJrR3JheSdcbiAgICB8ICdncmF5J1xuICAgIHwgJ2xpZ2h0R3JheSdcbiAgICB8ICdyZWQnXG4gICAgfCAnd2hpdGUnLFxuICBpbmxpbmU/OiBib29sZWFuLFxuICBpdGFsaWM/OiBib29sZWFuLFxuICBvdmVyZmxvdz86ICdub3JtYWwnIHwgJ2JyZWFrV29yZCcsXG4gIHNpemU/OiAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyxcbiAgc21TaXplPzogJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcsXG4gIG1kU2l6ZT86ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnLFxuICBsZ1NpemU/OiAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyxcbiAgbGVhZGluZz86ICd0YWxsJyB8ICdzaG9ydCcsXG4gIHRydW5jYXRlPzogYm9vbGVhbixcbiAgX19kYW5nZXJvdXNseUluY3JlYXNlTGluZUhlaWdodD86IGJvb2xlYW4sXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGV4dCh7XG4gIGFsaWduID0gJ2xlZnQnLFxuICBib2xkID0gZmFsc2UsXG4gIGNoaWxkcmVuLFxuICBjb2xvciA9ICdkYXJrR3JheScsXG4gIGlubGluZSA9IGZhbHNlLFxuICBpdGFsaWMgPSBmYWxzZSxcbiAgb3ZlcmZsb3cgPSAnYnJlYWtXb3JkJyxcbiAgc2l6ZSA9ICdtZCcsXG4gIHNtU2l6ZSxcbiAgbWRTaXplLFxuICBsZ1NpemUsXG4gIGxlYWRpbmcgPSAnc2hvcnQnLFxuICB0cnVuY2F0ZSA9IGZhbHNlLFxuICBfX2Rhbmdlcm91c2x5SW5jcmVhc2VMaW5lSGVpZ2h0ID0gZmFsc2UsXG59OiBQcm9wcykge1xuICBjb25zdCBzY2FsZSA9IFNJWkVfU0NBTEVbc2l6ZV07XG4gIGNvbnN0IHNtU2NhbGUgPSBTSVpFX1NDQUxFW3NtU2l6ZV07XG4gIGNvbnN0IG1kU2NhbGUgPSBTSVpFX1NDQUxFW21kU2l6ZV07XG4gIGNvbnN0IGxnU2NhbGUgPSBTSVpFX1NDQUxFW2xnU2l6ZV07XG5cbiAgY29uc3QgY3MgPSBjeChcbiAgICBzdHlsZXMuVGV4dCxcbiAgICBzdHlsZXNbYGZvbnRTaXplJHtzY2FsZX1gXSxcbiAgICBsZ1NpemUgJiYgc3R5bGVzW2BsZ0ZvbnRTaXplJHtsZ1NjYWxlfWBdLFxuICAgIG1kU2l6ZSAmJiBzdHlsZXNbYG1kRm9udFNpemUke21kU2NhbGV9YF0sXG4gICAgc21TaXplICYmIHN0eWxlc1tgc21Gb250U2l6ZSR7c21TY2FsZX1gXSxcbiAgICBjb2xvciA9PT0gJ2JsdWUnICYmIGNvbG9ycy5ibHVlLFxuICAgIGNvbG9yID09PSAnZGFya0dyYXknICYmIGNvbG9ycy5kYXJrR3JheSxcbiAgICBjb2xvciA9PT0gJ2VnZ3BsYW50JyAmJiBjb2xvcnMuZWdncGxhbnQsXG4gICAgY29sb3IgPT09ICdncmF5JyAmJiBjb2xvcnMuZ3JheSxcbiAgICBjb2xvciA9PT0gJ2dyZWVuJyAmJiBjb2xvcnMuZ3JlZW4sXG4gICAgY29sb3IgPT09ICdsaWdodEdyYXknICYmIGNvbG9ycy5saWdodEdyYXksXG4gICAgY29sb3IgPT09ICdtYXJvb24nICYmIGNvbG9ycy5tYXJvb24sXG4gICAgY29sb3IgPT09ICdtaWRuaWdodCcgJiYgY29sb3JzLm1pZG5pZ2h0LFxuICAgIGNvbG9yID09PSAnbmF2eScgJiYgY29sb3JzLm5hdnksXG4gICAgY29sb3IgPT09ICdvbGl2ZScgJiYgY29sb3JzLm9saXZlLFxuICAgIGNvbG9yID09PSAnb3JhbmdlJyAmJiBjb2xvcnMub3JhbmdlLFxuICAgIGNvbG9yID09PSAnb3JjaGlkJyAmJiBjb2xvcnMub3JjaGlkLFxuICAgIGNvbG9yID09PSAncGluZScgJiYgY29sb3JzLnBpbmUsXG4gICAgY29sb3IgPT09ICdwdXJwbGUnICYmIGNvbG9ycy5wdXJwbGUsXG4gICAgY29sb3IgPT09ICdyZWQnICYmIGNvbG9ycy5yZWQsXG4gICAgY29sb3IgPT09ICd3YXRlcm1lbG9uJyAmJiBjb2xvcnMud2F0ZXJtZWxvbixcbiAgICBjb2xvciA9PT0gJ3doaXRlJyAmJiBjb2xvcnMud2hpdGUsXG4gICAgbGVhZGluZyA9PT0gJ3Nob3J0JyAmJiB0eXBvZ3JhcGh5LmxlYWRpbmdTaG9ydCxcbiAgICAobGVhZGluZyA9PT0gJ3RhbGwnIHx8IF9fZGFuZ2Vyb3VzbHlJbmNyZWFzZUxpbmVIZWlnaHQpICYmXG4gICAgICB0eXBvZ3JhcGh5LmxlYWRpbmdUYWxsLFxuICAgIGFsaWduID09PSAnY2VudGVyJyAmJiB0eXBvZ3JhcGh5LmFsaWduQ2VudGVyLFxuICAgIGFsaWduID09PSAnanVzdGlmeScgJiYgdHlwb2dyYXBoeS5hbGlnbkp1c3RpZnksXG4gICAgYWxpZ24gPT09ICdsZWZ0JyAmJiB0eXBvZ3JhcGh5LmFsaWduTGVmdCxcbiAgICBhbGlnbiA9PT0gJ3JpZ2h0JyAmJiB0eXBvZ3JhcGh5LmFsaWduUmlnaHQsXG4gICAgb3ZlcmZsb3cgPT09ICdicmVha1dvcmQnICYmIHR5cG9ncmFwaHkuYnJlYWtXb3JkLFxuICAgIGl0YWxpYyAmJiB0eXBvZ3JhcGh5LmZvbnRTdHlsZUl0YWxpYyxcbiAgICAhaXRhbGljICYmIHR5cG9ncmFwaHkuZm9udFN0eWxlTm9ybWFsLFxuICAgIGJvbGQgJiYgdHlwb2dyYXBoeS5mb250V2VpZ2h0Qm9sZCxcbiAgICAhYm9sZCAmJiB0eXBvZ3JhcGh5LmZvbnRXZWlnaHROb3JtYWwsXG4gICAgdHJ1bmNhdGUgJiYgdHlwb2dyYXBoeS50cnVuY2F0ZVxuICApO1xuICBjb25zdCBUYWcgPSBpbmxpbmUgPyAnc3BhbicgOiAnZGl2JztcblxuICByZXR1cm4gKFxuICAgIDxUYWdcbiAgICAgIGNsYXNzTmFtZT17Y3N9XG4gICAgICB7Li4uKHRydW5jYXRlICYmIHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZydcbiAgICAgICAgPyB7IHRpdGxlOiBjaGlsZHJlbiB9XG4gICAgICAgIDogbnVsbCl9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvVGFnPlxuICApO1xufVxuXG5UZXh0LnByb3BUeXBlcyA9IHtcbiAgX19kYW5nZXJvdXNseUluY3JlYXNlTGluZUhlaWdodDogUHJvcFR5cGVzLmJvb2wsXG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoWydsZWZ0JywgJ3JpZ2h0JywgJ2NlbnRlcicsICdqdXN0aWZ5J10pLFxuICBib2xkOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAnZ3JlZW4nLFxuICAgICdwaW5lJyxcbiAgICAnb2xpdmUnLFxuICAgICdibHVlJyxcbiAgICAnbmF2eScsXG4gICAgJ21pZG5pZ2h0JyxcbiAgICAncHVycGxlJyxcbiAgICAnb3JjaGlkJyxcbiAgICAnZWdncGxhbnQnLFxuICAgICdtYXJvb24nLFxuICAgICd3YXRlcm1lbG9uJyxcbiAgICAnb3JhbmdlJyxcbiAgICAnZGFya0dyYXknLFxuICAgICdncmF5JyxcbiAgICAnbGlnaHRHcmF5JyxcbiAgICAncmVkJyxcbiAgICAnd2hpdGUnLFxuICBdKSxcbiAgaW5saW5lOiBQcm9wVHlwZXMuYm9vbCxcbiAgaXRhbGljOiBQcm9wVHlwZXMuYm9vbCxcbiAgbGVhZGluZzogUHJvcFR5cGVzLm9uZU9mKFsndGFsbCcsICdzaG9ydCddKSxcbiAgbGdTaXplOiBQcm9wVHlwZXMub25lT2YoWyd4cycsICdzbScsICdtZCcsICdsZycsICd4bCddKSxcbiAgbWRTaXplOiBQcm9wVHlwZXMub25lT2YoWyd4cycsICdzbScsICdtZCcsICdsZycsICd4bCddKSxcbiAgb3ZlcmZsb3c6IFByb3BUeXBlcy5vbmVPZihbJ25vcm1hbCcsICdicmVha1dvcmQnXSksXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ3hzJywgJ3NtJywgJ21kJywgJ2xnJywgJ3hsJ10pLFxuICBzbVNpemU6IFByb3BUeXBlcy5vbmVPZihbJ3hzJywgJ3NtJywgJ21kJywgJ2xnJywgJ3hsJ10pLFxuICB0cnVuY2F0ZTogUHJvcFR5cGVzLmJvb2wsXG59O1xuIiwiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9CdXR0b24uY3NzJztcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBhY2Nlc3NpYmlsaXR5RXhwYW5kZWQ/OiBib29sZWFuLFxuICBhY2Nlc3NpYmlsaXR5SGFzcG9wdXA/OiBib29sZWFuLFxuICBhY2Nlc3NpYmlsaXR5TGFiZWw/OiBzdHJpbmcsXG4gIGNvbG9yPzogJ2dyYXknIHwgJ3JlZCcgfCAnYmx1ZScgfCAndHJhbnNwYXJlbnQnIHwgJ3doaXRlJyxcbiAgZGlzYWJsZWQ/OiBib29sZWFuLFxuICBpbmxpbmU/OiBib29sZWFuLFxuICBuYW1lPzogc3RyaW5nLFxuICBvbkNsaWNrPzogKHsgZXZlbnQ6IFN5bnRoZXRpY01vdXNlRXZlbnQ8PiB9KSA9PiB2b2lkLFxuICBzaXplPzogJ3NtJyB8ICdtZCcgfCAnbGcnLFxuICB0ZXh0OiBzdHJpbmcsXG4gIHR5cGU/OiAnc3VibWl0JyB8ICdidXR0b24nLFxufH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbihwcm9wczogUHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIGFjY2Vzc2liaWxpdHlFeHBhbmRlZCxcbiAgICBhY2Nlc3NpYmlsaXR5SGFzcG9wdXAsXG4gICAgYWNjZXNzaWJpbGl0eUxhYmVsLFxuICAgIGNvbG9yID0gJ2dyYXknLFxuICAgIGRpc2FibGVkID0gZmFsc2UsXG4gICAgaW5saW5lID0gZmFsc2UsXG4gICAgbmFtZSxcbiAgICBvbkNsaWNrLFxuICAgIHNpemUgPSAnbWQnLFxuICAgIHRleHQsXG4gICAgdHlwZSA9ICdidXR0b24nLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgdGV4dENvbG9yID0ge1xuICAgIGJsdWU6ICd3aGl0ZScsXG4gICAgZ3JheTogJ2RhcmtHcmF5JyxcbiAgICByZWQ6ICd3aGl0ZScsXG4gICAgdHJhbnNwYXJlbnQ6ICd3aGl0ZScsXG4gICAgd2hpdGU6ICdkYXJrR3JheScsXG4gIH07XG5cbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzbmFtZXMoc3R5bGVzLmJ1dHRvbiwge1xuICAgIFtzdHlsZXMuc21dOiBzaXplID09PSAnc20nLFxuICAgIFtzdHlsZXMubWRdOiBzaXplID09PSAnbWQnLFxuICAgIFtzdHlsZXMubGddOiBzaXplID09PSAnbGcnLFxuICAgIFtzdHlsZXMuc29saWRdOiBjb2xvciAhPT0gJ3RyYW5zcGFyZW50JyxcbiAgICBbc3R5bGVzW2NvbG9yXV06ICFkaXNhYmxlZCxcbiAgICBbc3R5bGVzLmRpc2FibGVkXTogZGlzYWJsZWQsXG4gICAgW3N0eWxlcy5lbmFibGVkXTogIWRpc2FibGVkLFxuICAgIFtzdHlsZXMuaW5saW5lXTogaW5saW5lLFxuICAgIFtzdHlsZXMuYmxvY2tdOiAhaW5saW5lLFxuICB9KTtcblxuICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9idXR0b24taGFzLXR5cGUgKi9cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBhcmlhLWV4cGFuZGVkPXthY2Nlc3NpYmlsaXR5RXhwYW5kZWR9XG4gICAgICBhcmlhLWhhc3BvcHVwPXthY2Nlc3NpYmlsaXR5SGFzcG9wdXB9XG4gICAgICBhcmlhLWxhYmVsPXthY2Nlc3NpYmlsaXR5TGFiZWx9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXN9XG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICBuYW1lPXtuYW1lfVxuICAgICAgb25DbGljaz17ZXZlbnQgPT4gb25DbGljayAmJiBvbkNsaWNrKHsgZXZlbnQgfSl9XG4gICAgICB0eXBlPXt0eXBlfVxuICAgID5cbiAgICAgIDxUZXh0XG4gICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgYm9sZFxuICAgICAgICBjb2xvcj17ZGlzYWJsZWQgPyAnZ3JheScgOiB0ZXh0Q29sb3JbY29sb3JdfVxuICAgICAgICBvdmVyZmxvdz1cIm5vcm1hbFwiXG4gICAgICAgIHNpemU9e3NpemV9XG4gICAgICA+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9UZXh0PlxuICAgIDwvYnV0dG9uPlxuICApO1xuICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0L2J1dHRvbi1oYXMtdHlwZSAqL1xufVxuXG5CdXR0b24ucHJvcFR5cGVzID0ge1xuICBhY2Nlc3NpYmlsaXR5RXhwYW5kZWQ6IFByb3BUeXBlcy5ib29sLFxuICBhY2Nlc3NpYmlsaXR5SGFzcG9wdXA6IFByb3BUeXBlcy5ib29sLFxuICBhY2Nlc3NpYmlsaXR5TGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydibHVlJywgJ2dyYXknLCAncmVkJywgJ3RyYW5zcGFyZW50JywgJ3doaXRlJ10pLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGlubGluZTogUHJvcFR5cGVzLmJvb2wsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydzbScsICdtZCcsICdsZyddKSxcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0eXBlOiBQcm9wVHlwZXMub25lT2YoWydidXR0b24nLCAnc3VibWl0J10pLFxufTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgQm94IGZyb20gJy4vQm94LmpzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DYXJkLmNzcyc7XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBhY3RpdmU/OiA/Ym9vbGVhbixcbiAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlLFxuICBpbWFnZT86IFJlYWN0Lk5vZGUsXG4gIG9uTW91c2VFbnRlcj86ICh7IGV2ZW50OiBTeW50aGV0aWNNb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PiB9KSA9PiB2b2lkLFxuICBvbk1vdXNlTGVhdmU/OiAoeyBldmVudDogU3ludGhldGljTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4gfSkgPT4gdm9pZCxcbnx9O1xuXG50eXBlIFN0YXRlID0ge3xcbiAgaG92ZXJlZDogYm9vbGVhbixcbnx9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIGltYWdlOiBQcm9wVHlwZXMubm9kZSxcbiAgICBvbk1vdXNlRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uTW91c2VMZWF2ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIH07XG5cbiAgc3RhdGU6IFN0YXRlID0ge1xuICAgIGhvdmVyZWQ6IGZhbHNlLFxuICB9O1xuXG4gIGhhbmRsZU1vdXNlRW50ZXIgPSAoZXZlbnQ6IFN5bnRoZXRpY01vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyBvbk1vdXNlRW50ZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHsgaG92ZXJlZDogdHJ1ZSB9LFxuICAgICAgb25Nb3VzZUVudGVyICYmICgoKSA9PiBvbk1vdXNlRW50ZXIoeyBldmVudCB9KSlcbiAgICApO1xuICB9O1xuXG4gIGhhbmRsZU1vdXNlTGVhdmUgPSAoZXZlbnQ6IFN5bnRoZXRpY01vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyBvbk1vdXNlTGVhdmUgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHsgaG92ZXJlZDogZmFsc2UgfSxcbiAgICAgIG9uTW91c2VMZWF2ZSAmJiAoKCkgPT4gb25Nb3VzZUxlYXZlKHsgZXZlbnQgfSkpXG4gICAgKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhY3RpdmUsIGNoaWxkcmVuLCBpbWFnZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGhvdmVyZWQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCBjbGFzc2VzID0gY2xhc3NuYW1lcyhzdHlsZXMuY2FyZCwge1xuICAgICAgLy8gSWYsIGxpa2UgQGNocmlzbGxveWQsIHlvdSBjYW4ndCByZW1lbWJlciBKYXZhc2NyaXB0IGVxdWFsaXR5IHJ1bGVzLFxuICAgICAgLy8gPT0gbnVsbCBjaGVja3MgZm9yIGBudWxsYCBvciBgdW5kZWZpbmVkYCBhbmQgbGVhdmVzIG91dCBgZmFsc2VgLlxuICAgICAgW3N0eWxlcy5ob3Zlcl06IGFjdGl2ZSB8fCAoYWN0aXZlID09IG51bGwgJiYgaG92ZXJlZCksXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMuaGFuZGxlTW91c2VFbnRlcn1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZU1vdXNlTGVhdmV9XG4gICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgPlxuICAgICAgICB7aW1hZ2UgJiYgPEJveCBtYXJnaW5Cb3R0b209ezF9PntpbWFnZX08L0JveD59XG4gICAgICAgIDxCb3g+e2NoaWxkcmVufTwvQm94PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30gLz5cbiAgICAgIDwvQm94PlxuICAgICk7XG4gIH1cbn1cbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgY29sb3JzIGZyb20gJy4vQ29sb3JzLmNzcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2hlY2tib3guY3NzJztcbmltcG9ydCBCb3ggZnJvbSAnLi9Cb3guanMnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uLmpzJztcblxudHlwZSBQcm9wcyA9IHt8XG4gIGNoZWNrZWQ/OiBib29sZWFuLFxuICBkaXNhYmxlZD86IGJvb2xlYW4sXG4gIGhhc0Vycm9yPzogYm9vbGVhbixcbiAgaWQ6IHN0cmluZyxcbiAgaW5kZXRlcm1pbmF0ZT86IGJvb2xlYW4sXG4gIG5hbWU/OiBzdHJpbmcsXG4gIG9uQ2hhbmdlOiAoeyBldmVudDogU3ludGhldGljSW5wdXRFdmVudDw+LCBjaGVja2VkOiBib29sZWFuIH0pID0+IHZvaWQsXG4gIG9uQ2xpY2s/OiAoe1xuICAgIGV2ZW50OiBTeW50aGV0aWNJbnB1dEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+LFxuICAgIGNoZWNrZWQ6IGJvb2xlYW4sXG4gIH0pID0+IHZvaWQsXG4gIHNpemU/OiAnc20nIHwgJ21kJyxcbnx9O1xuXG50eXBlIFN0YXRlID0ge3xcbiAgZm9jdXNlZDogYm9vbGVhbixcbnx9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja2JveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaGFzRXJyb3I6IFByb3BUeXBlcy5ib29sLFxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaW5kZXRlcm1pbmF0ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydzbScsICdtZCddKSxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBoYXNFcnJvcjogZmFsc2UsXG4gICAgaW5kZXRlcm1pbmF0ZTogZmFsc2UsXG4gICAgc2l6ZTogJ21kJyxcbiAgfTtcblxuICBzdGF0ZSA9IHtcbiAgICBmb2N1c2VkOiBmYWxzZSxcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5pbmRldGVybWluYXRlKSB7XG4gICAgICB0aGlzLnNldEluZGV0ZXJtaW5hdGUoISF0aGlzLnByb3BzLmluZGV0ZXJtaW5hdGUpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2aW91c1Byb3BzOiBQcm9wcykge1xuICAgIGlmIChwcmV2aW91c1Byb3BzLmluZGV0ZXJtaW5hdGUgIT09IHRoaXMucHJvcHMuaW5kZXRlcm1pbmF0ZSkge1xuICAgICAgdGhpcy5zZXRJbmRldGVybWluYXRlKCEhdGhpcy5wcm9wcy5pbmRldGVybWluYXRlKTtcbiAgICB9XG4gIH1cblxuICBzZXRJbmRldGVybWluYXRlKGluZGV0ZXJtaW5hdGU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5pbnB1dCkge1xuICAgICAgdGhpcy5pbnB1dC5pbmRldGVybWluYXRlID0gaW5kZXRlcm1pbmF0ZTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFN5bnRoZXRpY0lucHV0RXZlbnQ8PikgPT4ge1xuICAgIGNvbnN0IHsgY2hlY2tlZCB9ID0gZXZlbnQudGFyZ2V0O1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoeyBldmVudCwgY2hlY2tlZCB9KTtcbiAgfTtcblxuICBoYW5kbGVDbGljayA9IChldmVudDogU3ludGhldGljSW5wdXRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgb25DbGljayB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAob25DbGljaykge1xuICAgICAgY29uc3QgeyBjaGVja2VkIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgb25DbGljayh7IGV2ZW50LCBjaGVja2VkIH0pO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVCbHVyID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWQ6IGZhbHNlIH0pO1xuXG4gIGhhbmRsZUZvY3VzID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWQ6IHRydWUgfSk7XG5cbiAgaW5wdXQ6ID9IVE1MSW5wdXRFbGVtZW50O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGVja2VkLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBoYXNFcnJvcixcbiAgICAgIGlkLFxuICAgICAgaW5kZXRlcm1pbmF0ZSxcbiAgICAgIG5hbWUsXG4gICAgICBzaXplLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgbGV0IGJvcmRlclN0eWxlID0gc3R5bGVzLmJvcmRlcjtcbiAgICBpZiAoIWRpc2FibGVkICYmIChjaGVja2VkIHx8IGluZGV0ZXJtaW5hdGUpKSB7XG4gICAgICBib3JkZXJTdHlsZSA9IHN0eWxlcy5ib3JkZXJEYXJrO1xuICAgIH0gZWxzZSBpZiAoaGFzRXJyb3IpIHtcbiAgICAgIGJvcmRlclN0eWxlID0gc3R5bGVzLmJvcmRlckVycm9yO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94IHBvc2l0aW9uPVwicmVsYXRpdmVcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmlucHV0LCB7XG4gICAgICAgICAgICBbc3R5bGVzLmlucHV0RW5hYmxlZF06ICFkaXNhYmxlZCxcbiAgICAgICAgICAgIFtzdHlsZXMuaW5kZXRlcm1pbmF0ZV06IGluZGV0ZXJtaW5hdGUsXG4gICAgICAgICAgICBbc3R5bGVzLmlucHV0U21dOiBzaXplID09PSAnc20nLFxuICAgICAgICAgICAgW3N0eWxlcy5pbnB1dE1kXTogc2l6ZSA9PT0gJ21kJyxcbiAgICAgICAgICB9KX1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVGb2N1c31cbiAgICAgICAgICByZWY9e2VsID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQgPSBlbDtcbiAgICAgICAgICB9fVxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICBib3JkZXJTdHlsZSxcbiAgICAgICAgICAgIHN0eWxlcy5jaGVjayxcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXN0ZWQtdGVybmFyeVxuICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgPyBjaGVja2VkIHx8IGluZGV0ZXJtaW5hdGVcbiAgICAgICAgICAgICAgICA/IGNvbG9ycy5ncmF5QmdcbiAgICAgICAgICAgICAgICA6IGNvbG9ycy5saWdodEdyYXlCZ1xuICAgICAgICAgICAgICA6IGNoZWNrZWQgfHwgaW5kZXRlcm1pbmF0ZVxuICAgICAgICAgICAgICAgID8gY29sb3JzLmRhcmtHcmF5QmdcbiAgICAgICAgICAgICAgICA6IGNvbG9ycy53aGl0ZUJnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBbc3R5bGVzLmNoZWNrRW5hYmxlZF06ICFkaXNhYmxlZCxcbiAgICAgICAgICAgICAgW3N0eWxlcy5jaGVja0ZvY3VzZWRdOiB0aGlzLnN0YXRlLmZvY3VzZWQsXG4gICAgICAgICAgICAgIFtzdHlsZXMuY2hlY2tNZF06IHNpemUgPT09ICdtZCcsXG4gICAgICAgICAgICAgIFtzdHlsZXMuY2hlY2tTbV06IHNpemUgPT09ICdzbScsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKX1cbiAgICAgICAgPlxuICAgICAgICAgIHsoY2hlY2tlZCB8fCBpbmRldGVybWluYXRlKSAmJiAoXG4gICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICBhY2Nlc3NpYmlsaXR5TGFiZWw9XCJcIlxuICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgaWNvbj17aW5kZXRlcm1pbmF0ZSA/ICdkYXNoJyA6ICdjaGVjayd9XG4gICAgICAgICAgICAgIHNpemU9e3NpemUgPT09ICdzbScgPyA4IDogMTJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Cb3g+XG4gICAgKTtcbiAgfVxufVxuIiwiLy8gQGZsb3dcbi8qXG4gICMgQ29sbGVjdGlvblxuXG4gIENvbGxlY3Rpb24gaXMgY29tcG9uZW50IHRoYXQgY2FuIGFic29sdXRlbHkgcG9zaXRpb24gYW5kIHZpcnR1YWxpemUgaXRlbXMuIEl0J3MgbWVhbnQgdG8gYmUgYW4gZXh0ZXJlbWx5IHNpbXBsZSB3b3JraG9yc2UgdG8gcmUtaW1wbGVtZW50IGN1c3RvbSBsYXlvdXRzLiBJdCdzIG5vdCBwZXJmZWN0IGZvciBhbGwgc2l0dWF0aW9ucyBidXQgaXQgZG9lcyBoYXZlIGEgY2xvc2VkIEFQSSBhbmQgaXMgcHJldHR5IHBlcmZvcm1hbnQuXG5cbiAgIyMgSG93IGl0IHdvcmtzXG5cbiAgVGhlcmUgYXJlIHR3byBjZW50cmFsIGNvbmNlcHRzIHRvIENvbGxlY3Rpb24gLSB0aGUgY29udGVudCBsYXllciBhbmQgdGhlIHZpZXdwb3J0IGxheWVyLlxuXG4gIENvbnRlbnQgbGF5ZXIgICAgICAgICAgICAgICBWaWV3cG9ydCAgICAgICAgICAgICAgICAgICBDb21wb3NpdGUgbGF5ZXJcblxuICArLS0tLS0tLS0tLS0tLS0tLSsgICAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0rICAgICAgICAgICstLS0tLS0tLS0tLS0tLS0tK1xuICB8ICAgICAgICAgICAgICAgIHwgICAgICAgICAgfCAgICAgICAgICAgICAgICB8ICAgICAgICAgIHwgICAgICAgICAgICAgICAgfFxuICB8ICstLSsgKy0tKyArLS0rIHwgICAgICAgICAgfCAgICAgICAgICAgICAgICB8ICAgICAgICAgIHwgICAgICAgICAgICAgICAgfFxuICB8IHwgIHwgfCAgfCB8ICB8IHwgICAgICAgICAgfCAgICAgICAgICAgICAgICB8ICAgICAgICAgIHwgICAgICAgICAgICAgICAgfFxuICB8IHwgIHwgfCAgfCB8ICB8IHwgICAgICAgICAgfCArLS0tLS0tLS0tLS0tKyB8ICAgICAgICAgIHwgKy0tLS0tLS0tLS0tLSsgfFxuICB8ICstLSsgfCAgfCB8ICB8IHwgICAgICAgICAgfCB8ICAgICAgICAgICAgfCB8ICAgICAgICAgIHwgfC0tKyB8ICB8IHwgIHwgfFxuICB8ICAgICAgfCAgfCArLS0rIHwgICAgICAgICAgfCB8ICAgICAgICAgICAgfCB8ICAgICAgICAgIHwgfCAgICB8ICB8ICstLXwgfFxuICB8ICstLSsgKy0tKyAgICAgIHwgICAgICAgICAgfCB8ICAgICAgICAgICAgfCB8ICAgICAgICAgIHwgfC0tKyArLS0rICAgIHwgfFxuICB8IHwgIHwgICAgICArLS0rIHwgKy0tLS0tLT4gfCB8ICAgICAgICAgICAgfCB8ICstLS0tLS0+IHwgfCAgfCAgICAgICstLXwgfFxuICB8ICstLSsgKy0tKyB8ICB8IHwgICAgICAgICAgfCB8ICAgICAgICAgICAgfCB8ICAgICAgICAgIHwgfC0tKyArLS0rIHwgIHwgfFxuICB8ICAgICAgfCAgfCB8ICB8IHwgICAgICAgICAgfCB8ICAgICAgICAgICAgfCB8ICAgICAgICAgIHwgfCAgICB8ICB8IHwgIHwgfFxuICB8ICstLSsgfCAgfCArLS0rIHwgICAgICAgICAgfCB8ICAgICAgICAgICAgfCB8ICAgICAgICAgIHwgfC0tKyB8ICB8ICstLXwgfFxuICB8IHwgIHwgfCAgfCAgICAgIHwgICAgICAgICAgfCB8ICAgICAgICAgICAgfCB8ICAgICAgICAgIHwgfCAgfCB8ICB8ICAgIHwgfFxuICB8IHwgIHwgfCAgfCArLS0rIHwgICAgICAgICAgfCArLS0tLS0tLS0tLS0tKyB8ICAgICAgICAgIHwgKy0tLS0tLS0tLS0tLSsgfFxuICB8IHwgIHwgfCAgfCB8ICB8IHwgICAgICAgICAgfCAgICAgICAgICAgICAgICB8ICAgICAgICAgIHwgICAgICAgICAgICAgICAgfFxuICB8ICstLSsgKy0tKyArLS0rIHwgICAgICAgICAgfCAgICAgICAgICAgICAgICB8ICAgICAgICAgIHwgICAgICAgICAgICAgICAgfFxuICB8ICAgICAgICAgICAgICAgIHwgICAgICAgICAgfCAgICAgICAgICAgICAgICB8ICAgICAgICAgIHwgICAgICAgICAgICAgICAgfFxuICArLS0tLS0tLS0tLS0tLS0tLSsgICAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0rICAgICAgICAgICstLS0tLS0tLS0tLS0tLS0tK1xuXG4gIFlvdSBwb3NpdGlvbiB5b3VyIGl0ZW1zIGluIHRoZSB2aXJ0dWFsIGNvbnRlbnQgbGF5ZXIsIHRoZW4geW91IGRlZmluZSB0aGUgdmlld3BvcnQgbGF5ZXIgKGJ5IGRlZmF1bHQgdGhpcyBpcyB0aGUgZnVsbCBzaXplIG9mIHRoZSBjb250ZW50IGxheWVyKS4gQ29sbGVjdGlvbiB0aGVuIHRha2VzIHRob3NlIGl0ZW1zLCBhbmQgdGhlIHZpZXdwb3J0IHJlbmRlcmluZyB0aGUgY29udGVudCBsYXllciB3aXRoIG9ubHkgdGhlIGl0ZW1zIHRoYXQgZml0IGluc2lkZSB0aGUgdmlld3BvcnQuXG5cbiAgIyMgQXNzdW1wdGlvbnNcblxuICAxLiBZb3VyIGxheW91dCBpcyBwcmUtY2FsY3VsYXRlZC4gQ29sbGVjdGlvbiBleHBlY3RzIGxheW91dCB0byBiZSBwYXNzZWQgaW4gYXMgYSBwcm9wZXJ0eS4gSWYgeW91ciBsYXlvdXQgaXNuJ3QgcmVhZHkgKGkuZS4gc29tZXRoaW5nIG5lZWRzIHRvIGJlIG1lYXN1cmVkKSB0aGUgY2FsbGVyIG5lZWRzIHRvIGZpZ3VyZSB0aGF0IG91dC5cbiAgMi4gUGFzc2VkIGluIEl0ZW0gYXJlIHNvbWV3aGF0IHB1cmUgLSB0aGV5IGNhbiBiZSBtb3VudGVkIGFuZCB1bm1vdW50ZWQgYXQgYW55dGltZSBzbyBJdGVtJ3MgbGlmZWN5Y2xlIG1ldGhvZHMgbmVlZCB0byBhY2NvdW50IGZvciB0aGF0LlxuICAzLiBQYXNzZWQgaW4gSXRlbXMgYXJlIGJvdW5kIHRvIHRoZWlyIGRhdGEtc291cmNlIHNlcGVyYXRlbHkuIEFsbCB0aGV5IHJlY2VpdmUgaXMgYW4gaW5kZXgsIHNvIHRoZXkgbmVlZCB0byBoYXZlIGFueSBleHRlcm5hbCBkYXRhIHNvdXJjZXMgaW4gc2NvcGUuXG4gIDQuIFRoZSB2aWV3cG9ydCBjYW4gYmUgYW55IHNpemUuIE1vc3Qgd2luZG93aW5nL3JlY3ljbGluZyBzb2x1dGlvbnMgaW1wbGVtZW50IHNvbWUgc29ydCBvZiBvdmVyc2Nhbm5pbmcsIGhvd2V2ZXIgQ29sbGVjdGlvbiBsZWF2ZXMgdGhpcyB1cCB0aGUgdGhlIHBhcmVudC5cblxuKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgbGF5b3V0U3R5bGVzIGZyb20gJy4vTGF5b3V0LmNzcyc7XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBJdGVtOiAoeyBpZHg6IG51bWJlciB9KSA9PiBSZWFjdC5Ob2RlLFxuICBsYXlvdXQ6IEFycmF5PHt8XG4gICAgdG9wOiBudW1iZXIsXG4gICAgbGVmdDogbnVtYmVyLFxuICAgIHdpZHRoOiBudW1iZXIsXG4gICAgaGVpZ2h0OiBudW1iZXIsXG4gIHx9PixcbiAgdmlld3BvcnRUb3A/OiBudW1iZXIsXG4gIHZpZXdwb3J0TGVmdD86IG51bWJlcixcbiAgdmlld3BvcnRXaWR0aD86IG51bWJlcixcbiAgdmlld3BvcnRIZWlnaHQ/OiBudW1iZXIsXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGVjdGlvbiBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHMsIHZvaWQ+IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXNcbiAgICBJdGVtOiBQcm9wVHlwZXMuYW55LFxuICAgIGxheW91dDogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMuZXhhY3Qoe1xuICAgICAgICB0b3A6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgbGVmdDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIH0pLmlzUmVxdWlyZWRcbiAgICApLFxuICAgIHZpZXdwb3J0SGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHZpZXdwb3J0TGVmdDogUHJvcFR5cGVzLm51bWJlcixcbiAgICB2aWV3cG9ydFRvcDogUHJvcFR5cGVzLm51bWJlcixcbiAgICB2aWV3cG9ydFdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbGF5b3V0OiBbXSxcbiAgICB2aWV3cG9ydExlZnQ6IDAsXG4gICAgdmlld3BvcnRUb3A6IDAsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgSXRlbSwgbGF5b3V0LCB2aWV3cG9ydFRvcCA9IDAsIHZpZXdwb3J0TGVmdCA9IDAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIGZ1bGwgZGltZW5zaW9ucyBvZiB0aGUgaXRlbSBsYXllclxuICAgIGNvbnN0IHdpZHRoID0gTWF0aC5tYXgoLi4ubGF5b3V0Lm1hcChpdGVtID0+IGl0ZW0ubGVmdCArIGl0ZW0ud2lkdGgpKTtcbiAgICBjb25zdCBoZWlnaHQgPSBNYXRoLm1heCguLi5sYXlvdXQubWFwKGl0ZW0gPT4gaXRlbS50b3AgKyBpdGVtLmhlaWdodCkpO1xuXG4gICAgLy8gRGVmYXVsdCB0aGUgdmlld3BvcnQgdG8gYmVpbmcgdGhlIGZ1bGwgd2lkdGggb2YgdGhlIGNvbnRlbnQgbGF5ZXJcbiAgICBjb25zdCB7IHZpZXdwb3J0V2lkdGggPSB3aWR0aCwgdmlld3BvcnRIZWlnaHQgPSBoZWlnaHQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAvLyBDYWxjdWxhdGVzIHdoaWNoIGl0ZW1zIGZyb20gdGhlIGl0ZW0gbGF5ZXIgdG8gcmVuZGVyIGluIHRoZSB2aWV3cG9ydFxuICAgIC8vIGxheWVyLlxuICAgIGNvbnN0IGl0ZW1zID0gbGF5b3V0LnJlZHVjZSgoYWNjLCBwb3NpdGlvbiwgaWR4KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIHBvc2l0aW9uLnRvcCArIHBvc2l0aW9uLmhlaWdodCA+IHZpZXdwb3J0VG9wICYmXG4gICAgICAgIHBvc2l0aW9uLnRvcCA8IHZpZXdwb3J0SGVpZ2h0ICsgdmlld3BvcnRUb3AgJiZcbiAgICAgICAgcG9zaXRpb24ubGVmdCA8IHZpZXdwb3J0V2lkdGggKyB2aWV3cG9ydExlZnQgJiZcbiAgICAgICAgcG9zaXRpb24ubGVmdCArIHBvc2l0aW9uLndpZHRoID4gdmlld3BvcnRMZWZ0XG4gICAgICApIHtcbiAgICAgICAgYWNjLnB1c2goeyBpZHgsIC4uLnBvc2l0aW9uIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2xheW91dFN0eWxlcy5yZWxhdGl2ZX0gc3R5bGU9e3sgd2lkdGgsIGhlaWdodCB9fT5cbiAgICAgICAge2l0ZW1zLm1hcCgoeyBpZHgsIC4uLnN0eWxlIH0pID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aWR4fSBjbGFzc05hbWU9e2xheW91dFN0eWxlcy5hYnNvbHV0ZX0gc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICAgIDxJdGVtIGlkeD17aWR4fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENvbGxlY3Rpb24gZnJvbSAnLi9Db2xsZWN0aW9uLmpzJztcblxudHlwZSBDb2x1bW4gPSAyIHwgMyB8IDQ7XG5cbi8qXG5cblRoaXMgZnVuY3Rpb24ganVzdCBpbXBsZW1lbnRzIHRoZSBkZXNpZ24gY29uc3RyYWludHMgZm9yIGFzeW1ldHJpY2FsIGNvbHVtbnMgaW5cbmEgdmVyeSBzaW1wbGUgd2F5LiBJdCdzIG5vdCBwZXJmZWN0LCBidXQgaXQncyB2ZXJ5IHByZWRpY3RpYmxlLiBJZiB5b3UgZG9cbmFueXRoaW5nLCBpbXByb3ZlIGl0IHNvIHRoYXQgaXQgdGFrZXMgdGhlc2UgY29uc3RyYWludHMgYW5kIGdlbmVyYXRlcyB0aGVtXG5mb3IgbiA+IDQuXG5cbjEgKyBuIGNvbHVtbnM6XG4gIGZpcnN0IGNvbHVtbiBpcyA1MC81MFxuICBjYW4ndCBoYXZlIDMgY29sdW1ucyBpbiBhIHJvdyBiZSA1MC81MFxuXG4qL1xuY29uc3QgVVAgPSBbMC43NSwgMC4yNV07XG5jb25zdCBET1dOID0gWzAuMjUsIDAuNzVdO1xuY29uc3QgTUlEID0gWzAuNSwgMC41XTtcbmNvbnN0IGNvbHVtbkxheW91dCA9IChudW1PZkNvbHVtbnM6IDEgfCBDb2x1bW4pID0+IHtcbiAgc3dpdGNoIChudW1PZkNvbHVtbnMpIHtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gW1tNSURdLCBbVVBdLCBbRE9XTl1dO1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiBbW1VQLCBNSURdLCBbRE9XTiwgTUlEXSwgW01JRCwgVVBdLCBbTUlELCBET1dOXV07XG4gICAgY2FzZSA0OlxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgW01JRCwgVVAsIE1JRCwgTUlEXSxcbiAgICAgICAgW01JRCwgRE9XTiwgTUlELCBNSURdLFxuICAgICAgICBbTUlELCBNSUQsIFVQLCBNSURdLFxuICAgICAgICBbTUlELCBNSUQsIERPV04sIE1JRF0sXG4gICAgICAgIFtNSUQsIFVQLCBNSUQsIERPV05dLFxuICAgICAgICBbTUlELCBET1dOLCBNSUQsIFVQXSxcbiAgICAgIF07XG4gICAgY2FzZSAzOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gW1xuICAgICAgICBbTUlELCBVUCwgTUlEXSxcbiAgICAgICAgW01JRCwgRE9XTiwgTUlEXSxcbiAgICAgICAgW01JRCwgTUlELCBVUF0sXG4gICAgICAgIFtNSUQsIE1JRCwgRE9XTl0sXG4gICAgICBdO1xuICB9XG59O1xuXG5jb25zdCBwYWRkaW5nQWxsID0gKGd1dHRlciwgcG9zaXRpb25zKSA9PlxuICBwb3NpdGlvbnMubWFwKCh7IHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCB9KSA9PiAoe1xuICAgIHRvcCxcbiAgICBsZWZ0LFxuICAgIHdpZHRoOiB3aWR0aCAtIGd1dHRlcixcbiAgICBoZWlnaHQ6IGhlaWdodCAtIGd1dHRlcixcbiAgfSkpO1xuXG5jb25zdCBtaW5kZXggPSBhcnIgPT5cbiAgYXJyLnJlZHVjZSgobWluSW5kZXgsIGl0ZW0sIGkpID0+IChpdGVtIDwgYXJyW21pbkluZGV4XSA/IGkgOiBtaW5JbmRleCksIDApO1xuXG5jb25zdCBjb2x1bW5zRm9yQ29sbGFnZVdpdGhDb3ZlciA9IChudW1PZkNvbHVtbnM6IENvbHVtbikgPT5cbiAgbnVtT2ZDb2x1bW5zID09PSA0ID8gMiA6IDE7XG5cbmZ1bmN0aW9uIGdldENvbGxhZ2VMYXlvdXQoe1xuICBndXR0ZXIsXG4gIGNvdmVyLFxuICBjb2x1bW5zOiBudW1Db2xzLFxuICBoZWlnaHQ6IGgsXG4gIHdpZHRoOiB3LFxuICBsYXlvdXRLZXksXG59OiB7XG4gIGd1dHRlcjogbnVtYmVyLFxuICBjb3ZlcjogYm9vbGVhbixcbiAgY29sdW1uczogQ29sdW1uLFxuICBoZWlnaHQ6IG51bWJlcixcbiAgd2lkdGg6IG51bWJlcixcbiAgbGF5b3V0S2V5OiBudW1iZXIsXG59KSB7XG4gIGxldCBwb3NpdGlvbnMgPSBbXTtcbiAgY29uc3Qgd2lkdGggPSB3ICsgZ3V0dGVyO1xuICBjb25zdCBoZWlnaHQgPSBoICsgZ3V0dGVyO1xuXG4gIC8vIElmIHRoZXJlJ3MgYSBjb3ZlciBpbWFnZSwgd2UnbGwgYWRkIHRoYXQgbGF0ZXIuIEl0IHNob3VsZCBiZSBhIGxpdHRsZVxuICAvLyBsZXNzIHRoYW4gaGFsZiB0aGUgd2lkdGggb2YgdGhlIGNvbGxhZ2UuIFdlIGRvIHRoaXMgbm93IChhbmQgbm90IGxhdGVyXG4gIC8vIHdoZW4gd2UgYWRkIHRoZSBjb3ZlciBpbWFnZSkgYmVjYXVzZSBvZiBgY29sdW1uTGF5b3V0YCdzIGNvbnN0cmFpbnRzXG4gIC8vIG5lZWRpbmcgdGhlIGV4YWN0IG51bWJlciBvZiBjb2x1bW5zIHRoYXQgYXJlIGRpc3BsYXllZC5cbiAgY29uc3QgZ3JpZENvbHMgPSBjb3ZlciA/IGNvbHVtbnNGb3JDb2xsYWdlV2l0aENvdmVyKG51bUNvbHMpIDogbnVtQ29scztcblxuICAvLyBTZWxlY3RzIHRoZSBsYXlvdXQgdGhhdCB3ZSdyZSBnb2luZyB0byB1c2UgZm9yIHRoZSBncmlkXG4gIGNvbnN0IGNvbHVtbnMgPSBjb2x1bW5MYXlvdXQoZ3JpZENvbHMpO1xuICBjb25zdCBsYXlvdXRJZHggPSBsYXlvdXRLZXkgJSBjb2x1bW5zLmxlbmd0aDtcbiAgY29uc3QgbGF5b3V0ID0gY29sdW1uc1tsYXlvdXRJZHhdO1xuXG4gIC8vIFRoaXMgZG9lcyBhIHJlYWxseSBzaW1wbGUgdmVyc2lvbiBvZiBvdXIgbWFzb25yeSBsYXlvdXQuIFdoeSByZXBsaWNhdGVcbiAgLy8gdGhhdCBoZXJlPyBhLikgZmV3ZXIgZGVwZW5kZW5jaWVzIGFuZCBiLikgd2UgbmVlZCB0aGUgYWxnb3JpdGhtIHRvXG4gIC8vIHJvdWdobHkgcHJlc2VydmUgdGhlIG9yZGVyIG9mIHRoZSBjb2xsYWdlcyBmcm9tIHdoZW4gdGhleSB3ZXJlIG9yZGVyZWRcbiAgLy8gYnkgTWFzb25yeS5cbiAgY29uc3QgY29sSGVpZ2h0cyA9IG5ldyBBcnJheShncmlkQ29scykuZmlsbCgwKTtcbiAgY29uc3QgY29sQ291bnRzID0gbmV3IEFycmF5KGdyaWRDb2xzKS5maWxsKDApO1xuXG4gIC8vIFdlIGl0ZXJhdGUgb3ZlciBldmVyeSBwb3NpdGlvbiB0aGF0IHdlIHRoaW5rIHdlIGNvdWxkIF9wb3RlbnRpYWxseV8gaGF2ZVxuICAvLyBzbyB0aGF0IHdlIGNhbiBmaWxsIHRoZW0gd2l0aCBlbXB0eSBzZWN0aW9ucyBpZiBuZWVkIGJlLlxuICBmb3IgKGxldCBpID0gMDsgaSA8IDIgKiBncmlkQ29sczsgaSArPSAxKSB7XG4gICAgY29uc3QgY29sID0gbWluZGV4KGNvbEhlaWdodHMpO1xuICAgIGNvbnN0IGNvbElkeCA9IGNvbENvdW50c1tjb2xdO1xuICAgIGNvbnN0IGl0ZW1IZWlnaHQgPSBsYXlvdXRbY29sXVtjb2xJZHhdICogaGVpZ2h0O1xuXG4gICAgcG9zaXRpb25zLnB1c2goe1xuICAgICAgdG9wOiBjb2xIZWlnaHRzW2NvbF0sXG4gICAgICBsZWZ0OiBjb2wgKiAod2lkdGggLyBudW1Db2xzKSxcbiAgICAgIHdpZHRoOiB3aWR0aCAvIG51bUNvbHMsXG4gICAgICBoZWlnaHQ6IGl0ZW1IZWlnaHQsXG4gICAgfSk7XG5cbiAgICBjb2xIZWlnaHRzW2NvbF0gKz0gaXRlbUhlaWdodDtcbiAgICBjb2xDb3VudHNbY29sXSArPSAxO1xuICB9XG5cbiAgLy8gSWYgd2UgaGF2ZSBhIGNvdmVyIGltYWdlLCBmaWd1cmUgb3V0IGhvdyBiaWcgaXQgaXMsIHRoZW4gbW92ZSBhbGwgdGhlXG4gIC8vIGV4aXN0aW5nIGNvbHVtbnMgb3Zlci5cbiAgaWYgKGNvdmVyKSB7XG4gICAgY29uc3QgY292ZXJJbWFnZVdpZHRoID0gTWF0aC5jZWlsKG51bUNvbHMgLyAyKSAqICh3aWR0aCAvIG51bUNvbHMpO1xuICAgIHBvc2l0aW9ucyA9IHBvc2l0aW9ucy5tYXAocG9zaXRpb24gPT4gKHtcbiAgICAgIC4uLnBvc2l0aW9uLFxuICAgICAgbGVmdDogY292ZXJJbWFnZVdpZHRoICsgcG9zaXRpb24ubGVmdCxcbiAgICB9KSk7XG4gICAgcG9zaXRpb25zLnVuc2hpZnQoeyB0b3A6IDAsIGxlZnQ6IDAsIHdpZHRoOiBjb3ZlckltYWdlV2lkdGgsIGhlaWdodCB9KTtcbiAgfVxuXG4gIC8vIFRoaXMgYWRkcyB0aGUgc3BhY2UgYmV0d2VlbiBhbnkgaXRlbXMgdGhhdCB3ZSBoYXZlLiBJdCdzIG5pY2UgdG8gZG9cbiAgLy8gdGhpcyBhcyBhIHNlcGFyYXRlIHBhc3MgYWZ0ZXIgZXZlcnl0aGluZyBlbHNlLCBiZWNhdXNlIHRoZSBtYXRoIGVhcmxpZXJcbiAgLy8gYmVjb21lcyBlYXNpZXIgYW5kIGl0J3MgbGVzcyBicml0dGxlIHRvIGNoYW5nZS5cbiAgaWYgKGd1dHRlcikge1xuICAgIHBvc2l0aW9ucyA9IHBhZGRpbmdBbGwoZ3V0dGVyLCBwb3NpdGlvbnMpO1xuICB9XG5cbiAgcmV0dXJuIHBvc2l0aW9ucztcbn1cblxudHlwZSBQcm9wcyA9IHt8XG4gIGNvbHVtbnM6IENvbHVtbixcbiAgY292ZXI/OiBib29sZWFuLFxuICBndXR0ZXI/OiBudW1iZXIsXG4gIGhlaWdodDogbnVtYmVyLFxuICBsYXlvdXRLZXk/OiBudW1iZXIsXG4gIHJlbmRlckltYWdlOiAoe3xcbiAgICB3aWR0aDogbnVtYmVyLFxuICAgIGhlaWdodDogbnVtYmVyLFxuICAgIGluZGV4OiBudW1iZXIsXG4gIHx9KSA9PiBSZWFjdC5Ob2RlLFxuICB3aWR0aDogbnVtYmVyLFxufH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbGxhZ2UocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBjb2x1bW5zLFxuICAgIGNvdmVyLFxuICAgIGd1dHRlcixcbiAgICBoZWlnaHQsXG4gICAgbGF5b3V0S2V5LFxuICAgIHJlbmRlckltYWdlLFxuICAgIHdpZHRoLFxuICB9ID0gcHJvcHM7XG4gIGNvbnN0IHBvc2l0aW9ucyA9IGdldENvbGxhZ2VMYXlvdXQoe1xuICAgIGNvbHVtbnMsXG4gICAgY292ZXI6ICEhY292ZXIsXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGd1dHRlcjogZ3V0dGVyIHx8IDAsXG4gICAgbGF5b3V0S2V5OiBsYXlvdXRLZXkgfHwgMCxcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPENvbGxlY3Rpb25cbiAgICAgIEl0ZW09eyh7IGlkeDogaW5kZXggfSkgPT5cbiAgICAgICAgcmVuZGVySW1hZ2Uoe1xuICAgICAgICAgIGluZGV4LFxuICAgICAgICAgIHdpZHRoOiBwb3NpdGlvbnNbaW5kZXhdLndpZHRoLFxuICAgICAgICAgIGhlaWdodDogcG9zaXRpb25zW2luZGV4XS5oZWlnaHQsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBsYXlvdXQ9e3Bvc2l0aW9uc31cbiAgICAvPlxuICApO1xufVxuXG5Db2xsYWdlLnByb3BUeXBlcyA9IHtcbiAgY29sdW1uczogUHJvcFR5cGVzLm9uZU9mKFsyLCAzLCA0XSkuaXNSZXF1aXJlZCxcbiAgY292ZXI6IFByb3BUeXBlcy5ib29sLFxuICBndXR0ZXI6IFByb3BUeXBlcy5udW1iZXIsXG4gIGhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBsYXlvdXRLZXk6IFByb3BUeXBlcy5udW1iZXIsXG4gIHJlbmRlckltYWdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB3aWR0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxufTtcbiIsIi8qIEBmbG93ICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ29sdW1uQ29sdW1uLmNzcyc7XG5cbnR5cGUgRGVwcmVjYXRlZENvbHVtbnMgPSAxIHwgMiB8IDMgfCA0IHwgNSB8IDYgfCA3IHwgOCB8IDkgfCAxMCB8IDExIHwgMTI7XG50eXBlIENvbHVtbnMgPSAwIHwgMSB8IDIgfCAzIHwgNCB8IDUgfCA2IHwgNyB8IDggfCA5IHwgMTAgfCAxMSB8IDEyO1xuXG50eXBlIENvbHVtblByb3BzID1cbiAgfCB7fFxuICAgICAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlLFxuICAgICAgc3BhbjogQ29sdW1ucyxcbiAgICAgIHNtU3Bhbj86IENvbHVtbnMsXG4gICAgICBtZFNwYW4/OiBDb2x1bW5zLFxuICAgICAgbGdTcGFuPzogQ29sdW1ucyxcbiAgICB8fVxuICB8IHt8XG4gICAgICBjaGlsZHJlbj86IFJlYWN0Lk5vZGUsXG4gICAgICB4cz86IERlcHJlY2F0ZWRDb2x1bW5zLFxuICAgICAgc20/OiBEZXByZWNhdGVkQ29sdW1ucyxcbiAgICAgIG1kPzogRGVwcmVjYXRlZENvbHVtbnMsXG4gICAgICBsZz86IERlcHJlY2F0ZWRDb2x1bW5zLFxuICAgIHx9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2x1bW4ocHJvcHM6IENvbHVtblByb3BzKSB7XG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xuICBjb25zdCBjcyA9IGNsYXNzbmFtZXMoXG4gICAgKHByb3BzLnhzICE9PSB1bmRlZmluZWQgfHxcbiAgICAgIHByb3BzLnNtICE9PSB1bmRlZmluZWQgfHxcbiAgICAgIHByb3BzLm1kICE9PSB1bmRlZmluZWQgfHxcbiAgICAgIHByb3BzLmxnICE9PSB1bmRlZmluZWQpICYmXG4gICAgICBzdHlsZXMuZGVwcmVjYXRlZENvbHVtbixcbiAgICBwcm9wcy54cyAmJiBzdHlsZXNbYHhzQ29sJHtwcm9wcy54c31gXSxcbiAgICBwcm9wcy5zbSAmJiBzdHlsZXNbYHNtQ29sJHtwcm9wcy5zbX1gXSxcbiAgICBwcm9wcy5tZCAmJiBzdHlsZXNbYG1kQ29sJHtwcm9wcy5tZH1gXSxcbiAgICBwcm9wcy5sZyAmJiBzdHlsZXNbYGxnQ29sJHtwcm9wcy5sZ31gXSxcbiAgICBwcm9wcy5zcGFuICE9IG51bGwgJiYgc3R5bGVzW2B4c0NvbCR7cHJvcHMuc3Bhbn1gXSxcbiAgICBwcm9wcy5zbVNwYW4gIT0gbnVsbCAmJiBzdHlsZXNbYHNtQ29sJHtwcm9wcy5zbVNwYW59YF0sXG4gICAgcHJvcHMubWRTcGFuICE9IG51bGwgJiYgc3R5bGVzW2BtZENvbCR7cHJvcHMubWRTcGFufWBdLFxuICAgIHByb3BzLmxnU3BhbiAhPSBudWxsICYmIHN0eWxlc1tgbGdDb2wke3Byb3BzLmxnU3Bhbn1gXVxuICApO1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NzfT57Y2hpbGRyZW59PC9kaXY+O1xufVxuXG5Db2x1bW4ucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIHhzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBzbTogUHJvcFR5cGVzLm51bWJlcixcbiAgbWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIGxnOiBQcm9wVHlwZXMubnVtYmVyLFxuICBzcGFuOiBQcm9wVHlwZXMubnVtYmVyLFxuICBzbVNwYW46IFByb3BUeXBlcy5udW1iZXIsXG4gIG1kU3BhbjogUHJvcFR5cGVzLm51bWJlcixcbiAgbGdTcGFuOiBQcm9wVHlwZXMubnVtYmVyLFxufTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJveCBmcm9tICcuL0JveC5qcyc7XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBjaGlsZHJlbj86IFJlYWN0Lk5vZGUsXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFpbmVyKHByb3BzOiBQcm9wcykge1xuICBjb25zdCB7IGNoaWxkcmVuIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8Qm94IGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgZGlzcGxheT1cImZsZXhcIj5cbiAgICAgIDxCb3ggbWF4V2lkdGg9ezgwMH0gd2lkdGg9XCIxMDAlXCI+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufVxuXG5Db250YWluZXIucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuIiwiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9EaXZpZGVyLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERpdmlkZXIoKSB7XG4gIHJldHVybiA8aHIgY2xhc3NOYW1lPXtzdHlsZXMuZGl2aWRlcn0gLz47XG59XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxudHlwZSBQcm9wcyA9IHtcbiAgZGlyZWN0aW9uPzogPyd1cCcgfCAncmlnaHQnIHwgJ2Rvd24nIHwgJ2xlZnQnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZXQocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgZGlyZWN0aW9uIH0gPSBwcm9wcztcbiAgbGV0IHBhdGg7XG4gIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgY2FzZSAndXAnOlxuICAgICAgcGF0aCA9ICdNMCAwIEwxMiAxMiBMMjQgMCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdyaWdodCc6XG4gICAgICBwYXRoID0gJ00yNCAwIEwxMiAxMiBMMjQgMjQnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZG93bic6XG4gICAgICBwYXRoID0gJ00wIDI0IEwxMiAxMiBMMjQgMjQnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbGVmdCc6XG4gICAgICBwYXRoID0gJ00wIDAgTDEyIDEyIEwwIDI0JztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+XG4gICAgICA8cGF0aCBkPXtwYXRofSAvPlxuICAgIDwvc3ZnPlxuICApO1xufVxuXG5DYXJldC5wcm9wVHlwZXMgPSB7XG4gIGRpcmVjdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsndXAnLCAncmlnaHQnLCAnZG93bicsICdsZWZ0J10pLFxufTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgQ2FyZXQgZnJvbSAnLi9DYXJldC5qcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ29udGVudHMuY3NzJztcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi9Db2xvcnMuY3NzJztcblxuLyogTmVlZGVkIHVudGlsIHRoaXMgRmxvdyBpc3N1ZSBpcyBmaXhlZDogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzM4MCAqL1xuLyogZXNsaW50IHF1b3RlLXByb3BzOiAwICovXG5jb25zdCBTUEFDRVNfSU5ERVhfTUFQID0ge1xuICAnMCc6ICd1cCcsXG4gICcxJzogJ3JpZ2h0JyxcbiAgJzInOiAnZG93bicsXG4gICczJzogJ2xlZnQnLFxufTtcblxuY29uc3QgRElSX0lOREVYX01BUCA9IHtcbiAgdXA6IDAsXG4gIHJpZ2h0OiAxLFxuICBkb3duOiAyLFxuICBsZWZ0OiAzLFxufTtcblxuY29uc3QgTUFSR0lOID0gMjQ7XG5leHBvcnQgY29uc3QgQ0FSRVRfSEVJR0hUID0gMjQ7XG5jb25zdCBDQVJFVF9PRkZTRVRfRlJPTV9TSURFID0gMjQ7XG5leHBvcnQgY29uc3QgQk9SREVSX1JBRElVUyA9IDg7XG5cbnR5cGUgTWFpbkRpciA9ID8oJ3VwJyB8ICdyaWdodCcgfCAnZG93bicgfCAnbGVmdCcpO1xudHlwZSBTdWJEaXIgPSAndXAnIHwgJ3JpZ2h0JyB8ICdkb3duJyB8ICdsZWZ0JyB8ICdtaWRkbGUnO1xuXG50eXBlIENsaWVudFJlY3QgPSB7XG4gIGJvdHRvbTogbnVtYmVyLFxuICBoZWlnaHQ6IG51bWJlcixcbiAgbGVmdDogbnVtYmVyLFxuICByaWdodDogbnVtYmVyLFxuICB0b3A6IG51bWJlcixcbiAgd2lkdGg6IG51bWJlcixcbn07XG5cbnR5cGUgV2luZG93ID0ge1xuICBoZWlnaHQ6IG51bWJlcixcbiAgd2lkdGg6IG51bWJlcixcbiAgc2Nyb2xsWTogbnVtYmVyLFxuICBzY3JvbGxYOiBudW1iZXIsXG59O1xuXG50eXBlIEZseW91dCA9IHsgaGVpZ2h0OiBudW1iZXIsIHdpZHRoOiBudW1iZXIgfTtcblxudHlwZSBTaGlmdCA9IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfTtcblxudHlwZSBFZGdlU2hpZnQgPSB7IGNhcmV0OiBTaGlmdCwgZmx5b3V0OiBTaGlmdCB9O1xuXG50eXBlIFByb3BzID0ge3xcbiAgYmdDb2xvcjogJ2JsdWUnIHwgJ2RhcmtHcmF5JyB8ICdvcmFuZ2UnIHwgJ3doaXRlJyxcbiAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlLFxuICBpZGVhbERpcmVjdGlvbj86ICd1cCcgfCAncmlnaHQnIHwgJ2Rvd24nIHwgJ2xlZnQnLFxuICBvbktleURvd246IChldmVudDogeyBrZXlDb2RlOiBudW1iZXIgfSkgPT4gdm9pZCxcbiAgb25SZXNpemU6ICgpID0+IHZvaWQsXG4gIHBvc2l0aW9uUmVsYXRpdmVUb0FuY2hvcj86IGJvb2xlYW4sXG4gIHJlbGF0aXZlT2Zmc2V0OiB7XG4gICAgeDogbnVtYmVyLFxuICAgIHk6IG51bWJlcixcbiAgfSxcbiAgc2hvdWxkRm9jdXM/OiBib29sZWFuLFxuICB0cmlnZ2VyUmVjdDogQ2xpZW50UmVjdCxcbiAgd2lkdGg6IG51bWJlcixcbnx9O1xuXG50eXBlIFN0YXRlID0ge1xuICBmbHlvdXRPZmZzZXQ6IHtcbiAgICB0b3A6ID9udW1iZXIsXG4gICAgbGVmdDogP251bWJlcixcbiAgfSxcbiAgY2FyZXRPZmZzZXQ6IHtcbiAgICB0b3A6ID9udW1iZXIsXG4gICAgcmlnaHQ6ID9udW1iZXIsXG4gICAgYm90dG9tOiA/bnVtYmVyLFxuICAgIGxlZnQ6ID9udW1iZXIsXG4gIH0sXG4gIG1haW5EaXI6ID9NYWluRGlyLFxufTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHRoZSBtYWluIGRpcmVjdGlvbiB0aGUgZmx5b3V0IG9wZW5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRNYWluRGlyKFxuICBmbHlvdXRTaXplOiBGbHlvdXQsXG4gIGlkZWFsRGlyZWN0aW9uOiBNYWluRGlyLFxuICB0cmlnZ2VyUmVjdDogQ2xpZW50UmVjdCxcbiAgd2luZG93U2l6ZTogV2luZG93XG4pIHtcbiAgLy8gQ2FsY3VsYXRlcyB0aGUgYXZhaWxhYmxlIHNwYWNlIGlmIHdlIHdlcmUgdG8gcGxhY2UgdGhlIGZseW91dCBpbiB0aGUgNCBtYWluIGRpcmVjdGlvbnNcbiAgLy8gdG8gZGV0ZXJtaW5lIHdoaWNoICdxdWFkcmFudCcgdG8gcG9zaXRpb24gdGhlIGZseW91dCBpbnNpZGUgb2ZcbiAgbGV0IHVwID0gdHJpZ2dlclJlY3QudG9wIC0gZmx5b3V0U2l6ZS5oZWlnaHQgLSBDQVJFVF9IRUlHSFQ7XG4gIGxldCByaWdodCA9XG4gICAgd2luZG93U2l6ZS53aWR0aCAtIGZseW91dFNpemUud2lkdGggLSBDQVJFVF9IRUlHSFQgLSB0cmlnZ2VyUmVjdC5yaWdodDtcbiAgbGV0IGRvd24gPVxuICAgIHdpbmRvd1NpemUuaGVpZ2h0IC0gZmx5b3V0U2l6ZS5oZWlnaHQgLSBDQVJFVF9IRUlHSFQgLSB0cmlnZ2VyUmVjdC5ib3R0b207XG4gIGxldCBsZWZ0ID0gdHJpZ2dlclJlY3QubGVmdCAtIGZseW91dFNpemUud2lkdGggLSBDQVJFVF9IRUlHSFQ7XG5cbiAgLy8gb3ZlcnJpZGVzIGF2YWlsYWJsZSBzcGFjZSB3aGVuIHRoZSB0cmlnZ2VyIGlzIGNsb3NlIHRvIHRoZSBlZGdlIG9mIHRoZSBzY3JlZW5cbiAgLy8gdHJpZ2dlciBpcyB0b28gY2xvc2UgdG8gdG9wL2JvdHRvbSBvZiBzY3JlZW4gZm9yIGxlZnQgJiByaWdodCBmbHlvdXRzXG4gIGlmIChcbiAgICB0cmlnZ2VyUmVjdC50b3AgPCBCT1JERVJfUkFESVVTIHx8XG4gICAgd2luZG93U2l6ZS5oZWlnaHQgLSB0cmlnZ2VyUmVjdC5ib3R0b20gPCBCT1JERVJfUkFESVVTXG4gICkge1xuICAgIGxlZnQgPSAwO1xuICAgIHJpZ2h0ID0gMDtcbiAgfVxuXG4gIC8vIHRyaWdnZXIgaXMgdG9vIGNsb3NlIHRvIHRoZSBsZWZ0L3JpZ2h0IG9mIHNjcmVlbiBmb3IgdXAgJiBkb3duIGZseW91dHNcbiAgaWYgKFxuICAgIHRyaWdnZXJSZWN0LmxlZnQgPCBCT1JERVJfUkFESVVTIHx8XG4gICAgd2luZG93U2l6ZS53aWR0aCAtIHRyaWdnZXJSZWN0LnJpZ2h0IDwgQk9SREVSX1JBRElVU1xuICApIHtcbiAgICB1cCA9IDA7XG4gICAgZG93biA9IDA7XG4gIH1cblxuICBjb25zdCBzcGFjZXMgPSBbdXAsIHJpZ2h0LCBkb3duLCBsZWZ0XTtcblxuICAvLyBJZGVudGlmeSBiZXN0IGRpcmVjdGlvbiBvZiBhdmFpbGFibGUgc3BhY2VzXG4gIGNvbnN0IG1heCA9IE1hdGgubWF4KC4uLnNwYWNlcyk7XG5cbiAgLy8gQ2hvc2UgdGhlIG1haW4gZGlyZWN0aW9uIGZvciB0aGUgZmx5b3V0IGJhc2VkIG9uIGF2YWlsYWJsZSBzcGFjZXMgJiB1c2VyIHByZWZlcmVuY2VcbiAgbGV0IG1haW5EaXI7XG4gIGlmIChpZGVhbERpcmVjdGlvbiAmJiBzcGFjZXNbRElSX0lOREVYX01BUFtpZGVhbERpcmVjdGlvbl1dID4gMCkge1xuICAgIC8vIHVzZXIgcHJlZlxuICAgIG1haW5EaXIgPSBpZGVhbERpcmVjdGlvbjtcbiAgfSBlbHNlIHtcbiAgICAvLyBJZiBubyBkaXJlY3Rpb24gcHJlZiwgY2hvc2UgdGhlIGRpcmVjdGlvbiBpbiB3aGljaCB0aGVyZSBpcyB0aGUgbW9zdCBzcGFjZSBhdmFpbGFibGVcbiAgICBtYWluRGlyID0gU1BBQ0VTX0lOREVYX01BUFtzcGFjZXMuaW5kZXhPZihtYXgpXTtcbiAgfVxuICByZXR1cm4gbWFpbkRpcjtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHRoZSBzdWIgZGlyZWN0aW9uIG9mIGhvdyB0aGUgZmx5b3V0IGlzIHBvc2l0aW9uZWQgd2l0aGluIHRoZSBtYWluIGRpclxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3ViRGlyKFxuICBmbHlvdXRTaXplOiBGbHlvdXQsXG4gIG1haW5EaXI6IE1haW5EaXIsXG4gIHRyaWdnZXJSZWN0OiBDbGllbnRSZWN0LFxuICB3aW5kb3dTaXplOiBXaW5kb3dcbikge1xuICAvLyBOb3cgdGhhdCB3ZSBoYXZlIHRoZSBtYWluIGRpcmVjdGlvbiwgY2hvc2UgZnJvbSAzIGNhcmV0IHBsYWNlbWVudHMgZm9yIHRoYXQgZGlyZWN0aW9uXG4gIGxldCBvZmZzZXQ7XG4gIGxldCB0cmlnZ2VyTWlkO1xuICBsZXQgd2luZG93U3BhY2VBdmFpbGFibGU7XG5cbiAgaWYgKG1haW5EaXIgPT09ICdyaWdodCcgfHwgbWFpbkRpciA9PT0gJ2xlZnQnKSB7XG4gICAgb2Zmc2V0ID0gZmx5b3V0U2l6ZS5oZWlnaHQgLyAyO1xuICAgIHRyaWdnZXJNaWQgPSB0cmlnZ2VyUmVjdC50b3AgKyAodHJpZ2dlclJlY3QuYm90dG9tIC0gdHJpZ2dlclJlY3QudG9wKSAvIDI7XG4gICAgd2luZG93U3BhY2VBdmFpbGFibGUgPSB3aW5kb3dTaXplLmhlaWdodDtcbiAgfSBlbHNlIHtcbiAgICAvLyAobWFpbkRpciA9PT0gJ3VwJyB8fCBtYWluRGlyID09PSAnZG93bicpXG4gICAgb2Zmc2V0ID0gZmx5b3V0U2l6ZS53aWR0aCAvIDI7XG4gICAgdHJpZ2dlck1pZCA9IHRyaWdnZXJSZWN0LmxlZnQgKyAodHJpZ2dlclJlY3QucmlnaHQgLSB0cmlnZ2VyUmVjdC5sZWZ0KSAvIDI7XG4gICAgd2luZG93U3BhY2VBdmFpbGFibGUgPSB3aW5kb3dTaXplLndpZHRoO1xuICB9XG5cbiAgY29uc3QgYWJvdmVPckxlZnQgPSB0cmlnZ2VyTWlkIC0gb2Zmc2V0IC0gTUFSR0lOO1xuICBjb25zdCBiZWxvd09yUmlnaHQgPSB3aW5kb3dTcGFjZUF2YWlsYWJsZSAtIHRyaWdnZXJNaWQgLSBvZmZzZXQgLSBNQVJHSU47XG4gIGxldCBzdWJEaXI7XG4gIGlmIChhYm92ZU9yTGVmdCA+IDAgJiYgYmVsb3dPclJpZ2h0ID4gMCkge1xuICAgIC8vIGNhcmV0IHNob3VsZCBnbyBpbiBtaWRkbGUgYi9jIGl0IGNhblxuICAgIHN1YkRpciA9ICdtaWRkbGUnO1xuICB9IGVsc2UgaWYgKGJlbG93T3JSaWdodCA+IDApIHtcbiAgICAvLyBjYXJldCBzaG91bGQgZ28gYXQgdG9wIGZvciBsZWZ0L3JpZ2h0IGFuZCBsZWZ0IGZvciB1cC9kb3duXG4gICAgc3ViRGlyID0gbWFpbkRpciA9PT0gJ2xlZnQnIHx8IG1haW5EaXIgPT09ICdyaWdodCcgPyAndXAnIDogJ2xlZnQnO1xuICB9IGVsc2Uge1xuICAgIC8vIGNhcmV0IHNob3VsZCBnbyBhdCBib3R0b20gZm9yIGxlZnQvcmlnaHQgYW5kIHJpZ2h0IGZvciB1cC9kb3duXG4gICAgc3ViRGlyID0gbWFpbkRpciA9PT0gJ2xlZnQnIHx8IG1haW5EaXIgPT09ICdyaWdodCcgPyAnZG93bicgOiAncmlnaHQnO1xuICB9XG4gIHJldHVybiBzdWJEaXI7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgYW1vdW50IHRoZSBmbHlvdXQgJiBjYXJldCBuZWVkIHRvIHNoaWZ0IG92ZXIgdG8gYWxpZ24gd2l0aCBkZXNpZ25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYWxjRWRnZVNoaWZ0cyhcbiAgc3ViRGlyOiBTdWJEaXIsXG4gIHRyaWdnZXJSZWN0OiBDbGllbnRSZWN0LFxuICB3aW5kb3dTaXplOiBXaW5kb3dcbikge1xuICAvLyBUYXJnZXQgdmFsdWVzIGZvciBmbHlvdXQgYW5kIGNhcmV0IHNoaWZ0c1xuICBsZXQgZmx5b3V0VmVydGljYWxTaGlmdCA9XG4gICAgQ0FSRVRfT0ZGU0VUX0ZST01fU0lERSAtICh0cmlnZ2VyUmVjdC5oZWlnaHQgLSBDQVJFVF9IRUlHSFQpIC8gMjtcbiAgbGV0IGZseW91dEhvcml6b250YWxTaGlmdCA9XG4gICAgQ0FSRVRfT0ZGU0VUX0ZST01fU0lERSAtICh0cmlnZ2VyUmVjdC53aWR0aCAtIENBUkVUX0hFSUdIVCkgLyAyO1xuICBsZXQgY2FyZXRWZXJ0aWNhbFNoaWZ0ID0gQ0FSRVRfSEVJR0hUO1xuICBsZXQgY2FyZXRIb3Jpem9udGFsU2hpZnQgPSBDQVJFVF9IRUlHSFQ7XG5cbiAgLy8gQ292ZXJzIGVkZ2UgY2FzZSB3aGVyZSB0cmlnZ2VyIGlzIGluIGEgY29ybmVyIGFuZCB3ZSBuZWVkIHRvIGFkanVzdCB0aGUgb2Zmc2V0IG9mIHRoZSBjYXJldFxuICAvLyB0byBzb21ldGhpbmcgc21hbGxlciB0aGFuIG5vcm1hbCBpbiBvcmRlclxuICBjb25zdCBpc0Nsb3NlVmVydGljYWxseSA9XG4gICAgdHJpZ2dlclJlY3QudG9wIC0gZmx5b3V0VmVydGljYWxTaGlmdCA8IDAgfHxcbiAgICB0cmlnZ2VyUmVjdC5ib3R0b20gKyBmbHlvdXRWZXJ0aWNhbFNoaWZ0ID4gd2luZG93U2l6ZS5oZWlnaHQ7XG4gIGNvbnN0IGlzQ2xvc2VIb3Jpem9udGFsbHkgPVxuICAgIHRyaWdnZXJSZWN0LmxlZnQgLSBmbHlvdXRIb3Jpem9udGFsU2hpZnQgPCAwIHx8XG4gICAgdHJpZ2dlclJlY3QucmlnaHQgKyBmbHlvdXRIb3Jpem9udGFsU2hpZnQgPiB3aW5kb3dTaXplLndpZHRoO1xuICBpZiAoaXNDbG9zZVZlcnRpY2FsbHkpIHtcbiAgICBmbHlvdXRWZXJ0aWNhbFNoaWZ0ID1cbiAgICAgIEJPUkRFUl9SQURJVVMgLSAodHJpZ2dlclJlY3QuaGVpZ2h0IC0gQ0FSRVRfSEVJR0hUKSAvIDI7XG4gICAgY2FyZXRWZXJ0aWNhbFNoaWZ0ID0gQk9SREVSX1JBRElVUztcbiAgfVxuICBpZiAoaXNDbG9zZUhvcml6b250YWxseSkge1xuICAgIGZseW91dEhvcml6b250YWxTaGlmdCA9XG4gICAgICBCT1JERVJfUkFESVVTIC0gKHRyaWdnZXJSZWN0LndpZHRoIC0gQ0FSRVRfSEVJR0hUKSAvIDI7XG4gICAgY2FyZXRIb3Jpem9udGFsU2hpZnQgPSBCT1JERVJfUkFESVVTO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBmbHlvdXQ6IHtcbiAgICAgIHg6IGZseW91dEhvcml6b250YWxTaGlmdCxcbiAgICAgIHk6IGZseW91dFZlcnRpY2FsU2hpZnQsXG4gICAgfSxcbiAgICBjYXJldDoge1xuICAgICAgeDogY2FyZXRIb3Jpem9udGFsU2hpZnQsXG4gICAgICB5OiBjYXJldFZlcnRpY2FsU2hpZnQsXG4gICAgfSxcbiAgfTtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIGZseW91dCBhbmQgY2FyZXQgb2Zmc2V0cyBmb3Igc3R5bGluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gYWRqdXN0T2Zmc2V0cyhcbiAgYmFzZTogeyB0b3A6IG51bWJlciwgbGVmdDogbnVtYmVyIH0sXG4gIGVkZ2VTaGlmdDogRWRnZVNoaWZ0LFxuICBmbHlvdXRTaXplOiBGbHlvdXQsXG4gIG1haW5EaXI6IE1haW5EaXIsXG4gIHN1YkRpcjogU3ViRGlyLFxuICB0cmlnZ2VyUmVjdDogQ2xpZW50UmVjdFxuKSB7XG4gIGxldCBmbHlvdXRMZWZ0ID0gYmFzZS5sZWZ0O1xuICBsZXQgZmx5b3V0VG9wID0gYmFzZS50b3A7XG5cbiAgbGV0IGNhcmV0VG9wID0gbWFpbkRpciA9PT0gJ2Rvd24nID8gLUNBUkVUX0hFSUdIVCA6IG51bGw7XG4gIGxldCBjYXJldFJpZ2h0ID0gbWFpbkRpciA9PT0gJ2xlZnQnID8gLUNBUkVUX0hFSUdIVCA6IG51bGw7XG4gIGxldCBjYXJldEJvdHRvbSA9IG51bGw7XG4gIGxldCBjYXJldExlZnQgPSBtYWluRGlyID09PSAncmlnaHQnID8gLUNBUkVUX0hFSUdIVCA6IG51bGw7XG5cbiAgaWYgKHN1YkRpciA9PT0gJ3VwJykge1xuICAgIGZseW91dFRvcCA9IGJhc2UudG9wIC0gZWRnZVNoaWZ0LmZseW91dC55O1xuICAgIGNhcmV0VG9wID0gZWRnZVNoaWZ0LmNhcmV0Lnk7XG4gIH0gZWxzZSBpZiAoc3ViRGlyID09PSAnZG93bicpIHtcbiAgICBmbHlvdXRUb3AgPVxuICAgICAgYmFzZS50b3AgLSBmbHlvdXRTaXplLmhlaWdodCArIHRyaWdnZXJSZWN0LmhlaWdodCArIGVkZ2VTaGlmdC5mbHlvdXQueTtcbiAgICBjYXJldEJvdHRvbSA9IGVkZ2VTaGlmdC5jYXJldC55O1xuICB9IGVsc2UgaWYgKHN1YkRpciA9PT0gJ2xlZnQnKSB7XG4gICAgZmx5b3V0TGVmdCA9IGJhc2UubGVmdCAtIGVkZ2VTaGlmdC5mbHlvdXQueDtcbiAgICBjYXJldExlZnQgPSBlZGdlU2hpZnQuY2FyZXQueDtcbiAgfSBlbHNlIGlmIChzdWJEaXIgPT09ICdyaWdodCcpIHtcbiAgICBmbHlvdXRMZWZ0ID1cbiAgICAgIGJhc2UubGVmdCAtIGZseW91dFNpemUud2lkdGggKyB0cmlnZ2VyUmVjdC53aWR0aCArIGVkZ2VTaGlmdC5mbHlvdXQueDtcbiAgICBjYXJldFJpZ2h0ID0gZWRnZVNoaWZ0LmNhcmV0Lng7XG4gIH0gZWxzZSBpZiAoc3ViRGlyID09PSAnbWlkZGxlJykge1xuICAgIGlmIChtYWluRGlyID09PSAnbGVmdCcgfHwgbWFpbkRpciA9PT0gJ3JpZ2h0Jykge1xuICAgICAgY29uc3QgdHJpZ2dlck1pZCA9IGZseW91dFRvcCArIHRyaWdnZXJSZWN0LmhlaWdodCAvIDI7XG4gICAgICBmbHlvdXRUb3AgPSB0cmlnZ2VyTWlkIC0gZmx5b3V0U2l6ZS5oZWlnaHQgLyAyO1xuICAgICAgY2FyZXRUb3AgPSAoZmx5b3V0U2l6ZS5oZWlnaHQgLSBDQVJFVF9IRUlHSFQpIC8gMjtcbiAgICB9XG4gICAgaWYgKG1haW5EaXIgPT09ICd1cCcgfHwgbWFpbkRpciA9PT0gJ2Rvd24nKSB7XG4gICAgICBjb25zdCB0cmlnZ2VyTWlkID0gZmx5b3V0TGVmdCArIHRyaWdnZXJSZWN0LndpZHRoIC8gMjtcbiAgICAgIGZseW91dExlZnQgPSB0cmlnZ2VyTWlkIC0gZmx5b3V0U2l6ZS53aWR0aCAvIDI7XG4gICAgICBjYXJldExlZnQgPSAoZmx5b3V0U2l6ZS53aWR0aCAtIENBUkVUX0hFSUdIVCkgLyAyO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZmx5b3V0T2Zmc2V0OiB7XG4gICAgICB0b3A6IGZseW91dFRvcCxcbiAgICAgIGxlZnQ6IGZseW91dExlZnQsXG4gICAgfSxcbiAgICBjYXJldE9mZnNldDoge1xuICAgICAgdG9wOiBjYXJldFRvcCxcbiAgICAgIHJpZ2h0OiBjYXJldFJpZ2h0LFxuICAgICAgYm90dG9tOiBjYXJldEJvdHRvbSxcbiAgICAgIGxlZnQ6IGNhcmV0TGVmdCxcbiAgICB9LFxuICB9O1xufVxuXG4vKiBDYWxjdWxhdGVzIGJhc2VsaW5lIHRvcCBhbmQgbGVmdCBvZmZzZXQgZm9yIGZseW91dCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJhc2VPZmZzZXRzKFxuICByZWxhdGl2ZU9mZnNldDogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9LFxuICBmbHlvdXRTaXplOiBGbHlvdXQsXG4gIG1haW5EaXI6IE1haW5EaXIsXG4gIHRyaWdnZXJSZWN0OiBDbGllbnRSZWN0LFxuICB3aW5kb3dTaXplOiBXaW5kb3dcbikge1xuICBjb25zdCBIQUxGX0NBUkVUID0gQ0FSRVRfSEVJR0hUIC8gMjtcbiAgLy8gVE9QIE9GRlNFVFxuICBsZXQgdG9wO1xuICBpZiAobWFpbkRpciA9PT0gJ2Rvd24nKSB7XG4gICAgdG9wID0gd2luZG93U2l6ZS5zY3JvbGxZICsgdHJpZ2dlclJlY3QuYm90dG9tICsgSEFMRl9DQVJFVDtcbiAgfSBlbHNlIGlmIChtYWluRGlyID09PSAndXAnKSB7XG4gICAgdG9wID1cbiAgICAgIHdpbmRvd1NpemUuc2Nyb2xsWSArICh0cmlnZ2VyUmVjdC50b3AgLSBmbHlvdXRTaXplLmhlaWdodCAtIEhBTEZfQ0FSRVQpO1xuICB9IGVsc2Uge1xuICAgIC8vIGxlZnQgYW5kIHJpZ2h0XG4gICAgdG9wID0gd2luZG93U2l6ZS5zY3JvbGxZICsgdHJpZ2dlclJlY3QudG9wO1xuICB9XG5cbiAgLy8gTEVGVCBPRkZTRVRcbiAgbGV0IGxlZnQ7XG4gIGlmIChtYWluRGlyID09PSAnbGVmdCcpIHtcbiAgICBsZWZ0ID1cbiAgICAgIHdpbmRvd1NpemUuc2Nyb2xsWCArICh0cmlnZ2VyUmVjdC5sZWZ0IC0gZmx5b3V0U2l6ZS53aWR0aCAtIEhBTEZfQ0FSRVQpO1xuICB9IGVsc2UgaWYgKG1haW5EaXIgPT09ICdyaWdodCcpIHtcbiAgICBsZWZ0ID0gd2luZG93U2l6ZS5zY3JvbGxYICsgdHJpZ2dlclJlY3QucmlnaHQgKyBIQUxGX0NBUkVUO1xuICB9IGVsc2Uge1xuICAgIC8vIGRvd24gYW5kIHVwXG4gICAgbGVmdCA9IHdpbmRvd1NpemUuc2Nyb2xsWCArIHRyaWdnZXJSZWN0LmxlZnQ7XG4gIH1cblxuICAvLyBBZGp1c3RzIGZvciB0aGUgcmVsYXRpdmUgcGFyZW50IGNvbnRhaW5lclxuICB0b3AgLT0gcmVsYXRpdmVPZmZzZXQueTtcbiAgbGVmdCAtPSByZWxhdGl2ZU9mZnNldC54O1xuICByZXR1cm4geyB0b3AsIGxlZnQgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIHN0YXRlOiBTdGF0ZSA9IHtcbiAgICBmbHlvdXRPZmZzZXQ6IHtcbiAgICAgIHRvcDogdW5kZWZpbmVkLFxuICAgICAgcmlnaHQ6IHVuZGVmaW5lZCxcbiAgICAgIGJvdHRvbTogdW5kZWZpbmVkLFxuICAgICAgbGVmdDogdW5kZWZpbmVkLFxuICAgIH0sXG4gICAgY2FyZXRPZmZzZXQ6IHtcbiAgICAgIHRvcDogdW5kZWZpbmVkLFxuICAgICAgcmlnaHQ6IHVuZGVmaW5lZCxcbiAgICAgIGJvdHRvbTogdW5kZWZpbmVkLFxuICAgICAgbGVmdDogdW5kZWZpbmVkLFxuICAgIH0sXG4gICAgbWFpbkRpcjogbnVsbCxcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldEZseW91dFBvc2l0aW9uKHRoaXMucHJvcHMpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucHJvcHMuc2hvdWxkRm9jdXMgJiYgdGhpcy5mbHlvdXQpIHtcbiAgICAgICAgdGhpcy5mbHlvdXQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5wcm9wcy5vblJlc2l6ZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLnByb3BzLm9uS2V5RG93bik7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogUHJvcHMpIHtcbiAgICB0aGlzLnNldEZseW91dFBvc2l0aW9uKG5leHRQcm9wcyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5wcm9wcy5vblJlc2l6ZSk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLnByb3BzLm9uS2V5RG93bik7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB0aGUgbWFpbiBkaXJlY2l0b24sIHN1YiBkaXJlY3Rpb24sIGFuZCBjb3JyZXNwb25kaW5nIG9mZnNldHMgbmVlZGVkXG4gICAqIHRvIGNvcnJlY3RseSBwb3NpdGlvbiB0aGUgb2Zmc2V0XG4gICAqL1xuICBzZXRGbHlvdXRQb3NpdGlvbiA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICByZWxhdGl2ZU9mZnNldCxcbiAgICAgIGlkZWFsRGlyZWN0aW9uLFxuICAgICAgcG9zaXRpb25SZWxhdGl2ZVRvQW5jaG9yLFxuICAgICAgdHJpZ2dlclJlY3QsXG4gICAgICB3aWR0aCxcbiAgICB9ID0gcHJvcHM7XG5cbiAgICAvLyBTY3JvbGwgbm90IG5lZWRlZCBmb3IgcmVsYXRpdmUgZWxlbWVudHNcbiAgICAvLyBXZSBjYW4ndCB1c2Ugd2luZG93LnNjcm9sbFggLyB3aW5kb3cuc2Nyb2xsWSBzaW5jZSBpdCdzIG5vdCBzdXBwb3J0ZWQgYnkgSUUxMVxuICAgIGNvbnN0IHNjcm9sbFggPSBwb3NpdGlvblJlbGF0aXZlVG9BbmNob3JcbiAgICAgID8gMFxuICAgICAgOiB3aW5kb3cucGFnZVhPZmZzZXQgfHxcbiAgICAgICAgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCkgfHxcbiAgICAgICAgMDtcbiAgICBjb25zdCBzY3JvbGxZID0gcG9zaXRpb25SZWxhdGl2ZVRvQW5jaG9yXG4gICAgICA/IDBcbiAgICAgIDogd2luZG93LnBhZ2VZT2Zmc2V0IHx8XG4gICAgICAgIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCkgfHxcbiAgICAgICAgMDtcblxuICAgIGNvbnN0IHdpbmRvd1NpemUgPSB7XG4gICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgIHNjcm9sbFgsXG4gICAgICBzY3JvbGxZLFxuICAgIH07XG5cbiAgICBjb25zdCBmbHlvdXRTaXplID0ge1xuICAgICAgaGVpZ2h0OiB0aGlzLmZseW91dCA/IHRoaXMuZmx5b3V0LmNsaWVudEhlaWdodCA6IDAsXG4gICAgICB3aWR0aCxcbiAgICB9O1xuXG4gICAgLy8gRmlyc3QgY2hvb3NlIG9uZSBvZiA0IG1haW4gZGlyZWN0aW9uXG4gICAgY29uc3QgbWFpbkRpciA9IGdldE1haW5EaXIoXG4gICAgICBmbHlvdXRTaXplLFxuICAgICAgaWRlYWxEaXJlY3Rpb24sXG4gICAgICB0cmlnZ2VyUmVjdCxcbiAgICAgIHdpbmRvd1NpemVcbiAgICApO1xuXG4gICAgLy8gTm93IHRoYXQgd2UgaGF2ZSB0aGUgbWFpbiBkaXJlY3Rpb24sIGNob3NlIGZyb20gMyBjYXJldCBwbGFjZW1lbnRzIGZvciB0aGF0IGRpcmVjdGlvblxuICAgIGNvbnN0IHN1YkRpciA9IGdldFN1YkRpcihmbHlvdXRTaXplLCBtYWluRGlyLCB0cmlnZ2VyUmVjdCwgd2luZG93U2l6ZSk7XG5cbiAgICAvLyBHZXRzIHRoZSBiYXNlIG9mZnNldCB0aGF0IHBvc2l0aW9ucyB0aGUgZmx5b3V0IGJhc2VkIG9uIHRoZSBtYWluIGRpcmVjdGlvbiBvbmx5XG4gICAgY29uc3QgYmFzZSA9IGJhc2VPZmZzZXRzKFxuICAgICAgcmVsYXRpdmVPZmZzZXQsXG4gICAgICBmbHlvdXRTaXplLFxuICAgICAgbWFpbkRpcixcbiAgICAgIHRyaWdnZXJSZWN0LFxuICAgICAgd2luZG93U2l6ZVxuICAgICk7XG5cbiAgICAvLyBHZXRzIHRoZSBlZGdlIHNoaWZ0cyBmb3IgdGhlIGZseW91dFxuICAgIGNvbnN0IGVkZ2VTaGlmdHMgPSBjYWxjRWRnZVNoaWZ0cyhzdWJEaXIsIHRyaWdnZXJSZWN0LCB3aW5kb3dTaXplKTtcblxuICAgIC8vIEFkanVzdHMgZm9yIHRoZSBzdWJkaXJlY3Rpb24gb2YgdGhlIGNhcmV0XG4gICAgY29uc3QgeyBmbHlvdXRPZmZzZXQsIGNhcmV0T2Zmc2V0IH0gPSBhZGp1c3RPZmZzZXRzKFxuICAgICAgYmFzZSxcbiAgICAgIGVkZ2VTaGlmdHMsXG4gICAgICBmbHlvdXRTaXplLFxuICAgICAgbWFpbkRpcixcbiAgICAgIHN1YkRpcixcbiAgICAgIHRyaWdnZXJSZWN0XG4gICAgKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY2FyZXRPZmZzZXQsXG4gICAgICBmbHlvdXRPZmZzZXQsXG4gICAgICBtYWluRGlyLFxuICAgIH0pO1xuICB9O1xuXG4gIGZseW91dDogP0hUTUxFbGVtZW50O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGJnQ29sb3IsIGNoaWxkcmVuLCB3aWR0aCB9ID0gdGhpcy5wcm9wcztcblxuICAgIC8vIE5lZWRlZCB0byBwcmV2ZW50IFVJIHRocmFzaGluZ1xuICAgIGNvbnN0IHZpc2liaWxpdHkgPSB0aGlzLnN0YXRlLm1haW5EaXIgPT09IG51bGwgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJztcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gYCR7YmdDb2xvcn1CZ2A7XG4gICAgY29uc3Qgc3Ryb2tlID0gYmdDb2xvciA9PT0gJ3doaXRlJyA/ICcjZWZlZmVmJyA6IG51bGw7XG4gICAgY29uc3QgYm9yZGVyQ29sb3IgPSBiZ0NvbG9yID09PSAnd2hpdGUnID8gJ2xpZ2h0R3JheScgOiBiZ0NvbG9yO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfVxuICAgICAgICBzdHlsZT17eyBzdHJva2UsIHZpc2liaWxpdHksIC4uLnRoaXMuc3RhdGUuZmx5b3V0T2Zmc2V0IH19XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICBjb2xvcnNbYmFja2dyb3VuZF0sXG4gICAgICAgICAgICBjb2xvcnNbYm9yZGVyQ29sb3JdLFxuICAgICAgICAgICAgc3R5bGVzLmRpbWVuc2lvbnMsXG4gICAgICAgICAgICBzdHlsZXMuY29udGVudHNcbiAgICAgICAgICApfVxuICAgICAgICAgIHJlZj17YyA9PiB7XG4gICAgICAgICAgICB0aGlzLmZseW91dCA9IGM7XG4gICAgICAgICAgfX1cbiAgICAgICAgICB0YWJJbmRleD17LTF9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmRpbWVuc2lvbnMsIHN0eWxlcy5pbm5lckNvbnRlbnRzKX1cbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjb2xvcnNbYmdDb2xvcl0sIHN0eWxlcy5jYXJldCl9XG4gICAgICAgICAgICBzdHlsZT17eyAuLi50aGlzLnN0YXRlLmNhcmV0T2Zmc2V0IH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENhcmV0IGRpcmVjdGlvbj17dGhpcy5zdGF0ZS5tYWluRGlyfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuLyogZXNsaW50IHJlYWN0L25vLXVudXNlZC1wcm9wLXR5cGVzOiAwICovXG5Db250ZW50cy5wcm9wVHlwZXMgPSB7XG4gIGJnQ29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ2JsdWUnLCAnZGFya0dyYXknLCAnb3JhbmdlJywgJ3doaXRlJ10pLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGlkZWFsRGlyZWN0aW9uOiBQcm9wVHlwZXMub25lT2YoWyd1cCcsICdyaWdodCcsICdkb3duJywgJ2xlZnQnXSksXG4gIG9uS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25SZXNpemU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHJlbGF0aXZlT2Zmc2V0OiBQcm9wVHlwZXMuZXhhY3QoeyB4OiBQcm9wVHlwZXMubnVtYmVyLCB5OiBQcm9wVHlwZXMubnVtYmVyIH0pLFxuICBwb3NpdGlvblJlbGF0aXZlVG9BbmNob3I6IFByb3BUeXBlcy5ib29sLFxuICBzaG91bGRGb2N1czogUHJvcFR5cGVzLmJvb2wsXG4gIHRyaWdnZXJSZWN0OiBQcm9wVHlwZXMuZXhhY3Qoe1xuICAgIGJvdHRvbTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbGVmdDogUHJvcFR5cGVzLm51bWJlcixcbiAgICByaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgICB0b3A6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gIH0pLFxuICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcbn07XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZmluZERPTU5vZGUgfSBmcm9tICdyZWFjdC1kb20nO1xuXG50eXBlIFByb3BzID0ge3xcbiAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlLFxuICBvbkNsaWNrPzogKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB2b2lkLFxufH07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE91dHNpZGVFdmVudEJlaGF2aW9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGlja0V2ZW50LCB7XG4gICAgICBjYXB0dXJlOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrRXZlbnQsIHtcbiAgICAgIGNhcHR1cmU6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDbGlja0V2ZW50ID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWZpbmQtZG9tLW5vZGVcbiAgICBjb25zdCBlbCA9IGZpbmRET01Ob2RlKHRoaXMpO1xuICAgIGlmIChcbiAgICAgICF0aGlzLnByb3BzLm9uQ2xpY2sgfHxcbiAgICAgICFlbCB8fFxuICAgICAgKGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIE5vZGUgJiYgZWwuY29udGFpbnMoZXZlbnQudGFyZ2V0KSlcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gIH1cbn1cbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENvbnRlbnRzIGZyb20gJy4vQ29udGVudHMuanMnO1xuaW1wb3J0IE91dHNpZGVFdmVudEJlaGF2aW9yIGZyb20gJy4vYmVoYXZpb3JzL091dHNpZGVFdmVudEJlaGF2aW9yLmpzJztcblxudHlwZSBQcm9wcyA9IHt8XG4gIGFuY2hvcjogP0hUTUxFbGVtZW50LFxuICBiZ0NvbG9yOiAnYmx1ZScgfCAnZGFya0dyYXknIHwgJ29yYW5nZScgfCAnd2hpdGUnLFxuICBjaGlsZHJlbj86IFJlYWN0Lk5vZGUsXG4gIGlkZWFsRGlyZWN0aW9uPzogJ3VwJyB8ICdyaWdodCcgfCAnZG93bicgfCAnbGVmdCcsXG4gIG9uRGlzbWlzczogKCkgPT4gdm9pZCxcbiAgcG9zaXRpb25SZWxhdGl2ZVRvQW5jaG9yOiBib29sZWFuLFxuICBzaG91bGRGb2N1cz86IGJvb2xlYW4sXG4gIHNpemU/OiAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8IG51bWJlcixcbnx9O1xuXG5jb25zdCBTSVpFX1dJRFRIX01BUCA9IHtcbiAgeHM6IDE4NSxcbiAgc206IDIzMCxcbiAgbWQ6IDI4NCxcbiAgbGc6IDMyMCxcbiAgeGw6IDM3NSxcbn07XG5cbmNvbnN0IEVTQ0FQRV9LRVlfQ09ERSA9IDI3O1xuXG50eXBlIENsaWVudFJlY3QgPSB7XG4gIGJvdHRvbTogbnVtYmVyLFxuICBoZWlnaHQ6IG51bWJlcixcbiAgbGVmdDogbnVtYmVyLFxuICByaWdodDogbnVtYmVyLFxuICB0b3A6IG51bWJlcixcbiAgd2lkdGg6IG51bWJlcixcbn07XG5cbnR5cGUgU3RhdGUgPSB7XG4gIHJlbGF0aXZlT2Zmc2V0OiB7XG4gICAgeDogbnVtYmVyLFxuICAgIHk6IG51bWJlcixcbiAgfSxcbiAgdHJpZ2dlckJvdW5kaW5nUmVjdDogQ2xpZW50UmVjdCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIHN0YXRlOiBTdGF0ZSA9IHtcbiAgICByZWxhdGl2ZU9mZnNldDoge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgfSxcbiAgICB0cmlnZ2VyQm91bmRpbmdSZWN0OiB7XG4gICAgICBib3R0b206IDAsXG4gICAgICBoZWlnaHQ6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICB0b3A6IDAsXG4gICAgICB3aWR0aDogMCxcbiAgICB9LFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudXBkYXRlVHJpZ2dlclJlY3QodGhpcy5wcm9wcyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogUHJvcHMpIHtcbiAgICB0aGlzLnVwZGF0ZVRyaWdnZXJSZWN0KG5leHRQcm9wcyk7XG4gIH1cblxuICBoYW5kbGVLZXlEb3duID0gKGV2ZW50OiB7IGtleUNvZGU6IG51bWJlciB9KSA9PiB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEVTQ0FQRV9LRVlfQ09ERSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkRpc21pc3MoKTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlUGFnZUNsaWNrID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgIGlmIChcbiAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIE5vZGUgJiZcbiAgICAgIHRoaXMucHJvcHMuYW5jaG9yICYmXG4gICAgICAhdGhpcy5wcm9wcy5hbmNob3IuY29udGFpbnMoZXZlbnQudGFyZ2V0KVxuICAgICkge1xuICAgICAgdGhpcy5wcm9wcy5vbkRpc21pc3MoKTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuICAgIHRoaXMudXBkYXRlVHJpZ2dlclJlY3QodGhpcy5wcm9wcyk7XG4gIH07XG5cbiAgdXBkYXRlVHJpZ2dlclJlY3QgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBhbmNob3IsIHBvc2l0aW9uUmVsYXRpdmVUb0FuY2hvciB9ID0gcHJvcHM7XG4gICAgbGV0IHRyaWdnZXJCb3VuZGluZ1JlY3Q7XG4gICAgbGV0IHJlbGF0aXZlT2Zmc2V0O1xuICAgIGlmIChhbmNob3IpIHtcbiAgICAgIHRyaWdnZXJCb3VuZGluZ1JlY3QgPSBhbmNob3IuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgIC8vIE5lZWRlZCBmb3IgY29ycmVjdCBwb3NpdGlvbmluZyB3aXRoaW4gQ29udGVudHMuanNcbiAgICAgIHJlbGF0aXZlT2Zmc2V0ID0ge1xuICAgICAgICB4OiBwb3NpdGlvblJlbGF0aXZlVG9BbmNob3JcbiAgICAgICAgICA/IHRyaWdnZXJCb3VuZGluZ1JlY3QubGVmdCAtIGFuY2hvci5vZmZzZXRMZWZ0XG4gICAgICAgICAgOiAwLFxuICAgICAgICB5OiBwb3NpdGlvblJlbGF0aXZlVG9BbmNob3JcbiAgICAgICAgICA/IHRyaWdnZXJCb3VuZGluZ1JlY3QudG9wIC0gYW5jaG9yLm9mZnNldFRvcFxuICAgICAgICAgIDogMCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHJlbGF0aXZlT2Zmc2V0LCB0cmlnZ2VyQm91bmRpbmdSZWN0IH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBhbmNob3IsXG4gICAgICBiZ0NvbG9yLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBpZGVhbERpcmVjdGlvbixcbiAgICAgIHBvc2l0aW9uUmVsYXRpdmVUb0FuY2hvcixcbiAgICAgIHNob3VsZEZvY3VzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghYW5jaG9yKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMucHJvcHMuc2l6ZSA/IHRoaXMucHJvcHMuc2l6ZSA6ICdzbSc7XG4gICAgY29uc3Qgd2lkdGggPSB0eXBlb2Ygc2l6ZSA9PT0gJ3N0cmluZycgPyBTSVpFX1dJRFRIX01BUFtzaXplXSA6IHNpemU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxPdXRzaWRlRXZlbnRCZWhhdmlvciBvbkNsaWNrPXt0aGlzLmhhbmRsZVBhZ2VDbGlja30+XG4gICAgICAgIDxDb250ZW50c1xuICAgICAgICAgIGJnQ29sb3I9e2JnQ29sb3J9XG4gICAgICAgICAgaWRlYWxEaXJlY3Rpb249e2lkZWFsRGlyZWN0aW9ufVxuICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVLZXlEb3dufVxuICAgICAgICAgIG9uUmVzaXplPXt0aGlzLmhhbmRsZVJlc2l6ZX1cbiAgICAgICAgICBwb3NpdGlvblJlbGF0aXZlVG9BbmNob3I9e3Bvc2l0aW9uUmVsYXRpdmVUb0FuY2hvcn1cbiAgICAgICAgICByZWxhdGl2ZU9mZnNldD17dGhpcy5zdGF0ZS5yZWxhdGl2ZU9mZnNldH1cbiAgICAgICAgICBzaG91bGRGb2N1cz17c2hvdWxkRm9jdXN9XG4gICAgICAgICAgdHJpZ2dlclJlY3Q9e3RoaXMuc3RhdGUudHJpZ2dlckJvdW5kaW5nUmVjdH1cbiAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQ29udGVudHM+XG4gICAgICA8L091dHNpZGVFdmVudEJlaGF2aW9yPlxuICAgICk7XG4gIH1cbn1cblxuQ29udHJvbGxlci5wcm9wVHlwZXMgPSB7XG4gIGFuY2hvcjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjb250YWluczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZ2V0Qm91bmRpbmdDbGllbnRSZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgfSksXG4gIGJnQ29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ2JsdWUnLCAnZGFya0dyYXknLCAnb3JhbmdlJywgJ3doaXRlJ10pLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGlkZWFsRGlyZWN0aW9uOiBQcm9wVHlwZXMub25lT2YoWyd1cCcsICdyaWdodCcsICdkb3duJywgJ2xlZnQnXSksXG4gIG9uRGlzbWlzczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgcG9zaXRpb25SZWxhdGl2ZVRvQW5jaG9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2hvdWxkRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5vbmVPZihbJ3hzJywgJ3NtJywgJ21kJywgJ2xnJywgJ3hsJ10pLCAvLyBkZWZhdWx0OiBzbVxuICBdKSxcbn07XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBDb250cm9sbGVyIGZyb20gJy4vQ29udHJvbGxlci5qcyc7XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBhbmNob3I6ID9IVE1MRWxlbWVudCxcbiAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlLFxuICBpZGVhbERpcmVjdGlvbj86ICd1cCcgfCAncmlnaHQnIHwgJ2Rvd24nIHwgJ2xlZnQnLFxuICBvbkRpc21pc3M6ICgpID0+IHZvaWQsXG4gIHBvc2l0aW9uUmVsYXRpdmVUb0FuY2hvcj86IGJvb2xlYW4sXG4gIGNvbG9yPzogJ2JsdWUnIHwgJ29yYW5nZScgfCAnd2hpdGUnIHwgJ2RhcmtHcmF5JyxcbiAgc2hvdWxkRm9jdXM/OiBib29sZWFuLFxuICBzaXplPzogJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCBudW1iZXIsXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmx5b3V0KHByb3BzOiBQcm9wcykge1xuICBjb25zdCB7XG4gICAgYW5jaG9yLFxuICAgIGNoaWxkcmVuLFxuICAgIGlkZWFsRGlyZWN0aW9uLFxuICAgIG9uRGlzbWlzcyxcbiAgICBwb3NpdGlvblJlbGF0aXZlVG9BbmNob3IgPSB0cnVlLFxuICAgIGNvbG9yID0gJ3doaXRlJyxcbiAgICBzaG91bGRGb2N1cyA9IHRydWUsXG4gICAgc2l6ZSxcbiAgfSA9IHByb3BzO1xuXG4gIGlmICghYW5jaG9yKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDb250cm9sbGVyXG4gICAgICBhbmNob3I9e2FuY2hvcn1cbiAgICAgIGJnQ29sb3I9e2NvbG9yfVxuICAgICAgaWRlYWxEaXJlY3Rpb249e2lkZWFsRGlyZWN0aW9ufVxuICAgICAgb25EaXNtaXNzPXtvbkRpc21pc3N9XG4gICAgICBwb3NpdGlvblJlbGF0aXZlVG9BbmNob3I9e3Bvc2l0aW9uUmVsYXRpdmVUb0FuY2hvcn1cbiAgICAgIHNob3VsZEZvY3VzPXtzaG91bGRGb2N1c31cbiAgICAgIHNpemU9e3NpemV9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ29udHJvbGxlcj5cbiAgKTtcbn1cblxuRmx5b3V0LnByb3BUeXBlcyA9IHtcbiAgYW5jaG9yOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGNvbnRhaW5zOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBnZXRCb3VuZGluZ0NsaWVudFJlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICB9KSxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBpZGVhbERpcmVjdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsndXAnLCAncmlnaHQnLCAnZG93bicsICdsZWZ0J10pLFxuICBvbkRpc21pc3M6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHBvc2l0aW9uUmVsYXRpdmVUb0FuY2hvcjogUHJvcFR5cGVzLmJvb2wsXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydibHVlJywgJ29yYW5nZScsICd3aGl0ZScsICdkYXJrR3JheSddKSxcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMub25lT2YoWyd4cycsICdzbScsICdtZCcsICdsZycsICd4bCddKSwgLy8gZGVmYXVsdDogc21cbiAgXSksXG59O1xuIiwiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vR3JvdXBBdmF0YXIuY3NzJztcbmltcG9ydCBCb3ggZnJvbSAnLi9Cb3guanMnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xuaW1wb3J0IHR5cG9ncmFwaHkgZnJvbSAnLi9UeXBvZ3JhcGh5LmNzcyc7XG5cbmZ1bmN0aW9uIHppcChhLCBiKSB7XG4gIHJldHVybiBhLm1hcCgoaXRlbSwgaWR4KSA9PiBbaXRlbSwgYltpZHhdXSk7XG59XG5cbmNvbnN0IEJPUkRFUl9XSURUSCA9IDI7XG5cbmNvbnN0IEFWQVRBUl9TSVpFUyA9IHtcbiAgc206IDI0LFxuICBtZDogNDAsXG4gIGxnOiA3Mixcbn07XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBjb2xsYWJvcmF0b3JzOiBBcnJheTx7fFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBzcmM/OiBzdHJpbmcsXG4gIHx9PixcbiAgb3V0bGluZT86IGJvb2xlYW4sXG4gIHNpemU/OiAnc20nIHwgJ21kJyB8ICdsZycsXG58fTtcblxuY29uc3QgYXZhdGFyTGF5b3V0ID0gKG4sIHNpemUpID0+IHtcbiAgc3dpdGNoIChuKSB7XG4gICAgY2FzZSAwOlxuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHsgdG9wOiAwLCBsZWZ0OiAwLCB3aWR0aDogc2l6ZSwgaGVpZ2h0OiBzaXplLCB0ZXh0TGF5b3V0OiAnY2VudGVyJyB9LFxuICAgICAgXTtcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gW1xuICAgICAgICB7XG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgd2lkdGg6IGBjYWxjKDUwJSAtICR7Qk9SREVSX1dJRFRIIC8gMn1weClgLFxuICAgICAgICAgIGhlaWdodDogc2l6ZSxcbiAgICAgICAgICB0ZXh0TGF5b3V0OiAnY2VudGVyJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBsZWZ0OiBgY2FsYyg1MCUgKyAke0JPUkRFUl9XSURUSCAvIDJ9cHgpYCxcbiAgICAgICAgICB3aWR0aDogYGNhbGMoNTAlIC0gJHtCT1JERVJfV0lEVEggLyAyfXB4KWAsXG4gICAgICAgICAgaGVpZ2h0OiBzaXplLFxuICAgICAgICAgIHRleHRMYXlvdXQ6ICdjZW50ZXInLFxuICAgICAgICB9LFxuICAgICAgXTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFtcbiAgICAgICAge1xuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgIHdpZHRoOiBgY2FsYyg1MCUgLSAke0JPUkRFUl9XSURUSCAvIDJ9cHgpYCxcbiAgICAgICAgICBoZWlnaHQ6IHNpemUsXG4gICAgICAgICAgdGV4dExheW91dDogJ2NlbnRlcicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgbGVmdDogYGNhbGMoNTAlICsgJHtCT1JERVJfV0lEVEggLyAyfXB4KWAsXG4gICAgICAgICAgd2lkdGg6ICdjYWxjKDUwJSknLFxuICAgICAgICAgIGhlaWdodDogYGNhbGMoNTAlIC0gJHtCT1JERVJfV0lEVEggLyAyfXB4KWAsXG4gICAgICAgICAgdGV4dExheW91dDogJ3RvcExlZnQnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdG9wOiBgY2FsYyg1MCUgKyAke0JPUkRFUl9XSURUSCAvIDJ9cHgpYCxcbiAgICAgICAgICBsZWZ0OiBgY2FsYyg1MCUgKyAke0JPUkRFUl9XSURUSCAvIDJ9cHgpYCxcbiAgICAgICAgICB3aWR0aDogJ2NhbGMoNTAlKScsXG4gICAgICAgICAgaGVpZ2h0OiBgY2FsYyg1MCUgLSAke0JPUkRFUl9XSURUSCAvIDJ9cHgpYCxcbiAgICAgICAgICB0ZXh0TGF5b3V0OiAnYm90dG9tTGVmdCcsXG4gICAgICAgIH0sXG4gICAgICBdO1xuICB9XG59O1xuXG5jb25zdCBkZWdUb1JhZCA9IGRlZyA9PiBkZWcgKiAoTWF0aC5QSSAvIDE4MCk7XG5cbmNvbnN0IERlZmF1bHRBdmF0YXIgPSAocHJvcHM6IHt8XG4gIHNpemU6IHN0cmluZyB8IG51bWJlcixcbiAgbmFtZTogc3RyaW5nLFxuICB0ZXh0TGF5b3V0OiAnY2VudGVyJyB8ICd0b3BMZWZ0JyB8ICdib3R0b21MZWZ0Jyxcbnx9KSA9PiB7XG4gIGNvbnN0IHsgc2l6ZSwgbmFtZSwgdGV4dExheW91dCB9ID0gcHJvcHM7XG5cbiAgY29uc3QgcXVhcnRlclBhZGRpbmcgPSBgY2FsYygke01hdGguc2luKGRlZ1RvUmFkKDQ1KSl9ICogKCR7c2l6ZX0pIC8gMilgO1xuXG4gIGNvbnN0IGluaXRpYWwgPSAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgIHZpZXdCb3g9XCItNTAgLTUwIDEwMCAxMDBcIlxuICAgICAgdmVyc2lvbj1cIjEuMVwiXG4gICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICA+XG4gICAgICA8dGl0bGU+e25hbWV9PC90aXRsZT5cbiAgICAgIDx0ZXh0XG4gICAgICAgIGZvbnRTaXplPVwiNTBweFwiXG4gICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgICAgZG9taW5hbnRCYXNlbGluZT1cImNlbnRyYWxcIlxuICAgICAgICB0ZXh0QW5jaG9yPVwibWlkZGxlXCJcbiAgICAgICAgY2xhc3NOYW1lPXtbXG4gICAgICAgICAgdHlwb2dyYXBoeS5hbnRpYWxpYXNlZCxcbiAgICAgICAgICB0eXBvZ3JhcGh5LnNhbnNTZXJpZixcbiAgICAgICAgICB0eXBvZ3JhcGh5LmxlYWRpbmdTbWFsbCxcbiAgICAgICAgICB0eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkLFxuICAgICAgICBdLmpvaW4oJyAnKX1cbiAgICAgID5cbiAgICAgICAge25hbWUgPyBbLi4ubmFtZV1bMF0udG9VcHBlckNhc2UoKSA6ICcnfVxuICAgICAgPC90ZXh0PlxuICAgIDwvc3ZnPlxuICApO1xuICBzd2l0Y2ggKHRleHRMYXlvdXQpIHtcbiAgICBjYXNlICdib3R0b21MZWZ0JzpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxCb3hcbiAgICAgICAgICBhcmlhLWxhYmVsPXtuYW1lfVxuICAgICAgICAgIGNvbG9yPVwiZ3JheVwiXG4gICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgIGFsaWduSXRlbXM9XCJlbmRcIlxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5saW5lU3R5bGU9e3tcbiAgICAgICAgICAgIF9fc3R5bGU6IHtcbiAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogcXVhcnRlclBhZGRpbmcsXG4gICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogcXVhcnRlclBhZGRpbmcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7aW5pdGlhbH1cbiAgICAgICAgPC9Cb3g+XG4gICAgICApO1xuICAgIGNhc2UgJ3RvcExlZnQnOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEJveFxuICAgICAgICAgIGFyaWEtbGFiZWw9e25hbWV9XG4gICAgICAgICAgY29sb3I9XCJncmF5XCJcbiAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgYWxpZ25JdGVtcz1cInN0YXJ0XCJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubGluZVN0eWxlPXt7XG4gICAgICAgICAgICBfX3N0eWxlOiB7XG4gICAgICAgICAgICAgIHBhZGRpbmdUb3A6IHF1YXJ0ZXJQYWRkaW5nLFxuICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IHF1YXJ0ZXJQYWRkaW5nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge2luaXRpYWx9XG4gICAgICAgIDwvQm94PlxuICAgICAgKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEJveFxuICAgICAgICAgIGFyaWEtbGFiZWw9e25hbWV9XG4gICAgICAgICAgY29sb3I9XCJncmF5XCJcbiAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAge2luaXRpYWx9XG4gICAgICAgIDwvQm94PlxuICAgICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR3JvdXBBdmF0YXIocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgY29sbGFib3JhdG9ycywgb3V0bGluZSwgc2l6ZSB9ID0gcHJvcHM7XG4gIGNvbnN0IGF2YXRhcldpZHRoID0gc2l6ZSA/IEFWQVRBUl9TSVpFU1tzaXplXSA6ICcxMDAlJztcbiAgY29uc3QgYXZhdGFySGVpZ2h0ID0gc2l6ZSA/IEFWQVRBUl9TSVpFU1tzaXplXSA6ICcnO1xuICBjb25zdCBwb3NpdGlvbnMgPSBhdmF0YXJMYXlvdXQoY29sbGFib3JhdG9ycy5sZW5ndGgsIGF2YXRhcldpZHRoKTtcbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcbiAgICAgIHNoYXBlPVwiY2lyY2xlXCJcbiAgICAgIHdpZHRoPXthdmF0YXJXaWR0aH1cbiAgICAgIGhlaWdodD17YXZhdGFySGVpZ2h0fVxuICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICBkYW5nZXJvdXNseVNldElubGluZVN0eWxlPXt7XG4gICAgICAgIF9fc3R5bGU6IHtcbiAgICAgICAgICAuLi4ob3V0bGluZSA/IHsgYm94U2hhZG93OiAnMCAwIDAgMnB4ICNmZmYnIH0gOiB7fSksXG4gICAgICAgICAgLy8gd2lsbENoYW5nZTogdHJhbnNmb3JtIGZpeGVzIGEgc3RyYW5nZSBiZWhhdmlvciB3aGVyZSB0aGUgYm9yZGVyIG9mIHRoZSBjaGlsZHJlblxuICAgICAgICAgIC8vIGFyZSBub3QgcHJvcGVybHkgdHJpbW1lZCBldmVuIHRob3VnaCBvdmVyZmxvdzogaGlkZGVuIGlzIHNldFxuICAgICAgICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nLFxuICAgICAgICB9LFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8Qm94IGRhbmdlcm91c2x5U2V0SW5saW5lU3R5bGU9e3sgX19zdHlsZTogeyBwYWRkaW5nQm90dG9tOiAnMTAwJScgfSB9fSAvPlxuICAgICAge3ppcChwb3NpdGlvbnMsIGNvbGxhYm9yYXRvcnMpLm1hcChcbiAgICAgICAgKFtwb3NpdGlvbiwgY29sbGFib3JhdG9yID0geyBuYW1lOiAnJywgc3JjOiB1bmRlZmluZWQgfV0sIGlkeCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgdG9wLCBsZWZ0LCB0ZXh0TGF5b3V0IH0gPSBwb3NpdGlvbjtcbiAgICAgICAgICBjb25zdCB7IG5hbWUsIHNyYyB9ID0gY29sbGFib3JhdG9yO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIGtleT17aWR4fVxuICAgICAgICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcbiAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbmxpbmVTdHlsZT17eyBfX3N0eWxlOiB7IHRvcCwgbGVmdCB9IH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtzcmMgPyAoXG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBhbHQ9e25hbWV9XG4gICAgICAgICAgICAgICAgICBjb2xvcj1cIiNFRkVGRUZcIlxuICAgICAgICAgICAgICAgICAgc3JjPXtzcmN9XG4gICAgICAgICAgICAgICAgICBuYXR1cmFsV2lkdGg9ezF9XG4gICAgICAgICAgICAgICAgICBuYXR1cmFsSGVpZ2h0PXsxfVxuICAgICAgICAgICAgICAgICAgZml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPERlZmF1bHRBdmF0YXJcbiAgICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgICAgICB0ZXh0TGF5b3V0PXt0ZXh0TGF5b3V0fVxuICAgICAgICAgICAgICAgICAgc2l6ZT17aGVpZ2h0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud2FzaH0gLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICl9XG4gICAgPC9Cb3g+XG4gICk7XG59XG5cbkdyb3VwQXZhdGFyLnByb3BUeXBlcyA9IHtcbiAgY29sbGFib3JhdG9yczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgUHJvcFR5cGVzLmV4YWN0KHtcbiAgICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIHNyYzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB9KVxuICApLmlzUmVxdWlyZWQsXG4gIG91dGxpbmU6IFByb3BUeXBlcy5ib29sLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydzbScsICdtZCcsICdsZyddKSxcbn07XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi9Db2xvcnMuY3NzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkaW5nLmNzcyc7XG5pbXBvcnQgdHlwb2dyYXBoeSBmcm9tICcuL1R5cG9ncmFwaHkuY3NzJztcblxudHlwZSBQcm9wcyA9IHt8XG4gIGFjY2Vzc2liaWxpdHlMZXZlbD86IDEgfCAyIHwgMyB8IDQgfCA1IHwgNixcbiAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlLFxuICBjb2xvcj86XG4gICAgfCAnYmx1ZSdcbiAgICB8ICdkYXJrR3JheSdcbiAgICB8ICdlZ2dwbGFudCdcbiAgICB8ICdncmF5J1xuICAgIHwgJ2dyZWVuJ1xuICAgIHwgJ2xpZ2h0R3JheSdcbiAgICB8ICdtYXJvb24nXG4gICAgfCAnbWlkbmlnaHQnXG4gICAgfCAnbmF2eSdcbiAgICB8ICdvbGl2ZSdcbiAgICB8ICdvcmFuZ2UnXG4gICAgfCAnb3JjaGlkJ1xuICAgIHwgJ3BpbmUnXG4gICAgfCAncHVycGxlJ1xuICAgIHwgJ3JlZCdcbiAgICB8ICd3YXRlcm1lbG9uJ1xuICAgIHwgJ3doaXRlJyxcbiAgaWQ/OiBzdHJpbmcsXG4gIGxnU2l6ZT86ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnLFxuICBtZFNpemU/OiAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyxcbiAgb3ZlcmZsb3c/OiAnbm9ybWFsJyB8ICdicmVha1dvcmQnLFxuICBzaXplPzogJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcsXG4gIHNtU2l6ZT86ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnLFxuICB0cnVuY2F0ZT86IGJvb2xlYW4sXG58fTtcblxuY29uc3QgZGVmYXVsdEhlYWRpbmdMZXZlbHMgPSB7XG4gIHhzOiA1LFxuICBzbTogNCxcbiAgbWQ6IDMsXG4gIGxnOiAyLFxuICB4bDogMSxcbn07XG5cbmNvbnN0IFNJWkVfU0NBTEU6IHsgW3NpemU6ID9zdHJpbmddOiBudW1iZXIgfSA9IHtcbiAgeHM6IDEsXG4gIHNtOiAyLFxuICBtZDogMyxcbiAgbGc6IDQsXG4gIHhsOiA1LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGluZyhwcm9wczogUHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIGFjY2Vzc2liaWxpdHlMZXZlbCxcbiAgICBjaGlsZHJlbixcbiAgICBjb2xvciA9ICdkYXJrR3JheScsXG4gICAgaWQgPSBudWxsLFxuICAgIGxnU2l6ZSxcbiAgICBtZFNpemUsXG4gICAgb3ZlcmZsb3cgPSAnYnJlYWtXb3JkJyxcbiAgICBzaXplID0gJ21kJyxcbiAgICBzbVNpemUsXG4gICAgdHJ1bmNhdGUgPSBmYWxzZSxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGNzID0gY3goXG4gICAgc3R5bGVzLkhlYWRpbmcsXG4gICAgc3R5bGVzW2Bmb250U2l6ZSR7U0laRV9TQ0FMRVtzaXplXX1gXSxcbiAgICBzbVNpemUgJiYgc3R5bGVzW2BzbUZvbnRTaXplJHtTSVpFX1NDQUxFW3NtU2l6ZV19YF0sXG4gICAgbWRTaXplICYmIHN0eWxlc1tgbWRGb250U2l6ZSR7U0laRV9TQ0FMRVttZFNpemVdfWBdLFxuICAgIGxnU2l6ZSAmJiBzdHlsZXNbYGxnRm9udFNpemUke1NJWkVfU0NBTEVbbGdTaXplXX1gXSxcbiAgICBjb2xvcnNbY29sb3JdLFxuICAgIG92ZXJmbG93ID09PSAnYnJlYWtXb3JkJyAmJiB0eXBvZ3JhcGh5LmJyZWFrV29yZCxcbiAgICB0cnVuY2F0ZSAmJiB0eXBvZ3JhcGh5LnRydW5jYXRlXG4gICk7XG5cbiAgY29uc3QgaGVhZGluZ0xldmVsID0gYWNjZXNzaWJpbGl0eUxldmVsIHx8IGRlZmF1bHRIZWFkaW5nTGV2ZWxzW3NpemVdO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBgaCR7aGVhZGluZ0xldmVsfWAsXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiBjcyxcbiAgICAgIGlkLFxuICAgICAgLi4uKHRydW5jYXRlICYmIHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZydcbiAgICAgICAgPyB7IHRpdGxlOiBjaGlsZHJlbiB9XG4gICAgICAgIDogbnVsbCksXG4gICAgfSxcbiAgICBjaGlsZHJlblxuICApO1xufVxuXG5IZWFkaW5nLnByb3BUeXBlcyA9IHtcbiAgYWNjZXNzaWJpbGl0eUxldmVsOiBQcm9wVHlwZXMub25lT2YoWzEsIDIsIDMsIDQsIDUsIDZdKSxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAnYmx1ZScsXG4gICAgJ2RhcmtHcmF5JyxcbiAgICAnZWdncGxhbnQnLFxuICAgICdncmF5JyxcbiAgICAnZ3JlZW4nLFxuICAgICdsaWdodEdyYXknLFxuICAgICdtYXJvb24nLFxuICAgICdtaWRuaWdodCcsXG4gICAgJ25hdnknLFxuICAgICdvbGl2ZScsXG4gICAgJ29yYW5nZScsXG4gICAgJ29yY2hpZCcsXG4gICAgJ3BpbmUnLFxuICAgICdwdXJwbGUnLFxuICAgICdyZWQnLFxuICAgICd3YXRlcm1lbG9uJyxcbiAgICAnd2hpdGUnLFxuICBdKSxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG92ZXJmbG93OiBQcm9wVHlwZXMub25lT2YoWydub3JtYWwnLCAnYnJlYWtXb3JkJ10pLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWyd4cycsICdzbScsICdtZCcsICdsZycsICd4bCddKSxcbiAgc21TaXplOiBQcm9wVHlwZXMub25lT2YoWyd4cycsICdzbScsICdtZCcsICdsZycsICd4bCddKSxcbiAgbWRTaXplOiBQcm9wVHlwZXMub25lT2YoWyd4cycsICdzbScsICdtZCcsICdsZycsICd4bCddKSxcbiAgbGdTaXplOiBQcm9wVHlwZXMub25lT2YoWyd4cycsICdzbScsICdtZCcsICdsZycsICd4bCddKSxcbiAgdHJ1bmNhdGU6IFByb3BUeXBlcy5ib29sLFxufTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgQm94IGZyb20gJy4vQm94LmpzJztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbi5qcyc7XG5pbXBvcnQgaWNvbnMgZnJvbSAnLi9pY29ucy9pbmRleC5qcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUG9nLmNzcyc7XG5cbmNvbnN0IFNJWkVfTkFNRV9UT19QSVhFTCA9IHtcbiAgeHM6IDI0LFxuICBzbTogMzIsXG4gIG1kOiA0MCxcbiAgbGc6IDQ4LFxuICB4bDogNTYsXG59O1xuXG50eXBlIFByb3BzID0ge3xcbiAgYWN0aXZlPzogYm9vbGVhbixcbiAgYmdDb2xvcj86ICd0cmFuc3BhcmVudCcgfCAnZ3JheScgfCAnbGlnaHRHcmF5JyB8ICd3aGl0ZScsXG4gIGZvY3VzZWQ/OiBib29sZWFuLFxuICBob3ZlcmVkPzogYm9vbGVhbixcbiAgaWNvbkNvbG9yPzogJ2dyYXknIHwgJ2RhcmtHcmF5JyB8ICdyZWQnIHwgJ2JsdWUnIHwgJ3doaXRlJyxcbiAgaWNvbjogJEtleXM8dHlwZW9mIGljb25zPixcbiAgc2l6ZT86ICRLZXlzPHR5cGVvZiBTSVpFX05BTUVfVE9fUElYRUw+LFxufH07XG5cbmNvbnN0IGRlZmF1bHRJY29uQnV0dG9uSWNvbkNvbG9ycyA9IHtcbiAgdHJhbnNwYXJlbnQ6ICdncmF5JyxcbiAgZ3JheTogJ3doaXRlJyxcbiAgbGlnaHRHcmF5OiAnZ3JheScsXG4gIHdoaXRlOiAnZ3JheScsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb2cocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBhY3RpdmUgPSBmYWxzZSxcbiAgICBiZ0NvbG9yID0gJ3RyYW5zcGFyZW50JyxcbiAgICBmb2N1c2VkID0gZmFsc2UsXG4gICAgaG92ZXJlZCA9IGZhbHNlLFxuICAgIGljb25Db2xvciA9IGRlZmF1bHRJY29uQnV0dG9uSWNvbkNvbG9yc1tiZ0NvbG9yXSxcbiAgICBpY29uLFxuICAgIHNpemUgPSAnbWQnLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgaWNvblNpemUgPSBTSVpFX05BTUVfVE9fUElYRUxbc2l6ZV0gLyAyO1xuXG4gIGNvbnN0IGlubGluZVN0eWxlID0ge1xuICAgIGhlaWdodDogU0laRV9OQU1FX1RPX1BJWEVMW3NpemVdLFxuICAgIHdpZHRoOiBTSVpFX05BTUVfVE9fUElYRUxbc2l6ZV0sXG4gIH07XG5cbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzbmFtZXMoc3R5bGVzLnBvZywgc3R5bGVzW2JnQ29sb3JdLCB7XG4gICAgW3N0eWxlcy5hY3RpdmVdOiBhY3RpdmUsXG4gICAgW3N0eWxlcy5mb2N1c2VkXTogZm9jdXNlZCxcbiAgICBbc3R5bGVzLmhvdmVyZWRdOiBob3ZlcmVkICYmICFmb2N1c2VkICYmICFhY3RpdmUsXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9IHN0eWxlPXtpbmxpbmVTdHlsZX0+XG4gICAgICA8Qm94IHNoYXBlPVwiY2lyY2xlXCI+XG4gICAgICAgIHsvKlxuICAgICAgICAgIFdlJ3JlIGV4cGxpY2l0bHkgc2V0dGluZyBhbiBlbXB0eSBzdHJpbmcgYXMgYSBsYWJlbCBvbiB0aGUgSWNvbiBzaW5jZSB3ZVxuICAgICAgICAgIGFscmVhZHkgaGF2ZSBhbiBhcmlhLWxhYmVsIG9uIHRoZSBidXR0b24gY29udGFpbmVyLlxuICAgICAgICAgIFRoaXMgaXMgc2ltaWxhciB0byBoYXZpbmcgZW1wdHkgYGFsdGAgYXR0cmlidXRlczpcbiAgICAgICAgICBodHRwczovL2Rhdmlkd2Fsc2gubmFtZS9hY2Nlc3NpYmlsaXR5LXRpcC1lbXB0eS1hbHQtYXR0cmlidXRlc1xuICAgICAgICAqL31cbiAgICAgICAgPEljb25cbiAgICAgICAgICBjb2xvcj17aWNvbkNvbG9yfVxuICAgICAgICAgIGljb249e2ljb259XG4gICAgICAgICAgc2l6ZT17aWNvblNpemV9XG4gICAgICAgICAgYWNjZXNzaWJpbGl0eUxhYmVsPVwiXCJcbiAgICAgICAgLz5cbiAgICAgIDwvQm94PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5Qb2cucHJvcFR5cGVzID0ge1xuICBhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuICBiZ0NvbG9yOiBQcm9wVHlwZXMub25lT2YoWyd0cmFuc3BhcmVudCcsICdncmF5JywgJ2xpZ2h0R3JheScsICd3aGl0ZSddKSxcbiAgZm9jdXNlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGhvdmVyZWQ6IFByb3BUeXBlcy5ib29sLFxuICBpY29uQ29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ2dyYXknLCAnZGFya0dyYXknLCAncmVkJywgJ2JsdWUnLCAnd2hpdGUnXSksXG4gIGljb246IFByb3BUeXBlcy5vbmVPZihPYmplY3Qua2V5cyhpY29ucykpLmlzUmVxdWlyZWQsXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihPYmplY3Qua2V5cyhTSVpFX05BTUVfVE9fUElYRUwpKSxcbn07XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9JY29uQnV0dG9uLmNzcyc7XG5pbXBvcnQgaWNvbnMgZnJvbSAnLi9pY29ucy9pbmRleC5qcyc7XG5pbXBvcnQgUG9nIGZyb20gJy4vUG9nLmpzJztcblxudHlwZSBQcm9wcyA9IHt8XG4gIGFjY2Vzc2liaWxpdHlFeHBhbmRlZD86IGJvb2xlYW4sXG4gIGFjY2Vzc2liaWxpdHlIYXNwb3B1cD86IGJvb2xlYW4sXG4gIGFjY2Vzc2liaWxpdHlMYWJlbDogc3RyaW5nLFxuICBiZ0NvbG9yPzogJ3RyYW5zcGFyZW50JyB8ICdncmF5JyB8ICdsaWdodEdyYXknIHwgJ3doaXRlJyxcbiAgaWNvbkNvbG9yPzogJ2dyYXknIHwgJ2RhcmtHcmF5JyB8ICdyZWQnIHwgJ2JsdWUnIHwgJ3doaXRlJyxcbiAgaWNvbjogJEtleXM8dHlwZW9mIGljb25zPixcbiAgb25DbGljaz86ICh7IGV2ZW50OiBTeW50aGV0aWNNb3VzZUV2ZW50PD4gfSkgPT4gdm9pZCxcbiAgc2l6ZT86ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnLFxufH07XG5cbnR5cGUgU3RhdGUgPSB7fFxuICBhY3RpdmU6IGJvb2xlYW4sXG4gIGZvY3VzZWQ6IGJvb2xlYW4sXG4gIGhvdmVyZWQ6IGJvb2xlYW4sXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWNvbkJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBhY2Nlc3NpYmlsaXR5RXhwYW5kZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGFjY2Vzc2liaWxpdHlIYXNwb3B1cDogUHJvcFR5cGVzLmJvb2wsXG4gICAgYWNjZXNzaWJpbGl0eUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgYmdDb2xvcjogUHJvcFR5cGVzLm9uZU9mKFsndHJhbnNwYXJlbnQnLCAnZ3JheScsICdsaWdodEdyYXknLCAnd2hpdGUnXSksXG4gICAgaWNvbjogUHJvcFR5cGVzLm9uZU9mKE9iamVjdC5rZXlzKGljb25zKSkuaXNSZXF1aXJlZCxcbiAgICBpY29uQ29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ2dyYXknLCAnZGFya0dyYXknLCAncmVkJywgJ2JsdWUnLCAnd2hpdGUnXSksXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsneHMnLCAnc20nLCAnbWQnLCAnbGcnLCAneGwnXSksXG4gIH07XG5cbiAgc3RhdGU6IFN0YXRlID0ge1xuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgZm9jdXNlZDogZmFsc2UsXG4gICAgaG92ZXJlZDogZmFsc2UsXG4gIH07XG5cbiAgaGFuZGxlQmx1ciA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkOiBmYWxzZSB9KTtcblxuICBoYW5kbGVGb2N1cyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZDogdHJ1ZSB9KTtcbiAgfTtcblxuICBoYW5kbGVNb3VzZURvd24gPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZTogdHJ1ZSB9KTtcbiAgfTtcblxuICBoYW5kbGVNb3VzZUVudGVyID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBob3ZlcmVkOiB0cnVlIH0pO1xuICB9O1xuXG4gIGhhbmRsZU1vdXNlTGVhdmUgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgaG92ZXJlZDogZmFsc2UsXG4gICAgfSk7XG4gIH07XG5cbiAgaGFuZGxlTW91c2VVcCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlOiBmYWxzZSB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYWNjZXNzaWJpbGl0eUV4cGFuZGVkLFxuICAgICAgYWNjZXNzaWJpbGl0eUhhc3BvcHVwLFxuICAgICAgYWNjZXNzaWJpbGl0eUxhYmVsLFxuICAgICAgYmdDb2xvcixcbiAgICAgIGljb25Db2xvcixcbiAgICAgIGljb24sXG4gICAgICBzaXplLFxuICAgICAgb25DbGljayxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHsgYWN0aXZlLCBmb2N1c2VkLCBob3ZlcmVkIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b25cbiAgICAgICAgYXJpYS1leHBhbmRlZD17YWNjZXNzaWJpbGl0eUV4cGFuZGVkfVxuICAgICAgICBhcmlhLWhhc3BvcHVwPXthY2Nlc3NpYmlsaXR5SGFzcG9wdXB9XG4gICAgICAgIGFyaWEtbGFiZWw9e2FjY2Vzc2liaWxpdHlMYWJlbH1cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufVxuICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlQmx1cn1cbiAgICAgICAgb25DbGljaz17ZXZlbnQgPT4gb25DbGljayAmJiBvbkNsaWNrKHsgZXZlbnQgfSl9XG4gICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlRm9jdXN9XG4gICAgICAgIG9uTW91c2VEb3duPXt0aGlzLmhhbmRsZU1vdXNlRG93bn1cbiAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZU1vdXNlRW50ZXJ9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5oYW5kbGVNb3VzZUxlYXZlfVxuICAgICAgICBvbk1vdXNlVXA9e3RoaXMuaGFuZGxlTW91c2VVcH1cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICA+XG4gICAgICAgIDxQb2dcbiAgICAgICAgICBhY3RpdmU9e2FjdGl2ZX1cbiAgICAgICAgICBiZ0NvbG9yPXtiZ0NvbG9yfVxuICAgICAgICAgIGZvY3VzZWQ9e2ZvY3VzZWR9XG4gICAgICAgICAgaG92ZXJlZD17aG92ZXJlZH1cbiAgICAgICAgICBpY29uQ29sb3I9e2ljb25Db2xvcn1cbiAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgIC8+XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9XG59XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MYWJlbC5jc3MnO1xuXG50eXBlIFByb3BzID0ge3xcbiAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlLFxuICBodG1sRm9yOiBzdHJpbmcsXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGFiZWwocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGh0bWxGb3IgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsfSBodG1sRm9yPXtodG1sRm9yfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2xhYmVsPlxuICApO1xufVxuXG5MYWJlbC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgaHRtbEZvcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nO1xuXG50eXBlIFByb3BzID0ge3xcbiAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlLFxufH07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheWVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAoZG9jdW1lbnQuYm9keSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAoZG9jdW1lbnQuYm9keSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmVsKTtcbiAgICB9XG4gIH1cblxuICBlbDogSFRNTERpdkVsZW1lbnQ7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIGNyZWF0ZVBvcnRhbChjaGlsZHJlbiwgdGhpcy5lbCk7XG4gIH1cbn1cbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IE1hc2sgZnJvbSAnLi9NYXNrLmpzJztcblxuLypcbiAgTXVjaCBvZiB0aGUgbWF0aCBhbmQgdW5kZXJzdGFuZGluZyBhYm91dCB0aGlzIGNvbXBvbmVudCBjb21lcyBmcm9tIEB2amVhdXgnc1xuICBleGNlbGxlbnQgYmxvZyBwb3N0IG9uIGltYWdlIHJlc2l6aW5nLlxuXG4gIGh0dHA6Ly9ibG9nLnZqZXV4LmNvbS8yMDEzL2ltYWdlL2Nzcy1jb250YWluZXItYW5kLWNvdmVyLmh0bWxcblxuICBJIGhpZ2hseSByZWNvbW1lbmQgeW91IHJlYWQgdGhhdCBmaXJzdCBiZWZvcmUgY29udGludWluZyBvbiByZWFkaW5nLlxuKi9cblxuY29uc3QgYXNwZWN0UmF0aW8gPSAod2lkdGgsIGhlaWdodCkgPT4gd2lkdGggLyBoZWlnaHQ7XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBjaGlsZHJlbj86IFJlYWN0Lk5vZGUsXG4gIGNvbnRlbnRBc3BlY3RSYXRpbzogbnVtYmVyLFxuICBoZWlnaHQ6IG51bWJlcixcbiAgd2lkdGg6IG51bWJlcixcbnx9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMZXR0ZXJib3goe1xuICBjaGlsZHJlbixcbiAgY29udGVudEFzcGVjdFJhdGlvLFxuICBoZWlnaHQsXG4gIHdpZHRoLFxufTogUHJvcHMpIHtcbiAgY29uc3Qgdmlld3BvcnRBc3BlY3RSYXRpbyA9IGFzcGVjdFJhdGlvKHdpZHRoLCBoZWlnaHQpO1xuXG4gIGxldCBjb250ZW50SGVpZ2h0O1xuICBsZXQgY29udGVudFdpZHRoO1xuXG4gIGlmIChjb250ZW50QXNwZWN0UmF0aW8gPCB2aWV3cG9ydEFzcGVjdFJhdGlvKSB7XG4gICAgY29udGVudFdpZHRoID0gd2lkdGg7XG4gICAgY29udGVudEhlaWdodCA9IHdpZHRoIC8gY29udGVudEFzcGVjdFJhdGlvO1xuICB9IGVsc2Uge1xuICAgIGNvbnRlbnRXaWR0aCA9IGhlaWdodCAqIGNvbnRlbnRBc3BlY3RSYXRpbztcbiAgICBjb250ZW50SGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgY29uc3Qgb2Zmc2V0VG9wID0gKGNvbnRlbnRIZWlnaHQgLSBoZWlnaHQpIC8gLTI7XG4gIGNvbnN0IG9mZnNldExlZnQgPSAoY29udGVudFdpZHRoIC0gd2lkdGgpIC8gLTI7XG5cbiAgcmV0dXJuIChcbiAgICA8TWFzayB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fT5cbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBvZmZzZXRUb3AsIG1hcmdpbkxlZnQ6IG9mZnNldExlZnQgfX0+XG4gICAgICAgIDxNYXNrIHdpZHRoPXtjb250ZW50V2lkdGh9IGhlaWdodD17Y29udGVudEhlaWdodH0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L01hc2s+XG4gICAgICA8L2Rpdj5cbiAgICA8L01hc2s+XG4gICk7XG59XG5cbkxldHRlcmJveC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgY29udGVudEFzcGVjdFJhdGlvOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB3aWR0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxufTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xpbmsuY3NzJztcblxudHlwZSBQcm9wcyA9IHt8XG4gIGNoaWxkcmVuPzogUmVhY3QuTm9kZSxcbiAgaHJlZjogc3RyaW5nLFxuICBpbmxpbmU/OiBib29sZWFuLFxuICBvbkNsaWNrPzogKHsgZXZlbnQ6IFN5bnRoZXRpY01vdXNlRXZlbnQ8PiB9KSA9PiB2b2lkLFxuICB0YXJnZXQ/OiBudWxsIHwgJ3NlbGYnIHwgJ2JsYW5rJyxcbnx9O1xuXG50eXBlIFN0YXRlID0ge3xcbiAgZW5hYmxlRm9jdXNTdHlsZXM6IGJvb2xlYW4sXG58fTtcblxuY29uc3QgVEFCX0tFWV9DT0RFID0gOTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICBocmVmOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaW5saW5lOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB0YXJnZXQ6IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgJ3NlbGYnLCAnYmxhbmsnXSksXG4gIH07XG5cbiAgc3RhdGU6IFN0YXRlID0ge1xuICAgIGVuYWJsZUZvY3VzU3R5bGVzOiB0cnVlLFxuICB9O1xuXG4gIGhhbmRsZUNsaWNrID0gKGV2ZW50OiBTeW50aGV0aWNNb3VzZUV2ZW50PD4pID0+IHtcbiAgICBjb25zdCB7IGhyZWYsIG9uQ2xpY2sgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKG9uQ2xpY2sgJiYgaHJlZikge1xuICAgICAgb25DbGljayh7IGV2ZW50IH0pO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVNb3VzZURvd24gPSAoKSA9PiB7XG4gICAgY29uc3QgeyBocmVmLCB0YXJnZXQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHRhcmdldCA9PT0gJ2JsYW5rJyAmJiBocmVmKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZW5hYmxlRm9jdXNTdHlsZXM6IGZhbHNlIH0pO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVLZXlVcCA9IChldmVudDogU3ludGhldGljS2V5Ym9hcmRFdmVudDw+KSA9PiB7XG4gICAgY29uc3QgeyBocmVmLCB0YXJnZXQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHRhcmdldCA9PT0gJ2JsYW5rJyAmJiBldmVudC5rZXlDb2RlID09PSBUQUJfS0VZX0NPREUgJiYgaHJlZikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVuYWJsZUZvY3VzU3R5bGVzOiB0cnVlIH0pO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgaW5saW5lID0gZmFsc2UsIHRhcmdldCA9IG51bGwsIGhyZWYgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgcmVsID0gdGFyZ2V0ID09PSAnYmxhbmsnID8gJ25vb3BlbmVyIG5vcmVmZXJyZXInIDogbnVsbDtcbiAgICBjb25zdCBsaW5rVGFyZ2V0ID0gdGFyZ2V0ID8gYF8ke3RhcmdldH1gIDogbnVsbDtcblxuICAgIHJldHVybiAoXG4gICAgICA8YVxuICAgICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICAgIHN0eWxlcy5saW5rLFxuICAgICAgICAgIHRoaXMuc3RhdGUuZW5hYmxlRm9jdXNTdHlsZXMgPyBzdHlsZXMuYWNjZXNzaWJsZUZvY3VzU3R5bGUgOiAnJyxcbiAgICAgICAgICBpbmxpbmUgPyAnJyA6IHN0eWxlcy5ibG9ja1xuICAgICAgICApfVxuICAgICAgICBocmVmPXtocmVmfVxuICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5oYW5kbGVNb3VzZURvd259XG4gICAgICAgIG9uS2V5VXA9e3RoaXMuaGFuZGxlS2V5VXB9XG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgIHJlbD17cmVsfVxuICAgICAgICB0YXJnZXQ9e2xpbmtUYXJnZXR9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvYT5cbiAgICApO1xuICB9XG59XG4iLCIvKipcbiAqIGRlYm91bmNlIHByZXZlbnRzIGEgcGFydGljdWxhciBmdW5jdGlvbiBmcm9tIGJlaW5nIGNhbGxlZCB1bnRpbCBhZnRlciBhIGdpdmVuXG4gKiBjb29sZG93biBwZXJpb2QgKGRlZmF1bHQgMTAwbXMpLiBFdmVyeSB0aW1lIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQsIGl0IHJlc2V0c1xuICogdGhlIGNvb2xkb3duLlxuICovXG5cbi8vIEBmbG93XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWJvdW5jZShcbiAgZm46ICguLi5hcmdzOiAqKSA9PiB2b2lkLFxuICB0aHJlc2hob2xkOiBudW1iZXIgPSAxMDBcbikge1xuICBsZXQgZGVmZXJUaW1lcjogVGltZW91dElEIHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3QgZGVib3VuY2VkID0gKC4uLmFyZ3M6ICopID0+IHtcbiAgICBpZiAoZGVmZXJUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KGRlZmVyVGltZXIpO1xuICAgIH1cblxuICAgIGRlZmVyVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGRlZmVyVGltZXIgPSBudWxsO1xuICAgICAgZm4oLi4uYXJncyk7XG4gICAgfSwgdGhyZXNoaG9sZCk7XG4gIH07XG5cbiAgZGVib3VuY2VkLmNsZWFyVGltZW91dCA9ICgpID0+IHtcbiAgICBpZiAoZGVmZXJUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KGRlZmVyVGltZXIpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gZGVib3VuY2VkO1xufVxuIiwiLyoqXG4gKiBGZXRjaEl0ZW1zIGlzIGEgbG9naWMgY29tcG9uZW50IHRoYXQgcmVuZGVycyBubyBjb250ZW50IGl0c2VsZi4gSXRzIGpvYlxuICogaXMgdG8gbWFuYWdlIHdoZW4gdGhlIGdpdmVuIGZldGNoTW9yZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZCBiYXNlZCBvblxuICogdGhlIGdpdmVuIHNjcm9sbC9zaXplIHByb3BzLlxuICpcbiAqIFdoaWxlIG5vIGVsZW1lbnQgaXMgYWN0dWFsbHkgcGFzc2VkIHRvIEZldGNoSXRlbXMsIGl0IGlzIGludGVuZGVkIHRvIGJlIHVzZWRcbiAqIGluIGNvbmp1bmN0aW9uIHdpdGggYSBsYXJnZSBzY3JvbGwgY29udGFpbmVyIHRoYXQgdXNlcyBhc3luYyBmZXRjaGluZyB0b1xuICogbG9hZCBhbmQgcmVuZGVyIGFkZGl0aW9uYWwgZGF0YS4gQmFzZWQgb24gdGhlIGhlaWdodCBvZiB0aGlzIGNvbnRhaW5lciBhbmRcbiAqIGl0cyBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiwgRmV0Y2hJdGVtcyBpcyByZXNwb25zaWJsZSBmb3IgdHJpZ2dlcmluZyBmdXR1cmVcbiAqIGZldGNoIGNhbGxzLlxuICovXG5cbi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG50eXBlIFByb3BzID0ge1xuICBjb250YWluZXJIZWlnaHQ6IG51bWJlcixcbiAgaXNBdEVuZD86IGJvb2xlYW4sXG4gIGlzRmV0Y2hpbmc6IGJvb2xlYW4sXG4gIGZldGNoTW9yZT86ICgpID0+IHZvaWQsXG4gIHNjcm9sbEhlaWdodDogbnVtYmVyLFxuICBzY3JvbGxUb3A6IG51bWJlcixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZldGNoSXRlbXMgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY29udGFpbmVySGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgaXNBdEVuZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNGZXRjaGluZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBmZXRjaE1vcmU6IFByb3BUeXBlcy5mdW5jLFxuICAgIHNjcm9sbEhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHNjcm9sbFRvcDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHNldFRpbWVvdXQodGhpcy5jaGVjayk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgY2hlY2sgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgY29udGFpbmVySGVpZ2h0LFxuICAgICAgaXNBdEVuZCxcbiAgICAgIGlzRmV0Y2hpbmcsXG4gICAgICBmZXRjaE1vcmUsXG4gICAgICBzY3JvbGxIZWlnaHQsXG4gICAgICBzY3JvbGxUb3AsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoaXNBdEVuZCB8fCBpc0ZldGNoaW5nIHx8ICFmZXRjaE1vcmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc2Nyb2xsQnVmZmVyID0gY29udGFpbmVySGVpZ2h0ICogMztcblxuICAgIGlmIChzY3JvbGxUb3AgKyBzY3JvbGxCdWZmZXIgPiBzY3JvbGxIZWlnaHQpIHtcbiAgICAgIGZldGNoTW9yZSgpO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiIsIi8qKlxuICogU2Nyb2xsQ29udGFpbmVyIGlzIGEgcGFzcy10aHJvdWdoIGNvbXBvbmVudCB0aGF0IHNpbXBseSBzZXRzIHVwIGFuIG9uU2Nyb2xsXG4gKiBoYW5kbGVyIG9uIHRoZSBnaXZlbiBzY3JvbGxDb250YWluZXIgZWxlbWVudCAob3IgdGhlIGVsZW1lbnQgdGhhdCBpc1xuICogcmV0dXJuZWQgYXMgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIHNjcm9sbENvbnRhaW5lciBtZXRob2QpLiBUaGlzIGFsbG93cyBmb3JcbiAqIHRoZSBldmVudCBsaXN0ZW5lciBzdWJzY3JpcHRpb24gb2YgdGhlIHNjcm9sbENvbnRhaW5lciB0byBiZSBtYW5hZ2VkIGluc2lkZVxuICogdGhlIFJlYWN0IGxpZmVjeWNsZSB3aXRob3V0IGFkZGluZyBibG9hdCB0byBNYXNvbnJ5IG9yIG90aGVyIG9uU2Nyb2xsXG4gKiBzdWJzY3JpYmVycy5cbiAqXG4gKiBOb3RlIHRoYXQgdGhpcyBDb21wb25lbnQgcmVuZGVycyBpdHMgY2hpbGRyZW4gd2l0aG91dCBjcmVhdGluZyBhbnlcbiAqIGFkZGl0aW9uYWwgY29udGVudC4gQWxzbyBub3RlIHRoYXQsIHdoaWxlIHRoZSBjb21wb25lbnQgaXMgYnVpbHQgdG8gbWFuYWdlXG4gKiBvblNjcm9sbCBpbnNpZGUgb2YgdGhlIFJlYWN0IGxpZmVjeWNsZSwgaXQgZG9lc24ndCBjaGFuZ2Ugb25TY3JvbGwgZXZlbnRzXG4gKiBvciB0aGUgQVBJIGF0IGFsbCwgc28gaXQgY291bGQgZWFzaWx5IGJlIGFkYXB0ZWQgdG8gb3RoZXIgZXZlbnQgdHlwZXMuXG4gKi9cblxuLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBjaGlsZHJlbj86IFJlYWN0Lk5vZGUsXG4gIG9uU2Nyb2xsOiAoZXZlbnQ6IEV2ZW50KSA9PiB2b2lkLFxuICBzY3JvbGxDb250YWluZXI6ID9IVE1MRWxlbWVudCB8ICgoKSA9PiA/SFRNTEVsZW1lbnQpLFxufH07XG5cbmZ1bmN0aW9uIGdldFNjcm9sbENvbnRhaW5lcihzY3JvbGxDb250YWluZXIpIHtcbiAgcmV0dXJuIHR5cGVvZiBzY3JvbGxDb250YWluZXIgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcm9sbENvbnRhaW5lcigpXG4gICAgOiBzY3JvbGxDb250YWluZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgIG9uU2Nyb2xsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHNjcm9sbENvbnRhaW5lcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmNdKVxuICAgICAgLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3Qgc2Nyb2xsQ29udGFpbmVyID0gZ2V0U2Nyb2xsQ29udGFpbmVyKHRoaXMucHJvcHMuc2Nyb2xsQ29udGFpbmVyKTtcbiAgICBpZiAoc2Nyb2xsQ29udGFpbmVyKSB7XG4gICAgICB0aGlzLnVwZGF0ZVNjcm9sbENvbnRhaW5lcihzY3JvbGxDb250YWluZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBjb25zdCBuZXh0U2Nyb2xsQ29udGFpbmVyID0gZ2V0U2Nyb2xsQ29udGFpbmVyKHRoaXMucHJvcHMuc2Nyb2xsQ29udGFpbmVyKTtcbiAgICBpZiAobmV4dFNjcm9sbENvbnRhaW5lciAmJiBuZXh0U2Nyb2xsQ29udGFpbmVyICE9PSB0aGlzLnNjcm9sbENvbnRhaW5lcikge1xuICAgICAgdGhpcy51cGRhdGVTY3JvbGxDb250YWluZXIobmV4dFNjcm9sbENvbnRhaW5lcik7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsQ29udGFpbmVyKSB7XG4gICAgICB0aGlzLnNjcm9sbENvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0U2Nyb2xsQ29udGFpbmVyUmVmID0gKCkgPT4gdGhpcy5zY3JvbGxDb250YWluZXI7XG5cbiAgaGFuZGxlU2Nyb2xsID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgIHRoaXMucHJvcHMub25TY3JvbGwoZXZlbnQpO1xuICB9O1xuXG4gIHVwZGF0ZVNjcm9sbENvbnRhaW5lcihzY3JvbGxDb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsQ29udGFpbmVyKSB7XG4gICAgICAvLyBjbGVhbnVwIGV4aXN0aW5nIHNjcm9sbCBjb250YWluZXIgaWYgaXQgZXhpc3RzXG4gICAgICB0aGlzLnNjcm9sbENvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCk7XG4gICAgfVxuICAgIHRoaXMuc2Nyb2xsQ29udGFpbmVyID0gc2Nyb2xsQ29udGFpbmVyO1xuICAgIHRoaXMuc2Nyb2xsQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGFuZGxlU2Nyb2xsKTtcbiAgfVxuXG4gIHNjcm9sbENvbnRhaW5lcjogP0hUTUxFbGVtZW50O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgfVxufVxuIiwiLyoqXG4gKiB0aHJvdHRsZSBsaW1pdHMgdGhlIG51bWJlciBvZiB0aW1lcyBhIGZ1bmN0aW9uIGNhbiBiZSBjYWxsZWQgdG8gYVxuICogZ2l2ZW4gdGhyZXNoaG9sZCAoMTAwbXMgYnkgZGVmYXVsdCkuIFRoZSBmdW5jdGlvbiBpcyBhbHdheXMgY2FsbGVkXG4gKiBvbiB0aGUgbGVhZGluZyBhbmQgdHJhaWxpbmcgZWRnZS5cbiAqL1xuXG4vLyBAZmxvd1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGhyb3R0bGUoXG4gIGZuOiAoLi4uYXJnczogKikgPT4gdm9pZCxcbiAgdGhyZXNoaG9sZDogbnVtYmVyID0gMTAwXG4pIHtcbiAgbGV0IGxhc3Q6IG51bWJlciB8IHZvaWQ7XG4gIGxldCBkZWZlclRpbWVyOiBUaW1lb3V0SUQgfCB2b2lkO1xuICBjb25zdCB0aHJvdHRsZWQgPSAoLi4uYXJnczogKikgPT4ge1xuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgaWYgKGxhc3QgIT09IHVuZGVmaW5lZCAmJiBub3cgLSBsYXN0IDwgdGhyZXNoaG9sZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KGRlZmVyVGltZXIpO1xuICAgICAgZGVmZXJUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsYXN0ID0gbm93O1xuICAgICAgICBmbiguLi5hcmdzKTtcbiAgICAgIH0sIHRocmVzaGhvbGQgLSAobm93IC0gbGFzdCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYXN0ID0gbm93O1xuICAgICAgZm4oLi4uYXJncyk7XG4gICAgfVxuICB9O1xuXG4gIHRocm90dGxlZC5jbGVhclRpbWVvdXQgPSAoKSA9PiB7XG4gICAgaWYgKGRlZmVyVGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dChkZWZlclRpbWVyKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHRocm90dGxlZDtcbn1cbiIsIi8vIEBmbG93XG5pbXBvcnQgdHlwZSB7IENhY2hlIH0gZnJvbSAnLi9DYWNoZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lYXN1cmVtZW50U3RvcmU8VCwgVj4gaW1wbGVtZW50cyBDYWNoZTxULCBWPiB7XG4gIG1hcDogV2Vha01hcDxULCBWPiA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgZ2V0KGtleTogVCk6ID9WIHtcbiAgICByZXR1cm4gdGhpcy5tYXAuZ2V0KGtleSk7XG4gIH1cblxuICBoYXMoa2V5OiBUKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubWFwLmhhcyhrZXkpO1xuICB9XG5cbiAgc2V0KGtleTogVCwgdmFsdWU6IFYpOiB2b2lkIHtcbiAgICB0aGlzLm1hcC5zZXQoa2V5LCB2YWx1ZSk7XG4gIH1cblxuICByZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLm1hcCA9IG5ldyBXZWFrTWFwKCk7XG4gIH1cbn1cbiIsIi8qKlxuICogTWVhc3VyaW5nIHNjcm9sbCBwb3NpdGlvbnMsIGVsZW1lbnQgaGVpZ2h0cywgZXRjIGlzIGRpZmZlcmVudCBiZXR3ZWVuXG4gKiBkaWZmZXJlbnQgYnJvd3NlcnMgYW5kIHRoZSB3aW5kb3cgb2JqZWN0IHZzIG90aGVyIERPTSBub2Rlcy4gVGhlc2VcbiAqIHV0aWxzIGFic3RyYWN0IGF3YXkgdGhlc2UgZGlmZmVyZW5jZXMuXG4gKi9cblxuLy8gQGZsb3dcbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50SGVpZ2h0KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcbiAgcmV0dXJuIGVsZW1lbnQgPT09IHdpbmRvdyA/IHdpbmRvdy5pbm5lckhlaWdodCA6IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsUG9zKCkge1xuICBpZiAod2luZG93LnNjcm9sbFkgIT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE1vZGVybiBicm93c2VyXG4gICAgcmV0dXJuIHdpbmRvdy5zY3JvbGxZO1xuICB9XG4gIGlmIChcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiZcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wICE9PSB1bmRlZmluZWRcbiAgKSB7XG4gICAgLy8gSUUgc3VwcG9ydC5cbiAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgfVxuICByZXR1cm4gMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlbGF0aXZlU2Nyb2xsVG9wKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcbiAgcmV0dXJuIGVsZW1lbnQgPT09IHdpbmRvd1xuICAgID8gZ2V0V2luZG93U2Nyb2xsUG9zKClcbiAgICA6IGVsZW1lbnQuc2Nyb2xsVG9wIC0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JvbGxIZWlnaHQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBudW1iZXIge1xuICByZXR1cm4gZWxlbWVudCA9PT0gd2luZG93ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxuICAgID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodFxuICAgIDogZWxlbWVudC5zY3JvbGxIZWlnaHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JvbGxQb3MoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBudW1iZXIge1xuICByZXR1cm4gZWxlbWVudCA9PT0gd2luZG93ID8gZ2V0V2luZG93U2Nyb2xsUG9zKCkgOiBlbGVtZW50LnNjcm9sbFRvcDtcbn1cbiIsIi8vIEBmbG93XG5leHBvcnQgY29uc3QgRGVmYXVsdExheW91dFN5bWJvbCA9IFN5bWJvbCgnZGVmYXVsdCcpO1xuZXhwb3J0IGNvbnN0IFVuaWZvcm1Sb3dMYXlvdXRTeW1ib2wgPSBTeW1ib2woJ3VuaWZvcm1Sb3cnKTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgdHlwZSB7IENhY2hlIH0gZnJvbSAnLi9DYWNoZS5qcyc7XG5cbmV4cG9ydCB0eXBlIFBvc2l0aW9uID0ge1xuICB0b3A6IG51bWJlcixcbiAgbGVmdDogbnVtYmVyLFxuICB3aWR0aDogbnVtYmVyLFxuICBoZWlnaHQ6IG51bWJlcixcbn07XG5cbmNvbnN0IG1pbmRleCA9IGFyciA9PiB7XG4gIGxldCBpZHggPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChhcnJbaV0gPCBhcnJbaWR4XSkge1xuICAgICAgaWR4ID0gaTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGlkeDtcbn07XG5cbmNvbnN0IG9mZnNjcmVlbiA9ICh3aWR0aCwgaGVpZ2h0ID0gSW5maW5pdHkpID0+ICh7XG4gIHRvcDogLTk5OTksXG4gIGxlZnQ6IC05OTk5LFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IDxUPih7XG4gIGNhY2hlLFxuICBjb2x1bW5XaWR0aCA9IDIzNixcbiAgZ3V0dGVyID0gMTQsXG4gIG1pbkNvbHMgPSAyLFxuICB3aWR0aCxcbn06IHt8XG4gIGNvbHVtbldpZHRoPzogbnVtYmVyLFxuICBndXR0ZXI/OiBudW1iZXIsXG4gIGNhY2hlOiBDYWNoZTxULCBudW1iZXI+LFxuICBtaW5Db2xzPzogbnVtYmVyLFxuICB3aWR0aD86ID9udW1iZXIsXG58fSkgPT4gKGl0ZW1zOiBBcnJheTwqPik6IEFycmF5PFBvc2l0aW9uPiA9PiB7XG4gIGlmICh3aWR0aCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGl0ZW1zLm1hcCgoKSA9PiBvZmZzY3JlZW4oY29sdW1uV2lkdGgpKTtcbiAgfVxuXG4gIGNvbnN0IGNvbHVtbldpZHRoQW5kR3V0dGVyID0gY29sdW1uV2lkdGggKyBndXR0ZXI7XG4gIGNvbnN0IGNvbHVtbkNvdW50ID0gTWF0aC5tYXgoXG4gICAgTWF0aC5mbG9vcigod2lkdGggKyBndXR0ZXIpIC8gY29sdW1uV2lkdGhBbmRHdXR0ZXIpLFxuICAgIG1pbkNvbHNcbiAgKTtcbiAgLy8gdGhlIHRvdGFsIGhlaWdodCBvZiBlYWNoIGNvbHVtblxuICBjb25zdCBoZWlnaHRzID0gbmV3IEFycmF5KGNvbHVtbkNvdW50KS5maWxsKDApO1xuICBjb25zdCBjZW50ZXJPZmZzZXQgPSBNYXRoLm1heChcbiAgICBNYXRoLmZsb29yKCh3aWR0aCAtIGNvbHVtbldpZHRoQW5kR3V0dGVyICogY29sdW1uQ291bnQgKyBndXR0ZXIpIC8gMiksXG4gICAgMFxuICApO1xuXG4gIHJldHVybiBpdGVtcy5yZWR1Y2UoKGFjYywgaXRlbSkgPT4ge1xuICAgIGNvbnN0IHBvc2l0aW9ucyA9IGFjYztcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgY29uc3QgaGVpZ2h0ID0gY2FjaGUuZ2V0KGl0ZW0pO1xuICAgIGxldCBwb3NpdGlvbjtcblxuICAgIGlmIChoZWlnaHQgPT0gbnVsbCkge1xuICAgICAgcG9zaXRpb24gPSBvZmZzY3JlZW4oY29sdW1uV2lkdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBoZWlnaHRBbmRHdXR0ZXIgPSBoZWlnaHQgKyBndXR0ZXI7XG4gICAgICBjb25zdCBjb2wgPSBtaW5kZXgoaGVpZ2h0cyk7XG4gICAgICBjb25zdCB0b3AgPSBoZWlnaHRzW2NvbF07XG4gICAgICBjb25zdCBsZWZ0ID0gY29sICogY29sdW1uV2lkdGhBbmRHdXR0ZXIgKyBjZW50ZXJPZmZzZXQ7XG5cbiAgICAgIGhlaWdodHNbY29sXSArPSBoZWlnaHRBbmRHdXR0ZXI7XG4gICAgICBwb3NpdGlvbiA9IHsgdG9wLCBsZWZ0LCB3aWR0aDogY29sdW1uV2lkdGgsIGhlaWdodCB9O1xuICAgIH1cbiAgICBwb3NpdGlvbnMucHVzaChwb3NpdGlvbik7XG4gICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgfSwgW10pO1xufTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgdHlwZSB7IENhY2hlIH0gZnJvbSAnLi9DYWNoZS5qcyc7XG5cbnR5cGUgUG9zaXRpb24gPSB7IHRvcDogbnVtYmVyLCBsZWZ0OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyIH07XG5cbmNvbnN0IG9mZnNjcmVlbiA9ICh3aWR0aCwgaGVpZ2h0ID0gSW5maW5pdHkpID0+ICh7XG4gIHRvcDogLTk5OTksXG4gIGxlZnQ6IC05OTk5LFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IDxUPih7XG4gIGNhY2hlLFxuICBjb2x1bW5XaWR0aCA9IDIzNixcbiAgZ3V0dGVyID0gMTQsXG4gIHdpZHRoLFxuICBtaW5Db2xzID0gMyxcbn06IHt8XG4gIGNhY2hlOiBDYWNoZTxULCBudW1iZXI+LFxuICBjb2x1bW5XaWR0aD86IG51bWJlcixcbiAgZ3V0dGVyPzogbnVtYmVyLFxuICB3aWR0aD86ID9udW1iZXIsXG4gIG1pbkNvbHM/OiBudW1iZXIsXG58fSkgPT4gKGl0ZW1zOiBBcnJheTxUPik6IEFycmF5PFBvc2l0aW9uPiA9PiB7XG4gIGlmICh3aWR0aCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGl0ZW1zLm1hcCgoKSA9PiBvZmZzY3JlZW4oY29sdW1uV2lkdGgpKTtcbiAgfVxuXG4gIGNvbnN0IGNvbHVtbldpZHRoQW5kR3V0dGVyID0gY29sdW1uV2lkdGggKyBndXR0ZXI7XG4gIGNvbnN0IGNvbHVtbkNvdW50ID0gTWF0aC5tYXgoXG4gICAgTWF0aC5mbG9vcigod2lkdGggKyBndXR0ZXIpIC8gY29sdW1uV2lkdGhBbmRHdXR0ZXIpLFxuICAgIG1pbkNvbHNcbiAgKTtcblxuICBjb25zdCBwb3NpdGlvbnMgPSBbXTtcbiAgY29uc3QgaGVpZ2h0cyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBsZXQgcG9zaXRpb247XG4gICAgY29uc3QgaGVpZ2h0ID0gY2FjaGUuZ2V0KGl0ZW1zW2ldKTtcblxuICAgIGlmIChoZWlnaHQgPT0gbnVsbCkge1xuICAgICAgcG9zaXRpb24gPSBvZmZzY3JlZW4oY29sdW1uV2lkdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb2x1bW4gPSBpICUgY29sdW1uQ291bnQ7XG4gICAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKGkgLyBjb2x1bW5Db3VudCk7XG5cbiAgICAgIGlmIChjb2x1bW4gPT09IDAgfHwgaGVpZ2h0ID4gaGVpZ2h0c1tyb3ddKSB7XG4gICAgICAgIGhlaWdodHNbcm93XSA9IGhlaWdodDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdG9wID1cbiAgICAgICAgcm93ID4gMFxuICAgICAgICAgID8gaGVpZ2h0cy5zbGljZSgwLCByb3cpLnJlZHVjZSgoc3VtLCB5KSA9PiBzdW0gKyB5ICsgZ3V0dGVyLCAwKVxuICAgICAgICAgIDogMDtcblxuICAgICAgcG9zaXRpb24gPSB7XG4gICAgICAgIHRvcCxcbiAgICAgICAgbGVmdDogY29sdW1uICogY29sdW1uV2lkdGhBbmRHdXR0ZXIsXG4gICAgICAgIHdpZHRoOiBjb2x1bW5XaWR0aCxcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgfTtcbiAgICB9XG4gICAgcG9zaXRpb25zLnB1c2gocG9zaXRpb24pO1xuICB9XG4gIHJldHVybiBwb3NpdGlvbnM7XG59O1xuIiwiLy8gQGZsb3dcbmltcG9ydCB0eXBlIHsgQ2FjaGUgfSBmcm9tICcuL0NhY2hlLmpzJztcblxudHlwZSBQb3NpdGlvbiA9IHsgdG9wOiBudW1iZXIsIGxlZnQ6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIgfTtcblxuY29uc3QgbWluZGV4ID0gYXJyID0+IHtcbiAgbGV0IGlkeCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGFycltpXSA8IGFycltpZHhdKSB7XG4gICAgICBpZHggPSBpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaWR4O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgPFQ+KHtcbiAgZ3V0dGVyID0gMCxcbiAgY2FjaGUsXG4gIG1pbkNvbHMgPSAyLFxuICBpZGVhbENvbHVtbldpZHRoID0gMjQwLFxuICB3aWR0aCxcbn06IHt8XG4gIGd1dHRlcj86IG51bWJlcixcbiAgY2FjaGU6IENhY2hlPFQsIG51bWJlcj4sXG4gIG1pbkNvbHM/OiBudW1iZXIsXG4gIGlkZWFsQ29sdW1uV2lkdGg/OiBudW1iZXIsXG4gIHdpZHRoPzogP251bWJlcixcbnx9KSA9PiB7XG4gIGlmICh3aWR0aCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIChpdGVtczogQXJyYXk8bWl4ZWQ+KTogQXJyYXk8UG9zaXRpb24+ID0+XG4gICAgICBpdGVtcy5tYXAoKCkgPT4gKHtcbiAgICAgICAgdG9wOiBJbmZpbml0eSxcbiAgICAgICAgbGVmdDogSW5maW5pdHksXG4gICAgICAgIHdpZHRoOiBJbmZpbml0eSxcbiAgICAgICAgaGVpZ2h0OiBJbmZpbml0eSxcbiAgICAgIH0pKTtcbiAgfVxuXG4gIC8vIFwiVGhpcyBpcyBraW5kIG9mIGNyYXp5IVwiIC0geW91XG4gIC8vIFllcywgaW5kZWVkLiBUaGUgXCJndWVzc2luZ1wiIGhlcmUgaXMgbWVhbnQgdG8gcmVwbGljYXRlIHRoZSBwYXNzIHRoYXQgdGhlXG4gIC8vIG9yaWdpbmFsIGltcGxlbWVudGF0aW9uIHRha2VzIHdpdGggQ1NTLlxuICBjb25zdCBjb2xndWVzcyA9IE1hdGguZmxvb3Iod2lkdGggLyBpZGVhbENvbHVtbldpZHRoKTtcbiAgY29uc3QgY29sdW1uQ291bnQgPSBNYXRoLm1heChcbiAgICBNYXRoLmZsb29yKCh3aWR0aCAtIGNvbGd1ZXNzICogZ3V0dGVyKSAvIGlkZWFsQ29sdW1uV2lkdGgpLFxuICAgIG1pbkNvbHNcbiAgKTtcbiAgY29uc3QgY29sdW1uV2lkdGggPSBNYXRoLmZsb29yKHdpZHRoIC8gY29sdW1uQ291bnQpO1xuXG4gIHJldHVybiAoaXRlbXM6IEFycmF5PFQ+KSA9PiB7XG4gICAgLy8gdGhlIHRvdGFsIGhlaWdodCBvZiBlYWNoIGNvbHVtblxuICAgIGNvbnN0IGhlaWdodHMgPSBuZXcgQXJyYXkoY29sdW1uQ291bnQpLmZpbGwoMCk7XG5cbiAgICByZXR1cm4gaXRlbXMucmVkdWNlKChhY2MsIGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IGFjYztcbiAgICAgIGNvbnN0IGhlaWdodCA9IGNhY2hlLmdldChpdGVtKTtcbiAgICAgIGxldCBwb3NpdGlvbjtcblxuICAgICAgaWYgKGhlaWdodCA9PSBudWxsKSB7XG4gICAgICAgIHBvc2l0aW9uID0ge1xuICAgICAgICAgIHRvcDogSW5maW5pdHksXG4gICAgICAgICAgbGVmdDogSW5maW5pdHksXG4gICAgICAgICAgd2lkdGg6IGNvbHVtbldpZHRoLFxuICAgICAgICAgIGhlaWdodDogSW5maW5pdHksXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjb2wgPSBtaW5kZXgoaGVpZ2h0cyk7XG4gICAgICAgIGNvbnN0IHRvcCA9IGhlaWdodHNbY29sXTtcbiAgICAgICAgY29uc3QgbGVmdCA9IGNvbCAqIGNvbHVtbldpZHRoICsgZ3V0dGVyIC8gMjtcblxuICAgICAgICBoZWlnaHRzW2NvbF0gKz0gaGVpZ2h0O1xuICAgICAgICBwb3NpdGlvbiA9IHtcbiAgICAgICAgICB0b3AsXG4gICAgICAgICAgbGVmdCxcbiAgICAgICAgICB3aWR0aDogY29sdW1uV2lkdGggLSBndXR0ZXIsXG4gICAgICAgICAgaGVpZ2h0LFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBwb3NpdGlvbnMucHVzaChwb3NpdGlvbik7XG4gICAgICByZXR1cm4gcG9zaXRpb25zO1xuICAgIH0sIFtdKTtcbiAgfTtcbn07XG4iLCIvLyBAZmxvd1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFzb25yeUxheW91dCB7fVxuIiwiLy8gQGZsb3dcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuaWZvcm1Sb3dMYXlvdXQge31cbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4vZGVib3VuY2UuanMnO1xuaW1wb3J0IEZldGNoSXRlbXMgZnJvbSAnLi9GZXRjaEl0ZW1zLmpzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9NYXNvbnJ5LmNzcyc7XG5pbXBvcnQgU2Nyb2xsQ29udGFpbmVyIGZyb20gJy4vU2Nyb2xsQ29udGFpbmVyLmpzJztcbmltcG9ydCB0aHJvdHRsZSBmcm9tICcuL3Rocm90dGxlLmpzJztcbmltcG9ydCB0eXBlIHsgQ2FjaGUgfSBmcm9tICcuL0NhY2hlLmpzJztcbmltcG9ydCBNZWFzdXJlbWVudFN0b3JlIGZyb20gJy4vTWVhc3VyZW1lbnRTdG9yZS5qcyc7XG5pbXBvcnQge1xuICBnZXRFbGVtZW50SGVpZ2h0LFxuICBnZXRSZWxhdGl2ZVNjcm9sbFRvcCxcbiAgZ2V0U2Nyb2xsUG9zLFxufSBmcm9tICcuL3Njcm9sbFV0aWxzLmpzJztcbmltcG9ydCB7XG4gIERlZmF1bHRMYXlvdXRTeW1ib2wsXG4gIFVuaWZvcm1Sb3dMYXlvdXRTeW1ib2wsXG59IGZyb20gJy4vbGVnYWN5TGF5b3V0U3ltYm9scy5qcyc7XG5pbXBvcnQgZGVmYXVsdExheW91dCBmcm9tICcuL2RlZmF1bHRMYXlvdXQuanMnO1xuaW1wb3J0IHVuaWZvcm1Sb3dMYXlvdXQgZnJvbSAnLi91bmlmb3JtUm93TGF5b3V0LmpzJztcbmltcG9ydCBmdWxsV2lkdGhMYXlvdXQgZnJvbSAnLi9mdWxsV2lkdGhMYXlvdXQuanMnO1xuaW1wb3J0IExlZ2FjeU1hc29ucnlMYXlvdXQgZnJvbSAnLi9sYXlvdXRzL01hc29ucnlMYXlvdXQuanMnO1xuaW1wb3J0IExlZ2FjeVVuaWZvcm1Sb3dMYXlvdXQgZnJvbSAnLi9sYXlvdXRzL1VuaWZvcm1Sb3dMYXlvdXQuanMnO1xuXG50eXBlIExheW91dCA9XG4gIHwgdHlwZW9mIERlZmF1bHRMYXlvdXRTeW1ib2xcbiAgfCB0eXBlb2YgVW5pZm9ybVJvd0xheW91dFN5bWJvbFxuICB8IExlZ2FjeU1hc29ucnlMYXlvdXRcbiAgfCBMZWdhY3lVbmlmb3JtUm93TGF5b3V0O1xuXG50eXBlIFByb3BzPFQ+ID0ge3xcbiAgY29sdW1uV2lkdGg/OiBudW1iZXIsXG4gIGNvbXA6IFJlYWN0LkNvbXBvbmVudFR5cGU8e1xuICAgIGRhdGE6IFQsXG4gICAgaXRlbUlkeDogbnVtYmVyLFxuICAgIGlzTWVhc3VyaW5nOiBib29sZWFuLFxuICB9PixcbiAgZmxleGlibGU/OiBib29sZWFuLFxuICBndXR0ZXJXaWR0aD86IG51bWJlcixcbiAgaXRlbXM6IEFycmF5PFQ+LFxuICBtZWFzdXJlbWVudFN0b3JlOiBDYWNoZTxULCAqPixcbiAgbWluQ29sczogbnVtYmVyLFxuICBsYXlvdXQ/OiBMYXlvdXQsXG4gIC8vIFN1cHBvcnQgbGVnYWN5IGxvYWRJdGVtcyB1c2FnZS5cbiAgLy8gVE9ETzogU2ltcGxpZnkgbm9uIGZhbHNleSBmbG93dHlwZS5cbiAgbG9hZEl0ZW1zPzpcbiAgICB8IGZhbHNlXG4gICAgfCAoKFxuICAgICAgICA/e1xuICAgICAgICAgIGZyb206IG51bWJlcixcbiAgICAgICAgfVxuICAgICAgKSA9PiB2b2lkIHwgYm9vbGVhbiB8IHt9KSxcbiAgc2Nyb2xsQ29udGFpbmVyPzogKCkgPT4gSFRNTEVsZW1lbnQsXG4gIHZpcnR1YWxCb3VuZHNUb3A/OiBudW1iZXIsXG4gIHZpcnR1YWxCb3VuZHNCb3R0b20/OiBudW1iZXIsXG4gIHZpcnR1YWxpemU/OiBib29sZWFuLFxufH07XG5cbnR5cGUgU3RhdGU8VD4gPSB7fFxuICBoYXNQZW5kaW5nTWVhc3VyZW1lbnRzOiBib29sZWFuLFxuICBpc0ZldGNoaW5nOiBib29sZWFuLFxuICBpdGVtczogQXJyYXk8VD4sXG4gIHNjcm9sbFRvcDogbnVtYmVyLFxuICB3aWR0aDogP251bWJlcixcbnx9O1xuXG5jb25zdCBSRVNJWkVfREVCT1VOQ0UgPSAzMDA7XG4vLyBNdWx0aXBsaWVkIGFnYWluc3QgY29udGFpbmVyIGhlaWdodC5cbi8vIFRoZSBhbW91bnQgb2YgZXh0cmEgYnVmZmVyIHNwYWNlIGZvciBwb3B1bGF0aW5nIHZpc2libGUgaXRlbXMuXG5jb25zdCBWSVJUVUFMX0JVRkZFUl9GQUNUT1IgPSAwLjc7XG5cbmNvbnN0IGxheW91dE51bWJlclRvQ3NzRGltZW5zaW9uID0gbiA9PiAobiAhPT0gSW5maW5pdHkgPyBuIDogdW5kZWZpbmVkKTtcblxuLyoqXG4gKiBOT1RFOiBUaGlzIGlzIHRvIGJlIHJlcGxhY2VkIGJ5IE1hc29ucnlJbmZpbml0ZUJldGEgd2hlbiBpdCBpcyByZWFkeVxuICogTk9URTogUGxlYXNlIGRvIG5vdCBtb2RpZnkgdGhpcyBvciBtYWtlIHN1cmUgY2hhbmdlcyBpbiBoZXJlIGFyZSBhbHNvXG4gKiAgICAgICByZXBsaWNhdGVkIGluIE1hc29ucnlCZXRhLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXNvbnJ5PFQ+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPFQ+LCBTdGF0ZTxUPj4ge1xuICBzdGF0aWMgY3JlYXRlTWVhc3VyZW1lbnRTdG9yZSgpIHtcbiAgICByZXR1cm4gbmV3IE1lYXN1cmVtZW50U3RvcmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxheXMgcmVzaXplIGhhbmRsaW5nIGluIGNhc2UgdGhlIHNjcm9sbCBjb250YWluZXIgaXMgc3RpbGwgYmVpbmcgcmVzaXplZC5cbiAgICovXG4gIGhhbmRsZVJlc2l6ZSA9IGRlYm91bmNlKCgpID0+IHtcbiAgICBpZiAodGhpcy5ncmlkV3JhcHBlcikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHdpZHRoOiB0aGlzLmdyaWRXcmFwcGVyLmNsaWVudFdpZHRoIH0pO1xuICAgIH1cbiAgfSwgUkVTSVpFX0RFQk9VTkNFKTtcblxuICB1cGRhdGVTY3JvbGxQb3NpdGlvbiA9IHRocm90dGxlKCgpID0+IHtcbiAgICBpZiAoIXRoaXMuc2Nyb2xsQ29udGFpbmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNjcm9sbENvbnRhaW5lciA9IHRoaXMuc2Nyb2xsQ29udGFpbmVyLmdldFNjcm9sbENvbnRhaW5lclJlZigpO1xuXG4gICAgaWYgKCFzY3JvbGxDb250YWluZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNjcm9sbFRvcDogZ2V0U2Nyb2xsUG9zKHNjcm9sbENvbnRhaW5lciksXG4gICAgfSk7XG4gIH0pO1xuXG4gIG1lYXN1cmVDb250YWluZXJBc3luYyA9IGRlYm91bmNlKCgpID0+IHtcbiAgICB0aGlzLm1lYXN1cmVDb250YWluZXIoKTtcbiAgfSwgMCk7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGUgcHJlZmVycmVkL3RhcmdldCBpdGVtIHdpZHRoLiBJZiBgZmxleGlibGVgIGlzIHNldCwgdGhlIGl0ZW0gd2lkdGggd2lsbFxuICAgICAqIGdyb3cgdG8gZmlsbCBjb2x1bW4gc3BhY2UsIGFuZCBzaHJpbmsgdG8gZml0IGlmIGJlbG93IG1pbiBjb2x1bW5zLlxuICAgICAqL1xuICAgIGNvbHVtbldpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbXBvbmVudCB0byByZW5kZXIuXG4gICAgICovXG4gICAgLyogZXNsaW50IHJlYWN0L25vLXVudXNlZC1wcm9wLXR5cGVzOiAwICovXG4gICAgY29tcDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBwcmVmZXJyZWQvdGFyZ2V0IGl0ZW0gd2lkdGguIEl0ZW0gd2lkdGggd2lsbCBncm93IHRvIGZpbGxcbiAgICAgKiBjb2x1bW4gc3BhY2UsIGFuZCBzaHJpbmsgdG8gZml0IGlmIGJlbG93IG1pbiBjb2x1bW5zLlxuICAgICAqL1xuICAgIGZsZXhpYmxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBhbW91bnQgb2Ygc3BhY2UgYmV0d2VlbiBlYWNoIGl0ZW0uXG4gICAgICovXG4gICAgZ3V0dGVyV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBhbGwgb2JqZWN0cyB0byBkaXNwbGF5IGluIHRoZSBncmlkLlxuICAgICAqL1xuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe30pKS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogTWVhc3VyZW1lbnQgU3RvcmVcbiAgICAgKi9cbiAgICBtZWFzdXJlbWVudFN0b3JlOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihNZWFzdXJlbWVudFN0b3JlKSxcblxuICAgIC8qKlxuICAgICAqIExheW91dCBzeXN0ZW0gdG8gdXNlIGZvciBpdGVtc1xuICAgICAqL1xuICAgIGxheW91dDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuaW5zdGFuY2VPZihMZWdhY3lNYXNvbnJ5TGF5b3V0KSxcbiAgICAgIFByb3BUeXBlcy5pbnN0YW5jZU9mKExlZ2FjeVVuaWZvcm1Sb3dMYXlvdXQpLFxuICAgICAgUHJvcFR5cGVzLnN5bWJvbCxcbiAgICBdKSxcblxuICAgIC8qKlxuICAgICAqIEEgY2FsbGJhY2sgd2hpY2ggdGhlIGdyaWQgY2FsbHMgd2hlbiB3ZSBuZWVkIHRvIGxvYWQgbW9yZSBpdGVtcyBhcyB0aGUgdXNlciBzY3JvbGxzLlxuICAgICAqIFRoZSBjYWxsYmFjayBzaG91bGQgdXBkYXRlIHRoZSBzdGF0ZSBvZiB0aGUgaXRlbXMsIGFuZCBwYXNzIHRob3NlIGluIGFzIHByb3BzXG4gICAgICogdG8gdGhpcyBjb21wb25lbnQuXG4gICAgICovXG4gICAgbG9hZEl0ZW1zOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIE1pbmltdW0gbnVtYmVyIG9mIGNvbHVtbnMgdG8gZGlzcGxheS5cbiAgICAgKi9cbiAgICBtaW5Db2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCB0aGUgZ3JpZCBjYWxscyB0byBnZXQgdGhlIHNjcm9sbCBjb250YWluZXIuXG4gICAgICogVGhpcyBpcyByZXF1aXJlZCBpZiB0aGUgZ3JpZCBpcyBleHBlY3RlZCB0byBiZSBzY3JvbGxhYmxlLlxuICAgICAqL1xuICAgIHNjcm9sbENvbnRhaW5lcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIG9yIG5vdCB0byB1c2UgYWN0dWFsIHZpcnR1YWxpemF0aW9uXG4gICAgICovXG4gICAgdmlydHVhbGl6ZTogUHJvcFR5cGVzLmJvb2wsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb2x1bW5XaWR0aDogMjM2LFxuICAgIG1lYXN1cmVtZW50U3RvcmU6IG5ldyBNZWFzdXJlbWVudFN0b3JlKCksXG4gICAgbWluQ29sczogMyxcbiAgICBsYXlvdXQ6IERlZmF1bHRMYXlvdXRTeW1ib2wsXG4gICAgbG9hZEl0ZW1zOiAoKSA9PiB7fSxcbiAgICB2aXJ0dWFsaXplOiBmYWxzZSxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHM8VD4pIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmNvbnRhaW5lckhlaWdodCA9IDA7XG4gICAgdGhpcy5jb250YWluZXJPZmZzZXQgPSAwO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhhc1BlbmRpbmdNZWFzdXJlbWVudHM6IHByb3BzLml0ZW1zLnNvbWUoXG4gICAgICAgIGl0ZW0gPT4gISFpdGVtICYmICFwcm9wcy5tZWFzdXJlbWVudFN0b3JlLmhhcyhpdGVtKVxuICAgICAgKSxcbiAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLXVudXNlZC1zdGF0ZVxuICAgICAgaXRlbXM6IHByb3BzLml0ZW1zLFxuICAgICAgc2Nyb2xsVG9wOiAwLFxuICAgICAgd2lkdGg6IHVuZGVmaW5lZCxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgaG9va3MgYWZ0ZXIgdGhlIGNvbXBvbmVudCBtb3VudHMuXG4gICAqL1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVSZXNpemUpO1xuXG4gICAgdGhpcy5tZWFzdXJlQ29udGFpbmVyKCk7XG5cbiAgICBsZXQgeyBzY3JvbGxUb3AgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKHRoaXMuc2Nyb2xsQ29udGFpbmVyICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IHNjcm9sbENvbnRhaW5lciA9IHRoaXMuc2Nyb2xsQ29udGFpbmVyLmdldFNjcm9sbENvbnRhaW5lclJlZigpO1xuICAgICAgaWYgKHNjcm9sbENvbnRhaW5lcikge1xuICAgICAgICBzY3JvbGxUb3AgPSBnZXRTY3JvbGxQb3Moc2Nyb2xsQ29udGFpbmVyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgc2Nyb2xsVG9wLFxuICAgICAgd2lkdGg6IHRoaXMuZ3JpZFdyYXBwZXIgPyB0aGlzLmdyaWRXcmFwcGVyLmNsaWVudFdpZHRoIDogcHJldlN0YXRlLndpZHRoLFxuICAgIH0pKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IFByb3BzPFQ+LCBwcmV2U3RhdGU6IFN0YXRlPFQ+KSB7XG4gICAgY29uc3QgeyBpdGVtcywgbWVhc3VyZW1lbnRTdG9yZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHRoaXMubWVhc3VyZUNvbnRhaW5lckFzeW5jKCk7XG5cbiAgICBpZiAocHJldlN0YXRlLndpZHRoICE9IG51bGwgJiYgdGhpcy5zdGF0ZS53aWR0aCAhPT0gcHJldlN0YXRlLndpZHRoKSB7XG4gICAgICBtZWFzdXJlbWVudFN0b3JlLnJlc2V0KCk7XG4gICAgfVxuICAgIC8vIGNhbGN1bGF0ZSB3aGV0aGVyIHdlIHN0aWxsIGhhdmUgcGVuZGluZyBtZWFzdXJlbWVudHNcbiAgICBjb25zdCBoYXNQZW5kaW5nTWVhc3VyZW1lbnRzID0gaXRlbXMuc29tZShcbiAgICAgIGl0ZW0gPT4gISFpdGVtICYmICFtZWFzdXJlbWVudFN0b3JlLmhhcyhpdGVtKVxuICAgICk7XG4gICAgaWYgKFxuICAgICAgaGFzUGVuZGluZ01lYXN1cmVtZW50cyB8fFxuICAgICAgaGFzUGVuZGluZ01lYXN1cmVtZW50cyAhPT0gdGhpcy5zdGF0ZS5oYXNQZW5kaW5nTWVhc3VyZW1lbnRzIHx8XG4gICAgICBwcmV2U3RhdGUud2lkdGggPT0gbnVsbFxuICAgICkge1xuICAgICAgdGhpcy5pbnNlcnRBbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGhhc1BlbmRpbmdNZWFzdXJlbWVudHMsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBsaXN0ZW5lcnMgd2hlbiB1bm1vdW50aW5nLlxuICAgKi9cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMuaW5zZXJ0QW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuaW5zZXJ0QW5pbWF0aW9uRnJhbWUpO1xuICAgIH1cblxuICAgIC8vIE1ha2Ugc3VyZSBhc3luYyBtZXRob2RzIGFyZSBjYW5jZWxsZWQuXG4gICAgdGhpcy5tZWFzdXJlQ29udGFpbmVyQXN5bmMuY2xlYXJUaW1lb3V0KCk7XG4gICAgdGhpcy5oYW5kbGVSZXNpemUuY2xlYXJUaW1lb3V0KCk7XG4gICAgdGhpcy51cGRhdGVTY3JvbGxQb3NpdGlvbi5jbGVhclRpbWVvdXQoKTtcblxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVJlc2l6ZSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzOiBQcm9wczxUPiwgc3RhdGU6IFN0YXRlPFQ+KSB7XG4gICAgY29uc3QgeyBpdGVtcywgbWVhc3VyZW1lbnRTdG9yZSB9ID0gcHJvcHM7XG4gICAgLy8gd2hlbmV2ZXIgd2UncmUgcmVjZWl2aW5nIG5ldyBwcm9wcywgZGV0ZXJtaW5lIHdoZXRoZXIgYW55IGl0ZW1zIG5lZWQgdG8gYmUgbWVhc3VyZWRcbiAgICAvLyBUT0RPIC0gd2Ugc2hvdWxkIHRyZWF0IGl0ZW1zIGFzIGltbXV0YWJsZVxuICAgIGNvbnN0IGhhc1BlbmRpbmdNZWFzdXJlbWVudHMgPSBpdGVtcy5zb21lKFxuICAgICAgaXRlbSA9PiAhbWVhc3VyZW1lbnRTdG9yZS5oYXMoaXRlbSlcbiAgICApO1xuXG4gICAgLy8gU2hhbGxvdyBjb21wYXJlIGFsbCBpdGVtcywgaWYgYW55IGNoYW5nZSByZWZsb3cgdGhlIGdyaWQuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgLy8gV2UndmUgcmVhY2hlZCB0aGUgZW5kIG9mIG91ciBjdXJyZW50IHByb3BzIGFuZCBldmVyeXRoaW5nIG1hdGNoZXMuXG4gICAgICAvLyBJZiB3ZSBoaXQgdGhpcyBjYXNlIGl0IG1lYW5zIHdlIG5lZWQgdG8gaW5zZXJ0IG5ldyBpdGVtcy5cbiAgICAgIGlmIChzdGF0ZS5pdGVtc1tpXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaGFzUGVuZGluZ01lYXN1cmVtZW50cyxcbiAgICAgICAgICBpdGVtcyxcbiAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgLy8gUmVzZXQgZ3JpZCBpdGVtcyB3aGVuOlxuICAgICAgaWYgKFxuICAgICAgICAvLyBBbiBpdGVtIG9iamVjdCByZWYgZG9lcyBub3QgbWF0Y2guXG4gICAgICAgIGl0ZW1zW2ldICE9PSBzdGF0ZS5pdGVtc1tpXSB8fFxuICAgICAgICAvLyBPciBsZXNzIGl0ZW1zIHRoYW4gd2UgY3VycmVudGx5IGhhdmUgYXJlIHBhc3NlZCBpbi5cbiAgICAgICAgaXRlbXMubGVuZ3RoIDwgc3RhdGUuaXRlbXMubGVuZ3RoXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoYXNQZW5kaW5nTWVhc3VyZW1lbnRzLFxuICAgICAgICAgIGl0ZW1zLFxuICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlc2V0IGl0ZW1zIGlmIG5ldyBpdGVtcyBhcnJheSBpcyBlbXB0eS5cbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwICYmIHN0YXRlLml0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhhc1BlbmRpbmdNZWFzdXJlbWVudHMsXG4gICAgICAgIGl0ZW1zLFxuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChoYXNQZW5kaW5nTWVhc3VyZW1lbnRzICE9PSBzdGF0ZS5oYXNQZW5kaW5nTWVhc3VyZW1lbnRzKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgd2UgYWx3YXlzIHVwZGF0ZSBoYXNQZW5kaW5nTWVhc3VyZW1lbnRzXG4gICAgICByZXR1cm4ge1xuICAgICAgICBoYXNQZW5kaW5nTWVhc3VyZW1lbnRzLFxuICAgICAgICBpdGVtcyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIG51bGwgdG8gaW5kaWNhdGUgbm8gY2hhbmdlIHRvIHN0YXRlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgc2V0R3JpZFdyYXBwZXJSZWYgPSAocmVmOiA/SFRNTEVsZW1lbnQpID0+IHtcbiAgICB0aGlzLmdyaWRXcmFwcGVyID0gcmVmO1xuICB9O1xuXG4gIHNldFNjcm9sbENvbnRhaW5lclJlZiA9IChyZWY6ID9TY3JvbGxDb250YWluZXIpID0+IHtcbiAgICB0aGlzLnNjcm9sbENvbnRhaW5lciA9IHJlZjtcbiAgfTtcblxuICBmZXRjaE1vcmUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBsb2FkSXRlbXMgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGxvYWRJdGVtcyAmJiB0eXBlb2YgbG9hZEl0ZW1zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICB7XG4gICAgICAgICAgaXNGZXRjaGluZzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4gbG9hZEl0ZW1zKHsgZnJvbTogdGhpcy5wcm9wcy5pdGVtcy5sZW5ndGggfSlcbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnRhaW5lckhlaWdodDogbnVtYmVyO1xuXG4gIGNvbnRhaW5lck9mZnNldDogbnVtYmVyO1xuXG4gIGdyaWRXcmFwcGVyOiA/SFRNTEVsZW1lbnQ7XG5cbiAgaW5zZXJ0QW5pbWF0aW9uRnJhbWU6IEFuaW1hdGlvbkZyYW1lSUQ7XG5cbiAgbWVhc3VyZVRpbWVvdXQ6IFRpbWVvdXRJRDtcblxuICBzY3JvbGxDb250YWluZXI6ID9TY3JvbGxDb250YWluZXI7XG5cbiAgbWVhc3VyZUNvbnRhaW5lcigpIHtcbiAgICBpZiAodGhpcy5zY3JvbGxDb250YWluZXIgIT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBzY3JvbGxDb250YWluZXIgfSA9IHRoaXM7XG4gICAgICBjb25zdCBzY3JvbGxDb250YWluZXJSZWYgPSBzY3JvbGxDb250YWluZXIuZ2V0U2Nyb2xsQ29udGFpbmVyUmVmKCk7XG4gICAgICBpZiAoc2Nyb2xsQ29udGFpbmVyUmVmKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVySGVpZ2h0ID0gZ2V0RWxlbWVudEhlaWdodChzY3JvbGxDb250YWluZXJSZWYpO1xuICAgICAgICBjb25zdCBlbCA9IHRoaXMuZ3JpZFdyYXBwZXI7XG4gICAgICAgIGlmIChlbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgY29uc3QgcmVsYXRpdmVTY3JvbGxUb3AgPSBnZXRSZWxhdGl2ZVNjcm9sbFRvcChzY3JvbGxDb250YWluZXJSZWYpO1xuICAgICAgICAgIHRoaXMuY29udGFpbmVyT2Zmc2V0ID1cbiAgICAgICAgICAgIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHJlbGF0aXZlU2Nyb2xsVG9wO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIG1lYXN1cmVtZW50cy9wb3NpdGlvbnMgYW5kIGZvcmNlIGEgcmVmbG93IG9mIHRoZSBlbnRpcmUgZ3JpZC5cbiAgICogT25seSB1c2UgdGhpcyBpZiBhYnNvbHV0ZWx5IG5lY2Vzc2FyeSAtIGV4OiBXZSBuZWVkIHRvIHJlZmxvdyBpdGVtcyBpZiB0aGVcbiAgICogbnVtYmVyIG9mIGNvbHVtbnMgd2Ugd291bGQgZGlzcGxheSBzaG91bGQgY2hhbmdlIGFmdGVyIGEgcmVzaXplLlxuICAgKi9cbiAgcmVmbG93KCkge1xuICAgIHRoaXMucHJvcHMubWVhc3VyZW1lbnRTdG9yZS5yZXNldCgpO1xuICAgIHRoaXMubWVhc3VyZUNvbnRhaW5lcigpO1xuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIHJlbmRlck1hc29ucnlDb21wb25lbnQgPSAoaXRlbURhdGE6IFQsIGlkeDogbnVtYmVyLCBwb3NpdGlvbjogKikgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbXA6IENvbXBvbmVudCxcbiAgICAgIHZpcnR1YWxpemUsXG4gICAgICB2aXJ0dWFsQm91bmRzVG9wLFxuICAgICAgdmlydHVhbEJvdW5kc0JvdHRvbSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCB9ID0gcG9zaXRpb247XG5cbiAgICBsZXQgaXNWaXNpYmxlO1xuICAgIGlmICh0aGlzLnByb3BzLnNjcm9sbENvbnRhaW5lcikge1xuICAgICAgY29uc3QgdmlydHVhbEJ1ZmZlciA9IHRoaXMuY29udGFpbmVySGVpZ2h0ICogVklSVFVBTF9CVUZGRVJfRkFDVE9SO1xuICAgICAgY29uc3Qgb2Zmc2V0U2Nyb2xsUG9zID0gdGhpcy5zdGF0ZS5zY3JvbGxUb3AgLSB0aGlzLmNvbnRhaW5lck9mZnNldDtcbiAgICAgIGNvbnN0IHZpZXdwb3J0VG9wID0gdmlydHVhbEJvdW5kc1RvcFxuICAgICAgICA/IG9mZnNldFNjcm9sbFBvcyAtIHZpcnR1YWxCb3VuZHNUb3BcbiAgICAgICAgOiBvZmZzZXRTY3JvbGxQb3MgLSB2aXJ0dWFsQnVmZmVyO1xuICAgICAgY29uc3Qgdmlld3BvcnRCb3R0b20gPSB2aXJ0dWFsQm91bmRzQm90dG9tXG4gICAgICAgID8gb2Zmc2V0U2Nyb2xsUG9zICsgdGhpcy5jb250YWluZXJIZWlnaHQgKyB2aXJ0dWFsQm91bmRzQm90dG9tXG4gICAgICAgIDogb2Zmc2V0U2Nyb2xsUG9zICsgdGhpcy5jb250YWluZXJIZWlnaHQgKyB2aXJ0dWFsQnVmZmVyO1xuXG4gICAgICBpc1Zpc2libGUgPSAhKFxuICAgICAgICBwb3NpdGlvbi50b3AgKyBwb3NpdGlvbi5oZWlnaHQgPCB2aWV3cG9ydFRvcCB8fFxuICAgICAgICBwb3NpdGlvbi50b3AgPiB2aWV3cG9ydEJvdHRvbVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaWYgbm8gc2Nyb2xsIGNvbnRhaW5lciBpcyBwYXNzZWQgaW4sIGl0ZW1zIHNob3VsZCBhbHdheXMgYmUgdmlzaWJsZVxuICAgICAgaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBpdGVtQ29tcG9uZW50ID0gKFxuICAgICAgPGRpdlxuICAgICAgICBrZXk9e2BpdGVtLSR7aWR4fWB9XG4gICAgICAgIGNsYXNzTmFtZT17W3N0eWxlcy5NYXNvbnJ5X19JdGVtLCBzdHlsZXMuTWFzb25yeV9fSXRlbV9fTW91bnRlZF0uam9pbihcbiAgICAgICAgICAnICdcbiAgICAgICAgKX1cbiAgICAgICAgZGF0YS1ncmlkLWl0ZW1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7bGVmdH1weCkgdHJhbnNsYXRlWSgke3RvcH1weClgLFxuICAgICAgICAgIFdlYmtpdFRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHtsZWZ0fXB4KSB0cmFuc2xhdGVZKCR7dG9wfXB4KWAsXG4gICAgICAgICAgd2lkdGg6IGxheW91dE51bWJlclRvQ3NzRGltZW5zaW9uKHdpZHRoKSxcbiAgICAgICAgICBoZWlnaHQ6IGxheW91dE51bWJlclRvQ3NzRGltZW5zaW9uKGhlaWdodCksXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxDb21wb25lbnQgZGF0YT17aXRlbURhdGF9IGl0ZW1JZHg9e2lkeH0gaXNNZWFzdXJpbmc9e2ZhbHNlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICAgIHJldHVybiB2aXJ0dWFsaXplID8gKGlzVmlzaWJsZSAmJiBpdGVtQ29tcG9uZW50KSB8fCBudWxsIDogaXRlbUNvbXBvbmVudDtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY29sdW1uV2lkdGgsXG4gICAgICBjb21wOiBDb21wb25lbnQsXG4gICAgICBmbGV4aWJsZSxcbiAgICAgIGd1dHRlcldpZHRoOiBndXR0ZXIsXG4gICAgICBtZWFzdXJlbWVudFN0b3JlLFxuICAgICAgaXRlbXMsXG4gICAgICBtaW5Db2xzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgaGFzUGVuZGluZ01lYXN1cmVtZW50cywgd2lkdGggfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBsZXQgbGF5b3V0O1xuICAgIGlmIChmbGV4aWJsZSAmJiB3aWR0aCAhPT0gbnVsbCkge1xuICAgICAgbGF5b3V0ID0gZnVsbFdpZHRoTGF5b3V0KHtcbiAgICAgICAgZ3V0dGVyLFxuICAgICAgICBjYWNoZTogbWVhc3VyZW1lbnRTdG9yZSxcbiAgICAgICAgbWluQ29scyxcbiAgICAgICAgaWRlYWxDb2x1bW5XaWR0aDogY29sdW1uV2lkdGgsXG4gICAgICAgIHdpZHRoLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHRoaXMucHJvcHMubGF5b3V0ID09PSBVbmlmb3JtUm93TGF5b3V0U3ltYm9sIHx8XG4gICAgICB0aGlzLnByb3BzLmxheW91dCBpbnN0YW5jZW9mIExlZ2FjeVVuaWZvcm1Sb3dMYXlvdXRcbiAgICApIHtcbiAgICAgIGxheW91dCA9IHVuaWZvcm1Sb3dMYXlvdXQoe1xuICAgICAgICBjYWNoZTogbWVhc3VyZW1lbnRTdG9yZSxcbiAgICAgICAgY29sdW1uV2lkdGgsXG4gICAgICAgIGd1dHRlcixcbiAgICAgICAgbWluQ29scyxcbiAgICAgICAgd2lkdGgsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGF5b3V0ID0gZGVmYXVsdExheW91dCh7XG4gICAgICAgIGNhY2hlOiBtZWFzdXJlbWVudFN0b3JlLFxuICAgICAgICBjb2x1bW5XaWR0aCxcbiAgICAgICAgZ3V0dGVyLFxuICAgICAgICBtaW5Db2xzLFxuICAgICAgICB3aWR0aCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCBncmlkQm9keTtcbiAgICBpZiAod2lkdGggPT0gbnVsbCAmJiBoYXNQZW5kaW5nTWVhc3VyZW1lbnRzKSB7XG4gICAgICAvLyBXaGVuIGh5cmRhdGluZyBmcm9tIGEgc2VydmVyIHJlbmRlciwgd2UgZG9uJ3QgaGF2ZSB0aGUgd2lkdGggb2YgdGhlIGdyaWRcbiAgICAgIC8vIGFuZCB0aGUgbWVhc3VyZW1lbnQgc3RvcmUgaXMgZW1wdHlcbiAgICAgIGdyaWRCb2R5ID0gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuTWFzb25yeX1cbiAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDAsIHdpZHRoOiAnMTAwJScgfX1cbiAgICAgICAgICByZWY9e3RoaXMuc2V0R3JpZFdyYXBwZXJSZWZ9XG4gICAgICAgID5cbiAgICAgICAgICB7aXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbSkubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IC8vIGtlZXAgdGhpcyBpbiBzeW5jIHdpdGggcmVuZGVyTWFzb25yeUNvbXBvbmVudFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdGF0aWNcIlxuICAgICAgICAgICAgICBkYXRhLWdyaWQtaXRlbVxuICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwcHgpIHRyYW5zbGF0ZVkoMHB4KScsXG4gICAgICAgICAgICAgICAgV2Via2l0VHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwcHgpIHRyYW5zbGF0ZVkoMHB4KScsXG4gICAgICAgICAgICAgICAgd2lkdGg6IGZsZXhpYmxlXG4gICAgICAgICAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgOiBsYXlvdXROdW1iZXJUb0Nzc0RpbWVuc2lvbihjb2x1bW5XaWR0aCksIC8vIHdlIGNhbid0IHNldCBhIHdpZHRoIGZvciBzZXJ2ZXIgcmVuZGVyZWQgZmxleGlibGUgaXRlbXNcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgcmVmPXtlbCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVsICYmICFmbGV4aWJsZSkge1xuICAgICAgICAgICAgICAgICAgLy8gb25seSBtZWFzdXJlIGZsZXhpYmxlIGl0ZW1zIG9uIGNsaWVudFxuICAgICAgICAgICAgICAgICAgbWVhc3VyZW1lbnRTdG9yZS5zZXQoaXRlbSwgZWwuY2xpZW50SGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxDb21wb25lbnQgZGF0YT17aXRlbX0gaXRlbUlkeD17aX0gaXNNZWFzdXJpbmc9e2ZhbHNlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHdpZHRoID09IG51bGwpIHtcbiAgICAgIC8vIFdoZW4gdGhlIHdpZHRoIGlzIGVtcHR5ICh1c3VhbGx5IGFmdGVyIGEgcmUtbW91bnQpIHJlbmRlciBhbiBlbXB0eVxuICAgICAgLy8gZGl2IHRvIGNvbGxlY3QgdGhlIHdpZHRoIGZvciBsYXlvdXRcbiAgICAgIGdyaWRCb2R5ID0gPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IHJlZj17dGhpcy5zZXRHcmlkV3JhcHBlclJlZn0gLz47XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEZ1bGwgbGF5b3V0IGlzIHBvc3NpYmxlXG4gICAgICBjb25zdCBpdGVtc1RvUmVuZGVyID0gaXRlbXMuZmlsdGVyKFxuICAgICAgICBpdGVtID0+IGl0ZW0gJiYgbWVhc3VyZW1lbnRTdG9yZS5oYXMoaXRlbSlcbiAgICAgICk7XG4gICAgICBjb25zdCBpdGVtc1RvTWVhc3VyZSA9IGl0ZW1zXG4gICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtICYmICFtZWFzdXJlbWVudFN0b3JlLmhhcyhpdGVtKSlcbiAgICAgICAgLnNsaWNlKDAsIG1pbkNvbHMpO1xuXG4gICAgICBjb25zdCBwb3NpdGlvbnMgPSBsYXlvdXQoaXRlbXNUb1JlbmRlcik7XG4gICAgICBjb25zdCBtZWFzdXJpbmdQb3NpdGlvbnMgPSBsYXlvdXQoaXRlbXNUb01lYXN1cmUpO1xuICAgICAgLy8gTWF0aC5tYXgoKSA9PT0gLUluZmluaXR5IHdoZW4gdGhlcmUgYXJlIG5vIHBvc2l0aW9uc1xuICAgICAgY29uc3QgaGVpZ2h0ID0gcG9zaXRpb25zLmxlbmd0aFxuICAgICAgICA/IE1hdGgubWF4KC4uLnBvc2l0aW9ucy5tYXAocG9zID0+IHBvcy50b3AgKyBwb3MuaGVpZ2h0KSlcbiAgICAgICAgOiAwO1xuICAgICAgZ3JpZEJvZHkgPSAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSByZWY9e3RoaXMuc2V0R3JpZFdyYXBwZXJSZWZ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTWFzb25yeX0gc3R5bGU9e3sgaGVpZ2h0LCB3aWR0aCB9fT5cbiAgICAgICAgICAgIHtpdGVtc1RvUmVuZGVyLm1hcCgoaXRlbSwgaSkgPT5cbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJNYXNvbnJ5Q29tcG9uZW50KGl0ZW0sIGksIHBvc2l0aW9uc1tpXSlcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5NYXNvbnJ5fSBzdHlsZT17eyB3aWR0aCB9fT5cbiAgICAgICAgICAgIHtpdGVtc1RvTWVhc3VyZS5tYXAoKGRhdGEsIGkpID0+IHtcbiAgICAgICAgICAgICAgLy8gaXRlbXNUb01lYXN1cmUgaXMgYWx3YXlzIHRoZSBsZW5ndGggb2YgbWluQ29scywgc28gaSB3aWxsIGFsd2F5cyBiZSAwLi5taW5Db2xzLmxlbmd0aFxuICAgICAgICAgICAgICAvLyB3ZSBub3JtYWxpemUgdGhlIGluZGV4IGhlcmUgcmVsYXRpdmUgdG8gdGhlIGl0ZW0gbGlzdCBhcyBhIHdob2xlIHNvIHRoYXQgaXRlbUlkeCBpcyBjb3JyZWN0XG4gICAgICAgICAgICAgIC8vIGFuZCBzbyB0aGF0IFJlYWN0IGRvZXNudCByZXVzZSB0aGUgbWVhc3VyZW1lbnQgbm9kZXNcbiAgICAgICAgICAgICAgY29uc3QgbWVhc3VyZW1lbnRJbmRleCA9IGl0ZW1zVG9SZW5kZXIubGVuZ3RoICsgaTtcbiAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBtZWFzdXJpbmdQb3NpdGlvbnNbaV07XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAga2V5PXtgbWVhc3VyaW5nLSR7bWVhc3VyZW1lbnRJbmRleH1gfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IGxheW91dE51bWJlclRvQ3NzRGltZW5zaW9uKHBvc2l0aW9uLnRvcCksXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IGxheW91dE51bWJlclRvQ3NzRGltZW5zaW9uKHBvc2l0aW9uLmxlZnQpLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogbGF5b3V0TnVtYmVyVG9Dc3NEaW1lbnNpb24ocG9zaXRpb24ud2lkdGgpLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGxheW91dE51bWJlclRvQ3NzRGltZW5zaW9uKHBvc2l0aW9uLmhlaWdodCksXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgcmVmPXtlbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgICAgICAgICAgIG1lYXN1cmVtZW50U3RvcmUuc2V0KGRhdGEsIGVsLmNsaWVudEhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPENvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgICAgICAgICBpdGVtSWR4PXttZWFzdXJlbWVudEluZGV4fVxuICAgICAgICAgICAgICAgICAgICBpc01lYXN1cmluZ1xuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAge3RoaXMuc2Nyb2xsQ29udGFpbmVyICYmIChcbiAgICAgICAgICAgIDxGZXRjaEl0ZW1zXG4gICAgICAgICAgICAgIGNvbnRhaW5lckhlaWdodD17dGhpcy5jb250YWluZXJIZWlnaHR9XG4gICAgICAgICAgICAgIGZldGNoTW9yZT17dGhpcy5mZXRjaE1vcmV9XG4gICAgICAgICAgICAgIGlzRmV0Y2hpbmc9e1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNGZXRjaGluZyB8fCB0aGlzLnN0YXRlLmhhc1BlbmRpbmdNZWFzdXJlbWVudHNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzY3JvbGxIZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICAgICAgc2Nyb2xsVG9wPXt0aGlzLnN0YXRlLnNjcm9sbFRvcH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnByb3BzLnNjcm9sbENvbnRhaW5lciA/IChcbiAgICAgIDxTY3JvbGxDb250YWluZXJcbiAgICAgICAgcmVmPXt0aGlzLnNldFNjcm9sbENvbnRhaW5lclJlZn1cbiAgICAgICAgb25TY3JvbGw9e3RoaXMudXBkYXRlU2Nyb2xsUG9zaXRpb259XG4gICAgICAgIHNjcm9sbENvbnRhaW5lcj17dGhpcy5wcm9wcy5zY3JvbGxDb250YWluZXJ9XG4gICAgICA+XG4gICAgICAgIHtncmlkQm9keX1cbiAgICAgIDwvU2Nyb2xsQ29udGFpbmVyPlxuICAgICkgOiAoXG4gICAgICBncmlkQm9keVxuICAgICk7XG4gIH1cbn1cbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4vZGVib3VuY2UuanMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01hc29ucnkuY3NzJztcbmltcG9ydCBTY3JvbGxDb250YWluZXIgZnJvbSAnLi9TY3JvbGxDb250YWluZXIuanMnO1xuaW1wb3J0IHRocm90dGxlIGZyb20gJy4vdGhyb3R0bGUuanMnO1xuaW1wb3J0IHR5cGUgeyBDYWNoZSB9IGZyb20gJy4vQ2FjaGUuanMnO1xuaW1wb3J0IE1lYXN1cmVtZW50U3RvcmUgZnJvbSAnLi9NZWFzdXJlbWVudFN0b3JlLmpzJztcbmltcG9ydCB7XG4gIGdldEVsZW1lbnRIZWlnaHQsXG4gIGdldFJlbGF0aXZlU2Nyb2xsVG9wLFxuICBnZXRTY3JvbGxQb3MsXG59IGZyb20gJy4vc2Nyb2xsVXRpbHMuanMnO1xuaW1wb3J0IHtcbiAgRGVmYXVsdExheW91dFN5bWJvbCxcbiAgVW5pZm9ybVJvd0xheW91dFN5bWJvbCxcbn0gZnJvbSAnLi9sZWdhY3lMYXlvdXRTeW1ib2xzLmpzJztcbmltcG9ydCBkZWZhdWx0TGF5b3V0LCB7IHR5cGUgUG9zaXRpb24gfSBmcm9tICcuL2RlZmF1bHRMYXlvdXQuanMnO1xuaW1wb3J0IHVuaWZvcm1Sb3dMYXlvdXQgZnJvbSAnLi91bmlmb3JtUm93TGF5b3V0LmpzJztcbmltcG9ydCBmdWxsV2lkdGhMYXlvdXQgZnJvbSAnLi9mdWxsV2lkdGhMYXlvdXQuanMnO1xuaW1wb3J0IExlZ2FjeU1hc29ucnlMYXlvdXQgZnJvbSAnLi9sYXlvdXRzL01hc29ucnlMYXlvdXQuanMnO1xuaW1wb3J0IExlZ2FjeVVuaWZvcm1Sb3dMYXlvdXQgZnJvbSAnLi9sYXlvdXRzL1VuaWZvcm1Sb3dMYXlvdXQuanMnO1xuXG50eXBlIExheW91dCA9XG4gIHwgdHlwZW9mIERlZmF1bHRMYXlvdXRTeW1ib2xcbiAgfCB0eXBlb2YgVW5pZm9ybVJvd0xheW91dFN5bWJvbFxuICB8IExlZ2FjeU1hc29ucnlMYXlvdXRcbiAgfCBMZWdhY3lVbmlmb3JtUm93TGF5b3V0O1xuXG5leHBvcnQgdHlwZSBNZWFzdXJlbWVudFN0YXRlID0gJ2lkbGUnIHwgJ21lYXN1cmluZyc7XG5cbmV4cG9ydCB0eXBlIFByb3BzPFQ+ID0ge3xcbiAgY29sdW1uV2lkdGg/OiBudW1iZXIsXG4gIGNvbXA6IFJlYWN0LkNvbXBvbmVudFR5cGU8e1xuICAgIGRhdGE6IFQsXG4gICAgaXRlbUlkeDogbnVtYmVyLFxuICAgIGlzTWVhc3VyaW5nOiBib29sZWFuLFxuICB9PixcbiAgZmxleGlibGU/OiBib29sZWFuLFxuICBndXR0ZXJXaWR0aD86IG51bWJlcixcbiAgaXRlbXM6IEFycmF5PFQ+LFxuICBtZWFzdXJlbWVudFN0b3JlOiBDYWNoZTxULCAqPixcbiAgbWluQ29sczogbnVtYmVyLFxuICAvLyBDb250ZW50IGxheWVyIGFuZCBWaWV3cG9ydCBsYXllciBpcyBhcyBkZWZpbmVkIGluIENvbGxlY3Rpb24uXG4gIG9uVmlydHVhbGl6YXRpb25XaW5kb3dVcGRhdGU/OiAoXG4gICAgY29udGVudDogUG9zaXRpb24sXG4gICAgdmlld3BvcnQ6IFBvc2l0aW9uXG4gICkgPT4gdm9pZCxcbiAgb25BdXRvTWVhc3VyaW5nVXBkYXRlPzogKHN0YXRlOiBNZWFzdXJlbWVudFN0YXRlKSA9PiB2b2lkLFxuICBsYXlvdXQ/OiBMYXlvdXQsXG4gIC8vIFN1cHBvcnQgbGVnYWN5IGxvYWRJdGVtcyB1c2FnZS5cbiAgLy8gVE9ETzogU2ltcGxpZnkgbm9uIGZhbHNleSBmbG93dHlwZS5cbiAgbG9hZEl0ZW1zPzpcbiAgICB8IGZhbHNlXG4gICAgfCAoKFxuICAgICAgICA/e1xuICAgICAgICAgIGZyb206IG51bWJlcixcbiAgICAgICAgfVxuICAgICAgKSA9PiB2b2lkIHwgYm9vbGVhbiB8IHt9KSxcbiAgc2Nyb2xsQ29udGFpbmVyPzogKCkgPT4gSFRNTEVsZW1lbnQsXG4gIHZpcnR1YWxCb3VuZHNUb3A/OiBudW1iZXIsXG4gIHZpcnR1YWxCb3VuZHNCb3R0b20/OiBudW1iZXIsXG4gIHZpcnR1YWxpemU/OiBib29sZWFuLFxufH07XG5cbnR5cGUgU3RhdGU8VD4gPSB7fFxuICBoYXNQZW5kaW5nTWVhc3VyZW1lbnRzOiBib29sZWFuLFxuICBoZWlnaHQ6IG51bWJlcixcbiAgaXRlbXM6IEFycmF5PFQ+LFxuICBpdGVtc1RvTWVhc3VyZTogQXJyYXk8VD4sXG4gIGl0ZW1zVG9SZW5kZXI6IEFycmF5PFQ+LFxuICBtZWFzdXJpbmdQb3NpdGlvbnM6IEFycmF5PFBvc2l0aW9uPixcbiAgcmVuZGVyUG9zaXRpb25zOiBBcnJheTxQb3NpdGlvbj4sXG4gIHNjcm9sbFRvcDogbnVtYmVyLFxuICB3aWR0aDogP251bWJlcixcbnx9O1xuXG5jb25zdCBSRVNJWkVfREVCT1VOQ0UgPSAzMDA7XG4vLyBNdWx0aXBsaWVkIGFnYWluc3QgY29udGFpbmVyIGhlaWdodC5cbi8vIFRoZSBhbW91bnQgb2YgZXh0cmEgYnVmZmVyIHNwYWNlIGZvciBwb3B1bGF0aW5nIHZpc2libGUgaXRlbXMuXG5jb25zdCBWSVJUVUFMX0JVRkZFUl9GQUNUT1IgPSAwLjc7XG5cbmNvbnN0IGxheW91dE51bWJlclRvQ3NzRGltZW5zaW9uID0gbiA9PiAobiAhPT0gSW5maW5pdHkgPyBuIDogdW5kZWZpbmVkKTtcblxuZnVuY3Rpb24gbGF5b3V0Q2xhc3M8VD4oXG4gIHtcbiAgICBjb2x1bW5XaWR0aCxcbiAgICBmbGV4aWJsZSxcbiAgICBndXR0ZXJXaWR0aDogZ3V0dGVyLFxuICAgIGxheW91dCxcbiAgICBtZWFzdXJlbWVudFN0b3JlLFxuICAgIG1pbkNvbHMsXG4gIH06IFByb3BzPFQ+LFxuICB7IHdpZHRoIH06IFN0YXRlPFQ+XG4pIHtcbiAgaWYgKGZsZXhpYmxlICYmIHdpZHRoICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIGZ1bGxXaWR0aExheW91dCh7XG4gICAgICBndXR0ZXIsXG4gICAgICBjYWNoZTogbWVhc3VyZW1lbnRTdG9yZSxcbiAgICAgIG1pbkNvbHMsXG4gICAgICBpZGVhbENvbHVtbldpZHRoOiBjb2x1bW5XaWR0aCxcbiAgICAgIHdpZHRoLFxuICAgIH0pO1xuICB9XG4gIGlmIChcbiAgICBsYXlvdXQgPT09IFVuaWZvcm1Sb3dMYXlvdXRTeW1ib2wgfHxcbiAgICBsYXlvdXQgaW5zdGFuY2VvZiBMZWdhY3lVbmlmb3JtUm93TGF5b3V0XG4gICkge1xuICAgIHJldHVybiB1bmlmb3JtUm93TGF5b3V0KHtcbiAgICAgIGNhY2hlOiBtZWFzdXJlbWVudFN0b3JlLFxuICAgICAgY29sdW1uV2lkdGgsXG4gICAgICBndXR0ZXIsXG4gICAgICBtaW5Db2xzLFxuICAgICAgd2lkdGgsXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGRlZmF1bHRMYXlvdXQoe1xuICAgIGNhY2hlOiBtZWFzdXJlbWVudFN0b3JlLFxuICAgIGNvbHVtbldpZHRoLFxuICAgIGd1dHRlcixcbiAgICBtaW5Db2xzLFxuICAgIHdpZHRoLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gc3RhdGVzRm9yUmVuZGVyaW5nPFQ+KHByb3BzOiBQcm9wczxUPiwgc3RhdGU6IFN0YXRlPFQ+KSB7XG4gIGNvbnN0IHsgbWVhc3VyZW1lbnRTdG9yZSwgbWluQ29scyB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgaXRlbXMgfSA9IHN0YXRlO1xuXG4gIC8vIEZ1bGwgbGF5b3V0IGlzIHBvc3NpYmxlXG4gIC8vICRGbG93SXNzdWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzYxNTFcbiAgY29uc3QgaXRlbXNUb1JlbmRlciA9IGl0ZW1zLmZpbHRlcihcbiAgICBpdGVtID0+IGl0ZW0gJiYgbWVhc3VyZW1lbnRTdG9yZS5oYXMoaXRlbSlcbiAgKTtcblxuICBjb25zdCBsYXlvdXQgPSBsYXlvdXRDbGFzcyhwcm9wcywgc3RhdGUpO1xuICBjb25zdCByZW5kZXJQb3NpdGlvbnMgPSBsYXlvdXQoaXRlbXNUb1JlbmRlcik7XG4gIC8vIE1hdGgubWF4KCkgPT09IC1JbmZpbml0eSB3aGVuIHRoZXJlIGFyZSBubyByZW5kZXJQb3NpdGlvbnNcbiAgY29uc3QgaGVpZ2h0ID0gcmVuZGVyUG9zaXRpb25zLmxlbmd0aFxuICAgID8gTWF0aC5tYXgoLi4ucmVuZGVyUG9zaXRpb25zLm1hcChwb3MgPT4gcG9zLnRvcCArIHBvcy5oZWlnaHQpKVxuICAgIDogMDtcblxuICAvLyAkRmxvd0lzc3VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mbG93L2lzc3Vlcy82MTUxXG4gIGNvbnN0IGl0ZW1zVG9NZWFzdXJlID0gaXRlbXNcbiAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbSAmJiAhbWVhc3VyZW1lbnRTdG9yZS5oYXMoaXRlbSkpXG4gICAgLnNsaWNlKDAsIG1pbkNvbHMpO1xuICBjb25zdCBtZWFzdXJpbmdQb3NpdGlvbnMgPSBsYXlvdXQoaXRlbXNUb01lYXN1cmUpO1xuXG4gIHJldHVybiB7XG4gICAgaGVpZ2h0LFxuICAgIGl0ZW1zVG9SZW5kZXIsXG4gICAgaXRlbXNUb01lYXN1cmUsXG4gICAgbWVhc3VyaW5nUG9zaXRpb25zLFxuICAgIHJlbmRlclBvc2l0aW9ucyxcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGUgd2lsbCBiZSB0aGUgbmV3IE1hc29ucnlCZXRhIHRoYXQgd2lsbCBub3QgaGF2ZSBhbnkgZmV0Y2hpbmcgY29uY2VybnMuXG4gKlxuICogRm9yIG5vdywgaXQgZGlmZmVycyB3aXRoIE1hc29ucnkgb25seSBieSBub3QgaGF2aW5nIGFueSBmZXRjaGluZyBsb2dpYy5cbiAqXG4gKiBJdCBpcyBpbiBiZXRhIHVudGlsIGl0IGNhbiBiZSBiYXR0bGUgdGVzdGVkLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXNvbnJ5QmV0YTxUPiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcbiAgUHJvcHM8VD4sXG4gIFN0YXRlPFQ+XG4+IHtcbiAgLyoqXG4gICAqIERlbGF5cyByZXNpemUgaGFuZGxpbmcgaW4gY2FzZSB0aGUgc2Nyb2xsIGNvbnRhaW5lciBpcyBzdGlsbCBiZWluZyByZXNpemVkLlxuICAgKi9cbiAgaGFuZGxlUmVzaXplID0gZGVib3VuY2UoKCkgPT4ge1xuICAgIGlmICh0aGlzLmdyaWRXcmFwcGVyKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgd2lkdGg6IHRoaXMuZ3JpZFdyYXBwZXIuY2xpZW50V2lkdGggfSk7XG4gICAgfVxuICB9LCBSRVNJWkVfREVCT1VOQ0UpO1xuXG4gIHVwZGF0ZVNjcm9sbFBvc2l0aW9uID0gdGhyb3R0bGUoKCkgPT4ge1xuICAgIGlmICghdGhpcy5zY3JvbGxDb250YWluZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc2Nyb2xsQ29udGFpbmVyID0gdGhpcy5zY3JvbGxDb250YWluZXIuZ2V0U2Nyb2xsQ29udGFpbmVyUmVmKCk7XG5cbiAgICBpZiAoIXNjcm9sbENvbnRhaW5lcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2Nyb2xsVG9wOiBnZXRTY3JvbGxQb3Moc2Nyb2xsQ29udGFpbmVyKSxcbiAgICB9KTtcblxuICAgIHRoaXMuaGFuZGxlVmlydHVhbGl6YXRpb25XaW5kb3dVcGRhdGUoKTtcbiAgfSk7XG5cbiAgbWVhc3VyZUNvbnRhaW5lckFzeW5jID0gZGVib3VuY2UoKCkgPT4ge1xuICAgIHRoaXMubWVhc3VyZUNvbnRhaW5lcigpO1xuICB9LCAwKTtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFRoZSBwcmVmZXJyZWQvdGFyZ2V0IGl0ZW0gd2lkdGguIElmIGBmbGV4aWJsZWAgaXMgc2V0LCB0aGUgaXRlbSB3aWR0aCB3aWxsXG4gICAgICogZ3JvdyB0byBmaWxsIGNvbHVtbiBzcGFjZSwgYW5kIHNocmluayB0byBmaXQgaWYgYmVsb3cgbWluIGNvbHVtbnMuXG4gICAgICovXG4gICAgY29sdW1uV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29tcG9uZW50IHRvIHJlbmRlci5cbiAgICAgKi9cbiAgICAvKiBlc2xpbnQgcmVhY3Qvbm8tdW51c2VkLXByb3AtdHlwZXM6IDAgKi9cbiAgICBjb21wOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHByZWZlcnJlZC90YXJnZXQgaXRlbSB3aWR0aC4gSXRlbSB3aWR0aCB3aWxsIGdyb3cgdG8gZmlsbFxuICAgICAqIGNvbHVtbiBzcGFjZSwgYW5kIHNocmluayB0byBmaXQgaWYgYmVsb3cgbWluIGNvbHVtbnMuXG4gICAgICovXG4gICAgZmxleGlibGU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGFtb3VudCBvZiBzcGFjZSBiZXR3ZWVuIGVhY2ggaXRlbS5cbiAgICAgKi9cbiAgICBndXR0ZXJXaWR0aDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIGFsbCBvYmplY3RzIHRvIGRpc3BsYXkgaW4gdGhlIGdyaWQuXG4gICAgICovXG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7fSkpLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBNZWFzdXJlbWVudCBTdG9yZVxuICAgICAqL1xuICAgIG1lYXN1cmVtZW50U3RvcmU6IFByb3BUeXBlcy5pbnN0YW5jZU9mKE1lYXN1cmVtZW50U3RvcmUpLFxuXG4gICAgLyoqXG4gICAgICogTGF5b3V0IHN5c3RlbSB0byB1c2UgZm9yIGl0ZW1zXG4gICAgICovXG4gICAgbGF5b3V0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5pbnN0YW5jZU9mKExlZ2FjeU1hc29ucnlMYXlvdXQpLFxuICAgICAgUHJvcFR5cGVzLmluc3RhbmNlT2YoTGVnYWN5VW5pZm9ybVJvd0xheW91dCksXG4gICAgICBQcm9wVHlwZXMuc3ltYm9sLFxuICAgIF0pLFxuXG4gICAgLyoqXG4gICAgICogQSBjYWxsYmFjayB3aGljaCB0aGUgZ3JpZCBjYWxscyB3aGVuIHdlIG5lZWQgdG8gbG9hZCBtb3JlIGl0ZW1zIGFzIHRoZSB1c2VyIHNjcm9sbHMuXG4gICAgICogVGhlIGNhbGxiYWNrIHNob3VsZCB1cGRhdGUgdGhlIHN0YXRlIG9mIHRoZSBpdGVtcywgYW5kIHBhc3MgdGhvc2UgaW4gYXMgcHJvcHNcbiAgICAgKiB0byB0aGlzIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBsb2FkSXRlbXM6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogTWluaW11bSBudW1iZXIgb2YgY29sdW1ucyB0byBkaXNwbGF5LlxuICAgICAqL1xuICAgIG1pbkNvbHM6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHRoZSBncmlkIGNhbGxzIHRvIGdldCB0aGUgc2Nyb2xsIGNvbnRhaW5lci5cbiAgICAgKiBUaGlzIGlzIHJlcXVpcmVkIGlmIHRoZSBncmlkIGlzIGV4cGVjdGVkIHRvIGJlIHNjcm9sbGFibGUuXG4gICAgICovXG4gICAgc2Nyb2xsQ29udGFpbmVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgb3Igbm90IHRvIHVzZSBhY3R1YWwgdmlydHVhbGl6YXRpb25cbiAgICAgKi9cbiAgICB2aXJ0dWFsaXplOiBQcm9wVHlwZXMuYm9vbCxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbHVtbldpZHRoOiAyMzYsXG4gICAgbWVhc3VyZW1lbnRTdG9yZTogbmV3IE1lYXN1cmVtZW50U3RvcmUoKSxcbiAgICBtaW5Db2xzOiAzLFxuICAgIGxheW91dDogRGVmYXVsdExheW91dFN5bWJvbCxcbiAgICBsb2FkSXRlbXM6ICgpID0+IHt9LFxuICAgIHZpcnR1YWxpemU6IGZhbHNlLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wczxUPikge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuY29udGFpbmVySGVpZ2h0ID0gMDtcbiAgICB0aGlzLmNvbnRhaW5lck9mZnNldCA9IDA7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaGFzUGVuZGluZ01lYXN1cmVtZW50czogcHJvcHMuaXRlbXMuc29tZShcbiAgICAgICAgaXRlbSA9PiAhIWl0ZW0gJiYgIXByb3BzLm1lYXN1cmVtZW50U3RvcmUuaGFzKGl0ZW0pXG4gICAgICApLFxuICAgICAgaGVpZ2h0OiAwLFxuICAgICAgaXRlbXNUb1JlbmRlcjogW10sXG4gICAgICBpdGVtc1RvTWVhc3VyZTogW10sXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tdW51c2VkLXN0YXRlXG4gICAgICBpdGVtczogcHJvcHMuaXRlbXMsXG4gICAgICBtZWFzdXJpbmdQb3NpdGlvbnM6IFtdLFxuICAgICAgcmVuZGVyUG9zaXRpb25zOiBbXSxcbiAgICAgIHNjcm9sbFRvcDogMCxcbiAgICAgIHdpZHRoOiB1bmRlZmluZWQsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGhvb2tzIGFmdGVyIHRoZSBjb21wb25lbnQgbW91bnRzLlxuICAgKi9cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKTtcblxuICAgIHRoaXMubWVhc3VyZUNvbnRhaW5lcigpO1xuXG4gICAgbGV0IHsgc2Nyb2xsVG9wIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmICh0aGlzLnNjcm9sbENvbnRhaW5lciAhPSBudWxsKSB7XG4gICAgICBjb25zdCBzY3JvbGxDb250YWluZXIgPSB0aGlzLnNjcm9sbENvbnRhaW5lci5nZXRTY3JvbGxDb250YWluZXJSZWYoKTtcbiAgICAgIGlmIChzY3JvbGxDb250YWluZXIpIHtcbiAgICAgICAgc2Nyb2xsVG9wID0gZ2V0U2Nyb2xsUG9zKHNjcm9sbENvbnRhaW5lcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4ge1xuICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLmdyaWRXcmFwcGVyXG4gICAgICAgID8gdGhpcy5ncmlkV3JhcHBlci5jbGllbnRXaWR0aFxuICAgICAgICA6IHByZXZTdGF0ZS53aWR0aDtcbiAgICAgIGNvbnN0IHN0YXRlV2l0aFdpZHRoID0geyAuLi50aGlzLnN0YXRlLCB3aWR0aCB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2Nyb2xsVG9wLFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgLi4uc3RhdGVzRm9yUmVuZGVyaW5nKHRoaXMucHJvcHMsIHN0YXRlV2l0aFdpZHRoKSxcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICAvLyBuZWVkIHRvIG1ha2Ugc3VyZSBwYXJlbnQgY29tcG9uZW50IGhhcyB0aGUgY29ycmVjdCBwZW5kaW5nIG1lYXN1cmVtZW50IHZhbHVlXG4gICAgdGhpcy5oYW5kbGVPbkF1dG9NZWFzdXJpbmdVcGRhdGUoXG4gICAgICB0aGlzLnN0YXRlLmhhc1BlbmRpbmdNZWFzdXJlbWVudHMgPyAnbWVhc3VyaW5nJyA6ICdpZGxlJ1xuICAgICk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiBQcm9wczxUPiwgcHJldlN0YXRlOiBTdGF0ZTxUPikge1xuICAgIGNvbnN0IHsgaXRlbXMsIG1lYXN1cmVtZW50U3RvcmUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICB0aGlzLm1lYXN1cmVDb250YWluZXJBc3luYygpO1xuXG4gICAgaWYgKHByZXZTdGF0ZS53aWR0aCAhPSBudWxsICYmIHRoaXMuc3RhdGUud2lkdGggIT09IHByZXZTdGF0ZS53aWR0aCkge1xuICAgICAgbWVhc3VyZW1lbnRTdG9yZS5yZXNldCgpO1xuICAgIH1cbiAgICAvLyBjYWxjdWxhdGUgd2hldGhlciB3ZSBzdGlsbCBoYXZlIHBlbmRpbmcgbWVhc3VyZW1lbnRzXG4gICAgY29uc3QgaGFzUGVuZGluZ01lYXN1cmVtZW50cyA9IGl0ZW1zLnNvbWUoXG4gICAgICBpdGVtID0+ICEhaXRlbSAmJiAhbWVhc3VyZW1lbnRTdG9yZS5oYXMoaXRlbSlcbiAgICApO1xuXG4gICAgaWYgKGhhc1BlbmRpbmdNZWFzdXJlbWVudHMgJiYgIXByZXZTdGF0ZS5oYXNQZW5kaW5nTWVhc3VyZW1lbnRzKSB7XG4gICAgICB0aGlzLmhhbmRsZU9uQXV0b01lYXN1cmluZ1VwZGF0ZSgnbWVhc3VyaW5nJyk7XG4gICAgfSBlbHNlIGlmICghaGFzUGVuZGluZ01lYXN1cmVtZW50cyAmJiBwcmV2U3RhdGUuaGFzUGVuZGluZ01lYXN1cmVtZW50cykge1xuICAgICAgdGhpcy5oYW5kbGVPbkF1dG9NZWFzdXJpbmdVcGRhdGUoJ2lkbGUnKTtcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVWaXJ0dWFsaXphdGlvbldpbmRvd1VwZGF0ZSgpO1xuXG4gICAgaWYgKFxuICAgICAgaGFzUGVuZGluZ01lYXN1cmVtZW50cyB8fFxuICAgICAgaGFzUGVuZGluZ01lYXN1cmVtZW50cyAhPT0gdGhpcy5zdGF0ZS5oYXNQZW5kaW5nTWVhc3VyZW1lbnRzIHx8XG4gICAgICBwcmV2U3RhdGUud2lkdGggPT0gbnVsbFxuICAgICkge1xuICAgICAgdGhpcy5pbnNlcnRBbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbmRlcmluZ1N0YXRlcyA9IHN0YXRlc0ZvclJlbmRlcmluZyh0aGlzLnByb3BzLCB0aGlzLnN0YXRlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaGFzUGVuZGluZ01lYXN1cmVtZW50cyxcbiAgICAgICAgICAuLi5yZW5kZXJpbmdTdGF0ZXMsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChoYXNQZW5kaW5nTWVhc3VyZW1lbnRzIHx8IHByZXZTdGF0ZS5pdGVtcyAhPT0gaXRlbXMpIHtcbiAgICAgIHRoaXMuaW5zZXJ0QW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBjb25zdCByZW5kZXJpbmdTdGF0ZXMgPSBzdGF0ZXNGb3JSZW5kZXJpbmcodGhpcy5wcm9wcywgdGhpcy5zdGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi5yZW5kZXJpbmdTdGF0ZXMgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGxpc3RlbmVycyB3aGVuIHVubW91bnRpbmcuXG4gICAqL1xuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5pbnNlcnRBbmltYXRpb25GcmFtZSkge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5pbnNlcnRBbmltYXRpb25GcmFtZSk7XG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIGFzeW5jIG1ldGhvZHMgYXJlIGNhbmNlbGxlZC5cbiAgICB0aGlzLm1lYXN1cmVDb250YWluZXJBc3luYy5jbGVhclRpbWVvdXQoKTtcbiAgICB0aGlzLmhhbmRsZVJlc2l6ZS5jbGVhclRpbWVvdXQoKTtcbiAgICB0aGlzLnVwZGF0ZVNjcm9sbFBvc2l0aW9uLmNsZWFyVGltZW91dCgpO1xuXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHM6IFByb3BzPFQ+LCBzdGF0ZTogU3RhdGU8VD4pIHtcbiAgICBjb25zdCB7IGl0ZW1zLCBtZWFzdXJlbWVudFN0b3JlIH0gPSBwcm9wcztcbiAgICAvLyB3aGVuZXZlciB3ZSdyZSByZWNlaXZpbmcgbmV3IHByb3BzLCBkZXRlcm1pbmUgd2hldGhlciBhbnkgaXRlbXMgbmVlZCB0byBiZSBtZWFzdXJlZFxuICAgIC8vIFRPRE8gLSB3ZSBzaG91bGQgdHJlYXQgaXRlbXMgYXMgaW1tdXRhYmxlXG4gICAgY29uc3QgaGFzUGVuZGluZ01lYXN1cmVtZW50cyA9IGl0ZW1zLnNvbWUoXG4gICAgICBpdGVtID0+IGl0ZW0gJiYgIW1lYXN1cmVtZW50U3RvcmUuaGFzKGl0ZW0pXG4gICAgKTtcblxuICAgIGNvbnN0IG5ld1N0YXRlOiBTdGF0ZTxUPiA9IHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgaGFzUGVuZGluZ01lYXN1cmVtZW50cyxcbiAgICAgIGl0ZW1zLFxuICAgIH07XG5cbiAgICAvLyBTaGFsbG93IGNvbXBhcmUgYWxsIGl0ZW1zLCBpZiBhbnkgY2hhbmdlIHJlZmxvdyB0aGUgZ3JpZC5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAvLyBXZSd2ZSByZWFjaGVkIHRoZSBlbmQgb2Ygb3VyIGN1cnJlbnQgcHJvcHMgYW5kIGV2ZXJ5dGhpbmcgbWF0Y2hlcy5cbiAgICAgIC8vIElmIHdlIGhpdCB0aGlzIGNhc2UgaXQgbWVhbnMgd2UgbmVlZCB0byBpbnNlcnQgbmV3IGl0ZW1zLlxuICAgICAgaWYgKHN0YXRlLml0ZW1zW2ldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoYXNQZW5kaW5nTWVhc3VyZW1lbnRzLFxuICAgICAgICAgIGl0ZW1zLFxuICAgICAgICAgIC4uLnN0YXRlc0ZvclJlbmRlcmluZyhwcm9wcywgbmV3U3RhdGUpLFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICAvLyBSZXNldCBncmlkIGl0ZW1zIHdoZW46XG4gICAgICBpZiAoXG4gICAgICAgIC8vIEFuIGl0ZW0gb2JqZWN0IHJlZiBkb2VzIG5vdCBtYXRjaC5cbiAgICAgICAgaXRlbXNbaV0gIT09IHN0YXRlLml0ZW1zW2ldIHx8XG4gICAgICAgIC8vIE9yIGxlc3MgaXRlbXMgdGhhbiB3ZSBjdXJyZW50bHkgaGF2ZSBhcmUgcGFzc2VkIGluLlxuICAgICAgICBpdGVtcy5sZW5ndGggPCBzdGF0ZS5pdGVtcy5sZW5ndGhcbiAgICAgICkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhhc1BlbmRpbmdNZWFzdXJlbWVudHMsXG4gICAgICAgICAgaXRlbXMsXG4gICAgICAgICAgLi4uc3RhdGVzRm9yUmVuZGVyaW5nKHByb3BzLCBuZXdTdGF0ZSksXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVzZXQgaXRlbXMgaWYgbmV3IGl0ZW1zIGFycmF5IGlzIGVtcHR5LlxuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDAgJiYgc3RhdGUuaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGFzUGVuZGluZ01lYXN1cmVtZW50cyxcbiAgICAgICAgaXRlbXMsXG4gICAgICAgIC4uLnN0YXRlc0ZvclJlbmRlcmluZyhwcm9wcywgbmV3U3RhdGUpLFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGhhc1BlbmRpbmdNZWFzdXJlbWVudHMgIT09IHN0YXRlLmhhc1BlbmRpbmdNZWFzdXJlbWVudHMpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBhbHdheXMgdXBkYXRlIGhhc1BlbmRpbmdNZWFzdXJlbWVudHNcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhhc1BlbmRpbmdNZWFzdXJlbWVudHMsXG4gICAgICAgIGl0ZW1zLFxuICAgICAgICAuLi5zdGF0ZXNGb3JSZW5kZXJpbmcocHJvcHMsIG5ld1N0YXRlKSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIG51bGwgdG8gaW5kaWNhdGUgbm8gY2hhbmdlIHRvIHN0YXRlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgc2V0R3JpZFdyYXBwZXJSZWYgPSAocmVmOiA/SFRNTEVsZW1lbnQpID0+IHtcbiAgICB0aGlzLmdyaWRXcmFwcGVyID0gcmVmO1xuICB9O1xuXG4gIHNldFNjcm9sbENvbnRhaW5lclJlZiA9IChyZWY6ID9TY3JvbGxDb250YWluZXIpID0+IHtcbiAgICB0aGlzLnNjcm9sbENvbnRhaW5lciA9IHJlZjtcbiAgfTtcblxuICBoYW5kbGVWaXJ0dWFsaXphdGlvbldpbmRvd1VwZGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IGhlaWdodCwgd2lkdGggfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKFxuICAgICAgdHlwZW9mIHRoaXMucHJvcHMub25WaXJ0dWFsaXphdGlvbldpbmRvd1VwZGF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgdGhpcy5jb250YWluZXJIZWlnaHRcbiAgICApIHtcbiAgICAgIGNvbnN0IHZpZXdwb3J0ID0ge1xuICAgICAgICB0b3A6IHRoaXMuc3RhdGUuc2Nyb2xsVG9wLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBoZWlnaHQ6IHRoaXMuY29udGFpbmVySGVpZ2h0LFxuICAgICAgICB3aWR0aDogd2lkdGggfHwgMCxcbiAgICAgIH07XG4gICAgICBjb25zdCBjb250ZW50ID0ge1xuICAgICAgICB0b3A6IHRoaXMuY29udGFpbmVyT2Zmc2V0LFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIHdpZHRoOiB3aWR0aCB8fCAwLFxuICAgICAgfTtcblxuICAgICAgdGhpcy5wcm9wcy5vblZpcnR1YWxpemF0aW9uV2luZG93VXBkYXRlKGNvbnRlbnQsIHZpZXdwb3J0KTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlT25BdXRvTWVhc3VyaW5nVXBkYXRlID0gKHN0YXRlOiBNZWFzdXJlbWVudFN0YXRlKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub25BdXRvTWVhc3VyaW5nVXBkYXRlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQXV0b01lYXN1cmluZ1VwZGF0ZShzdGF0ZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnRhaW5lckhlaWdodDogbnVtYmVyO1xuXG4gIGNvbnRhaW5lck9mZnNldDogbnVtYmVyO1xuXG4gIGdyaWRXcmFwcGVyOiA/SFRNTEVsZW1lbnQ7XG5cbiAgaW5zZXJ0QW5pbWF0aW9uRnJhbWU6IEFuaW1hdGlvbkZyYW1lSUQ7XG5cbiAgbWVhc3VyZVRpbWVvdXQ6IFRpbWVvdXRJRDtcblxuICBzY3JvbGxDb250YWluZXI6ID9TY3JvbGxDb250YWluZXI7XG5cbiAgbWVhc3VyZUNvbnRhaW5lcigpIHtcbiAgICBpZiAodGhpcy5zY3JvbGxDb250YWluZXIgIT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBzY3JvbGxDb250YWluZXIgfSA9IHRoaXM7XG4gICAgICBjb25zdCBzY3JvbGxDb250YWluZXJSZWYgPSBzY3JvbGxDb250YWluZXIuZ2V0U2Nyb2xsQ29udGFpbmVyUmVmKCk7XG4gICAgICBpZiAoc2Nyb2xsQ29udGFpbmVyUmVmKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVySGVpZ2h0ID0gZ2V0RWxlbWVudEhlaWdodChzY3JvbGxDb250YWluZXJSZWYpO1xuICAgICAgICBjb25zdCBlbCA9IHRoaXMuZ3JpZFdyYXBwZXI7XG4gICAgICAgIGlmIChlbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgY29uc3QgcmVsYXRpdmVTY3JvbGxUb3AgPSBnZXRSZWxhdGl2ZVNjcm9sbFRvcChzY3JvbGxDb250YWluZXJSZWYpO1xuICAgICAgICAgIHRoaXMuY29udGFpbmVyT2Zmc2V0ID1cbiAgICAgICAgICAgIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHJlbGF0aXZlU2Nyb2xsVG9wO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIG1lYXN1cmVtZW50cy9wb3NpdGlvbnMgYW5kIGZvcmNlIGEgcmVmbG93IG9mIHRoZSBlbnRpcmUgZ3JpZC5cbiAgICogT25seSB1c2UgdGhpcyBpZiBhYnNvbHV0ZWx5IG5lY2Vzc2FyeSAtIGV4OiBXZSBuZWVkIHRvIHJlZmxvdyBpdGVtcyBpZiB0aGVcbiAgICogbnVtYmVyIG9mIGNvbHVtbnMgd2Ugd291bGQgZGlzcGxheSBzaG91bGQgY2hhbmdlIGFmdGVyIGEgcmVzaXplLlxuICAgKi9cbiAgcmVmbG93KCkge1xuICAgIHRoaXMucHJvcHMubWVhc3VyZW1lbnRTdG9yZS5yZXNldCgpO1xuICAgIHRoaXMubWVhc3VyZUNvbnRhaW5lcigpO1xuICAgIHRoaXMuaGFuZGxlVmlydHVhbGl6YXRpb25XaW5kb3dVcGRhdGUoKTtcbiAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gIH1cblxuICByZW5kZXJNYXNvbnJ5Q29tcG9uZW50ID0gKGl0ZW1EYXRhOiBULCBpZHg6IG51bWJlciwgcG9zaXRpb246ICopID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBjb21wOiBDb21wb25lbnQsXG4gICAgICB2aXJ0dWFsaXplLFxuICAgICAgdmlydHVhbEJvdW5kc1RvcCxcbiAgICAgIHZpcnR1YWxCb3VuZHNCb3R0b20sXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQgfSA9IHBvc2l0aW9uO1xuXG4gICAgbGV0IGlzVmlzaWJsZTtcbiAgICBpZiAodGhpcy5wcm9wcy5zY3JvbGxDb250YWluZXIpIHtcbiAgICAgIGNvbnN0IHZpcnR1YWxCdWZmZXIgPSB0aGlzLmNvbnRhaW5lckhlaWdodCAqIFZJUlRVQUxfQlVGRkVSX0ZBQ1RPUjtcbiAgICAgIGNvbnN0IG9mZnNldFNjcm9sbFBvcyA9IHRoaXMuc3RhdGUuc2Nyb2xsVG9wIC0gdGhpcy5jb250YWluZXJPZmZzZXQ7XG4gICAgICBjb25zdCB2aWV3cG9ydFRvcCA9IHZpcnR1YWxCb3VuZHNUb3BcbiAgICAgICAgPyBvZmZzZXRTY3JvbGxQb3MgLSB2aXJ0dWFsQm91bmRzVG9wXG4gICAgICAgIDogb2Zmc2V0U2Nyb2xsUG9zIC0gdmlydHVhbEJ1ZmZlcjtcbiAgICAgIGNvbnN0IHZpZXdwb3J0Qm90dG9tID0gdmlydHVhbEJvdW5kc0JvdHRvbVxuICAgICAgICA/IG9mZnNldFNjcm9sbFBvcyArIHRoaXMuY29udGFpbmVySGVpZ2h0ICsgdmlydHVhbEJvdW5kc0JvdHRvbVxuICAgICAgICA6IG9mZnNldFNjcm9sbFBvcyArIHRoaXMuY29udGFpbmVySGVpZ2h0ICsgdmlydHVhbEJ1ZmZlcjtcblxuICAgICAgaXNWaXNpYmxlID0gIShcbiAgICAgICAgcG9zaXRpb24udG9wICsgcG9zaXRpb24uaGVpZ2h0IDwgdmlld3BvcnRUb3AgfHxcbiAgICAgICAgcG9zaXRpb24udG9wID4gdmlld3BvcnRCb3R0b21cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIG5vIHNjcm9sbCBjb250YWluZXIgaXMgcGFzc2VkIGluLCBpdGVtcyBzaG91bGQgYWx3YXlzIGJlIHZpc2libGVcbiAgICAgIGlzVmlzaWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgaXRlbUNvbXBvbmVudCA9IChcbiAgICAgIDxkaXZcbiAgICAgICAga2V5PXtgaXRlbS0ke2lkeH1gfVxuICAgICAgICBjbGFzc05hbWU9e1tzdHlsZXMuTWFzb25yeV9fSXRlbSwgc3R5bGVzLk1hc29ucnlfX0l0ZW1fX01vdW50ZWRdLmpvaW4oXG4gICAgICAgICAgJyAnXG4gICAgICAgICl9XG4gICAgICAgIGRhdGEtZ3JpZC1pdGVtXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke2xlZnR9cHgpIHRyYW5zbGF0ZVkoJHt0b3B9cHgpYCxcbiAgICAgICAgICBXZWJraXRUcmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7bGVmdH1weCkgdHJhbnNsYXRlWSgke3RvcH1weClgLFxuICAgICAgICAgIHdpZHRoOiBsYXlvdXROdW1iZXJUb0Nzc0RpbWVuc2lvbih3aWR0aCksXG4gICAgICAgICAgaGVpZ2h0OiBsYXlvdXROdW1iZXJUb0Nzc0RpbWVuc2lvbihoZWlnaHQpLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Q29tcG9uZW50IGRhdGE9e2l0ZW1EYXRhfSBpdGVtSWR4PXtpZHh9IGlzTWVhc3VyaW5nPXtmYWxzZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgICByZXR1cm4gdmlydHVhbGl6ZSA/IChpc1Zpc2libGUgJiYgaXRlbUNvbXBvbmVudCkgfHwgbnVsbCA6IGl0ZW1Db21wb25lbnQ7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbHVtbldpZHRoLFxuICAgICAgY29tcDogQ29tcG9uZW50LFxuICAgICAgZmxleGlibGUsXG4gICAgICBtZWFzdXJlbWVudFN0b3JlLFxuICAgICAgaXRlbXMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgaGFzUGVuZGluZ01lYXN1cmVtZW50cyxcbiAgICAgIGhlaWdodCxcbiAgICAgIGl0ZW1zVG9NZWFzdXJlLFxuICAgICAgaXRlbXNUb1JlbmRlcixcbiAgICAgIG1lYXN1cmluZ1Bvc2l0aW9ucyxcbiAgICAgIHJlbmRlclBvc2l0aW9ucyxcbiAgICAgIHdpZHRoLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGxldCBncmlkQm9keTtcbiAgICBpZiAod2lkdGggPT0gbnVsbCAmJiBoYXNQZW5kaW5nTWVhc3VyZW1lbnRzKSB7XG4gICAgICAvLyBXaGVuIGh5cmRhdGluZyBmcm9tIGEgc2VydmVyIHJlbmRlciwgd2UgZG9uJ3QgaGF2ZSB0aGUgd2lkdGggb2YgdGhlIGdyaWRcbiAgICAgIC8vIGFuZCB0aGUgbWVhc3VyZW1lbnQgc3RvcmUgaXMgZW1wdHlcbiAgICAgIGdyaWRCb2R5ID0gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuTWFzb25yeX1cbiAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDAsIHdpZHRoOiAnMTAwJScgfX1cbiAgICAgICAgICByZWY9e3RoaXMuc2V0R3JpZFdyYXBwZXJSZWZ9XG4gICAgICAgID5cbiAgICAgICAgICB7aXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbSkubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IC8vIGtlZXAgdGhpcyBpbiBzeW5jIHdpdGggcmVuZGVyTWFzb25yeUNvbXBvbmVudFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdGF0aWNcIlxuICAgICAgICAgICAgICBkYXRhLWdyaWQtaXRlbVxuICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwcHgpIHRyYW5zbGF0ZVkoMHB4KScsXG4gICAgICAgICAgICAgICAgV2Via2l0VHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwcHgpIHRyYW5zbGF0ZVkoMHB4KScsXG4gICAgICAgICAgICAgICAgd2lkdGg6IGZsZXhpYmxlXG4gICAgICAgICAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgOiBsYXlvdXROdW1iZXJUb0Nzc0RpbWVuc2lvbihjb2x1bW5XaWR0aCksIC8vIHdlIGNhbid0IHNldCBhIHdpZHRoIGZvciBzZXJ2ZXIgcmVuZGVyZWQgZmxleGlibGUgaXRlbXNcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgcmVmPXtlbCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVsICYmICFmbGV4aWJsZSkge1xuICAgICAgICAgICAgICAgICAgLy8gb25seSBtZWFzdXJlIGZsZXhpYmxlIGl0ZW1zIG9uIGNsaWVudFxuICAgICAgICAgICAgICAgICAgbWVhc3VyZW1lbnRTdG9yZS5zZXQoaXRlbSwgZWwuY2xpZW50SGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxDb21wb25lbnQgZGF0YT17aXRlbX0gaXRlbUlkeD17aX0gaXNNZWFzdXJpbmc9e2ZhbHNlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHdpZHRoID09IG51bGwpIHtcbiAgICAgIC8vIFdoZW4gdGhlIHdpZHRoIGlzIGVtcHR5ICh1c3VhbGx5IGFmdGVyIGEgcmUtbW91bnQpIHJlbmRlciBhbiBlbXB0eVxuICAgICAgLy8gZGl2IHRvIGNvbGxlY3QgdGhlIHdpZHRoIGZvciBsYXlvdXRcbiAgICAgIGdyaWRCb2R5ID0gPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IHJlZj17dGhpcy5zZXRHcmlkV3JhcHBlclJlZn0gLz47XG4gICAgfSBlbHNlIHtcbiAgICAgIGdyaWRCb2R5ID0gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gcmVmPXt0aGlzLnNldEdyaWRXcmFwcGVyUmVmfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk1hc29ucnl9IHN0eWxlPXt7IGhlaWdodCwgd2lkdGggfX0+XG4gICAgICAgICAgICB7aXRlbXNUb1JlbmRlci5tYXAoKGl0ZW0sIGkpID0+XG4gICAgICAgICAgICAgIC8vICRGbG93Rml4TWUgdGhpcyBpcyB0aGUgcmlnaHQgZGVmaW5pdGlvbiwgaXQgYW4gQXJyYXk8VD5cbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJNYXNvbnJ5Q29tcG9uZW50KGl0ZW0sIGksIHJlbmRlclBvc2l0aW9uc1tpXSlcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5NYXNvbnJ5fSBzdHlsZT17eyB3aWR0aCB9fT5cbiAgICAgICAgICAgIHtpdGVtc1RvTWVhc3VyZS5tYXAoKGRhdGEsIGkpID0+IHtcbiAgICAgICAgICAgICAgLy8gaXRlbXNUb01lYXN1cmUgaXMgYWx3YXlzIHRoZSBsZW5ndGggb2YgbWluQ29scywgc28gaSB3aWxsIGFsd2F5cyBiZSAwLi5taW5Db2xzLmxlbmd0aFxuICAgICAgICAgICAgICAvLyB3ZSBub3JtYWxpemUgdGhlIGluZGV4IGhlcmUgcmVsYXRpdmUgdG8gdGhlIGl0ZW0gbGlzdCBhcyBhIHdob2xlIHNvIHRoYXQgaXRlbUlkeCBpcyBjb3JyZWN0XG4gICAgICAgICAgICAgIC8vIGFuZCBzbyB0aGF0IFJlYWN0IGRvZXNudCByZXVzZSB0aGUgbWVhc3VyZW1lbnQgbm9kZXNcbiAgICAgICAgICAgICAgY29uc3QgbWVhc3VyZW1lbnRJbmRleCA9IGl0ZW1zVG9SZW5kZXIubGVuZ3RoICsgaTtcbiAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBtZWFzdXJpbmdQb3NpdGlvbnNbaV07XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAga2V5PXtgbWVhc3VyaW5nLSR7bWVhc3VyZW1lbnRJbmRleH1gfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IGxheW91dE51bWJlclRvQ3NzRGltZW5zaW9uKHBvc2l0aW9uLnRvcCksXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IGxheW91dE51bWJlclRvQ3NzRGltZW5zaW9uKHBvc2l0aW9uLmxlZnQpLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogbGF5b3V0TnVtYmVyVG9Dc3NEaW1lbnNpb24ocG9zaXRpb24ud2lkdGgpLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGxheW91dE51bWJlclRvQ3NzRGltZW5zaW9uKHBvc2l0aW9uLmhlaWdodCksXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgcmVmPXtlbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgICAgICAgICAgIG1lYXN1cmVtZW50U3RvcmUuc2V0KGRhdGEsIGVsLmNsaWVudEhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPENvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgICAgICAgICBpdGVtSWR4PXttZWFzdXJlbWVudEluZGV4fVxuICAgICAgICAgICAgICAgICAgICBpc01lYXN1cmluZ1xuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuc2Nyb2xsQ29udGFpbmVyID8gKFxuICAgICAgPFNjcm9sbENvbnRhaW5lclxuICAgICAgICByZWY9e3RoaXMuc2V0U2Nyb2xsQ29udGFpbmVyUmVmfVxuICAgICAgICBvblNjcm9sbD17dGhpcy51cGRhdGVTY3JvbGxQb3NpdGlvbn1cbiAgICAgICAgc2Nyb2xsQ29udGFpbmVyPXt0aGlzLnByb3BzLnNjcm9sbENvbnRhaW5lcn1cbiAgICAgID5cbiAgICAgICAge2dyaWRCb2R5fVxuICAgICAgPC9TY3JvbGxDb250YWluZXI+XG4gICAgKSA6IChcbiAgICAgIGdyaWRCb2R5XG4gICAgKTtcbiAgfVxufVxuIiwiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGZXRjaEl0ZW1zIGZyb20gJy4vRmV0Y2hJdGVtcy5qcyc7XG5pbXBvcnQgTWVhc3VyZW1lbnRTdG9yZSBmcm9tICcuL01lYXN1cmVtZW50U3RvcmUuanMnO1xuaW1wb3J0IE1hc29ucnksIHsgdHlwZSBQcm9wcywgdHlwZSBNZWFzdXJlbWVudFN0YXRlIH0gZnJvbSAnLi9NYXNvbnJ5QmV0YS5qcyc7XG5pbXBvcnQgeyB0eXBlIFBvc2l0aW9uIH0gZnJvbSAnLi9kZWZhdWx0TGF5b3V0LmpzJztcblxudHlwZSBTdGF0ZTxUPiA9IHt8XG4gIGNvbnRhaW5lckhlaWdodDogbnVtYmVyLFxuICBoYXNQZW5kaW5nTWVhc3VyZW1lbnRzOiBib29sZWFuLFxuICBpc0ZldGNoaW5nOiBib29sZWFuLFxuICBpdGVtczogQXJyYXk8VD4sXG4gIHNjcm9sbFRvcDogbnVtYmVyLFxuICBzY3JvbGxIZWlnaHQ6IG51bWJlcixcbnx9O1xuXG4vKipcbiAqIFRoaXMgTWFzb25yeUluZmluaXRlQmV0YSBpcyBiYWNrd2FyZCBjb21wYXRpYmxlIHdpdGggTWFzb25yeSBhbmRcbiAqIHNlcnZlcyB0byBoZWxwIHdpdGggbWlncmF0aW5nIHRvIGEgTWFzcm9ueSB0aGF0IGRvZXNuJ3QgaGF2ZVxuICogdGhlIHNjcm9sIGZldGNoIGNvbmNlcm5zLlxuICpcbiAqIEl0IGlzIGluIGJldGEgc28gdGhhdCBpdCBjYW4gYmUgYmF0dGxlIHRlc3RlZC5cbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hc29ucnlJbmZpbml0ZUJldGE8VD4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFByb3BzPFQ+LFxuICBTdGF0ZTxUPlxuPiB7XG4gIHN0YXRpYyBjcmVhdGVNZWFzdXJlbWVudFN0b3JlKCkge1xuICAgIHJldHVybiBuZXcgTWVhc3VyZW1lbnRTdG9yZSgpO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IE1hc29ucnkuZGVmYXVsdFByb3BzO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wczxUPikge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjb250YWluZXJIZWlnaHQ6IDAsXG4gICAgICBoYXNQZW5kaW5nTWVhc3VyZW1lbnRzOiBmYWxzZSxcbiAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLXVudXNlZC1zdGF0ZVxuICAgICAgaXRlbXM6IHByb3BzLml0ZW1zLFxuICAgICAgc2Nyb2xsVG9wOiAwLFxuICAgICAgc2Nyb2xsSGVpZ2h0OiAwLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udGVudCBsYXllciBhbmQgVmlld3BvcnQgbGF5ZXIgaXMgYXMgZGVmaW5lZCBpbiBDb2xsZWN0aW9uLlxuICAgKi9cbiAgb25WaXJ0dWFsaXphdGlvbldpbmRvd1VwZGF0ZSA9IChjb250ZW50OiBQb3NpdGlvbiwgdmlld3BvcnQ6IFBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3QgeyBjb250YWluZXJIZWlnaHQsIHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0IH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmIChcbiAgICAgIHZpZXdwb3J0LmhlaWdodCAhPT0gY29udGFpbmVySGVpZ2h0IHx8XG4gICAgICB2aWV3cG9ydC50b3AgIT09IHNjcm9sbFRvcCB8fFxuICAgICAgY29udGVudC5oZWlnaHQgIT09IHNjcm9sbEhlaWdodFxuICAgICkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNvbnRhaW5lckhlaWdodDogdmlld3BvcnQuaGVpZ2h0LFxuICAgICAgICBzY3JvbGxUb3A6IHZpZXdwb3J0LnRvcCxcbiAgICAgICAgc2Nyb2xsSGVpZ2h0OiBjb250ZW50LmhlaWdodCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzOiBQcm9wczxUPiwgc3RhdGU6IFN0YXRlPFQ+KSB7XG4gICAgY29uc3QgeyBpdGVtcyB9ID0gcHJvcHM7XG5cbiAgICAvLyBhc3N1bWUgaW1tdXRhYmxlIGl0ZW1zXG4gICAgaWYgKHByb3BzLml0ZW1zICE9PSBzdGF0ZS5pdGVtcykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXRlbXMsXG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gbnVsbCB0byBpbmRpY2F0ZSBubyBjaGFuZ2UgdG8gc3RhdGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBzZXRSZWYgPSAocmVmOiBSZWFjdC5FbGVtZW50UmVmPCo+KSA9PiB7XG4gICAgaWYgKHJlZikge1xuICAgICAgdGhpcy5ncmlkUmVmID0gcmVmO1xuICAgIH1cbiAgfTtcblxuICBmZXRjaE1vcmUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBsb2FkSXRlbXMgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGxvYWRJdGVtcyAmJiB0eXBlb2YgbG9hZEl0ZW1zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICB7XG4gICAgICAgICAgaXNGZXRjaGluZzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4gbG9hZEl0ZW1zKHsgZnJvbTogdGhpcy5wcm9wcy5pdGVtcy5sZW5ndGggfSlcbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZU9uQXV0b01lYXN1cmluZ1VwZGF0ZSA9IChzdGF0ZTogTWVhc3VyZW1lbnRTdGF0ZSkgPT4ge1xuICAgIGNvbnN0IGhhc1BlbmRpbmdNZWFzdXJlbWVudHMgPSBzdGF0ZSA9PT0gJ21lYXN1cmluZyc7XG4gICAgaWYgKHRoaXMuc3RhdGUuaGFzUGVuZGluZ01lYXN1cmVtZW50cyAhPT0gaGFzUGVuZGluZ01lYXN1cmVtZW50cykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhhc1BlbmRpbmdNZWFzdXJlbWVudHMgfSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uQXV0b01lYXN1cmluZ1VwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5wcm9wcy5vbkF1dG9NZWFzdXJpbmdVcGRhdGUoc3RhdGUpO1xuICAgIH1cbiAgfTtcblxuICByZWZsb3cgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuZ3JpZFJlZikge1xuICAgICAgdGhpcy5ncmlkUmVmLnJlZmxvdygpO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuZ3JpZFJlZikge1xuICAgICAgdGhpcy5ncmlkUmVmLmhhbmRsZVJlc2l6ZSgpO1xuICAgIH1cbiAgfTtcblxuICBncmlkUmVmOiBNYXNvbnJ5PFQ+O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5zY3JvbGxDb250YWluZXIgPyAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxGZXRjaEl0ZW1zXG4gICAgICAgICAgY29udGFpbmVySGVpZ2h0PXt0aGlzLnN0YXRlLmNvbnRhaW5lckhlaWdodH1cbiAgICAgICAgICBmZXRjaE1vcmU9e3RoaXMuZmV0Y2hNb3JlfVxuICAgICAgICAgIGlzRmV0Y2hpbmc9e1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc0ZldGNoaW5nIHx8IHRoaXMuc3RhdGUuaGFzUGVuZGluZ01lYXN1cmVtZW50c1xuICAgICAgICAgIH1cbiAgICAgICAgICBzY3JvbGxIZWlnaHQ9e3RoaXMuc3RhdGUuc2Nyb2xsSGVpZ2h0fVxuICAgICAgICAgIHNjcm9sbFRvcD17dGhpcy5zdGF0ZS5zY3JvbGxUb3B9XG4gICAgICAgIC8+XG4gICAgICAgIDxNYXNvbnJ5XG4gICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgb25WaXJ0dWFsaXphdGlvbldpbmRvd1VwZGF0ZT17dGhpcy5vblZpcnR1YWxpemF0aW9uV2luZG93VXBkYXRlfVxuICAgICAgICAgIG9uQXV0b01lYXN1cmluZ1VwZGF0ZT17dGhpcy5oYW5kbGVPbkF1dG9NZWFzdXJpbmdVcGRhdGV9XG4gICAgICAgICAgcmVmPXt0aGlzLnNldFJlZn1cbiAgICAgICAgLz5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKSA6IChcbiAgICAgIDxNYXNvbnJ5IHsuLi50aGlzLnByb3BzfSByZWY9e3RoaXMuc2V0UmVmfSAvPlxuICAgICk7XG4gIH1cbn1cbiIsIi8qIEBmbG93ICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBjaGlsZHJlbj86IFJlYWN0Lk5vZGUsXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9TY3JvbGxCZWhhdmlvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5wcmV2T3ZlcmZsb3cgPSBudWxsO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnByZXZPdmVyZmxvdyA9IHdpbmRvdy5kb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93O1xuICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gdGhpcy5wcmV2T3ZlcmZsb3c7XG4gICAgfVxuICB9XG5cbiAgcHJldk92ZXJmbG93OiBzdHJpbmcgfCBudWxsO1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgfVxufVxuIiwiLyogQGZsb3cgKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxudHlwZSBQcm9wcyA9IHt8XG4gIGNoaWxkcmVuPzogUmVhY3QuTm9kZSxcbnx9O1xuXG5mdW5jdGlvbiBxdWVyeUZvY3VzYWJsZUFsbChlbDogSFRNTERpdkVsZW1lbnQpIHtcbiAgY29uc3Qgc2VsZWN0b3IgPSBbXG4gICAgJ2FbaHJlZl0nLFxuICAgICdhcmVhW2hyZWZdJyxcbiAgICAnaW5wdXQ6bm90KFtkaXNhYmxlZF0pJyxcbiAgICAnc2VsZWN0Om5vdChbZGlzYWJsZWRdKScsXG4gICAgJ3RleHRhcmVhOm5vdChbZGlzYWJsZWRdKScsXG4gICAgJ2J1dHRvbjpub3QoW2Rpc2FibGVkXSknLFxuICAgICdpZnJhbWUnLFxuICAgICdvYmplY3QnLFxuICAgICdlbWJlZCcsXG4gICAgJ1t0YWJpbmRleD1cIi0xXCJdJyxcbiAgICAnW3RhYmluZGV4PVwiMFwiXScsXG4gICAgJ1tjb250ZW50ZWRpdGFibGVdJyxcbiAgICAnYXVkaW9bY29udHJvbHNdJyxcbiAgICAndmlkZW9bY29udHJvbHNdJyxcbiAgICAnc3VtbWFyeScsXG4gIF0uam9pbignLCcpO1xuICByZXR1cm4gZWwucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG59XG5cbmNvbnN0IGZvY3VzRWxlbWVudCA9IChlbDogSFRNTEVsZW1lbnQpID0+IHtcbiAgaWYgKHR5cGVvZiBlbC5mb2N1cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVsLmZvY3VzKCk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYXBGb2N1c0JlaGF2aW9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJldmlvdXNseUZvY3VzZWRFbCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5mb2N1c0ZpcnN0Q2hpbGQoKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuaGFuZGxlRm9jdXMsIHRydWUpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLmhhbmRsZUZvY3VzLCB0cnVlKTtcbiAgICBpZiAodGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsKSB7XG4gICAgICBmb2N1c0VsZW1lbnQodGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsKTtcbiAgICB9XG4gIH1cblxuICBzZXRFbFJlZiA9IChlbDogP0hUTUxEaXZFbGVtZW50KSA9PiB7XG4gICAgaWYgKGVsKSB7XG4gICAgICB0aGlzLmVsID0gZWw7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUZvY3VzID0gKGV2ZW50OiBGb2N1c0V2ZW50KSA9PiB7XG4gICAgaWYgKFxuICAgICAgIXRoaXMuZWwgfHxcbiAgICAgIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiBOb2RlICYmIHRoaXMuZWwuY29udGFpbnMoZXZlbnQudGFyZ2V0KSlcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuZm9jdXNGaXJzdENoaWxkKCk7XG4gIH07XG5cbiAgZm9jdXNGaXJzdENoaWxkKCkge1xuICAgIGNvbnN0IHsgZWwgfSA9IHRoaXM7XG4gICAgaWYgKGVsKSB7XG4gICAgICBmb2N1c0VsZW1lbnQocXVlcnlGb2N1c2FibGVBbGwoZWwpWzBdKTtcbiAgICB9XG4gIH1cblxuICBlbDogP0hUTUxEaXZFbGVtZW50O1xuXG4gIHByZXZpb3VzbHlGb2N1c2VkRWw6ID9IVE1MRWxlbWVudDtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXYgcmVmPXt0aGlzLnNldEVsUmVmfT57dGhpcy5wcm9wcy5jaGlsZHJlbn08L2Rpdj47XG4gIH1cbn1cbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJveCBmcm9tICcuL0JveC5qcyc7XG5pbXBvcnQgRGl2aWRlciBmcm9tICcuL0RpdmlkZXIuanMnO1xuaW1wb3J0IEhlYWRpbmcgZnJvbSAnLi9IZWFkaW5nLmpzJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJy4vSWNvbkJ1dHRvbi5qcyc7XG5pbXBvcnQgU3RvcFNjcm9sbEJlaGF2aW9yIGZyb20gJy4vYmVoYXZpb3JzL1N0b3BTY3JvbGxCZWhhdmlvci5qcyc7XG5pbXBvcnQgVHJhcEZvY3VzQmVoYXZpb3IgZnJvbSAnLi9iZWhhdmlvcnMvVHJhcEZvY3VzQmVoYXZpb3IuanMnO1xuaW1wb3J0IE91dHNpZGVFdmVudEJlaGF2aW9yIGZyb20gJy4vYmVoYXZpb3JzL091dHNpZGVFdmVudEJlaGF2aW9yLmpzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Nb2RhbC5jc3MnO1xuXG50eXBlIFByb3BzID0ge3xcbiAgYWNjZXNzaWJpbGl0eUNsb3NlTGFiZWw6IHN0cmluZyxcbiAgYWNjZXNzaWJpbGl0eU1vZGFsTGFiZWw6IHN0cmluZyxcbiAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlLFxuICBmb290ZXI/OiBSZWFjdC5Ob2RlLFxuICBoZWFkaW5nOiBzdHJpbmcsXG4gIG9uRGlzbWlzczogKCkgPT4gdm9pZCxcbiAgcm9sZT86ICdhbGVydGRpYWxvZycgfCAnZGlhbG9nJyxcbiAgc2l6ZT86ICdzbScgfCAnbWQnIHwgJ2xnJyxcbnx9O1xuXG5jb25zdCBTSVpFX1dJRFRIX01BUCA9IHtcbiAgc206IDQxNCxcbiAgbWQ6IDU0NCxcbiAgbGc6IDgwNCxcbn07XG5cbmNvbnN0IEVTQ0FQRV9LRVlfQ09ERSA9IDI3O1xuXG5jb25zdCBCYWNrZHJvcCA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlIH0pID0+IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQmFja2Ryb3B9IC8+XG4gICAge2NoaWxkcmVufVxuICA8L1JlYWN0LkZyYWdtZW50PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgYWNjZXNzaWJpbGl0eUNsb3NlTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBmb290ZXI6IFByb3BUeXBlcy5ub2RlLFxuICAgIGhlYWRpbmc6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBhY2Nlc3NpYmlsaXR5TW9kYWxMYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG9uRGlzbWlzczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcm9sZTogUHJvcFR5cGVzLm9uZU9mKFsnYWxlcnRkaWFsb2cnLCAnZGlhbG9nJ10pLFxuICAgIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ3NtJywgJ21kJywgJ2xnJ10pLFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuaGFuZGxlS2V5VXApO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5oYW5kbGVLZXlVcCk7XG4gIH1cblxuICBoYW5kbGVPdXRzaWRlQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vbkRpc21pc3MoKTtcbiAgfTtcblxuICBoYW5kbGVDbG9zZUNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMub25EaXNtaXNzKCk7XG4gIH07XG5cbiAgaGFuZGxlS2V5VXAgPSAoZXZlbnQ6IHsga2V5Q29kZTogbnVtYmVyIH0pID0+IHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gRVNDQVBFX0tFWV9DT0RFKSB7XG4gICAgICB0aGlzLnByb3BzLm9uRGlzbWlzcygpO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYWNjZXNzaWJpbGl0eUNsb3NlTGFiZWwsXG4gICAgICBhY2Nlc3NpYmlsaXR5TW9kYWxMYWJlbCxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgZm9vdGVyLFxuICAgICAgaGVhZGluZyxcbiAgICAgIHJvbGUgPSAnZGlhbG9nJyxcbiAgICAgIHNpemUgPSAnc20nLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHdpZHRoID0gU0laRV9XSURUSF9NQVBbc2l6ZV07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFN0b3BTY3JvbGxCZWhhdmlvcj5cbiAgICAgICAgPFRyYXBGb2N1c0JlaGF2aW9yPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e2FjY2Vzc2liaWxpdHlNb2RhbExhYmVsfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfVxuICAgICAgICAgICAgcm9sZT17cm9sZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QmFja2Ryb3A+XG4gICAgICAgICAgICAgIDxPdXRzaWRlRXZlbnRCZWhhdmlvciBvbkNsaWNrPXt0aGlzLmhhbmRsZU91dHNpZGVDbGlja30+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfSB0YWJJbmRleD17LTF9IHN0eWxlPXt7IHdpZHRoIH19PlxuICAgICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICBmbGV4PVwiZ3Jvd1wiXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggZml0PlxuICAgICAgICAgICAgICAgICAgICAgIHtyb2xlID09PSAnZGlhbG9nJyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbmxpbmVTdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fc3R5bGU6IHsgcGFkZGluZ0xlZnQ6IDUwLCBwYWRkaW5nUmlnaHQ6IDUwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nWT17NX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cInhzXCIgYWNjZXNzaWJpbGl0eUxldmVsPXsxfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBwYWRkaW5nPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cInNtXCIgYWNjZXNzaWJpbGl0eUxldmVsPXsxfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICB7cm9sZSA9PT0gJ2RpYWxvZycgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBwYWRkaW5nPXsyfSBwb3NpdGlvbj1cImFic29sdXRlXCIgdG9wIHJpZ2h0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc2liaWxpdHlMYWJlbD17YWNjZXNzaWJpbGl0eUNsb3NlTGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZUNsaWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICB7cm9sZSA9PT0gJ2RpYWxvZycgJiYgPERpdmlkZXIgLz59XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICA8Qm94IGZsZXg9XCJncm93XCIgb3ZlcmZsb3c9XCJhdXRvXCIgcG9zaXRpb249XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggZml0PlxuICAgICAgICAgICAgICAgICAgICAgIHtmb290ZXIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3JvbGUgPT09ICdkaWFsb2cnICYmIDxEaXZpZGVyIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHBhZGRpbmc9ezR9Pntmb290ZXJ9PC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L091dHNpZGVFdmVudEJlaGF2aW9yPlxuICAgICAgICAgICAgPC9CYWNrZHJvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9UcmFwRm9jdXNCZWhhdmlvcj5cbiAgICAgIDwvU3RvcFNjcm9sbEJlaGF2aW9yPlxuICAgICk7XG4gIH1cbn1cbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJveCBmcm9tICcuL0JveC5qcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUHVsc2FyLmNzcyc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHBhdXNlZD86IGJvb2xlYW4sXG4gIHNpemU/OiBudW1iZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQdWxzYXIocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgcGF1c2VkLCBzaXplID0gMTM1IH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGRhbmdlcm91c2x5U2V0SW5saW5lU3R5bGU9e3tcbiAgICAgICAgX19zdHlsZToge1xuICAgICAgICAgIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiBwYXVzZWQgPyAwIDogJ2luZmluaXRlJyxcbiAgICAgICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICAgICAgYm94U2hhZG93OiAnbm9uZScsXG4gICAgICAgIH0sXG4gICAgICB9fVxuICAgICAgZGlzcGxheT17cGF1c2VkID8gJ25vbmUnIDogJ2Jsb2NrJ31cbiAgICAgIGhlaWdodD17c2l6ZX1cbiAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgd2lkdGg9e3NpemV9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbm5lckNpcmNsZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3V0ZXJDaXJjbGV9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L0JveD5cbiAgKTtcbn1cblxuUHVsc2FyLnByb3BUeXBlcyA9IHtcbiAgcGF1c2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbn07XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1JhZGlvQnV0dG9uLmNzcyc7XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBjaGVja2VkPzogYm9vbGVhbixcbiAgZGlzYWJsZWQ/OiBib29sZWFuLFxuICBpZDogc3RyaW5nLFxuICBuYW1lPzogc3RyaW5nLFxuICBvbkNoYW5nZTogKHtcbiAgICBldmVudDogU3ludGhldGljSW5wdXRFdmVudDw+LFxuICAgIGNoZWNrZWQ6IGJvb2xlYW4sXG4gIH0pID0+IHZvaWQsXG4gIHZhbHVlOiBzdHJpbmcsXG4gIHNpemU/OiAnc20nIHwgJ21kJyxcbnx9O1xuXG50eXBlIFN0YXRlID0ge3xcbiAgZm9jdXNlZDogYm9vbGVhbixcbnx9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYWRpb0J1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsnc20nLCAnbWQnXSksXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjaGVja2VkOiBmYWxzZSxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgc2l6ZTogJ21kJyxcbiAgfTtcblxuICBzdGF0ZSA9IHtcbiAgICBmb2N1c2VkOiBmYWxzZSxcbiAgfTtcblxuICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFN5bnRoZXRpY0lucHV0RXZlbnQ8PikgPT4ge1xuICAgIGNvbnN0IHsgY2hlY2tlZCB9ID0gZXZlbnQudGFyZ2V0O1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoeyBjaGVja2VkLCBldmVudCB9KTtcbiAgfTtcblxuICBoYW5kbGVCbHVyID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWQ6IGZhbHNlIH0pO1xuXG4gIGhhbmRsZUZvY3VzID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkOiB0cnVlIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoZWNrZWQsIGRpc2FibGVkLCBpZCwgbmFtZSwgc2l6ZSwgdmFsdWUgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5SYWRpb0J1dHRvbiwge1xuICAgICAgICAgIFtzdHlsZXMuUmFkaW9CdXR0b25Jc0ZvY3VzZWRdOiB0aGlzLnN0YXRlLmZvY3VzZWQsXG4gICAgICAgICAgW3N0eWxlcy5SYWRpb0J1dHRvblNtXTogc2l6ZSA9PT0gJ3NtJyxcbiAgICAgICAgICBbc3R5bGVzLlJhZGlvQnV0dG9uTWRdOiBzaXplID09PSAnbWQnLFxuICAgICAgICAgIFtzdHlsZXMuUmFkaW9CdXR0b25XaGl0ZUJnXTogIWRpc2FibGVkIHx8IGNoZWNrZWQsXG4gICAgICAgICAgW3N0eWxlcy5SYWRpb0J1dHRvbkxpZ2h0R3JheUJnXTogZGlzYWJsZWQgJiYgIWNoZWNrZWQsXG4gICAgICAgIH0pfVxuICAgICAgPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuSW5wdXQsIHtcbiAgICAgICAgICAgIFtzdHlsZXMuSW5wdXRFbmFibGVkXTogIWRpc2FibGVkLFxuICAgICAgICAgICAgW3N0eWxlcy5JbnB1dFNtXTogc2l6ZSA9PT0gJ3NtJyxcbiAgICAgICAgICAgIFtzdHlsZXMuSW5wdXRNZF06IHNpemUgPT09ICdtZCcsXG4gICAgICAgICAgfSl9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVCbHVyfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUZvY3VzfVxuICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAvPlxuICAgICAgICB7Y2hlY2tlZCAmJiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5DaGVjaywge1xuICAgICAgICAgICAgICBbc3R5bGVzLkNoZWNrU21dOiBzaXplID09PSAnc20nLFxuICAgICAgICAgICAgICBbc3R5bGVzLkNoZWNrTWRdOiBzaXplID09PSAnbWQnLFxuICAgICAgICAgICAgICBbc3R5bGVzLkNoZWNrRW5hYmxlZF06ICFkaXNhYmxlZCxcbiAgICAgICAgICAgICAgW3N0eWxlcy5DaGVja0Rpc2FibGVkXTogZGlzYWJsZWQsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgRmV0Y2hJdGVtcyBmcm9tICcuL0ZldGNoSXRlbXMuanMnO1xuaW1wb3J0IFNjcm9sbENvbnRhaW5lciBmcm9tICcuL1Njcm9sbENvbnRhaW5lci5qcyc7XG5pbXBvcnQge1xuICBnZXRFbGVtZW50SGVpZ2h0LFxuICBnZXRTY3JvbGxIZWlnaHQsXG4gIGdldFNjcm9sbFBvcyxcbn0gZnJvbSAnLi9zY3JvbGxVdGlscy5qcyc7XG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnLi90aHJvdHRsZS5qcyc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNvbnRhaW5lcj86IEhUTUxFbGVtZW50LFxuICBpc0F0RW5kPzogYm9vbGVhbixcbiAgaXNGZXRjaGluZzogYm9vbGVhbixcbiAgZmV0Y2hNb3JlPzogKCkgPT4gdm9pZCxcbiAgcmVuZGVySGVpZ2h0PzogKCkgPT4gbnVtYmVyLFxufTtcblxudHlwZSBTdGF0ZSA9IHtcbiAgY29udGFpbmVySGVpZ2h0OiBudW1iZXIsXG4gIHNjcm9sbEhlaWdodDogbnVtYmVyLFxuICBzY3JvbGxUb3A6IG51bWJlcixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbEZldGNoIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgLyoqXG4gICAqIEZldGNoZXMgYWRkaXRpb25hbCBpdGVtcyBpZiBuZWVkZWQuXG4gICAqL1xuICB1cGRhdGVQb3NpdGlvbiA9IHRocm90dGxlKCgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHRoaXMuZ2V0U2Nyb2xsU3RhdGUoKSk7XG4gIH0pO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHM6IHt9O1xuXG4gIHN0YXRlID0ge1xuICAgIGNvbnRhaW5lckhlaWdodDogMCxcbiAgICBzY3JvbGxIZWlnaHQ6IDAsXG4gICAgc2Nyb2xsVG9wOiAwLFxuICB9O1xuXG4gIC8qKlxuICAgKiBBZGRzIHNjcm9sbCBsaXN0ZW5lciBhZnRlciB0aGUgY29tcG9uZW50IG1vdW50cy5cbiAgICovXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgY29udGFpbmVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNvbnRhaW5lckhlaWdodDogZ2V0RWxlbWVudEhlaWdodChjb250YWluZXIpLFxuICAgICAgICAuLi50aGlzLmdldFNjcm9sbFN0YXRlKCksXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgc2Nyb2xsIGJ1ZmZlciBhbmQgY2hlY2sgYWZ0ZXIgdGhlIGNvbXBvbmVudCB1cGRhdGVzLlxuICAgKi9cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIC8vIHNldFRpbWVvdXQgc28gdGhlIHBhcmVudCBjb21wb25lbnQgY2FuIGNhbGN1bGF0ZSByZW5kZXJIZWlnaHQoKS5cbiAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc2Nyb2xsYWJsZSBjb250ZW50IGhlaWdodC5cbiAgICovXG4gIGdldFNjcm9sbEhlaWdodCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIHJldHVybiBnZXRTY3JvbGxIZWlnaHQoY29udGFpbmVyKTtcbiAgfTtcblxuICBnZXRTY3JvbGxTdGF0ZSgpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgcmVuZGVySGVpZ2h0IH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gcmVuZGVySGVpZ2h0IHx8IHRoaXMuZ2V0U2Nyb2xsSGVpZ2h0O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNjcm9sbEhlaWdodDogc2Nyb2xsSGVpZ2h0KCksXG4gICAgICBzY3JvbGxUb3A6IGdldFNjcm9sbFBvcyhjb250YWluZXIpLFxuICAgIH07XG4gIH1cblxuICBzY3JvbGxCdWZmZXI6IG51bWJlcjtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb250YWluZXJIZWlnaHQsIHNjcm9sbEhlaWdodCwgc2Nyb2xsVG9wIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCBmZXRjaE1vcmUsIGlzQXRFbmQsIGlzRmV0Y2hpbmcgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBwcm9wcyA9IHtcbiAgICAgIGNvbnRhaW5lckhlaWdodCxcbiAgICAgIGZldGNoTW9yZSxcbiAgICAgIGlzQXRFbmQsXG4gICAgICBpc0ZldGNoaW5nLFxuICAgICAgc2Nyb2xsSGVpZ2h0LFxuICAgICAgc2Nyb2xsVG9wLFxuICAgIH07XG5cbiAgICBpZiAoIWNvbnRhaW5lciB8fCBpc0F0RW5kKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxTY3JvbGxDb250YWluZXJcbiAgICAgICAgb25TY3JvbGw9e3RoaXMudXBkYXRlUG9zaXRpb259XG4gICAgICAgIHNjcm9sbENvbnRhaW5lcj17Y29udGFpbmVyfVxuICAgICAgPlxuICAgICAgICA8RmV0Y2hJdGVtcyB7Li4ucHJvcHN9IC8+XG4gICAgICA8L1Njcm9sbENvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5cblNjcm9sbEZldGNoLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoZSBzY3JvbGwgY29udGFpbmVyIHRvIHVzZS4gRGVmYXVsdHMgdG8gd2luZG93LlxuICAgKi9cbiAgY29udGFpbmVyOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGFkZEV2ZW50TGlzdGVuZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXI6IFByb3BUeXBlcy5mdW5jLFxuICB9KSxcbiAgcmVuZGVySGVpZ2h0OiBQcm9wVHlwZXMuZnVuYyxcbiAgaXNBdEVuZDogUHJvcFR5cGVzLmJvb2wsXG4gIGlzRmV0Y2hpbmc6IFByb3BUeXBlcy5ib29sLFxuICBmZXRjaE1vcmU6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuU2Nyb2xsRmV0Y2guZGVmYXVsdFByb3BzID0ge1xuICBjb250YWluZXI6IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogbnVsbCxcbn07XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NlYXJjaEZpZWxkLmNzcyc7XG5pbXBvcnQgQm94IGZyb20gJy4vQm94LmpzJztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbi5qcyc7XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBhY2Nlc3NpYmlsaXR5TGFiZWw6IHN0cmluZyxcbiAgYXV0b0NvbXBsZXRlPzogJ29uJyB8ICdvZmYnIHwgJ3VzZXJuYW1lJyB8ICduYW1lJyxcbiAgaWQ6IHN0cmluZyxcbiAgb25CbHVyPzogKHsgZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+IH0pID0+IHZvaWQsXG4gIG9uQ2hhbmdlOiAoe1xuICAgIHZhbHVlOiBzdHJpbmcsXG4gICAgc3ludGhldGljRXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+LFxuICB9KSA9PiB2b2lkLFxuICBvbkZvY3VzPzogKHtcbiAgICB2YWx1ZTogc3RyaW5nLFxuICAgIHN5bnRoZXRpY0V2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MSW5wdXRFbGVtZW50PixcbiAgfSkgPT4gdm9pZCxcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmcsXG4gIHZhbHVlPzogc3RyaW5nLFxufH07XG5cbnR5cGUgU3RhdGUgPSB7fFxuICBmb2N1c2VkOiBib29sZWFuLFxuICBob3ZlcmVkOiBib29sZWFuLFxufH07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaEZpZWxkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGFjY2Vzc2liaWxpdHlMYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGF1dG9Db21wbGV0ZTogUHJvcFR5cGVzLm9uZU9mKFsnb24nLCAnb2ZmJywgJ3VzZXJuYW1lJywgJ25hbWUnXSksXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9O1xuXG4gIHN0YXRlOiBTdGF0ZSA9IHtcbiAgICBmb2N1c2VkOiBmYWxzZSxcbiAgICBob3ZlcmVkOiBmYWxzZSxcbiAgfTtcblxuICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7XG4gICAgICB2YWx1ZTogZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSxcbiAgICAgIHN5bnRoZXRpY0V2ZW50OiBldmVudCxcbiAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVDbGVhciA9IChldmVudDogU3ludGhldGljRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHtcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIHN5bnRoZXRpY0V2ZW50OiBldmVudCxcbiAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVNb3VzZUVudGVyID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGhvdmVyZWQ6IHRydWUgfSk7XG5cbiAgaGFuZGxlTW91c2VMZWF2ZSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBob3ZlcmVkOiBmYWxzZSB9KTtcblxuICBoYW5kbGVGb2N1cyA9IChldmVudDogU3ludGhldGljRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZDogdHJ1ZSB9KTtcblxuICAgIGlmICh0aGlzLnByb3BzLm9uRm9jdXMpIHtcbiAgICAgIHRoaXMucHJvcHMub25Gb2N1cyh7XG4gICAgICAgIHZhbHVlOiBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlLFxuICAgICAgICBzeW50aGV0aWNFdmVudDogZXZlbnQsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlQmx1ciA9IChldmVudDogU3ludGhldGljRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZDogZmFsc2UgfSk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgIHRoaXMucHJvcHMub25CbHVyKHsgZXZlbnQgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBhY2Nlc3NpYmlsaXR5TGFiZWwsXG4gICAgICBhdXRvQ29tcGxldGUsXG4gICAgICBpZCxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgdmFsdWUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAvLyBUaGlzIG1pcnJvcnMgdGhlIGJ1aWx0IGluIGJyb3dzZXIgYmVoYXZpb3IuIElmIHRoZXJlJ3MgYSB2YWx1ZSwgc2hvdyB0aGVcbiAgICAvLyBjbGVhciBidXR0b24gaWYgeW91J3JlIGhvdmVyaW5nIG9yIGlmIHlvdSd2ZSBmb2N1c2VkIG9uIHRoZSBmaWVsZFxuICAgIGNvbnN0IHNob3dDbGVhciA9XG4gICAgICAodGhpcy5zdGF0ZS5mb2N1c2VkIHx8IHRoaXMuc3RhdGUuaG92ZXJlZCkgJiYgdmFsdWUgJiYgdmFsdWUubGVuZ3RoID4gMDtcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMuaGFuZGxlTW91c2VFbnRlcn1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZU1vdXNlTGVhdmV9XG4gICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlRm9jdXN9XG4gICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVCbHVyfVxuICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgID5cbiAgICAgICAgPEJveFxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5saW5lU3R5bGU9e3tcbiAgICAgICAgICAgIF9fc3R5bGU6IHtcbiAgICAgICAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgICAgICAgICAvLyBBZGRlZCB0aGUgZm9sbG93aW5nIGxpbmVzIGZvciBTYWZhcmkgc3VwcG9ydFxuICAgICAgICAgICAgICB0b3A6ICc1MCUnLFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcbiAgICAgICAgICBsZWZ0XG4gICAgICAgICAgcGFkZGluZ1g9ezR9XG4gICAgICAgID5cbiAgICAgICAgICA8SWNvbiBpY29uPVwic2VhcmNoXCIgYWNjZXNzaWJpbGl0eUxhYmVsPVwiXCIgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGFyaWEtbGFiZWw9e2FjY2Vzc2liaWxpdHlMYWJlbH1cbiAgICAgICAgICBhdXRvQ29tcGxldGU9e2F1dG9Db21wbGV0ZX1cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICByb2xlPVwic2VhcmNoYm94XCJcbiAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIC8+XG4gICAgICAgIHtzaG93Q2xlYXIgJiYgKFxuICAgICAgICAgIDxCb3ggcG9zaXRpb249XCJhYnNvbHV0ZVwiIHJpZ2h0IHRvcD5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2xlYXJ9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xlYXJ9XG4gICAgICAgICAgICAgIHRhYkluZGV4PXstMX1cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJY29uIGljb249XCJjbGVhclwiIGFjY2Vzc2liaWxpdHlMYWJlbD1cIlwiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgICk7XG4gIH1cbn1cbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgQm94IGZyb20gJy4vQm94LmpzJztcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU2VnbWVudGVkQ29udHJvbC5jc3MnO1xuXG50eXBlIFByb3BzID0ge3xcbiAgaXRlbXM6IEFycmF5PFJlYWN0Lk5vZGU+LFxuICBvbkNoYW5nZTogKHsgZXZlbnQ6IFN5bnRoZXRpY01vdXNlRXZlbnQ8PiwgYWN0aXZlSW5kZXg6IG51bWJlciB9KSA9PiB2b2lkLFxuICBzZWxlY3RlZEl0ZW1JbmRleDogbnVtYmVyLFxuICBzaXplPzogJ21kJyB8ICdsZycsXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VnbWVudGVkQ29udHJvbChwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgeyBpdGVtcywgb25DaGFuZ2UsIHNlbGVjdGVkSXRlbUluZGV4LCBzaXplID0gJ21kJyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5TZWdtZW50ZWRDb250cm9sLCB7XG4gICAgICAgIFtzdHlsZXMubWRdOiBzaXplID09PSAnbWQnLFxuICAgICAgICBbc3R5bGVzLmxnXTogc2l6ZSA9PT0gJ2xnJyxcbiAgICAgIH0pfVxuICAgICAgcm9sZT1cInRhYmxpc3RcIlxuICAgID5cbiAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IGkgPT09IHNlbGVjdGVkSXRlbUluZGV4O1xuICAgICAgICBjb25zdCBjcyA9IGNsYXNzbmFtZXMoc3R5bGVzLml0ZW0sIHtcbiAgICAgICAgICBbc3R5bGVzLml0ZW1Jc05vdFNlbGVjdGVkXTogIWlzU2VsZWN0ZWQsXG4gICAgICAgICAgW3N0eWxlcy5pdGVtSXNTZWxlY3RlZF06IGlzU2VsZWN0ZWQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGFyaWEtc2VsZWN0ZWQ9e2lzU2VsZWN0ZWR9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NzfVxuICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgb25DbGljaz17ZSA9PiBvbkNoYW5nZSh7IGV2ZW50OiBlLCBhY3RpdmVJbmRleDogaSB9KX1cbiAgICAgICAgICAgIHJvbGU9XCJ0YWJcIlxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3R5cGVvZiBpdGVtID09PSAnc3RyaW5nJyA/IChcbiAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICBib2xkXG4gICAgICAgICAgICAgICAgY29sb3I9e2lzU2VsZWN0ZWQgPyAnZGFya0dyYXknIDogJ2dyYXknfVxuICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIHtpdGVtfVxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuU2VnbWVudGVkQ29udHJvbC5wcm9wVHlwZXMgPSB7XG4gIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSkuaXNSZXF1aXJlZCxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNlbGVjdGVkSXRlbUluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG59O1xuIiwiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBCb3ggZnJvbSAnLi9Cb3guanMnO1xuaW1wb3J0IEZseW91dCBmcm9tICcuL0ZseW91dC5qcyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuanMnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uLmpzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TZWxlY3RMaXN0LmNzcyc7XG5cbnR5cGUgU3RhdGUgPSB7XG4gIGZvY3VzZWQ6IGJvb2xlYW4sXG4gIGVycm9ySXNPcGVuOiBib29sZWFuLFxuICBlcnJvck1lc3NhZ2U/OiBzdHJpbmcsXG59O1xuXG50eXBlIFByb3BzID0ge3xcbiAgZXJyb3JNZXNzYWdlPzogc3RyaW5nLFxuICBkaXNhYmxlZD86IGJvb2xlYW4sXG4gIGlkOiBzdHJpbmcsXG4gIGlkZWFsRXJyb3JEaXJlY3Rpb24/OiAndXAnIHwgJ3JpZ2h0JyB8ICdkb3duJyB8ICdsZWZ0JyAvKiBkZWZhdWx0OiByaWdodCAqLyxcbiAgbmFtZT86IHN0cmluZyxcbiAgb25DaGFuZ2U6ICh7IGV2ZW50OiBTeW50aGV0aWNJbnB1dEV2ZW50PD4sIHZhbHVlOiBzdHJpbmcgfSkgPT4gdm9pZCxcbiAgb3B0aW9uczogQXJyYXk8e1xuICAgIGxhYmVsOiBzdHJpbmcsXG4gICAgdmFsdWU6IHN0cmluZyxcbiAgfT4sXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nLFxuICB2YWx1ZT86ID9zdHJpbmcsXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0TGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZXJyb3JNZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaWRlYWxFcnJvckRpcmVjdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLmV4YWN0KHtcbiAgICAgICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIH0pXG4gICAgKSxcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBpZGVhbEVycm9yRGlyZWN0aW9uOiAncmlnaHQnLFxuICAgIG9wdGlvbnM6IFtdLFxuICB9O1xuXG4gIHN0YXRlID0ge1xuICAgIGZvY3VzZWQ6IGZhbHNlLFxuICAgIGVycm9ySXNPcGVuOiBmYWxzZSxcbiAgfTtcblxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzOiBQcm9wcywgc3RhdGU6IFN0YXRlKSB7XG4gICAgaWYgKHByb3BzLmVycm9yTWVzc2FnZSAhPT0gc3RhdGUuZXJyb3JNZXNzYWdlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlcnJvcklzT3BlbjogISFwcm9wcy5lcnJvck1lc3NhZ2UsXG4gICAgICAgIGVycm9yTWVzc2FnZTogcHJvcHMuZXJyb3JNZXNzYWdlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGhhbmRsZU9uQ2hhbmdlID0gKGV2ZW50OiBTeW50aGV0aWNJbnB1dEV2ZW50PD4pID0+IHtcbiAgICBpZiAoXG4gICAgICBldmVudC50YXJnZXQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCAmJlxuICAgICAgdGhpcy5wcm9wcy52YWx1ZSAhPT0gZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHsgZXZlbnQsIHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmVycm9yTWVzc2FnZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JJc09wZW46IGZhbHNlIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBoYW5kbGVCbHVyID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLmVycm9yTWVzc2FnZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9ySXNPcGVuOiBmYWxzZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlRm9jdXMgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMuZXJyb3JNZXNzYWdlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JJc09wZW46IHRydWUgfSk7XG4gICAgfVxuICB9O1xuXG4gIHNlbGVjdDogP0hUTUxTZWxlY3RFbGVtZW50O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgIGlkLFxuICAgICAgaWRlYWxFcnJvckRpcmVjdGlvbixcbiAgICAgIG5hbWUsXG4gICAgICBvcHRpb25zLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICB2YWx1ZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjbGFzc25hbWVzKFxuICAgICAgc3R5bGVzLnNlbGVjdCxcbiAgICAgIGRpc2FibGVkID8gc3R5bGVzLmRpc2FibGVkIDogc3R5bGVzLmVuYWJsZWQsXG4gICAgICBlcnJvck1lc3NhZ2UgPyBzdHlsZXMuZXJyb3JlZCA6IHN0eWxlcy5ub3JtYWxcbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3hcbiAgICAgICAgY29sb3I9e2Rpc2FibGVkID8gJ2xpZ2h0R3JheScgOiAnd2hpdGUnfVxuICAgICAgICBkYW5nZXJvdXNseVNldElubGluZVN0eWxlPXt7IF9fc3R5bGU6IHsgYm9yZGVyUmFkaXVzOiA0IH0gfX1cbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgID5cbiAgICAgICAgPEJveFxuICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgIGJvdHRvbVxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5saW5lU3R5bGU9e3tcbiAgICAgICAgICAgIF9fc3R5bGU6IHsgcGFkZGluZ1JpZ2h0OiAxNCwgcGFkZGluZ1RvcDogMiB9LFxuICAgICAgICAgIH19XG4gICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICAgIHJpZ2h0XG4gICAgICAgICAgdG9wXG4gICAgICAgID5cbiAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgaWNvbj1cImFycm93LWRvd25cIlxuICAgICAgICAgICAgc2l6ZT17MTJ9XG4gICAgICAgICAgICBjb2xvcj17ZGlzYWJsZWQgPyAnZ3JheScgOiAnZGFya0dyYXknfVxuICAgICAgICAgICAgYWNjZXNzaWJpbGl0eUxhYmVsPVwiXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICYmIHRoaXMuc3RhdGUuZm9jdXNlZCA/IGAke2lkfS1nZXN0YWx0LWVycm9yYCA6IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgICAgYXJpYS1pbnZhbGlkPXtlcnJvck1lc3NhZ2UgPyAndHJ1ZScgOiAnZmFsc2UnfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVGb2N1c31cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICByZWY9e2MgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3QgPSBjO1xuICAgICAgICAgIH19XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICA+XG4gICAgICAgICAge3BsYWNlaG9sZGVyICYmXG4gICAgICAgICAgICAhdmFsdWUgJiYgKFxuICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkIGRpc2FibGVkIHZhbHVlIGhpZGRlbj5cbiAgICAgICAgICAgICAgICB7cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICB7b3B0aW9ucy5tYXAob3B0aW9uID0+IChcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtvcHRpb24udmFsdWV9IHZhbHVlPXtvcHRpb24udmFsdWV9PlxuICAgICAgICAgICAgICB7b3B0aW9uLmxhYmVsfVxuICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICB7ZXJyb3JNZXNzYWdlICYmXG4gICAgICAgICAgdGhpcy5zdGF0ZS5lcnJvcklzT3BlbiAmJiAoXG4gICAgICAgICAgICA8Rmx5b3V0XG4gICAgICAgICAgICAgIGFuY2hvcj17dGhpcy5zZWxlY3R9XG4gICAgICAgICAgICAgIGNvbG9yPVwib3JhbmdlXCJcbiAgICAgICAgICAgICAgaWRlYWxEaXJlY3Rpb249e2lkZWFsRXJyb3JEaXJlY3Rpb259XG4gICAgICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGVycm9ySXNPcGVuOiBmYWxzZSB9KX1cbiAgICAgICAgICAgICAgc2hvdWxkRm9jdXM9e2ZhbHNlfVxuICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Qm94IHBhZGRpbmc9ezN9PlxuICAgICAgICAgICAgICAgIDxUZXh0IGJvbGQgY29sb3I9XCJ3aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9e2Ake2lkfS1nZXN0YWx0LWVycm9yYH0+e2Vycm9yTWVzc2FnZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvRmx5b3V0PlxuICAgICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICApO1xuICB9XG59XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCb3ggZnJvbSAnLi9Cb3guanMnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uLmpzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TcGlubmVyLmNzcyc7XG5cbmNvbnN0IFNJWkUgPSA0MDtcblxudHlwZSBQcm9wcyA9IHt8XG4gIGFjY2Vzc2liaWxpdHlMYWJlbDogc3RyaW5nLFxuICBzaG93OiBib29sZWFuLFxufH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNwaW5uZXIoeyBhY2Nlc3NpYmlsaXR5TGFiZWwsIHNob3cgfTogUHJvcHMpIHtcbiAgcmV0dXJuIHNob3cgPyAoXG4gICAgPEJveCB4cz17eyBkaXNwbGF5OiAnZmxleCcgfX0ganVzdGlmeUNvbnRlbnQ9XCJhcm91bmRcIiBvdmVyZmxvdz1cImhpZGRlblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufT5cbiAgICAgICAgPEljb25cbiAgICAgICAgICBpY29uPVwia25vb3BcIlxuICAgICAgICAgIGFjY2Vzc2liaWxpdHlMYWJlbD17YWNjZXNzaWJpbGl0eUxhYmVsfVxuICAgICAgICAgIHNpemU9e1NJWkV9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L0JveD5cbiAgKSA6IChcbiAgICA8ZGl2IC8+XG4gICk7XG59XG5cblNwaW5uZXIucHJvcFR5cGVzID0ge1xuICBzaG93OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBhY2Nlc3NpYmlsaXR5TGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGxheW91dCBmcm9tICcuL0xheW91dC5jc3MnO1xuXG50eXBlIFRocmVzaG9sZCA9XG4gIHwge3wgdG9wOiBudW1iZXIgfCBzdHJpbmcgfH1cbiAgfCB7fCBib3R0b206IG51bWJlciB8IHN0cmluZyB8fVxuICB8IHt8IGxlZnQ6IG51bWJlciB8IHN0cmluZyB8fVxuICB8IHt8IHJpZ2h0OiBudW1iZXIgfCBzdHJpbmcgfH1cbiAgfCB7fCB0b3A6IG51bWJlciB8IHN0cmluZywgYm90dG9tOiBudW1iZXIgfCBzdHJpbmcgfH1cbiAgfCB7fCBsZWZ0OiBudW1iZXIgfCBzdHJpbmcsIHJpZ2h0OiBudW1iZXIgfCBzdHJpbmcgfH1cbiAgfCB7fFxuICAgICAgdG9wOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgICBsZWZ0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgICByaWdodDogbnVtYmVyIHwgc3RyaW5nLFxuICAgICAgYm90dG9tOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgfH07XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBjaGlsZHJlbjogUmVhY3QuTm9kZSxcbiAgZGFuZ2Vyb3VzbHlTZXRaSW5kZXg/OiB7IF9fekluZGV4OiBudW1iZXIgfSxcbiAgLi4uVGhyZXNob2xkLFxufH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0aWNreShwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgeyBkYW5nZXJvdXNseVNldFpJbmRleCA9IHsgX196SW5kZXg6IDEgfSwgY2hpbGRyZW4gfSA9IHByb3BzO1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICB0b3A6IHByb3BzLnRvcCAhPSBudWxsID8gcHJvcHMudG9wIDogdW5kZWZpbmVkLFxuICAgIGxlZnQ6IHByb3BzLmxlZnQgIT0gbnVsbCA/IHByb3BzLmxlZnQgOiB1bmRlZmluZWQsXG4gICAgcmlnaHQ6IHByb3BzLnJpZ2h0ICE9IG51bGwgPyBwcm9wcy5yaWdodCA6IHVuZGVmaW5lZCxcbiAgICBib3R0b206IHByb3BzLmJvdHRvbSAhPSBudWxsID8gcHJvcHMuYm90dG9tIDogdW5kZWZpbmVkLFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuICAgIHpJbmRleDogZGFuZ2Vyb3VzbHlTZXRaSW5kZXguX196SW5kZXgsXG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2xheW91dC5zdGlja3l9IHN0eWxlPXtzdHlsZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblN0aWNreS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgZGFuZ2Vyb3VzbHlTZXRaSW5kZXg6IFByb3BUeXBlcy5leGFjdCh7XG4gICAgX196SW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIH0pLFxuICB0b3A6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgbGVmdDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBib3R0b206IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgcmlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbn07XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1N3aXRjaC5jc3MnO1xuXG50eXBlIFByb3BzID0ge3xcbiAgZGlzYWJsZWQ/OiBib29sZWFuLFxuICBpZDogc3RyaW5nLFxuICBuYW1lPzogc3RyaW5nLFxuICBvbkNoYW5nZTogKHsgZXZlbnQ6IFN5bnRoZXRpY0lucHV0RXZlbnQ8PiwgdmFsdWU6IGJvb2xlYW4gfSkgPT4gdm9pZCxcbiAgc3dpdGNoZWQ/OiBib29sZWFuLFxufH07XG5cbnR5cGUgU3RhdGUgPSB7fFxuICBmb2N1c2VkOiBib29sZWFuLFxufH07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN3aXRjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHN3aXRjaGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBzd2l0Y2hlZDogZmFsc2UsXG4gIH07XG5cbiAgc3RhdGU6IFN0YXRlID0ge1xuICAgIGZvY3VzZWQ6IGZhbHNlLFxuICB9O1xuXG4gIGhhbmRsZUJsdXIgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZDogZmFsc2UgfSk7XG5cbiAgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBTeW50aGV0aWNJbnB1dEV2ZW50PD4pID0+IHtcbiAgICBjb25zdCB7IGNoZWNrZWQgfSA9IGV2ZW50LnRhcmdldDtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHtcbiAgICAgIGV2ZW50LFxuICAgICAgdmFsdWU6IGNoZWNrZWQsXG4gICAgfSk7XG4gIH07XG5cbiAgaGFuZGxlRm9jdXMgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWQ6IHRydWUgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGlzYWJsZWQsIGlkLCBuYW1lLCBzd2l0Y2hlZCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHN3aXRjaFN0eWxlcyA9IGNsYXNzbmFtZXMoXG4gICAgICBzdHlsZXMuc3dpdGNoLFxuICAgICAge1xuICAgICAgICBbc3R5bGVzLmZvY3VzZWRdOiB0aGlzLnN0YXRlLmZvY3VzZWQsXG4gICAgICB9LFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5lc3RlZC10ZXJuYXJ5XG4gICAgICBkaXNhYmxlZFxuICAgICAgICA/IHN3aXRjaGVkXG4gICAgICAgICAgPyBzdHlsZXMuc3dpdGNoR3JheVxuICAgICAgICAgIDogc3R5bGVzLnN3aXRjaExpZ2h0R3JheVxuICAgICAgICA6IHN3aXRjaGVkXG4gICAgICAgICAgPyBzdHlsZXMuc3dpdGNoRGFya0dyYXlcbiAgICAgICAgICA6IHN0eWxlcy5zd2l0Y2hXaGl0ZVxuICAgICk7XG5cbiAgICBjb25zdCBzbGlkZXJTdHlsZXMgPSBjbGFzc25hbWVzKFxuICAgICAgc3R5bGVzLnNsaWRlcixcbiAgICAgIHN3aXRjaGVkID8gc3R5bGVzLnNsaWRlclJpZ2h0IDogc3R5bGVzLnNsaWRlckxlZnQsXG4gICAgICBzd2l0Y2hlZCAmJiAhZGlzYWJsZWQgPyBzdHlsZXMuc2xpZGVyRGFyayA6IHN0eWxlcy5zbGlkZXJMaWdodFxuICAgICk7XG5cbiAgICBjb25zdCBpbnB1dFN0eWxlcyA9IGNsYXNzbmFtZXMoc3R5bGVzLmNoZWNrYm94LCB7XG4gICAgICBbc3R5bGVzLmNoZWNrYm94RW5hYmxlZF06ICFkaXNhYmxlZCxcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3dpdGNoU3R5bGVzfT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2hlY2tlZD17c3dpdGNoZWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtpbnB1dFN0eWxlc31cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlRm9jdXN9XG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3NsaWRlclN0eWxlc30gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuanMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RhYnMuY3NzJztcbmltcG9ydCBsYXlvdXQgZnJvbSAnLi9MYXlvdXQuY3NzJztcblxudHlwZSBQcm9wcyA9IHt8XG4gIGFjdGl2ZVRhYkluZGV4OiBudW1iZXIsXG4gIHRhYnM6IEFycmF5PHt8XG4gICAgdGV4dDogUmVhY3QuTm9kZSxcbiAgICBocmVmOiBzdHJpbmcsXG4gIHx9PixcbiAgb25DaGFuZ2U6ICh7XG4gICAgZXZlbnQ6IFN5bnRoZXRpY01vdXNlRXZlbnQ8PixcbiAgICBhY3RpdmVUYWJJbmRleDogbnVtYmVyLFxuICB9KSA9PiB2b2lkLFxuICB3cmFwPzogYm9vbGVhbixcbnx9O1xuXG50eXBlIFN0YXRlID0ge3xcbiAgZm9jdXNlZFRhYkluZGV4OiA/bnVtYmVyLFxuICBob3ZlcmVkVGFiSW5kZXg6ID9udW1iZXIsXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFicyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBhY3RpdmVUYWJJbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHRhYnM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLmV4YWN0KHtcbiAgICAgICAgdGV4dDogUHJvcFR5cGVzLm5vZGUsXG4gICAgICAgIGhyZWY6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICB9KVxuICAgICkuaXNSZXF1aXJlZCxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICB3cmFwOiBQcm9wVHlwZXMuYm9vbCxcbiAgfTtcblxuICBzdGF0ZTogU3RhdGUgPSB7XG4gICAgZm9jdXNlZFRhYkluZGV4OiB1bmRlZmluZWQsXG4gICAgaG92ZXJlZFRhYkluZGV4OiB1bmRlZmluZWQsXG4gIH07XG5cbiAgaGFuZGxlVGFiQ2xpY2sgPSAoaTogbnVtYmVyLCBlOiBTeW50aGV0aWNNb3VzZUV2ZW50PD4pID0+IHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIG9uQ2hhbmdlKHsgYWN0aXZlVGFiSW5kZXg6IGksIGV2ZW50OiBlIH0pO1xuICB9O1xuXG4gIGhhbmRsZVRhYkZvY3VzID0gKGk6IG51bWJlcikgPT4gdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWRUYWJJbmRleDogaSB9KTtcblxuICBoYW5kbGVUYWJCbHVyID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWRUYWJJbmRleDogdW5kZWZpbmVkIH0pO1xuXG4gIGhhbmRsZVRhYk1vdXNlRW50ZXIgPSAoaTogbnVtYmVyKSA9PiB0aGlzLnNldFN0YXRlKHsgaG92ZXJlZFRhYkluZGV4OiBpIH0pO1xuXG4gIGhhbmRsZVRhYk1vdXNlTGVhdmUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgaG92ZXJlZFRhYkluZGV4OiB1bmRlZmluZWQgfSk7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGFicywgYWN0aXZlVGFiSW5kZXgsIHdyYXAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBmb2N1c2VkVGFiSW5kZXgsIGhvdmVyZWRUYWJJbmRleCB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLlRhYnMsIHdyYXAgJiYgbGF5b3V0LmZsZXhXcmFwKX1cbiAgICAgICAgcm9sZT1cInRhYmxpc3RcIlxuICAgICAgPlxuICAgICAgICB7dGFicy5tYXAoKHsgdGV4dCwgaHJlZiB9LCBpKSA9PiB7XG4gICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBpID09PSBhY3RpdmVUYWJJbmRleDtcbiAgICAgICAgICBjb25zdCBpc0hvdmVyZWQgPSBpID09PSBob3ZlcmVkVGFiSW5kZXg7XG4gICAgICAgICAgY29uc3QgaXNGb2N1c2VkID0gaSA9PT0gZm9jdXNlZFRhYkluZGV4O1xuICAgICAgICAgIGNvbnN0IGNzID0gY2xhc3NuYW1lcyhzdHlsZXMudGFiLCB7XG4gICAgICAgICAgICBbc3R5bGVzLnRhYklzTm90QWN0aXZlXTogIWlzQWN0aXZlLFxuICAgICAgICAgICAgW3N0eWxlcy50YWJJc0FjdGl2ZV06IGlzQWN0aXZlLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBhcmlhLXNlbGVjdGVkPXtpc0FjdGl2ZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjc31cbiAgICAgICAgICAgICAgaHJlZj17aHJlZn1cbiAgICAgICAgICAgICAga2V5PXtocmVmfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZTogU3ludGhldGljTW91c2VFdmVudDw+KSA9PiB0aGlzLmhhbmRsZVRhYkNsaWNrKGksIGUpfVxuICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiB0aGlzLmhhbmRsZVRhYkZvY3VzKGkpfVxuICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlVGFiQmx1cn1cbiAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiB0aGlzLmhhbmRsZVRhYk1vdXNlRW50ZXIoaSl9XG4gICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5oYW5kbGVUYWJNb3VzZUxlYXZlfVxuICAgICAgICAgICAgICByb2xlPVwidGFiXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICBib2xkXG4gICAgICAgICAgICAgICAgY29sb3I9e2lzQWN0aXZlIHx8IGlzSG92ZXJlZCB8fCBpc0ZvY3VzZWQgPyAnZGFya0dyYXknIDogJ2dyYXknfVxuICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEZseW91dCBmcm9tICcuL0ZseW91dC5qcyc7XG5pbXBvcnQgQm94IGZyb20gJy4vQm94LmpzJztcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVGV4dEFyZWEuY3NzJztcblxudHlwZSBTdGF0ZSA9IHtcbiAgZm9jdXNlZDogYm9vbGVhbixcbiAgZXJyb3JJc09wZW46IGJvb2xlYW4sXG4gIGVycm9yTWVzc2FnZT86IHN0cmluZyxcbn07XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBlcnJvck1lc3NhZ2U/OiBzdHJpbmcsXG4gIGRpc2FibGVkPzogYm9vbGVhbixcbiAgaGFzRXJyb3I/OiBib29sZWFuLFxuICBpZDogc3RyaW5nLFxuICBpZGVhbEVycm9yRGlyZWN0aW9uPzogJ3VwJyB8ICdyaWdodCcgfCAnZG93bicgfCAnbGVmdCcgLyogZGVmYXVsdDogcmlnaHQgKi8sXG4gIG5hbWU/OiBzdHJpbmcsXG4gIG9uQmx1cj86ICh7XG4gICAgZXZlbnQ6IFN5bnRoZXRpY0ZvY3VzRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4sXG4gICAgdmFsdWU6IHN0cmluZyxcbiAgfSkgPT4gdm9pZCxcbiAgb25DaGFuZ2U6ICh7XG4gICAgZXZlbnQ6IFN5bnRoZXRpY0lucHV0RXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4sXG4gICAgdmFsdWU6IHN0cmluZyxcbiAgfSkgPT4gdm9pZCxcbiAgb25Gb2N1cz86ICh7XG4gICAgZXZlbnQ6IFN5bnRoZXRpY0ZvY3VzRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4sXG4gICAgdmFsdWU6IHN0cmluZyxcbiAgfSkgPT4gdm9pZCxcbiAgb25LZXlEb3duPzogKHtcbiAgICBldmVudDogU3ludGhldGljS2V5Ym9hcmRFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PixcbiAgICB2YWx1ZTogc3RyaW5nLFxuICB9KSA9PiB2b2lkLFxuICBwbGFjZWhvbGRlcj86IHN0cmluZyxcbiAgcm93cz86IG51bWJlciAvKiBkZWZhdWx0OiAzICovLFxuICB2YWx1ZT86IHN0cmluZyxcbnx9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0QXJlYSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZXJyb3JNZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGhhc0Vycm9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGlkZWFsRXJyb3JEaXJlY3Rpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcm93czogUHJvcFR5cGVzLm51bWJlcixcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBoYXNFcnJvcjogZmFsc2UsXG4gICAgaWRlYWxFcnJvckRpcmVjdGlvbjogJ3JpZ2h0JyxcbiAgICByb3dzOiAzLFxuICB9O1xuXG4gIHN0YXRlID0ge1xuICAgIGZvY3VzZWQ6IGZhbHNlLFxuICAgIGVycm9ySXNPcGVuOiBmYWxzZSxcbiAgfTtcblxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzOiBQcm9wcywgc3RhdGU6IFN0YXRlKSB7XG4gICAgaWYgKHByb3BzLmVycm9yTWVzc2FnZSAhPT0gc3RhdGUuZXJyb3JNZXNzYWdlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlcnJvcklzT3BlbjogISFwcm9wcy5lcnJvck1lc3NhZ2UsXG4gICAgICAgIGVycm9yTWVzc2FnZTogcHJvcHMuZXJyb3JNZXNzYWdlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChldmVudDogU3ludGhldGljSW5wdXRFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4ge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoe1xuICAgICAgZXZlbnQsXG4gICAgICB2YWx1ZTogZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSxcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLnByb3BzLmVycm9yTWVzc2FnZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9ySXNPcGVuOiB0cnVlIH0pO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVCbHVyID0gKGV2ZW50OiBTeW50aGV0aWNGb2N1c0V2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMuZXJyb3JNZXNzYWdlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JJc09wZW46IGZhbHNlIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgIHRoaXMucHJvcHMub25CbHVyKHtcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIHZhbHVlOiBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUZvY3VzID0gKGV2ZW50OiBTeW50aGV0aWNGb2N1c0V2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMuZXJyb3JNZXNzYWdlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JJc09wZW46IHRydWUgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm9uRm9jdXMpIHtcbiAgICAgIHRoaXMucHJvcHMub25Gb2N1cyh7XG4gICAgICAgIGV2ZW50LFxuICAgICAgICB2YWx1ZTogZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVLZXlEb3duID0gKGV2ZW50OiBTeW50aGV0aWNLZXlib2FyZEV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub25LZXlEb3duKSB7XG4gICAgICB0aGlzLnByb3BzLm9uS2V5RG93bih7XG4gICAgICAgIGV2ZW50LFxuICAgICAgICB2YWx1ZTogZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICB0ZXh0YXJlYTogP0hUTUxFbGVtZW50O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgIGhhc0Vycm9yLFxuICAgICAgaWQsXG4gICAgICBpZGVhbEVycm9yRGlyZWN0aW9uLFxuICAgICAgbmFtZSxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgcm93cyxcbiAgICAgIHZhbHVlLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNsYXNzbmFtZXMoXG4gICAgICBzdHlsZXMudGV4dEFyZWEsXG4gICAgICBkaXNhYmxlZCA/IHN0eWxlcy5kaXNhYmxlZCA6IHN0eWxlcy5lbmFibGVkLFxuICAgICAgaGFzRXJyb3IgfHwgZXJyb3JNZXNzYWdlID8gc3R5bGVzLmVycm9yZWQgOiBzdHlsZXMubm9ybWFsXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8c3Bhbj5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgYXJpYS1kZXNjcmliZWRieT17XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgJiYgdGhpcy5zdGF0ZS5mb2N1c2VkID8gYCR7aWR9LWdlc3RhbHQtZXJyb3JgIDogbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgICBhcmlhLWludmFsaWQ9e2Vycm9yTWVzc2FnZSB8fCBoYXNFcnJvciA/ICd0cnVlJyA6ICdmYWxzZSd9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlQmx1cn1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVGb2N1c31cbiAgICAgICAgICBvbktleURvd249e3RoaXMuaGFuZGxlS2V5RG93bn1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgcmVmPXtjID0+IHtcbiAgICAgICAgICAgIHRoaXMudGV4dGFyZWEgPSBjO1xuICAgICAgICAgIH19XG4gICAgICAgICAgcm93cz17cm93c31cbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIC8+XG4gICAgICAgIHtlcnJvck1lc3NhZ2UgJiYgdGhpcy5zdGF0ZS5lcnJvcklzT3BlbiA/IChcbiAgICAgICAgICA8Rmx5b3V0XG4gICAgICAgICAgICBhbmNob3I9e3RoaXMudGV4dGFyZWF9XG4gICAgICAgICAgICBjb2xvcj1cIm9yYW5nZVwiXG4gICAgICAgICAgICBpZGVhbERpcmVjdGlvbj17aWRlYWxFcnJvckRpcmVjdGlvbn1cbiAgICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGVycm9ySXNPcGVuOiBmYWxzZSB9KX1cbiAgICAgICAgICAgIHNob3VsZEZvY3VzPXtmYWxzZX1cbiAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJveCBwYWRkaW5nPXszfT5cbiAgICAgICAgICAgICAgPFRleHQgYm9sZCBjb2xvcj1cIndoaXRlXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9e2Ake2lkfS1nZXN0YWx0LWVycm9yYH0+e2Vycm9yTWVzc2FnZX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvRmx5b3V0PlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvc3Bhbj5cbiAgICApO1xuICB9XG59XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgRmx5b3V0IGZyb20gJy4vRmx5b3V0LmpzJztcbmltcG9ydCBCb3ggZnJvbSAnLi9Cb3guanMnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UZXh0RmllbGQuY3NzJztcblxudHlwZSBTdGF0ZSA9IHtcbiAgZm9jdXNlZDogYm9vbGVhbixcbiAgZXJyb3JJc09wZW46IGJvb2xlYW4sXG4gIGVycm9yTWVzc2FnZT86IHN0cmluZyxcbn07XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBhdXRvQ29tcGxldGU/OiAnY3VycmVudC1wYXNzd29yZCcgfCAnb24nIHwgJ29mZicgfCAndXNlcm5hbWUnLFxuICBkaXNhYmxlZD86IGJvb2xlYW4sXG4gIGVycm9yTWVzc2FnZT86IHN0cmluZyxcbiAgaGFzRXJyb3I/OiBib29sZWFuLFxuICBpZDogc3RyaW5nLFxuICBpZGVhbEVycm9yRGlyZWN0aW9uPzogJ3VwJyB8ICdyaWdodCcgfCAnZG93bicgfCAnbGVmdCcgLyogZGVmYXVsdDogcmlnaHQgKi8sXG4gIG5hbWU/OiBzdHJpbmcsXG4gIG9uQmx1cj86ICh7XG4gICAgZXZlbnQ6IFN5bnRoZXRpY0ZvY3VzRXZlbnQ8SFRNTElucHV0RWxlbWVudD4sXG4gICAgdmFsdWU6IHN0cmluZyxcbiAgfSkgPT4gdm9pZCxcbiAgb25DaGFuZ2U6ICh7XG4gICAgZXZlbnQ6IFN5bnRoZXRpY0lucHV0RXZlbnQ8SFRNTElucHV0RWxlbWVudD4sXG4gICAgdmFsdWU6IHN0cmluZyxcbiAgfSkgPT4gdm9pZCxcbiAgb25Gb2N1cz86ICh7XG4gICAgZXZlbnQ6IFN5bnRoZXRpY0ZvY3VzRXZlbnQ8SFRNTElucHV0RWxlbWVudD4sXG4gICAgdmFsdWU6IHN0cmluZyxcbiAgfSkgPT4gdm9pZCxcbiAgb25LZXlEb3duPzogKHtcbiAgICBldmVudDogU3ludGhldGljS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PixcbiAgICB2YWx1ZTogc3RyaW5nLFxuICB9KSA9PiB2b2lkLFxuICBwbGFjZWhvbGRlcj86IHN0cmluZyxcbiAgdHlwZT86ICdkYXRlJyB8ICdlbWFpbCcgfCAnbnVtYmVyJyB8ICdwYXNzd29yZCcgfCAndGV4dCcgfCAndXJsJyxcbiAgdmFsdWU/OiBzdHJpbmcsXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dEZpZWxkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGF1dG9Db21wbGV0ZTogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgICdjdXJyZW50LXBhc3N3b3JkJyxcbiAgICAgICdvbicsXG4gICAgICAnb2ZmJyxcbiAgICAgICd1c2VybmFtZScsXG4gICAgXSksXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGVycm9yTWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBoYXNFcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBpZGVhbEVycm9yRGlyZWN0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbktleURvd246IFByb3BUeXBlcy5mdW5jLFxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICAnZGF0ZScsXG4gICAgICAnZW1haWwnLFxuICAgICAgJ251bWJlcicsXG4gICAgICAncGFzc3dvcmQnLFxuICAgICAgJ3RleHQnLFxuICAgICAgJ3VybCcsXG4gICAgXSksXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgaGFzRXJyb3I6IGZhbHNlLFxuICAgIGlkZWFsRXJyb3JEaXJlY3Rpb246ICdyaWdodCcsXG4gICAgdHlwZTogJ3RleHQnLFxuICB9O1xuXG4gIHN0YXRlID0ge1xuICAgIGZvY3VzZWQ6IGZhbHNlLFxuICAgIGVycm9ySXNPcGVuOiBmYWxzZSxcbiAgfTtcblxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzOiBQcm9wcywgc3RhdGU6IFN0YXRlKSB7XG4gICAgaWYgKHByb3BzLmVycm9yTWVzc2FnZSAhPT0gc3RhdGUuZXJyb3JNZXNzYWdlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlcnJvcklzT3BlbjogISFwcm9wcy5lcnJvck1lc3NhZ2UsXG4gICAgICAgIGVycm9yTWVzc2FnZTogcHJvcHMuZXJyb3JNZXNzYWdlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChldmVudDogU3ludGhldGljSW5wdXRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoe1xuICAgICAgZXZlbnQsXG4gICAgICB2YWx1ZTogZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVCbHVyID0gKGV2ZW50OiBTeW50aGV0aWNGb2N1c0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMuZXJyb3JNZXNzYWdlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JJc09wZW46IGZhbHNlIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgIHRoaXMucHJvcHMub25CbHVyKHtcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIHZhbHVlOiBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUZvY3VzID0gKGV2ZW50OiBTeW50aGV0aWNGb2N1c0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMuZXJyb3JNZXNzYWdlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JJc09wZW46IHRydWUgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm9uRm9jdXMpIHtcbiAgICAgIHRoaXMucHJvcHMub25Gb2N1cyh7XG4gICAgICAgIGV2ZW50LFxuICAgICAgICB2YWx1ZTogZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVLZXlEb3duID0gKGV2ZW50OiBTeW50aGV0aWNLZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub25LZXlEb3duKSB7XG4gICAgICB0aGlzLnByb3BzLm9uS2V5RG93bih7XG4gICAgICAgIGV2ZW50LFxuICAgICAgICB2YWx1ZTogZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICB0ZXh0ZmllbGQ6ID9IVE1MRWxlbWVudDtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYXV0b0NvbXBsZXRlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICBoYXNFcnJvcixcbiAgICAgIGlkLFxuICAgICAgaWRlYWxFcnJvckRpcmVjdGlvbixcbiAgICAgIG5hbWUsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIHR5cGUsXG4gICAgICB2YWx1ZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjbGFzc25hbWVzKFxuICAgICAgc3R5bGVzLnRleHRGaWVsZCxcbiAgICAgIGRpc2FibGVkID8gc3R5bGVzLmRpc2FibGVkIDogc3R5bGVzLmVuYWJsZWQsXG4gICAgICBoYXNFcnJvciB8fCBlcnJvck1lc3NhZ2UgPyBzdHlsZXMuZXJyb3JlZCA6IHN0eWxlcy5ub3JtYWxcbiAgICApO1xuXG4gICAgLy8gdHlwZT0nbnVtYmVyJyBkb2Vzbid0IHdvcmsgb24gaW9zIHNhZmFyaSB3aXRob3V0IGEgcGF0dGVyblxuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE0NDQ3NjY4L2lucHV0LXR5cGUtbnVtYmVyLWlzLW5vdC1zaG93aW5nLWEtbnVtYmVyLWtleXBhZC1vbi1pb3NcbiAgICBjb25zdCBwYXR0ZXJuID0gdHlwZSA9PT0gJ251bWJlcicgPyAnXFxcXGQqJyA6IHVuZGVmaW5lZDtcblxuICAgIHJldHVybiAoXG4gICAgICA8c3Bhbj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgYXJpYS1kZXNjcmliZWRieT17XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgJiYgdGhpcy5zdGF0ZS5mb2N1c2VkID8gYCR7aWR9LWdlc3RhbHQtZXJyb3JgIDogbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgICBhcmlhLWludmFsaWQ9e2Vycm9yTWVzc2FnZSB8fCBoYXNFcnJvciA/ICd0cnVlJyA6ICdmYWxzZSd9XG4gICAgICAgICAgYXV0b0NvbXBsZXRlPXthdXRvQ29tcGxldGV9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlQmx1cn1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVGb2N1c31cbiAgICAgICAgICBvbktleURvd249e3RoaXMuaGFuZGxlS2V5RG93bn1cbiAgICAgICAgICBwYXR0ZXJuPXtwYXR0ZXJufVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICByZWY9e2MgPT4ge1xuICAgICAgICAgICAgdGhpcy50ZXh0ZmllbGQgPSBjO1xuICAgICAgICAgIH19XG4gICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIC8+XG4gICAgICAgIHtlcnJvck1lc3NhZ2UgJiZcbiAgICAgICAgICB0aGlzLnN0YXRlLmVycm9ySXNPcGVuICYmIChcbiAgICAgICAgICAgIDxGbHlvdXRcbiAgICAgICAgICAgICAgYW5jaG9yPXt0aGlzLnRleHRmaWVsZH1cbiAgICAgICAgICAgICAgY29sb3I9XCJvcmFuZ2VcIlxuICAgICAgICAgICAgICBpZGVhbERpcmVjdGlvbj17aWRlYWxFcnJvckRpcmVjdGlvbn1cbiAgICAgICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgZXJyb3JJc09wZW46IGZhbHNlIH0pfVxuICAgICAgICAgICAgICBzaG91bGRGb2N1cz17ZmFsc2V9XG4gICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCb3ggcGFkZGluZz17M30+XG4gICAgICAgICAgICAgICAgPFRleHQgYm9sZCBjb2xvcj1cIndoaXRlXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBpZD17YCR7aWR9LWdlc3RhbHQtZXJyb3JgfT57ZXJyb3JNZXNzYWdlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9GbHlvdXQ+XG4gICAgICAgICAgKX1cbiAgICAgIDwvc3Bhbj5cbiAgICApO1xuICB9XG59XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCb3ggZnJvbSAnLi9Cb3guanMnO1xuaW1wb3J0IE1hc2sgZnJvbSAnLi9NYXNrLmpzJztcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24uanMnO1xuXG50eXBlIFByb3BzID0ge3xcbiAgY29sb3I/OiAnZGFya0dyYXknIHwgJ29yYW5nZScsXG4gIGljb24/OiAnYXJyb3ctY2lyY2xlLWZvcndhcmQnLCAvLyBsZWF2aW5nIG9wZW4gdG8gYWRkaXRpb25hbCBpY29ucyBpbiB0aGUgZnV0dXJlXG4gIHRleHQ6IHN0cmluZyB8IEFycmF5PHN0cmluZz4sXG4gIHRodW1ibmFpbD86IFJlYWN0Lk5vZGUsXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9hc3QocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgY29sb3IgPSAnZGFya0dyYXknLCBpY29uLCB0aHVtYm5haWwsIHRleHQgfSA9IHByb3BzO1xuXG4gIGxldCBjb250ZW50cztcbiAgLy8gQ29uZmlybWF0aW9uIFRvYXN0c1xuICBpZiAodGV4dCBpbnN0YW5jZW9mIEFycmF5ICYmIHRleHQubGVuZ3RoID4gMSkge1xuICAgIGNvbnRlbnRzID0gKFxuICAgICAgPEJveCB4cz17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgIDxCb3ggeHM9e3sgZGlzcGxheTogJ2ZsZXhDb2x1bW4nIH19IGZsZXg9XCJub25lXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgICB7dGh1bWJuYWlsID8gKFxuICAgICAgICAgICAgPE1hc2sgc2hhcGU9XCJyb3VuZGVkXCIgaGVpZ2h0PXs0OH0gd2lkdGg9ezQ4fT5cbiAgICAgICAgICAgICAge3RodW1ibmFpbH1cbiAgICAgICAgICAgIDwvTWFzaz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICB4cz17eyBkaXNwbGF5OiAnZmxleENvbHVtbicgfX1cbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbmxpbmVTdHlsZT17eyBfX3N0eWxlOiB7IHBhZGRpbmdMZWZ0OiAxMCB9IH19XG4gICAgICAgID5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubGluZVN0eWxlPXt7IF9fc3R5bGU6IHsgZm9udFdlaWdodDogJ25vcm1hbCcgfSB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwid2hpdGVcIiBzaXplPVwibGdcIj5cbiAgICAgICAgICAgICAge3RleHRbMF19XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPFRleHQgYm9sZCBjb2xvcj1cIndoaXRlXCIgc2l6ZT1cImxnXCI+XG4gICAgICAgICAgICB7dGV4dFsxXX1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBUb2FzdHMgYXMgR3VpZGVzXG4gICAgY29udGVudHMgPSAoXG4gICAgICA8Qm94XG4gICAgICAgIHhzPXt7IGRpc3BsYXk6ICdmbGV4JyB9fVxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImJldHdlZW5cIlxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgID5cbiAgICAgICAgPFRleHQgYm9sZCBjb2xvcj1cIndoaXRlXCIgc2l6ZT1cImxnXCI+XG4gICAgICAgICAge3RleHR9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAge2ljb24gJiYgKFxuICAgICAgICAgIDxCb3ggZGFuZ2Vyb3VzbHlTZXRJbmxpbmVTdHlsZT17eyBfX3N0eWxlOiB7IHBhZGRpbmdMZWZ0OiAyNCB9IH19PlxuICAgICAgICAgICAgPEljb24gYWNjZXNzaWJpbGl0eUxhYmVsPVwiXCIgY29sb3I9XCJ3aGl0ZVwiIGljb249e2ljb259IHNpemU9ezM2fSAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuICAgICAgPC9Cb3g+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEJveCBtYXJnaW5Cb3R0b209ezN9IHBhZGRpbmdYPXs0fSBtYXhXaWR0aD17Mzc2fSB3aWR0aD1cIjEwMHZ3XCI+XG4gICAgICA8Qm94IGNvbG9yPXtjb2xvcn0gZml0IHBhZGRpbmdYPXs4fSBwYWRkaW5nWT17NX0gc2hhcGU9XCJwaWxsXCI+XG4gICAgICAgIHtjb250ZW50c31cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufVxuXG5Ub2FzdC5wcm9wVHlwZXMgPSB7XG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydkYXJrR3JheScsICdvcmFuZ2UnXSksXG4gIGljb246IFByb3BUeXBlcy5vbmVPZihbJ2Fycm93LWNpcmNsZS1mb3J3YXJkJ10pLCAvLyBsZWF2aW5nIG9wZW4gdG8gYWRkaXRpb25hbCBpY29ucyBpbiB0aGUgZnV0dXJlXG4gIHRleHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gIF0pLmlzUmVxdWlyZWQsXG4gIHRodW1ibmFpbDogUHJvcFR5cGVzLm5vZGUsXG59O1xuIiwiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQm94IGZyb20gJy4vQm94LmpzJztcbmltcG9ydCBDb250cm9sbGVyIGZyb20gJy4vQ29udHJvbGxlci5qcyc7XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBhbmNob3I6ID9IVE1MRWxlbWVudCxcbiAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlLFxuICBpZGVhbERpcmVjdGlvbj86ICd1cCcgfCAncmlnaHQnIHwgJ2Rvd24nIHwgJ2xlZnQnLFxuICBvbkRpc21pc3M6ICgpID0+IHZvaWQsXG4gIHBvc2l0aW9uUmVsYXRpdmVUb0FuY2hvcj86IGJvb2xlYW4sXG4gIHNpemU/OiAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyAvKiBkZWZhdWx0IG1kICovLFxufH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvb2x0aXAocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBhbmNob3IsXG4gICAgY2hpbGRyZW4sXG4gICAgaWRlYWxEaXJlY3Rpb24sXG4gICAgb25EaXNtaXNzLFxuICAgIHBvc2l0aW9uUmVsYXRpdmVUb0FuY2hvciA9IHRydWUsXG4gICAgc2l6ZSA9ICdtZCcsXG4gIH0gPSBwcm9wcztcblxuICBpZiAoIWFuY2hvcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udHJvbGxlclxuICAgICAgYW5jaG9yPXthbmNob3J9XG4gICAgICBiZ0NvbG9yPVwiZGFya0dyYXlcIlxuICAgICAgaWRlYWxEaXJlY3Rpb249e2lkZWFsRGlyZWN0aW9ufVxuICAgICAgcG9zaXRpb25SZWxhdGl2ZVRvQW5jaG9yPXtwb3NpdGlvblJlbGF0aXZlVG9BbmNob3J9XG4gICAgICBvbkRpc21pc3M9e29uRGlzbWlzc31cbiAgICAgIHNpemU9e3NpemV9XG4gICAgPlxuICAgICAgPEJveCBjb2x1bW49ezEyfSBwYWRkaW5nPXszfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Cb3g+XG4gICAgPC9Db250cm9sbGVyPlxuICApO1xufVxuXG5Ub29sdGlwLnByb3BUeXBlcyA9IHtcbiAgYW5jaG9yOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGNvbnRhaW5zOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBnZXRCb3VuZGluZ0NsaWVudFJlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICB9KSxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBpZGVhbERpcmVjdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsndXAnLCAncmlnaHQnLCAnZG93bicsICdsZWZ0J10pLFxuICBvbkRpc21pc3M6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHBvc2l0aW9uUmVsYXRpdmVUb0FuY2hvcjogUHJvcFR5cGVzLmJvb2wsXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ3hzJywgJ3NtJywgJ21kJywgJ2xnJywgJ3hsJ10pLFxufTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVG91Y2hhYmxlLmNzcyc7XG5cbnR5cGUgU2hhcGUgPVxuICB8ICdzcXVhcmUnXG4gIHwgJ3JvdW5kZWQnXG4gIHwgJ3BpbGwnXG4gIHwgJ2NpcmNsZSdcbiAgfCAncm91bmRlZFRvcCdcbiAgfCAncm91bmRlZEJvdHRvbSdcbiAgfCAncm91bmRlZExlZnQnXG4gIHwgJ3JvdW5kZWRSaWdodCc7XG5cbnR5cGUgTW91c2VDdXJzb3IgPVxuICB8ICdjb3B5J1xuICB8ICdncmFiJ1xuICB8ICdncmFiYmluZydcbiAgfCAnbW92ZSdcbiAgfCAnbm9Ecm9wJ1xuICB8ICdwb2ludGVyJ1xuICB8ICd6b29tSW4nXG4gIHwgJ3pvb21PdXQnO1xuXG50eXBlIFByb3BzID0ge3xcbiAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlLFxuICBmdWxsSGVpZ2h0PzogYm9vbGVhbixcbiAgZnVsbFdpZHRoPzogYm9vbGVhbixcbiAgbW91c2VDdXJzb3I/OiBNb3VzZUN1cnNvcixcbiAgb25Nb3VzZUVudGVyPzogKHsgZXZlbnQ6IFN5bnRoZXRpY01vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+IH0pID0+IHZvaWQsXG4gIG9uTW91c2VMZWF2ZT86ICh7IGV2ZW50OiBTeW50aGV0aWNNb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PiB9KSA9PiB2b2lkLFxuICBvblRvdWNoPzogKHtcbiAgICBldmVudDpcbiAgICAgIHwgU3ludGhldGljTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD5cbiAgICAgIHwgU3ludGhldGljS2V5Ym9hcmRFdmVudDxIVE1MRGl2RWxlbWVudD4sXG4gIH0pID0+IHZvaWQsXG4gIHNoYXBlPzogU2hhcGUsXG58fTtcblxuY29uc3QgU1BBQ0VfQ0hBUl9DT0RFID0gMzI7XG5jb25zdCBFTlRFUl9DSEFSX0NPREUgPSAxMztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG91Y2hhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XG4gIGhhbmRsZUtleVByZXNzID0gKGV2ZW50OiBTeW50aGV0aWNLZXlib2FyZEV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgb25Ub3VjaCB9ID0gdGhpcy5wcm9wcztcbiAgICAvLyBDaGVjayB0byBzZWUgaWYgc3BhY2Ugb3IgZW50ZXIgd2VyZSBwcmVzc2VkXG4gICAgaWYgKFxuICAgICAgb25Ub3VjaCAmJlxuICAgICAgKGV2ZW50LmNoYXJDb2RlID09PSBTUEFDRV9DSEFSX0NPREUgfHwgZXZlbnQuY2hhckNvZGUgPT09IEVOVEVSX0NIQVJfQ09ERSlcbiAgICApIHtcbiAgICAgIC8vIFByZXZlbnQgdGhlIGRlZmF1bHQgYWN0aW9uIHRvIHN0b3Agc2Nyb2xsaW5nIHdoZW4gc3BhY2UgaXMgcHJlc3NlZFxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG9uVG91Y2goeyBldmVudCB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgZnVsbFdpZHRoID0gdHJ1ZSxcbiAgICAgIGZ1bGxIZWlnaHQsXG4gICAgICBtb3VzZUN1cnNvciA9ICdwb2ludGVyJyxcbiAgICAgIG9uTW91c2VFbnRlcixcbiAgICAgIG9uTW91c2VMZWF2ZSxcbiAgICAgIG9uVG91Y2gsXG4gICAgICBzaGFwZSA9ICdzcXVhcmUnLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNsYXNzbmFtZXMoXG4gICAgICBzdHlsZXMudG91Y2hhYmxlLFxuICAgICAgc3R5bGVzW21vdXNlQ3Vyc29yXSxcbiAgICAgIHN0eWxlc1tzaGFwZV0sXG4gICAgICB7XG4gICAgICAgIFtzdHlsZXMuZnVsbEhlaWdodF06IGZ1bGxIZWlnaHQsXG4gICAgICAgIFtzdHlsZXMuZnVsbFdpZHRoXTogZnVsbFdpZHRoLFxuICAgICAgfVxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXN9XG4gICAgICAgIG9uQ2xpY2s9e2V2ZW50ID0+IG9uVG91Y2ggJiYgb25Ub3VjaCh7IGV2ZW50IH0pfVxuICAgICAgICBvbk1vdXNlRW50ZXI9e2V2ZW50ID0+IG9uTW91c2VFbnRlciAmJiBvbk1vdXNlRW50ZXIoeyBldmVudCB9KX1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXtldmVudCA9PiBvbk1vdXNlTGVhdmUgJiYgb25Nb3VzZUxlYXZlKHsgZXZlbnQgfSl9XG4gICAgICAgIG9uS2V5UHJlc3M9e3RoaXMuaGFuZGxlS2V5UHJlc3N9XG4gICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICB0YWJJbmRleD1cIjBcIlxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblRvdWNoYWJsZS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgZnVsbEhlaWdodDogUHJvcFR5cGVzLmJvb2wsXG4gIGZ1bGxXaWR0aDogUHJvcFR5cGVzLmJvb2wsXG4gIG1vdXNlQ3Vyc29yOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICdjb3B5JyxcbiAgICAnZ3JhYicsXG4gICAgJ2dyYWJiaW5nJyxcbiAgICAnbW92ZScsXG4gICAgJ25vRHJvcCcsXG4gICAgJ3BvaW50ZXInLFxuICAgICd6b29tSW4nLFxuICAgICd6b29tT3V0JyxcbiAgXSksXG4gIG9uVG91Y2g6IFByb3BUeXBlcy5mdW5jLFxuICBvbk1vdXNlRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbk1vdXNlTGVhdmU6IFByb3BUeXBlcy5mdW5jLFxuICBzaGFwZTogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAnc3F1YXJlJyxcbiAgICAncm91bmRlZCcsXG4gICAgJ3BpbGwnLFxuICAgICdjaXJjbGUnLFxuICAgICdyb3VuZGVkVG9wJyxcbiAgICAncm91bmRlZEJvdHRvbScsXG4gICAgJ3JvdW5kZWRMZWZ0JyxcbiAgICAncm91bmRlZFJpZ2h0JyxcbiAgXSksXG59O1xuIiwiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCb3ggZnJvbSAnLi9Cb3guanMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1ZpZGVvLmNzcyc7XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBjdXJyZW50VGltZTogbnVtYmVyLFxuICBkdXJhdGlvbjogbnVtYmVyLFxuICBzZWVrOiAodGltZTogbnVtYmVyKSA9PiB2b2lkLFxufH07XG5cbnR5cGUgU3RhdGUgPSB7fFxuICBzZWVraW5nOiBib29sZWFuLFxufH07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZGVvUGxheWhlYWQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGN1cnJlbnRUaW1lOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgZHVyYXRpb246IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBzZWVrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIHN0YXRlID0ge1xuICAgIHNlZWtpbmc6IGZhbHNlLFxuICB9O1xuXG4gIHNldFBsYXloZWFkUmVmID0gKHJlZjogP0hUTUxEaXZFbGVtZW50KSA9PiB7XG4gICAgdGhpcy5wbGF5aGVhZCA9IHJlZjtcbiAgfTtcblxuICBzZWVrID0gKGNsaWVudFg6IG51bWJlcikgPT4ge1xuICAgIGlmICh0aGlzLnBsYXloZWFkKSB7XG4gICAgICBjb25zdCB7IGR1cmF0aW9uLCBzZWVrIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgeyBsZWZ0LCB3aWR0aCB9ID0gdGhpcy5wbGF5aGVhZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IHBlcmNlbnQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigoY2xpZW50WCAtIGxlZnQpIC8gd2lkdGgsIDEpKTtcbiAgICAgIGNvbnN0IG5ld1RpbWUgPSBwZXJjZW50ICogZHVyYXRpb247XG4gICAgICBzZWVrKG5ld1RpbWUpO1xuICAgIH1cbiAgfTtcblxuICBzdG9wQ2xpY2sgPSAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxEaXZFbGVtZW50PikgPT5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICBoYW5kbGVNb3VzZURvd24gPSAoZXZlbnQ6IFN5bnRoZXRpY01vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlZWtpbmc6IHRydWUgfSk7XG4gICAgdGhpcy5zZWVrKGV2ZW50LmNsaWVudFgpO1xuICB9O1xuXG4gIGhhbmRsZU1vdXNlTW92ZSA9IChldmVudDogU3ludGhldGljTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IHNlZWtpbmcgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKHNlZWtpbmcpIHtcbiAgICAgIHRoaXMuc2VlayhldmVudC5jbGllbnRYKTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlTW91c2VVcCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2Vla2luZzogZmFsc2UgfSk7XG4gIH07XG5cbiAgcGxheWhlYWQ6ID9IVE1MRGl2RWxlbWVudDtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjdXJyZW50VGltZSwgZHVyYXRpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgd2lkdGggPSBgJHtNYXRoLmZsb29yKChjdXJyZW50VGltZSAqIDEwMDAwKSAvIGR1cmF0aW9uKSAvIDEwMH0lYDtcbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICBmbGV4PVwiZ3Jvd1wiXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICBoZWlnaHQ9ezE2fVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgYXJpYS12YWx1ZW1heD17ZHVyYXRpb259XG4gICAgICAgICAgYXJpYS12YWx1ZW1pbj1cIjBcIlxuICAgICAgICAgIGFyaWEtdmFsdWVub3c9e2N1cnJlbnRUaW1lfVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnBsYXloZWFkfVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc3RvcENsaWNrfVxuICAgICAgICAgIG9uS2V5UHJlc3M9e3RoaXMuc3RvcENsaWNrfVxuICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLmhhbmRsZU1vdXNlRG93bn1cbiAgICAgICAgICBvbk1vdXNlTW92ZT17dGhpcy5oYW5kbGVNb3VzZU1vdmV9XG4gICAgICAgICAgb25Nb3VzZVVwPXt0aGlzLmhhbmRsZU1vdXNlVXB9XG4gICAgICAgICAgcmVmPXt0aGlzLnNldFBsYXloZWFkUmVmfVxuICAgICAgICAgIHJvbGU9XCJwcm9ncmVzc2JhclwiXG4gICAgICAgICAgdGFiSW5kZXg9XCItMVwiXG4gICAgICAgID5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBsZWZ0XG4gICAgICAgICAgICByaWdodFxuICAgICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgICAgICBjb2xvcj1cImxpZ2h0R3JheVwiXG4gICAgICAgICAgICBzaGFwZT1cInJvdW5kZWRcIlxuICAgICAgICAgICAgaGVpZ2h0PXs0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCb3ggY29sb3I9XCJ3aGl0ZVwiIHNoYXBlPVwicm91bmRlZFwiIGhlaWdodD1cIjEwMCVcIiB3aWR0aD17d2lkdGh9IC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgICAgICBzaGFwZT1cInJvdW5kZWRcIlxuICAgICAgICAgICAgaGVpZ2h0PXs0fVxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbmxpbmVTdHlsZT17eyBfX3N0eWxlOiB7IGxlZnQ6IHdpZHRoIH0gfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIHNoYXBlPVwiY2lyY2xlXCJcbiAgICAgICAgICAgICAgd2lkdGg9ezE2fVxuICAgICAgICAgICAgICBoZWlnaHQ9ezE2fVxuICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdD17LTJ9XG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5saW5lU3R5bGU9e3sgX19zdHlsZTogeyBtYXJnaW5Ub3A6IC02IH0gfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Cb3g+XG4gICAgKTtcbiAgfVxufVxuIiwiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCb3ggZnJvbSAnLi9Cb3guanMnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uLmpzJztcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XG5pbXBvcnQgVG91Y2hhYmxlIGZyb20gJy4vVG91Y2hhYmxlLmpzJztcbmltcG9ydCBWaWRlb1BsYXloZWFkIGZyb20gJy4vVmlkZW9QbGF5aGVhZC5qcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVmlkZW8uY3NzJztcblxudHlwZSBQcm9wcyA9IHt8XG4gIGFjY2Vzc2liaWxpdHlNYXhpbWl6ZUxhYmVsOiBzdHJpbmcsXG4gIGFjY2Vzc2liaWxpdHlNaW5pbWl6ZUxhYmVsOiBzdHJpbmcsXG4gIGFjY2Vzc2liaWxpdHlNdXRlTGFiZWw6IHN0cmluZyxcbiAgYWNjZXNzaWJpbGl0eVBhdXNlTGFiZWw6IHN0cmluZyxcbiAgYWNjZXNzaWJpbGl0eVBsYXlMYWJlbDogc3RyaW5nLFxuICBhY2Nlc3NpYmlsaXR5VW5tdXRlTGFiZWw6IHN0cmluZyxcbiAgY3VycmVudFRpbWU6IG51bWJlcixcbiAgZHVyYXRpb246IG51bWJlcixcbiAgZnVsbHNjcmVlbjogYm9vbGVhbixcbiAgb25GdWxsc2NyZWVuQ2hhbmdlOiAoKSA9PiB2b2lkLFxuICBvblBhdXNlOiAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4gdm9pZCxcbiAgb25QbGF5OiAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4gdm9pZCxcbiAgb25Wb2x1bWVDaGFuZ2U6IChldmVudDogU3ludGhldGljRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB2b2lkLFxuICBwbGF5aW5nOiBib29sZWFuLFxuICBzZWVrOiAodGltZTogbnVtYmVyKSA9PiB2b2lkLFxuICB2b2x1bWU6IG51bWJlcixcbnx9O1xuXG5jb25zdCBmdWxsc2NyZWVuRW5hYmxlZCA9ICgpID0+XG4gIC8vICRGbG93SXNzdWUgLSB2ZW5kb3IgcHJlZml4IG1pc3NpbmcgZnJvbSBGbG93XG4gIGRvY3VtZW50LmZ1bGxzY3JlZW5FbmFibGVkIHx8XG4gIC8vICRGbG93SXNzdWUgLSB2ZW5kb3IgcHJlZml4IG1pc3NpbmcgZnJvbSBGbG93XG4gIGRvY3VtZW50LndlYmtpdEZ1bGxzY3JlZW5FbmFibGVkIHx8XG4gIC8vICRGbG93SXNzdWUgLSB2ZW5kb3IgcHJlZml4IG1pc3NpbmcgZnJvbSBGbG93XG4gIGRvY3VtZW50Lm1vekZ1bGxTY3JlZW5FbmFibGVkIHx8XG4gIC8vICRGbG93SXNzdWUgLSB2ZW5kb3IgcHJlZml4IG1pc3NpbmcgZnJvbSBGbG93XG4gIGRvY3VtZW50Lm1zRnVsbHNjcmVlbkVuYWJsZWQ7XG5cbmNvbnN0IHRpbWVUb1N0cmluZyA9ICh0aW1lPzogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IHJvdW5kZWQgPSBNYXRoLmZsb29yKHRpbWUgfHwgMCk7XG4gIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHJvdW5kZWQgLyA2MCk7XG4gIGNvbnN0IHNlY29uZHMgPSByb3VuZGVkIC0gbWludXRlcyAqIDYwO1xuICBjb25zdCBtaW51dGVzU3RyID0gbWludXRlcyA8IDEwID8gYDAke21pbnV0ZXN9YCA6IG1pbnV0ZXM7XG4gIGNvbnN0IHNlY29uZHNTdHIgPSBzZWNvbmRzIDwgMTAgPyBgMCR7c2Vjb25kc31gIDogc2Vjb25kcztcbiAgcmV0dXJuIGAke21pbnV0ZXNTdHJ9OiR7c2Vjb25kc1N0cn1gO1xufTtcblxuY2xhc3MgVmlkZW9Db250cm9scyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGFjY2Vzc2liaWxpdHlNYXhpbWl6ZUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgYWNjZXNzaWJpbGl0eU1pbmltaXplTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBhY2Nlc3NpYmlsaXR5TXV0ZUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgYWNjZXNzaWJpbGl0eVBhdXNlTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBhY2Nlc3NpYmlsaXR5UGxheUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgYWNjZXNzaWJpbGl0eVVubXV0ZUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgY3VycmVudFRpbWU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBkdXJhdGlvbjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGZ1bGxzY3JlZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgb25GdWxsc2NyZWVuQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uUGF1c2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25QbGF5OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uVm9sdW1lQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHBsYXlpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgc2VlazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICB2b2x1bWU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgfTtcblxuICBoYW5kbGVGdWxsc2NyZWVuQ2hhbmdlID0gKHtcbiAgICBldmVudCxcbiAgfToge1xuICAgIGV2ZW50OlxuICAgICAgfCBTeW50aGV0aWNNb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PlxuICAgICAgfCBTeW50aGV0aWNLZXlib2FyZEV2ZW50PEhUTUxEaXZFbGVtZW50PixcbiAgfSkgPT4ge1xuICAgIGNvbnN0IHsgb25GdWxsc2NyZWVuQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIG9uRnVsbHNjcmVlbkNoYW5nZSgpO1xuICB9O1xuXG4gIGhhbmRsZVBsYXlpbmdDaGFuZ2UgPSAoe1xuICAgIGV2ZW50LFxuICB9OiB7XG4gICAgZXZlbnQ6XG4gICAgICB8IFN5bnRoZXRpY01vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+XG4gICAgICB8IFN5bnRoZXRpY0tleWJvYXJkRXZlbnQ8SFRNTERpdkVsZW1lbnQ+LFxuICB9KSA9PiB7XG4gICAgY29uc3QgeyBwbGF5aW5nLCBvblBhdXNlLCBvblBsYXkgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHBsYXlpbmcpIHtcbiAgICAgIG9uUGF1c2UoZXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvblBsYXkoZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVWb2x1bWVDaGFuZ2UgPSAoe1xuICAgIGV2ZW50LFxuICB9OiB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tdW51c2VkLXByb3AtdHlwZXMgKi9cbiAgICBldmVudDpcbiAgICAgIHwgU3ludGhldGljTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD5cbiAgICAgIHwgU3ludGhldGljS2V5Ym9hcmRFdmVudDxIVE1MRGl2RWxlbWVudD4sXG4gICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC9uby11bnVzZWQtcHJvcC10eXBlcyAqL1xuICB9KSA9PiB7XG4gICAgY29uc3QgeyBvblZvbHVtZUNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBvblZvbHVtZUNoYW5nZShldmVudCk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGFjY2Vzc2liaWxpdHlNYXhpbWl6ZUxhYmVsLFxuICAgICAgYWNjZXNzaWJpbGl0eU1pbmltaXplTGFiZWwsXG4gICAgICBhY2Nlc3NpYmlsaXR5TXV0ZUxhYmVsLFxuICAgICAgYWNjZXNzaWJpbGl0eVBhdXNlTGFiZWwsXG4gICAgICBhY2Nlc3NpYmlsaXR5UGxheUxhYmVsLFxuICAgICAgYWNjZXNzaWJpbGl0eVVubXV0ZUxhYmVsLFxuICAgICAgY3VycmVudFRpbWUsXG4gICAgICBkdXJhdGlvbixcbiAgICAgIGZ1bGxzY3JlZW4sXG4gICAgICBwbGF5aW5nLFxuICAgICAgc2VlayxcbiAgICAgIHZvbHVtZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBtdXRlZCA9IHZvbHVtZSA9PT0gMDtcbiAgICBjb25zdCBzaG93RnVsbHNjcmVlbkJ1dHRvbiA9XG4gICAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmICEhZnVsbHNjcmVlbkVuYWJsZWQoKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250cm9sc30+XG4gICAgICAgIDxCb3ggcGFkZGluZz17Mn0+XG4gICAgICAgICAgPFRvdWNoYWJsZSBvblRvdWNoPXt0aGlzLmhhbmRsZVBsYXlpbmdDaGFuZ2V9IGZ1bGxXaWR0aD17ZmFsc2V9PlxuICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgYWNjZXNzaWJpbGl0eUxhYmVsPXtcbiAgICAgICAgICAgICAgICBwbGF5aW5nID8gYWNjZXNzaWJpbGl0eVBhdXNlTGFiZWwgOiBhY2Nlc3NpYmlsaXR5UGxheUxhYmVsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgIGljb249e3BsYXlpbmcgPyAncGF1c2UnIDogJ3BsYXknfVxuICAgICAgICAgICAgICBzaXplPXsyMH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Ub3VjaGFibGU+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IHdpZHRoPXs1MH0gcGFkZGluZz17Mn0+XG4gICAgICAgICAgPFRleHQgY29sb3I9XCJ3aGl0ZVwiIGFsaWduPVwicmlnaHRcIiBzaXplPVwieHNcIj5cbiAgICAgICAgICAgIHt0aW1lVG9TdHJpbmcoY3VycmVudFRpbWUpfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggcGFkZGluZz17Mn0gZmxleD1cImdyb3dcIj5cbiAgICAgICAgICA8VmlkZW9QbGF5aGVhZFxuICAgICAgICAgICAgY3VycmVudFRpbWU9e2N1cnJlbnRUaW1lfVxuICAgICAgICAgICAgZHVyYXRpb249e2R1cmF0aW9ufVxuICAgICAgICAgICAgc2Vlaz17c2Vla31cbiAgICAgICAgICAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCB3aWR0aD17NTB9IHBhZGRpbmc9ezJ9PlxuICAgICAgICAgIDxUZXh0IGNvbG9yPVwid2hpdGVcIiBhbGlnbj1cInJpZ2h0XCIgc2l6ZT1cInhzXCI+XG4gICAgICAgICAgICB7dGltZVRvU3RyaW5nKGR1cmF0aW9uKX1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IHBhZGRpbmc9ezJ9PlxuICAgICAgICAgIDxUb3VjaGFibGUgb25Ub3VjaD17dGhpcy5oYW5kbGVWb2x1bWVDaGFuZ2V9IGZ1bGxXaWR0aD17ZmFsc2V9PlxuICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgYWNjZXNzaWJpbGl0eUxhYmVsPXtcbiAgICAgICAgICAgICAgICBtdXRlZCA/IGFjY2Vzc2liaWxpdHlVbm11dGVMYWJlbCA6IGFjY2Vzc2liaWxpdHlNdXRlTGFiZWxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgaWNvbj17bXV0ZWQgPyAnbXV0ZScgOiAnc291bmQnfVxuICAgICAgICAgICAgICBzaXplPXsyMH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Ub3VjaGFibGU+XG4gICAgICAgIDwvQm94PlxuICAgICAgICB7c2hvd0Z1bGxzY3JlZW5CdXR0b24gJiYgKFxuICAgICAgICAgIDxCb3ggcGFkZGluZz17Mn0+XG4gICAgICAgICAgICA8VG91Y2hhYmxlIG9uVG91Y2g9e3RoaXMuaGFuZGxlRnVsbHNjcmVlbkNoYW5nZX0gZnVsbFdpZHRoPXtmYWxzZX0+XG4gICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgYWNjZXNzaWJpbGl0eUxhYmVsPXtcbiAgICAgICAgICAgICAgICAgIGZ1bGxzY3JlZW5cbiAgICAgICAgICAgICAgICAgICAgPyBhY2Nlc3NpYmlsaXR5TWluaW1pemVMYWJlbFxuICAgICAgICAgICAgICAgICAgICA6IGFjY2Vzc2liaWxpdHlNYXhpbWl6ZUxhYmVsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgIGljb249e2Z1bGxzY3JlZW4gPyAnbWluaW1pemUnIDogJ21heGltaXplJ31cbiAgICAgICAgICAgICAgICBzaXplPXsyMH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvVG91Y2hhYmxlPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaWRlb0NvbnRyb2xzO1xuIiwiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBWaWRlb0NvbnRyb2xzIGZyb20gJy4vVmlkZW9Db250cm9scy5qcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVmlkZW8uY3NzJztcblxudHlwZSBTb3VyY2UgPVxuICB8IHN0cmluZ1xuICB8IEFycmF5PHt8IHR5cGU6ICd2aWRlby9tM3U4JyB8ICd2aWRlby9tcDQnIHwgJ3ZpZGVvL29nZycsIHNyYzogc3RyaW5nIHx9PjtcblxudHlwZSBQcm9wcyA9IHt8XG4gIGFjY2Vzc2liaWxpdHlNYXhpbWl6ZUxhYmVsOiBzdHJpbmcsXG4gIGFjY2Vzc2liaWxpdHlNaW5pbWl6ZUxhYmVsOiBzdHJpbmcsXG4gIGFjY2Vzc2liaWxpdHlNdXRlTGFiZWw6IHN0cmluZyxcbiAgYWNjZXNzaWJpbGl0eVBhdXNlTGFiZWw6IHN0cmluZyxcbiAgYWNjZXNzaWJpbGl0eVBsYXlMYWJlbDogc3RyaW5nLFxuICBhY2Nlc3NpYmlsaXR5VW5tdXRlTGFiZWw6IHN0cmluZyxcbiAgYXNwZWN0UmF0aW86IG51bWJlcixcbiAgY2FwdGlvbnM6IHN0cmluZyxcbiAgY29udHJvbHM/OiBib29sZWFuLFxuICBsb29wPzogYm9vbGVhbixcbiAgb25EdXJhdGlvbkNoYW5nZT86ICh7XG4gICAgZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxWaWRlb0VsZW1lbnQ+LFxuICAgIGR1cmF0aW9uOiBudW1iZXIsXG4gIH0pID0+IHZvaWQsXG4gIG9uRW5kZWQ/OiAoeyBldmVudDogU3ludGhldGljRXZlbnQ8SFRNTFZpZGVvRWxlbWVudD4gfSkgPT4gdm9pZCxcbiAgb25GdWxsc2NyZWVuQ2hhbmdlPzogKHsgZXZlbnQ6IEV2ZW50LCBmdWxsc2NyZWVuOiBib29sZWFuIH0pID0+IHZvaWQsXG4gIG9uTG9hZGVkQ2hhbmdlPzogKHtcbiAgICBldmVudDogU3ludGhldGljRXZlbnQ8SFRNTFZpZGVvRWxlbWVudD4sXG4gICAgbG9hZGVkOiBudW1iZXIsXG4gIH0pID0+IHZvaWQsXG4gIG9uUGxheT86ICh7IGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MRGl2RWxlbWVudD4gfSkgPT4gdm9pZCxcbiAgb25QYXVzZT86ICh7IGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MRGl2RWxlbWVudD4gfSkgPT4gdm9pZCxcbiAgb25SZWFkeT86ICh7IGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MVmlkZW9FbGVtZW50PiB9KSA9PiB2b2lkLFxuICBvblNlZWs/OiAoeyBldmVudDogU3ludGhldGljRXZlbnQ8SFRNTFZpZGVvRWxlbWVudD4gfSkgPT4gdm9pZCxcbiAgb25UaW1lQ2hhbmdlPzogKHtcbiAgICBldmVudDogU3ludGhldGljRXZlbnQ8SFRNTFZpZGVvRWxlbWVudD4sXG4gICAgdGltZTogbnVtYmVyLFxuICB9KSA9PiB2b2lkLFxuICBvblZvbHVtZUNoYW5nZT86ICh7XG4gICAgZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxEaXZFbGVtZW50PixcbiAgICB2b2x1bWU6IG51bWJlcixcbiAgfSkgPT4gdm9pZCxcbiAgcGxheWJhY2tSYXRlOiBudW1iZXIsXG4gIHBsYXlpbmc6IGJvb2xlYW4sXG4gIHBsYXlzSW5saW5lPzogYm9vbGVhbixcbiAgcG9zdGVyPzogc3RyaW5nLFxuICBwcmVsb2FkOiAnYXV0bycgfCAnbWV0YWRhdGEnIHwgJ25vbmUnLFxuICBzcmM6IFNvdXJjZSxcbiAgdm9sdW1lOiBudW1iZXIsXG58fTtcblxudHlwZSBTdGF0ZSA9IHt8XG4gIGN1cnJlbnRUaW1lOiBudW1iZXIsXG4gIGR1cmF0aW9uOiBudW1iZXIsXG4gIGZ1bGxzY3JlZW46IGJvb2xlYW4sXG58fTtcblxuLy8gRm9yIG1vcmUgaW5mb3JtYXRpb24gb24gZnVsbHNjcmVlbiBhbmQgdmVuZG9yIHByZWZpeGVzIHNlZVxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0Z1bGxzY3JlZW5fQVBJXG5cbmNvbnN0IHJlcXVlc3RGdWxsc2NyZWVuID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG4gIGlmIChlbGVtZW50LnJlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgZWxlbWVudC5yZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgIC8vICRGbG93SXNzdWUgLSB2ZW5kb3IgcHJlZml4IG1pc3NpbmcgZnJvbSBGbG93XG4gIH0gZWxzZSBpZiAoZWxlbWVudC53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgIC8vICRGbG93SXNzdWUgLSB2ZW5kb3IgcHJlZml4IG1pc3NpbmcgZnJvbSBGbG93XG4gICAgZWxlbWVudC53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgIC8vICRGbG93SXNzdWUgLSB2ZW5kb3IgcHJlZml4IG1pc3NpbmcgZnJvbSBGbG93XG4gIH0gZWxzZSBpZiAoZWxlbWVudC5tb3pSZXF1ZXN0RnVsbFNjcmVlbikge1xuICAgIC8vICRGbG93SXNzdWUgLSB2ZW5kb3IgcHJlZml4IG1pc3NpbmcgZnJvbSBGbG93XG4gICAgZWxlbWVudC5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpO1xuICAgIC8vICRGbG93SXNzdWUgLSB2ZW5kb3IgcHJlZml4IG1pc3NpbmcgZnJvbSBGbG93XG4gIH0gZWxzZSBpZiAoZWxlbWVudC5tc1JlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgLy8gJEZsb3dJc3N1ZSAtIHZlbmRvciBwcmVmaXggbWlzc2luZyBmcm9tIEZsb3dcbiAgICBlbGVtZW50Lm1zUmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgfVxufTtcblxuY29uc3QgZXhpdEZ1bGxzY3JlZW4gPSAoKSA9PiB7XG4gIC8vICRGbG93SXNzdWUgLSB2ZW5kb3IgcHJlZml4IG1pc3NpbmcgZnJvbSBGbG93XG4gIGlmIChkb2N1bWVudC5leGl0RnVsbHNjcmVlbikge1xuICAgIC8vICRGbG93SXNzdWUgLSB2ZW5kb3IgcHJlZml4IG1pc3NpbmcgZnJvbSBGbG93XG4gICAgZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAvLyAkRmxvd0lzc3VlIC0gdmVuZG9yIHByZWZpeCBtaXNzaW5nIGZyb20gRmxvd1xuICB9IGVsc2UgaWYgKGRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKSB7XG4gICAgLy8gJEZsb3dJc3N1ZSAtIHZlbmRvciBwcmVmaXggbWlzc2luZyBmcm9tIEZsb3dcbiAgICBkb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbigpO1xuICAgIC8vICRGbG93SXNzdWUgLSB2ZW5kb3IgcHJlZml4IG1pc3NpbmcgZnJvbSBGbG93XG4gIH0gZWxzZSBpZiAoZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbikge1xuICAgIC8vICRGbG93SXNzdWUgLSB2ZW5kb3IgcHJlZml4IG1pc3NpbmcgZnJvbSBGbG93XG4gICAgZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbigpO1xuICAgIC8vICRGbG93SXNzdWUgLSB2ZW5kb3IgcHJlZml4IG1pc3NpbmcgZnJvbSBGbG93XG4gIH0gZWxzZSBpZiAoZG9jdW1lbnQubXNFeGl0RnVsbHNjcmVlbikge1xuICAgIC8vICRGbG93SXNzdWUgLSB2ZW5kb3IgcHJlZml4IG1pc3NpbmcgZnJvbSBGbG93XG4gICAgZG9jdW1lbnQubXNFeGl0RnVsbHNjcmVlbigpO1xuICB9XG59O1xuXG4vLyBOb3JtYWxseSBkb2N1bWVudC5mdWxsc2NyZWVuIHN1ZmZpY2VzIGhlcmUgYXMgYSBmbGFnLCBidXQgSUUxMSBkb2VzIG5vdFxuLy8gaGF2ZSBhIHZlbmRvciBzcGVjaWZpYyB2ZXJzaW9uIHNvIHdlIG11c3QgaW5zdGVhZCB1c2UgdGhlIGFjdHVhbCBlbGVtZW50XG5jb25zdCBpc0Z1bGxzY3JlZW4gPSAoKSA9PlxuICAvLyAkRmxvd0lzc3VlIC0gdmVuZG9yIHByZWZpeCBtaXNzaW5nIGZyb20gRmxvd1xuICBkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCB8fFxuICAvLyAkRmxvd0lzc3VlIC0gdmVuZG9yIHByZWZpeCBtaXNzaW5nIGZyb20gRmxvd1xuICBkb2N1bWVudC53ZWJraXRGdWxsc2NyZWVuRWxlbWVudCB8fFxuICAvLyAkRmxvd0lzc3VlIC0gdmVuZG9yIHByZWZpeCBtaXNzaW5nIGZyb20gRmxvd1xuICBkb2N1bWVudC5tb3pGdWxsU2NyZWVuRWxlbWVudCB8fFxuICAvLyAkRmxvd0lzc3VlIC0gdmVuZG9yIHByZWZpeCBtaXNzaW5nIGZyb20gRmxvd1xuICBkb2N1bWVudC5tc0Z1bGxzY3JlZW5FbGVtZW50O1xuXG5jb25zdCBhZGRGdWxsc2NyZWVuRXZlbnRMaXN0ZW5lciA9IChsaXN0ZW5lcjogRXZlbnRMaXN0ZW5lcikgPT4ge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmdWxsc2NyZWVuY2hhbmdlJywgbGlzdGVuZXIpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd3ZWJraXRmdWxsc2NyZWVuY2hhbmdlJywgbGlzdGVuZXIpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3pmdWxsc2NyZWVuY2hhbmdlJywgbGlzdGVuZXIpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdNU0Z1bGxzY3JlZW5DaGFuZ2UnLCBsaXN0ZW5lcik7XG59O1xuXG5jb25zdCByZW1vdmVGdWxsc2NyZWVuRXZlbnRMaXN0ZW5lciA9IChsaXN0ZW5lcjogRXZlbnRMaXN0ZW5lcikgPT4ge1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmdWxsc2NyZWVuY2hhbmdlJywgbGlzdGVuZXIpO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd3ZWJraXRmdWxsc2NyZWVuY2hhbmdlJywgbGlzdGVuZXIpO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3pmdWxsc2NyZWVuY2hhbmdlJywgbGlzdGVuZXIpO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdNU0Z1bGxzY3JlZW5DaGFuZ2UnLCBsaXN0ZW5lcik7XG59O1xuXG5jb25zdCBpc05ld1NvdXJjZSA9IChvbGRTb3VyY2U6IFNvdXJjZSwgbmV3U291cmNlOiBTb3VyY2UpOiBib29sZWFuID0+IHtcbiAgaWYgKHR5cGVvZiBvbGRTb3VyY2UgIT09IHR5cGVvZiBuZXdTb3VyY2UpIHtcbiAgICAvLyBJZiB0aGUgc291cmNlIHR5cGUgY2hhbmdlZCBmcm9tIHN0cmluZyB0byBBcnJheVxuICAgIC8vIG9yIHZpY2UgdmVyc2EsIHdlIGhhdmUgYSBuZXcgc291cmNlXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkobmV3U291cmNlKSkge1xuICAgIGlmIChvbGRTb3VyY2UubGVuZ3RoICE9PSBuZXdTb3VyY2UubGVuZ3RoKSB7XG4gICAgICAvLyBJZiB0aGUgc291cmNlcyBhcmUgYm90aCBhbiBBcnJheSwgYW5kIHRoZSBsZW5ndGhzXG4gICAgICAvLyBkbyBub3QgbWF0Y2ggd2UgZXZhbHVhdGUgYXMgYSBuZXcgc291cmNlXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLy8gSWYgdGhlIHNvdXJjZXMgYXJlIGJvdGggYW4gQXJyYXkgYW5kIHRoZSBzYW1lIGxlbmd0aCxcbiAgICAvLyB2ZXJpZnkgZXZlcnkgZWxlbWVudCBzdGF5ZWQgdGhlIHNhbWVcbiAgICByZXR1cm4gbmV3U291cmNlLnNvbWUoXG4gICAgICAoc291cmNlLCBpbmRleCkgPT5cbiAgICAgICAgIUFycmF5LmlzQXJyYXkob2xkU291cmNlKSB8fFxuICAgICAgICBzb3VyY2UudHlwZSAhPT0gb2xkU291cmNlW2luZGV4XS50eXBlIHx8XG4gICAgICAgIHNvdXJjZS5zcmMgIT09IG9sZFNvdXJjZVtpbmRleF0uc3JjXG4gICAgKTtcbiAgfVxuICAvLyBJZiB0aGUgc291cmNlcyBhcmUgYm90aCBhIHN0cmluZywgc2ltcGx5IGNvbXBhcmVcbiAgLy8gdGhlIG5ldyB3aXRoIHRoZSBvbGRcbiAgcmV0dXJuIG5ld1NvdXJjZSAhPT0gb2xkU291cmNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlkZW8gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGFjY2Vzc2liaWxpdHlNYXhpbWl6ZUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFjY2Vzc2liaWxpdHlNaW5pbWl6ZUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFjY2Vzc2liaWxpdHlNdXRlTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYWNjZXNzaWJpbGl0eVBhdXNlTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYWNjZXNzaWJpbGl0eVBsYXlMYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhY2Nlc3NpYmlsaXR5VW5tdXRlTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYXNwZWN0UmF0aW86IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBjYXB0aW9uczogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGNvbnRyb2xzOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBsb29wOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvbkR1cmF0aW9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkVuZGVkOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkZ1bGxzY3JlZW5DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uTG9hZGVkQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblBsYXk6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uUGF1c2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uUmVhZHk6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2VlazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25UaW1lQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblZvbHVtZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcGxheWJhY2tSYXRlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHBsYXlpbmc6IFByb3BUeXBlcy5ib29sLFxuICAgIHBsYXlzSW5saW5lOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwb3N0ZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcHJlbG9hZDogUHJvcFR5cGVzLm9uZU9mKFsnYXV0bycsICdtZXRhZGF0YScsICdub25lJ10pLFxuICAgIHNyYzogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKFsndmlkZW8vbTN1OCcsICd2aWRlby9tcDQnLCAndmlkZW8vb2dnJ10pXG4gICAgICAgICAgICAuaXNSZXF1aXJlZCxcbiAgICAgICAgICBzcmM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgICB2b2x1bWU6IFByb3BUeXBlcy5udW1iZXIsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBwbGF5YmFja1JhdGU6IDEsXG4gICAgcGxheWluZzogZmFsc2UsXG4gICAgcHJlbG9hZDogJ2F1dG8nLFxuICAgIHZvbHVtZTogMSxcbiAgfTtcblxuICBzdGF0ZSA9IHtcbiAgICBjdXJyZW50VGltZTogMCxcbiAgICBkdXJhdGlvbjogMCxcbiAgICBmdWxsc2NyZWVuOiBmYWxzZSxcbiAgfTtcblxuICAvKipcbiAgICogUmVhY3QgbGlmZWN5Y2xlIGhvb2tzIHBlcnRpbmVudCB0byBWaWRlb1xuICAgKi9cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHBsYXliYWNrUmF0ZSwgcGxheWluZywgdm9sdW1lIH0gPSB0aGlzLnByb3BzO1xuICAgIC8vIFNldCB1cCBldmVudCBsaXN0ZW5lcnMgdG8gY2F0Y2ggYmFja2Rvb3JzIGluIGZ1bGxzY3JlZW5cbiAgICAvLyBjaGFuZ2VzIHN1Y2ggYXMgdXNpbmcgdGhlIEVTQyBrZXkgdG8gZXhpdFxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBhZGRGdWxsc2NyZWVuRXZlbnRMaXN0ZW5lcih0aGlzLmhhbmRsZUZ1bGxzY3JlZW5DaGFuZ2UpO1xuICAgIH1cbiAgICAvLyBMb2FkIHRoZSB2aWRlbyB0byBoeWRyYXRlIHRoZSBET00gYWZ0ZXIgYSBzZXJ2ZXIgcmVuZGVyXG4gICAgdGhpcy5sb2FkKCk7XG4gICAgLy8gU2V0IHRoZSBpbml0aWFsIHZvbHVtZVxuICAgIHRoaXMuc2V0Vm9sdW1lKHZvbHVtZSk7XG4gICAgLy8gU2V0IHRoZSBpbml0aWFsIHBsYXliYWNrIHJhdGVcbiAgICB0aGlzLnNldFBsYXliYWNrUmF0ZShwbGF5YmFja1JhdGUpO1xuICAgIC8vIFNpbXVsYXRlIGFuIGF1dG9wbGF5IGVmZmVjdCBpZiB0aGUgY29tcG9uZW50XG4gICAgaWYgKHBsYXlpbmcpIHtcbiAgICAgIHRoaXMucGxheSgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IFByb3BzKSB7XG4gICAgLy8gSWYgdGhlIHZpZGVvIHNvdXJjZSBjaGFuZ2VkLCByZWxvYWQgdGhlIHZpZGVvXG4gICAgaWYgKGlzTmV3U291cmNlKHByZXZQcm9wcy5zcmMsIHRoaXMucHJvcHMuc3JjKSkge1xuICAgICAgdGhpcy5sb2FkKCk7XG4gICAgfVxuICAgIC8vIElmIHRoZSB2b2x1bWUgY2hhbmdlZCwgc2V0IHRoZSBuZXcgdm9sdW1lXG4gICAgaWYgKHByZXZQcm9wcy52b2x1bWUgIT09IHRoaXMucHJvcHMudm9sdW1lKSB7XG4gICAgICB0aGlzLnNldFZvbHVtZSh0aGlzLnByb3BzLnZvbHVtZSk7XG4gICAgfVxuICAgIC8vIElmIHRoZSBwbGF5YmFjayByYXRlIGNoYW5nZWQsIHNldCB0aGUgbmV3IHJhdGVcbiAgICBpZiAocHJldlByb3BzLnBsYXliYWNrUmF0ZSAhPT0gdGhpcy5wcm9wcy5wbGF5YmFja1JhdGUpIHtcbiAgICAgIHRoaXMuc2V0UGxheWJhY2tSYXRlKHRoaXMucHJvcHMucGxheWJhY2tSYXRlKTtcbiAgICB9XG4gICAgLy8gSWYgdGhlIHBsYXliYWNrIGNoYW5nZWQsIHBsYXkgb3IgcGF1c2UgdGhlIHZpZGVvXG4gICAgaWYgKHByZXZQcm9wcy5wbGF5aW5nICE9PSB0aGlzLnByb3BzLnBsYXlpbmcpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnBsYXlpbmcpIHtcbiAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgcmVtb3ZlRnVsbHNjcmVlbkV2ZW50TGlzdGVuZXIodGhpcy5oYW5kbGVGdWxsc2NyZWVuQ2hhbmdlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBET00gcmVmZXJlbmNlIGhvdXNla2VlcGluZyB0aGF0IGlzIG5lZWRlZCBmb3IgZnVuY3Rpb25hbGl0eVxuICAgKi9cblxuICAvLyBUaGUgcGxheWVyIGVsZW1lbnQgZW5jYXBzdWxhdGVzIHRoZSBhY3R1YWwgdmlkZW8gRE9NXG4gIC8vIGVsZW1lbnQgYXMgd2VsbCBhcyB0aGUgY29udHJvbHMgdG8gYnJpbmcgYm90aCBmdWxsc2NyZWVuXG4gIHNldFBsYXllclJlZiA9IChyZWY6ID9IVE1MRGl2RWxlbWVudCkgPT4ge1xuICAgIHRoaXMucGxheWVyID0gcmVmO1xuICB9O1xuXG4gIC8vIFRoZSBhY3R1YWwgcmVmZXJlbmNlIHRvIHRoZSB2aWRlbyBIVE1MIERPTSBlbGVtZW50XG4gIHNldFZpZGVvUmVmID0gKHJlZjogP0hUTUxWaWRlb0VsZW1lbnQpID0+IHtcbiAgICB0aGlzLnZpZGVvID0gcmVmO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGdW5jdGlvbnMgdGhhdCBkaXJlY3RseSBpbnRlcmFjdCB3aXRoIHRoZSBIVE1MIHZpZGVvIGVsZW1lbnRcbiAgICovXG5cbiAgLy8gU2V0IHRoZSB2aWRlbyB0byB0aGUgZGVzaXJlZCBwbGF5YmFjayByYXRlOiAxIChub3JtYWwpXG4gIHNldFBsYXliYWNrUmF0ZSA9IChwbGF5YmFja1JhdGU6IG51bWJlcikgPT4ge1xuICAgIGlmICh0aGlzLnZpZGVvKSB7XG4gICAgICB0aGlzLnZpZGVvLnBsYXliYWNrUmF0ZSA9IHBsYXliYWNrUmF0ZTtcbiAgICB9XG4gIH07XG5cbiAgLy8gU2V0IHRoZSB2aWRlbyB0byB0aGUgZGVzaXJlZCB2b2x1bWU6IDAgKG11dGVkKSAtPiAxIChtYXgpXG4gIHNldFZvbHVtZSA9ICh2b2x1bWU6IG51bWJlcikgPT4ge1xuICAgIGlmICh0aGlzLnZpZGVvKSB7XG4gICAgICB0aGlzLnZpZGVvLnZvbHVtZSA9IHZvbHVtZTtcbiAgICB9XG4gIH07XG5cbiAgLy8gQ2hhbmdlIHRoZSB2aWRlbyBzb3VyY2UgYW5kIHJlLWxvYWQgdGhlIHZpZGVvXG4gIGxvYWQgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMudmlkZW8pIHtcbiAgICAgIHRoaXMudmlkZW8ubG9hZCgpO1xuICAgIH1cbiAgfTtcblxuICAvLyBQYXVzZSB0aGUgdmlkZW9cbiAgcGF1c2UgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMudmlkZW8pIHtcbiAgICAgIHRoaXMudmlkZW8ucGF1c2UoKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gUGxheSB0aGUgdmlkZW9cbiAgcGxheSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy52aWRlbykge1xuICAgICAgdGhpcy52aWRlby5wbGF5KCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFNlZWsgdGhlIHZpZGVvIHRvIHRoZSBkZXNpcmVkIHRpbWVcbiAgc2VlayA9ICh0aW1lOiBudW1iZXIpID0+IHtcbiAgICBpZiAodGhpcy52aWRlbykge1xuICAgICAgdGhpcy52aWRlby5jdXJyZW50VGltZSA9IHRpbWU7XG4gICAgfVxuICB9O1xuXG4gIC8vIEVudGVyL2V4aXQgZnVsbHNjcmVlbiB2aWRlbyBwbGF5ZXIgbW9kZVxuICB0b2dnbGVGdWxsc2NyZWVuID0gKCkgPT4ge1xuICAgIGlmIChpc0Z1bGxzY3JlZW4oKSkge1xuICAgICAgZXhpdEZ1bGxzY3JlZW4oKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucGxheWVyKSB7XG4gICAgICByZXF1ZXN0RnVsbHNjcmVlbih0aGlzLnBsYXllcik7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVycyBmb3IgdmFyaW91cyBtZWRpYSBldmVudHMgb24gdGhlIHZpZGVvXG4gICAqL1xuXG4gIC8vIFNlbnQgd2hlbiBlbm91Z2ggZGF0YSBpcyBhdmFpbGFibGUgdGhhdCB0aGUgbWVkaWEgY2FuIGJlIHBsYXllZFxuICBoYW5kbGVDYW5QbGF5ID0gKGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MVmlkZW9FbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgb25SZWFkeSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChvblJlYWR5KSB7XG4gICAgICBvblJlYWR5KHsgZXZlbnQgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFRoZSBtZXRhZGF0YSBoYXMgbG9hZGVkIG9yIGNoYW5nZWQsIGluZGljYXRpbmcgYSBjaGFuZ2UgaW5cbiAgLy8gZHVyYXRpb24gb2YgdGhlIG1lZGlhXG4gIGhhbmRsZUR1cmF0aW9uQ2hhbmdlID0gKGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MVmlkZW9FbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgb25EdXJhdGlvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBkdXJhdGlvbiA9ICh0aGlzLnZpZGVvICYmIHRoaXMudmlkZW8uZHVyYXRpb24pIHx8IDA7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGR1cmF0aW9uIH0pO1xuXG4gICAgaWYgKG9uRHVyYXRpb25DaGFuZ2UpIHtcbiAgICAgIG9uRHVyYXRpb25DaGFuZ2UoeyBldmVudCwgZHVyYXRpb24gfSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFNlbnQgd2hlbiBwbGF5YmFjayBjb21wbGV0ZXMuXG4gIGhhbmRsZUVuZGVkID0gKGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MVmlkZW9FbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgb25FbmRlZCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChvbkVuZGVkKSB7XG4gICAgICBvbkVuZGVkKHsgZXZlbnQgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFNlbnQgd2hlbiB0aGUgdmlkZW8gaXMgc3dpdGNoZWQgdG8vb3V0LW9mIGZ1bGxzY3JlZW4gbW9kZVxuICBoYW5kbGVGdWxsc2NyZWVuQ2hhbmdlID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgIGNvbnN0IHsgb25GdWxsc2NyZWVuQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGZ1bGxzY3JlZW4gPSAhIWlzRnVsbHNjcmVlbigpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmdWxsc2NyZWVuIH0pO1xuXG4gICAgaWYgKG9uRnVsbHNjcmVlbkNoYW5nZSkge1xuICAgICAgb25GdWxsc2NyZWVuQ2hhbmdlKHsgZXZlbnQsIGZ1bGxzY3JlZW4gfSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFNlbnQgd2hlbiBwbGF5YmFjayBvZiB0aGUgbWVkaWEgc3RhcnRzIGFmdGVyIGhhdmluZyBiZWVuIHBhdXNlZC5cbiAgaGFuZGxlUGxheSA9IChldmVudDogU3ludGhldGljRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyBvblBsYXkgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAob25QbGF5KSB7XG4gICAgICBvblBsYXkoeyBldmVudCB9KTtcbiAgICB9XG4gIH07XG5cbiAgLy8gU2VudCB3aGVuIHBsYXliYWNrIGlzIHBhdXNlZC5cbiAgaGFuZGxlUGF1c2UgPSAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgb25QYXVzZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChvblBhdXNlKSB7XG4gICAgICBvblBhdXNlKHsgZXZlbnQgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFNlbnQgcGVyaW9kaWNhbGx5IHRvIGluZm9ybSBpbnRlcmVzdGVkIHBhcnRpZXMgb2YgcHJvZ3Jlc3MgZG93bmxvYWRpbmcgdGhlIG1lZGlhXG4gIGhhbmRsZVByb2dyZXNzID0gKGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MVmlkZW9FbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgb25Mb2FkZWRDaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBidWZmZXJlZCB9ID0gdGhpcy52aWRlbyB8fCB7fTtcbiAgICBjb25zdCBsb2FkZWQgPVxuICAgICAgYnVmZmVyZWQgJiYgYnVmZmVyZWQubGVuZ3RoID4gMCA/IGJ1ZmZlcmVkLmVuZChidWZmZXJlZC5sZW5ndGggLSAxKSA6IDA7XG5cbiAgICBpZiAob25Mb2FkZWRDaGFuZ2UpIHtcbiAgICAgIG9uTG9hZGVkQ2hhbmdlKHsgZXZlbnQsIGxvYWRlZCB9KTtcbiAgICB9XG4gIH07XG5cbiAgLy8gU2VudCB3aGVuIGEgc2VlayBvcGVyYXRpb24gY29tcGxldGVzLlxuICBoYW5kbGVTZWVrID0gKGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MVmlkZW9FbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgb25TZWVrIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKG9uU2Vlaykge1xuICAgICAgb25TZWVrKHsgZXZlbnQgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFRoZSB0aW1lIGluZGljYXRlZCBieSB0aGUgZWxlbWVudCdzIGN1cnJlbnRUaW1lIGF0dHJpYnV0ZSBoYXMgY2hhbmdlZFxuICBoYW5kbGVUaW1lVXBkYXRlID0gKGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MVmlkZW9FbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgb25UaW1lQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gKHRoaXMudmlkZW8gJiYgdGhpcy52aWRlby5jdXJyZW50VGltZSkgfHwgMDtcbiAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudFRpbWUgfSk7XG5cbiAgICBpZiAob25UaW1lQ2hhbmdlKSB7XG4gICAgICBvblRpbWVDaGFuZ2UoeyBldmVudCwgdGltZTogY3VycmVudFRpbWUgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFNlbnQgd2hlbiB0aGUgYXVkaW8gdm9sdW1lIGNoYW5nZXNcbiAgaGFuZGxlVm9sdW1lQ2hhbmdlID0gKGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IG9uVm9sdW1lQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG11dGVkID0gKHRoaXMudmlkZW8gJiYgdGhpcy52aWRlby5tdXRlZCkgfHwgZmFsc2U7XG5cbiAgICBpZiAob25Wb2x1bWVDaGFuZ2UpIHtcbiAgICAgIG9uVm9sdW1lQ2hhbmdlKHsgZXZlbnQsIHZvbHVtZTogbXV0ZWQgPyAxIDogMCB9KTtcbiAgICB9XG4gIH07XG5cbiAgdmlkZW86ID9IVE1MVmlkZW9FbGVtZW50O1xuXG4gIHBsYXllcjogP0hUTUxEaXZFbGVtZW50O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBhc3BlY3RSYXRpbyxcbiAgICAgIGNhcHRpb25zLFxuICAgICAgbG9vcCxcbiAgICAgIHBsYXlpbmcsXG4gICAgICBwbGF5c0lubGluZSxcbiAgICAgIHBvc3RlcixcbiAgICAgIHByZWxvYWQsXG4gICAgICBzcmMsXG4gICAgICB2b2x1bWUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBjdXJyZW50VGltZSwgZHVyYXRpb24sIGZ1bGxzY3JlZW4gfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCBwYWRkaW5nQm90dG9tID0gKGZ1bGxzY3JlZW4gJiYgJzAnKSB8fCBgJHsoMSAvIGFzcGVjdFJhdGlvKSAqIDEwMH0lYDtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj17dGhpcy5zZXRQbGF5ZXJSZWZ9XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnBsYXllcn1cbiAgICAgICAgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbSwgaGVpZ2h0OiBmdWxsc2NyZWVuID8gJzEwMCUnIDogMCB9fVxuICAgICAgPlxuICAgICAgICA8dmlkZW9cbiAgICAgICAgICBhdXRvUGxheT17cGxheWluZ31cbiAgICAgICAgICBsb29wPXtsb29wfVxuICAgICAgICAgIG11dGVkPXt2b2x1bWUgPT09IDB9XG4gICAgICAgICAgcGxheXNJbmxpbmU9e3BsYXlzSW5saW5lfVxuICAgICAgICAgIHBvc3Rlcj17cG9zdGVyfVxuICAgICAgICAgIHByZWxvYWQ9e3ByZWxvYWR9XG4gICAgICAgICAgc3JjPXt0eXBlb2Ygc3JjID09PSAnc3RyaW5nJyA/IHNyYyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICByZWY9e3RoaXMuc2V0VmlkZW9SZWZ9XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudmlkZW99XG4gICAgICAgICAgb25DYW5QbGF5PXt0aGlzLmhhbmRsZUNhblBsYXl9XG4gICAgICAgICAgb25EdXJhdGlvbkNoYW5nZT17dGhpcy5oYW5kbGVEdXJhdGlvbkNoYW5nZX1cbiAgICAgICAgICBvbkVuZGVkPXt0aGlzLmhhbmRsZUVuZGVkfVxuICAgICAgICAgIG9uU2Vla2VkPXt0aGlzLmhhbmRsZVNlZWt9XG4gICAgICAgICAgb25UaW1lVXBkYXRlPXt0aGlzLmhhbmRsZVRpbWVVcGRhdGV9XG4gICAgICAgICAgb25Qcm9ncmVzcz17dGhpcy5oYW5kbGVQcm9ncmVzc31cbiAgICAgICAgPlxuICAgICAgICAgIHtBcnJheS5pc0FycmF5KHNyYykgJiZcbiAgICAgICAgICAgIHNyYy5tYXAoc291cmNlID0+IChcbiAgICAgICAgICAgICAgPHNvdXJjZSBrZXk9e3NvdXJjZS5zcmN9IHNyYz17c291cmNlLnNyY30gdHlwZT17c291cmNlLnR5cGV9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8dHJhY2sga2luZD1cImNhcHRpb25zXCIgc3JjPXtjYXB0aW9uc30gLz5cbiAgICAgICAgPC92aWRlbz5cbiAgICAgICAgey8qIE5lZWQgdG8gdXNlIGZ1bGwgcGF0aCBmb3IgdGhlc2UgcHJvcHMgc28gRmxvdyBjYW4gaW5mZXIgY29ycmVjdCBzdWJ0eXBlICovfVxuICAgICAgICB7dGhpcy5wcm9wcy5jb250cm9scyAmJiAoXG4gICAgICAgICAgPFZpZGVvQ29udHJvbHNcbiAgICAgICAgICAgIGFjY2Vzc2liaWxpdHlNYXhpbWl6ZUxhYmVsPXt0aGlzLnByb3BzLmFjY2Vzc2liaWxpdHlNYXhpbWl6ZUxhYmVsfVxuICAgICAgICAgICAgYWNjZXNzaWJpbGl0eU1pbmltaXplTGFiZWw9e3RoaXMucHJvcHMuYWNjZXNzaWJpbGl0eU1pbmltaXplTGFiZWx9XG4gICAgICAgICAgICBhY2Nlc3NpYmlsaXR5TXV0ZUxhYmVsPXt0aGlzLnByb3BzLmFjY2Vzc2liaWxpdHlNdXRlTGFiZWx9XG4gICAgICAgICAgICBhY2Nlc3NpYmlsaXR5UGF1c2VMYWJlbD17dGhpcy5wcm9wcy5hY2Nlc3NpYmlsaXR5UGF1c2VMYWJlbH1cbiAgICAgICAgICAgIGFjY2Vzc2liaWxpdHlQbGF5TGFiZWw9e3RoaXMucHJvcHMuYWNjZXNzaWJpbGl0eVBsYXlMYWJlbH1cbiAgICAgICAgICAgIGFjY2Vzc2liaWxpdHlVbm11dGVMYWJlbD17dGhpcy5wcm9wcy5hY2Nlc3NpYmlsaXR5VW5tdXRlTGFiZWx9XG4gICAgICAgICAgICBjdXJyZW50VGltZT17Y3VycmVudFRpbWV9XG4gICAgICAgICAgICBkdXJhdGlvbj17ZHVyYXRpb259XG4gICAgICAgICAgICBmdWxsc2NyZWVuPXtmdWxsc2NyZWVufVxuICAgICAgICAgICAgb25QbGF5PXt0aGlzLmhhbmRsZVBsYXl9XG4gICAgICAgICAgICBvblBhdXNlPXt0aGlzLmhhbmRsZVBhdXNlfVxuICAgICAgICAgICAgb25GdWxsc2NyZWVuQ2hhbmdlPXt0aGlzLnRvZ2dsZUZ1bGxzY3JlZW59XG4gICAgICAgICAgICBvblZvbHVtZUNoYW5nZT17dGhpcy5oYW5kbGVWb2x1bWVDaGFuZ2V9XG4gICAgICAgICAgICBwbGF5aW5nPXtwbGF5aW5nfVxuICAgICAgICAgICAgc2Vlaz17dGhpcy5zZWVrfVxuICAgICAgICAgICAgdm9sdW1lPXt2b2x1bWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJpZGVudGl0eSIsImNsYXNzTmFtZSIsIlNldCIsImlubGluZVN0eWxlIiwiZnJvbUNsYXNzTmFtZSIsImNsYXNzTmFtZXMiLCJmcm9tSW5saW5lU3R5bGUiLCJjb25jYXQiLCJzdHlsZXMiLCJyZWR1Y2UiLCJjbGFzc05hbWVBIiwiaW5saW5lU3R5bGVBIiwiY2xhc3NOYW1lQiIsImlubGluZVN0eWxlQiIsIm1hcENsYXNzTmFtZSIsImZuIiwiQXJyYXkiLCJmcm9tIiwibWFwIiwidG9Qcm9wcyIsInByb3BzIiwic2l6ZSIsInNvcnQiLCJqb2luIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInN0eWxlIiwidG9nZ2xlIiwidmFsIiwibWFwcGluZyIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInJhbmdlIiwic2NhbGUiLCJuIiwiTWF0aCIsImFicyIsInJhbmdlV2l0aG91dFplcm8iLCJiaW5kIiwic2NvcGUiLCJuYW1lIiwidW5pb24iLCJmbnMiLCJtYXJnaW5TdGFydCIsIndoaXRlc3BhY2UiLCJtYXJnaW5FbmQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJtYXJnaW4iLCJzbU1hcmdpblRvcCIsInNtTWFyZ2luUmlnaHQiLCJzbU1hcmdpbkJvdHRvbSIsInNtTWFyZ2luTGVmdCIsInNtTWFyZ2luIiwibWRNYXJnaW5Ub3AiLCJtZE1hcmdpblJpZ2h0IiwibWRNYXJnaW5Cb3R0b20iLCJtZE1hcmdpbkxlZnQiLCJtZE1hcmdpbiIsImxnTWFyZ2luVG9wIiwibGdNYXJnaW5SaWdodCIsImxnTWFyZ2luQm90dG9tIiwibGdNYXJnaW5MZWZ0IiwibGdNYXJnaW4iLCJwYWRkaW5nWCIsInBhZGRpbmdZIiwicGFkZGluZyIsInNtUGFkZGluZ1giLCJzbVBhZGRpbmdZIiwic21QYWRkaW5nIiwibWRQYWRkaW5nWCIsIm1kUGFkZGluZ1kiLCJtZFBhZGRpbmciLCJsZ1BhZGRpbmdYIiwibGdQYWRkaW5nWSIsImxnUGFkZGluZyIsInByZWZpeCIsInByZSIsImRpc3BsYXkiLCJ2YWx1ZSIsImNvbHVtbiIsImZvcm1hdEludEJvaW50IiwieCIsInRvU3RyaW5nIiwicHJvcFRvRm4iLCJ4cyIsImMiLCJzbSIsIm1kIiwibGciLCJub25lIiwieHNEaXNwbGF5Tm9uZSIsImZsZXgiLCJ4c0Rpc3BsYXlGbGV4IiwiYmxvY2siLCJ4c0Rpc3BsYXlCbG9jayIsImlubGluZUJsb2NrIiwieHNEaXNwbGF5SW5saW5lQmxvY2siLCJ2aXN1YWxseUhpZGRlbiIsInhzRGlzcGxheVZpc3VhbGx5SGlkZGVuIiwiZGlyZWN0aW9uIiwicm93IiwieHNEaXJlY3Rpb25Sb3ciLCJ4c0RpcmVjdGlvbkNvbHVtbiIsInNtRGlzcGxheSIsInNtRGlzcGxheU5vbmUiLCJzbURpc3BsYXlGbGV4Iiwic21EaXNwbGF5QmxvY2siLCJzbURpc3BsYXlJbmxpbmVCbG9jayIsInNtRGlzcGxheVZpc3VhbGx5SGlkZGVuIiwic21Db2x1bW4iLCJzbURpcmVjdGlvbiIsInNtRGlyZWN0aW9uUm93Iiwic21EaXJlY3Rpb25Db2x1bW4iLCJtZERpc3BsYXkiLCJtZERpc3BsYXlOb25lIiwibWREaXNwbGF5RmxleCIsIm1kRGlzcGxheUJsb2NrIiwibWREaXNwbGF5SW5saW5lQmxvY2siLCJtZERpc3BsYXlWaXN1YWxseUhpZGRlbiIsIm1kQ29sdW1uIiwibWREaXJlY3Rpb24iLCJtZERpcmVjdGlvblJvdyIsIm1kRGlyZWN0aW9uQ29sdW1uIiwibGdEaXNwbGF5IiwibGdEaXNwbGF5Tm9uZSIsImxnRGlzcGxheUZsZXgiLCJsZ0Rpc3BsYXlCbG9jayIsImxnRGlzcGxheUlubGluZUJsb2NrIiwibGdEaXNwbGF5VmlzdWFsbHlIaWRkZW4iLCJsZ0NvbHVtbiIsImxnRGlyZWN0aW9uIiwibGdEaXJlY3Rpb25Sb3ciLCJsZ0RpcmVjdGlvbkNvbHVtbiIsImFsaWduQ29udGVudCIsInN0YXJ0IiwibGF5b3V0IiwiY29udGVudFN0YXJ0IiwiZW5kIiwiY29udGVudEVuZCIsImNlbnRlciIsImNvbnRlbnRDZW50ZXIiLCJiZXR3ZWVuIiwiY29udGVudEJldHdlZW4iLCJhcm91bmQiLCJjb250ZW50QXJvdW5kIiwiYWxpZ25JdGVtcyIsIml0ZW1zU3RhcnQiLCJpdGVtc0VuZCIsIml0ZW1zQ2VudGVyIiwiYmFzZWxpbmUiLCJpdGVtc0Jhc2VsaW5lIiwiYWxpZ25TZWxmIiwic2VsZlN0YXJ0Iiwic2VsZkVuZCIsInNlbGZDZW50ZXIiLCJzZWxmQmFzZWxpbmUiLCJzdHJldGNoIiwic2VsZlN0cmV0Y2giLCJib3R0b20iLCJib3R0b20wIiwiY29sb3IiLCJibHVlIiwiY29sb3JzIiwiYmx1ZUJnIiwiZGFya0dyYXkiLCJkYXJrR3JheUJnIiwicGluZSIsInBpbmVCZyIsImdyYXkiLCJncmF5QmciLCJyZWQiLCJyZWRCZyIsIm9saXZlIiwib2xpdmVCZyIsImxpZ2h0R3JheSIsImxpZ2h0R3JheUJnIiwid2hpdGUiLCJ3aGl0ZUJnIiwib3JhbmdlIiwib3JhbmdlQmciLCJncmVlbiIsImdyZWVuQmciLCJuYXZ5IiwibmF2eUJnIiwibWlkbmlnaHQiLCJtaWRuaWdodEJnIiwicHVycGxlIiwicHVycGxlQmciLCJvcmNoaWQiLCJvcmNoaWRCZyIsImVnZ3BsYW50IiwiZWdncGxhbnRCZyIsIm1hcm9vbiIsIm1hcm9vbkJnIiwid2F0ZXJtZWxvbiIsIndhdGVybWVsb25CZyIsImxpZ2h0V2FzaCIsImxpZ2h0V2FzaEJnIiwiZGFya1dhc2giLCJkYXJrV2FzaEJnIiwiZml0IiwiZ3JvdyIsImZsZXhHcm93IiwiZmxleE5vbmUiLCJoZWlnaHQiLCJqdXN0aWZ5Q29udGVudCIsImp1c3RpZnlFbmQiLCJqdXN0aWZ5Q2VudGVyIiwianVzdGlmeUJldHdlZW4iLCJqdXN0aWZ5QXJvdW5kIiwibGVmdCIsImxlZnQwIiwiZGVwcmVjYXRlZE1hcmdpbiIsIm10IiwibWIiLCJtbCIsIm1yIiwid2hpdGVzcGFjZUxlZ2FjeSIsInRvcCIsIm1sQXV0byIsInJpZ2h0IiwibXJBdXRvIiwibWF4SGVpZ2h0IiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtaW5XaWR0aCIsIm92ZXJmbG93IiwiaGlkZGVuIiwib3ZlcmZsb3dIaWRkZW4iLCJzY3JvbGwiLCJvdmVyZmxvd1Njcm9sbCIsImF1dG8iLCJvdmVyZmxvd0F1dG8iLCJzY3JvbGxYIiwib3ZlcmZsb3dTY3JvbGxYIiwic2Nyb2xsWSIsIm92ZXJmbG93U2Nyb2xsWSIsImRlcHJlY2F0ZWRQYWRkaW5nIiwieSIsInBvc2l0aW9uIiwiYWJzb2x1dGUiLCJyZWxhdGl2ZSIsImZpeGVkIiwicmlnaHQwIiwic2hhcGUiLCJjaXJjbGUiLCJib3JkZXJzIiwicGlsbCIsInJvdW5kZWQiLCJyb3VuZGVkQm90dG9tIiwicm91bmRlZExlZnQiLCJyb3VuZGVkUmlnaHQiLCJyb3VuZGVkVG9wIiwidG9wMCIsIndpZHRoIiwid3JhcCIsImZsZXhXcmFwIiwiZGFuZ2Vyb3VzbHlTZXRJbmxpbmVTdHlsZSIsIl9fc3R5bGUiLCJjb250YWlucyIsImtleSIsImFyciIsImluZGV4T2YiLCJvbWl0Iiwib2JqIiwiYWNjIiwiayIsIkJveCIsImNoaWxkcmVuIiwiYmxhY2tsaXN0IiwicyIsImJveCIsInByb3AiLCJSZWFjdC5jcmVhdGVFbGVtZW50IiwiQ29sdW1uUHJvcFR5cGUiLCJQcm9wVHlwZXMiLCJvbmVPZiIsIk1hcmdpblByb3BUeXBlIiwiUGFkZGluZ1Byb3BUeXBlIiwicHJvcFR5cGVzIiwibm9kZSIsImV4YWN0Iiwib2JqZWN0Iiwib25lT2ZUeXBlIiwiYm9vbCIsIm51bWJlciIsInN0cmluZyIsImFkZCIsImFkZENpcmNsZSIsImFkZFBpbiIsImFuZ2xlZFBpbiIsImFycm93QmFjayIsImFycm93Q2lyY2xlRG93biIsImFycm93Q2lyY2xlRm9yd2FyZCIsImFycm93RG93biIsImFycm93Rm9yd2FyZCIsImFycm93VXAiLCJhcnJvd1VwUmlnaHQiLCJiZWxsIiwiY2FtZXJhIiwiY2FtZXJhUm9sbCIsImNhbmNlbCIsImNoZWNrIiwiY2hlY2tDaXJjbGUiLCJjaXJjbGVPdXRsaW5lIiwiY2xlYXIiLCJjbG9jayIsImNvZyIsImNvbXBhc3MiLCJjb21wb3NlIiwiZGFzaCIsImRvd25sb2FkIiwiZWRpdCIsImVsbGlwc2lzIiwiZWxsaXBzaXNDaXJjbGVPdXRsaW5lIiwiZW52ZWxvcGUiLCJleWUiLCJmYWNlYm9vayIsImZhY2VIYXBweSIsImZhY2VTYWQiLCJmYWNlU21pbGV5IiwiZmlsdGVyIiwiZmxhZyIsImZsYXNobGlnaHQiLCJnaWYiLCJnbG9iZSIsImdsb2JlQ2hlY2tlZCIsImdtYWlsIiwiZ29vZ2xlUGx1cyIsImdyYXBoQmFyIiwiaGFuZGxlIiwiaGFuZFBvaW50aW5nIiwiaGVhcnQiLCJoZWFydEJyb2tlbiIsImtub29wIiwibGlnaHRidWxiIiwibGluayIsImxvY2F0aW9uIiwibG9jayIsIm1heGltaXplIiwibWVnYXBob25lIiwibWVudSIsIm1pbmltaXplIiwibW92ZSIsIm11dGUiLCJwYXVzZSIsInBlb3BsZSIsInBlcnNvbiIsInBlcnNvbkFkZCIsInBpbiIsInBpbkhpZGUiLCJwaW50ZXJlc3QiLCJwbGF5IiwicXVlc3Rpb25NYXJrIiwicmVtb3ZlIiwicmVwb3J0Iiwic2VhcmNoIiwic2hvcHBpbmdCYWciLCJzbWlsZXkiLCJzbWlsZXlPdXRsaW5lIiwic2VuZCIsInNoYXJlIiwic291bmQiLCJzcGVlY2giLCJzcGVlY2hFbGxpcHNpcyIsInRhZyIsInRleHRBbGlnbkxlZnQiLCJ0ZXh0QWxpZ25DZW50ZXIiLCJ0ZXh0QWxpZ25SaWdodCIsInR3aXR0ZXIiLCJ2aWV3VHlwZURlZmF1bHQiLCJ2aWV3VHlwZURlbnNlIiwidmlld1R5cGVMaXN0IiwiSWNvbk5hbWVzIiwiaWNvbnMiLCJJY29uIiwiYWNjZXNzaWJpbGl0eUxhYmVsIiwiaWNvbiIsImlubGluZSIsImRhbmdlcm91c2x5U2V0U3ZnUGF0aCIsImNzIiwiY2xhc3NuYW1lcyIsImljb25CbG9jayIsInBhdGgiLCJfX3BhdGgiLCJ1bmRlZmluZWQiLCJhcmlhSGlkZGVuIiwiaXNSZXF1aXJlZCIsInNob3VsZFNjYWxlSW1hZ2UiLCJJbWFnZSIsImhhbmRsZUxvYWQiLCJvbkxvYWQiLCJoYW5kbGVFcnJvciIsIm9uRXJyb3IiLCJsb2FkSW1hZ2UiLCJwcmV2UHJvcHMiLCJzcmMiLCJ3aW5kb3ciLCJpbWFnZSIsIm9ubG9hZCIsIm9uZXJyb3IiLCJhbHQiLCJuYXR1cmFsSGVpZ2h0IiwibmF0dXJhbFdpZHRoIiwic2l6ZXMiLCJzcmNTZXQiLCJpc1NjYWxlZEltYWdlIiwiY2hpbGRDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZEltYWdlIiwicGFkZGluZ0JvdHRvbSIsImltZyIsIlJlYWN0IiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsIk1hc2siLCJ3YXNoIiwiY3giLCJTcXVhcmUiLCJEZWZhdWx0QXZhdGFyIiwiZmlyc3RJbml0aWFsIiwidG9VcHBlckNhc2UiLCJ0eXBvZ3JhcGh5IiwiYW50aWFsaWFzZWQiLCJzYW5zU2VyaWYiLCJsZWFkaW5nU21hbGwiLCJmb250V2VpZ2h0Qm9sZCIsIkF2YXRhciIsInN0YXRlIiwiaXNJbWFnZUxvYWRlZCIsImhhbmRsZUltYWdlRXJyb3IiLCJzZXRTdGF0ZSIsIm91dGxpbmUiLCJ2ZXJpZmllZCIsImJveFNoYWRvdyIsIlNJWkVfU0NBTEUiLCJ4bCIsIlRleHQiLCJhbGlnbiIsImJvbGQiLCJpdGFsaWMiLCJzbVNpemUiLCJtZFNpemUiLCJsZ1NpemUiLCJsZWFkaW5nIiwidHJ1bmNhdGUiLCJfX2Rhbmdlcm91c2x5SW5jcmVhc2VMaW5lSGVpZ2h0Iiwic21TY2FsZSIsIm1kU2NhbGUiLCJsZ1NjYWxlIiwibGVhZGluZ1Nob3J0IiwibGVhZGluZ1RhbGwiLCJhbGlnbkNlbnRlciIsImFsaWduSnVzdGlmeSIsImFsaWduTGVmdCIsImFsaWduUmlnaHQiLCJicmVha1dvcmQiLCJmb250U3R5bGVJdGFsaWMiLCJmb250U3R5bGVOb3JtYWwiLCJmb250V2VpZ2h0Tm9ybWFsIiwiVGFnIiwidGl0bGUiLCJCdXR0b24iLCJhY2Nlc3NpYmlsaXR5RXhwYW5kZWQiLCJhY2Nlc3NpYmlsaXR5SGFzcG9wdXAiLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJ0ZXh0IiwidHlwZSIsInRleHRDb2xvciIsInRyYW5zcGFyZW50IiwiY2xhc3NlcyIsImJ1dHRvbiIsInNvbGlkIiwiZW5hYmxlZCIsImV2ZW50IiwiQ2FyZCIsImhvdmVyZWQiLCJoYW5kbGVNb3VzZUVudGVyIiwib25Nb3VzZUVudGVyIiwiaGFuZGxlTW91c2VMZWF2ZSIsIm9uTW91c2VMZWF2ZSIsImFjdGl2ZSIsImNhcmQiLCJob3ZlciIsIkNoZWNrYm94IiwiZm9jdXNlZCIsImhhbmRsZUNoYW5nZSIsImNoZWNrZWQiLCJ0YXJnZXQiLCJvbkNoYW5nZSIsImhhbmRsZUNsaWNrIiwiY3VycmVudFRhcmdldCIsImhhbmRsZUJsdXIiLCJoYW5kbGVGb2N1cyIsImluZGV0ZXJtaW5hdGUiLCJzZXRJbmRldGVybWluYXRlIiwicHJldmlvdXNQcm9wcyIsImlucHV0IiwiaGFzRXJyb3IiLCJpZCIsImJvcmRlclN0eWxlIiwiYm9yZGVyIiwiYm9yZGVyRGFyayIsImJvcmRlckVycm9yIiwiaW5wdXRFbmFibGVkIiwiaW5wdXRTbSIsImlucHV0TWQiLCJlbCIsImNoZWNrRW5hYmxlZCIsImNoZWNrRm9jdXNlZCIsImNoZWNrTWQiLCJjaGVja1NtIiwiQ29sbGVjdGlvbiIsIkl0ZW0iLCJ2aWV3cG9ydFRvcCIsInZpZXdwb3J0TGVmdCIsIm1heCIsIml0ZW0iLCJ2aWV3cG9ydFdpZHRoIiwidmlld3BvcnRIZWlnaHQiLCJpdGVtcyIsImlkeCIsInB1c2giLCJsYXlvdXRTdHlsZXMiLCJhbnkiLCJhcnJheU9mIiwiVVAiLCJET1dOIiwiTUlEIiwiY29sdW1uTGF5b3V0IiwibnVtT2ZDb2x1bW5zIiwicGFkZGluZ0FsbCIsImd1dHRlciIsInBvc2l0aW9ucyIsIm1pbmRleCIsIm1pbkluZGV4IiwiaSIsImNvbHVtbnNGb3JDb2xsYWdlV2l0aENvdmVyIiwiZ2V0Q29sbGFnZUxheW91dCIsImNvdmVyIiwibnVtQ29scyIsImNvbHVtbnMiLCJoIiwidyIsImxheW91dEtleSIsImdyaWRDb2xzIiwibGF5b3V0SWR4IiwiY29sSGVpZ2h0cyIsImZpbGwiLCJjb2xDb3VudHMiLCJjb2wiLCJjb2xJZHgiLCJpdGVtSGVpZ2h0IiwiY292ZXJJbWFnZVdpZHRoIiwiY2VpbCIsInVuc2hpZnQiLCJDb2xsYWdlIiwicmVuZGVySW1hZ2UiLCJpbmRleCIsIkNvbHVtbiIsImRlcHJlY2F0ZWRDb2x1bW4iLCJzcGFuIiwic21TcGFuIiwibWRTcGFuIiwibGdTcGFuIiwiQ29udGFpbmVyIiwiRGl2aWRlciIsImRpdmlkZXIiLCJDYXJldCIsIlNQQUNFU19JTkRFWF9NQVAiLCJESVJfSU5ERVhfTUFQIiwidXAiLCJkb3duIiwiTUFSR0lOIiwiQ0FSRVRfSEVJR0hUIiwiQ0FSRVRfT0ZGU0VUX0ZST01fU0lERSIsIkJPUkRFUl9SQURJVVMiLCJnZXRNYWluRGlyIiwiZmx5b3V0U2l6ZSIsImlkZWFsRGlyZWN0aW9uIiwidHJpZ2dlclJlY3QiLCJ3aW5kb3dTaXplIiwic3BhY2VzIiwibWFpbkRpciIsImdldFN1YkRpciIsIm9mZnNldCIsInRyaWdnZXJNaWQiLCJ3aW5kb3dTcGFjZUF2YWlsYWJsZSIsImFib3ZlT3JMZWZ0IiwiYmVsb3dPclJpZ2h0Iiwic3ViRGlyIiwiY2FsY0VkZ2VTaGlmdHMiLCJmbHlvdXRWZXJ0aWNhbFNoaWZ0IiwiZmx5b3V0SG9yaXpvbnRhbFNoaWZ0IiwiY2FyZXRWZXJ0aWNhbFNoaWZ0IiwiY2FyZXRIb3Jpem9udGFsU2hpZnQiLCJpc0Nsb3NlVmVydGljYWxseSIsImlzQ2xvc2VIb3Jpem9udGFsbHkiLCJmbHlvdXQiLCJjYXJldCIsImFkanVzdE9mZnNldHMiLCJiYXNlIiwiZWRnZVNoaWZ0IiwiZmx5b3V0TGVmdCIsImZseW91dFRvcCIsImNhcmV0VG9wIiwiY2FyZXRSaWdodCIsImNhcmV0Qm90dG9tIiwiY2FyZXRMZWZ0IiwiZmx5b3V0T2Zmc2V0IiwiY2FyZXRPZmZzZXQiLCJiYXNlT2Zmc2V0cyIsInJlbGF0aXZlT2Zmc2V0IiwiSEFMRl9DQVJFVCIsIkNvbnRlbnRzIiwic2V0Rmx5b3V0UG9zaXRpb24iLCJwb3NpdGlvblJlbGF0aXZlVG9BbmNob3IiLCJwYWdlWE9mZnNldCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsTGVmdCIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsVG9wIiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwiY2xpZW50SGVpZ2h0IiwiZWRnZVNoaWZ0cyIsInNldFRpbWVvdXQiLCJzaG91bGRGb2N1cyIsImZvY3VzIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uUmVzaXplIiwib25LZXlEb3duIiwibmV4dFByb3BzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImJnQ29sb3IiLCJ2aXNpYmlsaXR5IiwiYmFja2dyb3VuZCIsInN0cm9rZSIsImJvcmRlckNvbG9yIiwiY29udGFpbmVyIiwiZGltZW5zaW9ucyIsImNvbnRlbnRzIiwiaW5uZXJDb250ZW50cyIsIk91dHNpZGVFdmVudEJlaGF2aW9yIiwiaGFuZGxlQ2xpY2tFdmVudCIsImZpbmRET01Ob2RlIiwiTm9kZSIsImNhcHR1cmUiLCJTSVpFX1dJRFRIX01BUCIsIkVTQ0FQRV9LRVlfQ09ERSIsIkNvbnRyb2xsZXIiLCJ0cmlnZ2VyQm91bmRpbmdSZWN0IiwiaGFuZGxlS2V5RG93biIsImtleUNvZGUiLCJvbkRpc21pc3MiLCJoYW5kbGVQYWdlQ2xpY2siLCJhbmNob3IiLCJoYW5kbGVSZXNpemUiLCJ1cGRhdGVUcmlnZ2VyUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJGbHlvdXQiLCJ6aXAiLCJhIiwiYiIsIkJPUkRFUl9XSURUSCIsIkFWQVRBUl9TSVpFUyIsImF2YXRhckxheW91dCIsInRleHRMYXlvdXQiLCJkZWdUb1JhZCIsImRlZyIsIlBJIiwicXVhcnRlclBhZGRpbmciLCJzaW4iLCJpbml0aWFsIiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ1RvcCIsIkdyb3VwQXZhdGFyIiwiY29sbGFib3JhdG9ycyIsImF2YXRhcldpZHRoIiwiYXZhdGFySGVpZ2h0Iiwid2lsbENoYW5nZSIsImNvbGxhYm9yYXRvciIsImRlZmF1bHRIZWFkaW5nTGV2ZWxzIiwiSGVhZGluZyIsImFjY2Vzc2liaWxpdHlMZXZlbCIsImhlYWRpbmdMZXZlbCIsIlNJWkVfTkFNRV9UT19QSVhFTCIsImRlZmF1bHRJY29uQnV0dG9uSWNvbkNvbG9ycyIsIlBvZyIsImljb25Db2xvciIsImljb25TaXplIiwicG9nIiwiSWNvbkJ1dHRvbiIsImhhbmRsZU1vdXNlRG93biIsImhhbmRsZU1vdXNlVXAiLCJMYWJlbCIsImh0bWxGb3IiLCJsYWJlbCIsIkxheWVyIiwiY3JlYXRlRWxlbWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUNoaWxkIiwiY3JlYXRlUG9ydGFsIiwiYXNwZWN0UmF0aW8iLCJMZXR0ZXJib3giLCJjb250ZW50QXNwZWN0UmF0aW8iLCJ2aWV3cG9ydEFzcGVjdFJhdGlvIiwiY29udGVudEhlaWdodCIsImNvbnRlbnRXaWR0aCIsIlRBQl9LRVlfQ09ERSIsIkxpbmsiLCJlbmFibGVGb2N1c1N0eWxlcyIsImhyZWYiLCJoYW5kbGVLZXlVcCIsInJlbCIsImxpbmtUYXJnZXQiLCJhY2Nlc3NpYmxlRm9jdXNTdHlsZSIsImRlYm91bmNlIiwidGhyZXNoaG9sZCIsImRlZmVyVGltZXIiLCJkZWJvdW5jZWQiLCJhcmdzIiwiY2xlYXJUaW1lb3V0IiwiRmV0Y2hJdGVtcyIsImNvbnRhaW5lckhlaWdodCIsImlzQXRFbmQiLCJpc0ZldGNoaW5nIiwiZmV0Y2hNb3JlIiwic2Nyb2xsSGVpZ2h0Iiwic2Nyb2xsQnVmZmVyIiwiZ2V0U2Nyb2xsQ29udGFpbmVyIiwic2Nyb2xsQ29udGFpbmVyIiwiU2Nyb2xsQ29udGFpbmVyIiwiZ2V0U2Nyb2xsQ29udGFpbmVyUmVmIiwiaGFuZGxlU2Nyb2xsIiwib25TY3JvbGwiLCJ1cGRhdGVTY3JvbGxDb250YWluZXIiLCJuZXh0U2Nyb2xsQ29udGFpbmVyIiwib25seSIsInRocm90dGxlIiwibGFzdCIsInRocm90dGxlZCIsIm5vdyIsIkRhdGUiLCJNZWFzdXJlbWVudFN0b3JlIiwiV2Vha01hcCIsImdldCIsImhhcyIsInNldCIsImdldEVsZW1lbnRIZWlnaHQiLCJlbGVtZW50IiwiZ2V0V2luZG93U2Nyb2xsUG9zIiwiZ2V0UmVsYXRpdmVTY3JvbGxUb3AiLCJnZXRTY3JvbGxIZWlnaHQiLCJnZXRTY3JvbGxQb3MiLCJEZWZhdWx0TGF5b3V0U3ltYm9sIiwiU3ltYm9sIiwiVW5pZm9ybVJvd0xheW91dFN5bWJvbCIsIm9mZnNjcmVlbiIsIkluZmluaXR5IiwiY2FjaGUiLCJjb2x1bW5XaWR0aCIsIm1pbkNvbHMiLCJjb2x1bW5XaWR0aEFuZEd1dHRlciIsImNvbHVtbkNvdW50IiwiZmxvb3IiLCJoZWlnaHRzIiwiY2VudGVyT2Zmc2V0IiwiaGVpZ2h0QW5kR3V0dGVyIiwic2xpY2UiLCJzdW0iLCJpZGVhbENvbHVtbldpZHRoIiwiY29sZ3Vlc3MiLCJNYXNvbnJ5TGF5b3V0IiwiVW5pZm9ybVJvd0xheW91dCIsIlJFU0laRV9ERUJPVU5DRSIsIlZJUlRVQUxfQlVGRkVSX0ZBQ1RPUiIsImxheW91dE51bWJlclRvQ3NzRGltZW5zaW9uIiwiTWFzb25yeSIsImdyaWRXcmFwcGVyIiwiY2xpZW50V2lkdGgiLCJ1cGRhdGVTY3JvbGxQb3NpdGlvbiIsIm1lYXN1cmVDb250YWluZXJBc3luYyIsIm1lYXN1cmVDb250YWluZXIiLCJzZXRHcmlkV3JhcHBlclJlZiIsInJlZiIsInNldFNjcm9sbENvbnRhaW5lclJlZiIsImxvYWRJdGVtcyIsInJlbmRlck1hc29ucnlDb21wb25lbnQiLCJpdGVtRGF0YSIsIkNvbXBvbmVudCIsImNvbXAiLCJ2aXJ0dWFsaXplIiwidmlydHVhbEJvdW5kc1RvcCIsInZpcnR1YWxCb3VuZHNCb3R0b20iLCJpc1Zpc2libGUiLCJ2aXJ0dWFsQnVmZmVyIiwib2Zmc2V0U2Nyb2xsUG9zIiwiY29udGFpbmVyT2Zmc2V0Iiwidmlld3BvcnRCb3R0b20iLCJpdGVtQ29tcG9uZW50IiwiTWFzb25yeV9fSXRlbSIsIk1hc29ucnlfX0l0ZW1fX01vdW50ZWQiLCJ0cmFuc2Zvcm0iLCJXZWJraXRUcmFuc2Zvcm0iLCJoYXNQZW5kaW5nTWVhc3VyZW1lbnRzIiwic29tZSIsIm1lYXN1cmVtZW50U3RvcmUiLCJwcmV2U3RhdGUiLCJyZXNldCIsImluc2VydEFuaW1hdGlvbkZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJzY3JvbGxDb250YWluZXJSZWYiLCJIVE1MRWxlbWVudCIsInJlbGF0aXZlU2Nyb2xsVG9wIiwiZm9yY2VVcGRhdGUiLCJmbGV4aWJsZSIsImd1dHRlcldpZHRoIiwiZnVsbFdpZHRoTGF5b3V0IiwiTGVnYWN5VW5pZm9ybVJvd0xheW91dCIsInVuaWZvcm1Sb3dMYXlvdXQiLCJkZWZhdWx0TGF5b3V0IiwiZ3JpZEJvZHkiLCJpdGVtc1RvUmVuZGVyIiwiaXRlbXNUb01lYXN1cmUiLCJtZWFzdXJpbmdQb3NpdGlvbnMiLCJwb3MiLCJkYXRhIiwibWVhc3VyZW1lbnRJbmRleCIsImluc3RhbmNlT2YiLCJMZWdhY3lNYXNvbnJ5TGF5b3V0Iiwic3ltYm9sIiwibGF5b3V0Q2xhc3MiLCJzdGF0ZXNGb3JSZW5kZXJpbmciLCJyZW5kZXJQb3NpdGlvbnMiLCJNYXNvbnJ5QmV0YSIsImhhbmRsZVZpcnR1YWxpemF0aW9uV2luZG93VXBkYXRlIiwib25WaXJ0dWFsaXphdGlvbldpbmRvd1VwZGF0ZSIsInZpZXdwb3J0IiwiY29udGVudCIsImhhbmRsZU9uQXV0b01lYXN1cmluZ1VwZGF0ZSIsIm9uQXV0b01lYXN1cmluZ1VwZGF0ZSIsInN0YXRlV2l0aFdpZHRoIiwicmVuZGVyaW5nU3RhdGVzIiwibmV3U3RhdGUiLCJNYXNvbnJ5SW5maW5pdGVCZXRhIiwic2V0UmVmIiwiZ3JpZFJlZiIsInJlZmxvdyIsIk5vU2Nyb2xsQmVoYXZpb3IiLCJwcmV2T3ZlcmZsb3ciLCJxdWVyeUZvY3VzYWJsZUFsbCIsInNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsImZvY3VzRWxlbWVudCIsIlRyYXBGb2N1c0JlaGF2aW9yIiwic2V0RWxSZWYiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsImZvY3VzRmlyc3RDaGlsZCIsInByZXZpb3VzbHlGb2N1c2VkRWwiLCJhY3RpdmVFbGVtZW50IiwiQmFja2Ryb3AiLCJNb2RhbCIsImhhbmRsZU91dHNpZGVDbGljayIsImhhbmRsZUNsb3NlQ2xpY2siLCJhY2Nlc3NpYmlsaXR5Q2xvc2VMYWJlbCIsImFjY2Vzc2liaWxpdHlNb2RhbExhYmVsIiwiZm9vdGVyIiwiaGVhZGluZyIsInJvbGUiLCJ3cmFwcGVyIiwicGFkZGluZ0xlZnQiLCJQdWxzYXIiLCJwYXVzZWQiLCJhbmltYXRpb25JdGVyYXRpb25Db3VudCIsImlubmVyQ2lyY2xlIiwib3V0ZXJDaXJjbGUiLCJSYWRpb0J1dHRvbiIsIlJhZGlvQnV0dG9uSXNGb2N1c2VkIiwiUmFkaW9CdXR0b25TbSIsIlJhZGlvQnV0dG9uTWQiLCJSYWRpb0J1dHRvbldoaXRlQmciLCJSYWRpb0J1dHRvbkxpZ2h0R3JheUJnIiwiSW5wdXQiLCJJbnB1dEVuYWJsZWQiLCJJbnB1dFNtIiwiSW5wdXRNZCIsIkNoZWNrIiwiQ2hlY2tTbSIsIkNoZWNrTWQiLCJDaGVja0VuYWJsZWQiLCJDaGVja0Rpc2FibGVkIiwiU2Nyb2xsRmV0Y2giLCJ1cGRhdGVQb3NpdGlvbiIsImdldFNjcm9sbFN0YXRlIiwicmVuZGVySGVpZ2h0IiwiU2VhcmNoRmllbGQiLCJzeW50aGV0aWNFdmVudCIsImhhbmRsZUNsZWFyIiwib25Gb2N1cyIsIm9uQmx1ciIsImF1dG9Db21wbGV0ZSIsInBsYWNlaG9sZGVyIiwic2hvd0NsZWFyIiwicG9pbnRlckV2ZW50cyIsIlNlZ21lbnRlZENvbnRyb2wiLCJzZWxlY3RlZEl0ZW1JbmRleCIsImlzU2VsZWN0ZWQiLCJpdGVtSXNOb3RTZWxlY3RlZCIsIml0ZW1Jc1NlbGVjdGVkIiwiZSIsImFjdGl2ZUluZGV4IiwiU2VsZWN0TGlzdCIsImVycm9ySXNPcGVuIiwiaGFuZGxlT25DaGFuZ2UiLCJIVE1MU2VsZWN0RWxlbWVudCIsImVycm9yTWVzc2FnZSIsImlkZWFsRXJyb3JEaXJlY3Rpb24iLCJvcHRpb25zIiwic2VsZWN0IiwiZXJyb3JlZCIsIm5vcm1hbCIsImJvcmRlclJhZGl1cyIsIm9wdGlvbiIsIlNJWkUiLCJTcGlubmVyIiwic2hvdyIsIlN0aWNreSIsImRhbmdlcm91c2x5U2V0WkluZGV4IiwiX196SW5kZXgiLCJ6SW5kZXgiLCJzdGlja3kiLCJTd2l0Y2giLCJzd2l0Y2hlZCIsInN3aXRjaFN0eWxlcyIsInN3aXRjaCIsInN3aXRjaEdyYXkiLCJzd2l0Y2hMaWdodEdyYXkiLCJzd2l0Y2hEYXJrR3JheSIsInN3aXRjaFdoaXRlIiwic2xpZGVyU3R5bGVzIiwic2xpZGVyIiwic2xpZGVyUmlnaHQiLCJzbGlkZXJMZWZ0Iiwic2xpZGVyRGFyayIsInNsaWRlckxpZ2h0IiwiaW5wdXRTdHlsZXMiLCJjaGVja2JveCIsImNoZWNrYm94RW5hYmxlZCIsIlRhYnMiLCJmb2N1c2VkVGFiSW5kZXgiLCJob3ZlcmVkVGFiSW5kZXgiLCJoYW5kbGVUYWJDbGljayIsImFjdGl2ZVRhYkluZGV4IiwiaGFuZGxlVGFiRm9jdXMiLCJoYW5kbGVUYWJCbHVyIiwiaGFuZGxlVGFiTW91c2VFbnRlciIsImhhbmRsZVRhYk1vdXNlTGVhdmUiLCJ0YWJzIiwiaXNBY3RpdmUiLCJpc0hvdmVyZWQiLCJpc0ZvY3VzZWQiLCJ0YWIiLCJ0YWJJc05vdEFjdGl2ZSIsInRhYklzQWN0aXZlIiwiVGV4dEFyZWEiLCJyb3dzIiwidGV4dEFyZWEiLCJ0ZXh0YXJlYSIsIlRleHRGaWVsZCIsInRleHRGaWVsZCIsInBhdHRlcm4iLCJ0ZXh0ZmllbGQiLCJUb2FzdCIsInRodW1ibmFpbCIsImZvbnRXZWlnaHQiLCJUb29sdGlwIiwiU1BBQ0VfQ0hBUl9DT0RFIiwiRU5URVJfQ0hBUl9DT0RFIiwiVG91Y2hhYmxlIiwiaGFuZGxlS2V5UHJlc3MiLCJvblRvdWNoIiwiY2hhckNvZGUiLCJmdWxsV2lkdGgiLCJmdWxsSGVpZ2h0IiwibW91c2VDdXJzb3IiLCJ0b3VjaGFibGUiLCJWaWRlb1BsYXloZWFkIiwic2Vla2luZyIsInNldFBsYXloZWFkUmVmIiwicGxheWhlYWQiLCJzZWVrIiwiY2xpZW50WCIsImR1cmF0aW9uIiwicGVyY2VudCIsIm1pbiIsIm5ld1RpbWUiLCJzdG9wQ2xpY2siLCJoYW5kbGVNb3VzZU1vdmUiLCJjdXJyZW50VGltZSIsImZ1bGxzY3JlZW5FbmFibGVkIiwid2Via2l0RnVsbHNjcmVlbkVuYWJsZWQiLCJtb3pGdWxsU2NyZWVuRW5hYmxlZCIsIm1zRnVsbHNjcmVlbkVuYWJsZWQiLCJ0aW1lVG9TdHJpbmciLCJ0aW1lIiwibWludXRlcyIsInNlY29uZHMiLCJtaW51dGVzU3RyIiwic2Vjb25kc1N0ciIsIlZpZGVvQ29udHJvbHMiLCJoYW5kbGVGdWxsc2NyZWVuQ2hhbmdlIiwib25GdWxsc2NyZWVuQ2hhbmdlIiwiaGFuZGxlUGxheWluZ0NoYW5nZSIsInBsYXlpbmciLCJvblBhdXNlIiwib25QbGF5IiwiaGFuZGxlVm9sdW1lQ2hhbmdlIiwib25Wb2x1bWVDaGFuZ2UiLCJhY2Nlc3NpYmlsaXR5TWF4aW1pemVMYWJlbCIsImFjY2Vzc2liaWxpdHlNaW5pbWl6ZUxhYmVsIiwiYWNjZXNzaWJpbGl0eU11dGVMYWJlbCIsImFjY2Vzc2liaWxpdHlQYXVzZUxhYmVsIiwiYWNjZXNzaWJpbGl0eVBsYXlMYWJlbCIsImFjY2Vzc2liaWxpdHlVbm11dGVMYWJlbCIsImZ1bGxzY3JlZW4iLCJ2b2x1bWUiLCJtdXRlZCIsInNob3dGdWxsc2NyZWVuQnV0dG9uIiwiY29udHJvbHMiLCJyZXF1ZXN0RnVsbHNjcmVlbiIsIndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuIiwibW96UmVxdWVzdEZ1bGxTY3JlZW4iLCJtc1JlcXVlc3RGdWxsc2NyZWVuIiwiZXhpdEZ1bGxzY3JlZW4iLCJ3ZWJraXRFeGl0RnVsbHNjcmVlbiIsIm1vekNhbmNlbEZ1bGxTY3JlZW4iLCJtc0V4aXRGdWxsc2NyZWVuIiwiaXNGdWxsc2NyZWVuIiwiZnVsbHNjcmVlbkVsZW1lbnQiLCJ3ZWJraXRGdWxsc2NyZWVuRWxlbWVudCIsIm1vekZ1bGxTY3JlZW5FbGVtZW50IiwibXNGdWxsc2NyZWVuRWxlbWVudCIsImFkZEZ1bGxzY3JlZW5FdmVudExpc3RlbmVyIiwibGlzdGVuZXIiLCJyZW1vdmVGdWxsc2NyZWVuRXZlbnRMaXN0ZW5lciIsImlzTmV3U291cmNlIiwib2xkU291cmNlIiwibmV3U291cmNlIiwiaXNBcnJheSIsInNvdXJjZSIsIlZpZGVvIiwic2V0UGxheWVyUmVmIiwicGxheWVyIiwic2V0VmlkZW9SZWYiLCJ2aWRlbyIsInNldFBsYXliYWNrUmF0ZSIsInBsYXliYWNrUmF0ZSIsInNldFZvbHVtZSIsImxvYWQiLCJ0b2dnbGVGdWxsc2NyZWVuIiwiaGFuZGxlQ2FuUGxheSIsIm9uUmVhZHkiLCJoYW5kbGVEdXJhdGlvbkNoYW5nZSIsIm9uRHVyYXRpb25DaGFuZ2UiLCJoYW5kbGVFbmRlZCIsIm9uRW5kZWQiLCJoYW5kbGVQbGF5IiwiaGFuZGxlUGF1c2UiLCJoYW5kbGVQcm9ncmVzcyIsIm9uTG9hZGVkQ2hhbmdlIiwiYnVmZmVyZWQiLCJsb2FkZWQiLCJoYW5kbGVTZWVrIiwib25TZWVrIiwiaGFuZGxlVGltZVVwZGF0ZSIsIm9uVGltZUNoYW5nZSIsImNhcHRpb25zIiwibG9vcCIsInBsYXlzSW5saW5lIiwicG9zdGVyIiwicHJlbG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQSxFQUFPLElBQU1BLFdBQVcsU0FBWEEsUUFBVztFQUFBLFNBQWM7RUFDcENDLGVBQVcsSUFBSUMsR0FBSixFQUR5QjtFQUVwQ0MsaUJBQWE7RUFGdUIsR0FBZDtFQUFBLENBQWpCOztFQVBQO0VBQ0E7OztB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
