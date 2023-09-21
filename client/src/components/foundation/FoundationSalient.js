import SalientFeaturesCard from "./SalientFeaturesCard";
import Groups3Icon from '@mui/icons-material/Groups3';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import SchoolIcon from '@mui/icons-material/School';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import ArticleIcon from '@mui/icons-material/Article';
import StairsIcon from '@mui/icons-material/Stairs';
import AssignmentIcon from '@mui/icons-material/Assignment';

function FoundationSalient() {
  return (
    <div className="pt-10 pb-8 bg-yellow-200 bg-opacity-80">
      <div className="text-2xl md:text-[30px] font-bold pb-5">Salient Features</div>
      <div className="p-5  rounded-xl grid grid-cols-1 sm:grid-col-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">

        <SalientFeaturesCard logo={<Groups3Icon sx={{ fontSize: '60px' }} />} heading="Regular PTMs (Parents-Teacher Meetings)" title="PTMs is a short meeting or conference between the parents and teachers of students to discuss a child's progress  and find solutions to academic or behavioral problems." />

        <SalientFeaturesCard logo={<SaveAsIcon sx={{ fontSize: '60px' }} />} heading="Assessment" title="Regular skill based tests and board type papers as per latest blueprints of STATE/CBSE/ICSE." />

        <SalientFeaturesCard logo={<AutoStoriesIcon sx={{ fontSize: '60px' }} />} heading="Course Content" title="Focused and concise course materials developed by some of the most experienced professionals in the field of competitive training." />

        <SalientFeaturesCard logo={<SchoolIcon sx={{ fontSize: '60px' }} />} heading="Class frequency-6 days a week" title="We conduct classes from Monday to Saturday. TImings are form 8:00 AM to 1:15 PM." />

        <SalientFeaturesCard logo={<QuestionMarkIcon sx={{ fontSize: '60px' }} />} heading="Doubt Classes" title="Doubts can be dangerous. Thus, we conduct regular doubt classes for discussions so that a student is doubt free." />

        <SalientFeaturesCard logo={<ArticleIcon sx={{ fontSize: '60px' }} />} heading="Paper Discussion" title="We hold paper discussion right after every exam so that students can analyse their mistakes and clear their doubts further." />

        <SalientFeaturesCard logo={<StairsIcon sx={{ fontSize: '60px' }} />} heading="Level wise Exercises" title="Our exercises have been divided into sections such as JEE Main/Adv, integer type, subjective type etc which gradually increase in difficulty level so that you cover every aspect. Our exercises contain 20,000+ questions so that no stone is left unturned." />

        <SalientFeaturesCard logo={<AssignmentIcon sx={{ fontSize: '60px' }} />} heading="Best Practices" title="BASE training focuses on good concept teaching, logic of problem solving and solving MCQs. This is the key takeaway from a BASE course. It stays for life." />

      </div>
    </div>
  );
}

export default FoundationSalient;
