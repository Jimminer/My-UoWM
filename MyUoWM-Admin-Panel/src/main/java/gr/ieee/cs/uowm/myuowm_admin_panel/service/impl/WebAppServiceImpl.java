package gr.ieee.cs.uowm.myuowm_admin_panel.service.impl;

import gr.ieee.cs.uowm.myuowm_admin_panel.model.Club;
import gr.ieee.cs.uowm.myuowm_admin_panel.model.DinnerPlan;
import gr.ieee.cs.uowm.myuowm_admin_panel.model.Personal;
import gr.ieee.cs.uowm.myuowm_admin_panel.model.TimeTable;
import gr.ieee.cs.uowm.myuowm_admin_panel.repository.MyUoWmAdminPanelClubRepository;
import gr.ieee.cs.uowm.myuowm_admin_panel.repository.MyUoWmAdminPanelDinnerPlanRepository;
import gr.ieee.cs.uowm.myuowm_admin_panel.repository.MyUoWmAdminPanelPersonalRepository;
import gr.ieee.cs.uowm.myuowm_admin_panel.repository.MyUoWmAdminPanelTimeTableRepository;
import gr.ieee.cs.uowm.myuowm_admin_panel.service.WebAppService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WebAppServiceImpl implements WebAppService {

    MyUoWmAdminPanelClubRepository clubRepository;
    MyUoWmAdminPanelDinnerPlanRepository dinnerPlanRepository;
    MyUoWmAdminPanelPersonalRepository personalRepository;
    MyUoWmAdminPanelTimeTableRepository timeTableRepository;


    public void saveTimeTable(String url) {
        TimeTable timeTable = new TimeTable();
        timeTable.setUrl(url);
        timeTableRepository.save(timeTable);
    }
    @Override
    public String getTimeTable() {
        Optional<TimeTable> optionalTimeTable = timeTableRepository.findTopByOrderByIdDesc();
        if(optionalTimeTable.isPresent()) {
            return optionalTimeTable.get().getUrl();
        } else {
            //TODO throw error
            return null;
        }
    }

    public void saveDinnerPlan(String url) {
        DinnerPlan dinnerPlan = new DinnerPlan();
        dinnerPlan.setUrl(url);
        dinnerPlanRepository.save(dinnerPlan);
    }
    @Override
    public String getDinnerPlan() {
        Optional<DinnerPlan> optionalDinnerPlan = dinnerPlanRepository.findTopByOrderByIdDesc();
        if(optionalDinnerPlan.isPresent()) {
            return optionalDinnerPlan.get().getUrl();
        } else {
            //TODO throw error
            return null;
        }
    }

    @Override
    public List<Personal> getAllPersonal() {
        return personalRepository.findAll();
    }

    @Override
    public Personal getPersonal(String id) {
        if(personalRepository.findById(id).isEmpty())
            //change system.out to custom Exception
            System.out.println("Error");
        return personalRepository.findById(id).get();
    }

    @Override
    public List<Club> getAllClubs() {
        return clubRepository.findAll();
    }

    @Override
    public Club getClub(String id) {
        if(clubRepository.findById(id).isEmpty())
            //change system.out to custom Exception
            System.out.println("Error");
        return clubRepository.findById(id).get();
    }
}
