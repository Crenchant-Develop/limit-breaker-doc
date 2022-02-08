import DocumentPage from './main/DocumentPage';
import Spell from './asset/spell.md';
import './css/md.css';


function MDTest() {
  
  return <DocumentPage titleName="타이틀" comment="주석" textFile={MDTest.resources.textResources[0]} />
}

MDTest.resources = {
  textResources : [ Spell ],
};

export default MDTest;