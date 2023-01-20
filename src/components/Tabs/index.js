
import './index.css'


const Tabs = (props) =>{
    const{tabItem,onChangeProject,isActive} = props;
    const{tabId,displayText} = tabItem;
    const onClickButton =() =>{   
        onChangeProject(tabId);
    }
    const buttonClicked = isActive?'clicked':''
        return (
            <li className="tab-item">
                <button type="button" className={`tab-button ${buttonClicked}`} onClick={onClickButton}>{displayText}</button>
            </li>
        )
    

}

export default Tabs;