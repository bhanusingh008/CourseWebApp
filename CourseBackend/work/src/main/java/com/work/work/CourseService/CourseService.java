package com.work.work.CourseService;

import com.work.work.Models.Course;

import java.util.List;

public interface CourseService {
    public List<Course> getCourses();

    public Course getCourse(long id);

    public Course addCourse(Course course);

    public  Course updateCourse(Course course);

    public void deleteCourse(long id);
}
