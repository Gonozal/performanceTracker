// @flow
import React, { Component } from 'react';

import bronzeIcon        from '../../resources/icons/overwatch/rank/Badge_1_Bronze.png';
import silverIcon        from '../../resources/icons/overwatch/rank/Badge_2_Silver.png';
import goldIcon          from '../../resources/icons/overwatch/rank/Badge_3_Gold.png';
import platinumIcon      from '../../resources/icons/overwatch/rank/Badge_4_Platinum.png';
import diamondIcon       from '../../resources/icons/overwatch/rank/Badge_5_Diamond.png';
import masterIcon        from '../../resources/icons/overwatch/rank/Badge_6_Master.png';
import grandMasterIcon   from '../../resources/icons/overwatch/rank/Badge_7_Grandmaster.png';

type Props = {
  rank: number,
  inline?: boolean,
  hideSr?: boolean,
  hideText?: boolean
};


export default class Rank extends Component<Props> {
  props: Props;
  static defaultProps = {
    inline: false,
    hideSr: false,
    hideText: false
  };

  rankImage(alt, src){
    if(this.props.inline){
      return this.inlineRankImage(alt, src);
    }
    return this.multilineRankImage(alt, src);
  }

  rankString(){
    if(this.props.hideText){
      return null
    }
    return (
      this.props.hideSr? `${this.props.rank}` : `${this.props.rank} SR`
    )
  }

  inlineRankImage(alt, src){
    return(
      <span>
        <span style={{maxWidth: 16, display: "inline-block"}}>
          <img className="img-fluid" alt={alt} src={src} />
        </span>
        <span style={{display: "inline-block"}}>
          { this.rankString() }
        </span>
      </span>
    )
  }

  multilineRankImage(alt, src){
    return(
      <div className="row">
        <div className="col-12" >
          <img className="img-fluid" style={{maxHeight: 65}} alt={alt} src={src} />
        </div>
        <div className="col-12" >
          { this.rankString() }
        </div>
      </div>
    )
  }

  render() {
    const { rank } = this.props;
    if(rank < 1500){
      return(this.rankImage("bronzeIcon", bronzeIcon))
    } else if(rank < 2000){
      return(this.rankImage("silverIcon", silverIcon))
    } else if(rank < 2500){
      return(this.rankImage("goldIcon", goldIcon))
    } else if(rank < 3000){
      return(this.rankImage("platinumIcon", platinumIcon))
    } else if(rank < 3500){
      return(this.rankImage("diamondIcon", diamondIcon))
    } else if(rank < 4000){
      return(this.rankImage("masterIcon", masterIcon))
    }
    return(this.rankImage("grandMasterIcon", grandMasterIcon))
  }
}
