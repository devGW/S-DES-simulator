import { createElement, PureComponent, Component, Fragment, Children } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { findDOMNode, createPortal } from 'react-dom';

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
  return createElement(
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

  return createElement(
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
    createElement(
      'title',
      null,
      accessibilityLabel
    ),
    createElement('path', { d: path })
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
      var childContent = children ? createElement(
        Box,
        { position: 'absolute', top: true, left: true, bottom: true, right: true, overflow: 'hidden' },
        children
      ) : null;

      return isScaledImage ? createElement(
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
      ) : createElement(
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
        createElement('img', {
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
}(PureComponent);

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

  return createElement(
    'div',
    { className: classnames(styles$3.Mask, styles$3[shape]), style: { width: width, height: height } },
    children,
    wash && createElement('div', { className: styles$3.wash })
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
  return createElement(
    Box,
    _extends({}, props, { position: 'relative' }),
    createElement(Box, {
      dangerouslySetInlineStyle: { __style: { paddingBottom: '100%' } },
      position: 'relative'
    }),
    createElement(
      Box,
      { position: 'absolute', top: true, left: true, bottom: true, right: true },
      props.children
    )
  );
};

var DefaultAvatar = function DefaultAvatar(_ref) {
  var name = _ref.name;

  var firstInitial = name ? [].concat(toConsumableArray(name))[0].toUpperCase() : '';
  return createElement(
    Square,
    { color: 'gray', shape: 'circle' },
    firstInitial && createElement(
      'svg',
      {
        width: '100%',
        viewBox: '-50 -50 100 100',
        version: '1.1',
        preserveAspectRatio: 'xMidYMid meet',
        xmlns: 'http://www.w3.org/2000/svg'
      },
      createElement(
        'title',
        null,
        name
      ),
      createElement(
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
      return createElement(
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
        src && isImageLoaded ? createElement(
          Mask,
          { shape: 'circle', wash: true },
          createElement(Image, {
            alt: name,
            color: '#EFEFEF',
            naturalHeight: 1,
            naturalWidth: 1,
            src: src,
            onError: this.handleImageError
          })
        ) : createElement(DefaultAvatar, { name: name }),
        verified && createElement(
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
          createElement(
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
            createElement(Icon, {
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
}(PureComponent);

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

  return createElement(
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
  return createElement(
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
    createElement(
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

      return createElement(
        Box,
        {
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave,
          position: 'relative'
        },
        image && createElement(
          Box,
          { marginBottom: 1 },
          image
        ),
        createElement(
          Box,
          null,
          children
        ),
        createElement('div', { className: classes })
      );
    }
  }]);
  return Card;
}(Component);

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

      return createElement(
        Box,
        { position: 'relative' },
        createElement('input', {
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
        createElement(
          'div',
          {
            className: classnames(borderStyle, styles$7.check,
            // eslint-disable-next-line no-nested-ternary
            disabled ? checked || indeterminate ? colors.grayBg : colors.lightGrayBg : checked || indeterminate ? colors.darkGrayBg : colors.whiteBg, (_classnames2 = {}, defineProperty(_classnames2, styles$7.checkEnabled, !disabled), defineProperty(_classnames2, styles$7.checkFocused, this.state.focused), defineProperty(_classnames2, styles$7.checkMd, size === 'md'), defineProperty(_classnames2, styles$7.checkSm, size === 'sm'), _classnames2))
          },
          (checked || indeterminate) && createElement(Icon, {
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
}(Component);

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

      return createElement(
        'div',
        { className: layout.relative, style: { width: width, height: height } },
        items.map(function (_ref) {
          var idx = _ref.idx,
              style = objectWithoutProperties(_ref, ['idx']);
          return createElement(
            'div',
            { key: idx, className: layout.absolute, style: style },
            createElement(Item, { idx: idx })
          );
        })
      );
    }
  }]);
  return Collection;
}(PureComponent);

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
  return createElement(Collection, {
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
  return createElement(
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

  return createElement(
    Box,
    { justifyContent: 'center', display: 'flex' },
    createElement(
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
  return createElement('hr', { className: styles$9.divider });
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

  return createElement(
    'svg',
    { width: '24', height: '24' },
    createElement('path', { d: path })
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

      return createElement(
        'div',
        {
          className: styles$a.container,
          style: _extends({ stroke: stroke, visibility: visibility }, this.state.flyoutOffset)
        },
        createElement(
          'div',
          {
            className: classnames(colors[background], colors[borderColor], styles$a.dimensions, styles$a.contents),
            ref: function ref(c) {
              _this3.flyout = c;
            },
            tabIndex: -1
          },
          createElement(
            'div',
            {
              className: classnames(styles$a.dimensions, styles$a.innerContents),
              style: { width: width }
            },
            children
          ),
          createElement(
            'div',
            {
              className: classnames(colors[bgColor], styles$a.caret),
              style: _extends({}, this.state.caretOffset)
            },
            createElement(Caret, { direction: this.state.mainDir })
          )
        )
      );
    }
  }]);
  return Contents;
}(Component);
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
      var el = findDOMNode(_this);
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
}(Component);

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
      return createElement(
        OutsideEventBehavior,
        { onClick: this.handlePageClick },
        createElement(
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
}(Component);


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

  return createElement(
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

  var initial = createElement(
    'svg',
    {
      width: '100%',
      viewBox: '-50 -50 100 100',
      version: '1.1',
      preserveAspectRatio: 'xMidYMid meet',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    createElement(
      'title',
      null,
      name
    ),
    createElement(
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
      return createElement(
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
      return createElement(
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
      return createElement(
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
  return createElement(
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
    createElement(Box, { dangerouslySetInlineStyle: { __style: { paddingBottom: '100%' } } }),
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

      return createElement(
        Box,
        {
          key: idx,
          position: 'absolute',
          width: width,
          height: height,
          dangerouslySetInlineStyle: { __style: { top: top, left: left } }
        },
        src ? createElement(Image, {
          alt: name,
          color: '#EFEFEF',
          src: src,
          naturalWidth: 1,
          naturalHeight: 1,
          fit: 'cover'
        }) : createElement(DefaultAvatar$1, {
          name: name,
          textLayout: textLayout,
          size: height
        }),
        createElement('div', { className: styles$b.wash })
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
  return createElement('h' + headingLevel, _extends({
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

  return createElement(
    'div',
    { className: classes, style: inlineStyle },
    createElement(
      Box,
      { shape: 'circle' },
      createElement(Icon, {
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


      return createElement(
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
        createElement(Pog, {
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
}(Component);

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


  return createElement(
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

      return createPortal(children, this.el);
    }
  }]);
  return Layer;
}(Component);

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

  return createElement(
    Mask,
    { width: width, height: height },
    createElement(
      'div',
      { style: { marginTop: offsetTop, marginLeft: offsetLeft } },
      createElement(
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

      return createElement(
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
}(Component);

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
}(PureComponent);

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
      return Children.only(this.props.children);
    }
  }]);
  return ScrollContainer;
}(Component);

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
          Component$$1 = _this$props.comp,
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

      var itemComponent = createElement(
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
        createElement(Component$$1, { data: itemData, itemIdx: idx, isMeasuring: false })
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
          Component$$1 = _props2.comp,
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
        gridBody = createElement(
          'div',
          {
            className: styles$h.Masonry,
            style: { height: 0, width: '100%' },
            ref: this.setGridWrapperRef
          },
          items.filter(function (item) {
            return item;
          }).map(function (item, i) {
            return createElement(
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
              createElement(Component$$1, { data: item, itemIdx: i, isMeasuring: false })
            );
          })
        );
      } else if (width == null) {
        // When the width is empty (usually after a re-mount) render an empty
        // div to collect the width for layout
        gridBody = createElement('div', { style: { width: '100%' }, ref: this.setGridWrapperRef });
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
        gridBody = createElement(
          'div',
          { style: { width: '100%' }, ref: this.setGridWrapperRef },
          createElement(
            'div',
            { className: styles$h.Masonry, style: { height: height, width: width } },
            itemsToRender.map(function (item, i) {
              return _this4.renderMasonryComponent(item, i, positions[i]);
            })
          ),
          createElement(
            'div',
            { className: styles$h.Masonry, style: { width: width } },
            itemsToMeasure.map(function (data, i) {
              // itemsToMeasure is always the length of minCols, so i will always be 0..minCols.length
              // we normalize the index here relative to the item list as a whole so that itemIdx is correct
              // and so that React doesnt reuse the measurement nodes
              var measurementIndex = itemsToRender.length + i;
              var position = measuringPositions[i];
              return createElement(
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
                createElement(Component$$1, {
                  data: data,
                  itemIdx: measurementIndex,
                  isMeasuring: true
                })
              );
            })
          ),
          this.scrollContainer && createElement(FetchItems, {
            containerHeight: this.containerHeight,
            fetchMore: this.fetchMore,
            isFetching: this.state.isFetching || this.state.hasPendingMeasurements,
            scrollHeight: height,
            scrollTop: this.state.scrollTop
          })
        );
      }

      return this.props.scrollContainer ? createElement(
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
}(Component);

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
          Component$$1 = _this$props.comp,
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

      var itemComponent = createElement(
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
        createElement(Component$$1, { data: itemData, itemIdx: idx, isMeasuring: false })
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
          Component$$1 = _props2.comp,
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
        gridBody = createElement(
          'div',
          {
            className: styles$h.Masonry,
            style: { height: 0, width: '100%' },
            ref: this.setGridWrapperRef
          },
          items.filter(function (item) {
            return item;
          }).map(function (item, i) {
            return createElement(
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
              createElement(Component$$1, { data: item, itemIdx: i, isMeasuring: false })
            );
          })
        );
      } else if (width == null) {
        // When the width is empty (usually after a re-mount) render an empty
        // div to collect the width for layout
        gridBody = createElement('div', { style: { width: '100%' }, ref: this.setGridWrapperRef });
      } else {
        gridBody = createElement(
          'div',
          { style: { width: '100%' }, ref: this.setGridWrapperRef },
          createElement(
            'div',
            { className: styles$h.Masonry, style: { height: height, width: width } },
            itemsToRender.map(function (item, i) {
              return (
                // $FlowFixMe this is the right definition, it an Array<T>
                _this4.renderMasonryComponent(item, i, renderPositions[i])
              );
            })
          ),
          createElement(
            'div',
            { className: styles$h.Masonry, style: { width: width } },
            itemsToMeasure.map(function (data, i) {
              // itemsToMeasure is always the length of minCols, so i will always be 0..minCols.length
              // we normalize the index here relative to the item list as a whole so that itemIdx is correct
              // and so that React doesnt reuse the measurement nodes
              var measurementIndex = itemsToRender.length + i;
              var position = measuringPositions[i];
              return createElement(
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
                createElement(Component$$1, {
                  data: data,
                  itemIdx: measurementIndex,
                  isMeasuring: true
                })
              );
            })
          )
        );
      }

      return this.props.scrollContainer ? createElement(
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
}(Component);

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
      return this.props.scrollContainer ? createElement(
        Fragment,
        null,
        createElement(FetchItems, {
          containerHeight: this.state.containerHeight,
          fetchMore: this.fetchMore,
          isFetching: this.state.isFetching || this.state.hasPendingMeasurements,
          scrollHeight: this.state.scrollHeight,
          scrollTop: this.state.scrollTop
        }),
        createElement(MasonryBeta, _extends({}, this.props, {
          onVirtualizationWindowUpdate: this.onVirtualizationWindowUpdate,
          onAutoMeasuringUpdate: this.handleOnAutoMeasuringUpdate,
          ref: this.setRef
        }))
      ) : createElement(MasonryBeta, _extends({}, this.props, { ref: this.setRef }));
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
}(Component);

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
}(Component);

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
      return createElement(
        'div',
        { ref: this.setElRef },
        this.props.children
      );
    }
  }]);
  return TrapFocusBehavior;
}(Component);

var styles$i = { "Backdrop": "_uj _4h _4m _4j _4k _4l _zb _3d", "container": "_uk _4g _4q _4s _5a _4m _4j _50 _y6", "wrapper": "_ul _4f _49 _4s _37 _2y _70 _6y" };

var SIZE_WIDTH_MAP$1 = {
  sm: 414,
  md: 544,
  lg: 804
};

var ESCAPE_KEY_CODE$1 = 27;

var Backdrop = function Backdrop(_ref) {
  var children = _ref.children;
  return createElement(
    Fragment,
    null,
    createElement('div', { className: styles$i.Backdrop }),
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

      return createElement(
        NoScrollBehavior,
        null,
        createElement(
          TrapFocusBehavior,
          null,
          createElement(
            'div',
            {
              'aria-label': accessibilityModalLabel,
              className: styles$i.container,
              role: role
            },
            createElement(
              Backdrop,
              null,
              createElement(
                OutsideEventBehavior,
                { onClick: this.handleOutsideClick },
                createElement(
                  'div',
                  { className: styles$i.wrapper, tabIndex: -1, style: { width: width } },
                  createElement(
                    Box,
                    {
                      flex: 'grow',
                      position: 'relative',
                      display: 'flex',
                      direction: 'column',
                      width: '100%'
                    },
                    createElement(
                      Box,
                      { fit: true },
                      role === 'dialog' ? createElement(
                        Box,
                        {
                          dangerouslySetInlineStyle: {
                            __style: { paddingLeft: 50, paddingRight: 50 }
                          },
                          display: 'flex',
                          justifyContent: 'center',
                          paddingY: 5
                        },
                        createElement(
                          Heading,
                          { size: 'xs', accessibilityLevel: 1 },
                          heading
                        )
                      ) : createElement(
                        Box,
                        { display: 'flex', padding: 4 },
                        createElement(
                          Heading,
                          { size: 'sm', accessibilityLevel: 1 },
                          heading
                        )
                      ),
                      role === 'dialog' && createElement(
                        Box,
                        { padding: 2, position: 'absolute', top: true, right: true },
                        createElement(IconButton, {
                          accessibilityLabel: accessibilityCloseLabel,
                          icon: 'cancel',
                          onClick: this.handleCloseClick
                        })
                      ),
                      role === 'dialog' && createElement(Divider, null)
                    ),
                    createElement(
                      Box,
                      { flex: 'grow', overflow: 'auto', position: 'relative' },
                      children
                    ),
                    createElement(
                      Box,
                      { fit: true },
                      footer && createElement(
                        Box,
                        null,
                        role === 'dialog' && createElement(Divider, null),
                        createElement(
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
}(Component);

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


  return createElement(
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
    createElement(
      'div',
      { className: styles$j.innerCircle },
      createElement('div', { className: styles$j.outerCircle })
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

      return createElement(
        'div',
        {
          className: classnames(styles$k.RadioButton, (_classnames = {}, defineProperty(_classnames, styles$k.RadioButtonIsFocused, this.state.focused), defineProperty(_classnames, styles$k.RadioButtonSm, size === 'sm'), defineProperty(_classnames, styles$k.RadioButtonMd, size === 'md'), defineProperty(_classnames, styles$k.RadioButtonWhiteBg, !disabled || checked), defineProperty(_classnames, styles$k.RadioButtonLightGrayBg, disabled && !checked), _classnames))
        },
        createElement('input', {
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
        checked && createElement('div', {
          className: classnames(styles$k.Check, (_classnames3 = {}, defineProperty(_classnames3, styles$k.CheckSm, size === 'sm'), defineProperty(_classnames3, styles$k.CheckMd, size === 'md'), defineProperty(_classnames3, styles$k.CheckEnabled, !disabled), defineProperty(_classnames3, styles$k.CheckDisabled, disabled), _classnames3))
        })
      );
    }
  }]);
  return RadioButton;
}(Component);

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
      return createElement(
        ScrollContainer,
        {
          onScroll: this.updatePosition,
          scrollContainer: container
        },
        createElement(FetchItems, props)
      );
    }
  }]);
  return ScrollFetch;
}(PureComponent);


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

      return createElement(
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
        createElement(
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
          createElement(Icon, { icon: 'search', accessibilityLabel: '' })
        ),
        createElement('input', {
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
        showClear && createElement(
          Box,
          { position: 'absolute', right: true, top: true },
          createElement(
            'button',
            {
              className: styles$l.clear,
              onClick: this.handleClear,
              tabIndex: -1,
              type: 'button'
            },
            createElement(Icon, { icon: 'clear', accessibilityLabel: '' })
          )
        )
      );
    }
  }]);
  return SearchField;
}(Component);

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

  return createElement(
    'div',
    {
      className: classnames(styles$m.SegmentedControl, (_classnames = {}, defineProperty(_classnames, styles$m.md, size === 'md'), defineProperty(_classnames, styles$m.lg, size === 'lg'), _classnames)),
      role: 'tablist'
    },
    items.map(function (item, i) {
      var _classnames2;

      var isSelected = i === selectedItemIndex;
      var cs = classnames(styles$m.item, (_classnames2 = {}, defineProperty(_classnames2, styles$m.itemIsNotSelected, !isSelected), defineProperty(_classnames2, styles$m.itemIsSelected, isSelected), _classnames2));
      return createElement(
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
        typeof item === 'string' ? createElement(
          Text,
          {
            bold: true,
            color: isSelected ? 'darkGray' : 'gray',
            align: 'center',
            size: size
          },
          item
        ) : createElement(
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

      return createElement(
        Box,
        {
          color: disabled ? 'lightGray' : 'white',
          dangerouslySetInlineStyle: { __style: { borderRadius: 4 } },
          display: 'flex',
          position: 'relative',
          width: '100%'
        },
        createElement(
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
          createElement(Icon, {
            icon: 'arrow-down',
            size: 12,
            color: disabled ? 'gray' : 'darkGray',
            accessibilityLabel: ''
          })
        ),
        createElement(
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
          placeholder && !value && createElement(
            'option',
            { selected: true, disabled: true, value: true, hidden: true },
            placeholder
          ),
          options.map(function (option) {
            return createElement(
              'option',
              { key: option.value, value: option.value },
              option.label
            );
          })
        ),
        errorMessage && this.state.errorIsOpen && createElement(
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
          createElement(
            Box,
            { padding: 3 },
            createElement(
              Text,
              { bold: true, color: 'white' },
              createElement(
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
}(Component);

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

  return show ? createElement(
    Box,
    { xs: { display: 'flex' }, justifyContent: 'around', overflow: 'hidden' },
    createElement(
      'div',
      { className: styles$o.icon },
      createElement(Icon, {
        icon: 'knoop',
        accessibilityLabel: accessibilityLabel,
        size: SIZE
      })
    )
  ) : createElement('div', null);
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
  return createElement(
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

      return createElement(
        'div',
        { className: switchStyles },
        createElement('input', {
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
        createElement('div', { className: sliderStyles })
      );
    }
  }]);
  return Switch;
}(Component);

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

      return createElement(
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
          return createElement(
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
            createElement(
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
}(Component);

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

      return createElement(
        'span',
        null,
        createElement('textarea', {
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
        errorMessage && this.state.errorIsOpen ? createElement(
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
          createElement(
            Box,
            { padding: 3 },
            createElement(
              Text,
              { bold: true, color: 'white' },
              createElement(
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
}(Component);

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

      return createElement(
        'span',
        null,
        createElement('input', {
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
        errorMessage && this.state.errorIsOpen && createElement(
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
          createElement(
            Box,
            { padding: 3 },
            createElement(
              Text,
              { bold: true, color: 'white' },
              createElement(
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
}(Component);

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
    contents = createElement(
      Box,
      { xs: { display: 'flex' } },
      createElement(
        Box,
        { xs: { display: 'flexColumn' }, flex: 'none', justifyContent: 'center' },
        thumbnail ? createElement(
          Mask,
          { shape: 'rounded', height: 48, width: 48 },
          thumbnail
        ) : null
      ),
      createElement(
        Box,
        {
          xs: { display: 'flexColumn' },
          justifyContent: 'center',
          dangerouslySetInlineStyle: { __style: { paddingLeft: 10 } }
        },
        createElement(
          Box,
          {
            dangerouslySetInlineStyle: { __style: { fontWeight: 'normal' } }
          },
          createElement(
            Text,
            { color: 'white', size: 'lg' },
            text[0]
          )
        ),
        createElement(
          Text,
          { bold: true, color: 'white', size: 'lg' },
          text[1]
        )
      )
    );
  } else {
    // Toasts as Guides
    contents = createElement(
      Box,
      {
        xs: { display: 'flex' },
        justifyContent: 'between',
        alignItems: 'center'
      },
      createElement(
        Text,
        { bold: true, color: 'white', size: 'lg' },
        text
      ),
      icon && createElement(
        Box,
        { dangerouslySetInlineStyle: { __style: { paddingLeft: 24 } } },
        createElement(Icon, { accessibilityLabel: '', color: 'white', icon: icon, size: 36 })
      )
    );
  }

  return createElement(
    Box,
    { marginBottom: 3, paddingX: 4, maxWidth: 376, width: '100vw' },
    createElement(
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

  return createElement(
    Controller,
    {
      anchor: anchor,
      bgColor: 'darkGray',
      idealDirection: idealDirection,
      positionRelativeToAnchor: positionRelativeToAnchor,
      onDismiss: onDismiss,
      size: size
    },
    createElement(
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

      return createElement(
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
}(Component);


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
      return createElement(
        Box,
        {
          position: 'relative',
          display: 'flex',
          flex: 'grow',
          alignItems: 'center',
          height: 16
        },
        createElement(
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
          createElement(
            Box,
            {
              left: true,
              right: true,
              position: 'absolute',
              color: 'lightGray',
              shape: 'rounded',
              height: 4
            },
            createElement(Box, { color: 'white', shape: 'rounded', height: '100%', width: width })
          ),
          createElement(
            Box,
            {
              position: 'absolute',
              shape: 'rounded',
              height: 4,
              dangerouslySetInlineStyle: { __style: { left: width } }
            },
            createElement(Box, {
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
}(PureComponent);

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
      return createElement(
        'div',
        { className: styles$u.controls },
        createElement(
          Box,
          { padding: 2 },
          createElement(
            Touchable,
            { onTouch: this.handlePlayingChange, fullWidth: false },
            createElement(Icon, {
              accessibilityLabel: playing ? accessibilityPauseLabel : accessibilityPlayLabel,
              color: 'white',
              icon: playing ? 'pause' : 'play',
              size: 20
            })
          )
        ),
        createElement(
          Box,
          { width: 50, padding: 2 },
          createElement(
            Text,
            { color: 'white', align: 'right', size: 'xs' },
            timeToString(currentTime)
          )
        ),
        createElement(
          Box,
          { padding: 2, flex: 'grow' },
          createElement(VideoPlayhead, {
            currentTime: currentTime,
            duration: duration,
            seek: seek
          })
        ),
        createElement(
          Box,
          { width: 50, padding: 2 },
          createElement(
            Text,
            { color: 'white', align: 'right', size: 'xs' },
            timeToString(duration)
          )
        ),
        createElement(
          Box,
          { padding: 2 },
          createElement(
            Touchable,
            { onTouch: this.handleVolumeChange, fullWidth: false },
            createElement(Icon, {
              accessibilityLabel: muted ? accessibilityUnmuteLabel : accessibilityMuteLabel,
              color: 'white',
              icon: muted ? 'mute' : 'sound',
              size: 20
            })
          )
        ),
        showFullscreenButton && createElement(
          Box,
          { padding: 2 },
          createElement(
            Touchable,
            { onTouch: this.handleFullscreenChange, fullWidth: false },
            createElement(Icon, {
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
}(Component);

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

      return createElement(
        'div',
        {
          ref: this.setPlayerRef,
          className: styles$u.player,
          style: { paddingBottom: paddingBottom, height: fullscreen ? '100%' : 0 }
        },
        createElement(
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
            return createElement('source', { key: source.src, src: source.src, type: source.type });
          }),
          createElement('track', { kind: 'captions', src: captions })
        ),
        this.props.controls && createElement(VideoControls, {
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
}(PureComponent);

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

export { Avatar, Box, Button, Card, Checkbox, Collage, Collection, Column, Container, Divider, Flyout, GroupAvatar, Heading, Icon, IconButton, Image, Label, Layer, Letterbox, Link, Mask, Masonry, MasonryBeta, MasonryInfiniteBeta, MasonryLayout as MasonryDefaultLayout, UniformRowLayout as MasonryUniformRowLayout, Modal, Pog, Pulsar, RadioButton, ScrollFetch, SearchField, SegmentedControl, SelectList, Spinner, Sticky, Switch, Tabs, Text, TextArea, TextField, Toast, Tooltip, Touchable, Video };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VzdGFsdC5lcy5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL3N0eWxlLmpzIiwiLi4vc3JjL3RyYW5zZm9ybXMuanMiLCIuLi9zcmMvQm94LmpzIiwiLi4vc3JjL2ljb25zL2luZGV4LmpzIiwiLi4vc3JjL0ljb24uanMiLCIuLi9zcmMvSW1hZ2UuanMiLCIuLi9zcmMvTWFzay5qcyIsIi4uL3NyYy9BdmF0YXIuanMiLCIuLi9zcmMvVGV4dC5qcyIsIi4uL3NyYy9CdXR0b24uanMiLCIuLi9zcmMvQ2FyZC5qcyIsIi4uL3NyYy9DaGVja2JveC5qcyIsIi4uL3NyYy9Db2xsZWN0aW9uLmpzIiwiLi4vc3JjL0NvbGxhZ2UuanMiLCIuLi9zcmMvQ29sdW1uLmpzIiwiLi4vc3JjL0NvbnRhaW5lci5qcyIsIi4uL3NyYy9EaXZpZGVyLmpzIiwiLi4vc3JjL0NhcmV0LmpzIiwiLi4vc3JjL0NvbnRlbnRzLmpzIiwiLi4vc3JjL2JlaGF2aW9ycy9PdXRzaWRlRXZlbnRCZWhhdmlvci5qcyIsIi4uL3NyYy9Db250cm9sbGVyLmpzIiwiLi4vc3JjL0ZseW91dC5qcyIsIi4uL3NyYy9Hcm91cEF2YXRhci5qcyIsIi4uL3NyYy9IZWFkaW5nLmpzIiwiLi4vc3JjL1BvZy5qcyIsIi4uL3NyYy9JY29uQnV0dG9uLmpzIiwiLi4vc3JjL0xhYmVsLmpzIiwiLi4vc3JjL0xheWVyLmpzIiwiLi4vc3JjL0xldHRlcmJveC5qcyIsIi4uL3NyYy9MaW5rLmpzIiwiLi4vc3JjL2RlYm91bmNlLmpzIiwiLi4vc3JjL0ZldGNoSXRlbXMuanMiLCIuLi9zcmMvU2Nyb2xsQ29udGFpbmVyLmpzIiwiLi4vc3JjL3Rocm90dGxlLmpzIiwiLi4vc3JjL01lYXN1cmVtZW50U3RvcmUuanMiLCIuLi9zcmMvc2Nyb2xsVXRpbHMuanMiLCIuLi9zcmMvbGVnYWN5TGF5b3V0U3ltYm9scy5qcyIsIi4uL3NyYy9kZWZhdWx0TGF5b3V0LmpzIiwiLi4vc3JjL3VuaWZvcm1Sb3dMYXlvdXQuanMiLCIuLi9zcmMvZnVsbFdpZHRoTGF5b3V0LmpzIiwiLi4vc3JjL2xheW91dHMvTWFzb25yeUxheW91dC5qcyIsIi4uL3NyYy9sYXlvdXRzL1VuaWZvcm1Sb3dMYXlvdXQuanMiLCIuLi9zcmMvTWFzb25yeS5qcyIsIi4uL3NyYy9NYXNvbnJ5QmV0YS5qcyIsIi4uL3NyYy9NYXNvbnJ5SW5maW5pdGVCZXRhLmpzIiwiLi4vc3JjL2JlaGF2aW9ycy9TdG9wU2Nyb2xsQmVoYXZpb3IuanMiLCIuLi9zcmMvYmVoYXZpb3JzL1RyYXBGb2N1c0JlaGF2aW9yLmpzIiwiLi4vc3JjL01vZGFsLmpzIiwiLi4vc3JjL1B1bHNhci5qcyIsIi4uL3NyYy9SYWRpb0J1dHRvbi5qcyIsIi4uL3NyYy9TY3JvbGxGZXRjaC5qcyIsIi4uL3NyYy9TZWFyY2hGaWVsZC5qcyIsIi4uL3NyYy9TZWdtZW50ZWRDb250cm9sLmpzIiwiLi4vc3JjL1NlbGVjdExpc3QuanMiLCIuLi9zcmMvU3Bpbm5lci5qcyIsIi4uL3NyYy9TdGlja3kuanMiLCIuLi9zcmMvU3dpdGNoLmpzIiwiLi4vc3JjL1RhYnMuanMiLCIuLi9zcmMvVGV4dEFyZWEuanMiLCIuLi9zcmMvVGV4dEZpZWxkLmpzIiwiLi4vc3JjL1RvYXN0LmpzIiwiLi4vc3JjL1Rvb2x0aXAuanMiLCIuLi9zcmMvVG91Y2hhYmxlLmpzIiwiLi4vc3JjL1ZpZGVvUGxheWhlYWQuanMiLCIuLi9zcmMvVmlkZW9Db250cm9scy5qcyIsIi4uL3NyYy9WaWRlby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAZmxvdyAqL1xuXG4vKlxuXG5TdHlsZSBpcyBhIG1vbm9pZCB0aGF0IGNhcHR1cmUgdGhlIFwidG8tYmUtYXBwbGllZFwiIHN0eWxlcyAoaW5saW5lIGFuZCBjbGFzc2VzKVxuZm9yIGEgQm94LiBJdCdzIGJhc2ljYWxseSBzZXQgdGhhdCBpcyBjbG9zZWQgdW5kZXIgYW4gYXNzb2NpYXRpdmUgYmluYXJ5XG5vcGVyYXRpb24gYW5kIGhhcyBhbiBpZGVudGl0eSBlbGVtZW50IHN1Y2ggdGhhdCBmb3IgYWxsIEhBIEhBIEhBLiBZZXMsIGl0J3MgYVxubW9ub2lkLCB3aGljaCBzb3VuZHMgc2NhcnkgYnV0IGl0J3Mgbm90IHJlYWxseSBhbmQgYWN0dWFsbHkgc3VwZXIgdXNlZnVsLiBBbGxcbnRoYXQgbWVhbnMgaXMgdGhhdCBiYXNpY2FsbHkgeW91IGNhbiBkbyB0d28gdGhpbmdzIHdpdGggaXQ6XG5cbiAgICAxLiBjb25jYXQoY29uY2F0KGEsIGIpLCBjKSA9PT0gY29uY2F0KGEsIGNvbmNhdChiLCBjKSk7XG4gICAgMi4gY29uY2F0KGlkZW50aXR5KCksIGEpID09PSBjb25jYXQoYSwgaWRlbnRpdHkoKSkgPT09IGE7XG5cbldoYXQgdGhhdCBtZWFucyBpcyB0aGF0IGl0J3MgcmVhbGx5IGVhc3kgdG8gY29tcG9zZSBzdHlsZXMgdG9nZXRoZXIgYW5kIHRoZVxub3JkZXIgaW4gd2hpY2ggeW91IGRvIHNvIGRvZXNuJ3QgcmVhbGx5IG1hdHRlci5cblxuKi9cblxudHlwZSBJbmxpbmVTdHlsZSA9IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyIHwgdm9pZCB9O1xuXG4vLyBUT0RPOiBUaGlzIHR5cGUgc2hvdWxkIGJlIG9wYXF1ZSwgaG93ZXZlciB0aGUgQmFiZWwgcGFyc2VyIGRvZXNuJ3Qgc3VwcG9ydFxuLy8gICAgICAgdGhlIG9wYXF1ZSBzeW50YXggeWV0LlxuZXhwb3J0IHR5cGUgU3R5bGUgPSB7fFxuICBjbGFzc05hbWU6IFNldDxzdHJpbmc+LFxuICBpbmxpbmVTdHlsZTogSW5saW5lU3R5bGUsXG58fTtcblxuZXhwb3J0IGNvbnN0IGlkZW50aXR5ID0gKCk6IFN0eWxlID0+ICh7XG4gIGNsYXNzTmFtZTogbmV3IFNldCgpLFxuICBpbmxpbmVTdHlsZToge30sXG59KTtcblxuZXhwb3J0IGNvbnN0IGZyb21DbGFzc05hbWUgPSAoLi4uY2xhc3NOYW1lczogQXJyYXk8c3RyaW5nPik6IFN0eWxlID0+ICh7XG4gIGNsYXNzTmFtZTogbmV3IFNldChjbGFzc05hbWVzKSxcbiAgaW5saW5lU3R5bGU6IHt9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmcm9tSW5saW5lU3R5bGUgPSAoaW5saW5lU3R5bGU6IElubGluZVN0eWxlKTogU3R5bGUgPT4gKHtcbiAgY2xhc3NOYW1lOiBuZXcgU2V0KCksXG4gIGlubGluZVN0eWxlLFxufSk7XG5cbmV4cG9ydCBjb25zdCBjb25jYXQgPSAoc3R5bGVzOiBBcnJheTxTdHlsZT4pOiBTdHlsZSA9PlxuICBzdHlsZXMucmVkdWNlKFxuICAgIChcbiAgICAgIHsgY2xhc3NOYW1lOiBjbGFzc05hbWVBLCBpbmxpbmVTdHlsZTogaW5saW5lU3R5bGVBIH0sXG4gICAgICB7IGNsYXNzTmFtZTogY2xhc3NOYW1lQiwgaW5saW5lU3R5bGU6IGlubGluZVN0eWxlQiB9XG4gICAgKSA9PiAoe1xuICAgICAgY2xhc3NOYW1lOiBuZXcgU2V0KFsuLi5jbGFzc05hbWVBLCAuLi5jbGFzc05hbWVCXSksXG4gICAgICBpbmxpbmVTdHlsZTogeyAuLi5pbmxpbmVTdHlsZUEsIC4uLmlubGluZVN0eWxlQiB9LFxuICAgIH0pLFxuICAgIGlkZW50aXR5KClcbiAgKTtcblxuZXhwb3J0IGNvbnN0IG1hcENsYXNzTmFtZSA9IChmbjogKHg6IHN0cmluZykgPT4gc3RyaW5nKSA9PiAoe1xuICBjbGFzc05hbWUsXG4gIGlubGluZVN0eWxlLFxufTogU3R5bGUpOiBTdHlsZSA9PiAoe1xuICBjbGFzc05hbWU6IG5ldyBTZXQoQXJyYXkuZnJvbShjbGFzc05hbWUpLm1hcChmbikpLFxuICBpbmxpbmVTdHlsZSxcbn0pO1xuXG5leHBvcnQgY29uc3QgdG9Qcm9wcyA9ICh7XG4gIGNsYXNzTmFtZSxcbiAgaW5saW5lU3R5bGUsXG59OiBTdHlsZSk6IHsgY2xhc3NOYW1lOiBzdHJpbmcsIHN0eWxlOiBJbmxpbmVTdHlsZSB9ID0+IHtcbiAgY29uc3QgcHJvcHMgPSB7fTtcblxuICBpZiAoY2xhc3NOYW1lLnNpemUgPiAwKSB7XG4gICAgLy8gU29ydGluZyBoZXJlIGVuc3VyZXMgdGhhdCBjbGFzc05hbWVzIGFyZSBhbHdheXMgc3RhYmxlLCByZWR1Y2luZyBkaWZmXG4gICAgLy8gY2h1cm4uIEJveCB1c3VhbGx5IGhhcyBhIHNtYWxsIG51bWJlciBvZiBwcm9wZXJ0aWVzIHNvIGl0J3Mgbm90IGEgcGVyZlxuICAgIC8vIGNvbmNlcm4uXG4gICAgcHJvcHMuY2xhc3NOYW1lID0gQXJyYXkuZnJvbShjbGFzc05hbWUpXG4gICAgICAuc29ydCgpXG4gICAgICAuam9pbignICcpO1xuICB9XG5cbiAgaWYgKE9iamVjdC5rZXlzKGlubGluZVN0eWxlKS5sZW5ndGggPiAwKSB7XG4gICAgcHJvcHMuc3R5bGUgPSBpbmxpbmVTdHlsZTtcbiAgfVxuXG4gIHJldHVybiBwcm9wcztcbn07XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQge1xuICBjb25jYXQsXG4gIGZyb21DbGFzc05hbWUsXG4gIGlkZW50aXR5LFxuICBtYXBDbGFzc05hbWUsXG4gIHR5cGUgU3R5bGUsXG59IGZyb20gJy4vc3R5bGUuanMnO1xuXG4vKlxuXG5UcmFuc2Zvcm1zXG5cblRoZXNlIGFyZSBhIGNvbGxlY3Rpb24gb2YgYSBmZXcgZnVuY3RvcnMgdGhhdCB0YWtlIHZhbHVlcyBhbmQgcmV0dXJucyBTdHlsZSdzLiBPTUcsIEkgdXNlZCB0aGUgd29yZCBmdW5jdG9yIC0gaXQncyByZWFsbHkganVzdCBhIGZhbmN5IHdvcmQgZm9yIGZ1bmN0aW9uLlxuXG4qL1xuXG50eXBlIEZ1bmN0b3IgPSAobjogbnVtYmVyKSA9PiBTdHlsZTtcblxuLy8gQWRkcyBhIGNsYXNzbmFtZSB3aGVuIGEgcHJvcGVydHkgaXMgcHJlc2VudC5cbi8vXG4vLyAgICAgPEJveCB0b3AgLz5cbi8vXG5leHBvcnQgY29uc3QgdG9nZ2xlID0gKC4uLmNsYXNzTmFtZXM6IEFycmF5PHN0cmluZz4pID0+ICh2YWw/OiBib29sZWFuKSA9PlxuICB2YWwgPyBmcm9tQ2xhc3NOYW1lKC4uLmNsYXNzTmFtZXMpIDogaWRlbnRpdHkoKTtcblxuLy8gTWFwcyBzdHJpbmcgdmFsdWVzIHRvIGNsYXNzZXNcbi8vXG4vLyAgICAgPEJveCBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgLz5cbi8vXG5leHBvcnQgY29uc3QgbWFwcGluZyA9IChtYXA6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pID0+ICh2YWw6IHN0cmluZykgPT5cbiAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1hcCwgdmFsKVxuICAgID8gZnJvbUNsYXNzTmFtZShtYXBbdmFsXSlcbiAgICA6IGlkZW50aXR5KCk7XG5cbi8vIE1hcHMgYSByYW5nZSBvZiBpbnRlZ2VycyB0byBhIHJhbmdlIG9mIGNsYXNzbmFtZXNcbi8vXG4vLyAgICAgPEJveCBwYWRkaW5nPXsxfSAvPlxuLy9cbmV4cG9ydCBjb25zdCByYW5nZSA9IChzY2FsZTogc3RyaW5nKSA9PiAobjogbnVtYmVyKSA9PlxuICBmcm9tQ2xhc3NOYW1lKGAke3NjYWxlfSR7biA8IDAgPyBgTiR7TWF0aC5hYnMobil9YCA6IG59YCk7XG5cbi8vIExpa2UgYHJhbmdlYCwgbWFwcyBhIHJhbmdlIG9mIGludGVnZXJzIHRvIGEgcmFuZ2Ugb2YgY2xhc3NuYW1lcywgZXhjbHVkaW5nXG4vLyB6ZXJvIHZhbHVlcy5cbi8vXG4vLyAgICAgPEJveCBwYWRkaW5nPXswfSAvPlxuZXhwb3J0IGNvbnN0IHJhbmdlV2l0aG91dFplcm8gPSAoc2NhbGU6IHN0cmluZykgPT4gKG46IG51bWJlcikgPT5cbiAgbiA9PT0gMCA/IGlkZW50aXR5KCkgOiByYW5nZShzY2FsZSkobik7XG5cbi8vIEJpbmRzIGEgc3RyaW5nIGNsYXNzbmFtZSB0byB0aGUgdmFsdWUgaW4gYW4gb2JqZWN0LiBVc2VmdWwgd2hlbiBpbnRlcmFjdGluZ1xuLy8gd2l0aCByYW5nZXMgdGhhdCBuZWVkIHRvIGNvbWUgZHluYW1pY2FsbHkgZnJvbSBhIHN0eWxlIG9iamVjdC4gVGhpcyBpc1xuLy8gc2ltaWxhciB0byB0aGUgTlBNIHBhY2thZ2UgJ2NsYXNzbmFtZXMvYmluZCcuXG5leHBvcnQgY29uc3QgYmluZCA9IChmbjogRnVuY3Rvciwgc2NvcGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pID0+IChcbiAgdmFsOiBudW1iZXJcbikgPT4gbWFwQ2xhc3NOYW1lKG5hbWUgPT4gc2NvcGVbbmFtZV0pKGZuKHZhbCkpO1xuXG4vLyBUaGlzIHRha2VzIGEgc2VyaWVzIG9mIHRoZSBwcmV2aW91c2x5IGRlZmluZWQgZnVuY3RvcnMsIHJ1bnMgdGhlbSBhbGxcbi8vIGFnYWluc3QgYSB2YWx1ZSBhbmQgcmV0dXJucyB0aGUgc2V0IG9mIHRoZWlyIGNsYXNzbmFtZXMuXG5leHBvcnQgY29uc3QgdW5pb24gPSAoLi4uZm5zOiBBcnJheTxGdW5jdG9yPikgPT4gKHZhbDogbnVtYmVyKSA9PlxuICBjb25jYXQoZm5zLm1hcChmbiA9PiBmbih2YWwpKSk7XG4iLCIvLyBAZmxvd1xuXG4vKlxuXG4jIFdlbGNvbWUgdG8gQm94IVxuXG5UaGlzIGd1aWRlIHdpbGwgaGVscCB5b3UgbmF2aWdhdGUgYW5kIHVuZGVyc3RhbmQgaXRzIGRlc2lnbi4gVGhpcyBmaWxlIGlzIHJvdWdobHkgb3JnYW5pemVkIGxpa2U6XG5cbiAgMS4gRmxvdyBUeXBlc1xuICAyLiBQcm9wIHRyYW5zZm9ybWVyc1xuICAzLiBCb3ggaXRzZWxmXG4gIDQuIFByb3BUeXBlc1xuXG5JJ2xsIGV4cGxhaW4gZWFjaCBwYXJ0IGFzIHdlIGdvIHRocm91Z2guIEp1c3QgcmVtZW1iZXIsIGlmIHlvdSB3YW50IHRvIG1ha2UgdXBkYXRlcywgUExFQVNFIFBMRUFTRSBQTEVBU0UgdXBkYXRlIHRoZSBGbG93IFR5cGVzICYgUHJvcFR5cGVzIChldmVuIHRob3VnaCB0aGV5IGxvb2sgc2NhcnkpLlxuXG4qL1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0JveC5jc3MnO1xuaW1wb3J0IGJvcmRlcnMgZnJvbSAnLi9Cb3JkZXJzLmNzcyc7XG5pbXBvcnQgY29sb3JzIGZyb20gJy4vQ29sb3JzLmNzcyc7XG5pbXBvcnQgbGF5b3V0IGZyb20gJy4vTGF5b3V0LmNzcyc7XG5pbXBvcnQgd2hpdGVzcGFjZSBmcm9tICcuL2JveFdoaXRlc3BhY2UuY3NzJztcbmltcG9ydCB3aGl0ZXNwYWNlTGVnYWN5IGZyb20gJy4vV2hpdGVzcGFjZS5jc3MnO1xuaW1wb3J0IHtcbiAgY29uY2F0LFxuICBmcm9tQ2xhc3NOYW1lLFxuICBmcm9tSW5saW5lU3R5bGUsXG4gIGlkZW50aXR5LFxuICBtYXBDbGFzc05hbWUsXG4gIHRvUHJvcHMsXG59IGZyb20gJy4vc3R5bGUuanMnO1xuaW1wb3J0IHtcbiAgdW5pb24sXG4gIGJpbmQsXG4gIHJhbmdlLFxuICB0b2dnbGUsXG4gIG1hcHBpbmcsXG4gIHJhbmdlV2l0aG91dFplcm8sXG59IGZyb20gJy4vdHJhbnNmb3Jtcy5qcyc7XG5cbi8qXG5cbiMgUHJvVHlwZXNcblxuQm94J3MgdHlwZSBkZWZpbml0aW9uIGlzIGV4aGF1c3RpdmUuIFdpdGggdGhlIGV4Y2VwdGlvbiBvZiBgZGFuZ2Vyb3VzbHlTZXRJbmxpbmVTdHlsZWAsIHZhbHVlcyBzaG91bGRuJ3QgYmUgYW1iaWdpb3VzLiBUaGF0IG1lYW5zIHRoYXQgd2UgaGF2ZSB0byB0eXBlIG91dCB0aGluZ3MgbGlrZSBib2ludHMsIGJ1dCB0aGF0J3MgYWxzbyB3aGVyZSBCb3gncyBtYWdpYyBsaWVzLiBBbHNvLCBieSBwdXR0aW5nIGluIGV4dHJhIGVmZm9ydCBhcm91bmQgdHlwZSBkZWZpbml0aW9ucyBoZXJlLCB3ZSBjYW4gc2tpcCBleHRyYSBydW50aW1lIHR5cGVjaGVja3MgaW4gdGhlIHRyYW5zZm9ybWVycyBmb3IgcGVyZm9ybWFuY2UuXG5cbiovXG5cbnR5cGUgTmF0Qm9pbnQgPSAxIHwgMiB8IDMgfCA0IHwgNSB8IDY7XG50eXBlIEludEJvaW50ID0gLTYgfCAtNSB8IC00IHwgLTMgfCAtMiB8IC0xIHwgTmF0Qm9pbnQ7XG50eXBlIERpc3BsYXkgPSAnbm9uZScgfCAnZmxleCcgfCAnYmxvY2snIHwgJ2lubGluZUJsb2NrJyB8ICd2aXN1YWxseUhpZGRlbic7XG50eXBlIERpcmVjdGlvbiA9ICdyb3cnIHwgJ2NvbHVtbic7XG50eXBlIENvbHVtbiA9IDAgfCAxIHwgMiB8IDMgfCA0IHwgNSB8IDYgfCA3IHwgOCB8IDkgfCAxMCB8IDExIHwgMTI7XG50eXBlIFJlc3BvbnNpdmVQcm9wcyA9IHtcbiAgY29sdW1uPzogMSB8IDIgfCAzIHwgNCB8IDUgfCA2IHwgNyB8IDggfCA5IHwgMTAgfCAxMSB8IDEyLFxuICBkaXNwbGF5PzogYm9vbGVhbiB8ICdmbGV4JyB8ICdmbGV4Q29sdW1uJyB8ICdpbmxpbmVCbG9jaycsXG59O1xudHlwZSBNYXJnaW4gPVxuICB8IC0xMlxuICB8IC0xMVxuICB8IC0xMFxuICB8IC05XG4gIHwgLThcbiAgfCAtN1xuICB8IC02XG4gIHwgLTVcbiAgfCAtNFxuICB8IC0zXG4gIHwgLTJcbiAgfCAtMVxuICB8IDBcbiAgfCAxXG4gIHwgMlxuICB8IDNcbiAgfCA0XG4gIHwgNVxuICB8IDZcbiAgfCA3XG4gIHwgOFxuICB8IDlcbiAgfCAxMFxuICB8IDExXG4gIHwgMTI7XG50eXBlIFBhZGRpbmcgPSAwIHwgMSB8IDIgfCAzIHwgNCB8IDUgfCA2IHwgNyB8IDggfCA5IHwgMTAgfCAxMSB8IDEyO1xudHlwZSBQcm9wVHlwZSA9IHtcbiAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlLFxuICBkYW5nZXJvdXNseVNldElubGluZVN0eWxlPzoge1xuICAgIF9fc3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyIHwgdm9pZCB9LFxuICB9LFxuXG4gIHhzPzogUmVzcG9uc2l2ZVByb3BzLFxuICBzbT86IFJlc3BvbnNpdmVQcm9wcyxcbiAgbWQ/OiBSZXNwb25zaXZlUHJvcHMsXG4gIGxnPzogUmVzcG9uc2l2ZVByb3BzLFxuICBkZXByZWNhdGVkUGFkZGluZz86IE5hdEJvaW50IHwgeyB4PzogTmF0Qm9pbnQsIHk/OiBOYXRCb2ludCB9LFxuICBkZXByZWNhdGVkTWFyZ2luPzpcbiAgICB8IEludEJvaW50XG4gICAgfCB7XG4gICAgICAgIHRvcD86IEludEJvaW50LFxuICAgICAgICByaWdodD86IEludEJvaW50IHwgJ2F1dG8nLFxuICAgICAgICBib3R0b20/OiBJbnRCb2ludCxcbiAgICAgICAgbGVmdD86IEludEJvaW50IHwgJ2F1dG8nLFxuICAgICAgfSxcblxuICBkaXNwbGF5PzogRGlzcGxheSxcbiAgY29sdW1uPzogQ29sdW1uLFxuICBkaXJlY3Rpb24/OiBEaXJlY3Rpb24sXG4gIHNtRGlzcGxheT86IERpc3BsYXksXG4gIHNtQ29sdW1uPzogQ29sdW1uLFxuICBzbURpcmVjdGlvbj86IERpcmVjdGlvbixcbiAgbWREaXNwbGF5PzogRGlzcGxheSxcbiAgbWRDb2x1bW4/OiBDb2x1bW4sXG4gIG1kRGlyZWN0aW9uPzogRGlyZWN0aW9uLFxuICBsZ0Rpc3BsYXk/OiBEaXNwbGF5LFxuICBsZ0NvbHVtbj86IENvbHVtbixcbiAgbGdEaXJlY3Rpb24/OiBEaXJlY3Rpb24sXG5cbiAgYWxpZ25Db250ZW50PzogJ3N0YXJ0JyB8ICdlbmQnIHwgJ2NlbnRlcicgfCAnYmV0d2VlbicgfCAnYXJvdW5kJyB8ICdzdHJldGNoJyxcbiAgYWxpZ25JdGVtcz86ICdzdGFydCcgfCAnZW5kJyB8ICdjZW50ZXInIHwgJ2Jhc2VsaW5lJyB8ICdzdHJldGNoJyxcbiAgYWxpZ25TZWxmPzogJ2F1dG8nIHwgJ3N0YXJ0JyB8ICdlbmQnIHwgJ2NlbnRlcicgfCAnYmFzZWxpbmUnIHwgJ3N0cmV0Y2gnLFxuICBib3R0b20/OiBib29sZWFuLFxuICBjb2xvcj86XG4gICAgfCAnYmx1ZSdcbiAgICB8ICdkYXJrR3JheSdcbiAgICB8ICdkYXJrV2FzaCdcbiAgICB8ICdlZ2dwbGFudCdcbiAgICB8ICdncmF5J1xuICAgIHwgJ2dyZWVuJ1xuICAgIHwgJ2xpZ2h0R3JheSdcbiAgICB8ICdsaWdodFdhc2gnXG4gICAgfCAnbWFyb29uJ1xuICAgIHwgJ21pZG5pZ2h0J1xuICAgIHwgJ25hdnknXG4gICAgfCAnb2xpdmUnXG4gICAgfCAnb3JhbmdlJ1xuICAgIHwgJ29yY2hpZCdcbiAgICB8ICdwaW5lJ1xuICAgIHwgJ3B1cnBsZSdcbiAgICB8ICdyZWQnXG4gICAgfCAndHJhbnNwYXJlbnQnXG4gICAgfCAnd2F0ZXJtZWxvbidcbiAgICB8ICd3aGl0ZScsXG4gIGZpdD86IGJvb2xlYW4sXG4gIGZsZXg/OiAnZ3JvdycgfCAnc2hyaW5rJyB8ICdub25lJyxcbiAgaGVpZ2h0PzogbnVtYmVyIHwgc3RyaW5nLFxuICBqdXN0aWZ5Q29udGVudD86ICdzdGFydCcgfCAnZW5kJyB8ICdjZW50ZXInIHwgJ2JldHdlZW4nIHwgJ2Fyb3VuZCcsXG4gIGxlZnQ/OiBib29sZWFuLFxuXG4gIG1hcmdpblN0YXJ0PzogTWFyZ2luLFxuICBtYXJnaW5FbmQ/OiBNYXJnaW4sXG5cbiAgbWFyZ2luPzogTWFyZ2luLFxuICBtYXJnaW5Ub3A/OiBNYXJnaW4sXG4gIG1hcmdpblJpZ2h0PzogTWFyZ2luLFxuICBtYXJnaW5Cb3R0b20/OiBNYXJnaW4sXG4gIG1hcmdpbkxlZnQ/OiBNYXJnaW4sXG5cbiAgc21NYXJnaW4/OiBNYXJnaW4sXG4gIHNtTWFyZ2luVG9wPzogTWFyZ2luLFxuICBzbU1hcmdpblJpZ2h0PzogTWFyZ2luLFxuICBzbU1hcmdpbkJvdHRvbT86IE1hcmdpbixcbiAgc21NYXJnaW5MZWZ0PzogTWFyZ2luLFxuXG4gIG1kTWFyZ2luPzogTWFyZ2luLFxuICBtZE1hcmdpblRvcD86IE1hcmdpbixcbiAgbWRNYXJnaW5SaWdodD86IE1hcmdpbixcbiAgbWRNYXJnaW5Cb3R0b20/OiBNYXJnaW4sXG4gIG1kTWFyZ2luTGVmdD86IE1hcmdpbixcblxuICBsZ01hcmdpbj86IE1hcmdpbixcbiAgbGdNYXJnaW5Ub3A/OiBNYXJnaW4sXG4gIGxnTWFyZ2luUmlnaHQ/OiBNYXJnaW4sXG4gIGxnTWFyZ2luQm90dG9tPzogTWFyZ2luLFxuICBsZ01hcmdpbkxlZnQ/OiBNYXJnaW4sXG5cbiAgbWF4SGVpZ2h0PzogbnVtYmVyIHwgc3RyaW5nLFxuICBtYXhXaWR0aD86IG51bWJlciB8IHN0cmluZyxcbiAgbWluSGVpZ2h0PzogbnVtYmVyIHwgc3RyaW5nLFxuICBtaW5XaWR0aD86IG51bWJlciB8IHN0cmluZyxcblxuICBvdmVyZmxvdz86ICd2aXNpYmxlJyB8ICdoaWRkZW4nIHwgJ3Njcm9sbCcgfCAnc2Nyb2xsWCcgfCAnc2Nyb2xsWScgfCAnYXV0bycsXG5cbiAgcGFkZGluZz86IFBhZGRpbmcsXG4gIHNtUGFkZGluZz86IFBhZGRpbmcsXG4gIG1kUGFkZGluZz86IFBhZGRpbmcsXG4gIGxnUGFkZGluZz86IFBhZGRpbmcsXG5cbiAgcGFkZGluZ1g/OiBQYWRkaW5nLFxuICBzbVBhZGRpbmdYPzogUGFkZGluZyxcbiAgbWRQYWRkaW5nWD86IFBhZGRpbmcsXG4gIGxnUGFkZGluZ1g/OiBQYWRkaW5nLFxuXG4gIHBhZGRpbmdZPzogUGFkZGluZyxcbiAgc21QYWRkaW5nWT86IFBhZGRpbmcsXG4gIG1kUGFkZGluZ1k/OiBQYWRkaW5nLFxuICBsZ1BhZGRpbmdZPzogUGFkZGluZyxcblxuICBwb3NpdGlvbj86ICdzdGF0aWMnIHwgJ2Fic29sdXRlJyB8ICdyZWxhdGl2ZScgfCAnZml4ZWQnLFxuICByaWdodD86IGJvb2xlYW4sXG4gIHNoYXBlPzpcbiAgICB8ICdzcXVhcmUnXG4gICAgfCAncm91bmRlZCdcbiAgICB8ICdwaWxsJ1xuICAgIHwgJ2NpcmNsZSdcbiAgICB8ICdyb3VuZGVkVG9wJ1xuICAgIHwgJ3JvdW5kZWRCb3R0b20nXG4gICAgfCAncm91bmRlZExlZnQnXG4gICAgfCAncm91bmRlZFJpZ2h0JyxcbiAgc2hyaW5rPzogYm9vbGVhbixcbiAgdG9wPzogYm9vbGVhbixcbiAgd2lkdGg/OiBudW1iZXIgfCBzdHJpbmcsXG4gIHdyYXA/OiBib29sZWFuLFxufTtcblxuLy8gLS1cblxuLypcblxuIyBUcmFuc2Zvcm1lcnNcblxuVGhpcyBpcyB3aGVyZSB0aGUgbWVhdCBhbmQgdGhlIGJvbmVzIG9mIEJveCdzIHRyYW5zZm9ybXMgYXJlLiBZb3UgY2FuIHJlYWQgbW9yZSBhYm91dCB0aGUgRFNMIGluIGAuL3RyYW5zZm9ybXMuanNgLCBidXQgYmFzaWNhbGx5IHRoZXkgYXJlIGEgc21hbGwgZGVjbGFyYXRpdmUgd2F5IG9mIHNwZWNpZnlpbmcgaG93IGEgcHJvcGVydHkgKGkuZS4gYG1hcmdpblRvcD17NH1gKSBnZXRzIHR1cm5lZCBpbnRvIGEgQ1NTIGNsYXNzIChgbWFyZ2luVG9wNGApLlxuXG5UaGVyZSdzIGEgbGl0dGxlIHByZWFtYmxlIGhlcmUsIGJ1dCBpdCBjdWxtaW5hdGVzIGluIGEgYmlnIG9iamVjdCBtYXBwaW5nIHRoZSBhY3R1YWwgcHJvcGVydHkgbmFtZXMgdG8gdGhlIHRyYW5zZm9ybWVyIHZhbHVlcy5cblxuKi9cblxuY29uc3QgbWFyZ2luU3RhcnQgPSBiaW5kKHJhbmdlV2l0aG91dFplcm8oJ21hcmdpblN0YXJ0JyksIHdoaXRlc3BhY2UpO1xuY29uc3QgbWFyZ2luRW5kID0gYmluZChyYW5nZVdpdGhvdXRaZXJvKCdtYXJnaW5FbmQnKSwgd2hpdGVzcGFjZSk7XG5jb25zdCBtYXJnaW5Ub3AgPSBiaW5kKHJhbmdlV2l0aG91dFplcm8oJ21hcmdpblRvcCcpLCB3aGl0ZXNwYWNlKTtcbmNvbnN0IG1hcmdpblJpZ2h0ID0gYmluZChyYW5nZVdpdGhvdXRaZXJvKCdtYXJnaW5SaWdodCcpLCB3aGl0ZXNwYWNlKTtcbmNvbnN0IG1hcmdpbkJvdHRvbSA9IGJpbmQocmFuZ2VXaXRob3V0WmVybygnbWFyZ2luQm90dG9tJyksIHdoaXRlc3BhY2UpO1xuY29uc3QgbWFyZ2luTGVmdCA9IGJpbmQocmFuZ2VXaXRob3V0WmVybygnbWFyZ2luTGVmdCcpLCB3aGl0ZXNwYWNlKTtcbmNvbnN0IG1hcmdpbiA9IHVuaW9uKG1hcmdpblRvcCwgbWFyZ2luQm90dG9tLCBtYXJnaW5MZWZ0LCBtYXJnaW5SaWdodCk7XG5cbmNvbnN0IHNtTWFyZ2luVG9wID0gYmluZChyYW5nZVdpdGhvdXRaZXJvKCdzbU1hcmdpblRvcCcpLCB3aGl0ZXNwYWNlKTtcbmNvbnN0IHNtTWFyZ2luUmlnaHQgPSBiaW5kKHJhbmdlV2l0aG91dFplcm8oJ3NtTWFyZ2luUmlnaHQnKSwgd2hpdGVzcGFjZSk7XG5jb25zdCBzbU1hcmdpbkJvdHRvbSA9IGJpbmQocmFuZ2VXaXRob3V0WmVybygnc21NYXJnaW5Cb3R0b20nKSwgd2hpdGVzcGFjZSk7XG5jb25zdCBzbU1hcmdpbkxlZnQgPSBiaW5kKHJhbmdlV2l0aG91dFplcm8oJ3NtTWFyZ2luTGVmdCcpLCB3aGl0ZXNwYWNlKTtcbmNvbnN0IHNtTWFyZ2luID0gdW5pb24oXG4gIHNtTWFyZ2luVG9wLFxuICBzbU1hcmdpbkJvdHRvbSxcbiAgc21NYXJnaW5MZWZ0LFxuICBzbU1hcmdpblJpZ2h0XG4pO1xuXG5jb25zdCBtZE1hcmdpblRvcCA9IGJpbmQocmFuZ2VXaXRob3V0WmVybygnbWRNYXJnaW5Ub3AnKSwgd2hpdGVzcGFjZSk7XG5jb25zdCBtZE1hcmdpblJpZ2h0ID0gYmluZChyYW5nZVdpdGhvdXRaZXJvKCdtZE1hcmdpblJpZ2h0JyksIHdoaXRlc3BhY2UpO1xuY29uc3QgbWRNYXJnaW5Cb3R0b20gPSBiaW5kKHJhbmdlV2l0aG91dFplcm8oJ21kTWFyZ2luQm90dG9tJyksIHdoaXRlc3BhY2UpO1xuY29uc3QgbWRNYXJnaW5MZWZ0ID0gYmluZChyYW5nZVdpdGhvdXRaZXJvKCdtZE1hcmdpbkxlZnQnKSwgd2hpdGVzcGFjZSk7XG5jb25zdCBtZE1hcmdpbiA9IHVuaW9uKFxuICBtZE1hcmdpblRvcCxcbiAgbWRNYXJnaW5Cb3R0b20sXG4gIG1kTWFyZ2luTGVmdCxcbiAgbWRNYXJnaW5SaWdodFxuKTtcblxuY29uc3QgbGdNYXJnaW5Ub3AgPSBiaW5kKHJhbmdlV2l0aG91dFplcm8oJ2xnTWFyZ2luVG9wJyksIHdoaXRlc3BhY2UpO1xuY29uc3QgbGdNYXJnaW5SaWdodCA9IGJpbmQocmFuZ2VXaXRob3V0WmVybygnbGdNYXJnaW5SaWdodCcpLCB3aGl0ZXNwYWNlKTtcbmNvbnN0IGxnTWFyZ2luQm90dG9tID0gYmluZChyYW5nZVdpdGhvdXRaZXJvKCdsZ01hcmdpbkJvdHRvbScpLCB3aGl0ZXNwYWNlKTtcbmNvbnN0IGxnTWFyZ2luTGVmdCA9IGJpbmQocmFuZ2VXaXRob3V0WmVybygnbGdNYXJnaW5MZWZ0JyksIHdoaXRlc3BhY2UpO1xuY29uc3QgbGdNYXJnaW4gPSB1bmlvbihcbiAgbGdNYXJnaW5Ub3AsXG4gIGxnTWFyZ2luQm90dG9tLFxuICBsZ01hcmdpbkxlZnQsXG4gIGxnTWFyZ2luUmlnaHRcbik7XG5cbmNvbnN0IHBhZGRpbmdYID0gYmluZChyYW5nZVdpdGhvdXRaZXJvKCdwYWRkaW5nWCcpLCB3aGl0ZXNwYWNlKTtcbmNvbnN0IHBhZGRpbmdZID0gYmluZChyYW5nZVdpdGhvdXRaZXJvKCdwYWRkaW5nWScpLCB3aGl0ZXNwYWNlKTtcbmNvbnN0IHBhZGRpbmcgPSB1bmlvbihwYWRkaW5nWCwgcGFkZGluZ1kpO1xuXG5jb25zdCBzbVBhZGRpbmdYID0gYmluZChyYW5nZVdpdGhvdXRaZXJvKCdzbVBhZGRpbmdYJyksIHdoaXRlc3BhY2UpO1xuY29uc3Qgc21QYWRkaW5nWSA9IGJpbmQocmFuZ2VXaXRob3V0WmVybygnc21QYWRkaW5nWScpLCB3aGl0ZXNwYWNlKTtcbmNvbnN0IHNtUGFkZGluZyA9IHVuaW9uKHNtUGFkZGluZ1gsIHNtUGFkZGluZ1kpO1xuXG5jb25zdCBtZFBhZGRpbmdYID0gYmluZChyYW5nZVdpdGhvdXRaZXJvKCdtZFBhZGRpbmdYJyksIHdoaXRlc3BhY2UpO1xuY29uc3QgbWRQYWRkaW5nWSA9IGJpbmQocmFuZ2VXaXRob3V0WmVybygnbWRQYWRkaW5nWScpLCB3aGl0ZXNwYWNlKTtcbmNvbnN0IG1kUGFkZGluZyA9IHVuaW9uKG1kUGFkZGluZ1gsIG1kUGFkZGluZ1kpO1xuXG5jb25zdCBsZ1BhZGRpbmdYID0gYmluZChyYW5nZVdpdGhvdXRaZXJvKCdsZ1BhZGRpbmdYJyksIHdoaXRlc3BhY2UpO1xuY29uc3QgbGdQYWRkaW5nWSA9IGJpbmQocmFuZ2VXaXRob3V0WmVybygnbGdQYWRkaW5nWScpLCB3aGl0ZXNwYWNlKTtcbmNvbnN0IGxnUGFkZGluZyA9IHVuaW9uKGxnUGFkZGluZ1gsIGxnUGFkZGluZ1kpO1xuXG4vKlxuXG5UaGVzZSBmdW5jdGlvbnMgYXJlIGxlZ2FjeS4gSSdkIGxpa2UgdG8gZ2V0IHJpZCBvZiBtb3N0IG9mIHRoaXMgZmlsZSdzIGRlcGVuZGVuY3kgb24gaW1wb3J0aW5nIGAuL3N0eWxlLmpzYCBkaXJlY3RseSBvbmNlIHRoZXNlIGFyZSByZW1vdmVkLlxuXG4qL1xuXG5jb25zdCBwcmVmaXggPSAocHJlOiBzdHJpbmcpID0+IG1hcENsYXNzTmFtZShuYW1lID0+IGAke3ByZX0ke25hbWV9YCk7XG5jb25zdCBkaXNwbGF5ID0gdmFsdWUgPT4ge1xuICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgY2FzZSAnZmxleCc6XG4gICAgICByZXR1cm4gZnJvbUNsYXNzTmFtZSgnRGlzcGxheUZsZXgnLCAnRGlyZWN0aW9uUm93Jyk7XG4gICAgY2FzZSAnZmxleENvbHVtbic6XG4gICAgICByZXR1cm4gZnJvbUNsYXNzTmFtZSgnRGlzcGxheUZsZXgnLCAnRGlyZWN0aW9uQ29sdW1uJyk7XG4gICAgY2FzZSAnaW5saW5lQmxvY2snOlxuICAgICAgcmV0dXJuIGZyb21DbGFzc05hbWUoJ0Rpc3BsYXlJbmxpbmVCbG9jaycpO1xuICAgIGNhc2UgJ3Zpc3VhbGx5SGlkZGVuJzpcbiAgICAgIHJldHVybiBmcm9tQ2xhc3NOYW1lKCdEaXNwbGF5VmlzdWFsbHlIaWRkZW4nKTtcbiAgICBjYXNlIGZhbHNlOlxuICAgICAgcmV0dXJuIGZyb21DbGFzc05hbWUoJ0Rpc3BsYXlOb25lJyk7XG4gICAgZGVmYXVsdDpcbiAgICAgIC8qIGJsb2NrICovXG4gICAgICByZXR1cm4gZnJvbUNsYXNzTmFtZSgnRGlzcGxheUJsb2NrJyk7XG4gIH1cbn07XG5jb25zdCBjb2x1bW4gPSByYW5nZSgnQ29sJyk7XG5cbmNvbnN0IGZvcm1hdEludEJvaW50ID0geCA9PiAoeCA8IDAgPyBgbiR7TWF0aC5hYnMoeCl9YCA6IHgudG9TdHJpbmcoKSk7XG5cbi8qXG5cbkl0J3MgcHJlZmVyYWJsZSB0byBwdXQgbmV3IHByb3BlcnRpZXMgaW50byB0aGF0IG9iamVjdCBkaXJlY3RseSBqdXN0IHNvIGl0J3MgZWFzaWVyIHRvIHJlYWQuXG5cbiovXG5cbmNvbnN0IHByb3BUb0ZuID0ge1xuICB4czogdmFsdWUgPT4ge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiBpZGVudGl0eSgpO1xuICAgIH1cbiAgICByZXR1cm4gbWFwQ2xhc3NOYW1lKGMgPT4gc3R5bGVzW2NdKShcbiAgICAgIHByZWZpeCgneHMnKShcbiAgICAgICAgY29uY2F0KFtcbiAgICAgICAgICB2YWx1ZS5jb2x1bW4gPyBjb2x1bW4odmFsdWUuY29sdW1uKSA6IGlkZW50aXR5KCksXG4gICAgICAgICAgdHlwZW9mIHZhbHVlLmRpc3BsYXkgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IGRpc3BsYXkodmFsdWUuZGlzcGxheSlcbiAgICAgICAgICAgIDogaWRlbnRpdHkoKSxcbiAgICAgICAgXSlcbiAgICAgIClcbiAgICApO1xuICB9LFxuICBzbTogdmFsdWUgPT4ge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiBpZGVudGl0eSgpO1xuICAgIH1cbiAgICByZXR1cm4gbWFwQ2xhc3NOYW1lKGMgPT4gc3R5bGVzW2NdKShcbiAgICAgIHByZWZpeCgnc20nKShcbiAgICAgICAgY29uY2F0KFtcbiAgICAgICAgICB2YWx1ZS5jb2x1bW4gPyBjb2x1bW4odmFsdWUuY29sdW1uKSA6IGlkZW50aXR5KCksXG4gICAgICAgICAgdHlwZW9mIHZhbHVlLmRpc3BsYXkgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IGRpc3BsYXkodmFsdWUuZGlzcGxheSlcbiAgICAgICAgICAgIDogaWRlbnRpdHkoKSxcbiAgICAgICAgXSlcbiAgICAgIClcbiAgICApO1xuICB9LFxuICBtZDogdmFsdWUgPT4ge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiBpZGVudGl0eSgpO1xuICAgIH1cbiAgICByZXR1cm4gbWFwQ2xhc3NOYW1lKGMgPT4gc3R5bGVzW2NdKShcbiAgICAgIHByZWZpeCgnbWQnKShcbiAgICAgICAgY29uY2F0KFtcbiAgICAgICAgICB2YWx1ZS5jb2x1bW4gPyBjb2x1bW4odmFsdWUuY29sdW1uKSA6IGlkZW50aXR5KCksXG4gICAgICAgICAgdHlwZW9mIHZhbHVlLmRpc3BsYXkgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IGRpc3BsYXkodmFsdWUuZGlzcGxheSlcbiAgICAgICAgICAgIDogaWRlbnRpdHkoKSxcbiAgICAgICAgXSlcbiAgICAgIClcbiAgICApO1xuICB9LFxuICBsZzogdmFsdWUgPT4ge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiBpZGVudGl0eSgpO1xuICAgIH1cbiAgICByZXR1cm4gbWFwQ2xhc3NOYW1lKGMgPT4gc3R5bGVzW2NdKShcbiAgICAgIHByZWZpeCgnbGcnKShcbiAgICAgICAgY29uY2F0KFtcbiAgICAgICAgICB2YWx1ZS5jb2x1bW4gPyBjb2x1bW4odmFsdWUuY29sdW1uKSA6IGlkZW50aXR5KCksXG4gICAgICAgICAgdHlwZW9mIHZhbHVlLmRpc3BsYXkgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IGRpc3BsYXkodmFsdWUuZGlzcGxheSlcbiAgICAgICAgICAgIDogaWRlbnRpdHkoKSxcbiAgICAgICAgXSlcbiAgICAgIClcbiAgICApO1xuICB9LFxuXG4gIGRpc3BsYXk6IG1hcHBpbmcoe1xuICAgIG5vbmU6IHN0eWxlcy54c0Rpc3BsYXlOb25lLFxuICAgIGZsZXg6IHN0eWxlcy54c0Rpc3BsYXlGbGV4LFxuICAgIGJsb2NrOiBzdHlsZXMueHNEaXNwbGF5QmxvY2ssXG4gICAgaW5saW5lQmxvY2s6IHN0eWxlcy54c0Rpc3BsYXlJbmxpbmVCbG9jayxcbiAgICB2aXN1YWxseUhpZGRlbjogc3R5bGVzLnhzRGlzcGxheVZpc3VhbGx5SGlkZGVuLFxuICB9KSxcbiAgY29sdW1uOiBiaW5kKHJhbmdlKCd4c0NvbCcpLCBzdHlsZXMpLFxuICBkaXJlY3Rpb246IG1hcHBpbmcoe1xuICAgIHJvdzogc3R5bGVzLnhzRGlyZWN0aW9uUm93LFxuICAgIGNvbHVtbjogc3R5bGVzLnhzRGlyZWN0aW9uQ29sdW1uLFxuICB9KSxcblxuICBzbURpc3BsYXk6IG1hcHBpbmcoe1xuICAgIG5vbmU6IHN0eWxlcy5zbURpc3BsYXlOb25lLFxuICAgIGZsZXg6IHN0eWxlcy5zbURpc3BsYXlGbGV4LFxuICAgIGJsb2NrOiBzdHlsZXMuc21EaXNwbGF5QmxvY2ssXG4gICAgaW5saW5lQmxvY2s6IHN0eWxlcy5zbURpc3BsYXlJbmxpbmVCbG9jayxcbiAgICB2aXN1YWxseUhpZGRlbjogc3R5bGVzLnNtRGlzcGxheVZpc3VhbGx5SGlkZGVuLFxuICB9KSxcbiAgc21Db2x1bW46IGJpbmQocmFuZ2UoJ3NtQ29sJyksIHN0eWxlcyksXG4gIHNtRGlyZWN0aW9uOiBtYXBwaW5nKHtcbiAgICByb3c6IHN0eWxlcy5zbURpcmVjdGlvblJvdyxcbiAgICBjb2x1bW46IHN0eWxlcy5zbURpcmVjdGlvbkNvbHVtbixcbiAgfSksXG5cbiAgbWREaXNwbGF5OiBtYXBwaW5nKHtcbiAgICBub25lOiBzdHlsZXMubWREaXNwbGF5Tm9uZSxcbiAgICBmbGV4OiBzdHlsZXMubWREaXNwbGF5RmxleCxcbiAgICBibG9jazogc3R5bGVzLm1kRGlzcGxheUJsb2NrLFxuICAgIGlubGluZUJsb2NrOiBzdHlsZXMubWREaXNwbGF5SW5saW5lQmxvY2ssXG4gICAgdmlzdWFsbHlIaWRkZW46IHN0eWxlcy5tZERpc3BsYXlWaXN1YWxseUhpZGRlbixcbiAgfSksXG4gIG1kQ29sdW1uOiBiaW5kKHJhbmdlKCdtZENvbCcpLCBzdHlsZXMpLFxuICBtZERpcmVjdGlvbjogbWFwcGluZyh7XG4gICAgcm93OiBzdHlsZXMubWREaXJlY3Rpb25Sb3csXG4gICAgY29sdW1uOiBzdHlsZXMubWREaXJlY3Rpb25Db2x1bW4sXG4gIH0pLFxuXG4gIGxnRGlzcGxheTogbWFwcGluZyh7XG4gICAgbm9uZTogc3R5bGVzLmxnRGlzcGxheU5vbmUsXG4gICAgZmxleDogc3R5bGVzLmxnRGlzcGxheUZsZXgsXG4gICAgYmxvY2s6IHN0eWxlcy5sZ0Rpc3BsYXlCbG9jayxcbiAgICBpbmxpbmVCbG9jazogc3R5bGVzLmxnRGlzcGxheUlubGluZUJsb2NrLFxuICAgIHZpc3VhbGx5SGlkZGVuOiBzdHlsZXMubGdEaXNwbGF5VmlzdWFsbHlIaWRkZW4sXG4gIH0pLFxuICBsZ0NvbHVtbjogYmluZChyYW5nZSgnbGdDb2wnKSwgc3R5bGVzKSxcbiAgbGdEaXJlY3Rpb246IG1hcHBpbmcoe1xuICAgIHJvdzogc3R5bGVzLmxnRGlyZWN0aW9uUm93LFxuICAgIGNvbHVtbjogc3R5bGVzLmxnRGlyZWN0aW9uQ29sdW1uLFxuICB9KSxcblxuICBhbGlnbkNvbnRlbnQ6IG1hcHBpbmcoe1xuICAgIHN0YXJ0OiBsYXlvdXQuY29udGVudFN0YXJ0LFxuICAgIGVuZDogbGF5b3V0LmNvbnRlbnRFbmQsXG4gICAgY2VudGVyOiBsYXlvdXQuY29udGVudENlbnRlcixcbiAgICBiZXR3ZWVuOiBsYXlvdXQuY29udGVudEJldHdlZW4sXG4gICAgYXJvdW5kOiBsYXlvdXQuY29udGVudEFyb3VuZCxcbiAgICAvLyBkZWZhdWx0OiBzdHJldGNoXG4gIH0pLFxuICBhbGlnbkl0ZW1zOiBtYXBwaW5nKHtcbiAgICBzdGFydDogbGF5b3V0Lml0ZW1zU3RhcnQsXG4gICAgZW5kOiBsYXlvdXQuaXRlbXNFbmQsXG4gICAgY2VudGVyOiBsYXlvdXQuaXRlbXNDZW50ZXIsXG4gICAgYmFzZWxpbmU6IGxheW91dC5pdGVtc0Jhc2VsaW5lLFxuICAgIC8vIGRlZmF1bHQ6IHN0cmV0Y2hcbiAgfSksXG4gIGFsaWduU2VsZjogbWFwcGluZyh7XG4gICAgc3RhcnQ6IGxheW91dC5zZWxmU3RhcnQsXG4gICAgZW5kOiBsYXlvdXQuc2VsZkVuZCxcbiAgICBjZW50ZXI6IGxheW91dC5zZWxmQ2VudGVyLFxuICAgIGJhc2VsaW5lOiBsYXlvdXQuc2VsZkJhc2VsaW5lLFxuICAgIHN0cmV0Y2g6IGxheW91dC5zZWxmU3RyZXRjaCxcbiAgICAvLyBkZWZhdWx0OiBhdXRvXG4gIH0pLFxuICBib3R0b206IHRvZ2dsZShsYXlvdXQuYm90dG9tMCksXG4gIGNvbG9yOiBtYXBwaW5nKHtcbiAgICBibHVlOiBjb2xvcnMuYmx1ZUJnLFxuICAgIGRhcmtHcmF5OiBjb2xvcnMuZGFya0dyYXlCZyxcbiAgICBwaW5lOiBjb2xvcnMucGluZUJnLFxuICAgIGdyYXk6IGNvbG9ycy5ncmF5QmcsXG4gICAgcmVkOiBjb2xvcnMucmVkQmcsXG4gICAgb2xpdmU6IGNvbG9ycy5vbGl2ZUJnLFxuICAgIGxpZ2h0R3JheTogY29sb3JzLmxpZ2h0R3JheUJnLFxuICAgIHdoaXRlOiBjb2xvcnMud2hpdGVCZyxcbiAgICBvcmFuZ2U6IGNvbG9ycy5vcmFuZ2VCZyxcbiAgICBncmVlbjogY29sb3JzLmdyZWVuQmcsXG4gICAgbmF2eTogY29sb3JzLm5hdnlCZyxcbiAgICBtaWRuaWdodDogY29sb3JzLm1pZG5pZ2h0QmcsXG4gICAgcHVycGxlOiBjb2xvcnMucHVycGxlQmcsXG4gICAgb3JjaGlkOiBjb2xvcnMub3JjaGlkQmcsXG4gICAgZWdncGxhbnQ6IGNvbG9ycy5lZ2dwbGFudEJnLFxuICAgIG1hcm9vbjogY29sb3JzLm1hcm9vbkJnLFxuICAgIHdhdGVybWVsb246IGNvbG9ycy53YXRlcm1lbG9uQmcsXG4gICAgbGlnaHRXYXNoOiBjb2xvcnMubGlnaHRXYXNoQmcsXG4gICAgZGFya1dhc2g6IGNvbG9ycy5kYXJrV2FzaEJnLFxuICAgIC8vIGRlZmF1bHQ6IHRyYW5zcGFyZW50XG4gIH0pLFxuICBmaXQ6IHRvZ2dsZShsYXlvdXQuZml0KSxcbiAgZmxleDogbWFwcGluZyh7XG4gICAgZ3JvdzogbGF5b3V0LmZsZXhHcm93LFxuICAgIG5vbmU6IGxheW91dC5mbGV4Tm9uZSxcbiAgICAvLyBkZWZhdWx0OiBzaHJpbmtcbiAgfSksXG4gIGhlaWdodDogaGVpZ2h0ID0+IGZyb21JbmxpbmVTdHlsZSh7IGhlaWdodCB9KSxcbiAganVzdGlmeUNvbnRlbnQ6IG1hcHBpbmcoe1xuICAgIGVuZDogbGF5b3V0Lmp1c3RpZnlFbmQsXG4gICAgY2VudGVyOiBsYXlvdXQuanVzdGlmeUNlbnRlcixcbiAgICBiZXR3ZWVuOiBsYXlvdXQuanVzdGlmeUJldHdlZW4sXG4gICAgYXJvdW5kOiBsYXlvdXQuanVzdGlmeUFyb3VuZCxcbiAgICAvLyBkZWZhdWx0OiBzdGFydFxuICB9KSxcbiAgbGVmdDogdG9nZ2xlKGxheW91dC5sZWZ0MCksXG4gIGRlcHJlY2F0ZWRNYXJnaW46IHZhbHVlID0+IHtcbiAgICBsZXQgbXQgPSBpZGVudGl0eSgpO1xuICAgIGxldCBtYiA9IGlkZW50aXR5KCk7XG4gICAgbGV0IG1sID0gaWRlbnRpdHkoKTtcbiAgICBsZXQgbXIgPSBpZGVudGl0eSgpO1xuICAgIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICByZXR1cm4gZnJvbUNsYXNzTmFtZSh3aGl0ZXNwYWNlTGVnYWN5W2BtJHtmb3JtYXRJbnRCb2ludCh2YWx1ZSl9YF0pO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKHZhbHVlLnRvcCkge1xuICAgICAgICAgIG10ID0gZnJvbUNsYXNzTmFtZShcbiAgICAgICAgICAgIHdoaXRlc3BhY2VMZWdhY3lbYG10JHtmb3JtYXRJbnRCb2ludCh2YWx1ZS50b3ApfWBdXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZS5ib3R0b20pIHtcbiAgICAgICAgICBtYiA9IGZyb21DbGFzc05hbWUoXG4gICAgICAgICAgICB3aGl0ZXNwYWNlTGVnYWN5W2BtYiR7Zm9ybWF0SW50Qm9pbnQodmFsdWUuYm90dG9tKX1gXVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUubGVmdCkge1xuICAgICAgICAgIG1sID0gZnJvbUNsYXNzTmFtZShcbiAgICAgICAgICAgIHZhbHVlLmxlZnQgPT09ICdhdXRvJ1xuICAgICAgICAgICAgICA/IHdoaXRlc3BhY2VMZWdhY3kubWxBdXRvXG4gICAgICAgICAgICAgIDogd2hpdGVzcGFjZUxlZ2FjeVtgbWwke2Zvcm1hdEludEJvaW50KHZhbHVlLmxlZnQpfWBdXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZS5yaWdodCkge1xuICAgICAgICAgIG1yID0gZnJvbUNsYXNzTmFtZShcbiAgICAgICAgICAgIHZhbHVlLnJpZ2h0ID09PSAnYXV0bydcbiAgICAgICAgICAgICAgPyB3aGl0ZXNwYWNlTGVnYWN5Lm1yQXV0b1xuICAgICAgICAgICAgICA6IHdoaXRlc3BhY2VMZWdhY3lbYG1yJHtmb3JtYXRJbnRCb2ludCh2YWx1ZS5yaWdodCl9YF1cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb25jYXQoW210LCBtYiwgbWwsIG1yXSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gaWRlbnRpdHkoKTtcbiAgICB9XG4gIH0sXG4gIG1hcmdpblN0YXJ0LFxuICBtYXJnaW5FbmQsXG4gIG1hcmdpbixcbiAgbWFyZ2luVG9wLFxuICBtYXJnaW5SaWdodCxcbiAgbWFyZ2luQm90dG9tLFxuICBtYXJnaW5MZWZ0LFxuICBzbU1hcmdpbixcbiAgc21NYXJnaW5Ub3AsXG4gIHNtTWFyZ2luUmlnaHQsXG4gIHNtTWFyZ2luQm90dG9tLFxuICBzbU1hcmdpbkxlZnQsXG4gIG1kTWFyZ2luLFxuICBtZE1hcmdpblRvcCxcbiAgbWRNYXJnaW5SaWdodCxcbiAgbWRNYXJnaW5Cb3R0b20sXG4gIG1kTWFyZ2luTGVmdCxcbiAgbGdNYXJnaW4sXG4gIGxnTWFyZ2luVG9wLFxuICBsZ01hcmdpblJpZ2h0LFxuICBsZ01hcmdpbkJvdHRvbSxcbiAgbGdNYXJnaW5MZWZ0LFxuICBtYXhIZWlnaHQ6IG1heEhlaWdodCA9PiBmcm9tSW5saW5lU3R5bGUoeyBtYXhIZWlnaHQgfSksXG4gIG1heFdpZHRoOiBtYXhXaWR0aCA9PiBmcm9tSW5saW5lU3R5bGUoeyBtYXhXaWR0aCB9KSxcbiAgbWluSGVpZ2h0OiBtaW5IZWlnaHQgPT4gZnJvbUlubGluZVN0eWxlKHsgbWluSGVpZ2h0IH0pLFxuICBtaW5XaWR0aDogbWluV2lkdGggPT4gZnJvbUlubGluZVN0eWxlKHsgbWluV2lkdGggfSksXG4gIG92ZXJmbG93OiBtYXBwaW5nKHtcbiAgICBoaWRkZW46IGxheW91dC5vdmVyZmxvd0hpZGRlbixcbiAgICBzY3JvbGw6IGxheW91dC5vdmVyZmxvd1Njcm9sbCxcbiAgICBhdXRvOiBsYXlvdXQub3ZlcmZsb3dBdXRvLFxuICAgIHNjcm9sbFg6IGxheW91dC5vdmVyZmxvd1Njcm9sbFgsXG4gICAgc2Nyb2xsWTogbGF5b3V0Lm92ZXJmbG93U2Nyb2xsWSxcbiAgICAvLyBkZWZhdWx0OiB2aXNpYmxlXG4gIH0pLFxuICBkZXByZWNhdGVkUGFkZGluZzogdmFsdWUgPT4ge1xuICAgIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICByZXR1cm4gZnJvbUNsYXNzTmFtZSh3aGl0ZXNwYWNlTGVnYWN5W2BwJHt2YWx1ZX1gXSk7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gY29uY2F0KFtcbiAgICAgICAgICB2YWx1ZS54XG4gICAgICAgICAgICA/IGZyb21DbGFzc05hbWUod2hpdGVzcGFjZUxlZ2FjeVtgcHgke3ZhbHVlLnh9YF0pXG4gICAgICAgICAgICA6IGlkZW50aXR5KCksXG4gICAgICAgICAgdmFsdWUueVxuICAgICAgICAgICAgPyBmcm9tQ2xhc3NOYW1lKHdoaXRlc3BhY2VMZWdhY3lbYHB5JHt2YWx1ZS55fWBdKVxuICAgICAgICAgICAgOiBpZGVudGl0eSgpLFxuICAgICAgICBdKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBpZGVudGl0eSgpO1xuICAgIH1cbiAgfSxcbiAgcGFkZGluZyxcbiAgcGFkZGluZ1gsXG4gIHBhZGRpbmdZLFxuICBzbVBhZGRpbmcsXG4gIHNtUGFkZGluZ1gsXG4gIHNtUGFkZGluZ1ksXG4gIG1kUGFkZGluZyxcbiAgbWRQYWRkaW5nWCxcbiAgbWRQYWRkaW5nWSxcbiAgbGdQYWRkaW5nLFxuICBsZ1BhZGRpbmdYLFxuICBsZ1BhZGRpbmdZLFxuICBwb3NpdGlvbjogbWFwcGluZyh7XG4gICAgYWJzb2x1dGU6IGxheW91dC5hYnNvbHV0ZSxcbiAgICByZWxhdGl2ZTogbGF5b3V0LnJlbGF0aXZlLFxuICAgIGZpeGVkOiBsYXlvdXQuZml4ZWQsXG4gICAgLy8gZGVmYXVsdDogc3RhdGljXG4gIH0pLFxuICByaWdodDogdG9nZ2xlKGxheW91dC5yaWdodDApLFxuICBzaGFwZTogbWFwcGluZyh7XG4gICAgY2lyY2xlOiBib3JkZXJzLmNpcmNsZSxcbiAgICBwaWxsOiBib3JkZXJzLnBpbGwsXG4gICAgcm91bmRlZDogYm9yZGVycy5yb3VuZGVkLFxuICAgIHJvdW5kZWRCb3R0b206IGJvcmRlcnMucm91bmRlZEJvdHRvbSxcbiAgICByb3VuZGVkTGVmdDogYm9yZGVycy5yb3VuZGVkTGVmdCxcbiAgICByb3VuZGVkUmlnaHQ6IGJvcmRlcnMucm91bmRlZFJpZ2h0LFxuICAgIHJvdW5kZWRUb3A6IGJvcmRlcnMucm91bmRlZFRvcCxcbiAgICAvLyBkZWZhdWx0OiBzcXVhcmVcbiAgfSksXG4gIHRvcDogdG9nZ2xlKGxheW91dC50b3AwKSxcbiAgd2lkdGg6IHdpZHRoID0+IGZyb21JbmxpbmVTdHlsZSh7IHdpZHRoIH0pLFxuICB3cmFwOiB0b2dnbGUobGF5b3V0LmZsZXhXcmFwKSxcbiAgZGFuZ2Vyb3VzbHlTZXRJbmxpbmVTdHlsZTogdmFsdWUgPT5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbiAgICB2YWx1ZSAmJiB2YWx1ZS5fX3N0eWxlID8gZnJvbUlubGluZVN0eWxlKHZhbHVlLl9fc3R5bGUpIDogaWRlbnRpdHkoKSxcbn07XG5cbi8qXG5cbiMgVGhlIENvbXBvbmVudFxuXG4qL1xuXG5jb25zdCBjb250YWlucyA9IChrZXksIGFycikgPT4gYXJyLmluZGV4T2Yoa2V5KSA+PSAwO1xuY29uc3Qgb21pdCA9IChrZXlzLCBvYmopID0+XG4gIE9iamVjdC5rZXlzKG9iaikucmVkdWNlKChhY2MsIGspID0+IHtcbiAgICBpZiAoY29udGFpbnMoaywga2V5cykpIHtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAuLi5hY2MsXG4gICAgICBba106IG9ialtrXSxcbiAgICB9O1xuICB9LCB7fSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJveCh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9OiBQcm9wVHlwZSkge1xuICAvLyBGbG93IGNhbid0IHJlYXNvbiBhYm91dCB0aGUgY29uc3RhbnQgbmF0dXJlIG9mIE9iamVjdC5rZXlzIHNvIHdlIGNhbid0IHVzZVxuICAvLyBhIGZ1bmN0aW9uYWwgKHJlZHVjZSkgc3R5bGUgaGVyZS5cblxuICAvLyBCb3ggaXMgYSBcInBhc3MtdGhyb3VnaFwiIGNvbXBvbmVudCwgbWVhbmluZyB0aGF0IGlmIHlvdSBwYXNzIHByb3BlcnRpZXMgdG9cbiAgLy8gaXQgdGhhdCBpdCBkb2Vzbid0IGtub3cgYWJvdXQgKGBhcmlhLWxhYmVsYCBmb3IgaW5zdGFuY2UpIGl0IHBhc3Nlc1xuICAvLyBkaXJlY3RseSBiYWNrIHRvIHRoZSB1bmRlcmx5aW5nIGA8ZGl2Lz5gLiBUaGF0J3MgZ2VuZXJhbGx5IHVzZWZ1bCwgYnV0XG4gIC8vIHdlJ2QgYWxzbyBsaWtlIHRvIHN0cmlwIG91dCBhIGZldyBuYXVnaHR5IHByb3BlcnRpZXMgdGhhdCBicmVhayBzdHlsZVxuICAvLyBlbmNhcHN1bGF0aW9uIChjbGFzc05hbWUsIHN0eWxlKSBvciBhY2Nlc3NpYmlsaXR5IChvbkNsaWNrKS5cbiAgbGV0IGJsYWNrbGlzdCA9IFsnb25DbGljaycsICdjbGFzc05hbWUnLCAnc3R5bGUnXTtcblxuICAvLyBBbGwgQm94J3MgYXJlIGJveC1zaXplZCBieSBkZWZhdWx0LCBzbyB3ZSBzdGFydCBvZmYgYnVpbGRpbmcgdXAgdGhlIHN0eWxlc1xuICAvLyB0byBiZSBhcHBsaWVkIHdpdGggYSBCb3ggYmFzZSBjbGFzcy5cbiAgbGV0IHMgPSBmcm9tQ2xhc3NOYW1lKHN0eWxlcy5ib3gpO1xuXG4gIC8vIFRoaXMgbG9vcHMgdGhyb3VnaCBlYWNoIHByb3BlcnR5IGFuZCBpZiBpdCBleGlzdHMgaW4gdGhlIHByZXZpb3VzbHlcbiAgLy8gZGVmaW5lZCB0cmFuc2Zvcm0gbWFwLCBjb25jYXRlbnRlcyB0aGUgcmVzdWx0aW5nIHN0eWxlcyB0byB0aGUgYmFzZVxuICAvLyBzdHlsZXMuIElmIHRoZXJlJ3MgYSBtYXRjaCwgd2UgYWxzbyBkb24ndCBwYXNzIHRocm91Z2ggdGhhdCBwcm9wZXJ0eS4gVGhpc1xuICAvLyBtZWFucyBCb3gncyBydW50aW1lIGlzIG9ubHkgZGVwZW5kZW50IG9uIHRoZSBudW1iZXIgb2YgcHJvcGVydGllcyBwYXNzZWRcbiAgLy8gdG8gaXQgKHdoaWNoIGlzIHR5cGljYWxseSBzbWFsbCkgaW5zdGVhZCBvZiB0aGUgdG90YWwgbnVtYmVyIG9mIHBvc3NpYmxlXG4gIC8vIHByb3BlcnRpZXMgKH4zMCBvciBzbykuIFdoaWxlIGl0IG1heSB+ZmVlbH4gbGlrZSBCb3ggaXMgaW5uZWZmaWNpZW50LCBpdHNcbiAgLy8gYmlnZ2VzdCBwZXJmb3JtYW5jZSBpbXBhY3QgaXMgb24gc3RhcnR1cCB0aW1lIGJlY2F1c2UgdGhlcmUncyBzbyBtdWNoIGNvZGVcbiAgLy8gaGVyZS5cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgZm9yIChjb25zdCBwcm9wIGluIHByb3BzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwcm9wVG9GbiwgcHJvcCkpIHtcbiAgICAgIGNvbnN0IGZuID0gcHJvcFRvRm5bcHJvcF07XG4gICAgICBjb25zdCB2YWx1ZSA9IHByb3BzW3Byb3BdO1xuICAgICAgYmxhY2tsaXN0ID0gYmxhY2tsaXN0LmNvbmNhdChwcm9wKTtcbiAgICAgIHMgPSBjb25jYXQoW3MsIGZuKHZhbHVlKV0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFuZC4uLiBtYWdpYyFcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHsuLi5vbWl0KGJsYWNrbGlzdCwgcHJvcHMpfSB7Li4udG9Qcm9wcyhzKX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbi8qXG5cbiMgUHJvcFR5cGVzXG5cbkFuZCB3ZSdyZSBkb25lIGhlcmUgOilcblxuKi9cblxuY29uc3QgQ29sdW1uUHJvcFR5cGUgPSBQcm9wVHlwZXMub25lT2YoW1xuICAwLFxuICAxLFxuICAyLFxuICAzLFxuICA0LFxuICA1LFxuICA2LFxuICA3LFxuICA4LFxuICA5LFxuICAxMCxcbiAgMTEsXG4gIDEyLFxuXSk7XG5cbmNvbnN0IE1hcmdpblByb3BUeXBlID0gUHJvcFR5cGVzLm9uZU9mKFtcbiAgLTEyLFxuICAtMTEsXG4gIC0xMCxcbiAgLTksXG4gIC04LFxuICAtNyxcbiAgLTYsXG4gIC01LFxuICAtNCxcbiAgLTMsXG4gIC0yLFxuICAtMSxcbiAgMCxcbiAgMSxcbiAgMixcbiAgMyxcbiAgNCxcbiAgNSxcbiAgNixcbiAgNyxcbiAgOCxcbiAgOSxcbiAgMTAsXG4gIDExLFxuICAxMixcbl0pO1xuXG5jb25zdCBQYWRkaW5nUHJvcFR5cGUgPSBQcm9wVHlwZXMub25lT2YoW1xuICAwLFxuICAxLFxuICAyLFxuICAzLFxuICA0LFxuICA1LFxuICA2LFxuICA3LFxuICA4LFxuICA5LFxuICAxMCxcbiAgMTEsXG4gIDEyLFxuXSk7XG5cbkJveC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgZGFuZ2Vyb3VzbHlTZXRJbmxpbmVTdHlsZTogUHJvcFR5cGVzLmV4YWN0KHtcbiAgICBfX3N0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICB9KSxcblxuICB4czogUHJvcFR5cGVzLmV4YWN0KHtcbiAgICBkaXNwbGF5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgUHJvcFR5cGVzLm9uZU9mKFsnZmxleCcsICdmbGV4Q29sdW1uJywgJ2lubGluZUJsb2NrJ10pLFxuICAgIF0pLFxuICAgIGNvbHVtbjogUHJvcFR5cGVzLm51bWJlcixcbiAgfSksXG4gIHNtOiBQcm9wVHlwZXMuZXhhY3Qoe1xuICAgIGRpc3BsYXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgICBQcm9wVHlwZXMub25lT2YoWydmbGV4JywgJ2ZsZXhDb2x1bW4nLCAnaW5saW5lQmxvY2snXSksXG4gICAgXSksXG4gICAgY29sdW1uOiBQcm9wVHlwZXMubnVtYmVyLFxuICB9KSxcbiAgbWQ6IFByb3BUeXBlcy5leGFjdCh7XG4gICAgZGlzcGxheTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIFByb3BUeXBlcy5vbmVPZihbJ2ZsZXgnLCAnZmxleENvbHVtbicsICdpbmxpbmVCbG9jayddKSxcbiAgICBdKSxcbiAgICBjb2x1bW46IFByb3BUeXBlcy5udW1iZXIsXG4gIH0pLFxuICBsZzogUHJvcFR5cGVzLmV4YWN0KHtcbiAgICBkaXNwbGF5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgUHJvcFR5cGVzLm9uZU9mKFsnZmxleCcsICdmbGV4Q29sdW1uJywgJ2lubGluZUJsb2NrJ10pLFxuICAgIF0pLFxuICAgIGNvbHVtbjogUHJvcFR5cGVzLm51bWJlcixcbiAgfSksXG4gIGRlcHJlY2F0ZWRNYXJnaW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHRvcDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIGJvdHRvbTogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIGxlZnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5vbmVPZihbJ2F1dG8nXSldKSxcbiAgICAgIHJpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMub25lT2YoWydhdXRvJ10pXSksXG4gICAgfSksXG4gIF0pLFxuICBkZXByZWNhdGVkUGFkZGluZzogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgeDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIHk6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgfSksXG4gIF0pLFxuXG4gIGRpc3BsYXk6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgJ25vbmUnLFxuICAgICdmbGV4JyxcbiAgICAnYmxvY2snLFxuICAgICdpbmxpbmVCbG9jaycsXG4gICAgJ3Zpc3VhbGx5SGlkZGVuJyxcbiAgXSksXG4gIGRpcmVjdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsncm93JywgJ2NvbHVtbiddKSxcbiAgY29sdW1uOiBDb2x1bW5Qcm9wVHlwZSxcblxuICBzbURpc3BsYXk6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgJ25vbmUnLFxuICAgICdmbGV4JyxcbiAgICAnYmxvY2snLFxuICAgICdpbmxpbmVCbG9jaycsXG4gICAgJ3Zpc3VhbGx5SGlkZGVuJyxcbiAgXSksXG4gIHNtRGlyZWN0aW9uOiBQcm9wVHlwZXMub25lT2YoWydyb3cnLCAnY29sdW1uJ10pLFxuICBzbUNvbHVtbjogQ29sdW1uUHJvcFR5cGUsXG5cbiAgbWREaXNwbGF5OiBQcm9wVHlwZXMub25lT2YoW1xuICAgICdub25lJyxcbiAgICAnZmxleCcsXG4gICAgJ2Jsb2NrJyxcbiAgICAnaW5saW5lQmxvY2snLFxuICAgICd2aXN1YWxseUhpZGRlbicsXG4gIF0pLFxuICBtZERpcmVjdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsncm93JywgJ2NvbHVtbiddKSxcbiAgbWRDb2x1bW46IENvbHVtblByb3BUeXBlLFxuXG4gIGxnRGlzcGxheTogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAnbm9uZScsXG4gICAgJ2ZsZXgnLFxuICAgICdibG9jaycsXG4gICAgJ2lubGluZUJsb2NrJyxcbiAgICAndmlzdWFsbHlIaWRkZW4nLFxuICBdKSxcbiAgbGdEaXJlY3Rpb246IFByb3BUeXBlcy5vbmVPZihbJ3JvdycsICdjb2x1bW4nXSksXG4gIGxnQ29sdW1uOiBDb2x1bW5Qcm9wVHlwZSxcblxuICBhbGlnbkNvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgJ3N0YXJ0JyxcbiAgICAnZW5kJyxcbiAgICAnY2VudGVyJyxcbiAgICAnYmV0d2VlbicsXG4gICAgJ2Fyb3VuZCcsXG4gICAgJ3N0cmV0Y2gnLFxuICBdKSxcbiAgYWxpZ25JdGVtczogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAnc3RhcnQnLFxuICAgICdlbmQnLFxuICAgICdjZW50ZXInLFxuICAgICdiYXNlbGluZScsXG4gICAgJ3N0cmV0Y2gnLFxuICBdKSxcbiAgYWxpZ25TZWxmOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICdhdXRvJyxcbiAgICAnc3RhcnQnLFxuICAgICdlbmQnLFxuICAgICdjZW50ZXInLFxuICAgICdiYXNlbGluZScsXG4gICAgJ3N0cmV0Y2gnLFxuICBdKSxcbiAgYm90dG9tOiBQcm9wVHlwZXMuYm9vbCxcbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgJ2JsdWUnLFxuICAgICdkYXJrR3JheScsXG4gICAgJ2RhcmtXYXNoJyxcbiAgICAnZWdncGxhbnQnLFxuICAgICdncmF5JyxcbiAgICAnZ3JlZW4nLFxuICAgICdsaWdodEdyYXknLFxuICAgICdsaWdodFdhc2gnLFxuICAgICdtYXJvb24nLFxuICAgICdtaWRuaWdodCcsXG4gICAgJ25hdnknLFxuICAgICdvbGl2ZScsXG4gICAgJ29yYW5nZScsXG4gICAgJ29yY2hpZCcsXG4gICAgJ3BpbmUnLFxuICAgICdwdXJwbGUnLFxuICAgICdyZWQnLFxuICAgICd0cmFuc3BhcmVudCcsXG4gICAgJ3dhdGVybWVsb24nLFxuICAgICd3aGl0ZScsXG4gIF0pLFxuICBmaXQ6IFByb3BUeXBlcy5ib29sLFxuICBmbGV4OiBQcm9wVHlwZXMub25lT2YoWydncm93JywgJ3NocmluaycsICdub25lJ10pLFxuICBncm93OiBQcm9wVHlwZXMuYm9vbCxcbiAgaGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIGp1c3RpZnlDb250ZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgICdzdGFydCcsXG4gICAgJ2VuZCcsXG4gICAgJ2NlbnRlcicsXG4gICAgJ2JldHdlZW4nLFxuICAgICdhcm91bmQnLFxuICBdKSxcbiAgbGVmdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgbWFyZ2luU3RhcnQ6IE1hcmdpblByb3BUeXBlLFxuICBtYXJnaW5FbmQ6IE1hcmdpblByb3BUeXBlLFxuXG4gIG1hcmdpbjogTWFyZ2luUHJvcFR5cGUsXG4gIG1hcmdpblRvcDogTWFyZ2luUHJvcFR5cGUsXG4gIG1hcmdpblJpZ2h0OiBNYXJnaW5Qcm9wVHlwZSxcbiAgbWFyZ2luQm90dG9tOiBNYXJnaW5Qcm9wVHlwZSxcbiAgbWFyZ2luTGVmdDogTWFyZ2luUHJvcFR5cGUsXG5cbiAgc21NYXJnaW46IE1hcmdpblByb3BUeXBlLFxuICBzbU1hcmdpblRvcDogTWFyZ2luUHJvcFR5cGUsXG4gIHNtTWFyZ2luUmlnaHQ6IE1hcmdpblByb3BUeXBlLFxuICBzbU1hcmdpbkJvdHRvbTogTWFyZ2luUHJvcFR5cGUsXG4gIHNtTWFyZ2luTGVmdDogTWFyZ2luUHJvcFR5cGUsXG5cbiAgbWRNYXJnaW46IE1hcmdpblByb3BUeXBlLFxuICBtZE1hcmdpblRvcDogTWFyZ2luUHJvcFR5cGUsXG4gIG1kTWFyZ2luUmlnaHQ6IE1hcmdpblByb3BUeXBlLFxuICBtZE1hcmdpbkJvdHRvbTogTWFyZ2luUHJvcFR5cGUsXG4gIG1kTWFyZ2luTGVmdDogTWFyZ2luUHJvcFR5cGUsXG5cbiAgbGdNYXJnaW46IE1hcmdpblByb3BUeXBlLFxuICBsZ01hcmdpblRvcDogTWFyZ2luUHJvcFR5cGUsXG4gIGxnTWFyZ2luUmlnaHQ6IE1hcmdpblByb3BUeXBlLFxuICBsZ01hcmdpbkJvdHRvbTogTWFyZ2luUHJvcFR5cGUsXG4gIGxnTWFyZ2luTGVmdDogTWFyZ2luUHJvcFR5cGUsXG5cbiAgbWF4SGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIG1heFdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIG1pbkhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBtaW5XaWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gIG92ZXJmbG93OiBQcm9wVHlwZXMub25lT2YoW1xuICAgICd2aXNpYmxlJyxcbiAgICAnaGlkZGVuJyxcbiAgICAnc2Nyb2xsJyxcbiAgICAnc2Nyb2xsWCcsXG4gICAgJ3Njcm9sbFknLFxuICAgICdhdXRvJyxcbiAgXSksXG5cbiAgcGFkZGluZzogUGFkZGluZ1Byb3BUeXBlLFxuICBwYWRkaW5nWDogUGFkZGluZ1Byb3BUeXBlLFxuICBwYWRkaW5nWTogUGFkZGluZ1Byb3BUeXBlLFxuXG4gIHNtUGFkZGluZzogUGFkZGluZ1Byb3BUeXBlLFxuICBzbVBhZGRpbmdYOiBQYWRkaW5nUHJvcFR5cGUsXG4gIHNtUGFkZGluZ1k6IFBhZGRpbmdQcm9wVHlwZSxcblxuICBtZFBhZGRpbmc6IFBhZGRpbmdQcm9wVHlwZSxcbiAgbWRQYWRkaW5nWDogUGFkZGluZ1Byb3BUeXBlLFxuICBtZFBhZGRpbmdZOiBQYWRkaW5nUHJvcFR5cGUsXG5cbiAgbGdQYWRkaW5nOiBQYWRkaW5nUHJvcFR5cGUsXG4gIGxnUGFkZGluZ1g6IFBhZGRpbmdQcm9wVHlwZSxcbiAgbGdQYWRkaW5nWTogUGFkZGluZ1Byb3BUeXBlLFxuXG4gIHBvc2l0aW9uOiBQcm9wVHlwZXMub25lT2YoWydzdGF0aWMnLCAnYWJzb2x1dGUnLCAncmVsYXRpdmUnLCAnZml4ZWQnXSksXG4gIHJpZ2h0OiBQcm9wVHlwZXMuYm9vbCxcbiAgc2hhcGU6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgJ3NxdWFyZScsXG4gICAgJ3JvdW5kZWQnLFxuICAgICdwaWxsJyxcbiAgICAnY2lyY2xlJyxcbiAgICAncm91bmRlZFRvcCcsXG4gICAgJ3JvdW5kZWRCb3R0b20nLFxuICAgICdyb3VuZGVkTGVmdCcsXG4gICAgJ3JvdW5kZWRSaWdodCcsXG4gIF0pLFxuICB0b3A6IFByb3BUeXBlcy5ib29sLFxuICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICB3cmFwOiBQcm9wVHlwZXMuYm9vbCxcbn07XG4iLCIvLyBAZmxvd1xuaW1wb3J0IGFkZCBmcm9tICcuL2FkZC5zdmcnO1xuaW1wb3J0IGFkZENpcmNsZSBmcm9tICcuL2FkZC1jaXJjbGUuc3ZnJztcbmltcG9ydCBhZGRQaW4gZnJvbSAnLi9hZGQtcGluLnN2Zyc7XG5pbXBvcnQgYW5nbGVkUGluIGZyb20gJy4vYW5nbGVkLXBpbi5zdmcnO1xuaW1wb3J0IGFycm93QmFjayBmcm9tICcuL2Fycm93LWJhY2suc3ZnJztcbmltcG9ydCBhcnJvd0NpcmNsZUZvcndhcmQgZnJvbSAnLi9hcnJvdy1jaXJjbGUtZm9yd2FyZC5zdmcnO1xuaW1wb3J0IGFycm93Q2lyY2xlRG93biBmcm9tICcuL2Fycm93LWNpcmNsZS1kb3duLnN2Zyc7XG5pbXBvcnQgYXJyb3dEb3duIGZyb20gJy4vYXJyb3ctZG93bi5zdmcnO1xuaW1wb3J0IGFycm93Rm9yd2FyZCBmcm9tICcuL2Fycm93LWZvcndhcmQuc3ZnJztcbmltcG9ydCBhcnJvd1VwIGZyb20gJy4vYXJyb3ctdXAuc3ZnJztcbmltcG9ydCBhcnJvd1VwUmlnaHQgZnJvbSAnLi9hcnJvdy11cC1yaWdodC5zdmcnO1xuaW1wb3J0IGJlbGwgZnJvbSAnLi9iZWxsLnN2Zyc7XG5pbXBvcnQgY2FtZXJhIGZyb20gJy4vY2FtZXJhLnN2Zyc7XG5pbXBvcnQgY2FtZXJhUm9sbCBmcm9tICcuL2NhbWVyYS1yb2xsLnN2Zyc7XG5pbXBvcnQgY2FuY2VsIGZyb20gJy4vY2FuY2VsLnN2Zyc7XG5pbXBvcnQgY2hlY2sgZnJvbSAnLi9jaGVjay5zdmcnO1xuaW1wb3J0IGNoZWNrQ2lyY2xlIGZyb20gJy4vY2hlY2stY2lyY2xlLnN2Zyc7XG5pbXBvcnQgY2lyY2xlT3V0bGluZSBmcm9tICcuL2NpcmNsZS1vdXRsaW5lLnN2Zyc7XG5pbXBvcnQgY2xlYXIgZnJvbSAnLi9jbGVhci5zdmcnO1xuaW1wb3J0IGNsb2NrIGZyb20gJy4vY2xvY2suc3ZnJztcbmltcG9ydCBjb2cgZnJvbSAnLi9jb2cuc3ZnJztcbmltcG9ydCBjb21wYXNzIGZyb20gJy4vY29tcGFzcy5zdmcnO1xuaW1wb3J0IGNvbXBvc2UgZnJvbSAnLi9jb21wb3NlLnN2Zyc7XG5pbXBvcnQgZGFzaCBmcm9tICcuL2Rhc2guc3ZnJztcbmltcG9ydCBkb3dubG9hZCBmcm9tICcuL2Rvd25sb2FkLnN2Zyc7XG5pbXBvcnQgZWRpdCBmcm9tICcuL2VkaXQuc3ZnJztcbmltcG9ydCBlbGxpcHNpcyBmcm9tICcuL2VsbGlwc2lzLnN2Zyc7XG5pbXBvcnQgZWxsaXBzaXNDaXJjbGVPdXRsaW5lIGZyb20gJy4vZWxsaXBzaXMtY2lyY2xlLW91dGxpbmUuc3ZnJztcbmltcG9ydCBlbnZlbG9wZSBmcm9tICcuL2VudmVsb3BlLnN2Zyc7XG5pbXBvcnQgZXllIGZyb20gJy4vZXllLnN2Zyc7XG5pbXBvcnQgZmFjZWJvb2sgZnJvbSAnLi9mYWNlYm9vay5zdmcnO1xuaW1wb3J0IGZhY2VIYXBweSBmcm9tICcuL2ZhY2UtaGFwcHkuc3ZnJztcbmltcG9ydCBmYWNlU2FkIGZyb20gJy4vZmFjZS1zYWQuc3ZnJztcbmltcG9ydCBmYWNlU21pbGV5IGZyb20gJy4vZmFjZS1zbWlsZXkuc3ZnJztcbmltcG9ydCBmaWx0ZXIgZnJvbSAnLi9maWx0ZXIuc3ZnJztcbmltcG9ydCBmbGFnIGZyb20gJy4vZmxhZy5zdmcnO1xuaW1wb3J0IGZsYXNobGlnaHQgZnJvbSAnLi9mbGFzaGxpZ2h0LnN2Zyc7XG5pbXBvcnQgZ2lmIGZyb20gJy4vZ2lmLnN2Zyc7XG5pbXBvcnQgZ2xvYmUgZnJvbSAnLi9nbG9iZS5zdmcnO1xuaW1wb3J0IGdsb2JlQ2hlY2tlZCBmcm9tICcuL2dsb2JlLWNoZWNrZWQuc3ZnJztcbmltcG9ydCBnbWFpbCBmcm9tICcuL2dtYWlsLnN2Zyc7XG5pbXBvcnQgZ29vZ2xlUGx1cyBmcm9tICcuL2dvb2dsZS1wbHVzLnN2Zyc7XG5pbXBvcnQgZ3JhcGhCYXIgZnJvbSAnLi9ncmFwaC1iYXIuc3ZnJztcbmltcG9ydCBrbm9vcCBmcm9tICcuL2tub29wLnN2Zyc7XG5pbXBvcnQgbGlnaHRidWxiIGZyb20gJy4vbGlnaHRidWxiLnN2Zyc7XG5pbXBvcnQgaGFuZGxlIGZyb20gJy4vaGFuZGxlLnN2Zyc7XG5pbXBvcnQgaGFuZFBvaW50aW5nIGZyb20gJy4vaGFuZC1wb2ludGluZy5zdmcnO1xuaW1wb3J0IGhlYXJ0IGZyb20gJy4vaGVhcnQuc3ZnJztcbmltcG9ydCBoZWFydEJyb2tlbiBmcm9tICcuL2hlYXJ0LWJyb2tlbi5zdmcnO1xuaW1wb3J0IGxpbmsgZnJvbSAnLi9saW5rLnN2Zyc7XG5pbXBvcnQgbG9jYXRpb24gZnJvbSAnLi9sb2NhdGlvbi5zdmcnO1xuaW1wb3J0IGxvY2sgZnJvbSAnLi9sb2NrLnN2Zyc7XG5pbXBvcnQgbWF4aW1pemUgZnJvbSAnLi9tYXhpbWl6ZS5zdmcnO1xuaW1wb3J0IG1lZ2FwaG9uZSBmcm9tICcuL21lZ2FwaG9uZS5zdmcnO1xuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51LnN2Zyc7XG5pbXBvcnQgbWluaW1pemUgZnJvbSAnLi9taW5pbWl6ZS5zdmcnO1xuaW1wb3J0IG1vdmUgZnJvbSAnLi9tb3ZlLnN2Zyc7XG5pbXBvcnQgbXV0ZSBmcm9tICcuL211dGUuc3ZnJztcbmltcG9ydCBwYXVzZSBmcm9tICcuL3BhdXNlLnN2Zyc7XG5pbXBvcnQgcGVvcGxlIGZyb20gJy4vcGVvcGxlLnN2Zyc7XG5pbXBvcnQgcGVyc29uIGZyb20gJy4vcGVyc29uLnN2Zyc7XG5pbXBvcnQgcGVyc29uQWRkIGZyb20gJy4vcGVyc29uLWFkZC5zdmcnO1xuaW1wb3J0IHBpbiBmcm9tICcuL3Bpbi5zdmcnO1xuaW1wb3J0IHBpbkhpZGUgZnJvbSAnLi9waW4taGlkZS5zdmcnO1xuaW1wb3J0IHBpbnRlcmVzdCBmcm9tICcuL3BpbnRlcmVzdC5zdmcnO1xuaW1wb3J0IHBsYXkgZnJvbSAnLi9wbGF5LnN2Zyc7XG5pbXBvcnQgcXVlc3Rpb25NYXJrIGZyb20gJy4vcXVlc3Rpb24tbWFyay5zdmcnO1xuaW1wb3J0IHJlbW92ZSBmcm9tICcuL3JlbW92ZS5zdmcnO1xuaW1wb3J0IHJlcG9ydCBmcm9tICcuL3JlcG9ydC5zdmcnO1xuaW1wb3J0IHNlYXJjaCBmcm9tICcuL3NlYXJjaC5zdmcnO1xuaW1wb3J0IHNlbmQgZnJvbSAnLi9zZW5kLnN2Zyc7XG5pbXBvcnQgc2hhcmUgZnJvbSAnLi9zaGFyZS5zdmcnO1xuaW1wb3J0IHNob3BwaW5nQmFnIGZyb20gJy4vc2hvcHBpbmctYmFnLnN2Zyc7XG5pbXBvcnQgc21pbGV5IGZyb20gJy4vc21pbGV5LnN2Zyc7XG5pbXBvcnQgc21pbGV5T3V0bGluZSBmcm9tICcuL3NtaWxleS1vdXRsaW5lLnN2Zyc7XG5pbXBvcnQgc291bmQgZnJvbSAnLi9zb3VuZC5zdmcnO1xuaW1wb3J0IHNwZWVjaCBmcm9tICcuL3NwZWVjaC5zdmcnO1xuaW1wb3J0IHNwZWVjaEVsbGlwc2lzIGZyb20gJy4vc3BlZWNoLWVsbGlwc2lzLnN2Zyc7XG5pbXBvcnQgdGFnIGZyb20gJy4vdGFnLnN2Zyc7XG5pbXBvcnQgdGV4dEFsaWduQ2VudGVyIGZyb20gJy4vdGV4dC1hbGlnbi1jZW50ZXIuc3ZnJztcbmltcG9ydCB0ZXh0QWxpZ25MZWZ0IGZyb20gJy4vdGV4dC1hbGlnbi1sZWZ0LnN2Zyc7XG5pbXBvcnQgdGV4dEFsaWduUmlnaHQgZnJvbSAnLi90ZXh0LWFsaWduLXJpZ2h0LnN2Zyc7XG5pbXBvcnQgdHdpdHRlciBmcm9tICcuL3R3aXR0ZXIuc3ZnJztcbmltcG9ydCB2aWV3VHlwZURlZmF1bHQgZnJvbSAnLi92aWV3LXR5cGUtZGVmYXVsdC5zdmcnO1xuaW1wb3J0IHZpZXdUeXBlRGVuc2UgZnJvbSAnLi92aWV3LXR5cGUtZGVuc2Uuc3ZnJztcbmltcG9ydCB2aWV3VHlwZUxpc3QgZnJvbSAnLi92aWV3LXR5cGUtbGlzdC5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZCxcbiAgJ2FkZC1jaXJjbGUnOiBhZGRDaXJjbGUsXG4gICdhZGQtcGluJzogYWRkUGluLFxuICAnYW5nbGVkLXBpbic6IGFuZ2xlZFBpbixcbiAgJ2Fycm93LWJhY2snOiBhcnJvd0JhY2ssXG4gICdhcnJvdy1jaXJjbGUtZG93bic6IGFycm93Q2lyY2xlRG93bixcbiAgJ2Fycm93LWNpcmNsZS1mb3J3YXJkJzogYXJyb3dDaXJjbGVGb3J3YXJkLFxuICAnYXJyb3ctZG93bic6IGFycm93RG93bixcbiAgJ2Fycm93LWZvcndhcmQnOiBhcnJvd0ZvcndhcmQsXG4gICdhcnJvdy11cCc6IGFycm93VXAsXG4gICdhcnJvdy11cC1yaWdodCc6IGFycm93VXBSaWdodCxcbiAgYmVsbCxcbiAgY2FtZXJhLFxuICAnY2FtZXJhLXJvbGwnOiBjYW1lcmFSb2xsLFxuICBjYW5jZWwsXG4gIGNoZWNrLFxuICAnY2hlY2stY2lyY2xlJzogY2hlY2tDaXJjbGUsXG4gICdjaXJjbGUtb3V0bGluZSc6IGNpcmNsZU91dGxpbmUsXG4gIGNsZWFyLFxuICBjbG9jayxcbiAgY29nLFxuICBjb21wYXNzLFxuICBjb21wb3NlLFxuICBkYXNoLFxuICBkb3dubG9hZCxcbiAgZWRpdCxcbiAgZWxsaXBzaXMsXG4gICdlbGxpcHNpcy1jaXJjbGUtb3V0bGluZSc6IGVsbGlwc2lzQ2lyY2xlT3V0bGluZSxcbiAgZW52ZWxvcGUsXG4gIGV5ZSxcbiAgZmFjZWJvb2ssXG4gICdmYWNlLWhhcHB5JzogZmFjZUhhcHB5LFxuICAnZmFjZS1zYWQnOiBmYWNlU2FkLFxuICAnZmFjZS1zbWlsZXknOiBmYWNlU21pbGV5LFxuICBmaWx0ZXIsXG4gIGZsYWcsXG4gIGZsYXNobGlnaHQsXG4gIGdpZixcbiAgZ2xvYmUsXG4gICdnbG9iZS1jaGVja2VkJzogZ2xvYmVDaGVja2VkLFxuICBnbWFpbCxcbiAgJ2dvb2dsZS1wbHVzJzogZ29vZ2xlUGx1cyxcbiAgJ2dyYXBoLWJhcic6IGdyYXBoQmFyLFxuICBoYW5kbGUsXG4gICdoYW5kLXBvaW50aW5nJzogaGFuZFBvaW50aW5nLFxuICBoZWFydCxcbiAgJ2hlYXJ0LWJyb2tlbic6IGhlYXJ0QnJva2VuLFxuICBrbm9vcCxcbiAgbGlnaHRidWxiLFxuICBsaW5rLFxuICBsb2NhdGlvbixcbiAgbG9jayxcbiAgbWF4aW1pemUsXG4gIG1lZ2FwaG9uZSxcbiAgbWVudSxcbiAgbWluaW1pemUsXG4gIG1vdmUsXG4gIG11dGUsXG4gIHBhdXNlLFxuICBwZW9wbGUsXG4gIHBlcnNvbixcbiAgJ3BlcnNvbi1hZGQnOiBwZXJzb25BZGQsXG4gIHBpbixcbiAgJ3Bpbi1oaWRlJzogcGluSGlkZSxcbiAgcGludGVyZXN0LFxuICBwbGF5LFxuICAncXVlc3Rpb24tbWFyayc6IHF1ZXN0aW9uTWFyayxcbiAgcmVtb3ZlLFxuICByZXBvcnQsXG4gIHNlYXJjaCxcbiAgJ3Nob3BwaW5nLWJhZyc6IHNob3BwaW5nQmFnLFxuICBzbWlsZXksXG4gICdzbWlsZXktb3V0bGluZSc6IHNtaWxleU91dGxpbmUsXG4gIHNlbmQsXG4gIHNoYXJlLFxuICBzb3VuZCxcbiAgc3BlZWNoLFxuICAnc3BlZWNoLWVsbGlwc2lzJzogc3BlZWNoRWxsaXBzaXMsXG4gIHRhZyxcbiAgJ3RleHQtYWxpZ24tbGVmdCc6IHRleHRBbGlnbkxlZnQsXG4gICd0ZXh0LWFsaWduLWNlbnRlcic6IHRleHRBbGlnbkNlbnRlcixcbiAgJ3RleHQtYWxpZ24tcmlnaHQnOiB0ZXh0QWxpZ25SaWdodCxcbiAgdHdpdHRlcixcbiAgJ3ZpZXctdHlwZS1kZWZhdWx0Jzogdmlld1R5cGVEZWZhdWx0LFxuICAndmlldy10eXBlLWRlbnNlJzogdmlld1R5cGVEZW5zZSxcbiAgJ3ZpZXctdHlwZS1saXN0Jzogdmlld1R5cGVMaXN0LFxufTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSWNvbi5jc3MnO1xuaW1wb3J0IGljb25zIGZyb20gJy4vaWNvbnMvaW5kZXguanMnO1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuL0NvbG9ycy5jc3MnO1xuXG50eXBlIEljb25Qcm9wcyA9IHtcbiAgYWNjZXNzaWJpbGl0eUxhYmVsOiBzdHJpbmcsXG4gIGNvbG9yPzpcbiAgICB8ICdibHVlJ1xuICAgIHwgJ2RhcmtHcmF5J1xuICAgIHwgJ2VnZ3BsYW50J1xuICAgIHwgJ2dyYXknXG4gICAgfCAnZ3JlZW4nXG4gICAgfCAnbGlnaHRHcmF5J1xuICAgIHwgJ21hcm9vbidcbiAgICB8ICdtaWRuaWdodCdcbiAgICB8ICduYXZ5J1xuICAgIHwgJ29saXZlJ1xuICAgIHwgJ29yYW5nZSdcbiAgICB8ICdvcmNoaWQnXG4gICAgfCAncGluZSdcbiAgICB8ICdwdXJwbGUnXG4gICAgfCAncmVkJ1xuICAgIHwgJ3dhdGVybWVsb24nXG4gICAgfCAnd2hpdGUnLFxuICBpbmxpbmU/OiBib29sZWFuLFxuICBzaXplPzogbnVtYmVyIHwgc3RyaW5nLFxufTtcblxudHlwZSBJY29uTm9QYXRoID0ge1xuICBpY29uOiAkS2V5czx0eXBlb2YgaWNvbnM+LFxuICBkYW5nZXJvdXNseVNldFN2Z1BhdGg/OiBudWxsLFxufTtcblxudHlwZSBQYXRoTm9JY29uID0ge1xuICBpY29uPzogbnVsbCxcbiAgZGFuZ2Vyb3VzbHlTZXRTdmdQYXRoOiB7IF9fcGF0aDogc3RyaW5nIH0sXG59O1xuXG50eXBlIFByb3BzID0gSWNvblByb3BzICYgKFBhdGhOb0ljb24gfCBJY29uTm9QYXRoKTtcblxuY29uc3QgSWNvbk5hbWVzID0gT2JqZWN0LmtleXMoaWNvbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJY29uKHByb3BzOiBQcm9wcykge1xuICBjb25zdCB7XG4gICAgYWNjZXNzaWJpbGl0eUxhYmVsLFxuICAgIGNvbG9yID0gJ2dyYXknLFxuICAgIGljb24sXG4gICAgaW5saW5lLFxuICAgIHNpemUgPSAxNixcbiAgICBkYW5nZXJvdXNseVNldFN2Z1BhdGgsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBjcyA9IGNsYXNzbmFtZXMoc3R5bGVzLmljb24sIGNvbG9yc1tjb2xvcl0sIHtcbiAgICBbc3R5bGVzLmljb25CbG9ja106ICFpbmxpbmUsXG4gIH0pO1xuXG4gIGNvbnN0IHBhdGggPVxuICAgIChpY29uICYmIGljb25zW2ljb25dKSB8fFxuICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuICAgIChkYW5nZXJvdXNseVNldFN2Z1BhdGggJiYgZGFuZ2Vyb3VzbHlTZXRTdmdQYXRoLl9fcGF0aCkgfHxcbiAgICB1bmRlZmluZWQ7XG5cbiAgY29uc3QgYXJpYUhpZGRlbiA9IGFjY2Vzc2liaWxpdHlMYWJlbCA9PT0gJycgPyB0cnVlIDogbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIGNsYXNzTmFtZT17Y3N9XG4gICAgICBoZWlnaHQ9e3NpemV9XG4gICAgICB3aWR0aD17c2l6ZX1cbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgYXJpYS1oaWRkZW49e2FyaWFIaWRkZW59XG4gICAgICBhcmlhLWxhYmVsPXthY2Nlc3NpYmlsaXR5TGFiZWx9XG4gICAgICByb2xlPVwiaW1nXCJcbiAgICA+XG4gICAgICA8dGl0bGU+e2FjY2Vzc2liaWxpdHlMYWJlbH08L3RpdGxlPlxuICAgICAgPHBhdGggZD17cGF0aH0gLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cblxuSWNvbi5pY29ucyA9IEljb25OYW1lcztcblxuSWNvbi5wcm9wVHlwZXMgPSB7XG4gIGFjY2Vzc2liaWxpdHlMYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAnYmx1ZScsXG4gICAgJ2RhcmtHcmF5JyxcbiAgICAnZWdncGxhbnQnLFxuICAgICdncmF5JyxcbiAgICAnZ3JlZW4nLFxuICAgICdsaWdodEdyYXknLFxuICAgICdtYXJvb24nLFxuICAgICdtaWRuaWdodCcsXG4gICAgJ25hdnknLFxuICAgICdvbGl2ZScsXG4gICAgJ29yYW5nZScsXG4gICAgJ29yY2hpZCcsXG4gICAgJ3BpbmUnLFxuICAgICdwdXJwbGUnLFxuICAgICdyZWQnLFxuICAgICd3YXRlcm1lbG9uJyxcbiAgICAnd2hpdGUnLFxuICBdKSxcbiAgZGFuZ2Vyb3VzbHlTZXRTdmdQYXRoOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIF9fcGF0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgfSksXG4gIGljb246IFByb3BUeXBlcy5vbmVPZihJY29uTmFtZXMpLFxuICBpbmxpbmU6IFByb3BUeXBlcy5ib29sLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG59O1xuIiwiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQm94IGZyb20gJy4vQm94LmpzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9JbWFnZS5jc3MnO1xuXG5jb25zdCBzaG91bGRTY2FsZUltYWdlID0gZml0ID0+IGZpdCA9PT0gJ2NvdmVyJyB8fCBmaXQgPT09ICdjb250YWluJztcblxudHlwZSBQcm9wcyA9IHt8XG4gIGFsdDogc3RyaW5nLFxuICBjaGlsZHJlbj86IFJlYWN0Lk5vZGUsXG4gIGNvbG9yOiBzdHJpbmcsXG4gIGZpdDogJ2NvbnRhaW4nIHwgJ2NvdmVyJyB8ICdub25lJyxcbiAgbmF0dXJhbEhlaWdodDogbnVtYmVyLFxuICBuYXR1cmFsV2lkdGg6IG51bWJlcixcbiAgb25FcnJvcj86ICgpID0+IHZvaWQsXG4gIG9uTG9hZD86ICgpID0+IHZvaWQsXG4gIHNpemVzPzogc3RyaW5nLFxuICBzcmM6IHN0cmluZyxcbiAgc3JjU2V0Pzogc3RyaW5nLFxufH07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGFsdDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBjb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmaXQ6IFByb3BUeXBlcy5vbmVPZihbJ2NvbnRhaW4nLCAnY292ZXInLCAnbm9uZSddKSxcbiAgICBuYXR1cmFsSGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgbmF0dXJhbFdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgb25FcnJvcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Mb2FkOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBzaXplczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzcmM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBzcmNTZXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICBmaXQ6ICdub25lJyxcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAoc2hvdWxkU2NhbGVJbWFnZSh0aGlzLnByb3BzLmZpdCkpIHtcbiAgICAgIHRoaXMubG9hZEltYWdlKCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wczogUHJvcHMpIHtcbiAgICBjb25zdCB7IGZpdCwgc3JjIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChzaG91bGRTY2FsZUltYWdlKGZpdCkgJiYgcHJldlByb3BzLnNyYyAhPT0gc3JjKSB7XG4gICAgICB0aGlzLmxvYWRJbWFnZSgpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUxvYWQgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub25Mb2FkKSB7XG4gICAgICB0aGlzLnByb3BzLm9uTG9hZCgpO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVFcnJvciA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkVycm9yKSB7XG4gICAgICB0aGlzLnByb3BzLm9uRXJyb3IoKTtcbiAgICB9XG4gIH07XG5cbiAgbG9hZEltYWdlKCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgd2luZG93LkltYWdlKCk7XG4gICAgICBpbWFnZS5vbmxvYWQgPSB0aGlzLmhhbmRsZUxvYWQ7XG4gICAgICBpbWFnZS5vbmVycm9yID0gdGhpcy5oYW5kbGVFcnJvcjtcbiAgICAgIGltYWdlLnNyYyA9IHRoaXMucHJvcHMuc3JjO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBhbHQsXG4gICAgICBjb2xvcixcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgZml0LFxuICAgICAgbmF0dXJhbEhlaWdodCxcbiAgICAgIG5hdHVyYWxXaWR0aCxcbiAgICAgIHNpemVzLFxuICAgICAgc3JjLFxuICAgICAgc3JjU2V0LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgaXNTY2FsZWRJbWFnZSA9IHNob3VsZFNjYWxlSW1hZ2UoZml0KTtcbiAgICBjb25zdCBjaGlsZENvbnRlbnQgPSBjaGlsZHJlbiA/IChcbiAgICAgIDxCb3ggcG9zaXRpb249XCJhYnNvbHV0ZVwiIHRvcCBsZWZ0IGJvdHRvbSByaWdodCBvdmVyZmxvdz1cImhpZGRlblwiPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0JveD5cbiAgICApIDogbnVsbDtcblxuICAgIHJldHVybiBpc1NjYWxlZEltYWdlID8gKFxuICAgICAgPGRpdlxuICAgICAgICBhcmlhLWxhYmVsPXthbHR9XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW2ZpdF19XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcixcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJyR7c3JjfScpYCxcbiAgICAgICAgfX1cbiAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICA+XG4gICAgICAgIHtjaGlsZENvbnRlbnR9XG4gICAgICA8L2Rpdj5cbiAgICApIDogKFxuICAgICAgPEJveFxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbmxpbmVTdHlsZT17e1xuICAgICAgICAgIF9fc3R5bGU6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IsXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBgJHsobmF0dXJhbEhlaWdodCAvIG5hdHVyYWxXaWR0aCkgKiAxMDB9JWAsXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGFsdD17YWx0fVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmltZ31cbiAgICAgICAgICBvbkVycm9yPXt0aGlzLmhhbmRsZUVycm9yfVxuICAgICAgICAgIG9uTG9hZD17dGhpcy5oYW5kbGVMb2FkfVxuICAgICAgICAgIHNpemVzPXtzaXplc31cbiAgICAgICAgICBzcmM9e3NyY31cbiAgICAgICAgICBzcmNTZXQ9e3NyY1NldH1cbiAgICAgICAgLz5cbiAgICAgICAge2NoaWxkQ29udGVudH1cbiAgICAgIDwvQm94PlxuICAgICk7XG4gIH1cbn1cbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01hc2suY3NzJztcblxudHlwZSBQcm9wcyA9IHt8XG4gIGNoaWxkcmVuPzogUmVhY3QuTm9kZSxcbiAgaGVpZ2h0PzogbnVtYmVyIHwgc3RyaW5nLFxuICBzaGFwZT86ICdjaXJjbGUnIHwgJ3JvdW5kZWQnIHwgJ3NxdWFyZScsXG4gIHdpZHRoPzogbnVtYmVyIHwgc3RyaW5nLFxuICB3YXNoPzogYm9vbGVhbixcbnx9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXNrKHByb3BzOiBQcm9wcykge1xuICBjb25zdCB7IGNoaWxkcmVuLCBzaGFwZSA9ICdzcXVhcmUnLCB3aWR0aCwgaGVpZ2h0LCB3YXNoID0gZmFsc2UgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMuTWFzaywgc3R5bGVzW3NoYXBlXSl9IHN0eWxlPXt7IHdpZHRoLCBoZWlnaHQgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICB7d2FzaCAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndhc2h9IC8+fVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5NYXNrLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBoZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgc2hhcGU6IFByb3BUeXBlcy5vbmVPZihbJ2NpcmNsZScsICdyb3VuZGVkJywgJ3NxdWFyZSddKSxcbiAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgd2FzaDogUHJvcFR5cGVzLmJvb2wsXG59O1xuIiwiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQm94IGZyb20gJy4vQm94LmpzJztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbi5qcyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XG5pbXBvcnQgTWFzayBmcm9tICcuL01hc2suanMnO1xuaW1wb3J0IHR5cG9ncmFwaHkgZnJvbSAnLi9UeXBvZ3JhcGh5LmNzcyc7XG5cbmNvbnN0IFNxdWFyZSA9IChwcm9wczogKikgPT4gKFxuICA8Qm94IHsuLi5wcm9wc30gcG9zaXRpb249XCJyZWxhdGl2ZVwiPlxuICAgIDxCb3hcbiAgICAgIGRhbmdlcm91c2x5U2V0SW5saW5lU3R5bGU9e3sgX19zdHlsZTogeyBwYWRkaW5nQm90dG9tOiAnMTAwJScgfSB9fVxuICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgLz5cbiAgICA8Qm94IHBvc2l0aW9uPVwiYWJzb2x1dGVcIiB0b3AgbGVmdCBib3R0b20gcmlnaHQ+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9Cb3g+XG4gIDwvQm94PlxuKTtcblxuY29uc3QgRGVmYXVsdEF2YXRhciA9ICh7IG5hbWUgfTogeyBuYW1lOiBzdHJpbmcgfSkgPT4ge1xuICBjb25zdCBmaXJzdEluaXRpYWwgPSBuYW1lID8gWy4uLm5hbWVdWzBdLnRvVXBwZXJDYXNlKCkgOiAnJztcbiAgcmV0dXJuIChcbiAgICA8U3F1YXJlIGNvbG9yPVwiZ3JheVwiIHNoYXBlPVwiY2lyY2xlXCI+XG4gICAgICB7Zmlyc3RJbml0aWFsICYmIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgdmlld0JveD1cIi01MCAtNTAgMTAwIDEwMFwiXG4gICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXG4gICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIlxuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICA+XG4gICAgICAgICAgPHRpdGxlPntuYW1lfTwvdGl0bGU+XG4gICAgICAgICAgPHRleHRcbiAgICAgICAgICAgIGZvbnRTaXplPVwiNTBweFwiXG4gICAgICAgICAgICBmaWxsPVwiI2ZmZlwiXG4gICAgICAgICAgICBkb21pbmFudEJhc2VsaW5lPVwiY2VudHJhbFwiXG4gICAgICAgICAgICB0ZXh0QW5jaG9yPVwibWlkZGxlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17W1xuICAgICAgICAgICAgICB0eXBvZ3JhcGh5LmFudGlhbGlhc2VkLFxuICAgICAgICAgICAgICB0eXBvZ3JhcGh5LnNhbnNTZXJpZixcbiAgICAgICAgICAgICAgdHlwb2dyYXBoeS5sZWFkaW5nU21hbGwsXG4gICAgICAgICAgICAgIHR5cG9ncmFwaHkuZm9udFdlaWdodEJvbGQsXG4gICAgICAgICAgICBdLmpvaW4oJyAnKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Zmlyc3RJbml0aWFsfVxuICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgPC9zdmc+XG4gICAgICApfVxuICAgIDwvU3F1YXJlPlxuICApO1xufTtcblxudHlwZSBTdGF0ZSA9IHt8IGlzSW1hZ2VMb2FkZWQ6IGJvb2xlYW4gfH07XG5cbnR5cGUgQXZhdGFyUHJvcHMgPSB7fFxuICBuYW1lOiBzdHJpbmcsXG4gIG91dGxpbmU/OiBib29sZWFuLFxuICBzaXplPzogJ3NtJyB8ICdtZCcgfCAnbGcnLFxuICBzcmM/OiBzdHJpbmcsXG4gIHZlcmlmaWVkPzogYm9vbGVhbixcbnx9O1xuXG5jb25zdCBzaXplcyA9IHtcbiAgc206IDI0LFxuICBtZDogNDAsXG4gIGxnOiA3Mixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF2YXRhciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8QXZhdGFyUHJvcHMsIFN0YXRlPiB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG91dGxpbmU6IFByb3BUeXBlcy5ib29sLFxuICAgIHNyYzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydzbScsICdtZCcsICdsZyddKSxcbiAgICB2ZXJpZmllZDogUHJvcFR5cGVzLmJvb2wsXG4gIH07XG5cbiAgc3RhdGUgPSB7XG4gICAgaXNJbWFnZUxvYWRlZDogdHJ1ZSxcbiAgfTtcblxuICBoYW5kbGVJbWFnZUVycm9yID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGlzSW1hZ2VMb2FkZWQ6IGZhbHNlIH0pO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5hbWUsIG91dGxpbmUsIHNpemUsIHNyYywgdmVyaWZpZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBpc0ltYWdlTG9hZGVkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHdpZHRoID0gc2l6ZSA/IHNpemVzW3NpemVdIDogJzEwMCUnO1xuICAgIGNvbnN0IGhlaWdodCA9IHNpemUgPyBzaXplc1tzaXplXSA6ICcnO1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICB7Li4uKG91dGxpbmVcbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbmxpbmVTdHlsZToge1xuICAgICAgICAgICAgICAgIF9fc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogJzAgMCAwIDJweCAjZmZmJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuICAgICAgICAgIDoge30pfVxuICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgc2hhcGU9XCJjaXJjbGVcIlxuICAgICAgPlxuICAgICAgICB7c3JjICYmIGlzSW1hZ2VMb2FkZWQgPyAoXG4gICAgICAgICAgPE1hc2sgc2hhcGU9XCJjaXJjbGVcIiB3YXNoPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIGFsdD17bmFtZX1cbiAgICAgICAgICAgICAgY29sb3I9XCIjRUZFRkVGXCJcbiAgICAgICAgICAgICAgbmF0dXJhbEhlaWdodD17MX1cbiAgICAgICAgICAgICAgbmF0dXJhbFdpZHRoPXsxfVxuICAgICAgICAgICAgICBzcmM9e3NyY31cbiAgICAgICAgICAgICAgb25FcnJvcj17dGhpcy5oYW5kbGVJbWFnZUVycm9yfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L01hc2s+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPERlZmF1bHRBdmF0YXIgbmFtZT17bmFtZX0gLz5cbiAgICAgICAgKX1cbiAgICAgICAge3ZlcmlmaWVkICYmIChcbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcbiAgICAgICAgICAgIHdpZHRoPVwiMjAlXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjIwJVwiXG4gICAgICAgICAgICBtaW5XaWR0aD17OH1cbiAgICAgICAgICAgIG1pbkhlaWdodD17OH1cbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5saW5lU3R5bGU9e3tcbiAgICAgICAgICAgICAgX19zdHlsZToge1xuICAgICAgICAgICAgICAgIGJvdHRvbTogJzQlJyxcbiAgICAgICAgICAgICAgICByaWdodDogJzQlJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICAgIHNoYXBlPVwiY2lyY2xlXCJcbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbmxpbmVTdHlsZT17e1xuICAgICAgICAgICAgICAgIF9fc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogJzAgMCAwIDJweCAjZmZmJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcbiAgICAgICAgICAgICAgICBpY29uPVwiY2hlY2stY2lyY2xlXCJcbiAgICAgICAgICAgICAgICBhY2Nlc3NpYmlsaXR5TGFiZWw9XCJcIlxuICAgICAgICAgICAgICAgIHNpemU9XCIxMDAlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuICAgICAgPC9Cb3g+XG4gICAgKTtcbiAgfVxufVxuIiwiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi9Db2xvcnMuY3NzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UZXh0LmNzcyc7XG5pbXBvcnQgdHlwb2dyYXBoeSBmcm9tICcuL1R5cG9ncmFwaHkuY3NzJztcblxuY29uc3QgU0laRV9TQ0FMRTogeyBbc2l6ZTogP3N0cmluZ106IG51bWJlciB9ID0ge1xuICB4czogMSxcbiAgc206IDIsXG4gIG1kOiAzLFxuICBsZzogNCxcbiAgeGw6IDUsXG59O1xuXG50eXBlIFByb3BzID0ge3xcbiAgYWxpZ24/OiAnbGVmdCcgfCAncmlnaHQnIHwgJ2NlbnRlcicgfCAnanVzdGlmeScsXG4gIGJvbGQ/OiBib29sZWFuLFxuICBjaGlsZHJlbj86IFJlYWN0Lk5vZGUsXG4gIGNvbG9yPzpcbiAgICB8ICdncmVlbidcbiAgICB8ICdwaW5lJ1xuICAgIHwgJ29saXZlJ1xuICAgIHwgJ2JsdWUnXG4gICAgfCAnbmF2eSdcbiAgICB8ICdtaWRuaWdodCdcbiAgICB8ICdwdXJwbGUnXG4gICAgfCAnb3JjaGlkJ1xuICAgIHwgJ2VnZ3BsYW50J1xuICAgIHwgJ21hcm9vbidcbiAgICB8ICd3YXRlcm1lbG9uJ1xuICAgIHwgJ29yYW5nZSdcbiAgICB8ICdkYXJrR3JheSdcbiAgICB8ICdncmF5J1xuICAgIHwgJ2xpZ2h0R3JheSdcbiAgICB8ICdyZWQnXG4gICAgfCAnd2hpdGUnLFxuICBpbmxpbmU/OiBib29sZWFuLFxuICBpdGFsaWM/OiBib29sZWFuLFxuICBvdmVyZmxvdz86ICdub3JtYWwnIHwgJ2JyZWFrV29yZCcsXG4gIHNpemU/OiAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyxcbiAgc21TaXplPzogJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcsXG4gIG1kU2l6ZT86ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnLFxuICBsZ1NpemU/OiAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyxcbiAgbGVhZGluZz86ICd0YWxsJyB8ICdzaG9ydCcsXG4gIHRydW5jYXRlPzogYm9vbGVhbixcbiAgX19kYW5nZXJvdXNseUluY3JlYXNlTGluZUhlaWdodD86IGJvb2xlYW4sXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGV4dCh7XG4gIGFsaWduID0gJ2xlZnQnLFxuICBib2xkID0gZmFsc2UsXG4gIGNoaWxkcmVuLFxuICBjb2xvciA9ICdkYXJrR3JheScsXG4gIGlubGluZSA9IGZhbHNlLFxuICBpdGFsaWMgPSBmYWxzZSxcbiAgb3ZlcmZsb3cgPSAnYnJlYWtXb3JkJyxcbiAgc2l6ZSA9ICdtZCcsXG4gIHNtU2l6ZSxcbiAgbWRTaXplLFxuICBsZ1NpemUsXG4gIGxlYWRpbmcgPSAnc2hvcnQnLFxuICB0cnVuY2F0ZSA9IGZhbHNlLFxuICBfX2Rhbmdlcm91c2x5SW5jcmVhc2VMaW5lSGVpZ2h0ID0gZmFsc2UsXG59OiBQcm9wcykge1xuICBjb25zdCBzY2FsZSA9IFNJWkVfU0NBTEVbc2l6ZV07XG4gIGNvbnN0IHNtU2NhbGUgPSBTSVpFX1NDQUxFW3NtU2l6ZV07XG4gIGNvbnN0IG1kU2NhbGUgPSBTSVpFX1NDQUxFW21kU2l6ZV07XG4gIGNvbnN0IGxnU2NhbGUgPSBTSVpFX1NDQUxFW2xnU2l6ZV07XG5cbiAgY29uc3QgY3MgPSBjeChcbiAgICBzdHlsZXMuVGV4dCxcbiAgICBzdHlsZXNbYGZvbnRTaXplJHtzY2FsZX1gXSxcbiAgICBsZ1NpemUgJiYgc3R5bGVzW2BsZ0ZvbnRTaXplJHtsZ1NjYWxlfWBdLFxuICAgIG1kU2l6ZSAmJiBzdHlsZXNbYG1kRm9udFNpemUke21kU2NhbGV9YF0sXG4gICAgc21TaXplICYmIHN0eWxlc1tgc21Gb250U2l6ZSR7c21TY2FsZX1gXSxcbiAgICBjb2xvciA9PT0gJ2JsdWUnICYmIGNvbG9ycy5ibHVlLFxuICAgIGNvbG9yID09PSAnZGFya0dyYXknICYmIGNvbG9ycy5kYXJrR3JheSxcbiAgICBjb2xvciA9PT0gJ2VnZ3BsYW50JyAmJiBjb2xvcnMuZWdncGxhbnQsXG4gICAgY29sb3IgPT09ICdncmF5JyAmJiBjb2xvcnMuZ3JheSxcbiAgICBjb2xvciA9PT0gJ2dyZWVuJyAmJiBjb2xvcnMuZ3JlZW4sXG4gICAgY29sb3IgPT09ICdsaWdodEdyYXknICYmIGNvbG9ycy5saWdodEdyYXksXG4gICAgY29sb3IgPT09ICdtYXJvb24nICYmIGNvbG9ycy5tYXJvb24sXG4gICAgY29sb3IgPT09ICdtaWRuaWdodCcgJiYgY29sb3JzLm1pZG5pZ2h0LFxuICAgIGNvbG9yID09PSAnbmF2eScgJiYgY29sb3JzLm5hdnksXG4gICAgY29sb3IgPT09ICdvbGl2ZScgJiYgY29sb3JzLm9saXZlLFxuICAgIGNvbG9yID09PSAnb3JhbmdlJyAmJiBjb2xvcnMub3JhbmdlLFxuICAgIGNvbG9yID09PSAnb3JjaGlkJyAmJiBjb2xvcnMub3JjaGlkLFxuICAgIGNvbG9yID09PSAncGluZScgJiYgY29sb3JzLnBpbmUsXG4gICAgY29sb3IgPT09ICdwdXJwbGUnICYmIGNvbG9ycy5wdXJwbGUsXG4gICAgY29sb3IgPT09ICdyZWQnICYmIGNvbG9ycy5yZWQsXG4gICAgY29sb3IgPT09ICd3YXRlcm1lbG9uJyAmJiBjb2xvcnMud2F0ZXJtZWxvbixcbiAgICBjb2xvciA9PT0gJ3doaXRlJyAmJiBjb2xvcnMud2hpdGUsXG4gICAgbGVhZGluZyA9PT0gJ3Nob3J0JyAmJiB0eXBvZ3JhcGh5LmxlYWRpbmdTaG9ydCxcbiAgICAobGVhZGluZyA9PT0gJ3RhbGwnIHx8IF9fZGFuZ2Vyb3VzbHlJbmNyZWFzZUxpbmVIZWlnaHQpICYmXG4gICAgICB0eXBvZ3JhcGh5LmxlYWRpbmdUYWxsLFxuICAgIGFsaWduID09PSAnY2VudGVyJyAmJiB0eXBvZ3JhcGh5LmFsaWduQ2VudGVyLFxuICAgIGFsaWduID09PSAnanVzdGlmeScgJiYgdHlwb2dyYXBoeS5hbGlnbkp1c3RpZnksXG4gICAgYWxpZ24gPT09ICdsZWZ0JyAmJiB0eXBvZ3JhcGh5LmFsaWduTGVmdCxcbiAgICBhbGlnbiA9PT0gJ3JpZ2h0JyAmJiB0eXBvZ3JhcGh5LmFsaWduUmlnaHQsXG4gICAgb3ZlcmZsb3cgPT09ICdicmVha1dvcmQnICYmIHR5cG9ncmFwaHkuYnJlYWtXb3JkLFxuICAgIGl0YWxpYyAmJiB0eXBvZ3JhcGh5LmZvbnRTdHlsZUl0YWxpYyxcbiAgICAhaXRhbGljICYmIHR5cG9ncmFwaHkuZm9udFN0eWxlTm9ybWFsLFxuICAgIGJvbGQgJiYgdHlwb2dyYXBoeS5mb250V2VpZ2h0Qm9sZCxcbiAgICAhYm9sZCAmJiB0eXBvZ3JhcGh5LmZvbnRXZWlnaHROb3JtYWwsXG4gICAgdHJ1bmNhdGUgJiYgdHlwb2dyYXBoeS50cnVuY2F0ZVxuICApO1xuICBjb25zdCBUYWcgPSBpbmxpbmUgPyAnc3BhbicgOiAnZGl2JztcblxuICByZXR1cm4gKFxuICAgIDxUYWdcbiAgICAgIGNsYXNzTmFtZT17Y3N9XG4gICAgICB7Li4uKHRydW5jYXRlICYmIHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZydcbiAgICAgICAgPyB7IHRpdGxlOiBjaGlsZHJlbiB9XG4gICAgICAgIDogbnVsbCl9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvVGFnPlxuICApO1xufVxuXG5UZXh0LnByb3BUeXBlcyA9IHtcbiAgX19kYW5nZXJvdXNseUluY3JlYXNlTGluZUhlaWdodDogUHJvcFR5cGVzLmJvb2wsXG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoWydsZWZ0JywgJ3JpZ2h0JywgJ2NlbnRlcicsICdqdXN0aWZ5J10pLFxuICBib2xkOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAnZ3JlZW4nLFxuICAgICdwaW5lJyxcbiAgICAnb2xpdmUnLFxuICAgICdibHVlJyxcbiAgICAnbmF2eScsXG4gICAgJ21pZG5pZ2h0JyxcbiAgICAncHVycGxlJyxcbiAgICAnb3JjaGlkJyxcbiAgICAnZWdncGxhbnQnLFxuICAgICdtYXJvb24nLFxuICAgICd3YXRlcm1lbG9uJyxcbiAgICAnb3JhbmdlJyxcbiAgICAnZGFya0dyYXknLFxuICAgICdncmF5JyxcbiAgICAnbGlnaHRHcmF5JyxcbiAgICAncmVkJyxcbiAgICAnd2hpdGUnLFxuICBdKSxcbiAgaW5saW5lOiBQcm9wVHlwZXMuYm9vbCxcbiAgaXRhbGljOiBQcm9wVHlwZXMuYm9vbCxcbiAgbGVhZGluZzogUHJvcFR5cGVzLm9uZU9mKFsndGFsbCcsICdzaG9ydCddKSxcbiAgbGdTaXplOiBQcm9wVHlwZXMub25lT2YoWyd4cycsICdzbScsICdtZCcsICdsZycsICd4bCddKSxcbiAgbWRTaXplOiBQcm9wVHlwZXMub25lT2YoWyd4cycsICdzbScsICdtZCcsICdsZycsICd4bCddKSxcbiAgb3ZlcmZsb3c6IFByb3BUeXBlcy5vbmVPZihbJ25vcm1hbCcsICdicmVha1dvcmQnXSksXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ3hzJywgJ3NtJywgJ21kJywgJ2xnJywgJ3hsJ10pLFxuICBzbVNpemU6IFByb3BUeXBlcy5vbmVPZihbJ3hzJywgJ3NtJywgJ21kJywgJ2xnJywgJ3hsJ10pLFxuICB0cnVuY2F0ZTogUHJvcFR5cGVzLmJvb2wsXG59O1xuIiwiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9CdXR0b24uY3NzJztcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBhY2Nlc3NpYmlsaXR5RXhwYW5kZWQ/OiBib29sZWFuLFxuICBhY2Nlc3NpYmlsaXR5SGFzcG9wdXA/OiBib29sZWFuLFxuICBhY2Nlc3NpYmlsaXR5TGFiZWw/OiBzdHJpbmcsXG4gIGNvbG9yPzogJ2dyYXknIHwgJ3JlZCcgfCAnYmx1ZScgfCAndHJhbnNwYXJlbnQnIHwgJ3doaXRlJyxcbiAgZGlzYWJsZWQ/OiBib29sZWFuLFxuICBpbmxpbmU/OiBib29sZWFuLFxuICBuYW1lPzogc3RyaW5nLFxuICBvbkNsaWNrPzogKHsgZXZlbnQ6IFN5bnRoZXRpY01vdXNlRXZlbnQ8PiB9KSA9PiB2b2lkLFxuICBzaXplPzogJ3NtJyB8ICdtZCcgfCAnbGcnLFxuICB0ZXh0OiBzdHJpbmcsXG4gIHR5cGU/OiAnc3VibWl0JyB8ICdidXR0b24nLFxufH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbihwcm9wczogUHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIGFjY2Vzc2liaWxpdHlFeHBhbmRlZCxcbiAgICBhY2Nlc3NpYmlsaXR5SGFzcG9wdXAsXG4gICAgYWNjZXNzaWJpbGl0eUxhYmVsLFxuICAgIGNvbG9yID0gJ2dyYXknLFxuICAgIGRpc2FibGVkID0gZmFsc2UsXG4gICAgaW5saW5lID0gZmFsc2UsXG4gICAgbmFtZSxcbiAgICBvbkNsaWNrLFxuICAgIHNpemUgPSAnbWQnLFxuICAgIHRleHQsXG4gICAgdHlwZSA9ICdidXR0b24nLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgdGV4dENvbG9yID0ge1xuICAgIGJsdWU6ICd3aGl0ZScsXG4gICAgZ3JheTogJ2RhcmtHcmF5JyxcbiAgICByZWQ6ICd3aGl0ZScsXG4gICAgdHJhbnNwYXJlbnQ6ICd3aGl0ZScsXG4gICAgd2hpdGU6ICdkYXJrR3JheScsXG4gIH07XG5cbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzbmFtZXMoc3R5bGVzLmJ1dHRvbiwge1xuICAgIFtzdHlsZXMuc21dOiBzaXplID09PSAnc20nLFxuICAgIFtzdHlsZXMubWRdOiBzaXplID09PSAnbWQnLFxuICAgIFtzdHlsZXMubGddOiBzaXplID09PSAnbGcnLFxuICAgIFtzdHlsZXMuc29saWRdOiBjb2xvciAhPT0gJ3RyYW5zcGFyZW50JyxcbiAgICBbc3R5bGVzW2NvbG9yXV06ICFkaXNhYmxlZCxcbiAgICBbc3R5bGVzLmRpc2FibGVkXTogZGlzYWJsZWQsXG4gICAgW3N0eWxlcy5lbmFibGVkXTogIWRpc2FibGVkLFxuICAgIFtzdHlsZXMuaW5saW5lXTogaW5saW5lLFxuICAgIFtzdHlsZXMuYmxvY2tdOiAhaW5saW5lLFxuICB9KTtcblxuICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9idXR0b24taGFzLXR5cGUgKi9cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBhcmlhLWV4cGFuZGVkPXthY2Nlc3NpYmlsaXR5RXhwYW5kZWR9XG4gICAgICBhcmlhLWhhc3BvcHVwPXthY2Nlc3NpYmlsaXR5SGFzcG9wdXB9XG4gICAgICBhcmlhLWxhYmVsPXthY2Nlc3NpYmlsaXR5TGFiZWx9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXN9XG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICBuYW1lPXtuYW1lfVxuICAgICAgb25DbGljaz17ZXZlbnQgPT4gb25DbGljayAmJiBvbkNsaWNrKHsgZXZlbnQgfSl9XG4gICAgICB0eXBlPXt0eXBlfVxuICAgID5cbiAgICAgIDxUZXh0XG4gICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgYm9sZFxuICAgICAgICBjb2xvcj17ZGlzYWJsZWQgPyAnZ3JheScgOiB0ZXh0Q29sb3JbY29sb3JdfVxuICAgICAgICBvdmVyZmxvdz1cIm5vcm1hbFwiXG4gICAgICAgIHNpemU9e3NpemV9XG4gICAgICA+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9UZXh0PlxuICAgIDwvYnV0dG9uPlxuICApO1xuICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0L2J1dHRvbi1oYXMtdHlwZSAqL1xufVxuXG5CdXR0b24ucHJvcFR5cGVzID0ge1xuICBhY2Nlc3NpYmlsaXR5RXhwYW5kZWQ6IFByb3BUeXBlcy5ib29sLFxuICBhY2Nlc3NpYmlsaXR5SGFzcG9wdXA6IFByb3BUeXBlcy5ib29sLFxuICBhY2Nlc3NpYmlsaXR5TGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydibHVlJywgJ2dyYXknLCAncmVkJywgJ3RyYW5zcGFyZW50JywgJ3doaXRlJ10pLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGlubGluZTogUHJvcFR5cGVzLmJvb2wsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydzbScsICdtZCcsICdsZyddKSxcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0eXBlOiBQcm9wVHlwZXMub25lT2YoWydidXR0b24nLCAnc3VibWl0J10pLFxufTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgQm94IGZyb20gJy4vQm94LmpzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DYXJkLmNzcyc7XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBhY3RpdmU/OiA/Ym9vbGVhbixcbiAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlLFxuICBpbWFnZT86IFJlYWN0Lk5vZGUsXG4gIG9uTW91c2VFbnRlcj86ICh7IGV2ZW50OiBTeW50aGV0aWNNb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PiB9KSA9PiB2b2lkLFxuICBvbk1vdXNlTGVhdmU/OiAoeyBldmVudDogU3ludGhldGljTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4gfSkgPT4gdm9pZCxcbnx9O1xuXG50eXBlIFN0YXRlID0ge3xcbiAgaG92ZXJlZDogYm9vbGVhbixcbnx9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIGltYWdlOiBQcm9wVHlwZXMubm9kZSxcbiAgICBvbk1vdXNlRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uTW91c2VMZWF2ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIH07XG5cbiAgc3RhdGU6IFN0YXRlID0ge1xuICAgIGhvdmVyZWQ6IGZhbHNlLFxuICB9O1xuXG4gIGhhbmRsZU1vdXNlRW50ZXIgPSAoZXZlbnQ6IFN5bnRoZXRpY01vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyBvbk1vdXNlRW50ZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHsgaG92ZXJlZDogdHJ1ZSB9LFxuICAgICAgb25Nb3VzZUVudGVyICYmICgoKSA9PiBvbk1vdXNlRW50ZXIoeyBldmVudCB9KSlcbiAgICApO1xuICB9O1xuXG4gIGhhbmRsZU1vdXNlTGVhdmUgPSAoZXZlbnQ6IFN5bnRoZXRpY01vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyBvbk1vdXNlTGVhdmUgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHsgaG92ZXJlZDogZmFsc2UgfSxcbiAgICAgIG9uTW91c2VMZWF2ZSAmJiAoKCkgPT4gb25Nb3VzZUxlYXZlKHsgZXZlbnQgfSkpXG4gICAgKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhY3RpdmUsIGNoaWxkcmVuLCBpbWFnZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGhvdmVyZWQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCBjbGFzc2VzID0gY2xhc3NuYW1lcyhzdHlsZXMuY2FyZCwge1xuICAgICAgLy8gSWYsIGxpa2UgQGNocmlzbGxveWQsIHlvdSBjYW4ndCByZW1lbWJlciBKYXZhc2NyaXB0IGVxdWFsaXR5IHJ1bGVzLFxuICAgICAgLy8gPT0gbnVsbCBjaGVja3MgZm9yIGBudWxsYCBvciBgdW5kZWZpbmVkYCBhbmQgbGVhdmVzIG91dCBgZmFsc2VgLlxuICAgICAgW3N0eWxlcy5ob3Zlcl06IGFjdGl2ZSB8fCAoYWN0aXZlID09IG51bGwgJiYgaG92ZXJlZCksXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMuaGFuZGxlTW91c2VFbnRlcn1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZU1vdXNlTGVhdmV9XG4gICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgPlxuICAgICAgICB7aW1hZ2UgJiYgPEJveCBtYXJnaW5Cb3R0b209ezF9PntpbWFnZX08L0JveD59XG4gICAgICAgIDxCb3g+e2NoaWxkcmVufTwvQm94PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30gLz5cbiAgICAgIDwvQm94PlxuICAgICk7XG4gIH1cbn1cbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgY29sb3JzIGZyb20gJy4vQ29sb3JzLmNzcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2hlY2tib3guY3NzJztcbmltcG9ydCBCb3ggZnJvbSAnLi9Cb3guanMnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uLmpzJztcblxudHlwZSBQcm9wcyA9IHt8XG4gIGNoZWNrZWQ/OiBib29sZWFuLFxuICBkaXNhYmxlZD86IGJvb2xlYW4sXG4gIGhhc0Vycm9yPzogYm9vbGVhbixcbiAgaWQ6IHN0cmluZyxcbiAgaW5kZXRlcm1pbmF0ZT86IGJvb2xlYW4sXG4gIG5hbWU/OiBzdHJpbmcsXG4gIG9uQ2hhbmdlOiAoeyBldmVudDogU3ludGhldGljSW5wdXRFdmVudDw+LCBjaGVja2VkOiBib29sZWFuIH0pID0+IHZvaWQsXG4gIG9uQ2xpY2s/OiAoe1xuICAgIGV2ZW50OiBTeW50aGV0aWNJbnB1dEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+LFxuICAgIGNoZWNrZWQ6IGJvb2xlYW4sXG4gIH0pID0+IHZvaWQsXG4gIHNpemU/OiAnc20nIHwgJ21kJyxcbnx9O1xuXG50eXBlIFN0YXRlID0ge3xcbiAgZm9jdXNlZDogYm9vbGVhbixcbnx9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja2JveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaGFzRXJyb3I6IFByb3BUeXBlcy5ib29sLFxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaW5kZXRlcm1pbmF0ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydzbScsICdtZCddKSxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBoYXNFcnJvcjogZmFsc2UsXG4gICAgaW5kZXRlcm1pbmF0ZTogZmFsc2UsXG4gICAgc2l6ZTogJ21kJyxcbiAgfTtcblxuICBzdGF0ZSA9IHtcbiAgICBmb2N1c2VkOiBmYWxzZSxcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5pbmRldGVybWluYXRlKSB7XG4gICAgICB0aGlzLnNldEluZGV0ZXJtaW5hdGUoISF0aGlzLnByb3BzLmluZGV0ZXJtaW5hdGUpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2aW91c1Byb3BzOiBQcm9wcykge1xuICAgIGlmIChwcmV2aW91c1Byb3BzLmluZGV0ZXJtaW5hdGUgIT09IHRoaXMucHJvcHMuaW5kZXRlcm1pbmF0ZSkge1xuICAgICAgdGhpcy5zZXRJbmRldGVybWluYXRlKCEhdGhpcy5wcm9wcy5pbmRldGVybWluYXRlKTtcbiAgICB9XG4gIH1cblxuICBzZXRJbmRldGVybWluYXRlKGluZGV0ZXJtaW5hdGU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5pbnB1dCkge1xuICAgICAgdGhpcy5pbnB1dC5pbmRldGVybWluYXRlID0gaW5kZXRlcm1pbmF0ZTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFN5bnRoZXRpY0lucHV0RXZlbnQ8PikgPT4ge1xuICAgIGNvbnN0IHsgY2hlY2tlZCB9ID0gZXZlbnQudGFyZ2V0O1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoeyBldmVudCwgY2hlY2tlZCB9KTtcbiAgfTtcblxuICBoYW5kbGVDbGljayA9IChldmVudDogU3ludGhldGljSW5wdXRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgb25DbGljayB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAob25DbGljaykge1xuICAgICAgY29uc3QgeyBjaGVja2VkIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgb25DbGljayh7IGV2ZW50LCBjaGVja2VkIH0pO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVCbHVyID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWQ6IGZhbHNlIH0pO1xuXG4gIGhhbmRsZUZvY3VzID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWQ6IHRydWUgfSk7XG5cbiAgaW5wdXQ6ID9IVE1MSW5wdXRFbGVtZW50O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGVja2VkLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBoYXNFcnJvcixcbiAgICAgIGlkLFxuICAgICAgaW5kZXRlcm1pbmF0ZSxcbiAgICAgIG5hbWUsXG4gICAgICBzaXplLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgbGV0IGJvcmRlclN0eWxlID0gc3R5bGVzLmJvcmRlcjtcbiAgICBpZiAoIWRpc2FibGVkICYmIChjaGVja2VkIHx8IGluZGV0ZXJtaW5hdGUpKSB7XG4gICAgICBib3JkZXJTdHlsZSA9IHN0eWxlcy5ib3JkZXJEYXJrO1xuICAgIH0gZWxzZSBpZiAoaGFzRXJyb3IpIHtcbiAgICAgIGJvcmRlclN0eWxlID0gc3R5bGVzLmJvcmRlckVycm9yO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94IHBvc2l0aW9uPVwicmVsYXRpdmVcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmlucHV0LCB7XG4gICAgICAgICAgICBbc3R5bGVzLmlucHV0RW5hYmxlZF06ICFkaXNhYmxlZCxcbiAgICAgICAgICAgIFtzdHlsZXMuaW5kZXRlcm1pbmF0ZV06IGluZGV0ZXJtaW5hdGUsXG4gICAgICAgICAgICBbc3R5bGVzLmlucHV0U21dOiBzaXplID09PSAnc20nLFxuICAgICAgICAgICAgW3N0eWxlcy5pbnB1dE1kXTogc2l6ZSA9PT0gJ21kJyxcbiAgICAgICAgICB9KX1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVGb2N1c31cbiAgICAgICAgICByZWY9e2VsID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQgPSBlbDtcbiAgICAgICAgICB9fVxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICBib3JkZXJTdHlsZSxcbiAgICAgICAgICAgIHN0eWxlcy5jaGVjayxcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXN0ZWQtdGVybmFyeVxuICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgPyBjaGVja2VkIHx8IGluZGV0ZXJtaW5hdGVcbiAgICAgICAgICAgICAgICA/IGNvbG9ycy5ncmF5QmdcbiAgICAgICAgICAgICAgICA6IGNvbG9ycy5saWdodEdyYXlCZ1xuICAgICAgICAgICAgICA6IGNoZWNrZWQgfHwgaW5kZXRlcm1pbmF0ZVxuICAgICAgICAgICAgICAgID8gY29sb3JzLmRhcmtHcmF5QmdcbiAgICAgICAgICAgICAgICA6IGNvbG9ycy53aGl0ZUJnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBbc3R5bGVzLmNoZWNrRW5hYmxlZF06ICFkaXNhYmxlZCxcbiAgICAgICAgICAgICAgW3N0eWxlcy5jaGVja0ZvY3VzZWRdOiB0aGlzLnN0YXRlLmZvY3VzZWQsXG4gICAgICAgICAgICAgIFtzdHlsZXMuY2hlY2tNZF06IHNpemUgPT09ICdtZCcsXG4gICAgICAgICAgICAgIFtzdHlsZXMuY2hlY2tTbV06IHNpemUgPT09ICdzbScsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKX1cbiAgICAgICAgPlxuICAgICAgICAgIHsoY2hlY2tlZCB8fCBpbmRldGVybWluYXRlKSAmJiAoXG4gICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICBhY2Nlc3NpYmlsaXR5TGFiZWw9XCJcIlxuICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgaWNvbj17aW5kZXRlcm1pbmF0ZSA/ICdkYXNoJyA6ICdjaGVjayd9XG4gICAgICAgICAgICAgIHNpemU9e3NpemUgPT09ICdzbScgPyA4IDogMTJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Cb3g+XG4gICAgKTtcbiAgfVxufVxuIiwiLy8gQGZsb3dcbi8qXG4gICMgQ29sbGVjdGlvblxuXG4gIENvbGxlY3Rpb24gaXMgY29tcG9uZW50IHRoYXQgY2FuIGFic29sdXRlbHkgcG9zaXRpb24gYW5kIHZpcnR1YWxpemUgaXRlbXMuIEl0J3MgbWVhbnQgdG8gYmUgYW4gZXh0ZXJlbWx5IHNpbXBsZSB3b3JraG9yc2UgdG8gcmUtaW1wbGVtZW50IGN1c3RvbSBsYXlvdXRzLiBJdCdzIG5vdCBwZXJmZWN0IGZvciBhbGwgc2l0dWF0aW9ucyBidXQgaXQgZG9lcyBoYXZlIGEgY2xvc2VkIEFQSSBhbmQgaXMgcHJldHR5IHBlcmZvcm1hbnQuXG5cbiAgIyMgSG93IGl0IHdvcmtzXG5cbiAgVGhlcmUgYXJlIHR3byBjZW50cmFsIGNvbmNlcHRzIHRvIENvbGxlY3Rpb24gLSB0aGUgY29udGVudCBsYXllciBhbmQgdGhlIHZpZXdwb3J0IGxheWVyLlxuXG4gIENvbnRlbnQgbGF5ZXIgICAgICAgICAgICAgICBWaWV3cG9ydCAgICAgICAgICAgICAgICAgICBDb21wb3NpdGUgbGF5ZXJcblxuICArLS0tLS0tLS0tLS0tLS0tLSsgICAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0rICAgICAgICAgICstLS0tLS0tLS0tLS0tLS0tK1xuICB8ICAgICAgICAgICAgICAgIHwgICAgICAgICAgfCAgICAgICAgICAgICAgICB8ICAgICAgICAgIHwgICAgICAgICAgICAgICAgfFxuICB8ICstLSsgKy0tKyArLS0rIHwgICAgICAgICAgfCAgICAgICAgICAgICAgICB8ICAgICAgICAgIHwgICAgICAgICAgICAgICAgfFxuICB8IHwgIHwgfCAgfCB8ICB8IHwgICAgICAgICAgfCAgICAgICAgICAgICAgICB8ICAgICAgICAgIHwgICAgICAgICAgICAgICAgfFxuICB8IHwgIHwgfCAgfCB8ICB8IHwgICAgICAgICAgfCArLS0tLS0tLS0tLS0tKyB8ICAgICAgICAgIHwgKy0tLS0tLS0tLS0tLSsgfFxuICB8ICstLSsgfCAgfCB8ICB8IHwgICAgICAgICAgfCB8ICAgICAgICAgICAgfCB8ICAgICAgICAgIHwgfC0tKyB8ICB8IHwgIHwgfFxuICB8ICAgICAgfCAgfCArLS0rIHwgICAgICAgICAgfCB8ICAgICAgICAgICAgfCB8ICAgICAgICAgIHwgfCAgICB8ICB8ICstLXwgfFxuICB8ICstLSsgKy0tKyAgICAgIHwgICAgICAgICAgfCB8ICAgICAgICAgICAgfCB8ICAgICAgICAgIHwgfC0tKyArLS0rICAgIHwgfFxuICB8IHwgIHwgICAgICArLS0rIHwgKy0tLS0tLT4gfCB8ICAgICAgICAgICAgfCB8ICstLS0tLS0+IHwgfCAgfCAgICAgICstLXwgfFxuICB8ICstLSsgKy0tKyB8ICB8IHwgICAgICAgICAgfCB8ICAgICAgICAgICAgfCB8ICAgICAgICAgIHwgfC0tKyArLS0rIHwgIHwgfFxuICB8ICAgICAgfCAgfCB8ICB8IHwgICAgICAgICAgfCB8ICAgICAgICAgICAgfCB8ICAgICAgICAgIHwgfCAgICB8ICB8IHwgIHwgfFxuICB8ICstLSsgfCAgfCArLS0rIHwgICAgICAgICAgfCB8ICAgICAgICAgICAgfCB8ICAgICAgICAgIHwgfC0tKyB8ICB8ICstLXwgfFxuICB8IHwgIHwgfCAgfCAgICAgIHwgICAgICAgICAgfCB8ICAgICAgICAgICAgfCB8ICAgICAgICAgIHwgfCAgfCB8ICB8ICAgIHwgfFxuICB8IHwgIHwgfCAgfCArLS0rIHwgICAgICAgICAgfCArLS0tLS0tLS0tLS0tKyB8ICAgICAgICAgIHwgKy0tLS0tLS0tLS0tLSsgfFxuICB8IHwgIHwgfCAgfCB8ICB8IHwgICAgICAgICAgfCAgICAgICAgICAgICAgICB8ICAgICAgICAgIHwgICAgICAgICAgICAgICAgfFxuICB8ICstLSsgKy0tKyArLS0rIHwgICAgICAgICAgfCAgICAgICAgICAgICAgICB8ICAgICAgICAgIHwgICAgICAgICAgICAgICAgfFxuICB8ICAgICAgICAgICAgICAgIHwgICAgICAgICAgfCAgICAgICAgICAgICAgICB8ICAgICAgICAgIHwgICAgICAgICAgICAgICAgfFxuICArLS0tLS0tLS0tLS0tLS0tLSsgICAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0rICAgICAgICAgICstLS0tLS0tLS0tLS0tLS0tK1xuXG4gIFlvdSBwb3NpdGlvbiB5b3VyIGl0ZW1zIGluIHRoZSB2aXJ0dWFsIGNvbnRlbnQgbGF5ZXIsIHRoZW4geW91IGRlZmluZSB0aGUgdmlld3BvcnQgbGF5ZXIgKGJ5IGRlZmF1bHQgdGhpcyBpcyB0aGUgZnVsbCBzaXplIG9mIHRoZSBjb250ZW50IGxheWVyKS4gQ29sbGVjdGlvbiB0aGVuIHRha2VzIHRob3NlIGl0ZW1zLCBhbmQgdGhlIHZpZXdwb3J0IHJlbmRlcmluZyB0aGUgY29udGVudCBsYXllciB3aXRoIG9ubHkgdGhlIGl0ZW1zIHRoYXQgZml0IGluc2lkZSB0aGUgdmlld3BvcnQuXG5cbiAgIyMgQXNzdW1wdGlvbnNcblxuICAxLiBZb3VyIGxheW91dCBpcyBwcmUtY2FsY3VsYXRlZC4gQ29sbGVjdGlvbiBleHBlY3RzIGxheW91dCB0byBiZSBwYXNzZWQgaW4gYXMgYSBwcm9wZXJ0eS4gSWYgeW91ciBsYXlvdXQgaXNuJ3QgcmVhZHkgKGkuZS4gc29tZXRoaW5nIG5lZWRzIHRvIGJlIG1lYXN1cmVkKSB0aGUgY2FsbGVyIG5lZWRzIHRvIGZpZ3VyZSB0aGF0IG91dC5cbiAgMi4gUGFzc2VkIGluIEl0ZW0gYXJlIHNvbWV3aGF0IHB1cmUgLSB0aGV5IGNhbiBiZSBtb3VudGVkIGFuZCB1bm1vdW50ZWQgYXQgYW55dGltZSBzbyBJdGVtJ3MgbGlmZWN5Y2xlIG1ldGhvZHMgbmVlZCB0byBhY2NvdW50IGZvciB0aGF0LlxuICAzLiBQYXNzZWQgaW4gSXRlbXMgYXJlIGJvdW5kIHRvIHRoZWlyIGRhdGEtc291cmNlIHNlcGVyYXRlbHkuIEFsbCB0aGV5IHJlY2VpdmUgaXMgYW4gaW5kZXgsIHNvIHRoZXkgbmVlZCB0byBoYXZlIGFueSBleHRlcm5hbCBkYXRhIHNvdXJjZXMgaW4gc2NvcGUuXG4gIDQuIFRoZSB2aWV3cG9ydCBjYW4gYmUgYW55IHNpemUuIE1vc3Qgd2luZG93aW5nL3JlY3ljbGluZyBzb2x1dGlvbnMgaW1wbGVtZW50IHNvbWUgc29ydCBvZiBvdmVyc2Nhbm5pbmcsIGhvd2V2ZXIgQ29sbGVjdGlvbiBsZWF2ZXMgdGhpcyB1cCB0aGUgdGhlIHBhcmVudC5cblxuKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgbGF5b3V0U3R5bGVzIGZyb20gJy4vTGF5b3V0LmNzcyc7XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBJdGVtOiAoeyBpZHg6IG51bWJlciB9KSA9PiBSZWFjdC5Ob2RlLFxuICBsYXlvdXQ6IEFycmF5PHt8XG4gICAgdG9wOiBudW1iZXIsXG4gICAgbGVmdDogbnVtYmVyLFxuICAgIHdpZHRoOiBudW1iZXIsXG4gICAgaGVpZ2h0OiBudW1iZXIsXG4gIHx9PixcbiAgdmlld3BvcnRUb3A/OiBudW1iZXIsXG4gIHZpZXdwb3J0TGVmdD86IG51bWJlcixcbiAgdmlld3BvcnRXaWR0aD86IG51bWJlcixcbiAgdmlld3BvcnRIZWlnaHQ/OiBudW1iZXIsXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGVjdGlvbiBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHMsIHZvaWQ+IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXNcbiAgICBJdGVtOiBQcm9wVHlwZXMuYW55LFxuICAgIGxheW91dDogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMuZXhhY3Qoe1xuICAgICAgICB0b3A6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgbGVmdDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIH0pLmlzUmVxdWlyZWRcbiAgICApLFxuICAgIHZpZXdwb3J0SGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHZpZXdwb3J0TGVmdDogUHJvcFR5cGVzLm51bWJlcixcbiAgICB2aWV3cG9ydFRvcDogUHJvcFR5cGVzLm51bWJlcixcbiAgICB2aWV3cG9ydFdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbGF5b3V0OiBbXSxcbiAgICB2aWV3cG9ydExlZnQ6IDAsXG4gICAgdmlld3BvcnRUb3A6IDAsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgSXRlbSwgbGF5b3V0LCB2aWV3cG9ydFRvcCA9IDAsIHZpZXdwb3J0TGVmdCA9IDAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIGZ1bGwgZGltZW5zaW9ucyBvZiB0aGUgaXRlbSBsYXllclxuICAgIGNvbnN0IHdpZHRoID0gTWF0aC5tYXgoLi4ubGF5b3V0Lm1hcChpdGVtID0+IGl0ZW0ubGVmdCArIGl0ZW0ud2lkdGgpKTtcbiAgICBjb25zdCBoZWlnaHQgPSBNYXRoLm1heCguLi5sYXlvdXQubWFwKGl0ZW0gPT4gaXRlbS50b3AgKyBpdGVtLmhlaWdodCkpO1xuXG4gICAgLy8gRGVmYXVsdCB0aGUgdmlld3BvcnQgdG8gYmVpbmcgdGhlIGZ1bGwgd2lkdGggb2YgdGhlIGNvbnRlbnQgbGF5ZXJcbiAgICBjb25zdCB7IHZpZXdwb3J0V2lkdGggPSB3aWR0aCwgdmlld3BvcnRIZWlnaHQgPSBoZWlnaHQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAvLyBDYWxjdWxhdGVzIHdoaWNoIGl0ZW1zIGZyb20gdGhlIGl0ZW0gbGF5ZXIgdG8gcmVuZGVyIGluIHRoZSB2aWV3cG9ydFxuICAgIC8vIGxheWVyLlxuICAgIGNvbnN0IGl0ZW1zID0gbGF5b3V0LnJlZHVjZSgoYWNjLCBwb3NpdGlvbiwgaWR4KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIHBvc2l0aW9uLnRvcCArIHBvc2l0aW9uLmhlaWdodCA+IHZpZXdwb3J0VG9wICYmXG4gICAgICAgIHBvc2l0aW9uLnRvcCA8IHZpZXdwb3J0SGVpZ2h0ICsgdmlld3BvcnRUb3AgJiZcbiAgICAgICAgcG9zaXRpb24ubGVmdCA8IHZpZXdwb3J0V2lkdGggKyB2aWV3cG9ydExlZnQgJiZcbiAgICAgICAgcG9zaXRpb24ubGVmdCArIHBvc2l0aW9uLndpZHRoID4gdmlld3BvcnRMZWZ0XG4gICAgICApIHtcbiAgICAgICAgYWNjLnB1c2goeyBpZHgsIC4uLnBvc2l0aW9uIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2xheW91dFN0eWxlcy5yZWxhdGl2ZX0gc3R5bGU9e3sgd2lkdGgsIGhlaWdodCB9fT5cbiAgICAgICAge2l0ZW1zLm1hcCgoeyBpZHgsIC4uLnN0eWxlIH0pID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aWR4fSBjbGFzc05hbWU9e2xheW91dFN0eWxlcy5hYnNvbHV0ZX0gc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICAgIDxJdGVtIGlkeD17aWR4fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENvbGxlY3Rpb24gZnJvbSAnLi9Db2xsZWN0aW9uLmpzJztcblxudHlwZSBDb2x1bW4gPSAyIHwgMyB8IDQ7XG5cbi8qXG5cblRoaXMgZnVuY3Rpb24ganVzdCBpbXBsZW1lbnRzIHRoZSBkZXNpZ24gY29uc3RyYWludHMgZm9yIGFzeW1ldHJpY2FsIGNvbHVtbnMgaW5cbmEgdmVyeSBzaW1wbGUgd2F5LiBJdCdzIG5vdCBwZXJmZWN0LCBidXQgaXQncyB2ZXJ5IHByZWRpY3RpYmxlLiBJZiB5b3UgZG9cbmFueXRoaW5nLCBpbXByb3ZlIGl0IHNvIHRoYXQgaXQgdGFrZXMgdGhlc2UgY29uc3RyYWludHMgYW5kIGdlbmVyYXRlcyB0aGVtXG5mb3IgbiA+IDQuXG5cbjEgKyBuIGNvbHVtbnM6XG4gIGZpcnN0IGNvbHVtbiBpcyA1MC81MFxuICBjYW4ndCBoYXZlIDMgY29sdW1ucyBpbiBhIHJvdyBiZSA1MC81MFxuXG4qL1xuY29uc3QgVVAgPSBbMC43NSwgMC4yNV07XG5jb25zdCBET1dOID0gWzAuMjUsIDAuNzVdO1xuY29uc3QgTUlEID0gWzAuNSwgMC41XTtcbmNvbnN0IGNvbHVtbkxheW91dCA9IChudW1PZkNvbHVtbnM6IDEgfCBDb2x1bW4pID0+IHtcbiAgc3dpdGNoIChudW1PZkNvbHVtbnMpIHtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gW1tNSURdLCBbVVBdLCBbRE9XTl1dO1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiBbW1VQLCBNSURdLCBbRE9XTiwgTUlEXSwgW01JRCwgVVBdLCBbTUlELCBET1dOXV07XG4gICAgY2FzZSA0OlxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgW01JRCwgVVAsIE1JRCwgTUlEXSxcbiAgICAgICAgW01JRCwgRE9XTiwgTUlELCBNSURdLFxuICAgICAgICBbTUlELCBNSUQsIFVQLCBNSURdLFxuICAgICAgICBbTUlELCBNSUQsIERPV04sIE1JRF0sXG4gICAgICAgIFtNSUQsIFVQLCBNSUQsIERPV05dLFxuICAgICAgICBbTUlELCBET1dOLCBNSUQsIFVQXSxcbiAgICAgIF07XG4gICAgY2FzZSAzOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gW1xuICAgICAgICBbTUlELCBVUCwgTUlEXSxcbiAgICAgICAgW01JRCwgRE9XTiwgTUlEXSxcbiAgICAgICAgW01JRCwgTUlELCBVUF0sXG4gICAgICAgIFtNSUQsIE1JRCwgRE9XTl0sXG4gICAgICBdO1xuICB9XG59O1xuXG5jb25zdCBwYWRkaW5nQWxsID0gKGd1dHRlciwgcG9zaXRpb25zKSA9PlxuICBwb3NpdGlvbnMubWFwKCh7IHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCB9KSA9PiAoe1xuICAgIHRvcCxcbiAgICBsZWZ0LFxuICAgIHdpZHRoOiB3aWR0aCAtIGd1dHRlcixcbiAgICBoZWlnaHQ6IGhlaWdodCAtIGd1dHRlcixcbiAgfSkpO1xuXG5jb25zdCBtaW5kZXggPSBhcnIgPT5cbiAgYXJyLnJlZHVjZSgobWluSW5kZXgsIGl0ZW0sIGkpID0+IChpdGVtIDwgYXJyW21pbkluZGV4XSA/IGkgOiBtaW5JbmRleCksIDApO1xuXG5jb25zdCBjb2x1bW5zRm9yQ29sbGFnZVdpdGhDb3ZlciA9IChudW1PZkNvbHVtbnM6IENvbHVtbikgPT5cbiAgbnVtT2ZDb2x1bW5zID09PSA0ID8gMiA6IDE7XG5cbmZ1bmN0aW9uIGdldENvbGxhZ2VMYXlvdXQoe1xuICBndXR0ZXIsXG4gIGNvdmVyLFxuICBjb2x1bW5zOiBudW1Db2xzLFxuICBoZWlnaHQ6IGgsXG4gIHdpZHRoOiB3LFxuICBsYXlvdXRLZXksXG59OiB7XG4gIGd1dHRlcjogbnVtYmVyLFxuICBjb3ZlcjogYm9vbGVhbixcbiAgY29sdW1uczogQ29sdW1uLFxuICBoZWlnaHQ6IG51bWJlcixcbiAgd2lkdGg6IG51bWJlcixcbiAgbGF5b3V0S2V5OiBudW1iZXIsXG59KSB7XG4gIGxldCBwb3NpdGlvbnMgPSBbXTtcbiAgY29uc3Qgd2lkdGggPSB3ICsgZ3V0dGVyO1xuICBjb25zdCBoZWlnaHQgPSBoICsgZ3V0dGVyO1xuXG4gIC8vIElmIHRoZXJlJ3MgYSBjb3ZlciBpbWFnZSwgd2UnbGwgYWRkIHRoYXQgbGF0ZXIuIEl0IHNob3VsZCBiZSBhIGxpdHRsZVxuICAvLyBsZXNzIHRoYW4gaGFsZiB0aGUgd2lkdGggb2YgdGhlIGNvbGxhZ2UuIFdlIGRvIHRoaXMgbm93IChhbmQgbm90IGxhdGVyXG4gIC8vIHdoZW4gd2UgYWRkIHRoZSBjb3ZlciBpbWFnZSkgYmVjYXVzZSBvZiBgY29sdW1uTGF5b3V0YCdzIGNvbnN0cmFpbnRzXG4gIC8vIG5lZWRpbmcgdGhlIGV4YWN0IG51bWJlciBvZiBjb2x1bW5zIHRoYXQgYXJlIGRpc3BsYXllZC5cbiAgY29uc3QgZ3JpZENvbHMgPSBjb3ZlciA/IGNvbHVtbnNGb3JDb2xsYWdlV2l0aENvdmVyKG51bUNvbHMpIDogbnVtQ29scztcblxuICAvLyBTZWxlY3RzIHRoZSBsYXlvdXQgdGhhdCB3ZSdyZSBnb2luZyB0byB1c2UgZm9yIHRoZSBncmlkXG4gIGNvbnN0IGNvbHVtbnMgPSBjb2x1bW5MYXlvdXQoZ3JpZENvbHMpO1xuICBjb25zdCBsYXlvdXRJZHggPSBsYXlvdXRLZXkgJSBjb2x1bW5zLmxlbmd0aDtcbiAgY29uc3QgbGF5b3V0ID0gY29sdW1uc1tsYXlvdXRJZHhdO1xuXG4gIC8vIFRoaXMgZG9lcyBhIHJlYWxseSBzaW1wbGUgdmVyc2lvbiBvZiBvdXIgbWFzb25yeSBsYXlvdXQuIFdoeSByZXBsaWNhdGVcbiAgLy8gdGhhdCBoZXJlPyBhLikgZmV3ZXIgZGVwZW5kZW5jaWVzIGFuZCBiLikgd2UgbmVlZCB0aGUgYWxnb3JpdGhtIHRvXG4gIC8vIHJvdWdobHkgcHJlc2VydmUgdGhlIG9yZGVyIG9mIHRoZSBjb2xsYWdlcyBmcm9tIHdoZW4gdGhleSB3ZXJlIG9yZGVyZWRcbiAgLy8gYnkgTWFzb25yeS5cbiAgY29uc3QgY29sSGVpZ2h0cyA9IG5ldyBBcnJheShncmlkQ29scykuZmlsbCgwKTtcbiAgY29uc3QgY29sQ291bnRzID0gbmV3IEFycmF5KGdyaWRDb2xzKS5maWxsKDApO1xuXG4gIC8vIFdlIGl0ZXJhdGUgb3ZlciBldmVyeSBwb3NpdGlvbiB0aGF0IHdlIHRoaW5rIHdlIGNvdWxkIF9wb3RlbnRpYWxseV8gaGF2ZVxuICAvLyBzbyB0aGF0IHdlIGNhbiBmaWxsIHRoZW0gd2l0aCBlbXB0eSBzZWN0aW9ucyBpZiBuZWVkIGJlLlxuICBmb3IgKGxldCBpID0gMDsgaSA8IDIgKiBncmlkQ29sczsgaSArPSAxKSB7XG4gICAgY29uc3QgY29sID0gbWluZGV4KGNvbEhlaWdodHMpO1xuICAgIGNvbnN0IGNvbElkeCA9IGNvbENvdW50c1tjb2xdO1xuICAgIGNvbnN0IGl0ZW1IZWlnaHQgPSBsYXlvdXRbY29sXVtjb2xJZHhdICogaGVpZ2h0O1xuXG4gICAgcG9zaXRpb25zLnB1c2goe1xuICAgICAgdG9wOiBjb2xIZWlnaHRzW2NvbF0sXG4gICAgICBsZWZ0OiBjb2wgKiAod2lkdGggLyBudW1Db2xzKSxcbiAgICAgIHdpZHRoOiB3aWR0aCAvIG51bUNvbHMsXG4gICAgICBoZWlnaHQ6IGl0ZW1IZWlnaHQsXG4gICAgfSk7XG5cbiAgICBjb2xIZWlnaHRzW2NvbF0gKz0gaXRlbUhlaWdodDtcbiAgICBjb2xDb3VudHNbY29sXSArPSAxO1xuICB9XG5cbiAgLy8gSWYgd2UgaGF2ZSBhIGNvdmVyIGltYWdlLCBmaWd1cmUgb3V0IGhvdyBiaWcgaXQgaXMsIHRoZW4gbW92ZSBhbGwgdGhlXG4gIC8vIGV4aXN0aW5nIGNvbHVtbnMgb3Zlci5cbiAgaWYgKGNvdmVyKSB7XG4gICAgY29uc3QgY292ZXJJbWFnZVdpZHRoID0gTWF0aC5jZWlsKG51bUNvbHMgLyAyKSAqICh3aWR0aCAvIG51bUNvbHMpO1xuICAgIHBvc2l0aW9ucyA9IHBvc2l0aW9ucy5tYXAocG9zaXRpb24gPT4gKHtcbiAgICAgIC4uLnBvc2l0aW9uLFxuICAgICAgbGVmdDogY292ZXJJbWFnZVdpZHRoICsgcG9zaXRpb24ubGVmdCxcbiAgICB9KSk7XG4gICAgcG9zaXRpb25zLnVuc2hpZnQoeyB0b3A6IDAsIGxlZnQ6IDAsIHdpZHRoOiBjb3ZlckltYWdlV2lkdGgsIGhlaWdodCB9KTtcbiAgfVxuXG4gIC8vIFRoaXMgYWRkcyB0aGUgc3BhY2UgYmV0d2VlbiBhbnkgaXRlbXMgdGhhdCB3ZSBoYXZlLiBJdCdzIG5pY2UgdG8gZG9cbiAgLy8gdGhpcyBhcyBhIHNlcGFyYXRlIHBhc3MgYWZ0ZXIgZXZlcnl0aGluZyBlbHNlLCBiZWNhdXNlIHRoZSBtYXRoIGVhcmxpZXJcbiAgLy8gYmVjb21lcyBlYXNpZXIgYW5kIGl0J3MgbGVzcyBicml0dGxlIHRvIGNoYW5nZS5cbiAgaWYgKGd1dHRlcikge1xuICAgIHBvc2l0aW9ucyA9IHBhZGRpbmdBbGwoZ3V0dGVyLCBwb3NpdGlvbnMpO1xuICB9XG5cbiAgcmV0dXJuIHBvc2l0aW9ucztcbn1cblxudHlwZSBQcm9wcyA9IHt8XG4gIGNvbHVtbnM6IENvbHVtbixcbiAgY292ZXI/OiBib29sZWFuLFxuICBndXR0ZXI/OiBudW1iZXIsXG4gIGhlaWdodDogbnVtYmVyLFxuICBsYXlvdXRLZXk/OiBudW1iZXIsXG4gIHJlbmRlckltYWdlOiAoe3xcbiAgICB3aWR0aDogbnVtYmVyLFxuICAgIGhlaWdodDogbnVtYmVyLFxuICAgIGluZGV4OiBudW1iZXIsXG4gIHx9KSA9PiBSZWFjdC5Ob2RlLFxuICB3aWR0aDogbnVtYmVyLFxufH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbGxhZ2UocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBjb2x1bW5zLFxuICAgIGNvdmVyLFxuICAgIGd1dHRlcixcbiAgICBoZWlnaHQsXG4gICAgbGF5b3V0S2V5LFxuICAgIHJlbmRlckltYWdlLFxuICAgIHdpZHRoLFxuICB9ID0gcHJvcHM7XG4gIGNvbnN0IHBvc2l0aW9ucyA9IGdldENvbGxhZ2VMYXlvdXQoe1xuICAgIGNvbHVtbnMsXG4gICAgY292ZXI6ICEhY292ZXIsXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGd1dHRlcjogZ3V0dGVyIHx8IDAsXG4gICAgbGF5b3V0S2V5OiBsYXlvdXRLZXkgfHwgMCxcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPENvbGxlY3Rpb25cbiAgICAgIEl0ZW09eyh7IGlkeDogaW5kZXggfSkgPT5cbiAgICAgICAgcmVuZGVySW1hZ2Uoe1xuICAgICAgICAgIGluZGV4LFxuICAgICAgICAgIHdpZHRoOiBwb3NpdGlvbnNbaW5kZXhdLndpZHRoLFxuICAgICAgICAgIGhlaWdodDogcG9zaXRpb25zW2luZGV4XS5oZWlnaHQsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBsYXlvdXQ9e3Bvc2l0aW9uc31cbiAgICAvPlxuICApO1xufVxuXG5Db2xsYWdlLnByb3BUeXBlcyA9IHtcbiAgY29sdW1uczogUHJvcFR5cGVzLm9uZU9mKFsyLCAzLCA0XSkuaXNSZXF1aXJlZCxcbiAgY292ZXI6IFByb3BUeXBlcy5ib29sLFxuICBndXR0ZXI6IFByb3BUeXBlcy5udW1iZXIsXG4gIGhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBsYXlvdXRLZXk6IFByb3BUeXBlcy5udW1iZXIsXG4gIHJlbmRlckltYWdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB3aWR0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxufTtcbiIsIi8qIEBmbG93ICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ29sdW1uQ29sdW1uLmNzcyc7XG5cbnR5cGUgRGVwcmVjYXRlZENvbHVtbnMgPSAxIHwgMiB8IDMgfCA0IHwgNSB8IDYgfCA3IHwgOCB8IDkgfCAxMCB8IDExIHwgMTI7XG50eXBlIENvbHVtbnMgPSAwIHwgMSB8IDIgfCAzIHwgNCB8IDUgfCA2IHwgNyB8IDggfCA5IHwgMTAgfCAxMSB8IDEyO1xuXG50eXBlIENvbHVtblByb3BzID1cbiAgfCB7fFxuICAgICAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlLFxuICAgICAgc3BhbjogQ29sdW1ucyxcbiAgICAgIHNtU3Bhbj86IENvbHVtbnMsXG4gICAgICBtZFNwYW4/OiBDb2x1bW5zLFxuICAgICAgbGdTcGFuPzogQ29sdW1ucyxcbiAgICB8fVxuICB8IHt8XG4gICAgICBjaGlsZHJlbj86IFJlYWN0Lk5vZGUsXG4gICAgICB4cz86IERlcHJlY2F0ZWRDb2x1bW5zLFxuICAgICAgc20/OiBEZXByZWNhdGVkQ29sdW1ucyxcbiAgICAgIG1kPzogRGVwcmVjYXRlZENvbHVtbnMsXG4gICAgICBsZz86IERlcHJlY2F0ZWRDb2x1bW5zLFxuICAgIHx9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2x1bW4ocHJvcHM6IENvbHVtblByb3BzKSB7XG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xuICBjb25zdCBjcyA9IGNsYXNzbmFtZXMoXG4gICAgKHByb3BzLnhzICE9PSB1bmRlZmluZWQgfHxcbiAgICAgIHByb3BzLnNtICE9PSB1bmRlZmluZWQgfHxcbiAgICAgIHByb3BzLm1kICE9PSB1bmRlZmluZWQgfHxcbiAgICAgIHByb3BzLmxnICE9PSB1bmRlZmluZWQpICYmXG4gICAgICBzdHlsZXMuZGVwcmVjYXRlZENvbHVtbixcbiAgICBwcm9wcy54cyAmJiBzdHlsZXNbYHhzQ29sJHtwcm9wcy54c31gXSxcbiAgICBwcm9wcy5zbSAmJiBzdHlsZXNbYHNtQ29sJHtwcm9wcy5zbX1gXSxcbiAgICBwcm9wcy5tZCAmJiBzdHlsZXNbYG1kQ29sJHtwcm9wcy5tZH1gXSxcbiAgICBwcm9wcy5sZyAmJiBzdHlsZXNbYGxnQ29sJHtwcm9wcy5sZ31gXSxcbiAgICBwcm9wcy5zcGFuICE9IG51bGwgJiYgc3R5bGVzW2B4c0NvbCR7cHJvcHMuc3Bhbn1gXSxcbiAgICBwcm9wcy5zbVNwYW4gIT0gbnVsbCAmJiBzdHlsZXNbYHNtQ29sJHtwcm9wcy5zbVNwYW59YF0sXG4gICAgcHJvcHMubWRTcGFuICE9IG51bGwgJiYgc3R5bGVzW2BtZENvbCR7cHJvcHMubWRTcGFufWBdLFxuICAgIHByb3BzLmxnU3BhbiAhPSBudWxsICYmIHN0eWxlc1tgbGdDb2wke3Byb3BzLmxnU3Bhbn1gXVxuICApO1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NzfT57Y2hpbGRyZW59PC9kaXY+O1xufVxuXG5Db2x1bW4ucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIHhzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBzbTogUHJvcFR5cGVzLm51bWJlcixcbiAgbWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIGxnOiBQcm9wVHlwZXMubnVtYmVyLFxuICBzcGFuOiBQcm9wVHlwZXMubnVtYmVyLFxuICBzbVNwYW46IFByb3BUeXBlcy5udW1iZXIsXG4gIG1kU3BhbjogUHJvcFR5cGVzLm51bWJlcixcbiAgbGdTcGFuOiBQcm9wVHlwZXMubnVtYmVyLFxufTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJveCBmcm9tICcuL0JveC5qcyc7XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBjaGlsZHJlbj86IFJlYWN0Lk5vZGUsXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFpbmVyKHByb3BzOiBQcm9wcykge1xuICBjb25zdCB7IGNoaWxkcmVuIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8Qm94IGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgZGlzcGxheT1cImZsZXhcIj5cbiAgICAgIDxCb3ggbWF4V2lkdGg9ezgwMH0gd2lkdGg9XCIxMDAlXCI+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufVxuXG5Db250YWluZXIucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuIiwiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9EaXZpZGVyLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERpdmlkZXIoKSB7XG4gIHJldHVybiA8aHIgY2xhc3NOYW1lPXtzdHlsZXMuZGl2aWRlcn0gLz47XG59XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxudHlwZSBQcm9wcyA9IHtcbiAgZGlyZWN0aW9uPzogPyd1cCcgfCAncmlnaHQnIHwgJ2Rvd24nIHwgJ2xlZnQnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZXQocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgZGlyZWN0aW9uIH0gPSBwcm9wcztcbiAgbGV0IHBhdGg7XG4gIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgY2FzZSAndXAnOlxuICAgICAgcGF0aCA9ICdNMCAwIEwxMiAxMiBMMjQgMCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdyaWdodCc6XG4gICAgICBwYXRoID0gJ00yNCAwIEwxMiAxMiBMMjQgMjQnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZG93bic6XG4gICAgICBwYXRoID0gJ00wIDI0IEwxMiAxMiBMMjQgMjQnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbGVmdCc6XG4gICAgICBwYXRoID0gJ00wIDAgTDEyIDEyIEwwIDI0JztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+XG4gICAgICA8cGF0aCBkPXtwYXRofSAvPlxuICAgIDwvc3ZnPlxuICApO1xufVxuXG5DYXJldC5wcm9wVHlwZXMgPSB7XG4gIGRpcmVjdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsndXAnLCAncmlnaHQnLCAnZG93bicsICdsZWZ0J10pLFxufTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgQ2FyZXQgZnJvbSAnLi9DYXJldC5qcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ29udGVudHMuY3NzJztcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi9Db2xvcnMuY3NzJztcblxuLyogTmVlZGVkIHVudGlsIHRoaXMgRmxvdyBpc3N1ZSBpcyBmaXhlZDogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzM4MCAqL1xuLyogZXNsaW50IHF1b3RlLXByb3BzOiAwICovXG5jb25zdCBTUEFDRVNfSU5ERVhfTUFQID0ge1xuICAnMCc6ICd1cCcsXG4gICcxJzogJ3JpZ2h0JyxcbiAgJzInOiAnZG93bicsXG4gICczJzogJ2xlZnQnLFxufTtcblxuY29uc3QgRElSX0lOREVYX01BUCA9IHtcbiAgdXA6IDAsXG4gIHJpZ2h0OiAxLFxuICBkb3duOiAyLFxuICBsZWZ0OiAzLFxufTtcblxuY29uc3QgTUFSR0lOID0gMjQ7XG5leHBvcnQgY29uc3QgQ0FSRVRfSEVJR0hUID0gMjQ7XG5jb25zdCBDQVJFVF9PRkZTRVRfRlJPTV9TSURFID0gMjQ7XG5leHBvcnQgY29uc3QgQk9SREVSX1JBRElVUyA9IDg7XG5cbnR5cGUgTWFpbkRpciA9ID8oJ3VwJyB8ICdyaWdodCcgfCAnZG93bicgfCAnbGVmdCcpO1xudHlwZSBTdWJEaXIgPSAndXAnIHwgJ3JpZ2h0JyB8ICdkb3duJyB8ICdsZWZ0JyB8ICdtaWRkbGUnO1xuXG50eXBlIENsaWVudFJlY3QgPSB7XG4gIGJvdHRvbTogbnVtYmVyLFxuICBoZWlnaHQ6IG51bWJlcixcbiAgbGVmdDogbnVtYmVyLFxuICByaWdodDogbnVtYmVyLFxuICB0b3A6IG51bWJlcixcbiAgd2lkdGg6IG51bWJlcixcbn07XG5cbnR5cGUgV2luZG93ID0ge1xuICBoZWlnaHQ6IG51bWJlcixcbiAgd2lkdGg6IG51bWJlcixcbiAgc2Nyb2xsWTogbnVtYmVyLFxuICBzY3JvbGxYOiBudW1iZXIsXG59O1xuXG50eXBlIEZseW91dCA9IHsgaGVpZ2h0OiBudW1iZXIsIHdpZHRoOiBudW1iZXIgfTtcblxudHlwZSBTaGlmdCA9IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfTtcblxudHlwZSBFZGdlU2hpZnQgPSB7IGNhcmV0OiBTaGlmdCwgZmx5b3V0OiBTaGlmdCB9O1xuXG50eXBlIFByb3BzID0ge3xcbiAgYmdDb2xvcjogJ2JsdWUnIHwgJ2RhcmtHcmF5JyB8ICdvcmFuZ2UnIHwgJ3doaXRlJyxcbiAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlLFxuICBpZGVhbERpcmVjdGlvbj86ICd1cCcgfCAncmlnaHQnIHwgJ2Rvd24nIHwgJ2xlZnQnLFxuICBvbktleURvd246IChldmVudDogeyBrZXlDb2RlOiBudW1iZXIgfSkgPT4gdm9pZCxcbiAgb25SZXNpemU6ICgpID0+IHZvaWQsXG4gIHBvc2l0aW9uUmVsYXRpdmVUb0FuY2hvcj86IGJvb2xlYW4sXG4gIHJlbGF0aXZlT2Zmc2V0OiB7XG4gICAgeDogbnVtYmVyLFxuICAgIHk6IG51bWJlcixcbiAgfSxcbiAgc2hvdWxkRm9jdXM/OiBib29sZWFuLFxuICB0cmlnZ2VyUmVjdDogQ2xpZW50UmVjdCxcbiAgd2lkdGg6IG51bWJlcixcbnx9O1xuXG50eXBlIFN0YXRlID0ge1xuICBmbHlvdXRPZmZzZXQ6IHtcbiAgICB0b3A6ID9udW1iZXIsXG4gICAgbGVmdDogP251bWJlcixcbiAgfSxcbiAgY2FyZXRPZmZzZXQ6IHtcbiAgICB0b3A6ID9udW1iZXIsXG4gICAgcmlnaHQ6ID9udW1iZXIsXG4gICAgYm90dG9tOiA/bnVtYmVyLFxuICAgIGxlZnQ6ID9udW1iZXIsXG4gIH0sXG4gIG1haW5EaXI6ID9NYWluRGlyLFxufTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHRoZSBtYWluIGRpcmVjdGlvbiB0aGUgZmx5b3V0IG9wZW5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRNYWluRGlyKFxuICBmbHlvdXRTaXplOiBGbHlvdXQsXG4gIGlkZWFsRGlyZWN0aW9uOiBNYWluRGlyLFxuICB0cmlnZ2VyUmVjdDogQ2xpZW50UmVjdCxcbiAgd2luZG93U2l6ZTogV2luZG93XG4pIHtcbiAgLy8gQ2FsY3VsYXRlcyB0aGUgYXZhaWxhYmxlIHNwYWNlIGlmIHdlIHdlcmUgdG8gcGxhY2UgdGhlIGZseW91dCBpbiB0aGUgNCBtYWluIGRpcmVjdGlvbnNcbiAgLy8gdG8gZGV0ZXJtaW5lIHdoaWNoICdxdWFkcmFudCcgdG8gcG9zaXRpb24gdGhlIGZseW91dCBpbnNpZGUgb2ZcbiAgbGV0IHVwID0gdHJpZ2dlclJlY3QudG9wIC0gZmx5b3V0U2l6ZS5oZWlnaHQgLSBDQVJFVF9IRUlHSFQ7XG4gIGxldCByaWdodCA9XG4gICAgd2luZG93U2l6ZS53aWR0aCAtIGZseW91dFNpemUud2lkdGggLSBDQVJFVF9IRUlHSFQgLSB0cmlnZ2VyUmVjdC5yaWdodDtcbiAgbGV0IGRvd24gPVxuICAgIHdpbmRvd1NpemUuaGVpZ2h0IC0gZmx5b3V0U2l6ZS5oZWlnaHQgLSBDQVJFVF9IRUlHSFQgLSB0cmlnZ2VyUmVjdC5ib3R0b207XG4gIGxldCBsZWZ0ID0gdHJpZ2dlclJlY3QubGVmdCAtIGZseW91dFNpemUud2lkdGggLSBDQVJFVF9IRUlHSFQ7XG5cbiAgLy8gb3ZlcnJpZGVzIGF2YWlsYWJsZSBzcGFjZSB3aGVuIHRoZSB0cmlnZ2VyIGlzIGNsb3NlIHRvIHRoZSBlZGdlIG9mIHRoZSBzY3JlZW5cbiAgLy8gdHJpZ2dlciBpcyB0b28gY2xvc2UgdG8gdG9wL2JvdHRvbSBvZiBzY3JlZW4gZm9yIGxlZnQgJiByaWdodCBmbHlvdXRzXG4gIGlmIChcbiAgICB0cmlnZ2VyUmVjdC50b3AgPCBCT1JERVJfUkFESVVTIHx8XG4gICAgd2luZG93U2l6ZS5oZWlnaHQgLSB0cmlnZ2VyUmVjdC5ib3R0b20gPCBCT1JERVJfUkFESVVTXG4gICkge1xuICAgIGxlZnQgPSAwO1xuICAgIHJpZ2h0ID0gMDtcbiAgfVxuXG4gIC8vIHRyaWdnZXIgaXMgdG9vIGNsb3NlIHRvIHRoZSBsZWZ0L3JpZ2h0IG9mIHNjcmVlbiBmb3IgdXAgJiBkb3duIGZseW91dHNcbiAgaWYgKFxuICAgIHRyaWdnZXJSZWN0LmxlZnQgPCBCT1JERVJfUkFESVVTIHx8XG4gICAgd2luZG93U2l6ZS53aWR0aCAtIHRyaWdnZXJSZWN0LnJpZ2h0IDwgQk9SREVSX1JBRElVU1xuICApIHtcbiAgICB1cCA9IDA7XG4gICAgZG93biA9IDA7XG4gIH1cblxuICBjb25zdCBzcGFjZXMgPSBbdXAsIHJpZ2h0LCBkb3duLCBsZWZ0XTtcblxuICAvLyBJZGVudGlmeSBiZXN0IGRpcmVjdGlvbiBvZiBhdmFpbGFibGUgc3BhY2VzXG4gIGNvbnN0IG1heCA9IE1hdGgubWF4KC4uLnNwYWNlcyk7XG5cbiAgLy8gQ2hvc2UgdGhlIG1haW4gZGlyZWN0aW9uIGZvciB0aGUgZmx5b3V0IGJhc2VkIG9uIGF2YWlsYWJsZSBzcGFjZXMgJiB1c2VyIHByZWZlcmVuY2VcbiAgbGV0IG1haW5EaXI7XG4gIGlmIChpZGVhbERpcmVjdGlvbiAmJiBzcGFjZXNbRElSX0lOREVYX01BUFtpZGVhbERpcmVjdGlvbl1dID4gMCkge1xuICAgIC8vIHVzZXIgcHJlZlxuICAgIG1haW5EaXIgPSBpZGVhbERpcmVjdGlvbjtcbiAgfSBlbHNlIHtcbiAgICAvLyBJZiBubyBkaXJlY3Rpb24gcHJlZiwgY2hvc2UgdGhlIGRpcmVjdGlvbiBpbiB3aGljaCB0aGVyZSBpcyB0aGUgbW9zdCBzcGFjZSBhdmFpbGFibGVcbiAgICBtYWluRGlyID0gU1BBQ0VTX0lOREVYX01BUFtzcGFjZXMuaW5kZXhPZihtYXgpXTtcbiAgfVxuICByZXR1cm4gbWFpbkRpcjtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHRoZSBzdWIgZGlyZWN0aW9uIG9mIGhvdyB0aGUgZmx5b3V0IGlzIHBvc2l0aW9uZWQgd2l0aGluIHRoZSBtYWluIGRpclxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3ViRGlyKFxuICBmbHlvdXRTaXplOiBGbHlvdXQsXG4gIG1haW5EaXI6IE1haW5EaXIsXG4gIHRyaWdnZXJSZWN0OiBDbGllbnRSZWN0LFxuICB3aW5kb3dTaXplOiBXaW5kb3dcbikge1xuICAvLyBOb3cgdGhhdCB3ZSBoYXZlIHRoZSBtYWluIGRpcmVjdGlvbiwgY2hvc2UgZnJvbSAzIGNhcmV0IHBsYWNlbWVudHMgZm9yIHRoYXQgZGlyZWN0aW9uXG4gIGxldCBvZmZzZXQ7XG4gIGxldCB0cmlnZ2VyTWlkO1xuICBsZXQgd2luZG93U3BhY2VBdmFpbGFibGU7XG5cbiAgaWYgKG1haW5EaXIgPT09ICdyaWdodCcgfHwgbWFpbkRpciA9PT0gJ2xlZnQnKSB7XG4gICAgb2Zmc2V0ID0gZmx5b3V0U2l6ZS5oZWlnaHQgLyAyO1xuICAgIHRyaWdnZXJNaWQgPSB0cmlnZ2VyUmVjdC50b3AgKyAodHJpZ2dlclJlY3QuYm90dG9tIC0gdHJpZ2dlclJlY3QudG9wKSAvIDI7XG4gICAgd2luZG93U3BhY2VBdmFpbGFibGUgPSB3aW5kb3dTaXplLmhlaWdodDtcbiAgfSBlbHNlIHtcbiAgICAvLyAobWFpbkRpciA9PT0gJ3VwJyB8fCBtYWluRGlyID09PSAnZG93bicpXG4gICAgb2Zmc2V0ID0gZmx5b3V0U2l6ZS53aWR0aCAvIDI7XG4gICAgdHJpZ2dlck1pZCA9IHRyaWdnZXJSZWN0LmxlZnQgKyAodHJpZ2dlclJlY3QucmlnaHQgLSB0cmlnZ2VyUmVjdC5sZWZ0KSAvIDI7XG4gICAgd2luZG93U3BhY2VBdmFpbGFibGUgPSB3aW5kb3dTaXplLndpZHRoO1xuICB9XG5cbiAgY29uc3QgYWJvdmVPckxlZnQgPSB0cmlnZ2VyTWlkIC0gb2Zmc2V0IC0gTUFSR0lOO1xuICBjb25zdCBiZWxvd09yUmlnaHQgPSB3aW5kb3dTcGFjZUF2YWlsYWJsZSAtIHRyaWdnZXJNaWQgLSBvZmZzZXQgLSBNQVJHSU47XG4gIGxldCBzdWJEaXI7XG4gIGlmIChhYm92ZU9yTGVmdCA+IDAgJiYgYmVsb3dPclJpZ2h0ID4gMCkge1xuICAgIC8vIGNhcmV0IHNob3VsZCBnbyBpbiBtaWRkbGUgYi9jIGl0IGNhblxuICAgIHN1YkRpciA9ICdtaWRkbGUnO1xuICB9IGVsc2UgaWYgKGJlbG93T3JSaWdodCA+IDApIHtcbiAgICAvLyBjYXJldCBzaG91bGQgZ28gYXQgdG9wIGZvciBsZWZ0L3JpZ2h0IGFuZCBsZWZ0IGZvciB1cC9kb3duXG4gICAgc3ViRGlyID0gbWFpbkRpciA9PT0gJ2xlZnQnIHx8IG1haW5EaXIgPT09ICdyaWdodCcgPyAndXAnIDogJ2xlZnQnO1xuICB9IGVsc2Uge1xuICAgIC8vIGNhcmV0IHNob3VsZCBnbyBhdCBib3R0b20gZm9yIGxlZnQvcmlnaHQgYW5kIHJpZ2h0IGZvciB1cC9kb3duXG4gICAgc3ViRGlyID0gbWFpbkRpciA9PT0gJ2xlZnQnIHx8IG1haW5EaXIgPT09ICdyaWdodCcgPyAnZG93bicgOiAncmlnaHQnO1xuICB9XG4gIHJldHVybiBzdWJEaXI7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgYW1vdW50IHRoZSBmbHlvdXQgJiBjYXJldCBuZWVkIHRvIHNoaWZ0IG92ZXIgdG8gYWxpZ24gd2l0aCBkZXNpZ25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYWxjRWRnZVNoaWZ0cyhcbiAgc3ViRGlyOiBTdWJEaXIsXG4gIHRyaWdnZXJSZWN0OiBDbGllbnRSZWN0LFxuICB3aW5kb3dTaXplOiBXaW5kb3dcbikge1xuICAvLyBUYXJnZXQgdmFsdWVzIGZvciBmbHlvdXQgYW5kIGNhcmV0IHNoaWZ0c1xuICBsZXQgZmx5b3V0VmVydGljYWxTaGlmdCA9XG4gICAgQ0FSRVRfT0ZGU0VUX0ZST01fU0lERSAtICh0cmlnZ2VyUmVjdC5oZWlnaHQgLSBDQVJFVF9IRUlHSFQpIC8gMjtcbiAgbGV0IGZseW91dEhvcml6b250YWxTaGlmdCA9XG4gICAgQ0FSRVRfT0ZGU0VUX0ZST01fU0lERSAtICh0cmlnZ2VyUmVjdC53aWR0aCAtIENBUkVUX0hFSUdIVCkgLyAyO1xuICBsZXQgY2FyZXRWZXJ0aWNhbFNoaWZ0ID0gQ0FSRVRfSEVJR0hUO1xuICBsZXQgY2FyZXRIb3Jpem9udGFsU2hpZnQgPSBDQVJFVF9IRUlHSFQ7XG5cbiAgLy8gQ292ZXJzIGVkZ2UgY2FzZSB3aGVyZSB0cmlnZ2VyIGlzIGluIGEgY29ybmVyIGFuZCB3ZSBuZWVkIHRvIGFkanVzdCB0aGUgb2Zmc2V0IG9mIHRoZSBjYXJldFxuICAvLyB0byBzb21ldGhpbmcgc21hbGxlciB0aGFuIG5vcm1hbCBpbiBvcmRlclxuICBjb25zdCBpc0Nsb3NlVmVydGljYWxseSA9XG4gICAgdHJpZ2dlclJlY3QudG9wIC0gZmx5b3V0VmVydGljYWxTaGlmdCA8IDAgfHxcbiAgICB0cmlnZ2VyUmVjdC5ib3R0b20gKyBmbHlvdXRWZXJ0aWNhbFNoaWZ0ID4gd2luZG93U2l6ZS5oZWlnaHQ7XG4gIGNvbnN0IGlzQ2xvc2VIb3Jpem9udGFsbHkgPVxuICAgIHRyaWdnZXJSZWN0LmxlZnQgLSBmbHlvdXRIb3Jpem9udGFsU2hpZnQgPCAwIHx8XG4gICAgdHJpZ2dlclJlY3QucmlnaHQgKyBmbHlvdXRIb3Jpem9udGFsU2hpZnQgPiB3aW5kb3dTaXplLndpZHRoO1xuICBpZiAoaXNDbG9zZVZlcnRpY2FsbHkpIHtcbiAgICBmbHlvdXRWZXJ0aWNhbFNoaWZ0ID1cbiAgICAgIEJPUkRFUl9SQURJVVMgLSAodHJpZ2dlclJlY3QuaGVpZ2h0IC0gQ0FSRVRfSEVJR0hUKSAvIDI7XG4gICAgY2FyZXRWZXJ0aWNhbFNoaWZ0ID0gQk9SREVSX1JBRElVUztcbiAgfVxuICBpZiAoaXNDbG9zZUhvcml6b250YWxseSkge1xuICAgIGZseW91dEhvcml6b250YWxTaGlmdCA9XG4gICAgICBCT1JERVJfUkFESVVTIC0gKHRyaWdnZXJSZWN0LndpZHRoIC0gQ0FSRVRfSEVJR0hUKSAvIDI7XG4gICAgY2FyZXRIb3Jpem9udGFsU2hpZnQgPSBCT1JERVJfUkFESVVTO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBmbHlvdXQ6IHtcbiAgICAgIHg6IGZseW91dEhvcml6b250YWxTaGlmdCxcbiAgICAgIHk6IGZseW91dFZlcnRpY2FsU2hpZnQsXG4gICAgfSxcbiAgICBjYXJldDoge1xuICAgICAgeDogY2FyZXRIb3Jpem9udGFsU2hpZnQsXG4gICAgICB5OiBjYXJldFZlcnRpY2FsU2hpZnQsXG4gICAgfSxcbiAgfTtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIGZseW91dCBhbmQgY2FyZXQgb2Zmc2V0cyBmb3Igc3R5bGluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gYWRqdXN0T2Zmc2V0cyhcbiAgYmFzZTogeyB0b3A6IG51bWJlciwgbGVmdDogbnVtYmVyIH0sXG4gIGVkZ2VTaGlmdDogRWRnZVNoaWZ0LFxuICBmbHlvdXRTaXplOiBGbHlvdXQsXG4gIG1haW5EaXI6IE1haW5EaXIsXG4gIHN1YkRpcjogU3ViRGlyLFxuICB0cmlnZ2VyUmVjdDogQ2xpZW50UmVjdFxuKSB7XG4gIGxldCBmbHlvdXRMZWZ0ID0gYmFzZS5sZWZ0O1xuICBsZXQgZmx5b3V0VG9wID0gYmFzZS50b3A7XG5cbiAgbGV0IGNhcmV0VG9wID0gbWFpbkRpciA9PT0gJ2Rvd24nID8gLUNBUkVUX0hFSUdIVCA6IG51bGw7XG4gIGxldCBjYXJldFJpZ2h0ID0gbWFpbkRpciA9PT0gJ2xlZnQnID8gLUNBUkVUX0hFSUdIVCA6IG51bGw7XG4gIGxldCBjYXJldEJvdHRvbSA9IG51bGw7XG4gIGxldCBjYXJldExlZnQgPSBtYWluRGlyID09PSAncmlnaHQnID8gLUNBUkVUX0hFSUdIVCA6IG51bGw7XG5cbiAgaWYgKHN1YkRpciA9PT0gJ3VwJykge1xuICAgIGZseW91dFRvcCA9IGJhc2UudG9wIC0gZWRnZVNoaWZ0LmZseW91dC55O1xuICAgIGNhcmV0VG9wID0gZWRnZVNoaWZ0LmNhcmV0Lnk7XG4gIH0gZWxzZSBpZiAoc3ViRGlyID09PSAnZG93bicpIHtcbiAgICBmbHlvdXRUb3AgPVxuICAgICAgYmFzZS50b3AgLSBmbHlvdXRTaXplLmhlaWdodCArIHRyaWdnZXJSZWN0LmhlaWdodCArIGVkZ2VTaGlmdC5mbHlvdXQueTtcbiAgICBjYXJldEJvdHRvbSA9IGVkZ2VTaGlmdC5jYXJldC55O1xuICB9IGVsc2UgaWYgKHN1YkRpciA9PT0gJ2xlZnQnKSB7XG4gICAgZmx5b3V0TGVmdCA9IGJhc2UubGVmdCAtIGVkZ2VTaGlmdC5mbHlvdXQueDtcbiAgICBjYXJldExlZnQgPSBlZGdlU2hpZnQuY2FyZXQueDtcbiAgfSBlbHNlIGlmIChzdWJEaXIgPT09ICdyaWdodCcpIHtcbiAgICBmbHlvdXRMZWZ0ID1cbiAgICAgIGJhc2UubGVmdCAtIGZseW91dFNpemUud2lkdGggKyB0cmlnZ2VyUmVjdC53aWR0aCArIGVkZ2VTaGlmdC5mbHlvdXQueDtcbiAgICBjYXJldFJpZ2h0ID0gZWRnZVNoaWZ0LmNhcmV0Lng7XG4gIH0gZWxzZSBpZiAoc3ViRGlyID09PSAnbWlkZGxlJykge1xuICAgIGlmIChtYWluRGlyID09PSAnbGVmdCcgfHwgbWFpbkRpciA9PT0gJ3JpZ2h0Jykge1xuICAgICAgY29uc3QgdHJpZ2dlck1pZCA9IGZseW91dFRvcCArIHRyaWdnZXJSZWN0LmhlaWdodCAvIDI7XG4gICAgICBmbHlvdXRUb3AgPSB0cmlnZ2VyTWlkIC0gZmx5b3V0U2l6ZS5oZWlnaHQgLyAyO1xuICAgICAgY2FyZXRUb3AgPSAoZmx5b3V0U2l6ZS5oZWlnaHQgLSBDQVJFVF9IRUlHSFQpIC8gMjtcbiAgICB9XG4gICAgaWYgKG1haW5EaXIgPT09ICd1cCcgfHwgbWFpbkRpciA9PT0gJ2Rvd24nKSB7XG4gICAgICBjb25zdCB0cmlnZ2VyTWlkID0gZmx5b3V0TGVmdCArIHRyaWdnZXJSZWN0LndpZHRoIC8gMjtcbiAgICAgIGZseW91dExlZnQgPSB0cmlnZ2VyTWlkIC0gZmx5b3V0U2l6ZS53aWR0aCAvIDI7XG4gICAgICBjYXJldExlZnQgPSAoZmx5b3V0U2l6ZS53aWR0aCAtIENBUkVUX0hFSUdIVCkgLyAyO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZmx5b3V0T2Zmc2V0OiB7XG4gICAgICB0b3A6IGZseW91dFRvcCxcbiAgICAgIGxlZnQ6IGZseW91dExlZnQsXG4gICAgfSxcbiAgICBjYXJldE9mZnNldDoge1xuICAgICAgdG9wOiBjYXJldFRvcCxcbiAgICAgIHJpZ2h0OiBjYXJldFJpZ2h0LFxuICAgICAgYm90dG9tOiBjYXJldEJvdHRvbSxcbiAgICAgIGxlZnQ6IGNhcmV0TGVmdCxcbiAgICB9LFxuICB9O1xufVxuXG4vKiBDYWxjdWxhdGVzIGJhc2VsaW5lIHRvcCBhbmQgbGVmdCBvZmZzZXQgZm9yIGZseW91dCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJhc2VPZmZzZXRzKFxuICByZWxhdGl2ZU9mZnNldDogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9LFxuICBmbHlvdXRTaXplOiBGbHlvdXQsXG4gIG1haW5EaXI6IE1haW5EaXIsXG4gIHRyaWdnZXJSZWN0OiBDbGllbnRSZWN0LFxuICB3aW5kb3dTaXplOiBXaW5kb3dcbikge1xuICBjb25zdCBIQUxGX0NBUkVUID0gQ0FSRVRfSEVJR0hUIC8gMjtcbiAgLy8gVE9QIE9GRlNFVFxuICBsZXQgdG9wO1xuICBpZiAobWFpbkRpciA9PT0gJ2Rvd24nKSB7XG4gICAgdG9wID0gd2luZG93U2l6ZS5zY3JvbGxZICsgdHJpZ2dlclJlY3QuYm90dG9tICsgSEFMRl9DQVJFVDtcbiAgfSBlbHNlIGlmIChtYWluRGlyID09PSAndXAnKSB7XG4gICAgdG9wID1cbiAgICAgIHdpbmRvd1NpemUuc2Nyb2xsWSArICh0cmlnZ2VyUmVjdC50b3AgLSBmbHlvdXRTaXplLmhlaWdodCAtIEhBTEZfQ0FSRVQpO1xuICB9IGVsc2Uge1xuICAgIC8vIGxlZnQgYW5kIHJpZ2h0XG4gICAgdG9wID0gd2luZG93U2l6ZS5zY3JvbGxZICsgdHJpZ2dlclJlY3QudG9wO1xuICB9XG5cbiAgLy8gTEVGVCBPRkZTRVRcbiAgbGV0IGxlZnQ7XG4gIGlmIChtYWluRGlyID09PSAnbGVmdCcpIHtcbiAgICBsZWZ0ID1cbiAgICAgIHdpbmRvd1NpemUuc2Nyb2xsWCArICh0cmlnZ2VyUmVjdC5sZWZ0IC0gZmx5b3V0U2l6ZS53aWR0aCAtIEhBTEZfQ0FSRVQpO1xuICB9IGVsc2UgaWYgKG1haW5EaXIgPT09ICdyaWdodCcpIHtcbiAgICBsZWZ0ID0gd2luZG93U2l6ZS5zY3JvbGxYICsgdHJpZ2dlclJlY3QucmlnaHQgKyBIQUxGX0NBUkVUO1xuICB9IGVsc2Uge1xuICAgIC8vIGRvd24gYW5kIHVwXG4gICAgbGVmdCA9IHdpbmRvd1NpemUuc2Nyb2xsWCArIHRyaWdnZXJSZWN0LmxlZnQ7XG4gIH1cblxuICAvLyBBZGp1c3RzIGZvciB0aGUgcmVsYXRpdmUgcGFyZW50IGNvbnRhaW5lclxuICB0b3AgLT0gcmVsYXRpdmVPZmZzZXQueTtcbiAgbGVmdCAtPSByZWxhdGl2ZU9mZnNldC54O1xuICByZXR1cm4geyB0b3AsIGxlZnQgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIHN0YXRlOiBTdGF0ZSA9IHtcbiAgICBmbHlvdXRPZmZzZXQ6IHtcbiAgICAgIHRvcDogdW5kZWZpbmVkLFxuICAgICAgcmlnaHQ6IHVuZGVmaW5lZCxcbiAgICAgIGJvdHRvbTogdW5kZWZpbmVkLFxuICAgICAgbGVmdDogdW5kZWZpbmVkLFxuICAgIH0sXG4gICAgY2FyZXRPZmZzZXQ6IHtcbiAgICAgIHRvcDogdW5kZWZpbmVkLFxuICAgICAgcmlnaHQ6IHVuZGVmaW5lZCxcbiAgICAgIGJvdHRvbTogdW5kZWZpbmVkLFxuICAgICAgbGVmdDogdW5kZWZpbmVkLFxuICAgIH0sXG4gICAgbWFpbkRpcjogbnVsbCxcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldEZseW91dFBvc2l0aW9uKHRoaXMucHJvcHMpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucHJvcHMuc2hvdWxkRm9jdXMgJiYgdGhpcy5mbHlvdXQpIHtcbiAgICAgICAgdGhpcy5mbHlvdXQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5wcm9wcy5vblJlc2l6ZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLnByb3BzLm9uS2V5RG93bik7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogUHJvcHMpIHtcbiAgICB0aGlzLnNldEZseW91dFBvc2l0aW9uKG5leHRQcm9wcyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5wcm9wcy5vblJlc2l6ZSk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLnByb3BzLm9uS2V5RG93bik7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB0aGUgbWFpbiBkaXJlY2l0b24sIHN1YiBkaXJlY3Rpb24sIGFuZCBjb3JyZXNwb25kaW5nIG9mZnNldHMgbmVlZGVkXG4gICAqIHRvIGNvcnJlY3RseSBwb3NpdGlvbiB0aGUgb2Zmc2V0XG4gICAqL1xuICBzZXRGbHlvdXRQb3NpdGlvbiA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICByZWxhdGl2ZU9mZnNldCxcbiAgICAgIGlkZWFsRGlyZWN0aW9uLFxuICAgICAgcG9zaXRpb25SZWxhdGl2ZVRvQW5jaG9yLFxuICAgICAgdHJpZ2dlclJlY3QsXG4gICAgICB3aWR0aCxcbiAgICB9ID0gcHJvcHM7XG5cbiAgICAvLyBTY3JvbGwgbm90IG5lZWRlZCBmb3IgcmVsYXRpdmUgZWxlbWVudHNcbiAgICAvLyBXZSBjYW4ndCB1c2Ugd2luZG93LnNjcm9sbFggLyB3aW5kb3cuc2Nyb2xsWSBzaW5jZSBpdCdzIG5vdCBzdXBwb3J0ZWQgYnkgSUUxMVxuICAgIGNvbnN0IHNjcm9sbFggPSBwb3NpdGlvblJlbGF0aXZlVG9BbmNob3JcbiAgICAgID8gMFxuICAgICAgOiB3aW5kb3cucGFnZVhPZmZzZXQgfHxcbiAgICAgICAgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCkgfHxcbiAgICAgICAgMDtcbiAgICBjb25zdCBzY3JvbGxZID0gcG9zaXRpb25SZWxhdGl2ZVRvQW5jaG9yXG4gICAgICA/IDBcbiAgICAgIDogd2luZG93LnBhZ2VZT2Zmc2V0IHx8XG4gICAgICAgIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCkgfHxcbiAgICAgICAgMDtcblxuICAgIGNvbnN0IHdpbmRvd1NpemUgPSB7XG4gICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgIHNjcm9sbFgsXG4gICAgICBzY3JvbGxZLFxuICAgIH07XG5cbiAgICBjb25zdCBmbHlvdXRTaXplID0ge1xuICAgICAgaGVpZ2h0OiB0aGlzLmZseW91dCA/IHRoaXMuZmx5b3V0LmNsaWVudEhlaWdodCA6IDAsXG4gICAgICB3aWR0aCxcbiAgICB9O1xuXG4gICAgLy8gRmlyc3QgY2hvb3NlIG9uZSBvZiA0IG1haW4gZGlyZWN0aW9uXG4gICAgY29uc3QgbWFpbkRpciA9IGdldE1haW5EaXIoXG4gICAgICBmbHlvdXRTaXplLFxuICAgICAgaWRlYWxEaXJlY3Rpb24sXG4gICAgICB0cmlnZ2VyUmVjdCxcbiAgICAgIHdpbmRvd1NpemVcbiAgICApO1xuXG4gICAgLy8gTm93IHRoYXQgd2UgaGF2ZSB0aGUgbWFpbiBkaXJlY3Rpb24sIGNob3NlIGZyb20gMyBjYXJldCBwbGFjZW1lbnRzIGZvciB0aGF0IGRpcmVjdGlvblxuICAgIGNvbnN0IHN1YkRpciA9IGdldFN1YkRpcihmbHlvdXRTaXplLCBtYWluRGlyLCB0cmlnZ2VyUmVjdCwgd2luZG93U2l6ZSk7XG5cbiAgICAvLyBHZXRzIHRoZSBiYXNlIG9mZnNldCB0aGF0IHBvc2l0aW9ucyB0aGUgZmx5b3V0IGJhc2VkIG9uIHRoZSBtYWluIGRpcmVjdGlvbiBvbmx5XG4gICAgY29uc3QgYmFzZSA9IGJhc2VPZmZzZXRzKFxuICAgICAgcmVsYXRpdmVPZmZzZXQsXG4gICAgICBmbHlvdXRTaXplLFxuICAgICAgbWFpbkRpcixcbiAgICAgIHRyaWdnZXJSZWN0LFxuICAgICAgd2luZG93U2l6ZVxuICAgICk7XG5cbiAgICAvLyBHZXRzIHRoZSBlZGdlIHNoaWZ0cyBmb3IgdGhlIGZseW91dFxuICAgIGNvbnN0IGVkZ2VTaGlmdHMgPSBjYWxjRWRnZVNoaWZ0cyhzdWJEaXIsIHRyaWdnZXJSZWN0LCB3aW5kb3dTaXplKTtcblxuICAgIC8vIEFkanVzdHMgZm9yIHRoZSBzdWJkaXJlY3Rpb24gb2YgdGhlIGNhcmV0XG4gICAgY29uc3QgeyBmbHlvdXRPZmZzZXQsIGNhcmV0T2Zmc2V0IH0gPSBhZGp1c3RPZmZzZXRzKFxuICAgICAgYmFzZSxcbiAgICAgIGVkZ2VTaGlmdHMsXG4gICAgICBmbHlvdXRTaXplLFxuICAgICAgbWFpbkRpcixcbiAgICAgIHN1YkRpcixcbiAgICAgIHRyaWdnZXJSZWN0XG4gICAgKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY2FyZXRPZmZzZXQsXG4gICAgICBmbHlvdXRPZmZzZXQsXG4gICAgICBtYWluRGlyLFxuICAgIH0pO1xuICB9O1xuXG4gIGZseW91dDogP0hUTUxFbGVtZW50O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGJnQ29sb3IsIGNoaWxkcmVuLCB3aWR0aCB9ID0gdGhpcy5wcm9wcztcblxuICAgIC8vIE5lZWRlZCB0byBwcmV2ZW50IFVJIHRocmFzaGluZ1xuICAgIGNvbnN0IHZpc2liaWxpdHkgPSB0aGlzLnN0YXRlLm1haW5EaXIgPT09IG51bGwgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJztcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gYCR7YmdDb2xvcn1CZ2A7XG4gICAgY29uc3Qgc3Ryb2tlID0gYmdDb2xvciA9PT0gJ3doaXRlJyA/ICcjZWZlZmVmJyA6IG51bGw7XG4gICAgY29uc3QgYm9yZGVyQ29sb3IgPSBiZ0NvbG9yID09PSAnd2hpdGUnID8gJ2xpZ2h0R3JheScgOiBiZ0NvbG9yO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfVxuICAgICAgICBzdHlsZT17eyBzdHJva2UsIHZpc2liaWxpdHksIC4uLnRoaXMuc3RhdGUuZmx5b3V0T2Zmc2V0IH19XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICBjb2xvcnNbYmFja2dyb3VuZF0sXG4gICAgICAgICAgICBjb2xvcnNbYm9yZGVyQ29sb3JdLFxuICAgICAgICAgICAgc3R5bGVzLmRpbWVuc2lvbnMsXG4gICAgICAgICAgICBzdHlsZXMuY29udGVudHNcbiAgICAgICAgICApfVxuICAgICAgICAgIHJlZj17YyA9PiB7XG4gICAgICAgICAgICB0aGlzLmZseW91dCA9IGM7XG4gICAgICAgICAgfX1cbiAgICAgICAgICB0YWJJbmRleD17LTF9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmRpbWVuc2lvbnMsIHN0eWxlcy5pbm5lckNvbnRlbnRzKX1cbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjb2xvcnNbYmdDb2xvcl0sIHN0eWxlcy5jYXJldCl9XG4gICAgICAgICAgICBzdHlsZT17eyAuLi50aGlzLnN0YXRlLmNhcmV0T2Zmc2V0IH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENhcmV0IGRpcmVjdGlvbj17dGhpcy5zdGF0ZS5tYWluRGlyfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuLyogZXNsaW50IHJlYWN0L25vLXVudXNlZC1wcm9wLXR5cGVzOiAwICovXG5Db250ZW50cy5wcm9wVHlwZXMgPSB7XG4gIGJnQ29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ2JsdWUnLCAnZGFya0dyYXknLCAnb3JhbmdlJywgJ3doaXRlJ10pLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGlkZWFsRGlyZWN0aW9uOiBQcm9wVHlwZXMub25lT2YoWyd1cCcsICdyaWdodCcsICdkb3duJywgJ2xlZnQnXSksXG4gIG9uS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25SZXNpemU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHJlbGF0aXZlT2Zmc2V0OiBQcm9wVHlwZXMuZXhhY3QoeyB4OiBQcm9wVHlwZXMubnVtYmVyLCB5OiBQcm9wVHlwZXMubnVtYmVyIH0pLFxuICBwb3NpdGlvblJlbGF0aXZlVG9BbmNob3I6IFByb3BUeXBlcy5ib29sLFxuICBzaG91bGRGb2N1czogUHJvcFR5cGVzLmJvb2wsXG4gIHRyaWdnZXJSZWN0OiBQcm9wVHlwZXMuZXhhY3Qoe1xuICAgIGJvdHRvbTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbGVmdDogUHJvcFR5cGVzLm51bWJlcixcbiAgICByaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgICB0b3A6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gIH0pLFxuICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcbn07XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZmluZERPTU5vZGUgfSBmcm9tICdyZWFjdC1kb20nO1xuXG50eXBlIFByb3BzID0ge3xcbiAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlLFxuICBvbkNsaWNrPzogKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB2b2lkLFxufH07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE91dHNpZGVFdmVudEJlaGF2aW9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGlja0V2ZW50LCB7XG4gICAgICBjYXB0dXJlOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrRXZlbnQsIHtcbiAgICAgIGNhcHR1cmU6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDbGlja0V2ZW50ID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWZpbmQtZG9tLW5vZGVcbiAgICBjb25zdCBlbCA9IGZpbmRET01Ob2RlKHRoaXMpO1xuICAgIGlmIChcbiAgICAgICF0aGlzLnByb3BzLm9uQ2xpY2sgfHxcbiAgICAgICFlbCB8fFxuICAgICAgKGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIE5vZGUgJiYgZWwuY29udGFpbnMoZXZlbnQudGFyZ2V0KSlcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gIH1cbn1cbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENvbnRlbnRzIGZyb20gJy4vQ29udGVudHMuanMnO1xuaW1wb3J0IE91dHNpZGVFdmVudEJlaGF2aW9yIGZyb20gJy4vYmVoYXZpb3JzL091dHNpZGVFdmVudEJlaGF2aW9yLmpzJztcblxudHlwZSBQcm9wcyA9IHt8XG4gIGFuY2hvcjogP0hUTUxFbGVtZW50LFxuICBiZ0NvbG9yOiAnYmx1ZScgfCAnZGFya0dyYXknIHwgJ29yYW5nZScgfCAnd2hpdGUnLFxuICBjaGlsZHJlbj86IFJlYWN0Lk5vZGUsXG4gIGlkZWFsRGlyZWN0aW9uPzogJ3VwJyB8ICdyaWdodCcgfCAnZG93bicgfCAnbGVmdCcsXG4gIG9uRGlzbWlzczogKCkgPT4gdm9pZCxcbiAgcG9zaXRpb25SZWxhdGl2ZVRvQW5jaG9yOiBib29sZWFuLFxuICBzaG91bGRGb2N1cz86IGJvb2xlYW4sXG4gIHNpemU/OiAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8IG51bWJlcixcbnx9O1xuXG5jb25zdCBTSVpFX1dJRFRIX01BUCA9IHtcbiAgeHM6IDE4NSxcbiAgc206IDIzMCxcbiAgbWQ6IDI4NCxcbiAgbGc6IDMyMCxcbiAgeGw6IDM3NSxcbn07XG5cbmNvbnN0IEVTQ0FQRV9LRVlfQ09ERSA9IDI3O1xuXG50eXBlIENsaWVudFJlY3QgPSB7XG4gIGJvdHRvbTogbnVtYmVyLFxuICBoZWlnaHQ6IG51bWJlcixcbiAgbGVmdDogbnVtYmVyLFxuICByaWdodDogbnVtYmVyLFxuICB0b3A6IG51bWJlcixcbiAgd2lkdGg6IG51bWJlcixcbn07XG5cbnR5cGUgU3RhdGUgPSB7XG4gIHJlbGF0aXZlT2Zmc2V0OiB7XG4gICAgeDogbnVtYmVyLFxuICAgIHk6IG51bWJlcixcbiAgfSxcbiAgdHJpZ2dlckJvdW5kaW5nUmVjdDogQ2xpZW50UmVjdCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIHN0YXRlOiBTdGF0ZSA9IHtcbiAgICByZWxhdGl2ZU9mZnNldDoge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgfSxcbiAgICB0cmlnZ2VyQm91bmRpbmdSZWN0OiB7XG4gICAgICBib3R0b206IDAsXG4gICAgICBoZWlnaHQ6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICB0b3A6IDAsXG4gICAgICB3aWR0aDogMCxcbiAgICB9LFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudXBkYXRlVHJpZ2dlclJlY3QodGhpcy5wcm9wcyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogUHJvcHMpIHtcbiAgICB0aGlzLnVwZGF0ZVRyaWdnZXJSZWN0KG5leHRQcm9wcyk7XG4gIH1cblxuICBoYW5kbGVLZXlEb3duID0gKGV2ZW50OiB7IGtleUNvZGU6IG51bWJlciB9KSA9PiB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEVTQ0FQRV9LRVlfQ09ERSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkRpc21pc3MoKTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlUGFnZUNsaWNrID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgIGlmIChcbiAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIE5vZGUgJiZcbiAgICAgIHRoaXMucHJvcHMuYW5jaG9yICYmXG4gICAgICAhdGhpcy5wcm9wcy5hbmNob3IuY29udGFpbnMoZXZlbnQudGFyZ2V0KVxuICAgICkge1xuICAgICAgdGhpcy5wcm9wcy5vbkRpc21pc3MoKTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuICAgIHRoaXMudXBkYXRlVHJpZ2dlclJlY3QodGhpcy5wcm9wcyk7XG4gIH07XG5cbiAgdXBkYXRlVHJpZ2dlclJlY3QgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBhbmNob3IsIHBvc2l0aW9uUmVsYXRpdmVUb0FuY2hvciB9ID0gcHJvcHM7XG4gICAgbGV0IHRyaWdnZXJCb3VuZGluZ1JlY3Q7XG4gICAgbGV0IHJlbGF0aXZlT2Zmc2V0O1xuICAgIGlmIChhbmNob3IpIHtcbiAgICAgIHRyaWdnZXJCb3VuZGluZ1JlY3QgPSBhbmNob3IuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgIC8vIE5lZWRlZCBmb3IgY29ycmVjdCBwb3NpdGlvbmluZyB3aXRoaW4gQ29udGVudHMuanNcbiAgICAgIHJlbGF0aXZlT2Zmc2V0ID0ge1xuICAgICAgICB4OiBwb3NpdGlvblJlbGF0aXZlVG9BbmNob3JcbiAgICAgICAgICA/IHRyaWdnZXJCb3VuZGluZ1JlY3QubGVmdCAtIGFuY2hvci5vZmZzZXRMZWZ0XG4gICAgICAgICAgOiAwLFxuICAgICAgICB5OiBwb3NpdGlvblJlbGF0aXZlVG9BbmNob3JcbiAgICAgICAgICA/IHRyaWdnZXJCb3VuZGluZ1JlY3QudG9wIC0gYW5jaG9yLm9mZnNldFRvcFxuICAgICAgICAgIDogMCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHJlbGF0aXZlT2Zmc2V0LCB0cmlnZ2VyQm91bmRpbmdSZWN0IH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBhbmNob3IsXG4gICAgICBiZ0NvbG9yLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBpZGVhbERpcmVjdGlvbixcbiAgICAgIHBvc2l0aW9uUmVsYXRpdmVUb0FuY2hvcixcbiAgICAgIHNob3VsZEZvY3VzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghYW5jaG9yKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMucHJvcHMuc2l6ZSA/IHRoaXMucHJvcHMuc2l6ZSA6ICdzbSc7XG4gICAgY29uc3Qgd2lkdGggPSB0eXBlb2Ygc2l6ZSA9PT0gJ3N0cmluZycgPyBTSVpFX1dJRFRIX01BUFtzaXplXSA6IHNpemU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxPdXRzaWRlRXZlbnRCZWhhdmlvciBvbkNsaWNrPXt0aGlzLmhhbmRsZVBhZ2VDbGlja30+XG4gICAgICAgIDxDb250ZW50c1xuICAgICAgICAgIGJnQ29sb3I9e2JnQ29sb3J9XG4gICAgICAgICAgaWRlYWxEaXJlY3Rpb249e2lkZWFsRGlyZWN0aW9ufVxuICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVLZXlEb3dufVxuICAgICAgICAgIG9uUmVzaXplPXt0aGlzLmhhbmRsZVJlc2l6ZX1cbiAgICAgICAgICBwb3NpdGlvblJlbGF0aXZlVG9BbmNob3I9e3Bvc2l0aW9uUmVsYXRpdmVUb0FuY2hvcn1cbiAgICAgICAgICByZWxhdGl2ZU9mZnNldD17dGhpcy5zdGF0ZS5yZWxhdGl2ZU9mZnNldH1cbiAgICAgICAgICBzaG91bGRGb2N1cz17c2hvdWxkRm9jdXN9XG4gICAgICAgICAgdHJpZ2dlclJlY3Q9e3RoaXMuc3RhdGUudHJpZ2dlckJvdW5kaW5nUmVjdH1cbiAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQ29udGVudHM+XG4gICAgICA8L091dHNpZGVFdmVudEJlaGF2aW9yPlxuICAgICk7XG4gIH1cbn1cblxuQ29udHJvbGxlci5wcm9wVHlwZXMgPSB7XG4gIGFuY2hvcjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjb250YWluczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZ2V0Qm91bmRpbmdDbGllbnRSZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgfSksXG4gIGJnQ29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ2JsdWUnLCAnZGFya0dyYXknLCAnb3JhbmdlJywgJ3doaXRlJ10pLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGlkZWFsRGlyZWN0aW9uOiBQcm9wVHlwZXMub25lT2YoWyd1cCcsICdyaWdodCcsICdkb3duJywgJ2xlZnQnXSksXG4gIG9uRGlzbWlzczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgcG9zaXRpb25SZWxhdGl2ZVRvQW5jaG9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2hvdWxkRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5vbmVPZihbJ3hzJywgJ3NtJywgJ21kJywgJ2xnJywgJ3hsJ10pLCAvLyBkZWZhdWx0OiBzbVxuICBdKSxcbn07XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBDb250cm9sbGVyIGZyb20gJy4vQ29udHJvbGxlci5qcyc7XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBhbmNob3I6ID9IVE1MRWxlbWVudCxcbiAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlLFxuICBpZGVhbERpcmVjdGlvbj86ICd1cCcgfCAncmlnaHQnIHwgJ2Rvd24nIHwgJ2xlZnQnLFxuICBvbkRpc21pc3M6ICgpID0+IHZvaWQsXG4gIHBvc2l0aW9uUmVsYXRpdmVUb0FuY2hvcj86IGJvb2xlYW4sXG4gIGNvbG9yPzogJ2JsdWUnIHwgJ29yYW5nZScgfCAnd2hpdGUnIHwgJ2RhcmtHcmF5JyxcbiAgc2hvdWxkRm9jdXM/OiBib29sZWFuLFxuICBzaXplPzogJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCBudW1iZXIsXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmx5b3V0KHByb3BzOiBQcm9wcykge1xuICBjb25zdCB7XG4gICAgYW5jaG9yLFxuICAgIGNoaWxkcmVuLFxuICAgIGlkZWFsRGlyZWN0aW9uLFxuICAgIG9uRGlzbWlzcyxcbiAgICBwb3NpdGlvblJlbGF0aXZlVG9BbmNob3IgPSB0cnVlLFxuICAgIGNvbG9yID0gJ3doaXRlJyxcbiAgICBzaG91bGRGb2N1cyA9IHRydWUsXG4gICAgc2l6ZSxcbiAgfSA9IHByb3BzO1xuXG4gIGlmICghYW5jaG9yKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDb250cm9sbGVyXG4gICAgICBhbmNob3I9e2FuY2hvcn1cbiAgICAgIGJnQ29sb3I9e2NvbG9yfVxuICAgICAgaWRlYWxEaXJlY3Rpb249e2lkZWFsRGlyZWN0aW9ufVxuICAgICAgb25EaXNtaXNzPXtvbkRpc21pc3N9XG4gICAgICBwb3NpdGlvblJlbGF0aXZlVG9BbmNob3I9e3Bvc2l0aW9uUmVsYXRpdmVUb0FuY2hvcn1cbiAgICAgIHNob3VsZEZvY3VzPXtzaG91bGRGb2N1c31cbiAgICAgIHNpemU9e3NpemV9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ29udHJvbGxlcj5cbiAgKTtcbn1cblxuRmx5b3V0LnByb3BUeXBlcyA9IHtcbiAgYW5jaG9yOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGNvbnRhaW5zOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBnZXRCb3VuZGluZ0NsaWVudFJlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICB9KSxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBpZGVhbERpcmVjdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsndXAnLCAncmlnaHQnLCAnZG93bicsICdsZWZ0J10pLFxuICBvbkRpc21pc3M6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHBvc2l0aW9uUmVsYXRpdmVUb0FuY2hvcjogUHJvcFR5cGVzLmJvb2wsXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydibHVlJywgJ29yYW5nZScsICd3aGl0ZScsICdkYXJrR3JheSddKSxcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMub25lT2YoWyd4cycsICdzbScsICdtZCcsICdsZycsICd4bCddKSwgLy8gZGVmYXVsdDogc21cbiAgXSksXG59O1xuIiwiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vR3JvdXBBdmF0YXIuY3NzJztcbmltcG9ydCBCb3ggZnJvbSAnLi9Cb3guanMnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xuaW1wb3J0IHR5cG9ncmFwaHkgZnJvbSAnLi9UeXBvZ3JhcGh5LmNzcyc7XG5cbmZ1bmN0aW9uIHppcChhLCBiKSB7XG4gIHJldHVybiBhLm1hcCgoaXRlbSwgaWR4KSA9PiBbaXRlbSwgYltpZHhdXSk7XG59XG5cbmNvbnN0IEJPUkRFUl9XSURUSCA9IDI7XG5cbmNvbnN0IEFWQVRBUl9TSVpFUyA9IHtcbiAgc206IDI0LFxuICBtZDogNDAsXG4gIGxnOiA3Mixcbn07XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBjb2xsYWJvcmF0b3JzOiBBcnJheTx7fFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBzcmM/OiBzdHJpbmcsXG4gIHx9PixcbiAgb3V0bGluZT86IGJvb2xlYW4sXG4gIHNpemU/OiAnc20nIHwgJ21kJyB8ICdsZycsXG58fTtcblxuY29uc3QgYXZhdGFyTGF5b3V0ID0gKG4sIHNpemUpID0+IHtcbiAgc3dpdGNoIChuKSB7XG4gICAgY2FzZSAwOlxuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHsgdG9wOiAwLCBsZWZ0OiAwLCB3aWR0aDogc2l6ZSwgaGVpZ2h0OiBzaXplLCB0ZXh0TGF5b3V0OiAnY2VudGVyJyB9LFxuICAgICAgXTtcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gW1xuICAgICAgICB7XG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgd2lkdGg6IGBjYWxjKDUwJSAtICR7Qk9SREVSX1dJRFRIIC8gMn1weClgLFxuICAgICAgICAgIGhlaWdodDogc2l6ZSxcbiAgICAgICAgICB0ZXh0TGF5b3V0OiAnY2VudGVyJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBsZWZ0OiBgY2FsYyg1MCUgKyAke0JPUkRFUl9XSURUSCAvIDJ9cHgpYCxcbiAgICAgICAgICB3aWR0aDogYGNhbGMoNTAlIC0gJHtCT1JERVJfV0lEVEggLyAyfXB4KWAsXG4gICAgICAgICAgaGVpZ2h0OiBzaXplLFxuICAgICAgICAgIHRleHRMYXlvdXQ6ICdjZW50ZXInLFxuICAgICAgICB9LFxuICAgICAgXTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFtcbiAgICAgICAge1xuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgIHdpZHRoOiBgY2FsYyg1MCUgLSAke0JPUkRFUl9XSURUSCAvIDJ9cHgpYCxcbiAgICAgICAgICBoZWlnaHQ6IHNpemUsXG4gICAgICAgICAgdGV4dExheW91dDogJ2NlbnRlcicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgbGVmdDogYGNhbGMoNTAlICsgJHtCT1JERVJfV0lEVEggLyAyfXB4KWAsXG4gICAgICAgICAgd2lkdGg6ICdjYWxjKDUwJSknLFxuICAgICAgICAgIGhlaWdodDogYGNhbGMoNTAlIC0gJHtCT1JERVJfV0lEVEggLyAyfXB4KWAsXG4gICAgICAgICAgdGV4dExheW91dDogJ3RvcExlZnQnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdG9wOiBgY2FsYyg1MCUgKyAke0JPUkRFUl9XSURUSCAvIDJ9cHgpYCxcbiAgICAgICAgICBsZWZ0OiBgY2FsYyg1MCUgKyAke0JPUkRFUl9XSURUSCAvIDJ9cHgpYCxcbiAgICAgICAgICB3aWR0aDogJ2NhbGMoNTAlKScsXG4gICAgICAgICAgaGVpZ2h0OiBgY2FsYyg1MCUgLSAke0JPUkRFUl9XSURUSCAvIDJ9cHgpYCxcbiAgICAgICAgICB0ZXh0TGF5b3V0OiAnYm90dG9tTGVmdCcsXG4gICAgICAgIH0sXG4gICAgICBdO1xuICB9XG59O1xuXG5jb25zdCBkZWdUb1JhZCA9IGRlZyA9PiBkZWcgKiAoTWF0aC5QSSAvIDE4MCk7XG5cbmNvbnN0IERlZmF1bHRBdmF0YXIgPSAocHJvcHM6IHt8XG4gIHNpemU6IHN0cmluZyB8IG51bWJlcixcbiAgbmFtZTogc3RyaW5nLFxuICB0ZXh0TGF5b3V0OiAnY2VudGVyJyB8ICd0b3BMZWZ0JyB8ICdib3R0b21MZWZ0Jyxcbnx9KSA9PiB7XG4gIGNvbnN0IHsgc2l6ZSwgbmFtZSwgdGV4dExheW91dCB9ID0gcHJvcHM7XG5cbiAgY29uc3QgcXVhcnRlclBhZGRpbmcgPSBgY2FsYygke01hdGguc2luKGRlZ1RvUmFkKDQ1KSl9ICogKCR7c2l6ZX0pIC8gMilgO1xuXG4gIGNvbnN0IGluaXRpYWwgPSAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgIHZpZXdCb3g9XCItNTAgLTUwIDEwMCAxMDBcIlxuICAgICAgdmVyc2lvbj1cIjEuMVwiXG4gICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICA+XG4gICAgICA8dGl0bGU+e25hbWV9PC90aXRsZT5cbiAgICAgIDx0ZXh0XG4gICAgICAgIGZvbnRTaXplPVwiNTBweFwiXG4gICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgICAgZG9taW5hbnRCYXNlbGluZT1cImNlbnRyYWxcIlxuICAgICAgICB0ZXh0QW5jaG9yPVwibWlkZGxlXCJcbiAgICAgICAgY2xhc3NOYW1lPXtbXG4gICAgICAgICAgdHlwb2dyYXBoeS5hbnRpYWxpYXNlZCxcbiAgICAgICAgICB0eXBvZ3JhcGh5LnNhbnNTZXJpZixcbiAgICAgICAgICB0eXBvZ3JhcGh5LmxlYWRpbmdTbWFsbCxcbiAgICAgICAgICB0eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkLFxuICAgICAgICBdLmpvaW4oJyAnKX1cbiAgICAgID5cbiAgICAgICAge25hbWUgPyBbLi4ubmFtZV1bMF0udG9VcHBlckNhc2UoKSA6ICcnfVxuICAgICAgPC90ZXh0PlxuICAgIDwvc3ZnPlxuICApO1xuICBzd2l0Y2ggKHRleHRMYXlvdXQpIHtcbiAgICBjYXNlICdib3R0b21MZWZ0JzpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxCb3hcbiAgICAgICAgICBhcmlhLWxhYmVsPXtuYW1lfVxuICAgICAgICAgIGNvbG9yPVwiZ3JheVwiXG4gICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgIGFsaWduSXRlbXM9XCJlbmRcIlxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5saW5lU3R5bGU9e3tcbiAgICAgICAgICAgIF9fc3R5bGU6IHtcbiAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogcXVhcnRlclBhZGRpbmcsXG4gICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogcXVhcnRlclBhZGRpbmcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7aW5pdGlhbH1cbiAgICAgICAgPC9Cb3g+XG4gICAgICApO1xuICAgIGNhc2UgJ3RvcExlZnQnOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEJveFxuICAgICAgICAgIGFyaWEtbGFiZWw9e25hbWV9XG4gICAgICAgICAgY29sb3I9XCJncmF5XCJcbiAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgYWxpZ25JdGVtcz1cInN0YXJ0XCJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubGluZVN0eWxlPXt7XG4gICAgICAgICAgICBfX3N0eWxlOiB7XG4gICAgICAgICAgICAgIHBhZGRpbmdUb3A6IHF1YXJ0ZXJQYWRkaW5nLFxuICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IHF1YXJ0ZXJQYWRkaW5nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge2luaXRpYWx9XG4gICAgICAgIDwvQm94PlxuICAgICAgKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEJveFxuICAgICAgICAgIGFyaWEtbGFiZWw9e25hbWV9XG4gICAgICAgICAgY29sb3I9XCJncmF5XCJcbiAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAge2luaXRpYWx9XG4gICAgICAgIDwvQm94PlxuICAgICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR3JvdXBBdmF0YXIocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgY29sbGFib3JhdG9ycywgb3V0bGluZSwgc2l6ZSB9ID0gcHJvcHM7XG4gIGNvbnN0IGF2YXRhcldpZHRoID0gc2l6ZSA/IEFWQVRBUl9TSVpFU1tzaXplXSA6ICcxMDAlJztcbiAgY29uc3QgYXZhdGFySGVpZ2h0ID0gc2l6ZSA/IEFWQVRBUl9TSVpFU1tzaXplXSA6ICcnO1xuICBjb25zdCBwb3NpdGlvbnMgPSBhdmF0YXJMYXlvdXQoY29sbGFib3JhdG9ycy5sZW5ndGgsIGF2YXRhcldpZHRoKTtcbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcbiAgICAgIHNoYXBlPVwiY2lyY2xlXCJcbiAgICAgIHdpZHRoPXthdmF0YXJXaWR0aH1cbiAgICAgIGhlaWdodD17YXZhdGFySGVpZ2h0fVxuICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICBkYW5nZXJvdXNseVNldElubGluZVN0eWxlPXt7XG4gICAgICAgIF9fc3R5bGU6IHtcbiAgICAgICAgICAuLi4ob3V0bGluZSA/IHsgYm94U2hhZG93OiAnMCAwIDAgMnB4ICNmZmYnIH0gOiB7fSksXG4gICAgICAgICAgLy8gd2lsbENoYW5nZTogdHJhbnNmb3JtIGZpeGVzIGEgc3RyYW5nZSBiZWhhdmlvciB3aGVyZSB0aGUgYm9yZGVyIG9mIHRoZSBjaGlsZHJlblxuICAgICAgICAgIC8vIGFyZSBub3QgcHJvcGVybHkgdHJpbW1lZCBldmVuIHRob3VnaCBvdmVyZmxvdzogaGlkZGVuIGlzIHNldFxuICAgICAgICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nLFxuICAgICAgICB9LFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8Qm94IGRhbmdlcm91c2x5U2V0SW5saW5lU3R5bGU9e3sgX19zdHlsZTogeyBwYWRkaW5nQm90dG9tOiAnMTAwJScgfSB9fSAvPlxuICAgICAge3ppcChwb3NpdGlvbnMsIGNvbGxhYm9yYXRvcnMpLm1hcChcbiAgICAgICAgKFtwb3NpdGlvbiwgY29sbGFib3JhdG9yID0geyBuYW1lOiAnJywgc3JjOiB1bmRlZmluZWQgfV0sIGlkeCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgdG9wLCBsZWZ0LCB0ZXh0TGF5b3V0IH0gPSBwb3NpdGlvbjtcbiAgICAgICAgICBjb25zdCB7IG5hbWUsIHNyYyB9ID0gY29sbGFib3JhdG9yO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIGtleT17aWR4fVxuICAgICAgICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcbiAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbmxpbmVTdHlsZT17eyBfX3N0eWxlOiB7IHRvcCwgbGVmdCB9IH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtzcmMgPyAoXG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBhbHQ9e25hbWV9XG4gICAgICAgICAgICAgICAgICBjb2xvcj1cIiNFRkVGRUZcIlxuICAgICAgICAgICAgICAgICAgc3JjPXtzcmN9XG4gICAgICAgICAgICAgICAgICBuYXR1cmFsV2lkdGg9ezF9XG4gICAgICAgICAgICAgICAgICBuYXR1cmFsSGVpZ2h0PXsxfVxuICAgICAgICAgICAgICAgICAgZml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPERlZmF1bHRBdmF0YXJcbiAgICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgICAgICB0ZXh0TGF5b3V0PXt0ZXh0TGF5b3V0fVxuICAgICAgICAgICAgICAgICAgc2l6ZT17aGVpZ2h0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud2FzaH0gLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICl9XG4gICAgPC9Cb3g+XG4gICk7XG59XG5cbkdyb3VwQXZhdGFyLnByb3BUeXBlcyA9IHtcbiAgY29sbGFib3JhdG9yczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgUHJvcFR5cGVzLmV4YWN0KHtcbiAgICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIHNyYzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB9KVxuICApLmlzUmVxdWlyZWQsXG4gIG91dGxpbmU6IFByb3BUeXBlcy5ib29sLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydzbScsICdtZCcsICdsZyddKSxcbn07XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi9Db2xvcnMuY3NzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkaW5nLmNzcyc7XG5pbXBvcnQgdHlwb2dyYXBoeSBmcm9tICcuL1R5cG9ncmFwaHkuY3NzJztcblxudHlwZSBQcm9wcyA9IHt8XG4gIGFjY2Vzc2liaWxpdHlMZXZlbD86IDEgfCAyIHwgMyB8IDQgfCA1IHwgNixcbiAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlLFxuICBjb2xvcj86XG4gICAgfCAnYmx1ZSdcbiAgICB8ICdkYXJrR3JheSdcbiAgICB8ICdlZ2dwbGFudCdcbiAgICB8ICdncmF5J1xuICAgIHwgJ2dyZWVuJ1xuICAgIHwgJ2xpZ2h0R3JheSdcbiAgICB8ICdtYXJvb24nXG4gICAgfCAnbWlkbmlnaHQnXG4gICAgfCAnbmF2eSdcbiAgICB8ICdvbGl2ZSdcbiAgICB8ICdvcmFuZ2UnXG4gICAgfCAnb3JjaGlkJ1xuICAgIHwgJ3BpbmUnXG4gICAgfCAncHVycGxlJ1xuICAgIHwgJ3JlZCdcbiAgICB8ICd3YXRlcm1lbG9uJ1xuICAgIHwgJ3doaXRlJyxcbiAgaWQ/OiBzdHJpbmcsXG4gIGxnU2l6ZT86ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnLFxuICBtZFNpemU/OiAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyxcbiAgb3ZlcmZsb3c/OiAnbm9ybWFsJyB8ICdicmVha1dvcmQnLFxuICBzaXplPzogJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcsXG4gIHNtU2l6ZT86ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnLFxuICB0cnVuY2F0ZT86IGJvb2xlYW4sXG58fTtcblxuY29uc3QgZGVmYXVsdEhlYWRpbmdMZXZlbHMgPSB7XG4gIHhzOiA1LFxuICBzbTogNCxcbiAgbWQ6IDMsXG4gIGxnOiAyLFxuICB4bDogMSxcbn07XG5cbmNvbnN0IFNJWkVfU0NBTEU6IHsgW3NpemU6ID9zdHJpbmddOiBudW1iZXIgfSA9IHtcbiAgeHM6IDEsXG4gIHNtOiAyLFxuICBtZDogMyxcbiAgbGc6IDQsXG4gIHhsOiA1LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGluZyhwcm9wczogUHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIGFjY2Vzc2liaWxpdHlMZXZlbCxcbiAgICBjaGlsZHJlbixcbiAgICBjb2xvciA9ICdkYXJrR3JheScsXG4gICAgaWQgPSBudWxsLFxuICAgIGxnU2l6ZSxcbiAgICBtZFNpemUsXG4gICAgb3ZlcmZsb3cgPSAnYnJlYWtXb3JkJyxcbiAgICBzaXplID0gJ21kJyxcbiAgICBzbVNpemUsXG4gICAgdHJ1bmNhdGUgPSBmYWxzZSxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGNzID0gY3goXG4gICAgc3R5bGVzLkhlYWRpbmcsXG4gICAgc3R5bGVzW2Bmb250U2l6ZSR7U0laRV9TQ0FMRVtzaXplXX1gXSxcbiAgICBzbVNpemUgJiYgc3R5bGVzW2BzbUZvbnRTaXplJHtTSVpFX1NDQUxFW3NtU2l6ZV19YF0sXG4gICAgbWRTaXplICYmIHN0eWxlc1tgbWRGb250U2l6ZSR7U0laRV9TQ0FMRVttZFNpemVdfWBdLFxuICAgIGxnU2l6ZSAmJiBzdHlsZXNbYGxnRm9udFNpemUke1NJWkVfU0NBTEVbbGdTaXplXX1gXSxcbiAgICBjb2xvcnNbY29sb3JdLFxuICAgIG92ZXJmbG93ID09PSAnYnJlYWtXb3JkJyAmJiB0eXBvZ3JhcGh5LmJyZWFrV29yZCxcbiAgICB0cnVuY2F0ZSAmJiB0eXBvZ3JhcGh5LnRydW5jYXRlXG4gICk7XG5cbiAgY29uc3QgaGVhZGluZ0xldmVsID0gYWNjZXNzaWJpbGl0eUxldmVsIHx8IGRlZmF1bHRIZWFkaW5nTGV2ZWxzW3NpemVdO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBgaCR7aGVhZGluZ0xldmVsfWAsXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiBjcyxcbiAgICAgIGlkLFxuICAgICAgLi4uKHRydW5jYXRlICYmIHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZydcbiAgICAgICAgPyB7IHRpdGxlOiBjaGlsZHJlbiB9XG4gICAgICAgIDogbnVsbCksXG4gICAgfSxcbiAgICBjaGlsZHJlblxuICApO1xufVxuXG5IZWFkaW5nLnByb3BUeXBlcyA9IHtcbiAgYWNjZXNzaWJpbGl0eUxldmVsOiBQcm9wVHlwZXMub25lT2YoWzEsIDIsIDMsIDQsIDUsIDZdKSxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAnYmx1ZScsXG4gICAgJ2RhcmtHcmF5JyxcbiAgICAnZWdncGxhbnQnLFxuICAgICdncmF5JyxcbiAgICAnZ3JlZW4nLFxuICAgICdsaWdodEdyYXknLFxuICAgICdtYXJvb24nLFxuICAgICdtaWRuaWdodCcsXG4gICAgJ25hdnknLFxuICAgICdvbGl2ZScsXG4gICAgJ29yYW5nZScsXG4gICAgJ29yY2hpZCcsXG4gICAgJ3BpbmUnLFxuICAgICdwdXJwbGUnLFxuICAgICdyZWQnLFxuICAgICd3YXRlcm1lbG9uJyxcbiAgICAnd2hpdGUnLFxuICBdKSxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG92ZXJmbG93OiBQcm9wVHlwZXMub25lT2YoWydub3JtYWwnLCAnYnJlYWtXb3JkJ10pLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWyd4cycsICdzbScsICdtZCcsICdsZycsICd4bCddKSxcbiAgc21TaXplOiBQcm9wVHlwZXMub25lT2YoWyd4cycsICdzbScsICdtZCcsICdsZycsICd4bCddKSxcbiAgbWRTaXplOiBQcm9wVHlwZXMub25lT2YoWyd4cycsICdzbScsICdtZCcsICdsZycsICd4bCddKSxcbiAgbGdTaXplOiBQcm9wVHlwZXMub25lT2YoWyd4cycsICdzbScsICdtZCcsICdsZycsICd4bCddKSxcbiAgdHJ1bmNhdGU6IFByb3BUeXBlcy5ib29sLFxufTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgQm94IGZyb20gJy4vQm94LmpzJztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbi5qcyc7XG5pbXBvcnQgaWNvbnMgZnJvbSAnLi9pY29ucy9pbmRleC5qcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUG9nLmNzcyc7XG5cbmNvbnN0IFNJWkVfTkFNRV9UT19QSVhFTCA9IHtcbiAgeHM6IDI0LFxuICBzbTogMzIsXG4gIG1kOiA0MCxcbiAgbGc6IDQ4LFxuICB4bDogNTYsXG59O1xuXG50eXBlIFByb3BzID0ge3xcbiAgYWN0aXZlPzogYm9vbGVhbixcbiAgYmdDb2xvcj86ICd0cmFuc3BhcmVudCcgfCAnZ3JheScgfCAnbGlnaHRHcmF5JyB8ICd3aGl0ZScsXG4gIGZvY3VzZWQ/OiBib29sZWFuLFxuICBob3ZlcmVkPzogYm9vbGVhbixcbiAgaWNvbkNvbG9yPzogJ2dyYXknIHwgJ2RhcmtHcmF5JyB8ICdyZWQnIHwgJ2JsdWUnIHwgJ3doaXRlJyxcbiAgaWNvbjogJEtleXM8dHlwZW9mIGljb25zPixcbiAgc2l6ZT86ICRLZXlzPHR5cGVvZiBTSVpFX05BTUVfVE9fUElYRUw+LFxufH07XG5cbmNvbnN0IGRlZmF1bHRJY29uQnV0dG9uSWNvbkNvbG9ycyA9IHtcbiAgdHJhbnNwYXJlbnQ6ICdncmF5JyxcbiAgZ3JheTogJ3doaXRlJyxcbiAgbGlnaHRHcmF5OiAnZ3JheScsXG4gIHdoaXRlOiAnZ3JheScsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb2cocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBhY3RpdmUgPSBmYWxzZSxcbiAgICBiZ0NvbG9yID0gJ3RyYW5zcGFyZW50JyxcbiAgICBmb2N1c2VkID0gZmFsc2UsXG4gICAgaG92ZXJlZCA9IGZhbHNlLFxuICAgIGljb25Db2xvciA9IGRlZmF1bHRJY29uQnV0dG9uSWNvbkNvbG9yc1tiZ0NvbG9yXSxcbiAgICBpY29uLFxuICAgIHNpemUgPSAnbWQnLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgaWNvblNpemUgPSBTSVpFX05BTUVfVE9fUElYRUxbc2l6ZV0gLyAyO1xuXG4gIGNvbnN0IGlubGluZVN0eWxlID0ge1xuICAgIGhlaWdodDogU0laRV9OQU1FX1RPX1BJWEVMW3NpemVdLFxuICAgIHdpZHRoOiBTSVpFX05BTUVfVE9fUElYRUxbc2l6ZV0sXG4gIH07XG5cbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzbmFtZXMoc3R5bGVzLnBvZywgc3R5bGVzW2JnQ29sb3JdLCB7XG4gICAgW3N0eWxlcy5hY3RpdmVdOiBhY3RpdmUsXG4gICAgW3N0eWxlcy5mb2N1c2VkXTogZm9jdXNlZCxcbiAgICBbc3R5bGVzLmhvdmVyZWRdOiBob3ZlcmVkICYmICFmb2N1c2VkICYmICFhY3RpdmUsXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9IHN0eWxlPXtpbmxpbmVTdHlsZX0+XG4gICAgICA8Qm94IHNoYXBlPVwiY2lyY2xlXCI+XG4gICAgICAgIHsvKlxuICAgICAgICAgIFdlJ3JlIGV4cGxpY2l0bHkgc2V0dGluZyBhbiBlbXB0eSBzdHJpbmcgYXMgYSBsYWJlbCBvbiB0aGUgSWNvbiBzaW5jZSB3ZVxuICAgICAgICAgIGFscmVhZHkgaGF2ZSBhbiBhcmlhLWxhYmVsIG9uIHRoZSBidXR0b24gY29udGFpbmVyLlxuICAgICAgICAgIFRoaXMgaXMgc2ltaWxhciB0byBoYXZpbmcgZW1wdHkgYGFsdGAgYXR0cmlidXRlczpcbiAgICAgICAgICBodHRwczovL2Rhdmlkd2Fsc2gubmFtZS9hY2Nlc3NpYmlsaXR5LXRpcC1lbXB0eS1hbHQtYXR0cmlidXRlc1xuICAgICAgICAqL31cbiAgICAgICAgPEljb25cbiAgICAgICAgICBjb2xvcj17aWNvbkNvbG9yfVxuICAgICAgICAgIGljb249e2ljb259XG4gICAgICAgICAgc2l6ZT17aWNvblNpemV9XG4gICAgICAgICAgYWNjZXNzaWJpbGl0eUxhYmVsPVwiXCJcbiAgICAgICAgLz5cbiAgICAgIDwvQm94PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5Qb2cucHJvcFR5cGVzID0ge1xuICBhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuICBiZ0NvbG9yOiBQcm9wVHlwZXMub25lT2YoWyd0cmFuc3BhcmVudCcsICdncmF5JywgJ2xpZ2h0R3JheScsICd3aGl0ZSddKSxcbiAgZm9jdXNlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGhvdmVyZWQ6IFByb3BUeXBlcy5ib29sLFxuICBpY29uQ29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ2dyYXknLCAnZGFya0dyYXknLCAncmVkJywgJ2JsdWUnLCAnd2hpdGUnXSksXG4gIGljb246IFByb3BUeXBlcy5vbmVPZihPYmplY3Qua2V5cyhpY29ucykpLmlzUmVxdWlyZWQsXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihPYmplY3Qua2V5cyhTSVpFX05BTUVfVE9fUElYRUwpKSxcbn07XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9JY29uQnV0dG9uLmNzcyc7XG5pbXBvcnQgaWNvbnMgZnJvbSAnLi9pY29ucy9pbmRleC5qcyc7XG5pbXBvcnQgUG9nIGZyb20gJy4vUG9nLmpzJztcblxudHlwZSBQcm9wcyA9IHt8XG4gIGFjY2Vzc2liaWxpdHlFeHBhbmRlZD86IGJvb2xlYW4sXG4gIGFjY2Vzc2liaWxpdHlIYXNwb3B1cD86IGJvb2xlYW4sXG4gIGFjY2Vzc2liaWxpdHlMYWJlbDogc3RyaW5nLFxuICBiZ0NvbG9yPzogJ3RyYW5zcGFyZW50JyB8ICdncmF5JyB8ICdsaWdodEdyYXknIHwgJ3doaXRlJyxcbiAgaWNvbkNvbG9yPzogJ2dyYXknIHwgJ2RhcmtHcmF5JyB8ICdyZWQnIHwgJ2JsdWUnIHwgJ3doaXRlJyxcbiAgaWNvbjogJEtleXM8dHlwZW9mIGljb25zPixcbiAgb25DbGljaz86ICh7IGV2ZW50OiBTeW50aGV0aWNNb3VzZUV2ZW50PD4gfSkgPT4gdm9pZCxcbiAgc2l6ZT86ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnLFxufH07XG5cbnR5cGUgU3RhdGUgPSB7fFxuICBhY3RpdmU6IGJvb2xlYW4sXG4gIGZvY3VzZWQ6IGJvb2xlYW4sXG4gIGhvdmVyZWQ6IGJvb2xlYW4sXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWNvbkJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBhY2Nlc3NpYmlsaXR5RXhwYW5kZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGFjY2Vzc2liaWxpdHlIYXNwb3B1cDogUHJvcFR5cGVzLmJvb2wsXG4gICAgYWNjZXNzaWJpbGl0eUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgYmdDb2xvcjogUHJvcFR5cGVzLm9uZU9mKFsndHJhbnNwYXJlbnQnLCAnZ3JheScsICdsaWdodEdyYXknLCAnd2hpdGUnXSksXG4gICAgaWNvbjogUHJvcFR5cGVzLm9uZU9mKE9iamVjdC5rZXlzKGljb25zKSkuaXNSZXF1aXJlZCxcbiAgICBpY29uQ29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ2dyYXknLCAnZGFya0dyYXknLCAncmVkJywgJ2JsdWUnLCAnd2hpdGUnXSksXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsneHMnLCAnc20nLCAnbWQnLCAnbGcnLCAneGwnXSksXG4gIH07XG5cbiAgc3RhdGU6IFN0YXRlID0ge1xuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgZm9jdXNlZDogZmFsc2UsXG4gICAgaG92ZXJlZDogZmFsc2UsXG4gIH07XG5cbiAgaGFuZGxlQmx1ciA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkOiBmYWxzZSB9KTtcblxuICBoYW5kbGVGb2N1cyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZDogdHJ1ZSB9KTtcbiAgfTtcblxuICBoYW5kbGVNb3VzZURvd24gPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZTogdHJ1ZSB9KTtcbiAgfTtcblxuICBoYW5kbGVNb3VzZUVudGVyID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBob3ZlcmVkOiB0cnVlIH0pO1xuICB9O1xuXG4gIGhhbmRsZU1vdXNlTGVhdmUgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgaG92ZXJlZDogZmFsc2UsXG4gICAgfSk7XG4gIH07XG5cbiAgaGFuZGxlTW91c2VVcCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlOiBmYWxzZSB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYWNjZXNzaWJpbGl0eUV4cGFuZGVkLFxuICAgICAgYWNjZXNzaWJpbGl0eUhhc3BvcHVwLFxuICAgICAgYWNjZXNzaWJpbGl0eUxhYmVsLFxuICAgICAgYmdDb2xvcixcbiAgICAgIGljb25Db2xvcixcbiAgICAgIGljb24sXG4gICAgICBzaXplLFxuICAgICAgb25DbGljayxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHsgYWN0aXZlLCBmb2N1c2VkLCBob3ZlcmVkIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b25cbiAgICAgICAgYXJpYS1leHBhbmRlZD17YWNjZXNzaWJpbGl0eUV4cGFuZGVkfVxuICAgICAgICBhcmlhLWhhc3BvcHVwPXthY2Nlc3NpYmlsaXR5SGFzcG9wdXB9XG4gICAgICAgIGFyaWEtbGFiZWw9e2FjY2Vzc2liaWxpdHlMYWJlbH1cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufVxuICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlQmx1cn1cbiAgICAgICAgb25DbGljaz17ZXZlbnQgPT4gb25DbGljayAmJiBvbkNsaWNrKHsgZXZlbnQgfSl9XG4gICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlRm9jdXN9XG4gICAgICAgIG9uTW91c2VEb3duPXt0aGlzLmhhbmRsZU1vdXNlRG93bn1cbiAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZU1vdXNlRW50ZXJ9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5oYW5kbGVNb3VzZUxlYXZlfVxuICAgICAgICBvbk1vdXNlVXA9e3RoaXMuaGFuZGxlTW91c2VVcH1cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICA+XG4gICAgICAgIDxQb2dcbiAgICAgICAgICBhY3RpdmU9e2FjdGl2ZX1cbiAgICAgICAgICBiZ0NvbG9yPXtiZ0NvbG9yfVxuICAgICAgICAgIGZvY3VzZWQ9e2ZvY3VzZWR9XG4gICAgICAgICAgaG92ZXJlZD17aG92ZXJlZH1cbiAgICAgICAgICBpY29uQ29sb3I9e2ljb25Db2xvcn1cbiAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgIC8+XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9XG59XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MYWJlbC5jc3MnO1xuXG50eXBlIFByb3BzID0ge3xcbiAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlLFxuICBodG1sRm9yOiBzdHJpbmcsXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGFiZWwocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGh0bWxGb3IgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsfSBodG1sRm9yPXtodG1sRm9yfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2xhYmVsPlxuICApO1xufVxuXG5MYWJlbC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgaHRtbEZvcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nO1xuXG50eXBlIFByb3BzID0ge3xcbiAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlLFxufH07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheWVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAoZG9jdW1lbnQuYm9keSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAoZG9jdW1lbnQuYm9keSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmVsKTtcbiAgICB9XG4gIH1cblxuICBlbDogSFRNTERpdkVsZW1lbnQ7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIGNyZWF0ZVBvcnRhbChjaGlsZHJlbiwgdGhpcy5lbCk7XG4gIH1cbn1cbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IE1hc2sgZnJvbSAnLi9NYXNrLmpzJztcblxuLypcbiAgTXVjaCBvZiB0aGUgbWF0aCBhbmQgdW5kZXJzdGFuZGluZyBhYm91dCB0aGlzIGNvbXBvbmVudCBjb21lcyBmcm9tIEB2amVhdXgnc1xuICBleGNlbGxlbnQgYmxvZyBwb3N0IG9uIGltYWdlIHJlc2l6aW5nLlxuXG4gIGh0dHA6Ly9ibG9nLnZqZXV4LmNvbS8yMDEzL2ltYWdlL2Nzcy1jb250YWluZXItYW5kLWNvdmVyLmh0bWxcblxuICBJIGhpZ2hseSByZWNvbW1lbmQgeW91IHJlYWQgdGhhdCBmaXJzdCBiZWZvcmUgY29udGludWluZyBvbiByZWFkaW5nLlxuKi9cblxuY29uc3QgYXNwZWN0UmF0aW8gPSAod2lkdGgsIGhlaWdodCkgPT4gd2lkdGggLyBoZWlnaHQ7XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBjaGlsZHJlbj86IFJlYWN0Lk5vZGUsXG4gIGNvbnRlbnRBc3BlY3RSYXRpbzogbnVtYmVyLFxuICBoZWlnaHQ6IG51bWJlcixcbiAgd2lkdGg6IG51bWJlcixcbnx9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMZXR0ZXJib3goe1xuICBjaGlsZHJlbixcbiAgY29udGVudEFzcGVjdFJhdGlvLFxuICBoZWlnaHQsXG4gIHdpZHRoLFxufTogUHJvcHMpIHtcbiAgY29uc3Qgdmlld3BvcnRBc3BlY3RSYXRpbyA9IGFzcGVjdFJhdGlvKHdpZHRoLCBoZWlnaHQpO1xuXG4gIGxldCBjb250ZW50SGVpZ2h0O1xuICBsZXQgY29udGVudFdpZHRoO1xuXG4gIGlmIChjb250ZW50QXNwZWN0UmF0aW8gPCB2aWV3cG9ydEFzcGVjdFJhdGlvKSB7XG4gICAgY29udGVudFdpZHRoID0gd2lkdGg7XG4gICAgY29udGVudEhlaWdodCA9IHdpZHRoIC8gY29udGVudEFzcGVjdFJhdGlvO1xuICB9IGVsc2Uge1xuICAgIGNvbnRlbnRXaWR0aCA9IGhlaWdodCAqIGNvbnRlbnRBc3BlY3RSYXRpbztcbiAgICBjb250ZW50SGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgY29uc3Qgb2Zmc2V0VG9wID0gKGNvbnRlbnRIZWlnaHQgLSBoZWlnaHQpIC8gLTI7XG4gIGNvbnN0IG9mZnNldExlZnQgPSAoY29udGVudFdpZHRoIC0gd2lkdGgpIC8gLTI7XG5cbiAgcmV0dXJuIChcbiAgICA8TWFzayB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fT5cbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBvZmZzZXRUb3AsIG1hcmdpbkxlZnQ6IG9mZnNldExlZnQgfX0+XG4gICAgICAgIDxNYXNrIHdpZHRoPXtjb250ZW50V2lkdGh9IGhlaWdodD17Y29udGVudEhlaWdodH0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L01hc2s+XG4gICAgICA8L2Rpdj5cbiAgICA8L01hc2s+XG4gICk7XG59XG5cbkxldHRlcmJveC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgY29udGVudEFzcGVjdFJhdGlvOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB3aWR0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxufTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xpbmsuY3NzJztcblxudHlwZSBQcm9wcyA9IHt8XG4gIGNoaWxkcmVuPzogUmVhY3QuTm9kZSxcbiAgaHJlZjogc3RyaW5nLFxuICBpbmxpbmU/OiBib29sZWFuLFxuICBvbkNsaWNrPzogKHsgZXZlbnQ6IFN5bnRoZXRpY01vdXNlRXZlbnQ8PiB9KSA9PiB2b2lkLFxuICB0YXJnZXQ/OiBudWxsIHwgJ3NlbGYnIHwgJ2JsYW5rJyxcbnx9O1xuXG50eXBlIFN0YXRlID0ge3xcbiAgZW5hYmxlRm9jdXNTdHlsZXM6IGJvb2xlYW4sXG58fTtcblxuY29uc3QgVEFCX0tFWV9DT0RFID0gOTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICBocmVmOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaW5saW5lOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB0YXJnZXQ6IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgJ3NlbGYnLCAnYmxhbmsnXSksXG4gIH07XG5cbiAgc3RhdGU6IFN0YXRlID0ge1xuICAgIGVuYWJsZUZvY3VzU3R5bGVzOiB0cnVlLFxuICB9O1xuXG4gIGhhbmRsZUNsaWNrID0gKGV2ZW50OiBTeW50aGV0aWNNb3VzZUV2ZW50PD4pID0+IHtcbiAgICBjb25zdCB7IGhyZWYsIG9uQ2xpY2sgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKG9uQ2xpY2sgJiYgaHJlZikge1xuICAgICAgb25DbGljayh7IGV2ZW50IH0pO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVNb3VzZURvd24gPSAoKSA9PiB7XG4gICAgY29uc3QgeyBocmVmLCB0YXJnZXQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHRhcmdldCA9PT0gJ2JsYW5rJyAmJiBocmVmKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZW5hYmxlRm9jdXNTdHlsZXM6IGZhbHNlIH0pO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVLZXlVcCA9IChldmVudDogU3ludGhldGljS2V5Ym9hcmRFdmVudDw+KSA9PiB7XG4gICAgY29uc3QgeyBocmVmLCB0YXJnZXQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHRhcmdldCA9PT0gJ2JsYW5rJyAmJiBldmVudC5rZXlDb2RlID09PSBUQUJfS0VZX0NPREUgJiYgaHJlZikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVuYWJsZUZvY3VzU3R5bGVzOiB0cnVlIH0pO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgaW5saW5lID0gZmFsc2UsIHRhcmdldCA9IG51bGwsIGhyZWYgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgcmVsID0gdGFyZ2V0ID09PSAnYmxhbmsnID8gJ25vb3BlbmVyIG5vcmVmZXJyZXInIDogbnVsbDtcbiAgICBjb25zdCBsaW5rVGFyZ2V0ID0gdGFyZ2V0ID8gYF8ke3RhcmdldH1gIDogbnVsbDtcblxuICAgIHJldHVybiAoXG4gICAgICA8YVxuICAgICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICAgIHN0eWxlcy5saW5rLFxuICAgICAgICAgIHRoaXMuc3RhdGUuZW5hYmxlRm9jdXNTdHlsZXMgPyBzdHlsZXMuYWNjZXNzaWJsZUZvY3VzU3R5bGUgOiAnJyxcbiAgICAgICAgICBpbmxpbmUgPyAnJyA6IHN0eWxlcy5ibG9ja1xuICAgICAgICApfVxuICAgICAgICBocmVmPXtocmVmfVxuICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5oYW5kbGVNb3VzZURvd259XG4gICAgICAgIG9uS2V5VXA9e3RoaXMuaGFuZGxlS2V5VXB9XG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgIHJlbD17cmVsfVxuICAgICAgICB0YXJnZXQ9e2xpbmtUYXJnZXR9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvYT5cbiAgICApO1xuICB9XG59XG4iLCIvKipcbiAqIGRlYm91bmNlIHByZXZlbnRzIGEgcGFydGljdWxhciBmdW5jdGlvbiBmcm9tIGJlaW5nIGNhbGxlZCB1bnRpbCBhZnRlciBhIGdpdmVuXG4gKiBjb29sZG93biBwZXJpb2QgKGRlZmF1bHQgMTAwbXMpLiBFdmVyeSB0aW1lIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQsIGl0IHJlc2V0c1xuICogdGhlIGNvb2xkb3duLlxuICovXG5cbi8vIEBmbG93XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWJvdW5jZShcbiAgZm46ICguLi5hcmdzOiAqKSA9PiB2b2lkLFxuICB0aHJlc2hob2xkOiBudW1iZXIgPSAxMDBcbikge1xuICBsZXQgZGVmZXJUaW1lcjogVGltZW91dElEIHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3QgZGVib3VuY2VkID0gKC4uLmFyZ3M6ICopID0+IHtcbiAgICBpZiAoZGVmZXJUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KGRlZmVyVGltZXIpO1xuICAgIH1cblxuICAgIGRlZmVyVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGRlZmVyVGltZXIgPSBudWxsO1xuICAgICAgZm4oLi4uYXJncyk7XG4gICAgfSwgdGhyZXNoaG9sZCk7XG4gIH07XG5cbiAgZGVib3VuY2VkLmNsZWFyVGltZW91dCA9ICgpID0+IHtcbiAgICBpZiAoZGVmZXJUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KGRlZmVyVGltZXIpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gZGVib3VuY2VkO1xufVxuIiwiLyoqXG4gKiBGZXRjaEl0ZW1zIGlzIGEgbG9naWMgY29tcG9uZW50IHRoYXQgcmVuZGVycyBubyBjb250ZW50IGl0c2VsZi4gSXRzIGpvYlxuICogaXMgdG8gbWFuYWdlIHdoZW4gdGhlIGdpdmVuIGZldGNoTW9yZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZCBiYXNlZCBvblxuICogdGhlIGdpdmVuIHNjcm9sbC9zaXplIHByb3BzLlxuICpcbiAqIFdoaWxlIG5vIGVsZW1lbnQgaXMgYWN0dWFsbHkgcGFzc2VkIHRvIEZldGNoSXRlbXMsIGl0IGlzIGludGVuZGVkIHRvIGJlIHVzZWRcbiAqIGluIGNvbmp1bmN0aW9uIHdpdGggYSBsYXJnZSBzY3JvbGwgY29udGFpbmVyIHRoYXQgdXNlcyBhc3luYyBmZXRjaGluZyB0b1xuICogbG9hZCBhbmQgcmVuZGVyIGFkZGl0aW9uYWwgZGF0YS4gQmFzZWQgb24gdGhlIGhlaWdodCBvZiB0aGlzIGNvbnRhaW5lciBhbmRcbiAqIGl0cyBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiwgRmV0Y2hJdGVtcyBpcyByZXNwb25zaWJsZSBmb3IgdHJpZ2dlcmluZyBmdXR1cmVcbiAqIGZldGNoIGNhbGxzLlxuICovXG5cbi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG50eXBlIFByb3BzID0ge1xuICBjb250YWluZXJIZWlnaHQ6IG51bWJlcixcbiAgaXNBdEVuZD86IGJvb2xlYW4sXG4gIGlzRmV0Y2hpbmc6IGJvb2xlYW4sXG4gIGZldGNoTW9yZT86ICgpID0+IHZvaWQsXG4gIHNjcm9sbEhlaWdodDogbnVtYmVyLFxuICBzY3JvbGxUb3A6IG51bWJlcixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZldGNoSXRlbXMgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY29udGFpbmVySGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgaXNBdEVuZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNGZXRjaGluZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBmZXRjaE1vcmU6IFByb3BUeXBlcy5mdW5jLFxuICAgIHNjcm9sbEhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHNjcm9sbFRvcDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHNldFRpbWVvdXQodGhpcy5jaGVjayk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgY2hlY2sgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgY29udGFpbmVySGVpZ2h0LFxuICAgICAgaXNBdEVuZCxcbiAgICAgIGlzRmV0Y2hpbmcsXG4gICAgICBmZXRjaE1vcmUsXG4gICAgICBzY3JvbGxIZWlnaHQsXG4gICAgICBzY3JvbGxUb3AsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoaXNBdEVuZCB8fCBpc0ZldGNoaW5nIHx8ICFmZXRjaE1vcmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc2Nyb2xsQnVmZmVyID0gY29udGFpbmVySGVpZ2h0ICogMztcblxuICAgIGlmIChzY3JvbGxUb3AgKyBzY3JvbGxCdWZmZXIgPiBzY3JvbGxIZWlnaHQpIHtcbiAgICAgIGZldGNoTW9yZSgpO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiIsIi8qKlxuICogU2Nyb2xsQ29udGFpbmVyIGlzIGEgcGFzcy10aHJvdWdoIGNvbXBvbmVudCB0aGF0IHNpbXBseSBzZXRzIHVwIGFuIG9uU2Nyb2xsXG4gKiBoYW5kbGVyIG9uIHRoZSBnaXZlbiBzY3JvbGxDb250YWluZXIgZWxlbWVudCAob3IgdGhlIGVsZW1lbnQgdGhhdCBpc1xuICogcmV0dXJuZWQgYXMgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIHNjcm9sbENvbnRhaW5lciBtZXRob2QpLiBUaGlzIGFsbG93cyBmb3JcbiAqIHRoZSBldmVudCBsaXN0ZW5lciBzdWJzY3JpcHRpb24gb2YgdGhlIHNjcm9sbENvbnRhaW5lciB0byBiZSBtYW5hZ2VkIGluc2lkZVxuICogdGhlIFJlYWN0IGxpZmVjeWNsZSB3aXRob3V0IGFkZGluZyBibG9hdCB0byBNYXNvbnJ5IG9yIG90aGVyIG9uU2Nyb2xsXG4gKiBzdWJzY3JpYmVycy5cbiAqXG4gKiBOb3RlIHRoYXQgdGhpcyBDb21wb25lbnQgcmVuZGVycyBpdHMgY2hpbGRyZW4gd2l0aG91dCBjcmVhdGluZyBhbnlcbiAqIGFkZGl0aW9uYWwgY29udGVudC4gQWxzbyBub3RlIHRoYXQsIHdoaWxlIHRoZSBjb21wb25lbnQgaXMgYnVpbHQgdG8gbWFuYWdlXG4gKiBvblNjcm9sbCBpbnNpZGUgb2YgdGhlIFJlYWN0IGxpZmVjeWNsZSwgaXQgZG9lc24ndCBjaGFuZ2Ugb25TY3JvbGwgZXZlbnRzXG4gKiBvciB0aGUgQVBJIGF0IGFsbCwgc28gaXQgY291bGQgZWFzaWx5IGJlIGFkYXB0ZWQgdG8gb3RoZXIgZXZlbnQgdHlwZXMuXG4gKi9cblxuLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBjaGlsZHJlbj86IFJlYWN0Lk5vZGUsXG4gIG9uU2Nyb2xsOiAoZXZlbnQ6IEV2ZW50KSA9PiB2b2lkLFxuICBzY3JvbGxDb250YWluZXI6ID9IVE1MRWxlbWVudCB8ICgoKSA9PiA/SFRNTEVsZW1lbnQpLFxufH07XG5cbmZ1bmN0aW9uIGdldFNjcm9sbENvbnRhaW5lcihzY3JvbGxDb250YWluZXIpIHtcbiAgcmV0dXJuIHR5cGVvZiBzY3JvbGxDb250YWluZXIgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcm9sbENvbnRhaW5lcigpXG4gICAgOiBzY3JvbGxDb250YWluZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgIG9uU2Nyb2xsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHNjcm9sbENvbnRhaW5lcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmNdKVxuICAgICAgLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3Qgc2Nyb2xsQ29udGFpbmVyID0gZ2V0U2Nyb2xsQ29udGFpbmVyKHRoaXMucHJvcHMuc2Nyb2xsQ29udGFpbmVyKTtcbiAgICBpZiAoc2Nyb2xsQ29udGFpbmVyKSB7XG4gICAgICB0aGlzLnVwZGF0ZVNjcm9sbENvbnRhaW5lcihzY3JvbGxDb250YWluZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBjb25zdCBuZXh0U2Nyb2xsQ29udGFpbmVyID0gZ2V0U2Nyb2xsQ29udGFpbmVyKHRoaXMucHJvcHMuc2Nyb2xsQ29udGFpbmVyKTtcbiAgICBpZiAobmV4dFNjcm9sbENvbnRhaW5lciAmJiBuZXh0U2Nyb2xsQ29udGFpbmVyICE9PSB0aGlzLnNjcm9sbENvbnRhaW5lcikge1xuICAgICAgdGhpcy51cGRhdGVTY3JvbGxDb250YWluZXIobmV4dFNjcm9sbENvbnRhaW5lcik7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsQ29udGFpbmVyKSB7XG4gICAgICB0aGlzLnNjcm9sbENvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0U2Nyb2xsQ29udGFpbmVyUmVmID0gKCkgPT4gdGhpcy5zY3JvbGxDb250YWluZXI7XG5cbiAgaGFuZGxlU2Nyb2xsID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgIHRoaXMucHJvcHMub25TY3JvbGwoZXZlbnQpO1xuICB9O1xuXG4gIHVwZGF0ZVNjcm9sbENvbnRhaW5lcihzY3JvbGxDb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsQ29udGFpbmVyKSB7XG4gICAgICAvLyBjbGVhbnVwIGV4aXN0aW5nIHNjcm9sbCBjb250YWluZXIgaWYgaXQgZXhpc3RzXG4gICAgICB0aGlzLnNjcm9sbENvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCk7XG4gICAgfVxuICAgIHRoaXMuc2Nyb2xsQ29udGFpbmVyID0gc2Nyb2xsQ29udGFpbmVyO1xuICAgIHRoaXMuc2Nyb2xsQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGFuZGxlU2Nyb2xsKTtcbiAgfVxuXG4gIHNjcm9sbENvbnRhaW5lcjogP0hUTUxFbGVtZW50O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgfVxufVxuIiwiLyoqXG4gKiB0aHJvdHRsZSBsaW1pdHMgdGhlIG51bWJlciBvZiB0aW1lcyBhIGZ1bmN0aW9uIGNhbiBiZSBjYWxsZWQgdG8gYVxuICogZ2l2ZW4gdGhyZXNoaG9sZCAoMTAwbXMgYnkgZGVmYXVsdCkuIFRoZSBmdW5jdGlvbiBpcyBhbHdheXMgY2FsbGVkXG4gKiBvbiB0aGUgbGVhZGluZyBhbmQgdHJhaWxpbmcgZWRnZS5cbiAqL1xuXG4vLyBAZmxvd1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGhyb3R0bGUoXG4gIGZuOiAoLi4uYXJnczogKikgPT4gdm9pZCxcbiAgdGhyZXNoaG9sZDogbnVtYmVyID0gMTAwXG4pIHtcbiAgbGV0IGxhc3Q6IG51bWJlciB8IHZvaWQ7XG4gIGxldCBkZWZlclRpbWVyOiBUaW1lb3V0SUQgfCB2b2lkO1xuICBjb25zdCB0aHJvdHRsZWQgPSAoLi4uYXJnczogKikgPT4ge1xuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgaWYgKGxhc3QgIT09IHVuZGVmaW5lZCAmJiBub3cgLSBsYXN0IDwgdGhyZXNoaG9sZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KGRlZmVyVGltZXIpO1xuICAgICAgZGVmZXJUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsYXN0ID0gbm93O1xuICAgICAgICBmbiguLi5hcmdzKTtcbiAgICAgIH0sIHRocmVzaGhvbGQgLSAobm93IC0gbGFzdCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYXN0ID0gbm93O1xuICAgICAgZm4oLi4uYXJncyk7XG4gICAgfVxuICB9O1xuXG4gIHRocm90dGxlZC5jbGVhclRpbWVvdXQgPSAoKSA9PiB7XG4gICAgaWYgKGRlZmVyVGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dChkZWZlclRpbWVyKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHRocm90dGxlZDtcbn1cbiIsIi8vIEBmbG93XG5pbXBvcnQgdHlwZSB7IENhY2hlIH0gZnJvbSAnLi9DYWNoZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lYXN1cmVtZW50U3RvcmU8VCwgVj4gaW1wbGVtZW50cyBDYWNoZTxULCBWPiB7XG4gIG1hcDogV2Vha01hcDxULCBWPiA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgZ2V0KGtleTogVCk6ID9WIHtcbiAgICByZXR1cm4gdGhpcy5tYXAuZ2V0KGtleSk7XG4gIH1cblxuICBoYXMoa2V5OiBUKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubWFwLmhhcyhrZXkpO1xuICB9XG5cbiAgc2V0KGtleTogVCwgdmFsdWU6IFYpOiB2b2lkIHtcbiAgICB0aGlzLm1hcC5zZXQoa2V5LCB2YWx1ZSk7XG4gIH1cblxuICByZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLm1hcCA9IG5ldyBXZWFrTWFwKCk7XG4gIH1cbn1cbiIsIi8qKlxuICogTWVhc3VyaW5nIHNjcm9sbCBwb3NpdGlvbnMsIGVsZW1lbnQgaGVpZ2h0cywgZXRjIGlzIGRpZmZlcmVudCBiZXR3ZWVuXG4gKiBkaWZmZXJlbnQgYnJvd3NlcnMgYW5kIHRoZSB3aW5kb3cgb2JqZWN0IHZzIG90aGVyIERPTSBub2Rlcy4gVGhlc2VcbiAqIHV0aWxzIGFic3RyYWN0IGF3YXkgdGhlc2UgZGlmZmVyZW5jZXMuXG4gKi9cblxuLy8gQGZsb3dcbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50SGVpZ2h0KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcbiAgcmV0dXJuIGVsZW1lbnQgPT09IHdpbmRvdyA/IHdpbmRvdy5pbm5lckhlaWdodCA6IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsUG9zKCkge1xuICBpZiAod2luZG93LnNjcm9sbFkgIT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE1vZGVybiBicm93c2VyXG4gICAgcmV0dXJuIHdpbmRvdy5zY3JvbGxZO1xuICB9XG4gIGlmIChcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiZcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wICE9PSB1bmRlZmluZWRcbiAgKSB7XG4gICAgLy8gSUUgc3VwcG9ydC5cbiAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgfVxuICByZXR1cm4gMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlbGF0aXZlU2Nyb2xsVG9wKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcbiAgcmV0dXJuIGVsZW1lbnQgPT09IHdpbmRvd1xuICAgID8gZ2V0V2luZG93U2Nyb2xsUG9zKClcbiAgICA6IGVsZW1lbnQuc2Nyb2xsVG9wIC0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JvbGxIZWlnaHQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBudW1iZXIge1xuICByZXR1cm4gZWxlbWVudCA9PT0gd2luZG93ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxuICAgID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodFxuICAgIDogZWxlbWVudC5zY3JvbGxIZWlnaHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JvbGxQb3MoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBudW1iZXIge1xuICByZXR1cm4gZWxlbWVudCA9PT0gd2luZG93ID8gZ2V0V2luZG93U2Nyb2xsUG9zKCkgOiBlbGVtZW50LnNjcm9sbFRvcDtcbn1cbiIsIi8vIEBmbG93XG5leHBvcnQgY29uc3QgRGVmYXVsdExheW91dFN5bWJvbCA9IFN5bWJvbCgnZGVmYXVsdCcpO1xuZXhwb3J0IGNvbnN0IFVuaWZvcm1Sb3dMYXlvdXRTeW1ib2wgPSBTeW1ib2woJ3VuaWZvcm1Sb3cnKTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgdHlwZSB7IENhY2hlIH0gZnJvbSAnLi9DYWNoZS5qcyc7XG5cbmV4cG9ydCB0eXBlIFBvc2l0aW9uID0ge1xuICB0b3A6IG51bWJlcixcbiAgbGVmdDogbnVtYmVyLFxuICB3aWR0aDogbnVtYmVyLFxuICBoZWlnaHQ6IG51bWJlcixcbn07XG5cbmNvbnN0IG1pbmRleCA9IGFyciA9PiB7XG4gIGxldCBpZHggPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChhcnJbaV0gPCBhcnJbaWR4XSkge1xuICAgICAgaWR4ID0gaTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGlkeDtcbn07XG5cbmNvbnN0IG9mZnNjcmVlbiA9ICh3aWR0aCwgaGVpZ2h0ID0gSW5maW5pdHkpID0+ICh7XG4gIHRvcDogLTk5OTksXG4gIGxlZnQ6IC05OTk5LFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IDxUPih7XG4gIGNhY2hlLFxuICBjb2x1bW5XaWR0aCA9IDIzNixcbiAgZ3V0dGVyID0gMTQsXG4gIG1pbkNvbHMgPSAyLFxuICB3aWR0aCxcbn06IHt8XG4gIGNvbHVtbldpZHRoPzogbnVtYmVyLFxuICBndXR0ZXI/OiBudW1iZXIsXG4gIGNhY2hlOiBDYWNoZTxULCBudW1iZXI+LFxuICBtaW5Db2xzPzogbnVtYmVyLFxuICB3aWR0aD86ID9udW1iZXIsXG58fSkgPT4gKGl0ZW1zOiBBcnJheTwqPik6IEFycmF5PFBvc2l0aW9uPiA9PiB7XG4gIGlmICh3aWR0aCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGl0ZW1zLm1hcCgoKSA9PiBvZmZzY3JlZW4oY29sdW1uV2lkdGgpKTtcbiAgfVxuXG4gIGNvbnN0IGNvbHVtbldpZHRoQW5kR3V0dGVyID0gY29sdW1uV2lkdGggKyBndXR0ZXI7XG4gIGNvbnN0IGNvbHVtbkNvdW50ID0gTWF0aC5tYXgoXG4gICAgTWF0aC5mbG9vcigod2lkdGggKyBndXR0ZXIpIC8gY29sdW1uV2lkdGhBbmRHdXR0ZXIpLFxuICAgIG1pbkNvbHNcbiAgKTtcbiAgLy8gdGhlIHRvdGFsIGhlaWdodCBvZiBlYWNoIGNvbHVtblxuICBjb25zdCBoZWlnaHRzID0gbmV3IEFycmF5KGNvbHVtbkNvdW50KS5maWxsKDApO1xuICBjb25zdCBjZW50ZXJPZmZzZXQgPSBNYXRoLm1heChcbiAgICBNYXRoLmZsb29yKCh3aWR0aCAtIGNvbHVtbldpZHRoQW5kR3V0dGVyICogY29sdW1uQ291bnQgKyBndXR0ZXIpIC8gMiksXG4gICAgMFxuICApO1xuXG4gIHJldHVybiBpdGVtcy5yZWR1Y2UoKGFjYywgaXRlbSkgPT4ge1xuICAgIGNvbnN0IHBvc2l0aW9ucyA9IGFjYztcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgY29uc3QgaGVpZ2h0ID0gY2FjaGUuZ2V0KGl0ZW0pO1xuICAgIGxldCBwb3NpdGlvbjtcblxuICAgIGlmIChoZWlnaHQgPT0gbnVsbCkge1xuICAgICAgcG9zaXRpb24gPSBvZmZzY3JlZW4oY29sdW1uV2lkdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBoZWlnaHRBbmRHdXR0ZXIgPSBoZWlnaHQgKyBndXR0ZXI7XG4gICAgICBjb25zdCBjb2wgPSBtaW5kZXgoaGVpZ2h0cyk7XG4gICAgICBjb25zdCB0b3AgPSBoZWlnaHRzW2NvbF07XG4gICAgICBjb25zdCBsZWZ0ID0gY29sICogY29sdW1uV2lkdGhBbmRHdXR0ZXIgKyBjZW50ZXJPZmZzZXQ7XG5cbiAgICAgIGhlaWdodHNbY29sXSArPSBoZWlnaHRBbmRHdXR0ZXI7XG4gICAgICBwb3NpdGlvbiA9IHsgdG9wLCBsZWZ0LCB3aWR0aDogY29sdW1uV2lkdGgsIGhlaWdodCB9O1xuICAgIH1cbiAgICBwb3NpdGlvbnMucHVzaChwb3NpdGlvbik7XG4gICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgfSwgW10pO1xufTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgdHlwZSB7IENhY2hlIH0gZnJvbSAnLi9DYWNoZS5qcyc7XG5cbnR5cGUgUG9zaXRpb24gPSB7IHRvcDogbnVtYmVyLCBsZWZ0OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyIH07XG5cbmNvbnN0IG9mZnNjcmVlbiA9ICh3aWR0aCwgaGVpZ2h0ID0gSW5maW5pdHkpID0+ICh7XG4gIHRvcDogLTk5OTksXG4gIGxlZnQ6IC05OTk5LFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IDxUPih7XG4gIGNhY2hlLFxuICBjb2x1bW5XaWR0aCA9IDIzNixcbiAgZ3V0dGVyID0gMTQsXG4gIHdpZHRoLFxuICBtaW5Db2xzID0gMyxcbn06IHt8XG4gIGNhY2hlOiBDYWNoZTxULCBudW1iZXI+LFxuICBjb2x1bW5XaWR0aD86IG51bWJlcixcbiAgZ3V0dGVyPzogbnVtYmVyLFxuICB3aWR0aD86ID9udW1iZXIsXG4gIG1pbkNvbHM/OiBudW1iZXIsXG58fSkgPT4gKGl0ZW1zOiBBcnJheTxUPik6IEFycmF5PFBvc2l0aW9uPiA9PiB7XG4gIGlmICh3aWR0aCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGl0ZW1zLm1hcCgoKSA9PiBvZmZzY3JlZW4oY29sdW1uV2lkdGgpKTtcbiAgfVxuXG4gIGNvbnN0IGNvbHVtbldpZHRoQW5kR3V0dGVyID0gY29sdW1uV2lkdGggKyBndXR0ZXI7XG4gIGNvbnN0IGNvbHVtbkNvdW50ID0gTWF0aC5tYXgoXG4gICAgTWF0aC5mbG9vcigod2lkdGggKyBndXR0ZXIpIC8gY29sdW1uV2lkdGhBbmRHdXR0ZXIpLFxuICAgIG1pbkNvbHNcbiAgKTtcblxuICBjb25zdCBwb3NpdGlvbnMgPSBbXTtcbiAgY29uc3QgaGVpZ2h0cyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBsZXQgcG9zaXRpb247XG4gICAgY29uc3QgaGVpZ2h0ID0gY2FjaGUuZ2V0KGl0ZW1zW2ldKTtcblxuICAgIGlmIChoZWlnaHQgPT0gbnVsbCkge1xuICAgICAgcG9zaXRpb24gPSBvZmZzY3JlZW4oY29sdW1uV2lkdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb2x1bW4gPSBpICUgY29sdW1uQ291bnQ7XG4gICAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKGkgLyBjb2x1bW5Db3VudCk7XG5cbiAgICAgIGlmIChjb2x1bW4gPT09IDAgfHwgaGVpZ2h0ID4gaGVpZ2h0c1tyb3ddKSB7XG4gICAgICAgIGhlaWdodHNbcm93XSA9IGhlaWdodDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdG9wID1cbiAgICAgICAgcm93ID4gMFxuICAgICAgICAgID8gaGVpZ2h0cy5zbGljZSgwLCByb3cpLnJlZHVjZSgoc3VtLCB5KSA9PiBzdW0gKyB5ICsgZ3V0dGVyLCAwKVxuICAgICAgICAgIDogMDtcblxuICAgICAgcG9zaXRpb24gPSB7XG4gICAgICAgIHRvcCxcbiAgICAgICAgbGVmdDogY29sdW1uICogY29sdW1uV2lkdGhBbmRHdXR0ZXIsXG4gICAgICAgIHdpZHRoOiBjb2x1bW5XaWR0aCxcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgfTtcbiAgICB9XG4gICAgcG9zaXRpb25zLnB1c2gocG9zaXRpb24pO1xuICB9XG4gIHJldHVybiBwb3NpdGlvbnM7XG59O1xuIiwiLy8gQGZsb3dcbmltcG9ydCB0eXBlIHsgQ2FjaGUgfSBmcm9tICcuL0NhY2hlLmpzJztcblxudHlwZSBQb3NpdGlvbiA9IHsgdG9wOiBudW1iZXIsIGxlZnQ6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIgfTtcblxuY29uc3QgbWluZGV4ID0gYXJyID0+IHtcbiAgbGV0IGlkeCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGFycltpXSA8IGFycltpZHhdKSB7XG4gICAgICBpZHggPSBpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaWR4O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgPFQ+KHtcbiAgZ3V0dGVyID0gMCxcbiAgY2FjaGUsXG4gIG1pbkNvbHMgPSAyLFxuICBpZGVhbENvbHVtbldpZHRoID0gMjQwLFxuICB3aWR0aCxcbn06IHt8XG4gIGd1dHRlcj86IG51bWJlcixcbiAgY2FjaGU6IENhY2hlPFQsIG51bWJlcj4sXG4gIG1pbkNvbHM/OiBudW1iZXIsXG4gIGlkZWFsQ29sdW1uV2lkdGg/OiBudW1iZXIsXG4gIHdpZHRoPzogP251bWJlcixcbnx9KSA9PiB7XG4gIGlmICh3aWR0aCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIChpdGVtczogQXJyYXk8bWl4ZWQ+KTogQXJyYXk8UG9zaXRpb24+ID0+XG4gICAgICBpdGVtcy5tYXAoKCkgPT4gKHtcbiAgICAgICAgdG9wOiBJbmZpbml0eSxcbiAgICAgICAgbGVmdDogSW5maW5pdHksXG4gICAgICAgIHdpZHRoOiBJbmZpbml0eSxcbiAgICAgICAgaGVpZ2h0OiBJbmZpbml0eSxcbiAgICAgIH0pKTtcbiAgfVxuXG4gIC8vIFwiVGhpcyBpcyBraW5kIG9mIGNyYXp5IVwiIC0geW91XG4gIC8vIFllcywgaW5kZWVkLiBUaGUgXCJndWVzc2luZ1wiIGhlcmUgaXMgbWVhbnQgdG8gcmVwbGljYXRlIHRoZSBwYXNzIHRoYXQgdGhlXG4gIC8vIG9yaWdpbmFsIGltcGxlbWVudGF0aW9uIHRha2VzIHdpdGggQ1NTLlxuICBjb25zdCBjb2xndWVzcyA9IE1hdGguZmxvb3Iod2lkdGggLyBpZGVhbENvbHVtbldpZHRoKTtcbiAgY29uc3QgY29sdW1uQ291bnQgPSBNYXRoLm1heChcbiAgICBNYXRoLmZsb29yKCh3aWR0aCAtIGNvbGd1ZXNzICogZ3V0dGVyKSAvIGlkZWFsQ29sdW1uV2lkdGgpLFxuICAgIG1pbkNvbHNcbiAgKTtcbiAgY29uc3QgY29sdW1uV2lkdGggPSBNYXRoLmZsb29yKHdpZHRoIC8gY29sdW1uQ291bnQpO1xuXG4gIHJldHVybiAoaXRlbXM6IEFycmF5PFQ+KSA9PiB7XG4gICAgLy8gdGhlIHRvdGFsIGhlaWdodCBvZiBlYWNoIGNvbHVtblxuICAgIGNvbnN0IGhlaWdodHMgPSBuZXcgQXJyYXkoY29sdW1uQ291bnQpLmZpbGwoMCk7XG5cbiAgICByZXR1cm4gaXRlbXMucmVkdWNlKChhY2MsIGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IGFjYztcbiAgICAgIGNvbnN0IGhlaWdodCA9IGNhY2hlLmdldChpdGVtKTtcbiAgICAgIGxldCBwb3NpdGlvbjtcblxuICAgICAgaWYgKGhlaWdodCA9PSBudWxsKSB7XG4gICAgICAgIHBvc2l0aW9uID0ge1xuICAgICAgICAgIHRvcDogSW5maW5pdHksXG4gICAgICAgICAgbGVmdDogSW5maW5pdHksXG4gICAgICAgICAgd2lkdGg6IGNvbHVtbldpZHRoLFxuICAgICAgICAgIGhlaWdodDogSW5maW5pdHksXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjb2wgPSBtaW5kZXgoaGVpZ2h0cyk7XG4gICAgICAgIGNvbnN0IHRvcCA9IGhlaWdodHNbY29sXTtcbiAgICAgICAgY29uc3QgbGVmdCA9IGNvbCAqIGNvbHVtbldpZHRoICsgZ3V0dGVyIC8gMjtcblxuICAgICAgICBoZWlnaHRzW2NvbF0gKz0gaGVpZ2h0O1xuICAgICAgICBwb3NpdGlvbiA9IHtcbiAgICAgICAgICB0b3AsXG4gICAgICAgICAgbGVmdCxcbiAgICAgICAgICB3aWR0aDogY29sdW1uV2lkdGggLSBndXR0ZXIsXG4gICAgICAgICAgaGVpZ2h0LFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBwb3NpdGlvbnMucHVzaChwb3NpdGlvbik7XG4gICAgICByZXR1cm4gcG9zaXRpb25zO1xuICAgIH0sIFtdKTtcbiAgfTtcbn07XG4iLCIvLyBAZmxvd1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFzb25yeUxheW91dCB7fVxuIiwiLy8gQGZsb3dcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuaWZvcm1Sb3dMYXlvdXQge31cbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4vZGVib3VuY2UuanMnO1xuaW1wb3J0IEZldGNoSXRlbXMgZnJvbSAnLi9GZXRjaEl0ZW1zLmpzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9NYXNvbnJ5LmNzcyc7XG5pbXBvcnQgU2Nyb2xsQ29udGFpbmVyIGZyb20gJy4vU2Nyb2xsQ29udGFpbmVyLmpzJztcbmltcG9ydCB0aHJvdHRsZSBmcm9tICcuL3Rocm90dGxlLmpzJztcbmltcG9ydCB0eXBlIHsgQ2FjaGUgfSBmcm9tICcuL0NhY2hlLmpzJztcbmltcG9ydCBNZWFzdXJlbWVudFN0b3JlIGZyb20gJy4vTWVhc3VyZW1lbnRTdG9yZS5qcyc7XG5pbXBvcnQge1xuICBnZXRFbGVtZW50SGVpZ2h0LFxuICBnZXRSZWxhdGl2ZVNjcm9sbFRvcCxcbiAgZ2V0U2Nyb2xsUG9zLFxufSBmcm9tICcuL3Njcm9sbFV0aWxzLmpzJztcbmltcG9ydCB7XG4gIERlZmF1bHRMYXlvdXRTeW1ib2wsXG4gIFVuaWZvcm1Sb3dMYXlvdXRTeW1ib2wsXG59IGZyb20gJy4vbGVnYWN5TGF5b3V0U3ltYm9scy5qcyc7XG5pbXBvcnQgZGVmYXVsdExheW91dCBmcm9tICcuL2RlZmF1bHRMYXlvdXQuanMnO1xuaW1wb3J0IHVuaWZvcm1Sb3dMYXlvdXQgZnJvbSAnLi91bmlmb3JtUm93TGF5b3V0LmpzJztcbmltcG9ydCBmdWxsV2lkdGhMYXlvdXQgZnJvbSAnLi9mdWxsV2lkdGhMYXlvdXQuanMnO1xuaW1wb3J0IExlZ2FjeU1hc29ucnlMYXlvdXQgZnJvbSAnLi9sYXlvdXRzL01hc29ucnlMYXlvdXQuanMnO1xuaW1wb3J0IExlZ2FjeVVuaWZvcm1Sb3dMYXlvdXQgZnJvbSAnLi9sYXlvdXRzL1VuaWZvcm1Sb3dMYXlvdXQuanMnO1xuXG50eXBlIExheW91dCA9XG4gIHwgdHlwZW9mIERlZmF1bHRMYXlvdXRTeW1ib2xcbiAgfCB0eXBlb2YgVW5pZm9ybVJvd0xheW91dFN5bWJvbFxuICB8IExlZ2FjeU1hc29ucnlMYXlvdXRcbiAgfCBMZWdhY3lVbmlmb3JtUm93TGF5b3V0O1xuXG50eXBlIFByb3BzPFQ+ID0ge3xcbiAgY29sdW1uV2lkdGg/OiBudW1iZXIsXG4gIGNvbXA6IFJlYWN0LkNvbXBvbmVudFR5cGU8e1xuICAgIGRhdGE6IFQsXG4gICAgaXRlbUlkeDogbnVtYmVyLFxuICAgIGlzTWVhc3VyaW5nOiBib29sZWFuLFxuICB9PixcbiAgZmxleGlibGU/OiBib29sZWFuLFxuICBndXR0ZXJXaWR0aD86IG51bWJlcixcbiAgaXRlbXM6IEFycmF5PFQ+LFxuICBtZWFzdXJlbWVudFN0b3JlOiBDYWNoZTxULCAqPixcbiAgbWluQ29sczogbnVtYmVyLFxuICBsYXlvdXQ/OiBMYXlvdXQsXG4gIC8vIFN1cHBvcnQgbGVnYWN5IGxvYWRJdGVtcyB1c2FnZS5cbiAgLy8gVE9ETzogU2ltcGxpZnkgbm9uIGZhbHNleSBmbG93dHlwZS5cbiAgbG9hZEl0ZW1zPzpcbiAgICB8IGZhbHNlXG4gICAgfCAoKFxuICAgICAgICA/e1xuICAgICAgICAgIGZyb206IG51bWJlcixcbiAgICAgICAgfVxuICAgICAgKSA9PiB2b2lkIHwgYm9vbGVhbiB8IHt9KSxcbiAgc2Nyb2xsQ29udGFpbmVyPzogKCkgPT4gSFRNTEVsZW1lbnQsXG4gIHZpcnR1YWxCb3VuZHNUb3A/OiBudW1iZXIsXG4gIHZpcnR1YWxCb3VuZHNCb3R0b20/OiBudW1iZXIsXG4gIHZpcnR1YWxpemU/OiBib29sZWFuLFxufH07XG5cbnR5cGUgU3RhdGU8VD4gPSB7fFxuICBoYXNQZW5kaW5nTWVhc3VyZW1lbnRzOiBib29sZWFuLFxuICBpc0ZldGNoaW5nOiBib29sZWFuLFxuICBpdGVtczogQXJyYXk8VD4sXG4gIHNjcm9sbFRvcDogbnVtYmVyLFxuICB3aWR0aDogP251bWJlcixcbnx9O1xuXG5jb25zdCBSRVNJWkVfREVCT1VOQ0UgPSAzMDA7XG4vLyBNdWx0aXBsaWVkIGFnYWluc3QgY29udGFpbmVyIGhlaWdodC5cbi8vIFRoZSBhbW91bnQgb2YgZXh0cmEgYnVmZmVyIHNwYWNlIGZvciBwb3B1bGF0aW5nIHZpc2libGUgaXRlbXMuXG5jb25zdCBWSVJUVUFMX0JVRkZFUl9GQUNUT1IgPSAwLjc7XG5cbmNvbnN0IGxheW91dE51bWJlclRvQ3NzRGltZW5zaW9uID0gbiA9PiAobiAhPT0gSW5maW5pdHkgPyBuIDogdW5kZWZpbmVkKTtcblxuLyoqXG4gKiBOT1RFOiBUaGlzIGlzIHRvIGJlIHJlcGxhY2VkIGJ5IE1hc29ucnlJbmZpbml0ZUJldGEgd2hlbiBpdCBpcyByZWFkeVxuICogTk9URTogUGxlYXNlIGRvIG5vdCBtb2RpZnkgdGhpcyBvciBtYWtlIHN1cmUgY2hhbmdlcyBpbiBoZXJlIGFyZSBhbHNvXG4gKiAgICAgICByZXBsaWNhdGVkIGluIE1hc29ucnlCZXRhLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXNvbnJ5PFQ+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPFQ+LCBTdGF0ZTxUPj4ge1xuICBzdGF0aWMgY3JlYXRlTWVhc3VyZW1lbnRTdG9yZSgpIHtcbiAgICByZXR1cm4gbmV3IE1lYXN1cmVtZW50U3RvcmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxheXMgcmVzaXplIGhhbmRsaW5nIGluIGNhc2UgdGhlIHNjcm9sbCBjb250YWluZXIgaXMgc3RpbGwgYmVpbmcgcmVzaXplZC5cbiAgICovXG4gIGhhbmRsZVJlc2l6ZSA9IGRlYm91bmNlKCgpID0+IHtcbiAgICBpZiAodGhpcy5ncmlkV3JhcHBlcikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHdpZHRoOiB0aGlzLmdyaWRXcmFwcGVyLmNsaWVudFdpZHRoIH0pO1xuICAgIH1cbiAgfSwgUkVTSVpFX0RFQk9VTkNFKTtcblxuICB1cGRhdGVTY3JvbGxQb3NpdGlvbiA9IHRocm90dGxlKCgpID0+IHtcbiAgICBpZiAoIXRoaXMuc2Nyb2xsQ29udGFpbmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNjcm9sbENvbnRhaW5lciA9IHRoaXMuc2Nyb2xsQ29udGFpbmVyLmdldFNjcm9sbENvbnRhaW5lclJlZigpO1xuXG4gICAgaWYgKCFzY3JvbGxDb250YWluZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNjcm9sbFRvcDogZ2V0U2Nyb2xsUG9zKHNjcm9sbENvbnRhaW5lciksXG4gICAgfSk7XG4gIH0pO1xuXG4gIG1lYXN1cmVDb250YWluZXJBc3luYyA9IGRlYm91bmNlKCgpID0+IHtcbiAgICB0aGlzLm1lYXN1cmVDb250YWluZXIoKTtcbiAgfSwgMCk7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGUgcHJlZmVycmVkL3RhcmdldCBpdGVtIHdpZHRoLiBJZiBgZmxleGlibGVgIGlzIHNldCwgdGhlIGl0ZW0gd2lkdGggd2lsbFxuICAgICAqIGdyb3cgdG8gZmlsbCBjb2x1bW4gc3BhY2UsIGFuZCBzaHJpbmsgdG8gZml0IGlmIGJlbG93IG1pbiBjb2x1bW5zLlxuICAgICAqL1xuICAgIGNvbHVtbldpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbXBvbmVudCB0byByZW5kZXIuXG4gICAgICovXG4gICAgLyogZXNsaW50IHJlYWN0L25vLXVudXNlZC1wcm9wLXR5cGVzOiAwICovXG4gICAgY29tcDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBwcmVmZXJyZWQvdGFyZ2V0IGl0ZW0gd2lkdGguIEl0ZW0gd2lkdGggd2lsbCBncm93IHRvIGZpbGxcbiAgICAgKiBjb2x1bW4gc3BhY2UsIGFuZCBzaHJpbmsgdG8gZml0IGlmIGJlbG93IG1pbiBjb2x1bW5zLlxuICAgICAqL1xuICAgIGZsZXhpYmxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBhbW91bnQgb2Ygc3BhY2UgYmV0d2VlbiBlYWNoIGl0ZW0uXG4gICAgICovXG4gICAgZ3V0dGVyV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBhbGwgb2JqZWN0cyB0byBkaXNwbGF5IGluIHRoZSBncmlkLlxuICAgICAqL1xuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe30pKS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogTWVhc3VyZW1lbnQgU3RvcmVcbiAgICAgKi9cbiAgICBtZWFzdXJlbWVudFN0b3JlOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihNZWFzdXJlbWVudFN0b3JlKSxcblxuICAgIC8qKlxuICAgICAqIExheW91dCBzeXN0ZW0gdG8gdXNlIGZvciBpdGVtc1xuICAgICAqL1xuICAgIGxheW91dDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuaW5zdGFuY2VPZihMZWdhY3lNYXNvbnJ5TGF5b3V0KSxcbiAgICAgIFByb3BUeXBlcy5pbnN0YW5jZU9mKExlZ2FjeVVuaWZvcm1Sb3dMYXlvdXQpLFxuICAgICAgUHJvcFR5cGVzLnN5bWJvbCxcbiAgICBdKSxcblxuICAgIC8qKlxuICAgICAqIEEgY2FsbGJhY2sgd2hpY2ggdGhlIGdyaWQgY2FsbHMgd2hlbiB3ZSBuZWVkIHRvIGxvYWQgbW9yZSBpdGVtcyBhcyB0aGUgdXNlciBzY3JvbGxzLlxuICAgICAqIFRoZSBjYWxsYmFjayBzaG91bGQgdXBkYXRlIHRoZSBzdGF0ZSBvZiB0aGUgaXRlbXMsIGFuZCBwYXNzIHRob3NlIGluIGFzIHByb3BzXG4gICAgICogdG8gdGhpcyBjb21wb25lbnQuXG4gICAgICovXG4gICAgbG9hZEl0ZW1zOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIE1pbmltdW0gbnVtYmVyIG9mIGNvbHVtbnMgdG8gZGlzcGxheS5cbiAgICAgKi9cbiAgICBtaW5Db2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCB0aGUgZ3JpZCBjYWxscyB0byBnZXQgdGhlIHNjcm9sbCBjb250YWluZXIuXG4gICAgICogVGhpcyBpcyByZXF1aXJlZCBpZiB0aGUgZ3JpZCBpcyBleHBlY3RlZCB0byBiZSBzY3JvbGxhYmxlLlxuICAgICAqL1xuICAgIHNjcm9sbENvbnRhaW5lcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIG9yIG5vdCB0byB1c2UgYWN0dWFsIHZpcnR1YWxpemF0aW9uXG4gICAgICovXG4gICAgdmlydHVhbGl6ZTogUHJvcFR5cGVzLmJvb2wsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb2x1bW5XaWR0aDogMjM2LFxuICAgIG1lYXN1cmVtZW50U3RvcmU6IG5ldyBNZWFzdXJlbWVudFN0b3JlKCksXG4gICAgbWluQ29sczogMyxcbiAgICBsYXlvdXQ6IERlZmF1bHRMYXlvdXRTeW1ib2wsXG4gICAgbG9hZEl0ZW1zOiAoKSA9PiB7fSxcbiAgICB2aXJ0dWFsaXplOiBmYWxzZSxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHM8VD4pIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmNvbnRhaW5lckhlaWdodCA9IDA7XG4gICAgdGhpcy5jb250YWluZXJPZmZzZXQgPSAwO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhhc1BlbmRpbmdNZWFzdXJlbWVudHM6IHByb3BzLml0ZW1zLnNvbWUoXG4gICAgICAgIGl0ZW0gPT4gISFpdGVtICYmICFwcm9wcy5tZWFzdXJlbWVudFN0b3JlLmhhcyhpdGVtKVxuICAgICAgKSxcbiAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLXVudXNlZC1zdGF0ZVxuICAgICAgaXRlbXM6IHByb3BzLml0ZW1zLFxuICAgICAgc2Nyb2xsVG9wOiAwLFxuICAgICAgd2lkdGg6IHVuZGVmaW5lZCxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgaG9va3MgYWZ0ZXIgdGhlIGNvbXBvbmVudCBtb3VudHMuXG4gICAqL1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVSZXNpemUpO1xuXG4gICAgdGhpcy5tZWFzdXJlQ29udGFpbmVyKCk7XG5cbiAgICBsZXQgeyBzY3JvbGxUb3AgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKHRoaXMuc2Nyb2xsQ29udGFpbmVyICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IHNjcm9sbENvbnRhaW5lciA9IHRoaXMuc2Nyb2xsQ29udGFpbmVyLmdldFNjcm9sbENvbnRhaW5lclJlZigpO1xuICAgICAgaWYgKHNjcm9sbENvbnRhaW5lcikge1xuICAgICAgICBzY3JvbGxUb3AgPSBnZXRTY3JvbGxQb3Moc2Nyb2xsQ29udGFpbmVyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgc2Nyb2xsVG9wLFxuICAgICAgd2lkdGg6IHRoaXMuZ3JpZFdyYXBwZXIgPyB0aGlzLmdyaWRXcmFwcGVyLmNsaWVudFdpZHRoIDogcHJldlN0YXRlLndpZHRoLFxuICAgIH0pKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IFByb3BzPFQ+LCBwcmV2U3RhdGU6IFN0YXRlPFQ+KSB7XG4gICAgY29uc3QgeyBpdGVtcywgbWVhc3VyZW1lbnRTdG9yZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHRoaXMubWVhc3VyZUNvbnRhaW5lckFzeW5jKCk7XG5cbiAgICBpZiAocHJldlN0YXRlLndpZHRoICE9IG51bGwgJiYgdGhpcy5zdGF0ZS53aWR0aCAhPT0gcHJldlN0YXRlLndpZHRoKSB7XG4gICAgICBtZWFzdXJlbWVudFN0b3JlLnJlc2V0KCk7XG4gICAgfVxuICAgIC8vIGNhbGN1bGF0ZSB3aGV0aGVyIHdlIHN0aWxsIGhhdmUgcGVuZGluZyBtZWFzdXJlbWVudHNcbiAgICBjb25zdCBoYXNQZW5kaW5nTWVhc3VyZW1lbnRzID0gaXRlbXMuc29tZShcbiAgICAgIGl0ZW0gPT4gISFpdGVtICYmICFtZWFzdXJlbWVudFN0b3JlLmhhcyhpdGVtKVxuICAgICk7XG4gICAgaWYgKFxuICAgICAgaGFzUGVuZGluZ01lYXN1cmVtZW50cyB8fFxuICAgICAgaGFzUGVuZGluZ01lYXN1cmVtZW50cyAhPT0gdGhpcy5zdGF0ZS5oYXNQZW5kaW5nTWVhc3VyZW1lbnRzIHx8XG4gICAgICBwcmV2U3RhdGUud2lkdGggPT0gbnVsbFxuICAgICkge1xuICAgICAgdGhpcy5pbnNlcnRBbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGhhc1BlbmRpbmdNZWFzdXJlbWVudHMsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBsaXN0ZW5lcnMgd2hlbiB1bm1vdW50aW5nLlxuICAgKi9cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMuaW5zZXJ0QW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuaW5zZXJ0QW5pbWF0aW9uRnJhbWUpO1xuICAgIH1cblxuICAgIC8vIE1ha2Ugc3VyZSBhc3luYyBtZXRob2RzIGFyZSBjYW5jZWxsZWQuXG4gICAgdGhpcy5tZWFzdXJlQ29udGFpbmVyQXN5bmMuY2xlYXJUaW1lb3V0KCk7XG4gICAgdGhpcy5oYW5kbGVSZXNpemUuY2xlYXJUaW1lb3V0KCk7XG4gICAgdGhpcy51cGRhdGVTY3JvbGxQb3NpdGlvbi5jbGVhclRpbWVvdXQoKTtcblxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVJlc2l6ZSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzOiBQcm9wczxUPiwgc3RhdGU6IFN0YXRlPFQ+KSB7XG4gICAgY29uc3QgeyBpdGVtcywgbWVhc3VyZW1lbnRTdG9yZSB9ID0gcHJvcHM7XG4gICAgLy8gd2hlbmV2ZXIgd2UncmUgcmVjZWl2aW5nIG5ldyBwcm9wcywgZGV0ZXJtaW5lIHdoZXRoZXIgYW55IGl0ZW1zIG5lZWQgdG8gYmUgbWVhc3VyZWRcbiAgICAvLyBUT0RPIC0gd2Ugc2hvdWxkIHRyZWF0IGl0ZW1zIGFzIGltbXV0YWJsZVxuICAgIGNvbnN0IGhhc1BlbmRpbmdNZWFzdXJlbWVudHMgPSBpdGVtcy5zb21lKFxuICAgICAgaXRlbSA9PiAhbWVhc3VyZW1lbnRTdG9yZS5oYXMoaXRlbSlcbiAgICApO1xuXG4gICAgLy8gU2hhbGxvdyBjb21wYXJlIGFsbCBpdGVtcywgaWYgYW55IGNoYW5nZSByZWZsb3cgdGhlIGdyaWQuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgLy8gV2UndmUgcmVhY2hlZCB0aGUgZW5kIG9mIG91ciBjdXJyZW50IHByb3BzIGFuZCBldmVyeXRoaW5nIG1hdGNoZXMuXG4gICAgICAvLyBJZiB3ZSBoaXQgdGhpcyBjYXNlIGl0IG1lYW5zIHdlIG5lZWQgdG8gaW5zZXJ0IG5ldyBpdGVtcy5cbiAgICAgIGlmIChzdGF0ZS5pdGVtc1tpXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaGFzUGVuZGluZ01lYXN1cmVtZW50cyxcbiAgICAgICAgICBpdGVtcyxcbiAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgLy8gUmVzZXQgZ3JpZCBpdGVtcyB3aGVuOlxuICAgICAgaWYgKFxuICAgICAgICAvLyBBbiBpdGVtIG9iamVjdCByZWYgZG9lcyBub3QgbWF0Y2guXG4gICAgICAgIGl0ZW1zW2ldICE9PSBzdGF0ZS5pdGVtc1tpXSB8fFxuICAgICAgICAvLyBPciBsZXNzIGl0ZW1zIHRoYW4gd2UgY3VycmVudGx5IGhhdmUgYXJlIHBhc3NlZCBpbi5cbiAgICAgICAgaXRlbXMubGVuZ3RoIDwgc3RhdGUuaXRlbXMubGVuZ3RoXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoYXNQZW5kaW5nTWVhc3VyZW1lbnRzLFxuICAgICAgICAgIGl0ZW1zLFxuICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlc2V0IGl0ZW1zIGlmIG5ldyBpdGVtcyBhcnJheSBpcyBlbXB0eS5cbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwICYmIHN0YXRlLml0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhhc1BlbmRpbmdNZWFzdXJlbWVudHMsXG4gICAgICAgIGl0ZW1zLFxuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChoYXNQZW5kaW5nTWVhc3VyZW1lbnRzICE9PSBzdGF0ZS5oYXNQZW5kaW5nTWVhc3VyZW1lbnRzKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgd2UgYWx3YXlzIHVwZGF0ZSBoYXNQZW5kaW5nTWVhc3VyZW1lbnRzXG4gICAgICByZXR1cm4ge1xuICAgICAgICBoYXNQZW5kaW5nTWVhc3VyZW1lbnRzLFxuICAgICAgICBpdGVtcyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIG51bGwgdG8gaW5kaWNhdGUgbm8gY2hhbmdlIHRvIHN0YXRlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgc2V0R3JpZFdyYXBwZXJSZWYgPSAocmVmOiA/SFRNTEVsZW1lbnQpID0+IHtcbiAgICB0aGlzLmdyaWRXcmFwcGVyID0gcmVmO1xuICB9O1xuXG4gIHNldFNjcm9sbENvbnRhaW5lclJlZiA9IChyZWY6ID9TY3JvbGxDb250YWluZXIpID0+IHtcbiAgICB0aGlzLnNjcm9sbENvbnRhaW5lciA9IHJlZjtcbiAgfTtcblxuICBmZXRjaE1vcmUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBsb2FkSXRlbXMgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGxvYWRJdGVtcyAmJiB0eXBlb2YgbG9hZEl0ZW1zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICB7XG4gICAgICAgICAgaXNGZXRjaGluZzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4gbG9hZEl0ZW1zKHsgZnJvbTogdGhpcy5wcm9wcy5pdGVtcy5sZW5ndGggfSlcbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnRhaW5lckhlaWdodDogbnVtYmVyO1xuXG4gIGNvbnRhaW5lck9mZnNldDogbnVtYmVyO1xuXG4gIGdyaWRXcmFwcGVyOiA/SFRNTEVsZW1lbnQ7XG5cbiAgaW5zZXJ0QW5pbWF0aW9uRnJhbWU6IEFuaW1hdGlvbkZyYW1lSUQ7XG5cbiAgbWVhc3VyZVRpbWVvdXQ6IFRpbWVvdXRJRDtcblxuICBzY3JvbGxDb250YWluZXI6ID9TY3JvbGxDb250YWluZXI7XG5cbiAgbWVhc3VyZUNvbnRhaW5lcigpIHtcbiAgICBpZiAodGhpcy5zY3JvbGxDb250YWluZXIgIT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBzY3JvbGxDb250YWluZXIgfSA9IHRoaXM7XG4gICAgICBjb25zdCBzY3JvbGxDb250YWluZXJSZWYgPSBzY3JvbGxDb250YWluZXIuZ2V0U2Nyb2xsQ29udGFpbmVyUmVmKCk7XG4gICAgICBpZiAoc2Nyb2xsQ29udGFpbmVyUmVmKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVySGVpZ2h0ID0gZ2V0RWxlbWVudEhlaWdodChzY3JvbGxDb250YWluZXJSZWYpO1xuICAgICAgICBjb25zdCBlbCA9IHRoaXMuZ3JpZFdyYXBwZXI7XG4gICAgICAgIGlmIChlbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgY29uc3QgcmVsYXRpdmVTY3JvbGxUb3AgPSBnZXRSZWxhdGl2ZVNjcm9sbFRvcChzY3JvbGxDb250YWluZXJSZWYpO1xuICAgICAgICAgIHRoaXMuY29udGFpbmVyT2Zmc2V0ID1cbiAgICAgICAgICAgIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHJlbGF0aXZlU2Nyb2xsVG9wO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIG1lYXN1cmVtZW50cy9wb3NpdGlvbnMgYW5kIGZvcmNlIGEgcmVmbG93IG9mIHRoZSBlbnRpcmUgZ3JpZC5cbiAgICogT25seSB1c2UgdGhpcyBpZiBhYnNvbHV0ZWx5IG5lY2Vzc2FyeSAtIGV4OiBXZSBuZWVkIHRvIHJlZmxvdyBpdGVtcyBpZiB0aGVcbiAgICogbnVtYmVyIG9mIGNvbHVtbnMgd2Ugd291bGQgZGlzcGxheSBzaG91bGQgY2hhbmdlIGFmdGVyIGEgcmVzaXplLlxuICAgKi9cbiAgcmVmbG93KCkge1xuICAgIHRoaXMucHJvcHMubWVhc3VyZW1lbnRTdG9yZS5yZXNldCgpO1xuICAgIHRoaXMubWVhc3VyZUNvbnRhaW5lcigpO1xuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIHJlbmRlck1hc29ucnlDb21wb25lbnQgPSAoaXRlbURhdGE6IFQsIGlkeDogbnVtYmVyLCBwb3NpdGlvbjogKikgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbXA6IENvbXBvbmVudCxcbiAgICAgIHZpcnR1YWxpemUsXG4gICAgICB2aXJ0dWFsQm91bmRzVG9wLFxuICAgICAgdmlydHVhbEJvdW5kc0JvdHRvbSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCB9ID0gcG9zaXRpb247XG5cbiAgICBsZXQgaXNWaXNpYmxlO1xuICAgIGlmICh0aGlzLnByb3BzLnNjcm9sbENvbnRhaW5lcikge1xuICAgICAgY29uc3QgdmlydHVhbEJ1ZmZlciA9IHRoaXMuY29udGFpbmVySGVpZ2h0ICogVklSVFVBTF9CVUZGRVJfRkFDVE9SO1xuICAgICAgY29uc3Qgb2Zmc2V0U2Nyb2xsUG9zID0gdGhpcy5zdGF0ZS5zY3JvbGxUb3AgLSB0aGlzLmNvbnRhaW5lck9mZnNldDtcbiAgICAgIGNvbnN0IHZpZXdwb3J0VG9wID0gdmlydHVhbEJvdW5kc1RvcFxuICAgICAgICA/IG9mZnNldFNjcm9sbFBvcyAtIHZpcnR1YWxCb3VuZHNUb3BcbiAgICAgICAgOiBvZmZzZXRTY3JvbGxQb3MgLSB2aXJ0dWFsQnVmZmVyO1xuICAgICAgY29uc3Qgdmlld3BvcnRCb3R0b20gPSB2aXJ0dWFsQm91bmRzQm90dG9tXG4gICAgICAgID8gb2Zmc2V0U2Nyb2xsUG9zICsgdGhpcy5jb250YWluZXJIZWlnaHQgKyB2aXJ0dWFsQm91bmRzQm90dG9tXG4gICAgICAgIDogb2Zmc2V0U2Nyb2xsUG9zICsgdGhpcy5jb250YWluZXJIZWlnaHQgKyB2aXJ0dWFsQnVmZmVyO1xuXG4gICAgICBpc1Zpc2libGUgPSAhKFxuICAgICAgICBwb3NpdGlvbi50b3AgKyBwb3NpdGlvbi5oZWlnaHQgPCB2aWV3cG9ydFRvcCB8fFxuICAgICAgICBwb3NpdGlvbi50b3AgPiB2aWV3cG9ydEJvdHRvbVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaWYgbm8gc2Nyb2xsIGNvbnRhaW5lciBpcyBwYXNzZWQgaW4sIGl0ZW1zIHNob3VsZCBhbHdheXMgYmUgdmlzaWJsZVxuICAgICAgaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBpdGVtQ29tcG9uZW50ID0gKFxuICAgICAgPGRpdlxuICAgICAgICBrZXk9e2BpdGVtLSR7aWR4fWB9XG4gICAgICAgIGNsYXNzTmFtZT17W3N0eWxlcy5NYXNvbnJ5X19JdGVtLCBzdHlsZXMuTWFzb25yeV9fSXRlbV9fTW91bnRlZF0uam9pbihcbiAgICAgICAgICAnICdcbiAgICAgICAgKX1cbiAgICAgICAgZGF0YS1ncmlkLWl0ZW1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7bGVmdH1weCkgdHJhbnNsYXRlWSgke3RvcH1weClgLFxuICAgICAgICAgIFdlYmtpdFRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHtsZWZ0fXB4KSB0cmFuc2xhdGVZKCR7dG9wfXB4KWAsXG4gICAgICAgICAgd2lkdGg6IGxheW91dE51bWJlclRvQ3NzRGltZW5zaW9uKHdpZHRoKSxcbiAgICAgICAgICBoZWlnaHQ6IGxheW91dE51bWJlclRvQ3NzRGltZW5zaW9uKGhlaWdodCksXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxDb21wb25lbnQgZGF0YT17aXRlbURhdGF9IGl0ZW1JZHg9e2lkeH0gaXNNZWFzdXJpbmc9e2ZhbHNlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICAgIHJldHVybiB2aXJ0dWFsaXplID8gKGlzVmlzaWJsZSAmJiBpdGVtQ29tcG9uZW50KSB8fCBudWxsIDogaXRlbUNvbXBvbmVudDtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY29sdW1uV2lkdGgsXG4gICAgICBjb21wOiBDb21wb25lbnQsXG4gICAgICBmbGV4aWJsZSxcbiAgICAgIGd1dHRlcldpZHRoOiBndXR0ZXIsXG4gICAgICBtZWFzdXJlbWVudFN0b3JlLFxuICAgICAgaXRlbXMsXG4gICAgICBtaW5Db2xzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgaGFzUGVuZGluZ01lYXN1cmVtZW50cywgd2lkdGggfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBsZXQgbGF5b3V0O1xuICAgIGlmIChmbGV4aWJsZSAmJiB3aWR0aCAhPT0gbnVsbCkge1xuICAgICAgbGF5b3V0ID0gZnVsbFdpZHRoTGF5b3V0KHtcbiAgICAgICAgZ3V0dGVyLFxuICAgICAgICBjYWNoZTogbWVhc3VyZW1lbnRTdG9yZSxcbiAgICAgICAgbWluQ29scyxcbiAgICAgICAgaWRlYWxDb2x1bW5XaWR0aDogY29sdW1uV2lkdGgsXG4gICAgICAgIHdpZHRoLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHRoaXMucHJvcHMubGF5b3V0ID09PSBVbmlmb3JtUm93TGF5b3V0U3ltYm9sIHx8XG4gICAgICB0aGlzLnByb3BzLmxheW91dCBpbnN0YW5jZW9mIExlZ2FjeVVuaWZvcm1Sb3dMYXlvdXRcbiAgICApIHtcbiAgICAgIGxheW91dCA9IHVuaWZvcm1Sb3dMYXlvdXQoe1xuICAgICAgICBjYWNoZTogbWVhc3VyZW1lbnRTdG9yZSxcbiAgICAgICAgY29sdW1uV2lkdGgsXG4gICAgICAgIGd1dHRlcixcbiAgICAgICAgbWluQ29scyxcbiAgICAgICAgd2lkdGgsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGF5b3V0ID0gZGVmYXVsdExheW91dCh7XG4gICAgICAgIGNhY2hlOiBtZWFzdXJlbWVudFN0b3JlLFxuICAgICAgICBjb2x1bW5XaWR0aCxcbiAgICAgICAgZ3V0dGVyLFxuICAgICAgICBtaW5Db2xzLFxuICAgICAgICB3aWR0aCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCBncmlkQm9keTtcbiAgICBpZiAod2lkdGggPT0gbnVsbCAmJiBoYXNQZW5kaW5nTWVhc3VyZW1lbnRzKSB7XG4gICAgICAvLyBXaGVuIGh5cmRhdGluZyBmcm9tIGEgc2VydmVyIHJlbmRlciwgd2UgZG9uJ3QgaGF2ZSB0aGUgd2lkdGggb2YgdGhlIGdyaWRcbiAgICAgIC8vIGFuZCB0aGUgbWVhc3VyZW1lbnQgc3RvcmUgaXMgZW1wdHlcbiAgICAgIGdyaWRCb2R5ID0gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuTWFzb25yeX1cbiAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDAsIHdpZHRoOiAnMTAwJScgfX1cbiAgICAgICAgICByZWY9e3RoaXMuc2V0R3JpZFdyYXBwZXJSZWZ9XG4gICAgICAgID5cbiAgICAgICAgICB7aXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbSkubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IC8vIGtlZXAgdGhpcyBpbiBzeW5jIHdpdGggcmVuZGVyTWFzb25yeUNvbXBvbmVudFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdGF0aWNcIlxuICAgICAgICAgICAgICBkYXRhLWdyaWQtaXRlbVxuICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwcHgpIHRyYW5zbGF0ZVkoMHB4KScsXG4gICAgICAgICAgICAgICAgV2Via2l0VHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwcHgpIHRyYW5zbGF0ZVkoMHB4KScsXG4gICAgICAgICAgICAgICAgd2lkdGg6IGZsZXhpYmxlXG4gICAgICAgICAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgOiBsYXlvdXROdW1iZXJUb0Nzc0RpbWVuc2lvbihjb2x1bW5XaWR0aCksIC8vIHdlIGNhbid0IHNldCBhIHdpZHRoIGZvciBzZXJ2ZXIgcmVuZGVyZWQgZmxleGlibGUgaXRlbXNcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgcmVmPXtlbCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVsICYmICFmbGV4aWJsZSkge1xuICAgICAgICAgICAgICAgICAgLy8gb25seSBtZWFzdXJlIGZsZXhpYmxlIGl0ZW1zIG9uIGNsaWVudFxuICAgICAgICAgICAgICAgICAgbWVhc3VyZW1lbnRTdG9yZS5zZXQoaXRlbSwgZWwuY2xpZW50SGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxDb21wb25lbnQgZGF0YT17aXRlbX0gaXRlbUlkeD17aX0gaXNNZWFzdXJpbmc9e2ZhbHNlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHdpZHRoID09IG51bGwpIHtcbiAgICAgIC8vIFdoZW4gdGhlIHdpZHRoIGlzIGVtcHR5ICh1c3VhbGx5IGFmdGVyIGEgcmUtbW91bnQpIHJlbmRlciBhbiBlbXB0eVxuICAgICAgLy8gZGl2IHRvIGNvbGxlY3QgdGhlIHdpZHRoIGZvciBsYXlvdXRcbiAgICAgIGdyaWRCb2R5ID0gPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IHJlZj17dGhpcy5zZXRHcmlkV3JhcHBlclJlZn0gLz47XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEZ1bGwgbGF5b3V0IGlzIHBvc3NpYmxlXG4gICAgICBjb25zdCBpdGVtc1RvUmVuZGVyID0gaXRlbXMuZmlsdGVyKFxuICAgICAgICBpdGVtID0+IGl0ZW0gJiYgbWVhc3VyZW1lbnRTdG9yZS5oYXMoaXRlbSlcbiAgICAgICk7XG4gICAgICBjb25zdCBpdGVtc1RvTWVhc3VyZSA9IGl0ZW1zXG4gICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtICYmICFtZWFzdXJlbWVudFN0b3JlLmhhcyhpdGVtKSlcbiAgICAgICAgLnNsaWNlKDAsIG1pbkNvbHMpO1xuXG4gICAgICBjb25zdCBwb3NpdGlvbnMgPSBsYXlvdXQoaXRlbXNUb1JlbmRlcik7XG4gICAgICBjb25zdCBtZWFzdXJpbmdQb3NpdGlvbnMgPSBsYXlvdXQoaXRlbXNUb01lYXN1cmUpO1xuICAgICAgLy8gTWF0aC5tYXgoKSA9PT0gLUluZmluaXR5IHdoZW4gdGhlcmUgYXJlIG5vIHBvc2l0aW9uc1xuICAgICAgY29uc3QgaGVpZ2h0ID0gcG9zaXRpb25zLmxlbmd0aFxuICAgICAgICA/IE1hdGgubWF4KC4uLnBvc2l0aW9ucy5tYXAocG9zID0+IHBvcy50b3AgKyBwb3MuaGVpZ2h0KSlcbiAgICAgICAgOiAwO1xuICAgICAgZ3JpZEJvZHkgPSAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSByZWY9e3RoaXMuc2V0R3JpZFdyYXBwZXJSZWZ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTWFzb25yeX0gc3R5bGU9e3sgaGVpZ2h0LCB3aWR0aCB9fT5cbiAgICAgICAgICAgIHtpdGVtc1RvUmVuZGVyLm1hcCgoaXRlbSwgaSkgPT5cbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJNYXNvbnJ5Q29tcG9uZW50KGl0ZW0sIGksIHBvc2l0aW9uc1tpXSlcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5NYXNvbnJ5fSBzdHlsZT17eyB3aWR0aCB9fT5cbiAgICAgICAgICAgIHtpdGVtc1RvTWVhc3VyZS5tYXAoKGRhdGEsIGkpID0+IHtcbiAgICAgICAgICAgICAgLy8gaXRlbXNUb01lYXN1cmUgaXMgYWx3YXlzIHRoZSBsZW5ndGggb2YgbWluQ29scywgc28gaSB3aWxsIGFsd2F5cyBiZSAwLi5taW5Db2xzLmxlbmd0aFxuICAgICAgICAgICAgICAvLyB3ZSBub3JtYWxpemUgdGhlIGluZGV4IGhlcmUgcmVsYXRpdmUgdG8gdGhlIGl0ZW0gbGlzdCBhcyBhIHdob2xlIHNvIHRoYXQgaXRlbUlkeCBpcyBjb3JyZWN0XG4gICAgICAgICAgICAgIC8vIGFuZCBzbyB0aGF0IFJlYWN0IGRvZXNudCByZXVzZSB0aGUgbWVhc3VyZW1lbnQgbm9kZXNcbiAgICAgICAgICAgICAgY29uc3QgbWVhc3VyZW1lbnRJbmRleCA9IGl0ZW1zVG9SZW5kZXIubGVuZ3RoICsgaTtcbiAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBtZWFzdXJpbmdQb3NpdGlvbnNbaV07XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAga2V5PXtgbWVhc3VyaW5nLSR7bWVhc3VyZW1lbnRJbmRleH1gfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IGxheW91dE51bWJlclRvQ3NzRGltZW5zaW9uKHBvc2l0aW9uLnRvcCksXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IGxheW91dE51bWJlclRvQ3NzRGltZW5zaW9uKHBvc2l0aW9uLmxlZnQpLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogbGF5b3V0TnVtYmVyVG9Dc3NEaW1lbnNpb24ocG9zaXRpb24ud2lkdGgpLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGxheW91dE51bWJlclRvQ3NzRGltZW5zaW9uKHBvc2l0aW9uLmhlaWdodCksXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgcmVmPXtlbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgICAgICAgICAgIG1lYXN1cmVtZW50U3RvcmUuc2V0KGRhdGEsIGVsLmNsaWVudEhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPENvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgICAgICAgICBpdGVtSWR4PXttZWFzdXJlbWVudEluZGV4fVxuICAgICAgICAgICAgICAgICAgICBpc01lYXN1cmluZ1xuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAge3RoaXMuc2Nyb2xsQ29udGFpbmVyICYmIChcbiAgICAgICAgICAgIDxGZXRjaEl0ZW1zXG4gICAgICAgICAgICAgIGNvbnRhaW5lckhlaWdodD17dGhpcy5jb250YWluZXJIZWlnaHR9XG4gICAgICAgICAgICAgIGZldGNoTW9yZT17dGhpcy5mZXRjaE1vcmV9XG4gICAgICAgICAgICAgIGlzRmV0Y2hpbmc9e1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNGZXRjaGluZyB8fCB0aGlzLnN0YXRlLmhhc1BlbmRpbmdNZWFzdXJlbWVudHNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzY3JvbGxIZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICAgICAgc2Nyb2xsVG9wPXt0aGlzLnN0YXRlLnNjcm9sbFRvcH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnByb3BzLnNjcm9sbENvbnRhaW5lciA/IChcbiAgICAgIDxTY3JvbGxDb250YWluZXJcbiAgICAgICAgcmVmPXt0aGlzLnNldFNjcm9sbENvbnRhaW5lclJlZn1cbiAgICAgICAgb25TY3JvbGw9e3RoaXMudXBkYXRlU2Nyb2xsUG9zaXRpb259XG4gICAgICAgIHNjcm9sbENvbnRhaW5lcj17dGhpcy5wcm9wcy5zY3JvbGxDb250YWluZXJ9XG4gICAgICA+XG4gICAgICAgIHtncmlkQm9keX1cbiAgICAgIDwvU2Nyb2xsQ29udGFpbmVyPlxuICAgICkgOiAoXG4gICAgICBncmlkQm9keVxuICAgICk7XG4gIH1cbn1cbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4vZGVib3VuY2UuanMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01hc29ucnkuY3NzJztcbmltcG9ydCBTY3JvbGxDb250YWluZXIgZnJvbSAnLi9TY3JvbGxDb250YWluZXIuanMnO1xuaW1wb3J0IHRocm90dGxlIGZyb20gJy4vdGhyb3R0bGUuanMnO1xuaW1wb3J0IHR5cGUgeyBDYWNoZSB9IGZyb20gJy4vQ2FjaGUuanMnO1xuaW1wb3J0IE1lYXN1cmVtZW50U3RvcmUgZnJvbSAnLi9NZWFzdXJlbWVudFN0b3JlLmpzJztcbmltcG9ydCB7XG4gIGdldEVsZW1lbnRIZWlnaHQsXG4gIGdldFJlbGF0aXZlU2Nyb2xsVG9wLFxuICBnZXRTY3JvbGxQb3MsXG59IGZyb20gJy4vc2Nyb2xsVXRpbHMuanMnO1xuaW1wb3J0IHtcbiAgRGVmYXVsdExheW91dFN5bWJvbCxcbiAgVW5pZm9ybVJvd0xheW91dFN5bWJvbCxcbn0gZnJvbSAnLi9sZWdhY3lMYXlvdXRTeW1ib2xzLmpzJztcbmltcG9ydCBkZWZhdWx0TGF5b3V0LCB7IHR5cGUgUG9zaXRpb24gfSBmcm9tICcuL2RlZmF1bHRMYXlvdXQuanMnO1xuaW1wb3J0IHVuaWZvcm1Sb3dMYXlvdXQgZnJvbSAnLi91bmlmb3JtUm93TGF5b3V0LmpzJztcbmltcG9ydCBmdWxsV2lkdGhMYXlvdXQgZnJvbSAnLi9mdWxsV2lkdGhMYXlvdXQuanMnO1xuaW1wb3J0IExlZ2FjeU1hc29ucnlMYXlvdXQgZnJvbSAnLi9sYXlvdXRzL01hc29ucnlMYXlvdXQuanMnO1xuaW1wb3J0IExlZ2FjeVVuaWZvcm1Sb3dMYXlvdXQgZnJvbSAnLi9sYXlvdXRzL1VuaWZvcm1Sb3dMYXlvdXQuanMnO1xuXG50eXBlIExheW91dCA9XG4gIHwgdHlwZW9mIERlZmF1bHRMYXlvdXRTeW1ib2xcbiAgfCB0eXBlb2YgVW5pZm9ybVJvd0xheW91dFN5bWJvbFxuICB8IExlZ2FjeU1hc29ucnlMYXlvdXRcbiAgfCBMZWdhY3lVbmlmb3JtUm93TGF5b3V0O1xuXG5leHBvcnQgdHlwZSBNZWFzdXJlbWVudFN0YXRlID0gJ2lkbGUnIHwgJ21lYXN1cmluZyc7XG5cbmV4cG9ydCB0eXBlIFByb3BzPFQ+ID0ge3xcbiAgY29sdW1uV2lkdGg/OiBudW1iZXIsXG4gIGNvbXA6IFJlYWN0LkNvbXBvbmVudFR5cGU8e1xuICAgIGRhdGE6IFQsXG4gICAgaXRlbUlkeDogbnVtYmVyLFxuICAgIGlzTWVhc3VyaW5nOiBib29sZWFuLFxuICB9PixcbiAgZmxleGlibGU/OiBib29sZWFuLFxuICBndXR0ZXJXaWR0aD86IG51bWJlcixcbiAgaXRlbXM6IEFycmF5PFQ+LFxuICBtZWFzdXJlbWVudFN0b3JlOiBDYWNoZTxULCAqPixcbiAgbWluQ29sczogbnVtYmVyLFxuICAvLyBDb250ZW50IGxheWVyIGFuZCBWaWV3cG9ydCBsYXllciBpcyBhcyBkZWZpbmVkIGluIENvbGxlY3Rpb24uXG4gIG9uVmlydHVhbGl6YXRpb25XaW5kb3dVcGRhdGU/OiAoXG4gICAgY29udGVudDogUG9zaXRpb24sXG4gICAgdmlld3BvcnQ6IFBvc2l0aW9uXG4gICkgPT4gdm9pZCxcbiAgb25BdXRvTWVhc3VyaW5nVXBkYXRlPzogKHN0YXRlOiBNZWFzdXJlbWVudFN0YXRlKSA9PiB2b2lkLFxuICBsYXlvdXQ/OiBMYXlvdXQsXG4gIC8vIFN1cHBvcnQgbGVnYWN5IGxvYWRJdGVtcyB1c2FnZS5cbiAgLy8gVE9ETzogU2ltcGxpZnkgbm9uIGZhbHNleSBmbG93dHlwZS5cbiAgbG9hZEl0ZW1zPzpcbiAgICB8IGZhbHNlXG4gICAgfCAoKFxuICAgICAgICA/e1xuICAgICAgICAgIGZyb206IG51bWJlcixcbiAgICAgICAgfVxuICAgICAgKSA9PiB2b2lkIHwgYm9vbGVhbiB8IHt9KSxcbiAgc2Nyb2xsQ29udGFpbmVyPzogKCkgPT4gSFRNTEVsZW1lbnQsXG4gIHZpcnR1YWxCb3VuZHNUb3A/OiBudW1iZXIsXG4gIHZpcnR1YWxCb3VuZHNCb3R0b20/OiBudW1iZXIsXG4gIHZpcnR1YWxpemU/OiBib29sZWFuLFxufH07XG5cbnR5cGUgU3RhdGU8VD4gPSB7fFxuICBoYXNQZW5kaW5nTWVhc3VyZW1lbnRzOiBib29sZWFuLFxuICBoZWlnaHQ6IG51bWJlcixcbiAgaXRlbXM6IEFycmF5PFQ+LFxuICBpdGVtc1RvTWVhc3VyZTogQXJyYXk8VD4sXG4gIGl0ZW1zVG9SZW5kZXI6IEFycmF5PFQ+LFxuICBtZWFzdXJpbmdQb3NpdGlvbnM6IEFycmF5PFBvc2l0aW9uPixcbiAgcmVuZGVyUG9zaXRpb25zOiBBcnJheTxQb3NpdGlvbj4sXG4gIHNjcm9sbFRvcDogbnVtYmVyLFxuICB3aWR0aDogP251bWJlcixcbnx9O1xuXG5jb25zdCBSRVNJWkVfREVCT1VOQ0UgPSAzMDA7XG4vLyBNdWx0aXBsaWVkIGFnYWluc3QgY29udGFpbmVyIGhlaWdodC5cbi8vIFRoZSBhbW91bnQgb2YgZXh0cmEgYnVmZmVyIHNwYWNlIGZvciBwb3B1bGF0aW5nIHZpc2libGUgaXRlbXMuXG5jb25zdCBWSVJUVUFMX0JVRkZFUl9GQUNUT1IgPSAwLjc7XG5cbmNvbnN0IGxheW91dE51bWJlclRvQ3NzRGltZW5zaW9uID0gbiA9PiAobiAhPT0gSW5maW5pdHkgPyBuIDogdW5kZWZpbmVkKTtcblxuZnVuY3Rpb24gbGF5b3V0Q2xhc3M8VD4oXG4gIHtcbiAgICBjb2x1bW5XaWR0aCxcbiAgICBmbGV4aWJsZSxcbiAgICBndXR0ZXJXaWR0aDogZ3V0dGVyLFxuICAgIGxheW91dCxcbiAgICBtZWFzdXJlbWVudFN0b3JlLFxuICAgIG1pbkNvbHMsXG4gIH06IFByb3BzPFQ+LFxuICB7IHdpZHRoIH06IFN0YXRlPFQ+XG4pIHtcbiAgaWYgKGZsZXhpYmxlICYmIHdpZHRoICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIGZ1bGxXaWR0aExheW91dCh7XG4gICAgICBndXR0ZXIsXG4gICAgICBjYWNoZTogbWVhc3VyZW1lbnRTdG9yZSxcbiAgICAgIG1pbkNvbHMsXG4gICAgICBpZGVhbENvbHVtbldpZHRoOiBjb2x1bW5XaWR0aCxcbiAgICAgIHdpZHRoLFxuICAgIH0pO1xuICB9XG4gIGlmIChcbiAgICBsYXlvdXQgPT09IFVuaWZvcm1Sb3dMYXlvdXRTeW1ib2wgfHxcbiAgICBsYXlvdXQgaW5zdGFuY2VvZiBMZWdhY3lVbmlmb3JtUm93TGF5b3V0XG4gICkge1xuICAgIHJldHVybiB1bmlmb3JtUm93TGF5b3V0KHtcbiAgICAgIGNhY2hlOiBtZWFzdXJlbWVudFN0b3JlLFxuICAgICAgY29sdW1uV2lkdGgsXG4gICAgICBndXR0ZXIsXG4gICAgICBtaW5Db2xzLFxuICAgICAgd2lkdGgsXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGRlZmF1bHRMYXlvdXQoe1xuICAgIGNhY2hlOiBtZWFzdXJlbWVudFN0b3JlLFxuICAgIGNvbHVtbldpZHRoLFxuICAgIGd1dHRlcixcbiAgICBtaW5Db2xzLFxuICAgIHdpZHRoLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gc3RhdGVzRm9yUmVuZGVyaW5nPFQ+KHByb3BzOiBQcm9wczxUPiwgc3RhdGU6IFN0YXRlPFQ+KSB7XG4gIGNvbnN0IHsgbWVhc3VyZW1lbnRTdG9yZSwgbWluQ29scyB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgaXRlbXMgfSA9IHN0YXRlO1xuXG4gIC8vIEZ1bGwgbGF5b3V0IGlzIHBvc3NpYmxlXG4gIC8vICRGbG93SXNzdWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzYxNTFcbiAgY29uc3QgaXRlbXNUb1JlbmRlciA9IGl0ZW1zLmZpbHRlcihcbiAgICBpdGVtID0+IGl0ZW0gJiYgbWVhc3VyZW1lbnRTdG9yZS5oYXMoaXRlbSlcbiAgKTtcblxuICBjb25zdCBsYXlvdXQgPSBsYXlvdXRDbGFzcyhwcm9wcywgc3RhdGUpO1xuICBjb25zdCByZW5kZXJQb3NpdGlvbnMgPSBsYXlvdXQoaXRlbXNUb1JlbmRlcik7XG4gIC8vIE1hdGgubWF4KCkgPT09IC1JbmZpbml0eSB3aGVuIHRoZXJlIGFyZSBubyByZW5kZXJQb3NpdGlvbnNcbiAgY29uc3QgaGVpZ2h0ID0gcmVuZGVyUG9zaXRpb25zLmxlbmd0aFxuICAgID8gTWF0aC5tYXgoLi4ucmVuZGVyUG9zaXRpb25zLm1hcChwb3MgPT4gcG9zLnRvcCArIHBvcy5oZWlnaHQpKVxuICAgIDogMDtcblxuICAvLyAkRmxvd0lzc3VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mbG93L2lzc3Vlcy82MTUxXG4gIGNvbnN0IGl0ZW1zVG9NZWFzdXJlID0gaXRlbXNcbiAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbSAmJiAhbWVhc3VyZW1lbnRTdG9yZS5oYXMoaXRlbSkpXG4gICAgLnNsaWNlKDAsIG1pbkNvbHMpO1xuICBjb25zdCBtZWFzdXJpbmdQb3NpdGlvbnMgPSBsYXlvdXQoaXRlbXNUb01lYXN1cmUpO1xuXG4gIHJldHVybiB7XG4gICAgaGVpZ2h0LFxuICAgIGl0ZW1zVG9SZW5kZXIsXG4gICAgaXRlbXNUb01lYXN1cmUsXG4gICAgbWVhc3VyaW5nUG9zaXRpb25zLFxuICAgIHJlbmRlclBvc2l0aW9ucyxcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGUgd2lsbCBiZSB0aGUgbmV3IE1hc29ucnlCZXRhIHRoYXQgd2lsbCBub3QgaGF2ZSBhbnkgZmV0Y2hpbmcgY29uY2VybnMuXG4gKlxuICogRm9yIG5vdywgaXQgZGlmZmVycyB3aXRoIE1hc29ucnkgb25seSBieSBub3QgaGF2aW5nIGFueSBmZXRjaGluZyBsb2dpYy5cbiAqXG4gKiBJdCBpcyBpbiBiZXRhIHVudGlsIGl0IGNhbiBiZSBiYXR0bGUgdGVzdGVkLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXNvbnJ5QmV0YTxUPiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcbiAgUHJvcHM8VD4sXG4gIFN0YXRlPFQ+XG4+IHtcbiAgLyoqXG4gICAqIERlbGF5cyByZXNpemUgaGFuZGxpbmcgaW4gY2FzZSB0aGUgc2Nyb2xsIGNvbnRhaW5lciBpcyBzdGlsbCBiZWluZyByZXNpemVkLlxuICAgKi9cbiAgaGFuZGxlUmVzaXplID0gZGVib3VuY2UoKCkgPT4ge1xuICAgIGlmICh0aGlzLmdyaWRXcmFwcGVyKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgd2lkdGg6IHRoaXMuZ3JpZFdyYXBwZXIuY2xpZW50V2lkdGggfSk7XG4gICAgfVxuICB9LCBSRVNJWkVfREVCT1VOQ0UpO1xuXG4gIHVwZGF0ZVNjcm9sbFBvc2l0aW9uID0gdGhyb3R0bGUoKCkgPT4ge1xuICAgIGlmICghdGhpcy5zY3JvbGxDb250YWluZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc2Nyb2xsQ29udGFpbmVyID0gdGhpcy5zY3JvbGxDb250YWluZXIuZ2V0U2Nyb2xsQ29udGFpbmVyUmVmKCk7XG5cbiAgICBpZiAoIXNjcm9sbENvbnRhaW5lcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2Nyb2xsVG9wOiBnZXRTY3JvbGxQb3Moc2Nyb2xsQ29udGFpbmVyKSxcbiAgICB9KTtcblxuICAgIHRoaXMuaGFuZGxlVmlydHVhbGl6YXRpb25XaW5kb3dVcGRhdGUoKTtcbiAgfSk7XG5cbiAgbWVhc3VyZUNvbnRhaW5lckFzeW5jID0gZGVib3VuY2UoKCkgPT4ge1xuICAgIHRoaXMubWVhc3VyZUNvbnRhaW5lcigpO1xuICB9LCAwKTtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFRoZSBwcmVmZXJyZWQvdGFyZ2V0IGl0ZW0gd2lkdGguIElmIGBmbGV4aWJsZWAgaXMgc2V0LCB0aGUgaXRlbSB3aWR0aCB3aWxsXG4gICAgICogZ3JvdyB0byBmaWxsIGNvbHVtbiBzcGFjZSwgYW5kIHNocmluayB0byBmaXQgaWYgYmVsb3cgbWluIGNvbHVtbnMuXG4gICAgICovXG4gICAgY29sdW1uV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29tcG9uZW50IHRvIHJlbmRlci5cbiAgICAgKi9cbiAgICAvKiBlc2xpbnQgcmVhY3Qvbm8tdW51c2VkLXByb3AtdHlwZXM6IDAgKi9cbiAgICBjb21wOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHByZWZlcnJlZC90YXJnZXQgaXRlbSB3aWR0aC4gSXRlbSB3aWR0aCB3aWxsIGdyb3cgdG8gZmlsbFxuICAgICAqIGNvbHVtbiBzcGFjZSwgYW5kIHNocmluayB0byBmaXQgaWYgYmVsb3cgbWluIGNvbHVtbnMuXG4gICAgICovXG4gICAgZmxleGlibGU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGFtb3VudCBvZiBzcGFjZSBiZXR3ZWVuIGVhY2ggaXRlbS5cbiAgICAgKi9cbiAgICBndXR0ZXJXaWR0aDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIGFsbCBvYmplY3RzIHRvIGRpc3BsYXkgaW4gdGhlIGdyaWQuXG4gICAgICovXG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7fSkpLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBNZWFzdXJlbWVudCBTdG9yZVxuICAgICAqL1xuICAgIG1lYXN1cmVtZW50U3RvcmU6IFByb3BUeXBlcy5pbnN0YW5jZU9mKE1lYXN1cmVtZW50U3RvcmUpLFxuXG4gICAgLyoqXG4gICAgICogTGF5b3V0IHN5c3RlbSB0byB1c2UgZm9yIGl0ZW1zXG4gICAgICovXG4gICAgbGF5b3V0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5pbnN0YW5jZU9mKExlZ2FjeU1hc29ucnlMYXlvdXQpLFxuICAgICAgUHJvcFR5cGVzLmluc3RhbmNlT2YoTGVnYWN5VW5pZm9ybVJvd0xheW91dCksXG4gICAgICBQcm9wVHlwZXMuc3ltYm9sLFxuICAgIF0pLFxuXG4gICAgLyoqXG4gICAgICogQSBjYWxsYmFjayB3aGljaCB0aGUgZ3JpZCBjYWxscyB3aGVuIHdlIG5lZWQgdG8gbG9hZCBtb3JlIGl0ZW1zIGFzIHRoZSB1c2VyIHNjcm9sbHMuXG4gICAgICogVGhlIGNhbGxiYWNrIHNob3VsZCB1cGRhdGUgdGhlIHN0YXRlIG9mIHRoZSBpdGVtcywgYW5kIHBhc3MgdGhvc2UgaW4gYXMgcHJvcHNcbiAgICAgKiB0byB0aGlzIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBsb2FkSXRlbXM6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogTWluaW11bSBudW1iZXIgb2YgY29sdW1ucyB0byBkaXNwbGF5LlxuICAgICAqL1xuICAgIG1pbkNvbHM6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHRoZSBncmlkIGNhbGxzIHRvIGdldCB0aGUgc2Nyb2xsIGNvbnRhaW5lci5cbiAgICAgKiBUaGlzIGlzIHJlcXVpcmVkIGlmIHRoZSBncmlkIGlzIGV4cGVjdGVkIHRvIGJlIHNjcm9sbGFibGUuXG4gICAgICovXG4gICAgc2Nyb2xsQ29udGFpbmVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgb3Igbm90IHRvIHVzZSBhY3R1YWwgdmlydHVhbGl6YXRpb25cbiAgICAgKi9cbiAgICB2aXJ0dWFsaXplOiBQcm9wVHlwZXMuYm9vbCxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbHVtbldpZHRoOiAyMzYsXG4gICAgbWVhc3VyZW1lbnRTdG9yZTogbmV3IE1lYXN1cmVtZW50U3RvcmUoKSxcbiAgICBtaW5Db2xzOiAzLFxuICAgIGxheW91dDogRGVmYXVsdExheW91dFN5bWJvbCxcbiAgICBsb2FkSXRlbXM6ICgpID0+IHt9LFxuICAgIHZpcnR1YWxpemU6IGZhbHNlLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wczxUPikge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuY29udGFpbmVySGVpZ2h0ID0gMDtcbiAgICB0aGlzLmNvbnRhaW5lck9mZnNldCA9IDA7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaGFzUGVuZGluZ01lYXN1cmVtZW50czogcHJvcHMuaXRlbXMuc29tZShcbiAgICAgICAgaXRlbSA9PiAhIWl0ZW0gJiYgIXByb3BzLm1lYXN1cmVtZW50U3RvcmUuaGFzKGl0ZW0pXG4gICAgICApLFxuICAgICAgaGVpZ2h0OiAwLFxuICAgICAgaXRlbXNUb1JlbmRlcjogW10sXG4gICAgICBpdGVtc1RvTWVhc3VyZTogW10sXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tdW51c2VkLXN0YXRlXG4gICAgICBpdGVtczogcHJvcHMuaXRlbXMsXG4gICAgICBtZWFzdXJpbmdQb3NpdGlvbnM6IFtdLFxuICAgICAgcmVuZGVyUG9zaXRpb25zOiBbXSxcbiAgICAgIHNjcm9sbFRvcDogMCxcbiAgICAgIHdpZHRoOiB1bmRlZmluZWQsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGhvb2tzIGFmdGVyIHRoZSBjb21wb25lbnQgbW91bnRzLlxuICAgKi9cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKTtcblxuICAgIHRoaXMubWVhc3VyZUNvbnRhaW5lcigpO1xuXG4gICAgbGV0IHsgc2Nyb2xsVG9wIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmICh0aGlzLnNjcm9sbENvbnRhaW5lciAhPSBudWxsKSB7XG4gICAgICBjb25zdCBzY3JvbGxDb250YWluZXIgPSB0aGlzLnNjcm9sbENvbnRhaW5lci5nZXRTY3JvbGxDb250YWluZXJSZWYoKTtcbiAgICAgIGlmIChzY3JvbGxDb250YWluZXIpIHtcbiAgICAgICAgc2Nyb2xsVG9wID0gZ2V0U2Nyb2xsUG9zKHNjcm9sbENvbnRhaW5lcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4ge1xuICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLmdyaWRXcmFwcGVyXG4gICAgICAgID8gdGhpcy5ncmlkV3JhcHBlci5jbGllbnRXaWR0aFxuICAgICAgICA6IHByZXZTdGF0ZS53aWR0aDtcbiAgICAgIGNvbnN0IHN0YXRlV2l0aFdpZHRoID0geyAuLi50aGlzLnN0YXRlLCB3aWR0aCB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2Nyb2xsVG9wLFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgLi4uc3RhdGVzRm9yUmVuZGVyaW5nKHRoaXMucHJvcHMsIHN0YXRlV2l0aFdpZHRoKSxcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICAvLyBuZWVkIHRvIG1ha2Ugc3VyZSBwYXJlbnQgY29tcG9uZW50IGhhcyB0aGUgY29ycmVjdCBwZW5kaW5nIG1lYXN1cmVtZW50IHZhbHVlXG4gICAgdGhpcy5oYW5kbGVPbkF1dG9NZWFzdXJpbmdVcGRhdGUoXG4gICAgICB0aGlzLnN0YXRlLmhhc1BlbmRpbmdNZWFzdXJlbWVudHMgPyAnbWVhc3VyaW5nJyA6ICdpZGxlJ1xuICAgICk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiBQcm9wczxUPiwgcHJldlN0YXRlOiBTdGF0ZTxUPikge1xuICAgIGNvbnN0IHsgaXRlbXMsIG1lYXN1cmVtZW50U3RvcmUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICB0aGlzLm1lYXN1cmVDb250YWluZXJBc3luYygpO1xuXG4gICAgaWYgKHByZXZTdGF0ZS53aWR0aCAhPSBudWxsICYmIHRoaXMuc3RhdGUud2lkdGggIT09IHByZXZTdGF0ZS53aWR0aCkge1xuICAgICAgbWVhc3VyZW1lbnRTdG9yZS5yZXNldCgpO1xuICAgIH1cbiAgICAvLyBjYWxjdWxhdGUgd2hldGhlciB3ZSBzdGlsbCBoYXZlIHBlbmRpbmcgbWVhc3VyZW1lbnRzXG4gICAgY29uc3QgaGFzUGVuZGluZ01lYXN1cmVtZW50cyA9IGl0ZW1zLnNvbWUoXG4gICAgICBpdGVtID0+ICEhaXRlbSAmJiAhbWVhc3VyZW1lbnRTdG9yZS5oYXMoaXRlbSlcbiAgICApO1xuXG4gICAgaWYgKGhhc1BlbmRpbmdNZWFzdXJlbWVudHMgJiYgIXByZXZTdGF0ZS5oYXNQZW5kaW5nTWVhc3VyZW1lbnRzKSB7XG4gICAgICB0aGlzLmhhbmRsZU9uQXV0b01lYXN1cmluZ1VwZGF0ZSgnbWVhc3VyaW5nJyk7XG4gICAgfSBlbHNlIGlmICghaGFzUGVuZGluZ01lYXN1cmVtZW50cyAmJiBwcmV2U3RhdGUuaGFzUGVuZGluZ01lYXN1cmVtZW50cykge1xuICAgICAgdGhpcy5oYW5kbGVPbkF1dG9NZWFzdXJpbmdVcGRhdGUoJ2lkbGUnKTtcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVWaXJ0dWFsaXphdGlvbldpbmRvd1VwZGF0ZSgpO1xuXG4gICAgaWYgKFxuICAgICAgaGFzUGVuZGluZ01lYXN1cmVtZW50cyB8fFxuICAgICAgaGFzUGVuZGluZ01lYXN1cmVtZW50cyAhPT0gdGhpcy5zdGF0ZS5oYXNQZW5kaW5nTWVhc3VyZW1lbnRzIHx8XG4gICAgICBwcmV2U3RhdGUud2lkdGggPT0gbnVsbFxuICAgICkge1xuICAgICAgdGhpcy5pbnNlcnRBbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbmRlcmluZ1N0YXRlcyA9IHN0YXRlc0ZvclJlbmRlcmluZyh0aGlzLnByb3BzLCB0aGlzLnN0YXRlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaGFzUGVuZGluZ01lYXN1cmVtZW50cyxcbiAgICAgICAgICAuLi5yZW5kZXJpbmdTdGF0ZXMsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChoYXNQZW5kaW5nTWVhc3VyZW1lbnRzIHx8IHByZXZTdGF0ZS5pdGVtcyAhPT0gaXRlbXMpIHtcbiAgICAgIHRoaXMuaW5zZXJ0QW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBjb25zdCByZW5kZXJpbmdTdGF0ZXMgPSBzdGF0ZXNGb3JSZW5kZXJpbmcodGhpcy5wcm9wcywgdGhpcy5zdGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi5yZW5kZXJpbmdTdGF0ZXMgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGxpc3RlbmVycyB3aGVuIHVubW91bnRpbmcuXG4gICAqL1xuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5pbnNlcnRBbmltYXRpb25GcmFtZSkge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5pbnNlcnRBbmltYXRpb25GcmFtZSk7XG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIGFzeW5jIG1ldGhvZHMgYXJlIGNhbmNlbGxlZC5cbiAgICB0aGlzLm1lYXN1cmVDb250YWluZXJBc3luYy5jbGVhclRpbWVvdXQoKTtcbiAgICB0aGlzLmhhbmRsZVJlc2l6ZS5jbGVhclRpbWVvdXQoKTtcbiAgICB0aGlzLnVwZGF0ZVNjcm9sbFBvc2l0aW9uLmNsZWFyVGltZW91dCgpO1xuXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHM6IFByb3BzPFQ+LCBzdGF0ZTogU3RhdGU8VD4pIHtcbiAgICBjb25zdCB7IGl0ZW1zLCBtZWFzdXJlbWVudFN0b3JlIH0gPSBwcm9wcztcbiAgICAvLyB3aGVuZXZlciB3ZSdyZSByZWNlaXZpbmcgbmV3IHByb3BzLCBkZXRlcm1pbmUgd2hldGhlciBhbnkgaXRlbXMgbmVlZCB0byBiZSBtZWFzdXJlZFxuICAgIC8vIFRPRE8gLSB3ZSBzaG91bGQgdHJlYXQgaXRlbXMgYXMgaW1tdXRhYmxlXG4gICAgY29uc3QgaGFzUGVuZGluZ01lYXN1cmVtZW50cyA9IGl0ZW1zLnNvbWUoXG4gICAgICBpdGVtID0+IGl0ZW0gJiYgIW1lYXN1cmVtZW50U3RvcmUuaGFzKGl0ZW0pXG4gICAgKTtcblxuICAgIGNvbnN0IG5ld1N0YXRlOiBTdGF0ZTxUPiA9IHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgaGFzUGVuZGluZ01lYXN1cmVtZW50cyxcbiAgICAgIGl0ZW1zLFxuICAgIH07XG5cbiAgICAvLyBTaGFsbG93IGNvbXBhcmUgYWxsIGl0ZW1zLCBpZiBhbnkgY2hhbmdlIHJlZmxvdyB0aGUgZ3JpZC5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAvLyBXZSd2ZSByZWFjaGVkIHRoZSBlbmQgb2Ygb3VyIGN1cnJlbnQgcHJvcHMgYW5kIGV2ZXJ5dGhpbmcgbWF0Y2hlcy5cbiAgICAgIC8vIElmIHdlIGhpdCB0aGlzIGNhc2UgaXQgbWVhbnMgd2UgbmVlZCB0byBpbnNlcnQgbmV3IGl0ZW1zLlxuICAgICAgaWYgKHN0YXRlLml0ZW1zW2ldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoYXNQZW5kaW5nTWVhc3VyZW1lbnRzLFxuICAgICAgICAgIGl0ZW1zLFxuICAgICAgICAgIC4uLnN0YXRlc0ZvclJlbmRlcmluZyhwcm9wcywgbmV3U3RhdGUpLFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICAvLyBSZXNldCBncmlkIGl0ZW1zIHdoZW46XG4gICAgICBpZiAoXG4gICAgICAgIC8vIEFuIGl0ZW0gb2JqZWN0IHJlZiBkb2VzIG5vdCBtYXRjaC5cbiAgICAgICAgaXRlbXNbaV0gIT09IHN0YXRlLml0ZW1zW2ldIHx8XG4gICAgICAgIC8vIE9yIGxlc3MgaXRlbXMgdGhhbiB3ZSBjdXJyZW50bHkgaGF2ZSBhcmUgcGFzc2VkIGluLlxuICAgICAgICBpdGVtcy5sZW5ndGggPCBzdGF0ZS5pdGVtcy5sZW5ndGhcbiAgICAgICkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhhc1BlbmRpbmdNZWFzdXJlbWVudHMsXG4gICAgICAgICAgaXRlbXMsXG4gICAgICAgICAgLi4uc3RhdGVzRm9yUmVuZGVyaW5nKHByb3BzLCBuZXdTdGF0ZSksXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVzZXQgaXRlbXMgaWYgbmV3IGl0ZW1zIGFycmF5IGlzIGVtcHR5LlxuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDAgJiYgc3RhdGUuaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGFzUGVuZGluZ01lYXN1cmVtZW50cyxcbiAgICAgICAgaXRlbXMsXG4gICAgICAgIC4uLnN0YXRlc0ZvclJlbmRlcmluZyhwcm9wcywgbmV3U3RhdGUpLFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGhhc1BlbmRpbmdNZWFzdXJlbWVudHMgIT09IHN0YXRlLmhhc1BlbmRpbmdNZWFzdXJlbWVudHMpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBhbHdheXMgdXBkYXRlIGhhc1BlbmRpbmdNZWFzdXJlbWVudHNcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhhc1BlbmRpbmdNZWFzdXJlbWVudHMsXG4gICAgICAgIGl0ZW1zLFxuICAgICAgICAuLi5zdGF0ZXNGb3JSZW5kZXJpbmcocHJvcHMsIG5ld1N0YXRlKSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIG51bGwgdG8gaW5kaWNhdGUgbm8gY2hhbmdlIHRvIHN0YXRlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgc2V0R3JpZFdyYXBwZXJSZWYgPSAocmVmOiA/SFRNTEVsZW1lbnQpID0+IHtcbiAgICB0aGlzLmdyaWRXcmFwcGVyID0gcmVmO1xuICB9O1xuXG4gIHNldFNjcm9sbENvbnRhaW5lclJlZiA9IChyZWY6ID9TY3JvbGxDb250YWluZXIpID0+IHtcbiAgICB0aGlzLnNjcm9sbENvbnRhaW5lciA9IHJlZjtcbiAgfTtcblxuICBoYW5kbGVWaXJ0dWFsaXphdGlvbldpbmRvd1VwZGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IGhlaWdodCwgd2lkdGggfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKFxuICAgICAgdHlwZW9mIHRoaXMucHJvcHMub25WaXJ0dWFsaXphdGlvbldpbmRvd1VwZGF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgdGhpcy5jb250YWluZXJIZWlnaHRcbiAgICApIHtcbiAgICAgIGNvbnN0IHZpZXdwb3J0ID0ge1xuICAgICAgICB0b3A6IHRoaXMuc3RhdGUuc2Nyb2xsVG9wLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBoZWlnaHQ6IHRoaXMuY29udGFpbmVySGVpZ2h0LFxuICAgICAgICB3aWR0aDogd2lkdGggfHwgMCxcbiAgICAgIH07XG4gICAgICBjb25zdCBjb250ZW50ID0ge1xuICAgICAgICB0b3A6IHRoaXMuY29udGFpbmVyT2Zmc2V0LFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIHdpZHRoOiB3aWR0aCB8fCAwLFxuICAgICAgfTtcblxuICAgICAgdGhpcy5wcm9wcy5vblZpcnR1YWxpemF0aW9uV2luZG93VXBkYXRlKGNvbnRlbnQsIHZpZXdwb3J0KTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlT25BdXRvTWVhc3VyaW5nVXBkYXRlID0gKHN0YXRlOiBNZWFzdXJlbWVudFN0YXRlKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub25BdXRvTWVhc3VyaW5nVXBkYXRlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQXV0b01lYXN1cmluZ1VwZGF0ZShzdGF0ZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnRhaW5lckhlaWdodDogbnVtYmVyO1xuXG4gIGNvbnRhaW5lck9mZnNldDogbnVtYmVyO1xuXG4gIGdyaWRXcmFwcGVyOiA/SFRNTEVsZW1lbnQ7XG5cbiAgaW5zZXJ0QW5pbWF0aW9uRnJhbWU6IEFuaW1hdGlvbkZyYW1lSUQ7XG5cbiAgbWVhc3VyZVRpbWVvdXQ6IFRpbWVvdXRJRDtcblxuICBzY3JvbGxDb250YWluZXI6ID9TY3JvbGxDb250YWluZXI7XG5cbiAgbWVhc3VyZUNvbnRhaW5lcigpIHtcbiAgICBpZiAodGhpcy5zY3JvbGxDb250YWluZXIgIT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBzY3JvbGxDb250YWluZXIgfSA9IHRoaXM7XG4gICAgICBjb25zdCBzY3JvbGxDb250YWluZXJSZWYgPSBzY3JvbGxDb250YWluZXIuZ2V0U2Nyb2xsQ29udGFpbmVyUmVmKCk7XG4gICAgICBpZiAoc2Nyb2xsQ29udGFpbmVyUmVmKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVySGVpZ2h0ID0gZ2V0RWxlbWVudEhlaWdodChzY3JvbGxDb250YWluZXJSZWYpO1xuICAgICAgICBjb25zdCBlbCA9IHRoaXMuZ3JpZFdyYXBwZXI7XG4gICAgICAgIGlmIChlbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgY29uc3QgcmVsYXRpdmVTY3JvbGxUb3AgPSBnZXRSZWxhdGl2ZVNjcm9sbFRvcChzY3JvbGxDb250YWluZXJSZWYpO1xuICAgICAgICAgIHRoaXMuY29udGFpbmVyT2Zmc2V0ID1cbiAgICAgICAgICAgIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHJlbGF0aXZlU2Nyb2xsVG9wO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIG1lYXN1cmVtZW50cy9wb3NpdGlvbnMgYW5kIGZvcmNlIGEgcmVmbG93IG9mIHRoZSBlbnRpcmUgZ3JpZC5cbiAgICogT25seSB1c2UgdGhpcyBpZiBhYnNvbHV0ZWx5IG5lY2Vzc2FyeSAtIGV4OiBXZSBuZWVkIHRvIHJlZmxvdyBpdGVtcyBpZiB0aGVcbiAgICogbnVtYmVyIG9mIGNvbHVtbnMgd2Ugd291bGQgZGlzcGxheSBzaG91bGQgY2hhbmdlIGFmdGVyIGEgcmVzaXplLlxuICAgKi9cbiAgcmVmbG93KCkge1xuICAgIHRoaXMucHJvcHMubWVhc3VyZW1lbnRTdG9yZS5yZXNldCgpO1xuICAgIHRoaXMubWVhc3VyZUNvbnRhaW5lcigpO1xuICAgIHRoaXMuaGFuZGxlVmlydHVhbGl6YXRpb25XaW5kb3dVcGRhdGUoKTtcbiAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gIH1cblxuICByZW5kZXJNYXNvbnJ5Q29tcG9uZW50ID0gKGl0ZW1EYXRhOiBULCBpZHg6IG51bWJlciwgcG9zaXRpb246ICopID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBjb21wOiBDb21wb25lbnQsXG4gICAgICB2aXJ0dWFsaXplLFxuICAgICAgdmlydHVhbEJvdW5kc1RvcCxcbiAgICAgIHZpcnR1YWxCb3VuZHNCb3R0b20sXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQgfSA9IHBvc2l0aW9uO1xuXG4gICAgbGV0IGlzVmlzaWJsZTtcbiAgICBpZiAodGhpcy5wcm9wcy5zY3JvbGxDb250YWluZXIpIHtcbiAgICAgIGNvbnN0IHZpcnR1YWxCdWZmZXIgPSB0aGlzLmNvbnRhaW5lckhlaWdodCAqIFZJUlRVQUxfQlVGRkVSX0ZBQ1RPUjtcbiAgICAgIGNvbnN0IG9mZnNldFNjcm9sbFBvcyA9IHRoaXMuc3RhdGUuc2Nyb2xsVG9wIC0gdGhpcy5jb250YWluZXJPZmZzZXQ7XG4gICAgICBjb25zdCB2aWV3cG9ydFRvcCA9IHZpcnR1YWxCb3VuZHNUb3BcbiAgICAgICAgPyBvZmZzZXRTY3JvbGxQb3MgLSB2aXJ0dWFsQm91bmRzVG9wXG4gICAgICAgIDogb2Zmc2V0U2Nyb2xsUG9zIC0gdmlydHVhbEJ1ZmZlcjtcbiAgICAgIGNvbnN0IHZpZXdwb3J0Qm90dG9tID0gdmlydHVhbEJvdW5kc0JvdHRvbVxuICAgICAgICA/IG9mZnNldFNjcm9sbFBvcyArIHRoaXMuY29udGFpbmVySGVpZ2h0ICsgdmlydHVhbEJvdW5kc0JvdHRvbVxuICAgICAgICA6IG9mZnNldFNjcm9sbFBvcyArIHRoaXMuY29udGFpbmVySGVpZ2h0ICsgdmlydHVhbEJ1ZmZlcjtcblxuICAgICAgaXNWaXNpYmxlID0gIShcbiAgICAgICAgcG9zaXRpb24udG9wICsgcG9zaXRpb24uaGVpZ2h0IDwgdmlld3BvcnRUb3AgfHxcbiAgICAgICAgcG9zaXRpb24udG9wID4gdmlld3BvcnRCb3R0b21cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIG5vIHNjcm9sbCBjb250YWluZXIgaXMgcGFzc2VkIGluLCBpdGVtcyBzaG91bGQgYWx3YXlzIGJlIHZpc2libGVcbiAgICAgIGlzVmlzaWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgaXRlbUNvbXBvbmVudCA9IChcbiAgICAgIDxkaXZcbiAgICAgICAga2V5PXtgaXRlbS0ke2lkeH1gfVxuICAgICAgICBjbGFzc05hbWU9e1tzdHlsZXMuTWFzb25yeV9fSXRlbSwgc3R5bGVzLk1hc29ucnlfX0l0ZW1fX01vdW50ZWRdLmpvaW4oXG4gICAgICAgICAgJyAnXG4gICAgICAgICl9XG4gICAgICAgIGRhdGEtZ3JpZC1pdGVtXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke2xlZnR9cHgpIHRyYW5zbGF0ZVkoJHt0b3B9cHgpYCxcbiAgICAgICAgICBXZWJraXRUcmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7bGVmdH1weCkgdHJhbnNsYXRlWSgke3RvcH1weClgLFxuICAgICAgICAgIHdpZHRoOiBsYXlvdXROdW1iZXJUb0Nzc0RpbWVuc2lvbih3aWR0aCksXG4gICAgICAgICAgaGVpZ2h0OiBsYXlvdXROdW1iZXJUb0Nzc0RpbWVuc2lvbihoZWlnaHQpLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Q29tcG9uZW50IGRhdGE9e2l0ZW1EYXRhfSBpdGVtSWR4PXtpZHh9IGlzTWVhc3VyaW5nPXtmYWxzZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgICByZXR1cm4gdmlydHVhbGl6ZSA/IChpc1Zpc2libGUgJiYgaXRlbUNvbXBvbmVudCkgfHwgbnVsbCA6IGl0ZW1Db21wb25lbnQ7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbHVtbldpZHRoLFxuICAgICAgY29tcDogQ29tcG9uZW50LFxuICAgICAgZmxleGlibGUsXG4gICAgICBtZWFzdXJlbWVudFN0b3JlLFxuICAgICAgaXRlbXMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgaGFzUGVuZGluZ01lYXN1cmVtZW50cyxcbiAgICAgIGhlaWdodCxcbiAgICAgIGl0ZW1zVG9NZWFzdXJlLFxuICAgICAgaXRlbXNUb1JlbmRlcixcbiAgICAgIG1lYXN1cmluZ1Bvc2l0aW9ucyxcbiAgICAgIHJlbmRlclBvc2l0aW9ucyxcbiAgICAgIHdpZHRoLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGxldCBncmlkQm9keTtcbiAgICBpZiAod2lkdGggPT0gbnVsbCAmJiBoYXNQZW5kaW5nTWVhc3VyZW1lbnRzKSB7XG4gICAgICAvLyBXaGVuIGh5cmRhdGluZyBmcm9tIGEgc2VydmVyIHJlbmRlciwgd2UgZG9uJ3QgaGF2ZSB0aGUgd2lkdGggb2YgdGhlIGdyaWRcbiAgICAgIC8vIGFuZCB0aGUgbWVhc3VyZW1lbnQgc3RvcmUgaXMgZW1wdHlcbiAgICAgIGdyaWRCb2R5ID0gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuTWFzb25yeX1cbiAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDAsIHdpZHRoOiAnMTAwJScgfX1cbiAgICAgICAgICByZWY9e3RoaXMuc2V0R3JpZFdyYXBwZXJSZWZ9XG4gICAgICAgID5cbiAgICAgICAgICB7aXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbSkubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IC8vIGtlZXAgdGhpcyBpbiBzeW5jIHdpdGggcmVuZGVyTWFzb25yeUNvbXBvbmVudFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdGF0aWNcIlxuICAgICAgICAgICAgICBkYXRhLWdyaWQtaXRlbVxuICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwcHgpIHRyYW5zbGF0ZVkoMHB4KScsXG4gICAgICAgICAgICAgICAgV2Via2l0VHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwcHgpIHRyYW5zbGF0ZVkoMHB4KScsXG4gICAgICAgICAgICAgICAgd2lkdGg6IGZsZXhpYmxlXG4gICAgICAgICAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgOiBsYXlvdXROdW1iZXJUb0Nzc0RpbWVuc2lvbihjb2x1bW5XaWR0aCksIC8vIHdlIGNhbid0IHNldCBhIHdpZHRoIGZvciBzZXJ2ZXIgcmVuZGVyZWQgZmxleGlibGUgaXRlbXNcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgcmVmPXtlbCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVsICYmICFmbGV4aWJsZSkge1xuICAgICAgICAgICAgICAgICAgLy8gb25seSBtZWFzdXJlIGZsZXhpYmxlIGl0ZW1zIG9uIGNsaWVudFxuICAgICAgICAgICAgICAgICAgbWVhc3VyZW1lbnRTdG9yZS5zZXQoaXRlbSwgZWwuY2xpZW50SGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxDb21wb25lbnQgZGF0YT17aXRlbX0gaXRlbUlkeD17aX0gaXNNZWFzdXJpbmc9e2ZhbHNlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHdpZHRoID09IG51bGwpIHtcbiAgICAgIC8vIFdoZW4gdGhlIHdpZHRoIGlzIGVtcHR5ICh1c3VhbGx5IGFmdGVyIGEgcmUtbW91bnQpIHJlbmRlciBhbiBlbXB0eVxuICAgICAgLy8gZGl2IHRvIGNvbGxlY3QgdGhlIHdpZHRoIGZvciBsYXlvdXRcbiAgICAgIGdyaWRCb2R5ID0gPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IHJlZj17dGhpcy5zZXRHcmlkV3JhcHBlclJlZn0gLz47XG4gICAgfSBlbHNlIHtcbiAgICAgIGdyaWRCb2R5ID0gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gcmVmPXt0aGlzLnNldEdyaWRXcmFwcGVyUmVmfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk1hc29ucnl9IHN0eWxlPXt7IGhlaWdodCwgd2lkdGggfX0+XG4gICAgICAgICAgICB7aXRlbXNUb1JlbmRlci5tYXAoKGl0ZW0sIGkpID0+XG4gICAgICAgICAgICAgIC8vICRGbG93Rml4TWUgdGhpcyBpcyB0aGUgcmlnaHQgZGVmaW5pdGlvbiwgaXQgYW4gQXJyYXk8VD5cbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJNYXNvbnJ5Q29tcG9uZW50KGl0ZW0sIGksIHJlbmRlclBvc2l0aW9uc1tpXSlcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5NYXNvbnJ5fSBzdHlsZT17eyB3aWR0aCB9fT5cbiAgICAgICAgICAgIHtpdGVtc1RvTWVhc3VyZS5tYXAoKGRhdGEsIGkpID0+IHtcbiAgICAgICAgICAgICAgLy8gaXRlbXNUb01lYXN1cmUgaXMgYWx3YXlzIHRoZSBsZW5ndGggb2YgbWluQ29scywgc28gaSB3aWxsIGFsd2F5cyBiZSAwLi5taW5Db2xzLmxlbmd0aFxuICAgICAgICAgICAgICAvLyB3ZSBub3JtYWxpemUgdGhlIGluZGV4IGhlcmUgcmVsYXRpdmUgdG8gdGhlIGl0ZW0gbGlzdCBhcyBhIHdob2xlIHNvIHRoYXQgaXRlbUlkeCBpcyBjb3JyZWN0XG4gICAgICAgICAgICAgIC8vIGFuZCBzbyB0aGF0IFJlYWN0IGRvZXNudCByZXVzZSB0aGUgbWVhc3VyZW1lbnQgbm9kZXNcbiAgICAgICAgICAgICAgY29uc3QgbWVhc3VyZW1lbnRJbmRleCA9IGl0ZW1zVG9SZW5kZXIubGVuZ3RoICsgaTtcbiAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBtZWFzdXJpbmdQb3NpdGlvbnNbaV07XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAga2V5PXtgbWVhc3VyaW5nLSR7bWVhc3VyZW1lbnRJbmRleH1gfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IGxheW91dE51bWJlclRvQ3NzRGltZW5zaW9uKHBvc2l0aW9uLnRvcCksXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IGxheW91dE51bWJlclRvQ3NzRGltZW5zaW9uKHBvc2l0aW9uLmxlZnQpLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogbGF5b3V0TnVtYmVyVG9Dc3NEaW1lbnNpb24ocG9zaXRpb24ud2lkdGgpLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGxheW91dE51bWJlclRvQ3NzRGltZW5zaW9uKHBvc2l0aW9uLmhlaWdodCksXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgcmVmPXtlbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgICAgICAgICAgIG1lYXN1cmVtZW50U3RvcmUuc2V0KGRhdGEsIGVsLmNsaWVudEhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPENvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgICAgICAgICBpdGVtSWR4PXttZWFzdXJlbWVudEluZGV4fVxuICAgICAgICAgICAgICAgICAgICBpc01lYXN1cmluZ1xuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuc2Nyb2xsQ29udGFpbmVyID8gKFxuICAgICAgPFNjcm9sbENvbnRhaW5lclxuICAgICAgICByZWY9e3RoaXMuc2V0U2Nyb2xsQ29udGFpbmVyUmVmfVxuICAgICAgICBvblNjcm9sbD17dGhpcy51cGRhdGVTY3JvbGxQb3NpdGlvbn1cbiAgICAgICAgc2Nyb2xsQ29udGFpbmVyPXt0aGlzLnByb3BzLnNjcm9sbENvbnRhaW5lcn1cbiAgICAgID5cbiAgICAgICAge2dyaWRCb2R5fVxuICAgICAgPC9TY3JvbGxDb250YWluZXI+XG4gICAgKSA6IChcbiAgICAgIGdyaWRCb2R5XG4gICAgKTtcbiAgfVxufVxuIiwiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGZXRjaEl0ZW1zIGZyb20gJy4vRmV0Y2hJdGVtcy5qcyc7XG5pbXBvcnQgTWVhc3VyZW1lbnRTdG9yZSBmcm9tICcuL01lYXN1cmVtZW50U3RvcmUuanMnO1xuaW1wb3J0IE1hc29ucnksIHsgdHlwZSBQcm9wcywgdHlwZSBNZWFzdXJlbWVudFN0YXRlIH0gZnJvbSAnLi9NYXNvbnJ5QmV0YS5qcyc7XG5pbXBvcnQgeyB0eXBlIFBvc2l0aW9uIH0gZnJvbSAnLi9kZWZhdWx0TGF5b3V0LmpzJztcblxudHlwZSBTdGF0ZTxUPiA9IHt8XG4gIGNvbnRhaW5lckhlaWdodDogbnVtYmVyLFxuICBoYXNQZW5kaW5nTWVhc3VyZW1lbnRzOiBib29sZWFuLFxuICBpc0ZldGNoaW5nOiBib29sZWFuLFxuICBpdGVtczogQXJyYXk8VD4sXG4gIHNjcm9sbFRvcDogbnVtYmVyLFxuICBzY3JvbGxIZWlnaHQ6IG51bWJlcixcbnx9O1xuXG4vKipcbiAqIFRoaXMgTWFzb25yeUluZmluaXRlQmV0YSBpcyBiYWNrd2FyZCBjb21wYXRpYmxlIHdpdGggTWFzb25yeSBhbmRcbiAqIHNlcnZlcyB0byBoZWxwIHdpdGggbWlncmF0aW5nIHRvIGEgTWFzcm9ueSB0aGF0IGRvZXNuJ3QgaGF2ZVxuICogdGhlIHNjcm9sIGZldGNoIGNvbmNlcm5zLlxuICpcbiAqIEl0IGlzIGluIGJldGEgc28gdGhhdCBpdCBjYW4gYmUgYmF0dGxlIHRlc3RlZC5cbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hc29ucnlJbmZpbml0ZUJldGE8VD4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFByb3BzPFQ+LFxuICBTdGF0ZTxUPlxuPiB7XG4gIHN0YXRpYyBjcmVhdGVNZWFzdXJlbWVudFN0b3JlKCkge1xuICAgIHJldHVybiBuZXcgTWVhc3VyZW1lbnRTdG9yZSgpO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IE1hc29ucnkuZGVmYXVsdFByb3BzO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wczxUPikge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjb250YWluZXJIZWlnaHQ6IDAsXG4gICAgICBoYXNQZW5kaW5nTWVhc3VyZW1lbnRzOiBmYWxzZSxcbiAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLXVudXNlZC1zdGF0ZVxuICAgICAgaXRlbXM6IHByb3BzLml0ZW1zLFxuICAgICAgc2Nyb2xsVG9wOiAwLFxuICAgICAgc2Nyb2xsSGVpZ2h0OiAwLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udGVudCBsYXllciBhbmQgVmlld3BvcnQgbGF5ZXIgaXMgYXMgZGVmaW5lZCBpbiBDb2xsZWN0aW9uLlxuICAgKi9cbiAgb25WaXJ0dWFsaXphdGlvbldpbmRvd1VwZGF0ZSA9IChjb250ZW50OiBQb3NpdGlvbiwgdmlld3BvcnQ6IFBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3QgeyBjb250YWluZXJIZWlnaHQsIHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0IH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmIChcbiAgICAgIHZpZXdwb3J0LmhlaWdodCAhPT0gY29udGFpbmVySGVpZ2h0IHx8XG4gICAgICB2aWV3cG9ydC50b3AgIT09IHNjcm9sbFRvcCB8fFxuICAgICAgY29udGVudC5oZWlnaHQgIT09IHNjcm9sbEhlaWdodFxuICAgICkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNvbnRhaW5lckhlaWdodDogdmlld3BvcnQuaGVpZ2h0LFxuICAgICAgICBzY3JvbGxUb3A6IHZpZXdwb3J0LnRvcCxcbiAgICAgICAgc2Nyb2xsSGVpZ2h0OiBjb250ZW50LmhlaWdodCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzOiBQcm9wczxUPiwgc3RhdGU6IFN0YXRlPFQ+KSB7XG4gICAgY29uc3QgeyBpdGVtcyB9ID0gcHJvcHM7XG5cbiAgICAvLyBhc3N1bWUgaW1tdXRhYmxlIGl0ZW1zXG4gICAgaWYgKHByb3BzLml0ZW1zICE9PSBzdGF0ZS5pdGVtcykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXRlbXMsXG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gbnVsbCB0byBpbmRpY2F0ZSBubyBjaGFuZ2UgdG8gc3RhdGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBzZXRSZWYgPSAocmVmOiBSZWFjdC5FbGVtZW50UmVmPCo+KSA9PiB7XG4gICAgaWYgKHJlZikge1xuICAgICAgdGhpcy5ncmlkUmVmID0gcmVmO1xuICAgIH1cbiAgfTtcblxuICBmZXRjaE1vcmUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBsb2FkSXRlbXMgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGxvYWRJdGVtcyAmJiB0eXBlb2YgbG9hZEl0ZW1zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICB7XG4gICAgICAgICAgaXNGZXRjaGluZzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4gbG9hZEl0ZW1zKHsgZnJvbTogdGhpcy5wcm9wcy5pdGVtcy5sZW5ndGggfSlcbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZU9uQXV0b01lYXN1cmluZ1VwZGF0ZSA9IChzdGF0ZTogTWVhc3VyZW1lbnRTdGF0ZSkgPT4ge1xuICAgIGNvbnN0IGhhc1BlbmRpbmdNZWFzdXJlbWVudHMgPSBzdGF0ZSA9PT0gJ21lYXN1cmluZyc7XG4gICAgaWYgKHRoaXMuc3RhdGUuaGFzUGVuZGluZ01lYXN1cmVtZW50cyAhPT0gaGFzUGVuZGluZ01lYXN1cmVtZW50cykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhhc1BlbmRpbmdNZWFzdXJlbWVudHMgfSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uQXV0b01lYXN1cmluZ1VwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5wcm9wcy5vbkF1dG9NZWFzdXJpbmdVcGRhdGUoc3RhdGUpO1xuICAgIH1cbiAgfTtcblxuICByZWZsb3cgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuZ3JpZFJlZikge1xuICAgICAgdGhpcy5ncmlkUmVmLnJlZmxvdygpO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuZ3JpZFJlZikge1xuICAgICAgdGhpcy5ncmlkUmVmLmhhbmRsZVJlc2l6ZSgpO1xuICAgIH1cbiAgfTtcblxuICBncmlkUmVmOiBNYXNvbnJ5PFQ+O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5zY3JvbGxDb250YWluZXIgPyAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxGZXRjaEl0ZW1zXG4gICAgICAgICAgY29udGFpbmVySGVpZ2h0PXt0aGlzLnN0YXRlLmNvbnRhaW5lckhlaWdodH1cbiAgICAgICAgICBmZXRjaE1vcmU9e3RoaXMuZmV0Y2hNb3JlfVxuICAgICAgICAgIGlzRmV0Y2hpbmc9e1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc0ZldGNoaW5nIHx8IHRoaXMuc3RhdGUuaGFzUGVuZGluZ01lYXN1cmVtZW50c1xuICAgICAgICAgIH1cbiAgICAgICAgICBzY3JvbGxIZWlnaHQ9e3RoaXMuc3RhdGUuc2Nyb2xsSGVpZ2h0fVxuICAgICAgICAgIHNjcm9sbFRvcD17dGhpcy5zdGF0ZS5zY3JvbGxUb3B9XG4gICAgICAgIC8+XG4gICAgICAgIDxNYXNvbnJ5XG4gICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgb25WaXJ0dWFsaXphdGlvbldpbmRvd1VwZGF0ZT17dGhpcy5vblZpcnR1YWxpemF0aW9uV2luZG93VXBkYXRlfVxuICAgICAgICAgIG9uQXV0b01lYXN1cmluZ1VwZGF0ZT17dGhpcy5oYW5kbGVPbkF1dG9NZWFzdXJpbmdVcGRhdGV9XG4gICAgICAgICAgcmVmPXt0aGlzLnNldFJlZn1cbiAgICAgICAgLz5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKSA6IChcbiAgICAgIDxNYXNvbnJ5IHsuLi50aGlzLnByb3BzfSByZWY9e3RoaXMuc2V0UmVmfSAvPlxuICAgICk7XG4gIH1cbn1cbiIsIi8qIEBmbG93ICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBjaGlsZHJlbj86IFJlYWN0Lk5vZGUsXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9TY3JvbGxCZWhhdmlvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5wcmV2T3ZlcmZsb3cgPSBudWxsO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnByZXZPdmVyZmxvdyA9IHdpbmRvdy5kb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93O1xuICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gdGhpcy5wcmV2T3ZlcmZsb3c7XG4gICAgfVxuICB9XG5cbiAgcHJldk92ZXJmbG93OiBzdHJpbmcgfCBudWxsO1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgfVxufVxuIiwiLyogQGZsb3cgKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxudHlwZSBQcm9wcyA9IHt8XG4gIGNoaWxkcmVuPzogUmVhY3QuTm9kZSxcbnx9O1xuXG5mdW5jdGlvbiBxdWVyeUZvY3VzYWJsZUFsbChlbDogSFRNTERpdkVsZW1lbnQpIHtcbiAgY29uc3Qgc2VsZWN0b3IgPSBbXG4gICAgJ2FbaHJlZl0nLFxuICAgICdhcmVhW2hyZWZdJyxcbiAgICAnaW5wdXQ6bm90KFtkaXNhYmxlZF0pJyxcbiAgICAnc2VsZWN0Om5vdChbZGlzYWJsZWRdKScsXG4gICAgJ3RleHRhcmVhOm5vdChbZGlzYWJsZWRdKScsXG4gICAgJ2J1dHRvbjpub3QoW2Rpc2FibGVkXSknLFxuICAgICdpZnJhbWUnLFxuICAgICdvYmplY3QnLFxuICAgICdlbWJlZCcsXG4gICAgJ1t0YWJpbmRleD1cIi0xXCJdJyxcbiAgICAnW3RhYmluZGV4PVwiMFwiXScsXG4gICAgJ1tjb250ZW50ZWRpdGFibGVdJyxcbiAgICAnYXVkaW9bY29udHJvbHNdJyxcbiAgICAndmlkZW9bY29udHJvbHNdJyxcbiAgICAnc3VtbWFyeScsXG4gIF0uam9pbignLCcpO1xuICByZXR1cm4gZWwucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG59XG5cbmNvbnN0IGZvY3VzRWxlbWVudCA9IChlbDogSFRNTEVsZW1lbnQpID0+IHtcbiAgaWYgKHR5cGVvZiBlbC5mb2N1cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVsLmZvY3VzKCk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYXBGb2N1c0JlaGF2aW9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJldmlvdXNseUZvY3VzZWRFbCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5mb2N1c0ZpcnN0Q2hpbGQoKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuaGFuZGxlRm9jdXMsIHRydWUpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLmhhbmRsZUZvY3VzLCB0cnVlKTtcbiAgICBpZiAodGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsKSB7XG4gICAgICBmb2N1c0VsZW1lbnQodGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsKTtcbiAgICB9XG4gIH1cblxuICBzZXRFbFJlZiA9IChlbDogP0hUTUxEaXZFbGVtZW50KSA9PiB7XG4gICAgaWYgKGVsKSB7XG4gICAgICB0aGlzLmVsID0gZWw7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUZvY3VzID0gKGV2ZW50OiBGb2N1c0V2ZW50KSA9PiB7XG4gICAgaWYgKFxuICAgICAgIXRoaXMuZWwgfHxcbiAgICAgIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiBOb2RlICYmIHRoaXMuZWwuY29udGFpbnMoZXZlbnQudGFyZ2V0KSlcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuZm9jdXNGaXJzdENoaWxkKCk7XG4gIH07XG5cbiAgZm9jdXNGaXJzdENoaWxkKCkge1xuICAgIGNvbnN0IHsgZWwgfSA9IHRoaXM7XG4gICAgaWYgKGVsKSB7XG4gICAgICBmb2N1c0VsZW1lbnQocXVlcnlGb2N1c2FibGVBbGwoZWwpWzBdKTtcbiAgICB9XG4gIH1cblxuICBlbDogP0hUTUxEaXZFbGVtZW50O1xuXG4gIHByZXZpb3VzbHlGb2N1c2VkRWw6ID9IVE1MRWxlbWVudDtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXYgcmVmPXt0aGlzLnNldEVsUmVmfT57dGhpcy5wcm9wcy5jaGlsZHJlbn08L2Rpdj47XG4gIH1cbn1cbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJveCBmcm9tICcuL0JveC5qcyc7XG5pbXBvcnQgRGl2aWRlciBmcm9tICcuL0RpdmlkZXIuanMnO1xuaW1wb3J0IEhlYWRpbmcgZnJvbSAnLi9IZWFkaW5nLmpzJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJy4vSWNvbkJ1dHRvbi5qcyc7XG5pbXBvcnQgU3RvcFNjcm9sbEJlaGF2aW9yIGZyb20gJy4vYmVoYXZpb3JzL1N0b3BTY3JvbGxCZWhhdmlvci5qcyc7XG5pbXBvcnQgVHJhcEZvY3VzQmVoYXZpb3IgZnJvbSAnLi9iZWhhdmlvcnMvVHJhcEZvY3VzQmVoYXZpb3IuanMnO1xuaW1wb3J0IE91dHNpZGVFdmVudEJlaGF2aW9yIGZyb20gJy4vYmVoYXZpb3JzL091dHNpZGVFdmVudEJlaGF2aW9yLmpzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Nb2RhbC5jc3MnO1xuXG50eXBlIFByb3BzID0ge3xcbiAgYWNjZXNzaWJpbGl0eUNsb3NlTGFiZWw6IHN0cmluZyxcbiAgYWNjZXNzaWJpbGl0eU1vZGFsTGFiZWw6IHN0cmluZyxcbiAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlLFxuICBmb290ZXI/OiBSZWFjdC5Ob2RlLFxuICBoZWFkaW5nOiBzdHJpbmcsXG4gIG9uRGlzbWlzczogKCkgPT4gdm9pZCxcbiAgcm9sZT86ICdhbGVydGRpYWxvZycgfCAnZGlhbG9nJyxcbiAgc2l6ZT86ICdzbScgfCAnbWQnIHwgJ2xnJyxcbnx9O1xuXG5jb25zdCBTSVpFX1dJRFRIX01BUCA9IHtcbiAgc206IDQxNCxcbiAgbWQ6IDU0NCxcbiAgbGc6IDgwNCxcbn07XG5cbmNvbnN0IEVTQ0FQRV9LRVlfQ09ERSA9IDI3O1xuXG5jb25zdCBCYWNrZHJvcCA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlIH0pID0+IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQmFja2Ryb3B9IC8+XG4gICAge2NoaWxkcmVufVxuICA8L1JlYWN0LkZyYWdtZW50PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgYWNjZXNzaWJpbGl0eUNsb3NlTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBmb290ZXI6IFByb3BUeXBlcy5ub2RlLFxuICAgIGhlYWRpbmc6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBhY2Nlc3NpYmlsaXR5TW9kYWxMYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG9uRGlzbWlzczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcm9sZTogUHJvcFR5cGVzLm9uZU9mKFsnYWxlcnRkaWFsb2cnLCAnZGlhbG9nJ10pLFxuICAgIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ3NtJywgJ21kJywgJ2xnJ10pLFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuaGFuZGxlS2V5VXApO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5oYW5kbGVLZXlVcCk7XG4gIH1cblxuICBoYW5kbGVPdXRzaWRlQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vbkRpc21pc3MoKTtcbiAgfTtcblxuICBoYW5kbGVDbG9zZUNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMub25EaXNtaXNzKCk7XG4gIH07XG5cbiAgaGFuZGxlS2V5VXAgPSAoZXZlbnQ6IHsga2V5Q29kZTogbnVtYmVyIH0pID0+IHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gRVNDQVBFX0tFWV9DT0RFKSB7XG4gICAgICB0aGlzLnByb3BzLm9uRGlzbWlzcygpO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYWNjZXNzaWJpbGl0eUNsb3NlTGFiZWwsXG4gICAgICBhY2Nlc3NpYmlsaXR5TW9kYWxMYWJlbCxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgZm9vdGVyLFxuICAgICAgaGVhZGluZyxcbiAgICAgIHJvbGUgPSAnZGlhbG9nJyxcbiAgICAgIHNpemUgPSAnc20nLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHdpZHRoID0gU0laRV9XSURUSF9NQVBbc2l6ZV07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFN0b3BTY3JvbGxCZWhhdmlvcj5cbiAgICAgICAgPFRyYXBGb2N1c0JlaGF2aW9yPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e2FjY2Vzc2liaWxpdHlNb2RhbExhYmVsfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfVxuICAgICAgICAgICAgcm9sZT17cm9sZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QmFja2Ryb3A+XG4gICAgICAgICAgICAgIDxPdXRzaWRlRXZlbnRCZWhhdmlvciBvbkNsaWNrPXt0aGlzLmhhbmRsZU91dHNpZGVDbGlja30+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfSB0YWJJbmRleD17LTF9IHN0eWxlPXt7IHdpZHRoIH19PlxuICAgICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICBmbGV4PVwiZ3Jvd1wiXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggZml0PlxuICAgICAgICAgICAgICAgICAgICAgIHtyb2xlID09PSAnZGlhbG9nJyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbmxpbmVTdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fc3R5bGU6IHsgcGFkZGluZ0xlZnQ6IDUwLCBwYWRkaW5nUmlnaHQ6IDUwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nWT17NX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cInhzXCIgYWNjZXNzaWJpbGl0eUxldmVsPXsxfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBwYWRkaW5nPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cInNtXCIgYWNjZXNzaWJpbGl0eUxldmVsPXsxfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICB7cm9sZSA9PT0gJ2RpYWxvZycgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBwYWRkaW5nPXsyfSBwb3NpdGlvbj1cImFic29sdXRlXCIgdG9wIHJpZ2h0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc2liaWxpdHlMYWJlbD17YWNjZXNzaWJpbGl0eUNsb3NlTGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZUNsaWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICB7cm9sZSA9PT0gJ2RpYWxvZycgJiYgPERpdmlkZXIgLz59XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICA8Qm94IGZsZXg9XCJncm93XCIgb3ZlcmZsb3c9XCJhdXRvXCIgcG9zaXRpb249XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggZml0PlxuICAgICAgICAgICAgICAgICAgICAgIHtmb290ZXIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3JvbGUgPT09ICdkaWFsb2cnICYmIDxEaXZpZGVyIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHBhZGRpbmc9ezR9Pntmb290ZXJ9PC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L091dHNpZGVFdmVudEJlaGF2aW9yPlxuICAgICAgICAgICAgPC9CYWNrZHJvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9UcmFwRm9jdXNCZWhhdmlvcj5cbiAgICAgIDwvU3RvcFNjcm9sbEJlaGF2aW9yPlxuICAgICk7XG4gIH1cbn1cbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJveCBmcm9tICcuL0JveC5qcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUHVsc2FyLmNzcyc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHBhdXNlZD86IGJvb2xlYW4sXG4gIHNpemU/OiBudW1iZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQdWxzYXIocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgcGF1c2VkLCBzaXplID0gMTM1IH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGRhbmdlcm91c2x5U2V0SW5saW5lU3R5bGU9e3tcbiAgICAgICAgX19zdHlsZToge1xuICAgICAgICAgIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiBwYXVzZWQgPyAwIDogJ2luZmluaXRlJyxcbiAgICAgICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICAgICAgYm94U2hhZG93OiAnbm9uZScsXG4gICAgICAgIH0sXG4gICAgICB9fVxuICAgICAgZGlzcGxheT17cGF1c2VkID8gJ25vbmUnIDogJ2Jsb2NrJ31cbiAgICAgIGhlaWdodD17c2l6ZX1cbiAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgd2lkdGg9e3NpemV9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbm5lckNpcmNsZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3V0ZXJDaXJjbGV9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L0JveD5cbiAgKTtcbn1cblxuUHVsc2FyLnByb3BUeXBlcyA9IHtcbiAgcGF1c2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbn07XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1JhZGlvQnV0dG9uLmNzcyc7XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBjaGVja2VkPzogYm9vbGVhbixcbiAgZGlzYWJsZWQ/OiBib29sZWFuLFxuICBpZDogc3RyaW5nLFxuICBuYW1lPzogc3RyaW5nLFxuICBvbkNoYW5nZTogKHtcbiAgICBldmVudDogU3ludGhldGljSW5wdXRFdmVudDw+LFxuICAgIGNoZWNrZWQ6IGJvb2xlYW4sXG4gIH0pID0+IHZvaWQsXG4gIHZhbHVlOiBzdHJpbmcsXG4gIHNpemU/OiAnc20nIHwgJ21kJyxcbnx9O1xuXG50eXBlIFN0YXRlID0ge3xcbiAgZm9jdXNlZDogYm9vbGVhbixcbnx9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYWRpb0J1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsnc20nLCAnbWQnXSksXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjaGVja2VkOiBmYWxzZSxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgc2l6ZTogJ21kJyxcbiAgfTtcblxuICBzdGF0ZSA9IHtcbiAgICBmb2N1c2VkOiBmYWxzZSxcbiAgfTtcblxuICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFN5bnRoZXRpY0lucHV0RXZlbnQ8PikgPT4ge1xuICAgIGNvbnN0IHsgY2hlY2tlZCB9ID0gZXZlbnQudGFyZ2V0O1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoeyBjaGVja2VkLCBldmVudCB9KTtcbiAgfTtcblxuICBoYW5kbGVCbHVyID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWQ6IGZhbHNlIH0pO1xuXG4gIGhhbmRsZUZvY3VzID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkOiB0cnVlIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoZWNrZWQsIGRpc2FibGVkLCBpZCwgbmFtZSwgc2l6ZSwgdmFsdWUgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5SYWRpb0J1dHRvbiwge1xuICAgICAgICAgIFtzdHlsZXMuUmFkaW9CdXR0b25Jc0ZvY3VzZWRdOiB0aGlzLnN0YXRlLmZvY3VzZWQsXG4gICAgICAgICAgW3N0eWxlcy5SYWRpb0J1dHRvblNtXTogc2l6ZSA9PT0gJ3NtJyxcbiAgICAgICAgICBbc3R5bGVzLlJhZGlvQnV0dG9uTWRdOiBzaXplID09PSAnbWQnLFxuICAgICAgICAgIFtzdHlsZXMuUmFkaW9CdXR0b25XaGl0ZUJnXTogIWRpc2FibGVkIHx8IGNoZWNrZWQsXG4gICAgICAgICAgW3N0eWxlcy5SYWRpb0J1dHRvbkxpZ2h0R3JheUJnXTogZGlzYWJsZWQgJiYgIWNoZWNrZWQsXG4gICAgICAgIH0pfVxuICAgICAgPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuSW5wdXQsIHtcbiAgICAgICAgICAgIFtzdHlsZXMuSW5wdXRFbmFibGVkXTogIWRpc2FibGVkLFxuICAgICAgICAgICAgW3N0eWxlcy5JbnB1dFNtXTogc2l6ZSA9PT0gJ3NtJyxcbiAgICAgICAgICAgIFtzdHlsZXMuSW5wdXRNZF06IHNpemUgPT09ICdtZCcsXG4gICAgICAgICAgfSl9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVCbHVyfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUZvY3VzfVxuICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAvPlxuICAgICAgICB7Y2hlY2tlZCAmJiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5DaGVjaywge1xuICAgICAgICAgICAgICBbc3R5bGVzLkNoZWNrU21dOiBzaXplID09PSAnc20nLFxuICAgICAgICAgICAgICBbc3R5bGVzLkNoZWNrTWRdOiBzaXplID09PSAnbWQnLFxuICAgICAgICAgICAgICBbc3R5bGVzLkNoZWNrRW5hYmxlZF06ICFkaXNhYmxlZCxcbiAgICAgICAgICAgICAgW3N0eWxlcy5DaGVja0Rpc2FibGVkXTogZGlzYWJsZWQsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgRmV0Y2hJdGVtcyBmcm9tICcuL0ZldGNoSXRlbXMuanMnO1xuaW1wb3J0IFNjcm9sbENvbnRhaW5lciBmcm9tICcuL1Njcm9sbENvbnRhaW5lci5qcyc7XG5pbXBvcnQge1xuICBnZXRFbGVtZW50SGVpZ2h0LFxuICBnZXRTY3JvbGxIZWlnaHQsXG4gIGdldFNjcm9sbFBvcyxcbn0gZnJvbSAnLi9zY3JvbGxVdGlscy5qcyc7XG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnLi90aHJvdHRsZS5qcyc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNvbnRhaW5lcj86IEhUTUxFbGVtZW50LFxuICBpc0F0RW5kPzogYm9vbGVhbixcbiAgaXNGZXRjaGluZzogYm9vbGVhbixcbiAgZmV0Y2hNb3JlPzogKCkgPT4gdm9pZCxcbiAgcmVuZGVySGVpZ2h0PzogKCkgPT4gbnVtYmVyLFxufTtcblxudHlwZSBTdGF0ZSA9IHtcbiAgY29udGFpbmVySGVpZ2h0OiBudW1iZXIsXG4gIHNjcm9sbEhlaWdodDogbnVtYmVyLFxuICBzY3JvbGxUb3A6IG51bWJlcixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbEZldGNoIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgLyoqXG4gICAqIEZldGNoZXMgYWRkaXRpb25hbCBpdGVtcyBpZiBuZWVkZWQuXG4gICAqL1xuICB1cGRhdGVQb3NpdGlvbiA9IHRocm90dGxlKCgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHRoaXMuZ2V0U2Nyb2xsU3RhdGUoKSk7XG4gIH0pO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHM6IHt9O1xuXG4gIHN0YXRlID0ge1xuICAgIGNvbnRhaW5lckhlaWdodDogMCxcbiAgICBzY3JvbGxIZWlnaHQ6IDAsXG4gICAgc2Nyb2xsVG9wOiAwLFxuICB9O1xuXG4gIC8qKlxuICAgKiBBZGRzIHNjcm9sbCBsaXN0ZW5lciBhZnRlciB0aGUgY29tcG9uZW50IG1vdW50cy5cbiAgICovXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgY29udGFpbmVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNvbnRhaW5lckhlaWdodDogZ2V0RWxlbWVudEhlaWdodChjb250YWluZXIpLFxuICAgICAgICAuLi50aGlzLmdldFNjcm9sbFN0YXRlKCksXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgc2Nyb2xsIGJ1ZmZlciBhbmQgY2hlY2sgYWZ0ZXIgdGhlIGNvbXBvbmVudCB1cGRhdGVzLlxuICAgKi9cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIC8vIHNldFRpbWVvdXQgc28gdGhlIHBhcmVudCBjb21wb25lbnQgY2FuIGNhbGN1bGF0ZSByZW5kZXJIZWlnaHQoKS5cbiAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc2Nyb2xsYWJsZSBjb250ZW50IGhlaWdodC5cbiAgICovXG4gIGdldFNjcm9sbEhlaWdodCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIHJldHVybiBnZXRTY3JvbGxIZWlnaHQoY29udGFpbmVyKTtcbiAgfTtcblxuICBnZXRTY3JvbGxTdGF0ZSgpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgcmVuZGVySGVpZ2h0IH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gcmVuZGVySGVpZ2h0IHx8IHRoaXMuZ2V0U2Nyb2xsSGVpZ2h0O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNjcm9sbEhlaWdodDogc2Nyb2xsSGVpZ2h0KCksXG4gICAgICBzY3JvbGxUb3A6IGdldFNjcm9sbFBvcyhjb250YWluZXIpLFxuICAgIH07XG4gIH1cblxuICBzY3JvbGxCdWZmZXI6IG51bWJlcjtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb250YWluZXJIZWlnaHQsIHNjcm9sbEhlaWdodCwgc2Nyb2xsVG9wIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCBmZXRjaE1vcmUsIGlzQXRFbmQsIGlzRmV0Y2hpbmcgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBwcm9wcyA9IHtcbiAgICAgIGNvbnRhaW5lckhlaWdodCxcbiAgICAgIGZldGNoTW9yZSxcbiAgICAgIGlzQXRFbmQsXG4gICAgICBpc0ZldGNoaW5nLFxuICAgICAgc2Nyb2xsSGVpZ2h0LFxuICAgICAgc2Nyb2xsVG9wLFxuICAgIH07XG5cbiAgICBpZiAoIWNvbnRhaW5lciB8fCBpc0F0RW5kKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxTY3JvbGxDb250YWluZXJcbiAgICAgICAgb25TY3JvbGw9e3RoaXMudXBkYXRlUG9zaXRpb259XG4gICAgICAgIHNjcm9sbENvbnRhaW5lcj17Y29udGFpbmVyfVxuICAgICAgPlxuICAgICAgICA8RmV0Y2hJdGVtcyB7Li4ucHJvcHN9IC8+XG4gICAgICA8L1Njcm9sbENvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5cblNjcm9sbEZldGNoLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoZSBzY3JvbGwgY29udGFpbmVyIHRvIHVzZS4gRGVmYXVsdHMgdG8gd2luZG93LlxuICAgKi9cbiAgY29udGFpbmVyOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGFkZEV2ZW50TGlzdGVuZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXI6IFByb3BUeXBlcy5mdW5jLFxuICB9KSxcbiAgcmVuZGVySGVpZ2h0OiBQcm9wVHlwZXMuZnVuYyxcbiAgaXNBdEVuZDogUHJvcFR5cGVzLmJvb2wsXG4gIGlzRmV0Y2hpbmc6IFByb3BUeXBlcy5ib29sLFxuICBmZXRjaE1vcmU6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuU2Nyb2xsRmV0Y2guZGVmYXVsdFByb3BzID0ge1xuICBjb250YWluZXI6IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogbnVsbCxcbn07XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NlYXJjaEZpZWxkLmNzcyc7XG5pbXBvcnQgQm94IGZyb20gJy4vQm94LmpzJztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbi5qcyc7XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBhY2Nlc3NpYmlsaXR5TGFiZWw6IHN0cmluZyxcbiAgYXV0b0NvbXBsZXRlPzogJ29uJyB8ICdvZmYnIHwgJ3VzZXJuYW1lJyB8ICduYW1lJyxcbiAgaWQ6IHN0cmluZyxcbiAgb25CbHVyPzogKHsgZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+IH0pID0+IHZvaWQsXG4gIG9uQ2hhbmdlOiAoe1xuICAgIHZhbHVlOiBzdHJpbmcsXG4gICAgc3ludGhldGljRXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+LFxuICB9KSA9PiB2b2lkLFxuICBvbkZvY3VzPzogKHtcbiAgICB2YWx1ZTogc3RyaW5nLFxuICAgIHN5bnRoZXRpY0V2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MSW5wdXRFbGVtZW50PixcbiAgfSkgPT4gdm9pZCxcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmcsXG4gIHZhbHVlPzogc3RyaW5nLFxufH07XG5cbnR5cGUgU3RhdGUgPSB7fFxuICBmb2N1c2VkOiBib29sZWFuLFxuICBob3ZlcmVkOiBib29sZWFuLFxufH07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaEZpZWxkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGFjY2Vzc2liaWxpdHlMYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGF1dG9Db21wbGV0ZTogUHJvcFR5cGVzLm9uZU9mKFsnb24nLCAnb2ZmJywgJ3VzZXJuYW1lJywgJ25hbWUnXSksXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9O1xuXG4gIHN0YXRlOiBTdGF0ZSA9IHtcbiAgICBmb2N1c2VkOiBmYWxzZSxcbiAgICBob3ZlcmVkOiBmYWxzZSxcbiAgfTtcblxuICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7XG4gICAgICB2YWx1ZTogZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSxcbiAgICAgIHN5bnRoZXRpY0V2ZW50OiBldmVudCxcbiAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVDbGVhciA9IChldmVudDogU3ludGhldGljRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHtcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIHN5bnRoZXRpY0V2ZW50OiBldmVudCxcbiAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVNb3VzZUVudGVyID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGhvdmVyZWQ6IHRydWUgfSk7XG5cbiAgaGFuZGxlTW91c2VMZWF2ZSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBob3ZlcmVkOiBmYWxzZSB9KTtcblxuICBoYW5kbGVGb2N1cyA9IChldmVudDogU3ludGhldGljRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZDogdHJ1ZSB9KTtcblxuICAgIGlmICh0aGlzLnByb3BzLm9uRm9jdXMpIHtcbiAgICAgIHRoaXMucHJvcHMub25Gb2N1cyh7XG4gICAgICAgIHZhbHVlOiBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlLFxuICAgICAgICBzeW50aGV0aWNFdmVudDogZXZlbnQsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlQmx1ciA9IChldmVudDogU3ludGhldGljRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZDogZmFsc2UgfSk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgIHRoaXMucHJvcHMub25CbHVyKHsgZXZlbnQgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBhY2Nlc3NpYmlsaXR5TGFiZWwsXG4gICAgICBhdXRvQ29tcGxldGUsXG4gICAgICBpZCxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgdmFsdWUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAvLyBUaGlzIG1pcnJvcnMgdGhlIGJ1aWx0IGluIGJyb3dzZXIgYmVoYXZpb3IuIElmIHRoZXJlJ3MgYSB2YWx1ZSwgc2hvdyB0aGVcbiAgICAvLyBjbGVhciBidXR0b24gaWYgeW91J3JlIGhvdmVyaW5nIG9yIGlmIHlvdSd2ZSBmb2N1c2VkIG9uIHRoZSBmaWVsZFxuICAgIGNvbnN0IHNob3dDbGVhciA9XG4gICAgICAodGhpcy5zdGF0ZS5mb2N1c2VkIHx8IHRoaXMuc3RhdGUuaG92ZXJlZCkgJiYgdmFsdWUgJiYgdmFsdWUubGVuZ3RoID4gMDtcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMuaGFuZGxlTW91c2VFbnRlcn1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZU1vdXNlTGVhdmV9XG4gICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlRm9jdXN9XG4gICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVCbHVyfVxuICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgID5cbiAgICAgICAgPEJveFxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5saW5lU3R5bGU9e3tcbiAgICAgICAgICAgIF9fc3R5bGU6IHtcbiAgICAgICAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgICAgICAgICAvLyBBZGRlZCB0aGUgZm9sbG93aW5nIGxpbmVzIGZvciBTYWZhcmkgc3VwcG9ydFxuICAgICAgICAgICAgICB0b3A6ICc1MCUnLFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcbiAgICAgICAgICBsZWZ0XG4gICAgICAgICAgcGFkZGluZ1g9ezR9XG4gICAgICAgID5cbiAgICAgICAgICA8SWNvbiBpY29uPVwic2VhcmNoXCIgYWNjZXNzaWJpbGl0eUxhYmVsPVwiXCIgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGFyaWEtbGFiZWw9e2FjY2Vzc2liaWxpdHlMYWJlbH1cbiAgICAgICAgICBhdXRvQ29tcGxldGU9e2F1dG9Db21wbGV0ZX1cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICByb2xlPVwic2VhcmNoYm94XCJcbiAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIC8+XG4gICAgICAgIHtzaG93Q2xlYXIgJiYgKFxuICAgICAgICAgIDxCb3ggcG9zaXRpb249XCJhYnNvbHV0ZVwiIHJpZ2h0IHRvcD5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2xlYXJ9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xlYXJ9XG4gICAgICAgICAgICAgIHRhYkluZGV4PXstMX1cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJY29uIGljb249XCJjbGVhclwiIGFjY2Vzc2liaWxpdHlMYWJlbD1cIlwiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgICk7XG4gIH1cbn1cbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgQm94IGZyb20gJy4vQm94LmpzJztcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU2VnbWVudGVkQ29udHJvbC5jc3MnO1xuXG50eXBlIFByb3BzID0ge3xcbiAgaXRlbXM6IEFycmF5PFJlYWN0Lk5vZGU+LFxuICBvbkNoYW5nZTogKHsgZXZlbnQ6IFN5bnRoZXRpY01vdXNlRXZlbnQ8PiwgYWN0aXZlSW5kZXg6IG51bWJlciB9KSA9PiB2b2lkLFxuICBzZWxlY3RlZEl0ZW1JbmRleDogbnVtYmVyLFxuICBzaXplPzogJ21kJyB8ICdsZycsXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VnbWVudGVkQ29udHJvbChwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgeyBpdGVtcywgb25DaGFuZ2UsIHNlbGVjdGVkSXRlbUluZGV4LCBzaXplID0gJ21kJyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5TZWdtZW50ZWRDb250cm9sLCB7XG4gICAgICAgIFtzdHlsZXMubWRdOiBzaXplID09PSAnbWQnLFxuICAgICAgICBbc3R5bGVzLmxnXTogc2l6ZSA9PT0gJ2xnJyxcbiAgICAgIH0pfVxuICAgICAgcm9sZT1cInRhYmxpc3RcIlxuICAgID5cbiAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IGkgPT09IHNlbGVjdGVkSXRlbUluZGV4O1xuICAgICAgICBjb25zdCBjcyA9IGNsYXNzbmFtZXMoc3R5bGVzLml0ZW0sIHtcbiAgICAgICAgICBbc3R5bGVzLml0ZW1Jc05vdFNlbGVjdGVkXTogIWlzU2VsZWN0ZWQsXG4gICAgICAgICAgW3N0eWxlcy5pdGVtSXNTZWxlY3RlZF06IGlzU2VsZWN0ZWQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGFyaWEtc2VsZWN0ZWQ9e2lzU2VsZWN0ZWR9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NzfVxuICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgb25DbGljaz17ZSA9PiBvbkNoYW5nZSh7IGV2ZW50OiBlLCBhY3RpdmVJbmRleDogaSB9KX1cbiAgICAgICAgICAgIHJvbGU9XCJ0YWJcIlxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3R5cGVvZiBpdGVtID09PSAnc3RyaW5nJyA/IChcbiAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICBib2xkXG4gICAgICAgICAgICAgICAgY29sb3I9e2lzU2VsZWN0ZWQgPyAnZGFya0dyYXknIDogJ2dyYXknfVxuICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIHtpdGVtfVxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuU2VnbWVudGVkQ29udHJvbC5wcm9wVHlwZXMgPSB7XG4gIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSkuaXNSZXF1aXJlZCxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNlbGVjdGVkSXRlbUluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG59O1xuIiwiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBCb3ggZnJvbSAnLi9Cb3guanMnO1xuaW1wb3J0IEZseW91dCBmcm9tICcuL0ZseW91dC5qcyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuanMnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uLmpzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TZWxlY3RMaXN0LmNzcyc7XG5cbnR5cGUgU3RhdGUgPSB7XG4gIGZvY3VzZWQ6IGJvb2xlYW4sXG4gIGVycm9ySXNPcGVuOiBib29sZWFuLFxuICBlcnJvck1lc3NhZ2U/OiBzdHJpbmcsXG59O1xuXG50eXBlIFByb3BzID0ge3xcbiAgZXJyb3JNZXNzYWdlPzogc3RyaW5nLFxuICBkaXNhYmxlZD86IGJvb2xlYW4sXG4gIGlkOiBzdHJpbmcsXG4gIGlkZWFsRXJyb3JEaXJlY3Rpb24/OiAndXAnIHwgJ3JpZ2h0JyB8ICdkb3duJyB8ICdsZWZ0JyAvKiBkZWZhdWx0OiByaWdodCAqLyxcbiAgbmFtZT86IHN0cmluZyxcbiAgb25DaGFuZ2U6ICh7IGV2ZW50OiBTeW50aGV0aWNJbnB1dEV2ZW50PD4sIHZhbHVlOiBzdHJpbmcgfSkgPT4gdm9pZCxcbiAgb3B0aW9uczogQXJyYXk8e1xuICAgIGxhYmVsOiBzdHJpbmcsXG4gICAgdmFsdWU6IHN0cmluZyxcbiAgfT4sXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nLFxuICB2YWx1ZT86ID9zdHJpbmcsXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0TGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZXJyb3JNZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaWRlYWxFcnJvckRpcmVjdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLmV4YWN0KHtcbiAgICAgICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIH0pXG4gICAgKSxcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBpZGVhbEVycm9yRGlyZWN0aW9uOiAncmlnaHQnLFxuICAgIG9wdGlvbnM6IFtdLFxuICB9O1xuXG4gIHN0YXRlID0ge1xuICAgIGZvY3VzZWQ6IGZhbHNlLFxuICAgIGVycm9ySXNPcGVuOiBmYWxzZSxcbiAgfTtcblxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzOiBQcm9wcywgc3RhdGU6IFN0YXRlKSB7XG4gICAgaWYgKHByb3BzLmVycm9yTWVzc2FnZSAhPT0gc3RhdGUuZXJyb3JNZXNzYWdlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlcnJvcklzT3BlbjogISFwcm9wcy5lcnJvck1lc3NhZ2UsXG4gICAgICAgIGVycm9yTWVzc2FnZTogcHJvcHMuZXJyb3JNZXNzYWdlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGhhbmRsZU9uQ2hhbmdlID0gKGV2ZW50OiBTeW50aGV0aWNJbnB1dEV2ZW50PD4pID0+IHtcbiAgICBpZiAoXG4gICAgICBldmVudC50YXJnZXQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCAmJlxuICAgICAgdGhpcy5wcm9wcy52YWx1ZSAhPT0gZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHsgZXZlbnQsIHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmVycm9yTWVzc2FnZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JJc09wZW46IGZhbHNlIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBoYW5kbGVCbHVyID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLmVycm9yTWVzc2FnZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9ySXNPcGVuOiBmYWxzZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlRm9jdXMgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMuZXJyb3JNZXNzYWdlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JJc09wZW46IHRydWUgfSk7XG4gICAgfVxuICB9O1xuXG4gIHNlbGVjdDogP0hUTUxTZWxlY3RFbGVtZW50O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgIGlkLFxuICAgICAgaWRlYWxFcnJvckRpcmVjdGlvbixcbiAgICAgIG5hbWUsXG4gICAgICBvcHRpb25zLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICB2YWx1ZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjbGFzc25hbWVzKFxuICAgICAgc3R5bGVzLnNlbGVjdCxcbiAgICAgIGRpc2FibGVkID8gc3R5bGVzLmRpc2FibGVkIDogc3R5bGVzLmVuYWJsZWQsXG4gICAgICBlcnJvck1lc3NhZ2UgPyBzdHlsZXMuZXJyb3JlZCA6IHN0eWxlcy5ub3JtYWxcbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3hcbiAgICAgICAgY29sb3I9e2Rpc2FibGVkID8gJ2xpZ2h0R3JheScgOiAnd2hpdGUnfVxuICAgICAgICBkYW5nZXJvdXNseVNldElubGluZVN0eWxlPXt7IF9fc3R5bGU6IHsgYm9yZGVyUmFkaXVzOiA0IH0gfX1cbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgID5cbiAgICAgICAgPEJveFxuICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgIGJvdHRvbVxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5saW5lU3R5bGU9e3tcbiAgICAgICAgICAgIF9fc3R5bGU6IHsgcGFkZGluZ1JpZ2h0OiAxNCwgcGFkZGluZ1RvcDogMiB9LFxuICAgICAgICAgIH19XG4gICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICAgIHJpZ2h0XG4gICAgICAgICAgdG9wXG4gICAgICAgID5cbiAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgaWNvbj1cImFycm93LWRvd25cIlxuICAgICAgICAgICAgc2l6ZT17MTJ9XG4gICAgICAgICAgICBjb2xvcj17ZGlzYWJsZWQgPyAnZ3JheScgOiAnZGFya0dyYXknfVxuICAgICAgICAgICAgYWNjZXNzaWJpbGl0eUxhYmVsPVwiXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICYmIHRoaXMuc3RhdGUuZm9jdXNlZCA/IGAke2lkfS1nZXN0YWx0LWVycm9yYCA6IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgICAgYXJpYS1pbnZhbGlkPXtlcnJvck1lc3NhZ2UgPyAndHJ1ZScgOiAnZmFsc2UnfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVGb2N1c31cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICByZWY9e2MgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3QgPSBjO1xuICAgICAgICAgIH19XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICA+XG4gICAgICAgICAge3BsYWNlaG9sZGVyICYmXG4gICAgICAgICAgICAhdmFsdWUgJiYgKFxuICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkIGRpc2FibGVkIHZhbHVlIGhpZGRlbj5cbiAgICAgICAgICAgICAgICB7cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICB7b3B0aW9ucy5tYXAob3B0aW9uID0+IChcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtvcHRpb24udmFsdWV9IHZhbHVlPXtvcHRpb24udmFsdWV9PlxuICAgICAgICAgICAgICB7b3B0aW9uLmxhYmVsfVxuICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICB7ZXJyb3JNZXNzYWdlICYmXG4gICAgICAgICAgdGhpcy5zdGF0ZS5lcnJvcklzT3BlbiAmJiAoXG4gICAgICAgICAgICA8Rmx5b3V0XG4gICAgICAgICAgICAgIGFuY2hvcj17dGhpcy5zZWxlY3R9XG4gICAgICAgICAgICAgIGNvbG9yPVwib3JhbmdlXCJcbiAgICAgICAgICAgICAgaWRlYWxEaXJlY3Rpb249e2lkZWFsRXJyb3JEaXJlY3Rpb259XG4gICAgICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGVycm9ySXNPcGVuOiBmYWxzZSB9KX1cbiAgICAgICAgICAgICAgc2hvdWxkRm9jdXM9e2ZhbHNlfVxuICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Qm94IHBhZGRpbmc9ezN9PlxuICAgICAgICAgICAgICAgIDxUZXh0IGJvbGQgY29sb3I9XCJ3aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9e2Ake2lkfS1nZXN0YWx0LWVycm9yYH0+e2Vycm9yTWVzc2FnZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvRmx5b3V0PlxuICAgICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICApO1xuICB9XG59XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCb3ggZnJvbSAnLi9Cb3guanMnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uLmpzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TcGlubmVyLmNzcyc7XG5cbmNvbnN0IFNJWkUgPSA0MDtcblxudHlwZSBQcm9wcyA9IHt8XG4gIGFjY2Vzc2liaWxpdHlMYWJlbDogc3RyaW5nLFxuICBzaG93OiBib29sZWFuLFxufH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNwaW5uZXIoeyBhY2Nlc3NpYmlsaXR5TGFiZWwsIHNob3cgfTogUHJvcHMpIHtcbiAgcmV0dXJuIHNob3cgPyAoXG4gICAgPEJveCB4cz17eyBkaXNwbGF5OiAnZmxleCcgfX0ganVzdGlmeUNvbnRlbnQ9XCJhcm91bmRcIiBvdmVyZmxvdz1cImhpZGRlblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufT5cbiAgICAgICAgPEljb25cbiAgICAgICAgICBpY29uPVwia25vb3BcIlxuICAgICAgICAgIGFjY2Vzc2liaWxpdHlMYWJlbD17YWNjZXNzaWJpbGl0eUxhYmVsfVxuICAgICAgICAgIHNpemU9e1NJWkV9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L0JveD5cbiAgKSA6IChcbiAgICA8ZGl2IC8+XG4gICk7XG59XG5cblNwaW5uZXIucHJvcFR5cGVzID0ge1xuICBzaG93OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBhY2Nlc3NpYmlsaXR5TGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGxheW91dCBmcm9tICcuL0xheW91dC5jc3MnO1xuXG50eXBlIFRocmVzaG9sZCA9XG4gIHwge3wgdG9wOiBudW1iZXIgfCBzdHJpbmcgfH1cbiAgfCB7fCBib3R0b206IG51bWJlciB8IHN0cmluZyB8fVxuICB8IHt8IGxlZnQ6IG51bWJlciB8IHN0cmluZyB8fVxuICB8IHt8IHJpZ2h0OiBudW1iZXIgfCBzdHJpbmcgfH1cbiAgfCB7fCB0b3A6IG51bWJlciB8IHN0cmluZywgYm90dG9tOiBudW1iZXIgfCBzdHJpbmcgfH1cbiAgfCB7fCBsZWZ0OiBudW1iZXIgfCBzdHJpbmcsIHJpZ2h0OiBudW1iZXIgfCBzdHJpbmcgfH1cbiAgfCB7fFxuICAgICAgdG9wOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgICBsZWZ0OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgICByaWdodDogbnVtYmVyIHwgc3RyaW5nLFxuICAgICAgYm90dG9tOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgfH07XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBjaGlsZHJlbjogUmVhY3QuTm9kZSxcbiAgZGFuZ2Vyb3VzbHlTZXRaSW5kZXg/OiB7IF9fekluZGV4OiBudW1iZXIgfSxcbiAgLi4uVGhyZXNob2xkLFxufH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0aWNreShwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgeyBkYW5nZXJvdXNseVNldFpJbmRleCA9IHsgX196SW5kZXg6IDEgfSwgY2hpbGRyZW4gfSA9IHByb3BzO1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICB0b3A6IHByb3BzLnRvcCAhPSBudWxsID8gcHJvcHMudG9wIDogdW5kZWZpbmVkLFxuICAgIGxlZnQ6IHByb3BzLmxlZnQgIT0gbnVsbCA/IHByb3BzLmxlZnQgOiB1bmRlZmluZWQsXG4gICAgcmlnaHQ6IHByb3BzLnJpZ2h0ICE9IG51bGwgPyBwcm9wcy5yaWdodCA6IHVuZGVmaW5lZCxcbiAgICBib3R0b206IHByb3BzLmJvdHRvbSAhPSBudWxsID8gcHJvcHMuYm90dG9tIDogdW5kZWZpbmVkLFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuICAgIHpJbmRleDogZGFuZ2Vyb3VzbHlTZXRaSW5kZXguX196SW5kZXgsXG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2xheW91dC5zdGlja3l9IHN0eWxlPXtzdHlsZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblN0aWNreS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgZGFuZ2Vyb3VzbHlTZXRaSW5kZXg6IFByb3BUeXBlcy5leGFjdCh7XG4gICAgX196SW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIH0pLFxuICB0b3A6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgbGVmdDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBib3R0b206IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgcmlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbn07XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1N3aXRjaC5jc3MnO1xuXG50eXBlIFByb3BzID0ge3xcbiAgZGlzYWJsZWQ/OiBib29sZWFuLFxuICBpZDogc3RyaW5nLFxuICBuYW1lPzogc3RyaW5nLFxuICBvbkNoYW5nZTogKHsgZXZlbnQ6IFN5bnRoZXRpY0lucHV0RXZlbnQ8PiwgdmFsdWU6IGJvb2xlYW4gfSkgPT4gdm9pZCxcbiAgc3dpdGNoZWQ/OiBib29sZWFuLFxufH07XG5cbnR5cGUgU3RhdGUgPSB7fFxuICBmb2N1c2VkOiBib29sZWFuLFxufH07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN3aXRjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHN3aXRjaGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBzd2l0Y2hlZDogZmFsc2UsXG4gIH07XG5cbiAgc3RhdGU6IFN0YXRlID0ge1xuICAgIGZvY3VzZWQ6IGZhbHNlLFxuICB9O1xuXG4gIGhhbmRsZUJsdXIgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZDogZmFsc2UgfSk7XG5cbiAgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBTeW50aGV0aWNJbnB1dEV2ZW50PD4pID0+IHtcbiAgICBjb25zdCB7IGNoZWNrZWQgfSA9IGV2ZW50LnRhcmdldDtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHtcbiAgICAgIGV2ZW50LFxuICAgICAgdmFsdWU6IGNoZWNrZWQsXG4gICAgfSk7XG4gIH07XG5cbiAgaGFuZGxlRm9jdXMgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWQ6IHRydWUgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGlzYWJsZWQsIGlkLCBuYW1lLCBzd2l0Y2hlZCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHN3aXRjaFN0eWxlcyA9IGNsYXNzbmFtZXMoXG4gICAgICBzdHlsZXMuc3dpdGNoLFxuICAgICAge1xuICAgICAgICBbc3R5bGVzLmZvY3VzZWRdOiB0aGlzLnN0YXRlLmZvY3VzZWQsXG4gICAgICB9LFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5lc3RlZC10ZXJuYXJ5XG4gICAgICBkaXNhYmxlZFxuICAgICAgICA/IHN3aXRjaGVkXG4gICAgICAgICAgPyBzdHlsZXMuc3dpdGNoR3JheVxuICAgICAgICAgIDogc3R5bGVzLnN3aXRjaExpZ2h0R3JheVxuICAgICAgICA6IHN3aXRjaGVkXG4gICAgICAgICAgPyBzdHlsZXMuc3dpdGNoRGFya0dyYXlcbiAgICAgICAgICA6IHN0eWxlcy5zd2l0Y2hXaGl0ZVxuICAgICk7XG5cbiAgICBjb25zdCBzbGlkZXJTdHlsZXMgPSBjbGFzc25hbWVzKFxuICAgICAgc3R5bGVzLnNsaWRlcixcbiAgICAgIHN3aXRjaGVkID8gc3R5bGVzLnNsaWRlclJpZ2h0IDogc3R5bGVzLnNsaWRlckxlZnQsXG4gICAgICBzd2l0Y2hlZCAmJiAhZGlzYWJsZWQgPyBzdHlsZXMuc2xpZGVyRGFyayA6IHN0eWxlcy5zbGlkZXJMaWdodFxuICAgICk7XG5cbiAgICBjb25zdCBpbnB1dFN0eWxlcyA9IGNsYXNzbmFtZXMoc3R5bGVzLmNoZWNrYm94LCB7XG4gICAgICBbc3R5bGVzLmNoZWNrYm94RW5hYmxlZF06ICFkaXNhYmxlZCxcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3dpdGNoU3R5bGVzfT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2hlY2tlZD17c3dpdGNoZWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtpbnB1dFN0eWxlc31cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlRm9jdXN9XG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3NsaWRlclN0eWxlc30gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuanMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RhYnMuY3NzJztcbmltcG9ydCBsYXlvdXQgZnJvbSAnLi9MYXlvdXQuY3NzJztcblxudHlwZSBQcm9wcyA9IHt8XG4gIGFjdGl2ZVRhYkluZGV4OiBudW1iZXIsXG4gIHRhYnM6IEFycmF5PHt8XG4gICAgdGV4dDogUmVhY3QuTm9kZSxcbiAgICBocmVmOiBzdHJpbmcsXG4gIHx9PixcbiAgb25DaGFuZ2U6ICh7XG4gICAgZXZlbnQ6IFN5bnRoZXRpY01vdXNlRXZlbnQ8PixcbiAgICBhY3RpdmVUYWJJbmRleDogbnVtYmVyLFxuICB9KSA9PiB2b2lkLFxuICB3cmFwPzogYm9vbGVhbixcbnx9O1xuXG50eXBlIFN0YXRlID0ge3xcbiAgZm9jdXNlZFRhYkluZGV4OiA/bnVtYmVyLFxuICBob3ZlcmVkVGFiSW5kZXg6ID9udW1iZXIsXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFicyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBhY3RpdmVUYWJJbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHRhYnM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLmV4YWN0KHtcbiAgICAgICAgdGV4dDogUHJvcFR5cGVzLm5vZGUsXG4gICAgICAgIGhyZWY6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICB9KVxuICAgICkuaXNSZXF1aXJlZCxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICB3cmFwOiBQcm9wVHlwZXMuYm9vbCxcbiAgfTtcblxuICBzdGF0ZTogU3RhdGUgPSB7XG4gICAgZm9jdXNlZFRhYkluZGV4OiB1bmRlZmluZWQsXG4gICAgaG92ZXJlZFRhYkluZGV4OiB1bmRlZmluZWQsXG4gIH07XG5cbiAgaGFuZGxlVGFiQ2xpY2sgPSAoaTogbnVtYmVyLCBlOiBTeW50aGV0aWNNb3VzZUV2ZW50PD4pID0+IHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIG9uQ2hhbmdlKHsgYWN0aXZlVGFiSW5kZXg6IGksIGV2ZW50OiBlIH0pO1xuICB9O1xuXG4gIGhhbmRsZVRhYkZvY3VzID0gKGk6IG51bWJlcikgPT4gdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWRUYWJJbmRleDogaSB9KTtcblxuICBoYW5kbGVUYWJCbHVyID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWRUYWJJbmRleDogdW5kZWZpbmVkIH0pO1xuXG4gIGhhbmRsZVRhYk1vdXNlRW50ZXIgPSAoaTogbnVtYmVyKSA9PiB0aGlzLnNldFN0YXRlKHsgaG92ZXJlZFRhYkluZGV4OiBpIH0pO1xuXG4gIGhhbmRsZVRhYk1vdXNlTGVhdmUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgaG92ZXJlZFRhYkluZGV4OiB1bmRlZmluZWQgfSk7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGFicywgYWN0aXZlVGFiSW5kZXgsIHdyYXAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBmb2N1c2VkVGFiSW5kZXgsIGhvdmVyZWRUYWJJbmRleCB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLlRhYnMsIHdyYXAgJiYgbGF5b3V0LmZsZXhXcmFwKX1cbiAgICAgICAgcm9sZT1cInRhYmxpc3RcIlxuICAgICAgPlxuICAgICAgICB7dGFicy5tYXAoKHsgdGV4dCwgaHJlZiB9LCBpKSA9PiB7XG4gICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBpID09PSBhY3RpdmVUYWJJbmRleDtcbiAgICAgICAgICBjb25zdCBpc0hvdmVyZWQgPSBpID09PSBob3ZlcmVkVGFiSW5kZXg7XG4gICAgICAgICAgY29uc3QgaXNGb2N1c2VkID0gaSA9PT0gZm9jdXNlZFRhYkluZGV4O1xuICAgICAgICAgIGNvbnN0IGNzID0gY2xhc3NuYW1lcyhzdHlsZXMudGFiLCB7XG4gICAgICAgICAgICBbc3R5bGVzLnRhYklzTm90QWN0aXZlXTogIWlzQWN0aXZlLFxuICAgICAgICAgICAgW3N0eWxlcy50YWJJc0FjdGl2ZV06IGlzQWN0aXZlLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBhcmlhLXNlbGVjdGVkPXtpc0FjdGl2ZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjc31cbiAgICAgICAgICAgICAgaHJlZj17aHJlZn1cbiAgICAgICAgICAgICAga2V5PXtocmVmfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZTogU3ludGhldGljTW91c2VFdmVudDw+KSA9PiB0aGlzLmhhbmRsZVRhYkNsaWNrKGksIGUpfVxuICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiB0aGlzLmhhbmRsZVRhYkZvY3VzKGkpfVxuICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlVGFiQmx1cn1cbiAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiB0aGlzLmhhbmRsZVRhYk1vdXNlRW50ZXIoaSl9XG4gICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5oYW5kbGVUYWJNb3VzZUxlYXZlfVxuICAgICAgICAgICAgICByb2xlPVwidGFiXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICBib2xkXG4gICAgICAgICAgICAgICAgY29sb3I9e2lzQWN0aXZlIHx8IGlzSG92ZXJlZCB8fCBpc0ZvY3VzZWQgPyAnZGFya0dyYXknIDogJ2dyYXknfVxuICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEZseW91dCBmcm9tICcuL0ZseW91dC5qcyc7XG5pbXBvcnQgQm94IGZyb20gJy4vQm94LmpzJztcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVGV4dEFyZWEuY3NzJztcblxudHlwZSBTdGF0ZSA9IHtcbiAgZm9jdXNlZDogYm9vbGVhbixcbiAgZXJyb3JJc09wZW46IGJvb2xlYW4sXG4gIGVycm9yTWVzc2FnZT86IHN0cmluZyxcbn07XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBlcnJvck1lc3NhZ2U/OiBzdHJpbmcsXG4gIGRpc2FibGVkPzogYm9vbGVhbixcbiAgaGFzRXJyb3I/OiBib29sZWFuLFxuICBpZDogc3RyaW5nLFxuICBpZGVhbEVycm9yRGlyZWN0aW9uPzogJ3VwJyB8ICdyaWdodCcgfCAnZG93bicgfCAnbGVmdCcgLyogZGVmYXVsdDogcmlnaHQgKi8sXG4gIG5hbWU/OiBzdHJpbmcsXG4gIG9uQmx1cj86ICh7XG4gICAgZXZlbnQ6IFN5bnRoZXRpY0ZvY3VzRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4sXG4gICAgdmFsdWU6IHN0cmluZyxcbiAgfSkgPT4gdm9pZCxcbiAgb25DaGFuZ2U6ICh7XG4gICAgZXZlbnQ6IFN5bnRoZXRpY0lucHV0RXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4sXG4gICAgdmFsdWU6IHN0cmluZyxcbiAgfSkgPT4gdm9pZCxcbiAgb25Gb2N1cz86ICh7XG4gICAgZXZlbnQ6IFN5bnRoZXRpY0ZvY3VzRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4sXG4gICAgdmFsdWU6IHN0cmluZyxcbiAgfSkgPT4gdm9pZCxcbiAgb25LZXlEb3duPzogKHtcbiAgICBldmVudDogU3ludGhldGljS2V5Ym9hcmRFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PixcbiAgICB2YWx1ZTogc3RyaW5nLFxuICB9KSA9PiB2b2lkLFxuICBwbGFjZWhvbGRlcj86IHN0cmluZyxcbiAgcm93cz86IG51bWJlciAvKiBkZWZhdWx0OiAzICovLFxuICB2YWx1ZT86IHN0cmluZyxcbnx9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0QXJlYSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZXJyb3JNZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGhhc0Vycm9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGlkZWFsRXJyb3JEaXJlY3Rpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcm93czogUHJvcFR5cGVzLm51bWJlcixcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBoYXNFcnJvcjogZmFsc2UsXG4gICAgaWRlYWxFcnJvckRpcmVjdGlvbjogJ3JpZ2h0JyxcbiAgICByb3dzOiAzLFxuICB9O1xuXG4gIHN0YXRlID0ge1xuICAgIGZvY3VzZWQ6IGZhbHNlLFxuICAgIGVycm9ySXNPcGVuOiBmYWxzZSxcbiAgfTtcblxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzOiBQcm9wcywgc3RhdGU6IFN0YXRlKSB7XG4gICAgaWYgKHByb3BzLmVycm9yTWVzc2FnZSAhPT0gc3RhdGUuZXJyb3JNZXNzYWdlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlcnJvcklzT3BlbjogISFwcm9wcy5lcnJvck1lc3NhZ2UsXG4gICAgICAgIGVycm9yTWVzc2FnZTogcHJvcHMuZXJyb3JNZXNzYWdlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChldmVudDogU3ludGhldGljSW5wdXRFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4ge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoe1xuICAgICAgZXZlbnQsXG4gICAgICB2YWx1ZTogZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSxcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLnByb3BzLmVycm9yTWVzc2FnZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9ySXNPcGVuOiB0cnVlIH0pO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVCbHVyID0gKGV2ZW50OiBTeW50aGV0aWNGb2N1c0V2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMuZXJyb3JNZXNzYWdlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JJc09wZW46IGZhbHNlIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgIHRoaXMucHJvcHMub25CbHVyKHtcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIHZhbHVlOiBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUZvY3VzID0gKGV2ZW50OiBTeW50aGV0aWNGb2N1c0V2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMuZXJyb3JNZXNzYWdlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JJc09wZW46IHRydWUgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm9uRm9jdXMpIHtcbiAgICAgIHRoaXMucHJvcHMub25Gb2N1cyh7XG4gICAgICAgIGV2ZW50LFxuICAgICAgICB2YWx1ZTogZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVLZXlEb3duID0gKGV2ZW50OiBTeW50aGV0aWNLZXlib2FyZEV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub25LZXlEb3duKSB7XG4gICAgICB0aGlzLnByb3BzLm9uS2V5RG93bih7XG4gICAgICAgIGV2ZW50LFxuICAgICAgICB2YWx1ZTogZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICB0ZXh0YXJlYTogP0hUTUxFbGVtZW50O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgIGhhc0Vycm9yLFxuICAgICAgaWQsXG4gICAgICBpZGVhbEVycm9yRGlyZWN0aW9uLFxuICAgICAgbmFtZSxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgcm93cyxcbiAgICAgIHZhbHVlLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNsYXNzbmFtZXMoXG4gICAgICBzdHlsZXMudGV4dEFyZWEsXG4gICAgICBkaXNhYmxlZCA/IHN0eWxlcy5kaXNhYmxlZCA6IHN0eWxlcy5lbmFibGVkLFxuICAgICAgaGFzRXJyb3IgfHwgZXJyb3JNZXNzYWdlID8gc3R5bGVzLmVycm9yZWQgOiBzdHlsZXMubm9ybWFsXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8c3Bhbj5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgYXJpYS1kZXNjcmliZWRieT17XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgJiYgdGhpcy5zdGF0ZS5mb2N1c2VkID8gYCR7aWR9LWdlc3RhbHQtZXJyb3JgIDogbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgICBhcmlhLWludmFsaWQ9e2Vycm9yTWVzc2FnZSB8fCBoYXNFcnJvciA/ICd0cnVlJyA6ICdmYWxzZSd9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlQmx1cn1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVGb2N1c31cbiAgICAgICAgICBvbktleURvd249e3RoaXMuaGFuZGxlS2V5RG93bn1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgcmVmPXtjID0+IHtcbiAgICAgICAgICAgIHRoaXMudGV4dGFyZWEgPSBjO1xuICAgICAgICAgIH19XG4gICAgICAgICAgcm93cz17cm93c31cbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIC8+XG4gICAgICAgIHtlcnJvck1lc3NhZ2UgJiYgdGhpcy5zdGF0ZS5lcnJvcklzT3BlbiA/IChcbiAgICAgICAgICA8Rmx5b3V0XG4gICAgICAgICAgICBhbmNob3I9e3RoaXMudGV4dGFyZWF9XG4gICAgICAgICAgICBjb2xvcj1cIm9yYW5nZVwiXG4gICAgICAgICAgICBpZGVhbERpcmVjdGlvbj17aWRlYWxFcnJvckRpcmVjdGlvbn1cbiAgICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGVycm9ySXNPcGVuOiBmYWxzZSB9KX1cbiAgICAgICAgICAgIHNob3VsZEZvY3VzPXtmYWxzZX1cbiAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJveCBwYWRkaW5nPXszfT5cbiAgICAgICAgICAgICAgPFRleHQgYm9sZCBjb2xvcj1cIndoaXRlXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9e2Ake2lkfS1nZXN0YWx0LWVycm9yYH0+e2Vycm9yTWVzc2FnZX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvRmx5b3V0PlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvc3Bhbj5cbiAgICApO1xuICB9XG59XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgRmx5b3V0IGZyb20gJy4vRmx5b3V0LmpzJztcbmltcG9ydCBCb3ggZnJvbSAnLi9Cb3guanMnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UZXh0RmllbGQuY3NzJztcblxudHlwZSBTdGF0ZSA9IHtcbiAgZm9jdXNlZDogYm9vbGVhbixcbiAgZXJyb3JJc09wZW46IGJvb2xlYW4sXG4gIGVycm9yTWVzc2FnZT86IHN0cmluZyxcbn07XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBhdXRvQ29tcGxldGU/OiAnY3VycmVudC1wYXNzd29yZCcgfCAnb24nIHwgJ29mZicgfCAndXNlcm5hbWUnLFxuICBkaXNhYmxlZD86IGJvb2xlYW4sXG4gIGVycm9yTWVzc2FnZT86IHN0cmluZyxcbiAgaGFzRXJyb3I/OiBib29sZWFuLFxuICBpZDogc3RyaW5nLFxuICBpZGVhbEVycm9yRGlyZWN0aW9uPzogJ3VwJyB8ICdyaWdodCcgfCAnZG93bicgfCAnbGVmdCcgLyogZGVmYXVsdDogcmlnaHQgKi8sXG4gIG5hbWU/OiBzdHJpbmcsXG4gIG9uQmx1cj86ICh7XG4gICAgZXZlbnQ6IFN5bnRoZXRpY0ZvY3VzRXZlbnQ8SFRNTElucHV0RWxlbWVudD4sXG4gICAgdmFsdWU6IHN0cmluZyxcbiAgfSkgPT4gdm9pZCxcbiAgb25DaGFuZ2U6ICh7XG4gICAgZXZlbnQ6IFN5bnRoZXRpY0lucHV0RXZlbnQ8SFRNTElucHV0RWxlbWVudD4sXG4gICAgdmFsdWU6IHN0cmluZyxcbiAgfSkgPT4gdm9pZCxcbiAgb25Gb2N1cz86ICh7XG4gICAgZXZlbnQ6IFN5bnRoZXRpY0ZvY3VzRXZlbnQ8SFRNTElucHV0RWxlbWVudD4sXG4gICAgdmFsdWU6IHN0cmluZyxcbiAgfSkgPT4gdm9pZCxcbiAgb25LZXlEb3duPzogKHtcbiAgICBldmVudDogU3ludGhldGljS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PixcbiAgICB2YWx1ZTogc3RyaW5nLFxuICB9KSA9PiB2b2lkLFxuICBwbGFjZWhvbGRlcj86IHN0cmluZyxcbiAgdHlwZT86ICdkYXRlJyB8ICdlbWFpbCcgfCAnbnVtYmVyJyB8ICdwYXNzd29yZCcgfCAndGV4dCcgfCAndXJsJyxcbiAgdmFsdWU/OiBzdHJpbmcsXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dEZpZWxkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGF1dG9Db21wbGV0ZTogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgICdjdXJyZW50LXBhc3N3b3JkJyxcbiAgICAgICdvbicsXG4gICAgICAnb2ZmJyxcbiAgICAgICd1c2VybmFtZScsXG4gICAgXSksXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGVycm9yTWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBoYXNFcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBpZGVhbEVycm9yRGlyZWN0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbktleURvd246IFByb3BUeXBlcy5mdW5jLFxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICAnZGF0ZScsXG4gICAgICAnZW1haWwnLFxuICAgICAgJ251bWJlcicsXG4gICAgICAncGFzc3dvcmQnLFxuICAgICAgJ3RleHQnLFxuICAgICAgJ3VybCcsXG4gICAgXSksXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgaGFzRXJyb3I6IGZhbHNlLFxuICAgIGlkZWFsRXJyb3JEaXJlY3Rpb246ICdyaWdodCcsXG4gICAgdHlwZTogJ3RleHQnLFxuICB9O1xuXG4gIHN0YXRlID0ge1xuICAgIGZvY3VzZWQ6IGZhbHNlLFxuICAgIGVycm9ySXNPcGVuOiBmYWxzZSxcbiAgfTtcblxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzOiBQcm9wcywgc3RhdGU6IFN0YXRlKSB7XG4gICAgaWYgKHByb3BzLmVycm9yTWVzc2FnZSAhPT0gc3RhdGUuZXJyb3JNZXNzYWdlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlcnJvcklzT3BlbjogISFwcm9wcy5lcnJvck1lc3NhZ2UsXG4gICAgICAgIGVycm9yTWVzc2FnZTogcHJvcHMuZXJyb3JNZXNzYWdlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChldmVudDogU3ludGhldGljSW5wdXRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoe1xuICAgICAgZXZlbnQsXG4gICAgICB2YWx1ZTogZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVCbHVyID0gKGV2ZW50OiBTeW50aGV0aWNGb2N1c0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMuZXJyb3JNZXNzYWdlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JJc09wZW46IGZhbHNlIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgIHRoaXMucHJvcHMub25CbHVyKHtcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIHZhbHVlOiBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUZvY3VzID0gKGV2ZW50OiBTeW50aGV0aWNGb2N1c0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMuZXJyb3JNZXNzYWdlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JJc09wZW46IHRydWUgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm9uRm9jdXMpIHtcbiAgICAgIHRoaXMucHJvcHMub25Gb2N1cyh7XG4gICAgICAgIGV2ZW50LFxuICAgICAgICB2YWx1ZTogZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVLZXlEb3duID0gKGV2ZW50OiBTeW50aGV0aWNLZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub25LZXlEb3duKSB7XG4gICAgICB0aGlzLnByb3BzLm9uS2V5RG93bih7XG4gICAgICAgIGV2ZW50LFxuICAgICAgICB2YWx1ZTogZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICB0ZXh0ZmllbGQ6ID9IVE1MRWxlbWVudDtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYXV0b0NvbXBsZXRlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICBoYXNFcnJvcixcbiAgICAgIGlkLFxuICAgICAgaWRlYWxFcnJvckRpcmVjdGlvbixcbiAgICAgIG5hbWUsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIHR5cGUsXG4gICAgICB2YWx1ZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjbGFzc25hbWVzKFxuICAgICAgc3R5bGVzLnRleHRGaWVsZCxcbiAgICAgIGRpc2FibGVkID8gc3R5bGVzLmRpc2FibGVkIDogc3R5bGVzLmVuYWJsZWQsXG4gICAgICBoYXNFcnJvciB8fCBlcnJvck1lc3NhZ2UgPyBzdHlsZXMuZXJyb3JlZCA6IHN0eWxlcy5ub3JtYWxcbiAgICApO1xuXG4gICAgLy8gdHlwZT0nbnVtYmVyJyBkb2Vzbid0IHdvcmsgb24gaW9zIHNhZmFyaSB3aXRob3V0IGEgcGF0dGVyblxuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE0NDQ3NjY4L2lucHV0LXR5cGUtbnVtYmVyLWlzLW5vdC1zaG93aW5nLWEtbnVtYmVyLWtleXBhZC1vbi1pb3NcbiAgICBjb25zdCBwYXR0ZXJuID0gdHlwZSA9PT0gJ251bWJlcicgPyAnXFxcXGQqJyA6IHVuZGVmaW5lZDtcblxuICAgIHJldHVybiAoXG4gICAgICA8c3Bhbj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgYXJpYS1kZXNjcmliZWRieT17XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgJiYgdGhpcy5zdGF0ZS5mb2N1c2VkID8gYCR7aWR9LWdlc3RhbHQtZXJyb3JgIDogbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgICBhcmlhLWludmFsaWQ9e2Vycm9yTWVzc2FnZSB8fCBoYXNFcnJvciA/ICd0cnVlJyA6ICdmYWxzZSd9XG4gICAgICAgICAgYXV0b0NvbXBsZXRlPXthdXRvQ29tcGxldGV9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlQmx1cn1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVGb2N1c31cbiAgICAgICAgICBvbktleURvd249e3RoaXMuaGFuZGxlS2V5RG93bn1cbiAgICAgICAgICBwYXR0ZXJuPXtwYXR0ZXJufVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICByZWY9e2MgPT4ge1xuICAgICAgICAgICAgdGhpcy50ZXh0ZmllbGQgPSBjO1xuICAgICAgICAgIH19XG4gICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIC8+XG4gICAgICAgIHtlcnJvck1lc3NhZ2UgJiZcbiAgICAgICAgICB0aGlzLnN0YXRlLmVycm9ySXNPcGVuICYmIChcbiAgICAgICAgICAgIDxGbHlvdXRcbiAgICAgICAgICAgICAgYW5jaG9yPXt0aGlzLnRleHRmaWVsZH1cbiAgICAgICAgICAgICAgY29sb3I9XCJvcmFuZ2VcIlxuICAgICAgICAgICAgICBpZGVhbERpcmVjdGlvbj17aWRlYWxFcnJvckRpcmVjdGlvbn1cbiAgICAgICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgZXJyb3JJc09wZW46IGZhbHNlIH0pfVxuICAgICAgICAgICAgICBzaG91bGRGb2N1cz17ZmFsc2V9XG4gICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCb3ggcGFkZGluZz17M30+XG4gICAgICAgICAgICAgICAgPFRleHQgYm9sZCBjb2xvcj1cIndoaXRlXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBpZD17YCR7aWR9LWdlc3RhbHQtZXJyb3JgfT57ZXJyb3JNZXNzYWdlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9GbHlvdXQ+XG4gICAgICAgICAgKX1cbiAgICAgIDwvc3Bhbj5cbiAgICApO1xuICB9XG59XG4iLCIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCb3ggZnJvbSAnLi9Cb3guanMnO1xuaW1wb3J0IE1hc2sgZnJvbSAnLi9NYXNrLmpzJztcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24uanMnO1xuXG50eXBlIFByb3BzID0ge3xcbiAgY29sb3I/OiAnZGFya0dyYXknIHwgJ29yYW5nZScsXG4gIGljb24/OiAnYXJyb3ctY2lyY2xlLWZvcndhcmQnLCAvLyBsZWF2aW5nIG9wZW4gdG8gYWRkaXRpb25hbCBpY29ucyBpbiB0aGUgZnV0dXJlXG4gIHRleHQ6IHN0cmluZyB8IEFycmF5PHN0cmluZz4sXG4gIHRodW1ibmFpbD86IFJlYWN0Lk5vZGUsXG58fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9hc3QocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgY29sb3IgPSAnZGFya0dyYXknLCBpY29uLCB0aHVtYm5haWwsIHRleHQgfSA9IHByb3BzO1xuXG4gIGxldCBjb250ZW50cztcbiAgLy8gQ29uZmlybWF0aW9uIFRvYXN0c1xuICBpZiAodGV4dCBpbnN0YW5jZW9mIEFycmF5ICYmIHRleHQubGVuZ3RoID4gMSkge1xuICAgIGNvbnRlbnRzID0gKFxuICAgICAgPEJveCB4cz17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgIDxCb3ggeHM9e3sgZGlzcGxheTogJ2ZsZXhDb2x1bW4nIH19IGZsZXg9XCJub25lXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgICB7dGh1bWJuYWlsID8gKFxuICAgICAgICAgICAgPE1hc2sgc2hhcGU9XCJyb3VuZGVkXCIgaGVpZ2h0PXs0OH0gd2lkdGg9ezQ4fT5cbiAgICAgICAgICAgICAge3RodW1ibmFpbH1cbiAgICAgICAgICAgIDwvTWFzaz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICB4cz17eyBkaXNwbGF5OiAnZmxleENvbHVtbicgfX1cbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbmxpbmVTdHlsZT17eyBfX3N0eWxlOiB7IHBhZGRpbmdMZWZ0OiAxMCB9IH19XG4gICAgICAgID5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubGluZVN0eWxlPXt7IF9fc3R5bGU6IHsgZm9udFdlaWdodDogJ25vcm1hbCcgfSB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwid2hpdGVcIiBzaXplPVwibGdcIj5cbiAgICAgICAgICAgICAge3RleHRbMF19XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPFRleHQgYm9sZCBjb2xvcj1cIndoaXRlXCIgc2l6ZT1cImxnXCI+XG4gICAgICAgICAgICB7dGV4dFsxXX1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBUb2FzdHMgYXMgR3VpZGVzXG4gICAgY29udGVudHMgPSAoXG4gICAgICA8Qm94XG4gICAgICAgIHhzPXt7IGRpc3BsYXk6ICdmbGV4JyB9fVxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImJldHdlZW5cIlxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgID5cbiAgICAgICAgPFRleHQgYm9sZCBjb2xvcj1cIndoaXRlXCIgc2l6ZT1cImxnXCI+XG4gICAgICAgICAge3RleHR9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAge2ljb24gJiYgKFxuICAgICAgICAgIDxCb3ggZGFuZ2Vyb3VzbHlTZXRJbmxpbmVTdHlsZT17eyBfX3N0eWxlOiB7IHBhZGRpbmdMZWZ0OiAyNCB9IH19PlxuICAgICAgICAgICAgPEljb24gYWNjZXNzaWJpbGl0eUxhYmVsPVwiXCIgY29sb3I9XCJ3aGl0ZVwiIGljb249e2ljb259IHNpemU9ezM2fSAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuICAgICAgPC9Cb3g+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEJveCBtYXJnaW5Cb3R0b209ezN9IHBhZGRpbmdYPXs0fSBtYXhXaWR0aD17Mzc2fSB3aWR0aD1cIjEwMHZ3XCI+XG4gICAgICA8Qm94IGNvbG9yPXtjb2xvcn0gZml0IHBhZGRpbmdYPXs4fSBwYWRkaW5nWT17NX0gc2hhcGU9XCJwaWxsXCI+XG4gICAgICAgIHtjb250ZW50c31cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufVxuXG5Ub2FzdC5wcm9wVHlwZXMgPSB7XG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydkYXJrR3JheScsICdvcmFuZ2UnXSksXG4gIGljb246IFByb3BUeXBlcy5vbmVPZihbJ2Fycm93LWNpcmNsZS1mb3J3YXJkJ10pLCAvLyBsZWF2aW5nIG9wZW4gdG8gYWRkaXRpb25hbCBpY29ucyBpbiB0aGUgZnV0dXJlXG4gIHRleHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gIF0pLmlzUmVxdWlyZWQsXG4gIHRodW1ibmFpbDogUHJvcFR5cGVzLm5vZGUsXG59O1xuIiwiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQm94IGZyb20gJy4vQm94LmpzJztcbmltcG9ydCBDb250cm9sbGVyIGZyb20gJy4vQ29udHJvbGxlci5qcyc7XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBhbmNob3I6ID9IVE1MRWxlbWVudCxcbiAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlLFxuICBpZGVhbERpcmVjdGlvbj86ICd1cCcgfCAncmlnaHQnIHwgJ2Rvd24nIHwgJ2xlZnQnLFxuICBvbkRpc21pc3M6ICgpID0+IHZvaWQsXG4gIHBvc2l0aW9uUmVsYXRpdmVUb0FuY2hvcj86IGJvb2xlYW4sXG4gIHNpemU/OiAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyAvKiBkZWZhdWx0IG1kICovLFxufH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvb2x0aXAocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBhbmNob3IsXG4gICAgY2hpbGRyZW4sXG4gICAgaWRlYWxEaXJlY3Rpb24sXG4gICAgb25EaXNtaXNzLFxuICAgIHBvc2l0aW9uUmVsYXRpdmVUb0FuY2hvciA9IHRydWUsXG4gICAgc2l6ZSA9ICdtZCcsXG4gIH0gPSBwcm9wcztcblxuICBpZiAoIWFuY2hvcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udHJvbGxlclxuICAgICAgYW5jaG9yPXthbmNob3J9XG4gICAgICBiZ0NvbG9yPVwiZGFya0dyYXlcIlxuICAgICAgaWRlYWxEaXJlY3Rpb249e2lkZWFsRGlyZWN0aW9ufVxuICAgICAgcG9zaXRpb25SZWxhdGl2ZVRvQW5jaG9yPXtwb3NpdGlvblJlbGF0aXZlVG9BbmNob3J9XG4gICAgICBvbkRpc21pc3M9e29uRGlzbWlzc31cbiAgICAgIHNpemU9e3NpemV9XG4gICAgPlxuICAgICAgPEJveCBjb2x1bW49ezEyfSBwYWRkaW5nPXszfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Cb3g+XG4gICAgPC9Db250cm9sbGVyPlxuICApO1xufVxuXG5Ub29sdGlwLnByb3BUeXBlcyA9IHtcbiAgYW5jaG9yOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGNvbnRhaW5zOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBnZXRCb3VuZGluZ0NsaWVudFJlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICB9KSxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBpZGVhbERpcmVjdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsndXAnLCAncmlnaHQnLCAnZG93bicsICdsZWZ0J10pLFxuICBvbkRpc21pc3M6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHBvc2l0aW9uUmVsYXRpdmVUb0FuY2hvcjogUHJvcFR5cGVzLmJvb2wsXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ3hzJywgJ3NtJywgJ21kJywgJ2xnJywgJ3hsJ10pLFxufTtcbiIsIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVG91Y2hhYmxlLmNzcyc7XG5cbnR5cGUgU2hhcGUgPVxuICB8ICdzcXVhcmUnXG4gIHwgJ3JvdW5kZWQnXG4gIHwgJ3BpbGwnXG4gIHwgJ2NpcmNsZSdcbiAgfCAncm91bmRlZFRvcCdcbiAgfCAncm91bmRlZEJvdHRvbSdcbiAgfCAncm91bmRlZExlZnQnXG4gIHwgJ3JvdW5kZWRSaWdodCc7XG5cbnR5cGUgTW91c2VDdXJzb3IgPVxuICB8ICdjb3B5J1xuICB8ICdncmFiJ1xuICB8ICdncmFiYmluZydcbiAgfCAnbW92ZSdcbiAgfCAnbm9Ecm9wJ1xuICB8ICdwb2ludGVyJ1xuICB8ICd6b29tSW4nXG4gIHwgJ3pvb21PdXQnO1xuXG50eXBlIFByb3BzID0ge3xcbiAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlLFxuICBmdWxsSGVpZ2h0PzogYm9vbGVhbixcbiAgZnVsbFdpZHRoPzogYm9vbGVhbixcbiAgbW91c2VDdXJzb3I/OiBNb3VzZUN1cnNvcixcbiAgb25Nb3VzZUVudGVyPzogKHsgZXZlbnQ6IFN5bnRoZXRpY01vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+IH0pID0+IHZvaWQsXG4gIG9uTW91c2VMZWF2ZT86ICh7IGV2ZW50OiBTeW50aGV0aWNNb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PiB9KSA9PiB2b2lkLFxuICBvblRvdWNoPzogKHtcbiAgICBldmVudDpcbiAgICAgIHwgU3ludGhldGljTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD5cbiAgICAgIHwgU3ludGhldGljS2V5Ym9hcmRFdmVudDxIVE1MRGl2RWxlbWVudD4sXG4gIH0pID0+IHZvaWQsXG4gIHNoYXBlPzogU2hhcGUsXG58fTtcblxuY29uc3QgU1BBQ0VfQ0hBUl9DT0RFID0gMzI7XG5jb25zdCBFTlRFUl9DSEFSX0NPREUgPSAxMztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG91Y2hhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XG4gIGhhbmRsZUtleVByZXNzID0gKGV2ZW50OiBTeW50aGV0aWNLZXlib2FyZEV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgb25Ub3VjaCB9ID0gdGhpcy5wcm9wcztcbiAgICAvLyBDaGVjayB0byBzZWUgaWYgc3BhY2Ugb3IgZW50ZXIgd2VyZSBwcmVzc2VkXG4gICAgaWYgKFxuICAgICAgb25Ub3VjaCAmJlxuICAgICAgKGV2ZW50LmNoYXJDb2RlID09PSBTUEFDRV9DSEFSX0NPREUgfHwgZXZlbnQuY2hhckNvZGUgPT09IEVOVEVSX0NIQVJfQ09ERSlcbiAgICApIHtcbiAgICAgIC8vIFByZXZlbnQgdGhlIGRlZmF1bHQgYWN0aW9uIHRvIHN0b3Agc2Nyb2xsaW5nIHdoZW4gc3BhY2UgaXMgcHJlc3NlZFxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG9uVG91Y2goeyBldmVudCB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgZnVsbFdpZHRoID0gdHJ1ZSxcbiAgICAgIGZ1bGxIZWlnaHQsXG4gICAgICBtb3VzZUN1cnNvciA9ICdwb2ludGVyJyxcbiAgICAgIG9uTW91c2VFbnRlcixcbiAgICAgIG9uTW91c2VMZWF2ZSxcbiAgICAgIG9uVG91Y2gsXG4gICAgICBzaGFwZSA9ICdzcXVhcmUnLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNsYXNzbmFtZXMoXG4gICAgICBzdHlsZXMudG91Y2hhYmxlLFxuICAgICAgc3R5bGVzW21vdXNlQ3Vyc29yXSxcbiAgICAgIHN0eWxlc1tzaGFwZV0sXG4gICAgICB7XG4gICAgICAgIFtzdHlsZXMuZnVsbEhlaWdodF06IGZ1bGxIZWlnaHQsXG4gICAgICAgIFtzdHlsZXMuZnVsbFdpZHRoXTogZnVsbFdpZHRoLFxuICAgICAgfVxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXN9XG4gICAgICAgIG9uQ2xpY2s9e2V2ZW50ID0+IG9uVG91Y2ggJiYgb25Ub3VjaCh7IGV2ZW50IH0pfVxuICAgICAgICBvbk1vdXNlRW50ZXI9e2V2ZW50ID0+IG9uTW91c2VFbnRlciAmJiBvbk1vdXNlRW50ZXIoeyBldmVudCB9KX1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXtldmVudCA9PiBvbk1vdXNlTGVhdmUgJiYgb25Nb3VzZUxlYXZlKHsgZXZlbnQgfSl9XG4gICAgICAgIG9uS2V5UHJlc3M9e3RoaXMuaGFuZGxlS2V5UHJlc3N9XG4gICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICB0YWJJbmRleD1cIjBcIlxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblRvdWNoYWJsZS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgZnVsbEhlaWdodDogUHJvcFR5cGVzLmJvb2wsXG4gIGZ1bGxXaWR0aDogUHJvcFR5cGVzLmJvb2wsXG4gIG1vdXNlQ3Vyc29yOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICdjb3B5JyxcbiAgICAnZ3JhYicsXG4gICAgJ2dyYWJiaW5nJyxcbiAgICAnbW92ZScsXG4gICAgJ25vRHJvcCcsXG4gICAgJ3BvaW50ZXInLFxuICAgICd6b29tSW4nLFxuICAgICd6b29tT3V0JyxcbiAgXSksXG4gIG9uVG91Y2g6IFByb3BUeXBlcy5mdW5jLFxuICBvbk1vdXNlRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbk1vdXNlTGVhdmU6IFByb3BUeXBlcy5mdW5jLFxuICBzaGFwZTogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAnc3F1YXJlJyxcbiAgICAncm91bmRlZCcsXG4gICAgJ3BpbGwnLFxuICAgICdjaXJjbGUnLFxuICAgICdyb3VuZGVkVG9wJyxcbiAgICAncm91bmRlZEJvdHRvbScsXG4gICAgJ3JvdW5kZWRMZWZ0JyxcbiAgICAncm91bmRlZFJpZ2h0JyxcbiAgXSksXG59O1xuIiwiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCb3ggZnJvbSAnLi9Cb3guanMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1ZpZGVvLmNzcyc7XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBjdXJyZW50VGltZTogbnVtYmVyLFxuICBkdXJhdGlvbjogbnVtYmVyLFxuICBzZWVrOiAodGltZTogbnVtYmVyKSA9PiB2b2lkLFxufH07XG5cbnR5cGUgU3RhdGUgPSB7fFxuICBzZWVraW5nOiBib29sZWFuLFxufH07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZGVvUGxheWhlYWQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGN1cnJlbnRUaW1lOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgZHVyYXRpb246IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBzZWVrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIHN0YXRlID0ge1xuICAgIHNlZWtpbmc6IGZhbHNlLFxuICB9O1xuXG4gIHNldFBsYXloZWFkUmVmID0gKHJlZjogP0hUTUxEaXZFbGVtZW50KSA9PiB7XG4gICAgdGhpcy5wbGF5aGVhZCA9IHJlZjtcbiAgfTtcblxuICBzZWVrID0gKGNsaWVudFg6IG51bWJlcikgPT4ge1xuICAgIGlmICh0aGlzLnBsYXloZWFkKSB7XG4gICAgICBjb25zdCB7IGR1cmF0aW9uLCBzZWVrIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgeyBsZWZ0LCB3aWR0aCB9ID0gdGhpcy5wbGF5aGVhZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IHBlcmNlbnQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigoY2xpZW50WCAtIGxlZnQpIC8gd2lkdGgsIDEpKTtcbiAgICAgIGNvbnN0IG5ld1RpbWUgPSBwZXJjZW50ICogZHVyYXRpb247XG4gICAgICBzZWVrKG5ld1RpbWUpO1xuICAgIH1cbiAgfTtcblxuICBzdG9wQ2xpY2sgPSAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxEaXZFbGVtZW50PikgPT5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICBoYW5kbGVNb3VzZURvd24gPSAoZXZlbnQ6IFN5bnRoZXRpY01vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlZWtpbmc6IHRydWUgfSk7XG4gICAgdGhpcy5zZWVrKGV2ZW50LmNsaWVudFgpO1xuICB9O1xuXG4gIGhhbmRsZU1vdXNlTW92ZSA9IChldmVudDogU3ludGhldGljTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IHNlZWtpbmcgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKHNlZWtpbmcpIHtcbiAgICAgIHRoaXMuc2VlayhldmVudC5jbGllbnRYKTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlTW91c2VVcCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2Vla2luZzogZmFsc2UgfSk7XG4gIH07XG5cbiAgcGxheWhlYWQ6ID9IVE1MRGl2RWxlbWVudDtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjdXJyZW50VGltZSwgZHVyYXRpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgd2lkdGggPSBgJHtNYXRoLmZsb29yKChjdXJyZW50VGltZSAqIDEwMDAwKSAvIGR1cmF0aW9uKSAvIDEwMH0lYDtcbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICBmbGV4PVwiZ3Jvd1wiXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICBoZWlnaHQ9ezE2fVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgYXJpYS12YWx1ZW1heD17ZHVyYXRpb259XG4gICAgICAgICAgYXJpYS12YWx1ZW1pbj1cIjBcIlxuICAgICAgICAgIGFyaWEtdmFsdWVub3c9e2N1cnJlbnRUaW1lfVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnBsYXloZWFkfVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc3RvcENsaWNrfVxuICAgICAgICAgIG9uS2V5UHJlc3M9e3RoaXMuc3RvcENsaWNrfVxuICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLmhhbmRsZU1vdXNlRG93bn1cbiAgICAgICAgICBvbk1vdXNlTW92ZT17dGhpcy5oYW5kbGVNb3VzZU1vdmV9XG4gICAgICAgICAgb25Nb3VzZVVwPXt0aGlzLmhhbmRsZU1vdXNlVXB9XG4gICAgICAgICAgcmVmPXt0aGlzLnNldFBsYXloZWFkUmVmfVxuICAgICAgICAgIHJvbGU9XCJwcm9ncmVzc2JhclwiXG4gICAgICAgICAgdGFiSW5kZXg9XCItMVwiXG4gICAgICAgID5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBsZWZ0XG4gICAgICAgICAgICByaWdodFxuICAgICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgICAgICBjb2xvcj1cImxpZ2h0R3JheVwiXG4gICAgICAgICAgICBzaGFwZT1cInJvdW5kZWRcIlxuICAgICAgICAgICAgaGVpZ2h0PXs0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCb3ggY29sb3I9XCJ3aGl0ZVwiIHNoYXBlPVwicm91bmRlZFwiIGhlaWdodD1cIjEwMCVcIiB3aWR0aD17d2lkdGh9IC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgICAgICBzaGFwZT1cInJvdW5kZWRcIlxuICAgICAgICAgICAgaGVpZ2h0PXs0fVxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbmxpbmVTdHlsZT17eyBfX3N0eWxlOiB7IGxlZnQ6IHdpZHRoIH0gfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIHNoYXBlPVwiY2lyY2xlXCJcbiAgICAgICAgICAgICAgd2lkdGg9ezE2fVxuICAgICAgICAgICAgICBoZWlnaHQ9ezE2fVxuICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdD17LTJ9XG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5saW5lU3R5bGU9e3sgX19zdHlsZTogeyBtYXJnaW5Ub3A6IC02IH0gfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Cb3g+XG4gICAgKTtcbiAgfVxufVxuIiwiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCb3ggZnJvbSAnLi9Cb3guanMnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uLmpzJztcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XG5pbXBvcnQgVG91Y2hhYmxlIGZyb20gJy4vVG91Y2hhYmxlLmpzJztcbmltcG9ydCBWaWRlb1BsYXloZWFkIGZyb20gJy4vVmlkZW9QbGF5aGVhZC5qcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVmlkZW8uY3NzJztcblxudHlwZSBQcm9wcyA9IHt8XG4gIGFjY2Vzc2liaWxpdHlNYXhpbWl6ZUxhYmVsOiBzdHJpbmcsXG4gIGFjY2Vzc2liaWxpdHlNaW5pbWl6ZUxhYmVsOiBzdHJpbmcsXG4gIGFjY2Vzc2liaWxpdHlNdXRlTGFiZWw6IHN0cmluZyxcbiAgYWNjZXNzaWJpbGl0eVBhdXNlTGFiZWw6IHN0cmluZyxcbiAgYWNjZXNzaWJpbGl0eVBsYXlMYWJlbDogc3RyaW5nLFxuICBhY2Nlc3NpYmlsaXR5VW5tdXRlTGFiZWw6IHN0cmluZyxcbiAgY3VycmVudFRpbWU6IG51bWJlcixcbiAgZHVyYXRpb246IG51bWJlcixcbiAgZnVsbHNjcmVlbjogYm9vbGVhbixcbiAgb25GdWxsc2NyZWVuQ2hhbmdlOiAoKSA9PiB2b2lkLFxuICBvblBhdXNlOiAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4gdm9pZCxcbiAgb25QbGF5OiAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4gdm9pZCxcbiAgb25Wb2x1bWVDaGFuZ2U6IChldmVudDogU3ludGhldGljRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB2b2lkLFxuICBwbGF5aW5nOiBib29sZWFuLFxuICBzZWVrOiAodGltZTogbnVtYmVyKSA9PiB2b2lkLFxuICB2b2x1bWU6IG51bWJlcixcbnx9O1xuXG5jb25zdCBmdWxsc2NyZWVuRW5hYmxlZCA9ICgpID0+XG4gIC8vICRGbG93SXNzdWUgLSB2ZW5kb3IgcHJlZml4IG1pc3NpbmcgZnJvbSBGbG93XG4gIGRvY3VtZW50LmZ1bGxzY3JlZW5FbmFibGVkIHx8XG4gIC8vICRGbG93SXNzdWUgLSB2ZW5kb3IgcHJlZml4IG1pc3NpbmcgZnJvbSBGbG93XG4gIGRvY3VtZW50LndlYmtpdEZ1bGxzY3JlZW5FbmFibGVkIHx8XG4gIC8vICRGbG93SXNzdWUgLSB2ZW5kb3IgcHJlZml4IG1pc3NpbmcgZnJvbSBGbG93XG4gIGRvY3VtZW50Lm1vekZ1bGxTY3JlZW5FbmFibGVkIHx8XG4gIC8vICRGbG93SXNzdWUgLSB2ZW5kb3IgcHJlZml4IG1pc3NpbmcgZnJvbSBGbG93XG4gIGRvY3VtZW50Lm1zRnVsbHNjcmVlbkVuYWJsZWQ7XG5cbmNvbnN0IHRpbWVUb1N0cmluZyA9ICh0aW1lPzogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IHJvdW5kZWQgPSBNYXRoLmZsb29yKHRpbWUgfHwgMCk7XG4gIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHJvdW5kZWQgLyA2MCk7XG4gIGNvbnN0IHNlY29uZHMgPSByb3VuZGVkIC0gbWludXRlcyAqIDYwO1xuICBjb25zdCBtaW51dGVzU3RyID0gbWludXRlcyA8IDEwID8gYDAke21pbnV0ZXN9YCA6IG1pbnV0ZXM7XG4gIGNvbnN0IHNlY29uZHNTdHIgPSBzZWNvbmRzIDwgMTAgPyBgMCR7c2Vjb25kc31gIDogc2Vjb25kcztcbiAgcmV0dXJuIGAke21pbnV0ZXNTdHJ9OiR7c2Vjb25kc1N0cn1gO1xufTtcblxuY2xhc3MgVmlkZW9Db250cm9scyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGFjY2Vzc2liaWxpdHlNYXhpbWl6ZUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgYWNjZXNzaWJpbGl0eU1pbmltaXplTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBhY2Nlc3NpYmlsaXR5TXV0ZUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgYWNjZXNzaWJpbGl0eVBhdXNlTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBhY2Nlc3NpYmlsaXR5UGxheUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgYWNjZXNzaWJpbGl0eVVubXV0ZUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgY3VycmVudFRpbWU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBkdXJhdGlvbjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGZ1bGxzY3JlZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgb25GdWxsc2NyZWVuQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uUGF1c2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25QbGF5OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uVm9sdW1lQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHBsYXlpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgc2VlazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICB2b2x1bWU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgfTtcblxuICBoYW5kbGVGdWxsc2NyZWVuQ2hhbmdlID0gKHtcbiAgICBldmVudCxcbiAgfToge1xuICAgIGV2ZW50OlxuICAgICAgfCBTeW50aGV0aWNNb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PlxuICAgICAgfCBTeW50aGV0aWNLZXlib2FyZEV2ZW50PEhUTUxEaXZFbGVtZW50PixcbiAgfSkgPT4ge1xuICAgIGNvbnN0IHsgb25GdWxsc2NyZWVuQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIG9uRnVsbHNjcmVlbkNoYW5nZSgpO1xuICB9O1xuXG4gIGhhbmRsZVBsYXlpbmdDaGFuZ2UgPSAoe1xuICAgIGV2ZW50LFxuICB9OiB7XG4gICAgZXZlbnQ6XG4gICAgICB8IFN5bnRoZXRpY01vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+XG4gICAgICB8IFN5bnRoZXRpY0tleWJvYXJkRXZlbnQ8SFRNTERpdkVsZW1lbnQ+LFxuICB9KSA9PiB7XG4gICAgY29uc3QgeyBwbGF5aW5nLCBvblBhdXNlLCBvblBsYXkgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHBsYXlpbmcpIHtcbiAgICAgIG9uUGF1c2UoZXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvblBsYXkoZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVWb2x1bWVDaGFuZ2UgPSAoe1xuICAgIGV2ZW50LFxuICB9OiB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tdW51c2VkLXByb3AtdHlwZXMgKi9cbiAgICBldmVudDpcbiAgICAgIHwgU3ludGhldGljTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD5cbiAgICAgIHwgU3ludGhldGljS2V5Ym9hcmRFdmVudDxIVE1MRGl2RWxlbWVudD4sXG4gICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC9uby11bnVzZWQtcHJvcC10eXBlcyAqL1xuICB9KSA9PiB7XG4gICAgY29uc3QgeyBvblZvbHVtZUNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBvblZvbHVtZUNoYW5nZShldmVudCk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGFjY2Vzc2liaWxpdHlNYXhpbWl6ZUxhYmVsLFxuICAgICAgYWNjZXNzaWJpbGl0eU1pbmltaXplTGFiZWwsXG4gICAgICBhY2Nlc3NpYmlsaXR5TXV0ZUxhYmVsLFxuICAgICAgYWNjZXNzaWJpbGl0eVBhdXNlTGFiZWwsXG4gICAgICBhY2Nlc3NpYmlsaXR5UGxheUxhYmVsLFxuICAgICAgYWNjZXNzaWJpbGl0eVVubXV0ZUxhYmVsLFxuICAgICAgY3VycmVudFRpbWUsXG4gICAgICBkdXJhdGlvbixcbiAgICAgIGZ1bGxzY3JlZW4sXG4gICAgICBwbGF5aW5nLFxuICAgICAgc2VlayxcbiAgICAgIHZvbHVtZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBtdXRlZCA9IHZvbHVtZSA9PT0gMDtcbiAgICBjb25zdCBzaG93RnVsbHNjcmVlbkJ1dHRvbiA9XG4gICAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmICEhZnVsbHNjcmVlbkVuYWJsZWQoKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250cm9sc30+XG4gICAgICAgIDxCb3ggcGFkZGluZz17Mn0+XG4gICAgICAgICAgPFRvdWNoYWJsZSBvblRvdWNoPXt0aGlzLmhhbmRsZVBsYXlpbmdDaGFuZ2V9IGZ1bGxXaWR0aD17ZmFsc2V9PlxuICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgYWNjZXNzaWJpbGl0eUxhYmVsPXtcbiAgICAgICAgICAgICAgICBwbGF5aW5nID8gYWNjZXNzaWJpbGl0eVBhdXNlTGFiZWwgOiBhY2Nlc3NpYmlsaXR5UGxheUxhYmVsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgIGljb249e3BsYXlpbmcgPyAncGF1c2UnIDogJ3BsYXknfVxuICAgICAgICAgICAgICBzaXplPXsyMH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Ub3VjaGFibGU+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IHdpZHRoPXs1MH0gcGFkZGluZz17Mn0+XG4gICAgICAgICAgPFRleHQgY29sb3I9XCJ3aGl0ZVwiIGFsaWduPVwicmlnaHRcIiBzaXplPVwieHNcIj5cbiAgICAgICAgICAgIHt0aW1lVG9TdHJpbmcoY3VycmVudFRpbWUpfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggcGFkZGluZz17Mn0gZmxleD1cImdyb3dcIj5cbiAgICAgICAgICA8VmlkZW9QbGF5aGVhZFxuICAgICAgICAgICAgY3VycmVudFRpbWU9e2N1cnJlbnRUaW1lfVxuICAgICAgICAgICAgZHVyYXRpb249e2R1cmF0aW9ufVxuICAgICAgICAgICAgc2Vlaz17c2Vla31cbiAgICAgICAgICAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCB3aWR0aD17NTB9IHBhZGRpbmc9ezJ9PlxuICAgICAgICAgIDxUZXh0IGNvbG9yPVwid2hpdGVcIiBhbGlnbj1cInJpZ2h0XCIgc2l6ZT1cInhzXCI+XG4gICAgICAgICAgICB7dGltZVRvU3RyaW5nKGR1cmF0aW9uKX1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IHBhZGRpbmc9ezJ9PlxuICAgICAgICAgIDxUb3VjaGFibGUgb25Ub3VjaD17dGhpcy5oYW5kbGVWb2x1bWVDaGFuZ2V9IGZ1bGxXaWR0aD17ZmFsc2V9PlxuICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgYWNjZXNzaWJpbGl0eUxhYmVsPXtcbiAgICAgICAgICAgICAgICBtdXRlZCA/IGFjY2Vzc2liaWxpdHlVbm11dGVMYWJlbCA6IGFjY2Vzc2liaWxpdHlNdXRlTGFiZWxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgaWNvbj17bXV0ZWQgPyAnbXV0ZScgOiAnc291bmQnfVxuICAgICAgICAgICAgICBzaXplPXsyMH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Ub3VjaGFibGU+XG4gICAgICAgIDwvQm94PlxuICAgICAgICB7c2hvd0Z1bGxzY3JlZW5CdXR0b24gJiYgKFxuICAgICAgICAgIDxCb3ggcGFkZGluZz17Mn0+XG4gICAgICAgICAgICA8VG91Y2hhYmxlIG9uVG91Y2g9e3RoaXMuaGFuZGxlRnVsbHNjcmVlbkNoYW5nZX0gZnVsbFdpZHRoPXtmYWxzZX0+XG4gICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgYWNjZXNzaWJpbGl0eUxhYmVsPXtcbiAgICAgICAgICAgICAgICAgIGZ1bGxzY3JlZW5cbiAgICAgICAgICAgICAgICAgICAgPyBhY2Nlc3NpYmlsaXR5TWluaW1pemVMYWJlbFxuICAgICAgICAgICAgICAgICAgICA6IGFjY2Vzc2liaWxpdHlNYXhpbWl6ZUxhYmVsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgIGljb249e2Z1bGxzY3JlZW4gPyAnbWluaW1pemUnIDogJ21heGltaXplJ31cbiAgICAgICAgICAgICAgICBzaXplPXsyMH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvVG91Y2hhYmxlPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaWRlb0NvbnRyb2xzO1xuIiwiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBWaWRlb0NvbnRyb2xzIGZyb20gJy4vVmlkZW9Db250cm9scy5qcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVmlkZW8uY3NzJztcblxudHlwZSBTb3VyY2UgPVxuICB8IHN0cmluZ1xuICB8IEFycmF5PHt8IHR5cGU6ICd2aWRlby9tM3U4JyB8ICd2aWRlby9tcDQnIHwgJ3ZpZGVvL29nZycsIHNyYzogc3RyaW5nIHx9PjtcblxudHlwZSBQcm9wcyA9IHt8XG4gIGFjY2Vzc2liaWxpdHlNYXhpbWl6ZUxhYmVsOiBzdHJpbmcsXG4gIGFjY2Vzc2liaWxpdHlNaW5pbWl6ZUxhYmVsOiBzdHJpbmcsXG4gIGFjY2Vzc2liaWxpdHlNdXRlTGFiZWw6IHN0cmluZyxcbiAgYWNjZXNzaWJpbGl0eVBhdXNlTGFiZWw6IHN0cmluZyxcbiAgYWNjZXNzaWJpbGl0eVBsYXlMYWJlbDogc3RyaW5nLFxuICBhY2Nlc3NpYmlsaXR5VW5tdXRlTGFiZWw6IHN0cmluZyxcbiAgYXNwZWN0UmF0aW86IG51bWJlcixcbiAgY2FwdGlvbnM6IHN0cmluZyxcbiAgY29udHJvbHM/OiBib29sZWFuLFxuICBsb29wPzogYm9vbGVhbixcbiAgb25EdXJhdGlvbkNoYW5nZT86ICh7XG4gICAgZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxWaWRlb0VsZW1lbnQ+LFxuICAgIGR1cmF0aW9uOiBudW1iZXIsXG4gIH0pID0+IHZvaWQsXG4gIG9uRW5kZWQ/OiAoeyBldmVudDogU3ludGhldGljRXZlbnQ8SFRNTFZpZGVvRWxlbWVudD4gfSkgPT4gdm9pZCxcbiAgb25GdWxsc2NyZWVuQ2hhbmdlPzogKHsgZXZlbnQ6IEV2ZW50LCBmdWxsc2NyZWVuOiBib29sZWFuIH0pID0+IHZvaWQsXG4gIG9uTG9hZGVkQ2hhbmdlPzogKHtcbiAgICBldmVudDogU3ludGhldGljRXZlbnQ8SFRNTFZpZGVvRWxlbWVudD4sXG4gICAgbG9hZGVkOiBudW1iZXIsXG4gIH0pID0+IHZvaWQsXG4gIG9uUGxheT86ICh7IGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MRGl2RWxlbWVudD4gfSkgPT4gdm9pZCxcbiAgb25QYXVzZT86ICh7IGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MRGl2RWxlbWVudD4gfSkgPT4gdm9pZCxcbiAgb25SZWFkeT86ICh7IGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MVmlkZW9FbGVtZW50PiB9KSA9PiB2b2lkLFxuICBvblNlZWs/OiAoeyBldmVudDogU3ludGhldGljRXZlbnQ8SFRNTFZpZGVvRWxlbWVudD4gfSkgPT4gdm9pZCxcbiAgb25UaW1lQ2hhbmdlPzogKHtcbiAgICBldmVudDogU3ludGhldGljRXZlbnQ8SFRNTFZpZGVvRWxlbWVudD4sXG4gICAgdGltZTogbnVtYmVyLFxuICB9KSA9PiB2b2lkLFxuICBvblZvbHVtZUNoYW5nZT86ICh7XG4gICAgZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxEaXZFbGVtZW50PixcbiAgICB2b2x1bWU6IG51bWJlcixcbiAgfSkgPT4gdm9pZCxcbiAgcGxheWJhY2tSYXRlOiBudW1iZXIsXG4gIHBsYXlpbmc6IGJvb2xlYW4sXG4gIHBsYXlzSW5saW5lPzogYm9vbGVhbixcbiAgcG9zdGVyPzogc3RyaW5nLFxuICBwcmVsb2FkOiAnYXV0bycgfCAnbWV0YWRhdGEnIHwgJ25vbmUnLFxuICBzcmM6IFNvdXJjZSxcbiAgdm9sdW1lOiBudW1iZXIsXG58fTtcblxudHlwZSBTdGF0ZSA9IHt8XG4gIGN1cnJlbnRUaW1lOiBudW1iZXIsXG4gIGR1cmF0aW9uOiBudW1iZXIsXG4gIGZ1bGxzY3JlZW46IGJvb2xlYW4sXG58fTtcblxuLy8gRm9yIG1vcmUgaW5mb3JtYXRpb24gb24gZnVsbHNjcmVlbiBhbmQgdmVuZG9yIHByZWZpeGVzIHNlZVxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0Z1bGxzY3JlZW5fQVBJXG5cbmNvbnN0IHJlcXVlc3RGdWxsc2NyZWVuID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG4gIGlmIChlbGVtZW50LnJlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgZWxlbWVudC5yZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgIC8vICRGbG93SXNzdWUgLSB2ZW5kb3IgcHJlZml4IG1pc3NpbmcgZnJvbSBGbG93XG4gIH0gZWxzZSBpZiAoZWxlbWVudC53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgIC8vICRGbG93SXNzdWUgLSB2ZW5kb3IgcHJlZml4IG1pc3NpbmcgZnJvbSBGbG93XG4gICAgZWxlbWVudC53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgIC8vICRGbG93SXNzdWUgLSB2ZW5kb3IgcHJlZml4IG1pc3NpbmcgZnJvbSBGbG93XG4gIH0gZWxzZSBpZiAoZWxlbWVudC5tb3pSZXF1ZXN0RnVsbFNjcmVlbikge1xuICAgIC8vICRGbG93SXNzdWUgLSB2ZW5kb3IgcHJlZml4IG1pc3NpbmcgZnJvbSBGbG93XG4gICAgZWxlbWVudC5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpO1xuICAgIC8vICRGbG93SXNzdWUgLSB2ZW5kb3IgcHJlZml4IG1pc3NpbmcgZnJvbSBGbG93XG4gIH0gZWxzZSBpZiAoZWxlbWVudC5tc1JlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgLy8gJEZsb3dJc3N1ZSAtIHZlbmRvciBwcmVmaXggbWlzc2luZyBmcm9tIEZsb3dcbiAgICBlbGVtZW50Lm1zUmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgfVxufTtcblxuY29uc3QgZXhpdEZ1bGxzY3JlZW4gPSAoKSA9PiB7XG4gIC8vICRGbG93SXNzdWUgLSB2ZW5kb3IgcHJlZml4IG1pc3NpbmcgZnJvbSBGbG93XG4gIGlmIChkb2N1bWVudC5leGl0RnVsbHNjcmVlbikge1xuICAgIC8vICRGbG93SXNzdWUgLSB2ZW5kb3IgcHJlZml4IG1pc3NpbmcgZnJvbSBGbG93XG4gICAgZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAvLyAkRmxvd0lzc3VlIC0gdmVuZG9yIHByZWZpeCBtaXNzaW5nIGZyb20gRmxvd1xuICB9IGVsc2UgaWYgKGRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKSB7XG4gICAgLy8gJEZsb3dJc3N1ZSAtIHZlbmRvciBwcmVmaXggbWlzc2luZyBmcm9tIEZsb3dcbiAgICBkb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbigpO1xuICAgIC8vICRGbG93SXNzdWUgLSB2ZW5kb3IgcHJlZml4IG1pc3NpbmcgZnJvbSBGbG93XG4gIH0gZWxzZSBpZiAoZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbikge1xuICAgIC8vICRGbG93SXNzdWUgLSB2ZW5kb3IgcHJlZml4IG1pc3NpbmcgZnJvbSBGbG93XG4gICAgZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbigpO1xuICAgIC8vICRGbG93SXNzdWUgLSB2ZW5kb3IgcHJlZml4IG1pc3NpbmcgZnJvbSBGbG93XG4gIH0gZWxzZSBpZiAoZG9jdW1lbnQubXNFeGl0RnVsbHNjcmVlbikge1xuICAgIC8vICRGbG93SXNzdWUgLSB2ZW5kb3IgcHJlZml4IG1pc3NpbmcgZnJvbSBGbG93XG4gICAgZG9jdW1lbnQubXNFeGl0RnVsbHNjcmVlbigpO1xuICB9XG59O1xuXG4vLyBOb3JtYWxseSBkb2N1bWVudC5mdWxsc2NyZWVuIHN1ZmZpY2VzIGhlcmUgYXMgYSBmbGFnLCBidXQgSUUxMSBkb2VzIG5vdFxuLy8gaGF2ZSBhIHZlbmRvciBzcGVjaWZpYyB2ZXJzaW9uIHNvIHdlIG11c3QgaW5zdGVhZCB1c2UgdGhlIGFjdHVhbCBlbGVtZW50XG5jb25zdCBpc0Z1bGxzY3JlZW4gPSAoKSA9PlxuICAvLyAkRmxvd0lzc3VlIC0gdmVuZG9yIHByZWZpeCBtaXNzaW5nIGZyb20gRmxvd1xuICBkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCB8fFxuICAvLyAkRmxvd0lzc3VlIC0gdmVuZG9yIHByZWZpeCBtaXNzaW5nIGZyb20gRmxvd1xuICBkb2N1bWVudC53ZWJraXRGdWxsc2NyZWVuRWxlbWVudCB8fFxuICAvLyAkRmxvd0lzc3VlIC0gdmVuZG9yIHByZWZpeCBtaXNzaW5nIGZyb20gRmxvd1xuICBkb2N1bWVudC5tb3pGdWxsU2NyZWVuRWxlbWVudCB8fFxuICAvLyAkRmxvd0lzc3VlIC0gdmVuZG9yIHByZWZpeCBtaXNzaW5nIGZyb20gRmxvd1xuICBkb2N1bWVudC5tc0Z1bGxzY3JlZW5FbGVtZW50O1xuXG5jb25zdCBhZGRGdWxsc2NyZWVuRXZlbnRMaXN0ZW5lciA9IChsaXN0ZW5lcjogRXZlbnRMaXN0ZW5lcikgPT4ge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmdWxsc2NyZWVuY2hhbmdlJywgbGlzdGVuZXIpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd3ZWJraXRmdWxsc2NyZWVuY2hhbmdlJywgbGlzdGVuZXIpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3pmdWxsc2NyZWVuY2hhbmdlJywgbGlzdGVuZXIpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdNU0Z1bGxzY3JlZW5DaGFuZ2UnLCBsaXN0ZW5lcik7XG59O1xuXG5jb25zdCByZW1vdmVGdWxsc2NyZWVuRXZlbnRMaXN0ZW5lciA9IChsaXN0ZW5lcjogRXZlbnRMaXN0ZW5lcikgPT4ge1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmdWxsc2NyZWVuY2hhbmdlJywgbGlzdGVuZXIpO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd3ZWJraXRmdWxsc2NyZWVuY2hhbmdlJywgbGlzdGVuZXIpO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3pmdWxsc2NyZWVuY2hhbmdlJywgbGlzdGVuZXIpO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdNU0Z1bGxzY3JlZW5DaGFuZ2UnLCBsaXN0ZW5lcik7XG59O1xuXG5jb25zdCBpc05ld1NvdXJjZSA9IChvbGRTb3VyY2U6IFNvdXJjZSwgbmV3U291cmNlOiBTb3VyY2UpOiBib29sZWFuID0+IHtcbiAgaWYgKHR5cGVvZiBvbGRTb3VyY2UgIT09IHR5cGVvZiBuZXdTb3VyY2UpIHtcbiAgICAvLyBJZiB0aGUgc291cmNlIHR5cGUgY2hhbmdlZCBmcm9tIHN0cmluZyB0byBBcnJheVxuICAgIC8vIG9yIHZpY2UgdmVyc2EsIHdlIGhhdmUgYSBuZXcgc291cmNlXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkobmV3U291cmNlKSkge1xuICAgIGlmIChvbGRTb3VyY2UubGVuZ3RoICE9PSBuZXdTb3VyY2UubGVuZ3RoKSB7XG4gICAgICAvLyBJZiB0aGUgc291cmNlcyBhcmUgYm90aCBhbiBBcnJheSwgYW5kIHRoZSBsZW5ndGhzXG4gICAgICAvLyBkbyBub3QgbWF0Y2ggd2UgZXZhbHVhdGUgYXMgYSBuZXcgc291cmNlXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLy8gSWYgdGhlIHNvdXJjZXMgYXJlIGJvdGggYW4gQXJyYXkgYW5kIHRoZSBzYW1lIGxlbmd0aCxcbiAgICAvLyB2ZXJpZnkgZXZlcnkgZWxlbWVudCBzdGF5ZWQgdGhlIHNhbWVcbiAgICByZXR1cm4gbmV3U291cmNlLnNvbWUoXG4gICAgICAoc291cmNlLCBpbmRleCkgPT5cbiAgICAgICAgIUFycmF5LmlzQXJyYXkob2xkU291cmNlKSB8fFxuICAgICAgICBzb3VyY2UudHlwZSAhPT0gb2xkU291cmNlW2luZGV4XS50eXBlIHx8XG4gICAgICAgIHNvdXJjZS5zcmMgIT09IG9sZFNvdXJjZVtpbmRleF0uc3JjXG4gICAgKTtcbiAgfVxuICAvLyBJZiB0aGUgc291cmNlcyBhcmUgYm90aCBhIHN0cmluZywgc2ltcGx5IGNvbXBhcmVcbiAgLy8gdGhlIG5ldyB3aXRoIHRoZSBvbGRcbiAgcmV0dXJuIG5ld1NvdXJjZSAhPT0gb2xkU291cmNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlkZW8gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGFjY2Vzc2liaWxpdHlNYXhpbWl6ZUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFjY2Vzc2liaWxpdHlNaW5pbWl6ZUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFjY2Vzc2liaWxpdHlNdXRlTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYWNjZXNzaWJpbGl0eVBhdXNlTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYWNjZXNzaWJpbGl0eVBsYXlMYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhY2Nlc3NpYmlsaXR5VW5tdXRlTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYXNwZWN0UmF0aW86IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBjYXB0aW9uczogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGNvbnRyb2xzOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBsb29wOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvbkR1cmF0aW9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkVuZGVkOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkZ1bGxzY3JlZW5DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uTG9hZGVkQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblBsYXk6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uUGF1c2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uUmVhZHk6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2VlazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25UaW1lQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblZvbHVtZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcGxheWJhY2tSYXRlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHBsYXlpbmc6IFByb3BUeXBlcy5ib29sLFxuICAgIHBsYXlzSW5saW5lOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwb3N0ZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcHJlbG9hZDogUHJvcFR5cGVzLm9uZU9mKFsnYXV0bycsICdtZXRhZGF0YScsICdub25lJ10pLFxuICAgIHNyYzogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKFsndmlkZW8vbTN1OCcsICd2aWRlby9tcDQnLCAndmlkZW8vb2dnJ10pXG4gICAgICAgICAgICAuaXNSZXF1aXJlZCxcbiAgICAgICAgICBzcmM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgICB2b2x1bWU6IFByb3BUeXBlcy5udW1iZXIsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBwbGF5YmFja1JhdGU6IDEsXG4gICAgcGxheWluZzogZmFsc2UsXG4gICAgcHJlbG9hZDogJ2F1dG8nLFxuICAgIHZvbHVtZTogMSxcbiAgfTtcblxuICBzdGF0ZSA9IHtcbiAgICBjdXJyZW50VGltZTogMCxcbiAgICBkdXJhdGlvbjogMCxcbiAgICBmdWxsc2NyZWVuOiBmYWxzZSxcbiAgfTtcblxuICAvKipcbiAgICogUmVhY3QgbGlmZWN5Y2xlIGhvb2tzIHBlcnRpbmVudCB0byBWaWRlb1xuICAgKi9cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHBsYXliYWNrUmF0ZSwgcGxheWluZywgdm9sdW1lIH0gPSB0aGlzLnByb3BzO1xuICAgIC8vIFNldCB1cCBldmVudCBsaXN0ZW5lcnMgdG8gY2F0Y2ggYmFja2Rvb3JzIGluIGZ1bGxzY3JlZW5cbiAgICAvLyBjaGFuZ2VzIHN1Y2ggYXMgdXNpbmcgdGhlIEVTQyBrZXkgdG8gZXhpdFxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBhZGRGdWxsc2NyZWVuRXZlbnRMaXN0ZW5lcih0aGlzLmhhbmRsZUZ1bGxzY3JlZW5DaGFuZ2UpO1xuICAgIH1cbiAgICAvLyBMb2FkIHRoZSB2aWRlbyB0byBoeWRyYXRlIHRoZSBET00gYWZ0ZXIgYSBzZXJ2ZXIgcmVuZGVyXG4gICAgdGhpcy5sb2FkKCk7XG4gICAgLy8gU2V0IHRoZSBpbml0aWFsIHZvbHVtZVxuICAgIHRoaXMuc2V0Vm9sdW1lKHZvbHVtZSk7XG4gICAgLy8gU2V0IHRoZSBpbml0aWFsIHBsYXliYWNrIHJhdGVcbiAgICB0aGlzLnNldFBsYXliYWNrUmF0ZShwbGF5YmFja1JhdGUpO1xuICAgIC8vIFNpbXVsYXRlIGFuIGF1dG9wbGF5IGVmZmVjdCBpZiB0aGUgY29tcG9uZW50XG4gICAgaWYgKHBsYXlpbmcpIHtcbiAgICAgIHRoaXMucGxheSgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IFByb3BzKSB7XG4gICAgLy8gSWYgdGhlIHZpZGVvIHNvdXJjZSBjaGFuZ2VkLCByZWxvYWQgdGhlIHZpZGVvXG4gICAgaWYgKGlzTmV3U291cmNlKHByZXZQcm9wcy5zcmMsIHRoaXMucHJvcHMuc3JjKSkge1xuICAgICAgdGhpcy5sb2FkKCk7XG4gICAgfVxuICAgIC8vIElmIHRoZSB2b2x1bWUgY2hhbmdlZCwgc2V0IHRoZSBuZXcgdm9sdW1lXG4gICAgaWYgKHByZXZQcm9wcy52b2x1bWUgIT09IHRoaXMucHJvcHMudm9sdW1lKSB7XG4gICAgICB0aGlzLnNldFZvbHVtZSh0aGlzLnByb3BzLnZvbHVtZSk7XG4gICAgfVxuICAgIC8vIElmIHRoZSBwbGF5YmFjayByYXRlIGNoYW5nZWQsIHNldCB0aGUgbmV3IHJhdGVcbiAgICBpZiAocHJldlByb3BzLnBsYXliYWNrUmF0ZSAhPT0gdGhpcy5wcm9wcy5wbGF5YmFja1JhdGUpIHtcbiAgICAgIHRoaXMuc2V0UGxheWJhY2tSYXRlKHRoaXMucHJvcHMucGxheWJhY2tSYXRlKTtcbiAgICB9XG4gICAgLy8gSWYgdGhlIHBsYXliYWNrIGNoYW5nZWQsIHBsYXkgb3IgcGF1c2UgdGhlIHZpZGVvXG4gICAgaWYgKHByZXZQcm9wcy5wbGF5aW5nICE9PSB0aGlzLnByb3BzLnBsYXlpbmcpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnBsYXlpbmcpIHtcbiAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgcmVtb3ZlRnVsbHNjcmVlbkV2ZW50TGlzdGVuZXIodGhpcy5oYW5kbGVGdWxsc2NyZWVuQ2hhbmdlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBET00gcmVmZXJlbmNlIGhvdXNla2VlcGluZyB0aGF0IGlzIG5lZWRlZCBmb3IgZnVuY3Rpb25hbGl0eVxuICAgKi9cblxuICAvLyBUaGUgcGxheWVyIGVsZW1lbnQgZW5jYXBzdWxhdGVzIHRoZSBhY3R1YWwgdmlkZW8gRE9NXG4gIC8vIGVsZW1lbnQgYXMgd2VsbCBhcyB0aGUgY29udHJvbHMgdG8gYnJpbmcgYm90aCBmdWxsc2NyZWVuXG4gIHNldFBsYXllclJlZiA9IChyZWY6ID9IVE1MRGl2RWxlbWVudCkgPT4ge1xuICAgIHRoaXMucGxheWVyID0gcmVmO1xuICB9O1xuXG4gIC8vIFRoZSBhY3R1YWwgcmVmZXJlbmNlIHRvIHRoZSB2aWRlbyBIVE1MIERPTSBlbGVtZW50XG4gIHNldFZpZGVvUmVmID0gKHJlZjogP0hUTUxWaWRlb0VsZW1lbnQpID0+IHtcbiAgICB0aGlzLnZpZGVvID0gcmVmO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGdW5jdGlvbnMgdGhhdCBkaXJlY3RseSBpbnRlcmFjdCB3aXRoIHRoZSBIVE1MIHZpZGVvIGVsZW1lbnRcbiAgICovXG5cbiAgLy8gU2V0IHRoZSB2aWRlbyB0byB0aGUgZGVzaXJlZCBwbGF5YmFjayByYXRlOiAxIChub3JtYWwpXG4gIHNldFBsYXliYWNrUmF0ZSA9IChwbGF5YmFja1JhdGU6IG51bWJlcikgPT4ge1xuICAgIGlmICh0aGlzLnZpZGVvKSB7XG4gICAgICB0aGlzLnZpZGVvLnBsYXliYWNrUmF0ZSA9IHBsYXliYWNrUmF0ZTtcbiAgICB9XG4gIH07XG5cbiAgLy8gU2V0IHRoZSB2aWRlbyB0byB0aGUgZGVzaXJlZCB2b2x1bWU6IDAgKG11dGVkKSAtPiAxIChtYXgpXG4gIHNldFZvbHVtZSA9ICh2b2x1bWU6IG51bWJlcikgPT4ge1xuICAgIGlmICh0aGlzLnZpZGVvKSB7XG4gICAgICB0aGlzLnZpZGVvLnZvbHVtZSA9IHZvbHVtZTtcbiAgICB9XG4gIH07XG5cbiAgLy8gQ2hhbmdlIHRoZSB2aWRlbyBzb3VyY2UgYW5kIHJlLWxvYWQgdGhlIHZpZGVvXG4gIGxvYWQgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMudmlkZW8pIHtcbiAgICAgIHRoaXMudmlkZW8ubG9hZCgpO1xuICAgIH1cbiAgfTtcblxuICAvLyBQYXVzZSB0aGUgdmlkZW9cbiAgcGF1c2UgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMudmlkZW8pIHtcbiAgICAgIHRoaXMudmlkZW8ucGF1c2UoKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gUGxheSB0aGUgdmlkZW9cbiAgcGxheSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy52aWRlbykge1xuICAgICAgdGhpcy52aWRlby5wbGF5KCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFNlZWsgdGhlIHZpZGVvIHRvIHRoZSBkZXNpcmVkIHRpbWVcbiAgc2VlayA9ICh0aW1lOiBudW1iZXIpID0+IHtcbiAgICBpZiAodGhpcy52aWRlbykge1xuICAgICAgdGhpcy52aWRlby5jdXJyZW50VGltZSA9IHRpbWU7XG4gICAgfVxuICB9O1xuXG4gIC8vIEVudGVyL2V4aXQgZnVsbHNjcmVlbiB2aWRlbyBwbGF5ZXIgbW9kZVxuICB0b2dnbGVGdWxsc2NyZWVuID0gKCkgPT4ge1xuICAgIGlmIChpc0Z1bGxzY3JlZW4oKSkge1xuICAgICAgZXhpdEZ1bGxzY3JlZW4oKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucGxheWVyKSB7XG4gICAgICByZXF1ZXN0RnVsbHNjcmVlbih0aGlzLnBsYXllcik7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVycyBmb3IgdmFyaW91cyBtZWRpYSBldmVudHMgb24gdGhlIHZpZGVvXG4gICAqL1xuXG4gIC8vIFNlbnQgd2hlbiBlbm91Z2ggZGF0YSBpcyBhdmFpbGFibGUgdGhhdCB0aGUgbWVkaWEgY2FuIGJlIHBsYXllZFxuICBoYW5kbGVDYW5QbGF5ID0gKGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MVmlkZW9FbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgb25SZWFkeSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChvblJlYWR5KSB7XG4gICAgICBvblJlYWR5KHsgZXZlbnQgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFRoZSBtZXRhZGF0YSBoYXMgbG9hZGVkIG9yIGNoYW5nZWQsIGluZGljYXRpbmcgYSBjaGFuZ2UgaW5cbiAgLy8gZHVyYXRpb24gb2YgdGhlIG1lZGlhXG4gIGhhbmRsZUR1cmF0aW9uQ2hhbmdlID0gKGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MVmlkZW9FbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgb25EdXJhdGlvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBkdXJhdGlvbiA9ICh0aGlzLnZpZGVvICYmIHRoaXMudmlkZW8uZHVyYXRpb24pIHx8IDA7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGR1cmF0aW9uIH0pO1xuXG4gICAgaWYgKG9uRHVyYXRpb25DaGFuZ2UpIHtcbiAgICAgIG9uRHVyYXRpb25DaGFuZ2UoeyBldmVudCwgZHVyYXRpb24gfSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFNlbnQgd2hlbiBwbGF5YmFjayBjb21wbGV0ZXMuXG4gIGhhbmRsZUVuZGVkID0gKGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MVmlkZW9FbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgb25FbmRlZCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChvbkVuZGVkKSB7XG4gICAgICBvbkVuZGVkKHsgZXZlbnQgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFNlbnQgd2hlbiB0aGUgdmlkZW8gaXMgc3dpdGNoZWQgdG8vb3V0LW9mIGZ1bGxzY3JlZW4gbW9kZVxuICBoYW5kbGVGdWxsc2NyZWVuQ2hhbmdlID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgIGNvbnN0IHsgb25GdWxsc2NyZWVuQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGZ1bGxzY3JlZW4gPSAhIWlzRnVsbHNjcmVlbigpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmdWxsc2NyZWVuIH0pO1xuXG4gICAgaWYgKG9uRnVsbHNjcmVlbkNoYW5nZSkge1xuICAgICAgb25GdWxsc2NyZWVuQ2hhbmdlKHsgZXZlbnQsIGZ1bGxzY3JlZW4gfSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFNlbnQgd2hlbiBwbGF5YmFjayBvZiB0aGUgbWVkaWEgc3RhcnRzIGFmdGVyIGhhdmluZyBiZWVuIHBhdXNlZC5cbiAgaGFuZGxlUGxheSA9IChldmVudDogU3ludGhldGljRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyBvblBsYXkgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAob25QbGF5KSB7XG4gICAgICBvblBsYXkoeyBldmVudCB9KTtcbiAgICB9XG4gIH07XG5cbiAgLy8gU2VudCB3aGVuIHBsYXliYWNrIGlzIHBhdXNlZC5cbiAgaGFuZGxlUGF1c2UgPSAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgb25QYXVzZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChvblBhdXNlKSB7XG4gICAgICBvblBhdXNlKHsgZXZlbnQgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFNlbnQgcGVyaW9kaWNhbGx5IHRvIGluZm9ybSBpbnRlcmVzdGVkIHBhcnRpZXMgb2YgcHJvZ3Jlc3MgZG93bmxvYWRpbmcgdGhlIG1lZGlhXG4gIGhhbmRsZVByb2dyZXNzID0gKGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MVmlkZW9FbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgb25Mb2FkZWRDaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBidWZmZXJlZCB9ID0gdGhpcy52aWRlbyB8fCB7fTtcbiAgICBjb25zdCBsb2FkZWQgPVxuICAgICAgYnVmZmVyZWQgJiYgYnVmZmVyZWQubGVuZ3RoID4gMCA/IGJ1ZmZlcmVkLmVuZChidWZmZXJlZC5sZW5ndGggLSAxKSA6IDA7XG5cbiAgICBpZiAob25Mb2FkZWRDaGFuZ2UpIHtcbiAgICAgIG9uTG9hZGVkQ2hhbmdlKHsgZXZlbnQsIGxvYWRlZCB9KTtcbiAgICB9XG4gIH07XG5cbiAgLy8gU2VudCB3aGVuIGEgc2VlayBvcGVyYXRpb24gY29tcGxldGVzLlxuICBoYW5kbGVTZWVrID0gKGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MVmlkZW9FbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgb25TZWVrIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKG9uU2Vlaykge1xuICAgICAgb25TZWVrKHsgZXZlbnQgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFRoZSB0aW1lIGluZGljYXRlZCBieSB0aGUgZWxlbWVudCdzIGN1cnJlbnRUaW1lIGF0dHJpYnV0ZSBoYXMgY2hhbmdlZFxuICBoYW5kbGVUaW1lVXBkYXRlID0gKGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MVmlkZW9FbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgb25UaW1lQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gKHRoaXMudmlkZW8gJiYgdGhpcy52aWRlby5jdXJyZW50VGltZSkgfHwgMDtcbiAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudFRpbWUgfSk7XG5cbiAgICBpZiAob25UaW1lQ2hhbmdlKSB7XG4gICAgICBvblRpbWVDaGFuZ2UoeyBldmVudCwgdGltZTogY3VycmVudFRpbWUgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFNlbnQgd2hlbiB0aGUgYXVkaW8gdm9sdW1lIGNoYW5nZXNcbiAgaGFuZGxlVm9sdW1lQ2hhbmdlID0gKGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IG9uVm9sdW1lQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG11dGVkID0gKHRoaXMudmlkZW8gJiYgdGhpcy52aWRlby5tdXRlZCkgfHwgZmFsc2U7XG5cbiAgICBpZiAob25Wb2x1bWVDaGFuZ2UpIHtcbiAgICAgIG9uVm9sdW1lQ2hhbmdlKHsgZXZlbnQsIHZvbHVtZTogbXV0ZWQgPyAxIDogMCB9KTtcbiAgICB9XG4gIH07XG5cbiAgdmlkZW86ID9IVE1MVmlkZW9FbGVtZW50O1xuXG4gIHBsYXllcjogP0hUTUxEaXZFbGVtZW50O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBhc3BlY3RSYXRpbyxcbiAgICAgIGNhcHRpb25zLFxuICAgICAgbG9vcCxcbiAgICAgIHBsYXlpbmcsXG4gICAgICBwbGF5c0lubGluZSxcbiAgICAgIHBvc3RlcixcbiAgICAgIHByZWxvYWQsXG4gICAgICBzcmMsXG4gICAgICB2b2x1bWUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBjdXJyZW50VGltZSwgZHVyYXRpb24sIGZ1bGxzY3JlZW4gfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCBwYWRkaW5nQm90dG9tID0gKGZ1bGxzY3JlZW4gJiYgJzAnKSB8fCBgJHsoMSAvIGFzcGVjdFJhdGlvKSAqIDEwMH0lYDtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj17dGhpcy5zZXRQbGF5ZXJSZWZ9XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnBsYXllcn1cbiAgICAgICAgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbSwgaGVpZ2h0OiBmdWxsc2NyZWVuID8gJzEwMCUnIDogMCB9fVxuICAgICAgPlxuICAgICAgICA8dmlkZW9cbiAgICAgICAgICBhdXRvUGxheT17cGxheWluZ31cbiAgICAgICAgICBsb29wPXtsb29wfVxuICAgICAgICAgIG11dGVkPXt2b2x1bWUgPT09IDB9XG4gICAgICAgICAgcGxheXNJbmxpbmU9e3BsYXlzSW5saW5lfVxuICAgICAgICAgIHBvc3Rlcj17cG9zdGVyfVxuICAgICAgICAgIHByZWxvYWQ9e3ByZWxvYWR9XG4gICAgICAgICAgc3JjPXt0eXBlb2Ygc3JjID09PSAnc3RyaW5nJyA/IHNyYyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICByZWY9e3RoaXMuc2V0VmlkZW9SZWZ9XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudmlkZW99XG4gICAgICAgICAgb25DYW5QbGF5PXt0aGlzLmhhbmRsZUNhblBsYXl9XG4gICAgICAgICAgb25EdXJhdGlvbkNoYW5nZT17dGhpcy5oYW5kbGVEdXJhdGlvbkNoYW5nZX1cbiAgICAgICAgICBvbkVuZGVkPXt0aGlzLmhhbmRsZUVuZGVkfVxuICAgICAgICAgIG9uU2Vla2VkPXt0aGlzLmhhbmRsZVNlZWt9XG4gICAgICAgICAgb25UaW1lVXBkYXRlPXt0aGlzLmhhbmRsZVRpbWVVcGRhdGV9XG4gICAgICAgICAgb25Qcm9ncmVzcz17dGhpcy5oYW5kbGVQcm9ncmVzc31cbiAgICAgICAgPlxuICAgICAgICAgIHtBcnJheS5pc0FycmF5KHNyYykgJiZcbiAgICAgICAgICAgIHNyYy5tYXAoc291cmNlID0+IChcbiAgICAgICAgICAgICAgPHNvdXJjZSBrZXk9e3NvdXJjZS5zcmN9IHNyYz17c291cmNlLnNyY30gdHlwZT17c291cmNlLnR5cGV9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8dHJhY2sga2luZD1cImNhcHRpb25zXCIgc3JjPXtjYXB0aW9uc30gLz5cbiAgICAgICAgPC92aWRlbz5cbiAgICAgICAgey8qIE5lZWQgdG8gdXNlIGZ1bGwgcGF0aCBmb3IgdGhlc2UgcHJvcHMgc28gRmxvdyBjYW4gaW5mZXIgY29ycmVjdCBzdWJ0eXBlICovfVxuICAgICAgICB7dGhpcy5wcm9wcy5jb250cm9scyAmJiAoXG4gICAgICAgICAgPFZpZGVvQ29udHJvbHNcbiAgICAgICAgICAgIGFjY2Vzc2liaWxpdHlNYXhpbWl6ZUxhYmVsPXt0aGlzLnByb3BzLmFjY2Vzc2liaWxpdHlNYXhpbWl6ZUxhYmVsfVxuICAgICAgICAgICAgYWNjZXNzaWJpbGl0eU1pbmltaXplTGFiZWw9e3RoaXMucHJvcHMuYWNjZXNzaWJpbGl0eU1pbmltaXplTGFiZWx9XG4gICAgICAgICAgICBhY2Nlc3NpYmlsaXR5TXV0ZUxhYmVsPXt0aGlzLnByb3BzLmFjY2Vzc2liaWxpdHlNdXRlTGFiZWx9XG4gICAgICAgICAgICBhY2Nlc3NpYmlsaXR5UGF1c2VMYWJlbD17dGhpcy5wcm9wcy5hY2Nlc3NpYmlsaXR5UGF1c2VMYWJlbH1cbiAgICAgICAgICAgIGFjY2Vzc2liaWxpdHlQbGF5TGFiZWw9e3RoaXMucHJvcHMuYWNjZXNzaWJpbGl0eVBsYXlMYWJlbH1cbiAgICAgICAgICAgIGFjY2Vzc2liaWxpdHlVbm11dGVMYWJlbD17dGhpcy5wcm9wcy5hY2Nlc3NpYmlsaXR5VW5tdXRlTGFiZWx9XG4gICAgICAgICAgICBjdXJyZW50VGltZT17Y3VycmVudFRpbWV9XG4gICAgICAgICAgICBkdXJhdGlvbj17ZHVyYXRpb259XG4gICAgICAgICAgICBmdWxsc2NyZWVuPXtmdWxsc2NyZWVufVxuICAgICAgICAgICAgb25QbGF5PXt0aGlzLmhhbmRsZVBsYXl9XG4gICAgICAgICAgICBvblBhdXNlPXt0aGlzLmhhbmRsZVBhdXNlfVxuICAgICAgICAgICAgb25GdWxsc2NyZWVuQ2hhbmdlPXt0aGlzLnRvZ2dsZUZ1bGxzY3JlZW59XG4gICAgICAgICAgICBvblZvbHVtZUNoYW5nZT17dGhpcy5oYW5kbGVWb2x1bWVDaGFuZ2V9XG4gICAgICAgICAgICBwbGF5aW5nPXtwbGF5aW5nfVxuICAgICAgICAgICAgc2Vlaz17dGhpcy5zZWVrfVxuICAgICAgICAgICAgdm9sdW1lPXt2b2x1bWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJpZGVudGl0eSIsIlNldCIsImZyb21DbGFzc05hbWUiLCJjbGFzc05hbWVzIiwiZnJvbUlubGluZVN0eWxlIiwiaW5saW5lU3R5bGUiLCJjb25jYXQiLCJzdHlsZXMiLCJyZWR1Y2UiLCJjbGFzc05hbWVBIiwiY2xhc3NOYW1lIiwiaW5saW5lU3R5bGVBIiwiY2xhc3NOYW1lQiIsImlubGluZVN0eWxlQiIsIm1hcENsYXNzTmFtZSIsImZuIiwiQXJyYXkiLCJmcm9tIiwibWFwIiwidG9Qcm9wcyIsInByb3BzIiwic2l6ZSIsInNvcnQiLCJqb2luIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInN0eWxlIiwidG9nZ2xlIiwidmFsIiwibWFwcGluZyIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInJhbmdlIiwic2NhbGUiLCJuIiwiTWF0aCIsImFicyIsInJhbmdlV2l0aG91dFplcm8iLCJiaW5kIiwic2NvcGUiLCJuYW1lIiwidW5pb24iLCJmbnMiLCJtYXJnaW5TdGFydCIsIndoaXRlc3BhY2UiLCJtYXJnaW5FbmQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJtYXJnaW4iLCJzbU1hcmdpblRvcCIsInNtTWFyZ2luUmlnaHQiLCJzbU1hcmdpbkJvdHRvbSIsInNtTWFyZ2luTGVmdCIsInNtTWFyZ2luIiwibWRNYXJnaW5Ub3AiLCJtZE1hcmdpblJpZ2h0IiwibWRNYXJnaW5Cb3R0b20iLCJtZE1hcmdpbkxlZnQiLCJtZE1hcmdpbiIsImxnTWFyZ2luVG9wIiwibGdNYXJnaW5SaWdodCIsImxnTWFyZ2luQm90dG9tIiwibGdNYXJnaW5MZWZ0IiwibGdNYXJnaW4iLCJwYWRkaW5nWCIsInBhZGRpbmdZIiwicGFkZGluZyIsInNtUGFkZGluZ1giLCJzbVBhZGRpbmdZIiwic21QYWRkaW5nIiwibWRQYWRkaW5nWCIsIm1kUGFkZGluZ1kiLCJtZFBhZGRpbmciLCJsZ1BhZGRpbmdYIiwibGdQYWRkaW5nWSIsImxnUGFkZGluZyIsInByZWZpeCIsInByZSIsImRpc3BsYXkiLCJ2YWx1ZSIsImNvbHVtbiIsImZvcm1hdEludEJvaW50IiwieCIsInRvU3RyaW5nIiwicHJvcFRvRm4iLCJjIiwieHNEaXNwbGF5Tm9uZSIsInhzRGlzcGxheUZsZXgiLCJ4c0Rpc3BsYXlCbG9jayIsInhzRGlzcGxheUlubGluZUJsb2NrIiwieHNEaXNwbGF5VmlzdWFsbHlIaWRkZW4iLCJ4c0RpcmVjdGlvblJvdyIsInhzRGlyZWN0aW9uQ29sdW1uIiwic21EaXNwbGF5Tm9uZSIsInNtRGlzcGxheUZsZXgiLCJzbURpc3BsYXlCbG9jayIsInNtRGlzcGxheUlubGluZUJsb2NrIiwic21EaXNwbGF5VmlzdWFsbHlIaWRkZW4iLCJzbURpcmVjdGlvblJvdyIsInNtRGlyZWN0aW9uQ29sdW1uIiwibWREaXNwbGF5Tm9uZSIsIm1kRGlzcGxheUZsZXgiLCJtZERpc3BsYXlCbG9jayIsIm1kRGlzcGxheUlubGluZUJsb2NrIiwibWREaXNwbGF5VmlzdWFsbHlIaWRkZW4iLCJtZERpcmVjdGlvblJvdyIsIm1kRGlyZWN0aW9uQ29sdW1uIiwibGdEaXNwbGF5Tm9uZSIsImxnRGlzcGxheUZsZXgiLCJsZ0Rpc3BsYXlCbG9jayIsImxnRGlzcGxheUlubGluZUJsb2NrIiwibGdEaXNwbGF5VmlzdWFsbHlIaWRkZW4iLCJsZ0RpcmVjdGlvblJvdyIsImxnRGlyZWN0aW9uQ29sdW1uIiwibGF5b3V0IiwiY29udGVudFN0YXJ0IiwiY29udGVudEVuZCIsImNvbnRlbnRDZW50ZXIiLCJjb250ZW50QmV0d2VlbiIsImNvbnRlbnRBcm91bmQiLCJpdGVtc1N0YXJ0IiwiaXRlbXNFbmQiLCJpdGVtc0NlbnRlciIsIml0ZW1zQmFzZWxpbmUiLCJzZWxmU3RhcnQiLCJzZWxmRW5kIiwic2VsZkNlbnRlciIsInNlbGZCYXNlbGluZSIsInNlbGZTdHJldGNoIiwiYm90dG9tMCIsImNvbG9ycyIsImJsdWVCZyIsImRhcmtHcmF5QmciLCJwaW5lQmciLCJncmF5QmciLCJyZWRCZyIsIm9saXZlQmciLCJsaWdodEdyYXlCZyIsIndoaXRlQmciLCJvcmFuZ2VCZyIsImdyZWVuQmciLCJuYXZ5QmciLCJtaWRuaWdodEJnIiwicHVycGxlQmciLCJvcmNoaWRCZyIsImVnZ3BsYW50QmciLCJtYXJvb25CZyIsIndhdGVybWVsb25CZyIsImxpZ2h0V2FzaEJnIiwiZGFya1dhc2hCZyIsImZpdCIsImZsZXhHcm93IiwiZmxleE5vbmUiLCJoZWlnaHQiLCJqdXN0aWZ5RW5kIiwianVzdGlmeUNlbnRlciIsImp1c3RpZnlCZXR3ZWVuIiwianVzdGlmeUFyb3VuZCIsImxlZnQwIiwibXQiLCJtYiIsIm1sIiwibXIiLCJ3aGl0ZXNwYWNlTGVnYWN5IiwidG9wIiwiYm90dG9tIiwibGVmdCIsIm1sQXV0byIsInJpZ2h0IiwibXJBdXRvIiwibWF4SGVpZ2h0IiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtaW5XaWR0aCIsIm92ZXJmbG93SGlkZGVuIiwib3ZlcmZsb3dTY3JvbGwiLCJvdmVyZmxvd0F1dG8iLCJvdmVyZmxvd1Njcm9sbFgiLCJvdmVyZmxvd1Njcm9sbFkiLCJ5IiwiYWJzb2x1dGUiLCJyZWxhdGl2ZSIsImZpeGVkIiwicmlnaHQwIiwiYm9yZGVycyIsImNpcmNsZSIsInBpbGwiLCJyb3VuZGVkIiwicm91bmRlZEJvdHRvbSIsInJvdW5kZWRMZWZ0Iiwicm91bmRlZFJpZ2h0Iiwicm91bmRlZFRvcCIsInRvcDAiLCJ3aWR0aCIsImZsZXhXcmFwIiwiX19zdHlsZSIsImNvbnRhaW5zIiwia2V5IiwiYXJyIiwiaW5kZXhPZiIsIm9taXQiLCJvYmoiLCJhY2MiLCJrIiwiQm94IiwiY2hpbGRyZW4iLCJibGFja2xpc3QiLCJzIiwiYm94IiwicHJvcCIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiLCJDb2x1bW5Qcm9wVHlwZSIsIlByb3BUeXBlcyIsIm9uZU9mIiwiTWFyZ2luUHJvcFR5cGUiLCJQYWRkaW5nUHJvcFR5cGUiLCJwcm9wVHlwZXMiLCJub2RlIiwiZXhhY3QiLCJvYmplY3QiLCJvbmVPZlR5cGUiLCJib29sIiwibnVtYmVyIiwic2hhcGUiLCJzdHJpbmciLCJhZGRDaXJjbGUiLCJhZGRQaW4iLCJhbmdsZWRQaW4iLCJhcnJvd0JhY2siLCJhcnJvd0NpcmNsZURvd24iLCJhcnJvd0NpcmNsZUZvcndhcmQiLCJhcnJvd0Rvd24iLCJhcnJvd0ZvcndhcmQiLCJhcnJvd1VwIiwiYXJyb3dVcFJpZ2h0IiwiY2FtZXJhUm9sbCIsImNoZWNrQ2lyY2xlIiwiY2lyY2xlT3V0bGluZSIsImVsbGlwc2lzQ2lyY2xlT3V0bGluZSIsImZhY2VIYXBweSIsImZhY2VTYWQiLCJmYWNlU21pbGV5IiwiZ2xvYmVDaGVja2VkIiwiZ29vZ2xlUGx1cyIsImdyYXBoQmFyIiwiaGFuZFBvaW50aW5nIiwiaGVhcnRCcm9rZW4iLCJwZXJzb25BZGQiLCJwaW5IaWRlIiwicXVlc3Rpb25NYXJrIiwic2hvcHBpbmdCYWciLCJzbWlsZXlPdXRsaW5lIiwic3BlZWNoRWxsaXBzaXMiLCJ0ZXh0QWxpZ25MZWZ0IiwidGV4dEFsaWduQ2VudGVyIiwidGV4dEFsaWduUmlnaHQiLCJ2aWV3VHlwZURlZmF1bHQiLCJ2aWV3VHlwZURlbnNlIiwidmlld1R5cGVMaXN0IiwiSWNvbk5hbWVzIiwiaWNvbnMiLCJJY29uIiwiYWNjZXNzaWJpbGl0eUxhYmVsIiwiY29sb3IiLCJpY29uIiwiaW5saW5lIiwiZGFuZ2Vyb3VzbHlTZXRTdmdQYXRoIiwiY3MiLCJjbGFzc25hbWVzIiwiaWNvbkJsb2NrIiwicGF0aCIsIl9fcGF0aCIsInVuZGVmaW5lZCIsImFyaWFIaWRkZW4iLCJpc1JlcXVpcmVkIiwic2hvdWxkU2NhbGVJbWFnZSIsIkltYWdlIiwiaGFuZGxlTG9hZCIsIm9uTG9hZCIsImhhbmRsZUVycm9yIiwib25FcnJvciIsImxvYWRJbWFnZSIsInByZXZQcm9wcyIsInNyYyIsIndpbmRvdyIsImltYWdlIiwib25sb2FkIiwib25lcnJvciIsImFsdCIsIm5hdHVyYWxIZWlnaHQiLCJuYXR1cmFsV2lkdGgiLCJzaXplcyIsInNyY1NldCIsImlzU2NhbGVkSW1hZ2UiLCJjaGlsZENvbnRlbnQiLCJpbWciLCJSZWFjdCIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJNYXNrIiwid2FzaCIsImN4IiwiU3F1YXJlIiwicGFkZGluZ0JvdHRvbSIsIkRlZmF1bHRBdmF0YXIiLCJmaXJzdEluaXRpYWwiLCJ0b1VwcGVyQ2FzZSIsInR5cG9ncmFwaHkiLCJhbnRpYWxpYXNlZCIsInNhbnNTZXJpZiIsImxlYWRpbmdTbWFsbCIsImZvbnRXZWlnaHRCb2xkIiwiQXZhdGFyIiwic3RhdGUiLCJoYW5kbGVJbWFnZUVycm9yIiwic2V0U3RhdGUiLCJpc0ltYWdlTG9hZGVkIiwib3V0bGluZSIsInZlcmlmaWVkIiwiU0laRV9TQ0FMRSIsIlRleHQiLCJhbGlnbiIsImJvbGQiLCJpdGFsaWMiLCJvdmVyZmxvdyIsInNtU2l6ZSIsIm1kU2l6ZSIsImxnU2l6ZSIsImxlYWRpbmciLCJ0cnVuY2F0ZSIsIl9fZGFuZ2Vyb3VzbHlJbmNyZWFzZUxpbmVIZWlnaHQiLCJzbVNjYWxlIiwibWRTY2FsZSIsImxnU2NhbGUiLCJibHVlIiwiZGFya0dyYXkiLCJlZ2dwbGFudCIsImdyYXkiLCJncmVlbiIsImxpZ2h0R3JheSIsIm1hcm9vbiIsIm1pZG5pZ2h0IiwibmF2eSIsIm9saXZlIiwib3JhbmdlIiwib3JjaGlkIiwicGluZSIsInB1cnBsZSIsInJlZCIsIndhdGVybWVsb24iLCJ3aGl0ZSIsImxlYWRpbmdTaG9ydCIsImxlYWRpbmdUYWxsIiwiYWxpZ25DZW50ZXIiLCJhbGlnbkp1c3RpZnkiLCJhbGlnbkxlZnQiLCJhbGlnblJpZ2h0IiwiYnJlYWtXb3JkIiwiZm9udFN0eWxlSXRhbGljIiwiZm9udFN0eWxlTm9ybWFsIiwiZm9udFdlaWdodE5vcm1hbCIsIlRhZyIsInRpdGxlIiwiQnV0dG9uIiwiYWNjZXNzaWJpbGl0eUV4cGFuZGVkIiwiYWNjZXNzaWJpbGl0eUhhc3BvcHVwIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwidGV4dCIsInR5cGUiLCJ0ZXh0Q29sb3IiLCJjbGFzc2VzIiwiYnV0dG9uIiwic20iLCJtZCIsImxnIiwic29saWQiLCJlbmFibGVkIiwiYmxvY2siLCJldmVudCIsIkNhcmQiLCJoYW5kbGVNb3VzZUVudGVyIiwib25Nb3VzZUVudGVyIiwiaG92ZXJlZCIsImhhbmRsZU1vdXNlTGVhdmUiLCJvbk1vdXNlTGVhdmUiLCJhY3RpdmUiLCJjYXJkIiwiaG92ZXIiLCJDaGVja2JveCIsImhhbmRsZUNoYW5nZSIsImNoZWNrZWQiLCJ0YXJnZXQiLCJvbkNoYW5nZSIsImhhbmRsZUNsaWNrIiwiY3VycmVudFRhcmdldCIsImhhbmRsZUJsdXIiLCJmb2N1c2VkIiwiaGFuZGxlRm9jdXMiLCJpbmRldGVybWluYXRlIiwic2V0SW5kZXRlcm1pbmF0ZSIsInByZXZpb3VzUHJvcHMiLCJpbnB1dCIsImhhc0Vycm9yIiwiaWQiLCJib3JkZXJTdHlsZSIsImJvcmRlciIsImJvcmRlckRhcmsiLCJib3JkZXJFcnJvciIsImlucHV0RW5hYmxlZCIsImlucHV0U20iLCJpbnB1dE1kIiwiZWwiLCJjaGVjayIsImNoZWNrRW5hYmxlZCIsImNoZWNrRm9jdXNlZCIsImNoZWNrTWQiLCJjaGVja1NtIiwiQ29sbGVjdGlvbiIsIkl0ZW0iLCJ2aWV3cG9ydFRvcCIsInZpZXdwb3J0TGVmdCIsIm1heCIsIml0ZW0iLCJ2aWV3cG9ydFdpZHRoIiwidmlld3BvcnRIZWlnaHQiLCJpdGVtcyIsInBvc2l0aW9uIiwiaWR4IiwicHVzaCIsImxheW91dFN0eWxlcyIsImFueSIsImFycmF5T2YiLCJVUCIsIkRPV04iLCJNSUQiLCJjb2x1bW5MYXlvdXQiLCJudW1PZkNvbHVtbnMiLCJwYWRkaW5nQWxsIiwiZ3V0dGVyIiwicG9zaXRpb25zIiwibWluZGV4IiwibWluSW5kZXgiLCJpIiwiY29sdW1uc0ZvckNvbGxhZ2VXaXRoQ292ZXIiLCJnZXRDb2xsYWdlTGF5b3V0IiwiY292ZXIiLCJudW1Db2xzIiwiY29sdW1ucyIsImgiLCJ3IiwibGF5b3V0S2V5IiwiZ3JpZENvbHMiLCJsYXlvdXRJZHgiLCJjb2xIZWlnaHRzIiwiZmlsbCIsImNvbENvdW50cyIsImNvbCIsImNvbElkeCIsIml0ZW1IZWlnaHQiLCJjb3ZlckltYWdlV2lkdGgiLCJjZWlsIiwidW5zaGlmdCIsIkNvbGxhZ2UiLCJyZW5kZXJJbWFnZSIsImluZGV4IiwiQ29sdW1uIiwieHMiLCJkZXByZWNhdGVkQ29sdW1uIiwic3BhbiIsInNtU3BhbiIsIm1kU3BhbiIsImxnU3BhbiIsIkNvbnRhaW5lciIsIkRpdmlkZXIiLCJkaXZpZGVyIiwiQ2FyZXQiLCJkaXJlY3Rpb24iLCJTUEFDRVNfSU5ERVhfTUFQIiwiRElSX0lOREVYX01BUCIsIk1BUkdJTiIsIkNBUkVUX0hFSUdIVCIsIkNBUkVUX09GRlNFVF9GUk9NX1NJREUiLCJCT1JERVJfUkFESVVTIiwiZ2V0TWFpbkRpciIsImZseW91dFNpemUiLCJpZGVhbERpcmVjdGlvbiIsInRyaWdnZXJSZWN0Iiwid2luZG93U2l6ZSIsInVwIiwiZG93biIsInNwYWNlcyIsIm1haW5EaXIiLCJnZXRTdWJEaXIiLCJvZmZzZXQiLCJ0cmlnZ2VyTWlkIiwid2luZG93U3BhY2VBdmFpbGFibGUiLCJhYm92ZU9yTGVmdCIsImJlbG93T3JSaWdodCIsInN1YkRpciIsImNhbGNFZGdlU2hpZnRzIiwiZmx5b3V0VmVydGljYWxTaGlmdCIsImZseW91dEhvcml6b250YWxTaGlmdCIsImNhcmV0VmVydGljYWxTaGlmdCIsImNhcmV0SG9yaXpvbnRhbFNoaWZ0IiwiaXNDbG9zZVZlcnRpY2FsbHkiLCJpc0Nsb3NlSG9yaXpvbnRhbGx5IiwiYWRqdXN0T2Zmc2V0cyIsImJhc2UiLCJlZGdlU2hpZnQiLCJmbHlvdXRMZWZ0IiwiZmx5b3V0VG9wIiwiY2FyZXRUb3AiLCJjYXJldFJpZ2h0IiwiY2FyZXRCb3R0b20iLCJjYXJldExlZnQiLCJmbHlvdXQiLCJjYXJldCIsImJhc2VPZmZzZXRzIiwicmVsYXRpdmVPZmZzZXQiLCJIQUxGX0NBUkVUIiwic2Nyb2xsWSIsInNjcm9sbFgiLCJDb250ZW50cyIsInNldEZseW91dFBvc2l0aW9uIiwicG9zaXRpb25SZWxhdGl2ZVRvQW5jaG9yIiwicGFnZVhPZmZzZXQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbExlZnQiLCJwYWdlWU9mZnNldCIsInNjcm9sbFRvcCIsImlubmVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsImNsaWVudEhlaWdodCIsImVkZ2VTaGlmdHMiLCJmbHlvdXRPZmZzZXQiLCJjYXJldE9mZnNldCIsInNob3VsZEZvY3VzIiwiZm9jdXMiLCJhZGRFdmVudExpc3RlbmVyIiwib25SZXNpemUiLCJvbktleURvd24iLCJuZXh0UHJvcHMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYmdDb2xvciIsInZpc2liaWxpdHkiLCJiYWNrZ3JvdW5kIiwic3Ryb2tlIiwiYm9yZGVyQ29sb3IiLCJjb250YWluZXIiLCJkaW1lbnNpb25zIiwiY29udGVudHMiLCJpbm5lckNvbnRlbnRzIiwiT3V0c2lkZUV2ZW50QmVoYXZpb3IiLCJoYW5kbGVDbGlja0V2ZW50IiwiZmluZERPTU5vZGUiLCJOb2RlIiwiU0laRV9XSURUSF9NQVAiLCJFU0NBUEVfS0VZX0NPREUiLCJDb250cm9sbGVyIiwiaGFuZGxlS2V5RG93biIsImtleUNvZGUiLCJvbkRpc21pc3MiLCJoYW5kbGVQYWdlQ2xpY2siLCJhbmNob3IiLCJoYW5kbGVSZXNpemUiLCJ1cGRhdGVUcmlnZ2VyUmVjdCIsInRyaWdnZXJCb3VuZGluZ1JlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0VG9wIiwiRmx5b3V0IiwiemlwIiwiYSIsImIiLCJCT1JERVJfV0lEVEgiLCJBVkFUQVJfU0laRVMiLCJhdmF0YXJMYXlvdXQiLCJ0ZXh0TGF5b3V0IiwiZGVnVG9SYWQiLCJkZWciLCJQSSIsInF1YXJ0ZXJQYWRkaW5nIiwic2luIiwiaW5pdGlhbCIsIkdyb3VwQXZhdGFyIiwiY29sbGFib3JhdG9ycyIsImF2YXRhcldpZHRoIiwiYXZhdGFySGVpZ2h0IiwiYm94U2hhZG93IiwiY29sbGFib3JhdG9yIiwiZGVmYXVsdEhlYWRpbmdMZXZlbHMiLCJIZWFkaW5nIiwiYWNjZXNzaWJpbGl0eUxldmVsIiwiaGVhZGluZ0xldmVsIiwiU0laRV9OQU1FX1RPX1BJWEVMIiwiZGVmYXVsdEljb25CdXR0b25JY29uQ29sb3JzIiwiUG9nIiwiaWNvbkNvbG9yIiwiaWNvblNpemUiLCJwb2ciLCJJY29uQnV0dG9uIiwiaGFuZGxlTW91c2VEb3duIiwiaGFuZGxlTW91c2VVcCIsIkxhYmVsIiwiaHRtbEZvciIsImxhYmVsIiwiTGF5ZXIiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJjcmVhdGVQb3J0YWwiLCJhc3BlY3RSYXRpbyIsIkxldHRlcmJveCIsImNvbnRlbnRBc3BlY3RSYXRpbyIsInZpZXdwb3J0QXNwZWN0UmF0aW8iLCJjb250ZW50SGVpZ2h0IiwiY29udGVudFdpZHRoIiwiVEFCX0tFWV9DT0RFIiwiTGluayIsImhyZWYiLCJlbmFibGVGb2N1c1N0eWxlcyIsImhhbmRsZUtleVVwIiwicmVsIiwibGlua1RhcmdldCIsImxpbmsiLCJhY2Nlc3NpYmxlRm9jdXNTdHlsZSIsImRlYm91bmNlIiwidGhyZXNoaG9sZCIsImRlZmVyVGltZXIiLCJkZWJvdW5jZWQiLCJhcmdzIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIkZldGNoSXRlbXMiLCJjb250YWluZXJIZWlnaHQiLCJpc0F0RW5kIiwiaXNGZXRjaGluZyIsImZldGNoTW9yZSIsInNjcm9sbEhlaWdodCIsInNjcm9sbEJ1ZmZlciIsImdldFNjcm9sbENvbnRhaW5lciIsInNjcm9sbENvbnRhaW5lciIsIlNjcm9sbENvbnRhaW5lciIsImdldFNjcm9sbENvbnRhaW5lclJlZiIsImhhbmRsZVNjcm9sbCIsIm9uU2Nyb2xsIiwidXBkYXRlU2Nyb2xsQ29udGFpbmVyIiwibmV4dFNjcm9sbENvbnRhaW5lciIsIm9ubHkiLCJ0aHJvdHRsZSIsImxhc3QiLCJ0aHJvdHRsZWQiLCJub3ciLCJEYXRlIiwiTWVhc3VyZW1lbnRTdG9yZSIsIldlYWtNYXAiLCJnZXQiLCJoYXMiLCJzZXQiLCJnZXRFbGVtZW50SGVpZ2h0IiwiZWxlbWVudCIsImdldFdpbmRvd1Njcm9sbFBvcyIsImdldFJlbGF0aXZlU2Nyb2xsVG9wIiwiZ2V0U2Nyb2xsSGVpZ2h0IiwiZ2V0U2Nyb2xsUG9zIiwiRGVmYXVsdExheW91dFN5bWJvbCIsIlN5bWJvbCIsIlVuaWZvcm1Sb3dMYXlvdXRTeW1ib2wiLCJvZmZzY3JlZW4iLCJJbmZpbml0eSIsImNhY2hlIiwiY29sdW1uV2lkdGgiLCJtaW5Db2xzIiwiY29sdW1uV2lkdGhBbmRHdXR0ZXIiLCJjb2x1bW5Db3VudCIsImZsb29yIiwiaGVpZ2h0cyIsImNlbnRlck9mZnNldCIsImhlaWdodEFuZEd1dHRlciIsInJvdyIsInNsaWNlIiwic3VtIiwiaWRlYWxDb2x1bW5XaWR0aCIsImNvbGd1ZXNzIiwiTWFzb25yeUxheW91dCIsIlVuaWZvcm1Sb3dMYXlvdXQiLCJSRVNJWkVfREVCT1VOQ0UiLCJWSVJUVUFMX0JVRkZFUl9GQUNUT1IiLCJsYXlvdXROdW1iZXJUb0Nzc0RpbWVuc2lvbiIsIk1hc29ucnkiLCJncmlkV3JhcHBlciIsImNsaWVudFdpZHRoIiwidXBkYXRlU2Nyb2xsUG9zaXRpb24iLCJtZWFzdXJlQ29udGFpbmVyQXN5bmMiLCJtZWFzdXJlQ29udGFpbmVyIiwic2V0R3JpZFdyYXBwZXJSZWYiLCJyZWYiLCJzZXRTY3JvbGxDb250YWluZXJSZWYiLCJsb2FkSXRlbXMiLCJyZW5kZXJNYXNvbnJ5Q29tcG9uZW50IiwiaXRlbURhdGEiLCJDb21wb25lbnQiLCJjb21wIiwidmlydHVhbGl6ZSIsInZpcnR1YWxCb3VuZHNUb3AiLCJ2aXJ0dWFsQm91bmRzQm90dG9tIiwiaXNWaXNpYmxlIiwidmlydHVhbEJ1ZmZlciIsIm9mZnNldFNjcm9sbFBvcyIsImNvbnRhaW5lck9mZnNldCIsInZpZXdwb3J0Qm90dG9tIiwiaXRlbUNvbXBvbmVudCIsIk1hc29ucnlfX0l0ZW0iLCJNYXNvbnJ5X19JdGVtX19Nb3VudGVkIiwic29tZSIsIm1lYXN1cmVtZW50U3RvcmUiLCJwcmV2U3RhdGUiLCJyZXNldCIsImhhc1BlbmRpbmdNZWFzdXJlbWVudHMiLCJpbnNlcnRBbmltYXRpb25GcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNjcm9sbENvbnRhaW5lclJlZiIsIkhUTUxFbGVtZW50IiwicmVsYXRpdmVTY3JvbGxUb3AiLCJmb3JjZVVwZGF0ZSIsImZsZXhpYmxlIiwiZ3V0dGVyV2lkdGgiLCJmdWxsV2lkdGhMYXlvdXQiLCJMZWdhY3lVbmlmb3JtUm93TGF5b3V0IiwidW5pZm9ybVJvd0xheW91dCIsImRlZmF1bHRMYXlvdXQiLCJncmlkQm9keSIsImZpbHRlciIsIml0ZW1zVG9SZW5kZXIiLCJpdGVtc1RvTWVhc3VyZSIsIm1lYXN1cmluZ1Bvc2l0aW9ucyIsInBvcyIsImRhdGEiLCJtZWFzdXJlbWVudEluZGV4IiwiaW5zdGFuY2VPZiIsIkxlZ2FjeU1hc29ucnlMYXlvdXQiLCJzeW1ib2wiLCJsYXlvdXRDbGFzcyIsInN0YXRlc0ZvclJlbmRlcmluZyIsInJlbmRlclBvc2l0aW9ucyIsIk1hc29ucnlCZXRhIiwiaGFuZGxlVmlydHVhbGl6YXRpb25XaW5kb3dVcGRhdGUiLCJvblZpcnR1YWxpemF0aW9uV2luZG93VXBkYXRlIiwidmlld3BvcnQiLCJjb250ZW50IiwiaGFuZGxlT25BdXRvTWVhc3VyaW5nVXBkYXRlIiwib25BdXRvTWVhc3VyaW5nVXBkYXRlIiwic3RhdGVXaXRoV2lkdGgiLCJyZW5kZXJpbmdTdGF0ZXMiLCJuZXdTdGF0ZSIsIk1hc29ucnlJbmZpbml0ZUJldGEiLCJzZXRSZWYiLCJncmlkUmVmIiwicmVmbG93IiwiTm9TY3JvbGxCZWhhdmlvciIsInByZXZPdmVyZmxvdyIsInF1ZXJ5Rm9jdXNhYmxlQWxsIiwic2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9jdXNFbGVtZW50IiwiVHJhcEZvY3VzQmVoYXZpb3IiLCJzZXRFbFJlZiIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwiZm9jdXNGaXJzdENoaWxkIiwicHJldmlvdXNseUZvY3VzZWRFbCIsImFjdGl2ZUVsZW1lbnQiLCJCYWNrZHJvcCIsIk1vZGFsIiwiaGFuZGxlT3V0c2lkZUNsaWNrIiwiaGFuZGxlQ2xvc2VDbGljayIsImFjY2Vzc2liaWxpdHlDbG9zZUxhYmVsIiwiYWNjZXNzaWJpbGl0eU1vZGFsTGFiZWwiLCJmb290ZXIiLCJoZWFkaW5nIiwicm9sZSIsIndyYXBwZXIiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsIlB1bHNhciIsInBhdXNlZCIsImlubmVyQ2lyY2xlIiwib3V0ZXJDaXJjbGUiLCJSYWRpb0J1dHRvbiIsIlJhZGlvQnV0dG9uSXNGb2N1c2VkIiwiUmFkaW9CdXR0b25TbSIsIlJhZGlvQnV0dG9uTWQiLCJSYWRpb0J1dHRvbldoaXRlQmciLCJSYWRpb0J1dHRvbkxpZ2h0R3JheUJnIiwiSW5wdXQiLCJJbnB1dEVuYWJsZWQiLCJJbnB1dFNtIiwiSW5wdXRNZCIsIkNoZWNrIiwiQ2hlY2tTbSIsIkNoZWNrTWQiLCJDaGVja0VuYWJsZWQiLCJDaGVja0Rpc2FibGVkIiwiU2Nyb2xsRmV0Y2giLCJ1cGRhdGVQb3NpdGlvbiIsImdldFNjcm9sbFN0YXRlIiwicmVuZGVySGVpZ2h0IiwiU2VhcmNoRmllbGQiLCJoYW5kbGVDbGVhciIsIm9uRm9jdXMiLCJvbkJsdXIiLCJhdXRvQ29tcGxldGUiLCJwbGFjZWhvbGRlciIsInNob3dDbGVhciIsImNsZWFyIiwiU2VnbWVudGVkQ29udHJvbCIsInNlbGVjdGVkSXRlbUluZGV4IiwiaXNTZWxlY3RlZCIsIml0ZW1Jc05vdFNlbGVjdGVkIiwiaXRlbUlzU2VsZWN0ZWQiLCJlIiwiYWN0aXZlSW5kZXgiLCJTZWxlY3RMaXN0IiwiaGFuZGxlT25DaGFuZ2UiLCJIVE1MU2VsZWN0RWxlbWVudCIsImVycm9yTWVzc2FnZSIsImVycm9ySXNPcGVuIiwiaWRlYWxFcnJvckRpcmVjdGlvbiIsIm9wdGlvbnMiLCJzZWxlY3QiLCJlcnJvcmVkIiwibm9ybWFsIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZ1RvcCIsIm9wdGlvbiIsIlNJWkUiLCJTcGlubmVyIiwic2hvdyIsIlN0aWNreSIsImRhbmdlcm91c2x5U2V0WkluZGV4IiwiX196SW5kZXgiLCJzdGlja3kiLCJTd2l0Y2giLCJzd2l0Y2hlZCIsInN3aXRjaFN0eWxlcyIsInN3aXRjaCIsInN3aXRjaEdyYXkiLCJzd2l0Y2hMaWdodEdyYXkiLCJzd2l0Y2hEYXJrR3JheSIsInN3aXRjaFdoaXRlIiwic2xpZGVyU3R5bGVzIiwic2xpZGVyIiwic2xpZGVyUmlnaHQiLCJzbGlkZXJMZWZ0Iiwic2xpZGVyRGFyayIsInNsaWRlckxpZ2h0IiwiaW5wdXRTdHlsZXMiLCJjaGVja2JveCIsImNoZWNrYm94RW5hYmxlZCIsIlRhYnMiLCJoYW5kbGVUYWJDbGljayIsImFjdGl2ZVRhYkluZGV4IiwiaGFuZGxlVGFiRm9jdXMiLCJmb2N1c2VkVGFiSW5kZXgiLCJoYW5kbGVUYWJCbHVyIiwiaGFuZGxlVGFiTW91c2VFbnRlciIsImhvdmVyZWRUYWJJbmRleCIsImhhbmRsZVRhYk1vdXNlTGVhdmUiLCJ0YWJzIiwid3JhcCIsImlzQWN0aXZlIiwiaXNIb3ZlcmVkIiwiaXNGb2N1c2VkIiwidGFiIiwidGFiSXNOb3RBY3RpdmUiLCJ0YWJJc0FjdGl2ZSIsIlRleHRBcmVhIiwicm93cyIsInRleHRBcmVhIiwidGV4dGFyZWEiLCJUZXh0RmllbGQiLCJ0ZXh0RmllbGQiLCJwYXR0ZXJuIiwidGV4dGZpZWxkIiwiVG9hc3QiLCJ0aHVtYm5haWwiLCJmb250V2VpZ2h0IiwiVG9vbHRpcCIsIlNQQUNFX0NIQVJfQ09ERSIsIkVOVEVSX0NIQVJfQ09ERSIsIlRvdWNoYWJsZSIsImhhbmRsZUtleVByZXNzIiwib25Ub3VjaCIsImNoYXJDb2RlIiwiZnVsbFdpZHRoIiwiZnVsbEhlaWdodCIsIm1vdXNlQ3Vyc29yIiwidG91Y2hhYmxlIiwiVmlkZW9QbGF5aGVhZCIsInNldFBsYXloZWFkUmVmIiwicGxheWhlYWQiLCJzZWVrIiwiY2xpZW50WCIsImR1cmF0aW9uIiwicGVyY2VudCIsIm1pbiIsIm5ld1RpbWUiLCJzdG9wQ2xpY2siLCJzZWVraW5nIiwiaGFuZGxlTW91c2VNb3ZlIiwiY3VycmVudFRpbWUiLCJmdWxsc2NyZWVuRW5hYmxlZCIsIndlYmtpdEZ1bGxzY3JlZW5FbmFibGVkIiwibW96RnVsbFNjcmVlbkVuYWJsZWQiLCJtc0Z1bGxzY3JlZW5FbmFibGVkIiwidGltZVRvU3RyaW5nIiwidGltZSIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWludXRlc1N0ciIsInNlY29uZHNTdHIiLCJWaWRlb0NvbnRyb2xzIiwiaGFuZGxlRnVsbHNjcmVlbkNoYW5nZSIsIm9uRnVsbHNjcmVlbkNoYW5nZSIsImhhbmRsZVBsYXlpbmdDaGFuZ2UiLCJwbGF5aW5nIiwib25QYXVzZSIsIm9uUGxheSIsImhhbmRsZVZvbHVtZUNoYW5nZSIsIm9uVm9sdW1lQ2hhbmdlIiwiYWNjZXNzaWJpbGl0eU1heGltaXplTGFiZWwiLCJhY2Nlc3NpYmlsaXR5TWluaW1pemVMYWJlbCIsImFjY2Vzc2liaWxpdHlNdXRlTGFiZWwiLCJhY2Nlc3NpYmlsaXR5UGF1c2VMYWJlbCIsImFjY2Vzc2liaWxpdHlQbGF5TGFiZWwiLCJhY2Nlc3NpYmlsaXR5VW5tdXRlTGFiZWwiLCJmdWxsc2NyZWVuIiwidm9sdW1lIiwibXV0ZWQiLCJzaG93RnVsbHNjcmVlbkJ1dHRvbiIsImNvbnRyb2xzIiwicmVxdWVzdEZ1bGxzY3JlZW4iLCJ3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbiIsIm1velJlcXVlc3RGdWxsU2NyZWVuIiwibXNSZXF1ZXN0RnVsbHNjcmVlbiIsImV4aXRGdWxsc2NyZWVuIiwid2Via2l0RXhpdEZ1bGxzY3JlZW4iLCJtb3pDYW5jZWxGdWxsU2NyZWVuIiwibXNFeGl0RnVsbHNjcmVlbiIsImlzRnVsbHNjcmVlbiIsImZ1bGxzY3JlZW5FbGVtZW50Iiwid2Via2l0RnVsbHNjcmVlbkVsZW1lbnQiLCJtb3pGdWxsU2NyZWVuRWxlbWVudCIsIm1zRnVsbHNjcmVlbkVsZW1lbnQiLCJhZGRGdWxsc2NyZWVuRXZlbnRMaXN0ZW5lciIsImxpc3RlbmVyIiwicmVtb3ZlRnVsbHNjcmVlbkV2ZW50TGlzdGVuZXIiLCJpc05ld1NvdXJjZSIsIm9sZFNvdXJjZSIsIm5ld1NvdXJjZSIsImlzQXJyYXkiLCJzb3VyY2UiLCJWaWRlbyIsInNldFBsYXllclJlZiIsInBsYXllciIsInNldFZpZGVvUmVmIiwidmlkZW8iLCJzZXRQbGF5YmFja1JhdGUiLCJwbGF5YmFja1JhdGUiLCJzZXRWb2x1bWUiLCJsb2FkIiwicGF1c2UiLCJwbGF5IiwidG9nZ2xlRnVsbHNjcmVlbiIsImhhbmRsZUNhblBsYXkiLCJvblJlYWR5IiwiaGFuZGxlRHVyYXRpb25DaGFuZ2UiLCJvbkR1cmF0aW9uQ2hhbmdlIiwiaGFuZGxlRW5kZWQiLCJvbkVuZGVkIiwiaGFuZGxlUGxheSIsImhhbmRsZVBhdXNlIiwiaGFuZGxlUHJvZ3Jlc3MiLCJvbkxvYWRlZENoYW5nZSIsImJ1ZmZlcmVkIiwibG9hZGVkIiwiZW5kIiwiaGFuZGxlU2VlayIsIm9uU2VlayIsImhhbmRsZVRpbWVVcGRhdGUiLCJvblRpbWVDaGFuZ2UiLCJjYXB0aW9ucyIsImxvb3AiLCJwbGF5c0lubGluZSIsInBvc3RlciIsInByZWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQSxBQUFPLElBQU1BLFdBQVcsU0FBWEEsUUFBVztTQUFjO2VBQ3pCLElBQUlDLEdBQUosRUFEeUI7aUJBRXZCO0dBRlM7Q0FBakI7Ozs7OztBQUtQLEFBQU8sSUFBTUMsZ0JBQWdCLFNBQWhCQSxhQUFnQjtvQ0FBSUMsVUFBSjtjQUFBOzs7U0FBMEM7ZUFDMUQsSUFBSUYsR0FBSixDQUFRRSxVQUFSLENBRDBEO2lCQUV4RDtHQUZjO0NBQXRCOztBQUtQLEFBQU8sSUFBTUMs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
