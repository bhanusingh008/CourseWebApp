package com.work.work.CourseService;

import com.work.work.Models.Course;
import com.work.work.Repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseServiceIMP implements CourseService{

    @Autowired // creating an instance of interface directly without creating a class....@Autowired
    private CourseRepository courseRepository;

    //  List<Course> list;

    public CourseServiceIMP(){
//        list = new ArrayList<>();
//        list.add(new Course(10, "DSA", "Advance Level"));
//        list.add(new Course(20, "JAVA", "From basics to Advance"));
    }

    @Override
    public List<Course> getCourses(){
//        return list;
        return courseRepository.findAll();
    }

    @Override
    public Course getCourse(long courseid){
//        for(Course course : list){
//            if(course.getId() == courseid){
//                return course;
//            }
//        }
//        return null;
        return courseRepository.findById(courseid).get();
    }

    @Override
    public Course addCourse(Course course){
//        list.add(course);
//        return course;
        courseRepository.save(course);
        return course;
    }

    @Override
    public Course updateCourse(Course course){
//        list.forEach(e -> {
//            if(e.getId() == course.getId()){
//                e.setTitle(course.getTitle());
//                e.setDescription(course.getDescription());
//            }
//        });
//        return course;
        courseRepository.save(course);
        return course;
    }

    @Override
    public void deleteCourse(long id){
//      list = this.list.stream().filter(e -> e.getId()!=id).collect(Collectors.toList());
        Course entity = courseRepository.findById(id).get();
        courseRepository.delete(entity);
    }

}
